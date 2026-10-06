import { fireEvent, render, screen } from "@testing-library/react";
import { createMemoryHistory, createRouter, RouterProvider } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import { afterEach, describe, expect, it, vi } from "vitest";

import { bridgeConversionEvents, CONVERSION_EVENT, trackEvent } from "@/lib/analytics";
import { routeTree } from "@/routeTree.gen";
import { contactDetails, getWhatsAppUrl, messages } from "@/routes/index";

async function renderHome() {
  const router = createRouter({
    routeTree,
    context: { queryClient: new QueryClient() },
    history: createMemoryHistory({ initialEntries: ["/"] }),
  });
  await router.load();
  return render(<RouterProvider router={router} />);
}

afterEach(() => vi.restoreAllMocks());

describe("conversion links", () => {
  it("uses the real WhatsApp number, with no placeholder left", () => {
    expect(contactDetails.whatsappNumber).toMatch(/^237\d{9}$/);
    expect(contactDetails.whatsappNumber).toBe(contactDetails.phoneLink.replace("+", ""));
    expect(getWhatsAppUrl(messages.demo)).toBe(
      `https://wa.me/${contactDetails.whatsappNumber}?text=${encodeURIComponent(messages.demo)}`,
    );
  });
});

describe("analytics bridge", () => {
  it("forwards conversion events to dataLayer and plausible", () => {
    const w = window as unknown as Record<string, unknown>;
    const dataLayer: unknown[] = [];
    const plausible = vi.fn();
    w["dataLayer"] = dataLayer;
    w["plausible"] = plausible;

    const stop = bridgeConversionEvents();
    trackEvent("whatsapp_click", "hero");
    stop();
    trackEvent("whatsapp_click", "ignored");

    expect(dataLayer).toEqual([{ event: "whatsapp_click", source: "hero" }]);
    expect(plausible).toHaveBeenCalledTimes(1);
    expect(CONVERSION_EVENT).toBe("brayano:conversion");
    delete w["dataLayer"];
    delete w["plausible"];
  });
});

describe("landing page", () => {
  it("renders the WhatsApp CTAs with the real number and tracks clicks", async () => {
    await renderHome();
    const cta = screen.getAllByRole("link", { name: /demander une démo/i })[0]!;
    expect(cta.getAttribute("href")).toContain(`wa.me/${contactDetails.whatsappNumber}`);

    const listener = vi.fn();
    window.addEventListener(CONVERSION_EVENT, listener);
    fireEvent.click(cta);
    window.removeEventListener(CONVERSION_EVENT, listener);
    expect(listener).toHaveBeenCalledTimes(1);
  });

  it("never shows placeholder pricing", async () => {
    await renderHome();
    expect(screen.queryByText(/à définir/i)).toBeNull();
    expect(screen.getAllByText("Sur devis")).toHaveLength(3);
  });

  it("toggles the mobile menu and closes it with Escape", async () => {
    await renderHome();
    const toggle = screen.getByRole("button", { name: "Ouvrir le menu" });
    fireEvent.click(toggle);
    expect(screen.getByRole("navigation", { name: "Navigation mobile" })).toBeTruthy();
    expect(toggle.getAttribute("aria-expanded")).toBe("true");
    fireEvent.keyDown(window, { key: "Escape" });
    expect(screen.queryByRole("navigation", { name: "Navigation mobile" })).toBeNull();
  });

  it("expands a FAQ answer", async () => {
    await renderHome();
    const question = screen.getByRole("button", { name: /combien coûte brayano ia/i });
    fireEvent.click(question);
    expect(await screen.findByText(/établie sur devis/i)).toBeTruthy();
  });
});
