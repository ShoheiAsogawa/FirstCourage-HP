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
      ? "bg-fog bg-pattern"
      : tone === "navy"
        ? "bg-navy text-white"
        : "bg-linen";

  const headAlign = align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";

  return (
    <section id={id} className={`${toneClass} py-16 sm:py-24`}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        {title ? (
          <div className={`mb-10 ${headAlign}`}>
            {eyebrow ? (
              <p className="mb-3 text-sm font-bold tracking-[0.12em] text-gold">{eyebrow}</p>
            ) : null}
            <h2 className="font-serif text-2xl font-bold leading-tight text-inherit sm:text-4xl">
              {title}
            </h2>
            {lead ? (
              <p className={`mt-4 leading-8 ${tone === "navy" ? "text-white/78" : "text-ink/68"}`}>
                {lead}
              </p>
            ) : null}
            <div className="mt-6 h-[2px] w-12 rounded-full bg-gold/60" />
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
