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
    <section className="relative overflow-hidden border-b border-crimson/8 bg-gradient-to-b from-fog via-white to-fog py-16 sm:py-24">
      <div className="absolute inset-0 bg-dots" />
      <div className="absolute top-0 left-1/2 h-[280px] w-[500px] -translate-x-1/2 rounded-full bg-crimson/3 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <p className="mb-4 inline-flex items-center gap-3 text-xs font-bold tracking-[0.15em] text-crimson">
          <span className="h-px w-8 bg-crimson/40" aria-hidden />
          {eyebrow}
        </p>
        <h1 className="max-w-4xl font-serif text-3xl font-bold leading-tight text-charcoal sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl leading-8 text-ink/74">{lead}</p>
      </div>
    </section>
  );
}
