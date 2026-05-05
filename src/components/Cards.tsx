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
    <div className="h-full rounded-lg border border-ink/10 bg-white p-5 shadow-sm transition hover:border-gold">
      {Icon ? (
        <div className="mb-4 flex size-11 items-center justify-center rounded-md bg-fog text-navy">
          <Icon aria-hidden size={22} />
        </div>
      ) : null}
      <h3 className="text-lg font-bold text-navy">{title}</h3>
      <p className="mt-3 leading-7 text-ink/70">{body}</p>
      {href ? (
        <p className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-gold">
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
