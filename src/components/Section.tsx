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
      ? "bg-fog bg-dots"
      : tone === "navy"
        ? "bg-charcoal text-white"
        : "bg-white";

  const headAlign = align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";

  return (
    <section id={id} className={`${toneClass} relative py-16 sm:py-24`}>
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6">
        {title ? (
          <div className={`mb-10 ${headAlign}`}>
            {eyebrow ? (
              <p
                className={`mb-4 inline-flex items-center gap-3 text-xs font-bold tracking-[0.15em] ${
                  tone === "navy" ? "text-white/70" : "text-crimson"
                }`}
              >
                <span className={`h-px w-8 ${tone === "navy" ? "bg-white/30" : "bg-crimson/40"}`} aria-hidden />
                {eyebrow}
              </p>
            ) : null}
            <h2 className="font-serif text-2xl font-bold leading-tight text-inherit sm:text-4xl">
              {title}
            </h2>
            {lead ? (
              <p className={`mt-5 leading-8 ${tone === "navy" ? "text-white/72" : "text-charcoal/62"}`}>
                {lead}
              </p>
            ) : null}
            <div className={`mt-6 h-[3px] w-10 rounded-full ${tone === "navy" ? "bg-white/20" : "bg-gradient-to-r from-crimson to-crimson-glow"}`} />
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
