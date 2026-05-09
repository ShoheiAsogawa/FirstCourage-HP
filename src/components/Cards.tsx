import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export function DecorativeIcon({
  icon: Icon,
  className = "",
  size = 190
}: {
  icon: LucideIcon;
  className?: string;
  size?: number;
}) {
  return (
    <Icon
      aria-hidden
      size={size}
      strokeWidth={1.05}
      className={`pointer-events-none absolute -bottom-10 -right-10 z-0 text-gold opacity-[0.075] ${className}`}
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
    <div className="group relative h-full overflow-hidden rounded-lg border border-gold-soft/55 bg-white p-5 shadow-sm transition hover:border-gold">
      {Icon ? (
        <DecorativeIcon icon={Icon} className="transition group-hover:opacity-[0.12]" />
      ) : null}
      <div className="relative z-10">
        <h3 className="text-lg font-bold text-navy">{title}</h3>
        <p className="mt-3 leading-7 text-ink/70">{body}</p>
      </div>
      {href ? (
        <p className="relative z-10 mt-4 inline-flex items-center gap-2 text-sm font-bold text-gold">
          詳しく見る <ArrowRight aria-hidden size={16} />
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
          className="rounded-full border border-gold-soft bg-white px-4 py-2 text-sm font-bold text-navy"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
