export const CONVERSION_EVENT = "brayano:conversion";

export type ConversionDetail = { name: string; source: string };

type AnalyticsWindow = Window & {
  dataLayer?: Record<string, unknown>[];
  gtag?: (command: "event", name: string, params: Record<string, unknown>) => void;
  plausible?: (name: string, options: { props: Record<string, unknown> }) => void;
  fbq?: (command: "trackCustom", name: string, params: Record<string, unknown>) => void;
};

/** Emits a conversion event that analytics tools (and tests) can listen to. */
export function trackEvent(name: string, source: string) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent<ConversionDetail>(CONVERSION_EVENT, { detail: { name, source } }),
  );
}

/**
 * Forwards conversion events to whichever analytics tool is loaded on the page
 * (Google Tag Manager / GA4, Plausible, Meta Pixel). Tools that are absent are
 * ignored, so adding a script tag is all that is needed to start collecting data.
 * Returns a cleanup function.
 */
export function bridgeConversionEvents() {
  if (typeof window === "undefined") return () => undefined;

  const handler = (event: Event) => {
    const { name, source } = (event as CustomEvent<ConversionDetail>).detail;
    const w = window as AnalyticsWindow;
    const params = { source };

    w.dataLayer?.push({ event: name, ...params });
    w.gtag?.("event", name, params);
    w.plausible?.(name, { props: params });
    w.fbq?.("trackCustom", name, params);
  };

  window.addEventListener(CONVERSION_EVENT, handler);
  return () => window.removeEventListener(CONVERSION_EVENT, handler);
}
