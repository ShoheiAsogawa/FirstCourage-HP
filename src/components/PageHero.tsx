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
    <section className="bg-fog py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="mb-3 text-sm font-bold tracking-[0.08em] text-gold">{eyebrow}</p>
        <h1 className="max-w-4xl font-serif text-3xl font-bold leading-tight text-navy sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl leading-8 text-ink/74">{lead}</p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <LineButton />
          <PhoneButton />
        </div>
      </div>
    </section>
  );
}
