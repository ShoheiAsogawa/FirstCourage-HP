import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
  tone = "white",
  align = "left"
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  lead?: string;
  children: ReactNode;
  tone?: "white" | "fog" | "navy";
  align?: "left" | "center";
}) {
  const toneClass =
    tone === "fog"
      ? "bg-fog"
      : tone === "navy"
        ? "bg-charcoal text-white"
        : "bg-white";

  const headAlign = align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";

  return (
    <section id={id} className={`${toneClass} relative py-14 sm:py-20`}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        {title ? (
          <div className={`mb-8 ${headAlign}`}>
            {eyebrow ? (
              <p
                className={`mb-3 inline-flex items-center gap-2 text-sm font-bold tracking-[0.08em] ${
                  tone === "navy" ? "text-white/86" : "text-crimson"
                }`}
              >
                <span
                  className={`h-px w-7 ${tone === "navy" ? "bg-white/50" : "bg-gold"}`}
                  aria-hidden
                />
                {eyebrow}
              </p>
            ) : null}
            <h2 className="font-serif text-2xl font-bold leading-tight text-inherit sm:text-4xl">
              {title}
            </h2>
            {lead ? (
              <p className={`mt-4 leading-8 ${tone === "navy" ? "text-white/82" : "text-ink/72"}`}>
                {lead}
              </p>
            ) : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
