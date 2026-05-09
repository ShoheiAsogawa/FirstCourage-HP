import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

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
    <div className="card-lift h-full rounded-xl border border-ink/8 bg-white p-6 shadow-card">
      {Icon ? (
        <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-fog to-gold-light text-navy shadow-sm">
          <Icon aria-hidden size={22} />
        </div>
      ) : null}
      <h3 className="text-lg font-bold text-navy">{title}</h3>
      <p className="mt-3 leading-7 text-ink/68">{body}</p>
      {href ? (
        <p className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-gold transition-colors group-hover:text-navy">
          詳しく見る <ArrowRight aria-hidden size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
        </p>
      ) : null}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="group">
        {content}
      </Link>
    );
  }

  return content;
}

export function PillList({ items }: { items: readonly string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-gold-soft/70 bg-white px-4 py-2 text-sm font-bold text-navy shadow-sm transition-colors duration-200 hover:border-gold hover:bg-gold-light"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
