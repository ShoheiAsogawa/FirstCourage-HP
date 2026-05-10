import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export function DecorativeIcon({
  icon: Icon,
  className = "",
  size = 160
}: {
  icon: LucideIcon;
  className?: string;
  size?: number;
}) {
  return (
    <Icon
      aria-hidden
      size={size}
      strokeWidth={0.8}
      className={`pointer-events-none absolute -bottom-8 -right-8 z-0 text-crimson opacity-[0.04] transition-opacity duration-500 group-hover:opacity-[0.08] ${className}`}
    />
  );
}

export function InfoCard({
  title,
  body,
  icon: Icon,
  href
}: {
  title: string;
  body: string;
  icon?: LucideIcon;
  href?: string;
}) {
  const content = (
    <div className="card-luxury group relative h-full overflow-hidden rounded-2xl border border-charcoal/8 bg-white p-6 shadow-card">
      {Icon ? (
        <DecorativeIcon icon={Icon} />
      ) : null}
      <div className="relative z-10">
        {Icon ? (
          <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-crimson-light/60 to-crimson-light/20 text-crimson shadow-sm">
            <Icon aria-hidden size={22} strokeWidth={1.8} />
          </div>
        ) : null}
        <h3 className="text-lg font-bold text-charcoal">{title}</h3>
        <p className="mt-3 leading-7 text-charcoal/62">{body}</p>
      </div>
      {href ? (
        <p className="relative z-10 mt-5 inline-flex items-center gap-2 text-sm font-bold text-crimson transition-colors group-hover:text-crimson-dark">
          詳しく見る
          <ArrowRight aria-hidden size={15} className="transition-transform duration-300 group-hover:translate-x-1.5" />
        </p>
      ) : null}
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}

export function PillList({ items }: { items: readonly string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-crimson/12 bg-white px-4 py-2 text-sm font-bold text-charcoal shadow-sm transition-colors duration-200 hover:border-crimson/30 hover:bg-crimson-light/30"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
