import { Check } from "lucide-react";
import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  body,
  dark = false,
  center = false,
}: {
  eyebrow: string;
  title: string;
  body?: ReactNode;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={dark ? "eyebrow eyebrow-dark" : "eyebrow"}>{eyebrow}</p>
      <h2 className="section-title mt-4">{title}</h2>
      {body && (
        <p
          className={`mt-5 text-lg leading-8 ${dark ? "text-ink-muted" : "text-muted-foreground"}`}
        >
          {body}
        </p>
      )}
    </div>
  );
}

export function Comparison({
  title,
  items,
  featured = false,
}: {
  title: string;
  items: readonly string[];
  featured?: boolean;
}) {
  return (
    <div className={featured ? "comparison comparison-featured" : "comparison"}>
      <p className="text-sm font-semibold">{title}</p>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-muted-foreground">
            <Check
              className={`mt-0.5 size-4 shrink-0 ${featured ? "text-primary" : "text-muted-foreground"}`}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
