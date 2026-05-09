import { LineButton, PhoneButton } from "@/components/ButtonLink";

export function PageHero({
  eyebrow,
  title,
  lead
}: {
  eyebrow: string;
  title: string;
  lead: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-fog via-fog to-linen py-16 sm:py-24">
      <div className="absolute inset-0 bg-pattern" />
      <div className="absolute top-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-gold-soft/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <p className="mb-4 text-sm font-bold tracking-[0.12em] text-gold">{eyebrow}</p>
        <h1 className="max-w-4xl font-serif text-3xl font-bold leading-tight text-navy sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl leading-8 text-ink/68">{lead}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <LineButton />
          <PhoneButton />
        </div>
      </div>
    </section>
  );
}
