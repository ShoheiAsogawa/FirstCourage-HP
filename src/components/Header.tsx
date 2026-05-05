import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { company, navItems } from "@/data/site";
import { LineButton } from "@/components/ButtonLink";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-linen/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="min-w-0 whitespace-nowrap">
          <p className="font-serif text-base font-bold tracking-wide text-navy sm:text-xl">
            {company.name}
          </p>
          <p className="mt-0.5 text-[11px] font-bold text-ink/58 sm:text-xs">ブランド品買取・全国催事対応</p>
        </Link>
        <nav className="hidden items-center gap-5 lg:flex" aria-label="主要ナビゲーション">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-bold text-ink/72 transition hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Link
            href={`tel:${company.phone}`}
            className="inline-flex min-h-11 items-center gap-2 rounded-md border border-navy/15 bg-white px-3 text-sm font-bold text-navy"
          >
            <Phone aria-hidden size={16} />
            {company.phone}
          </Link>
          <LineButton label="LINE査定" />
        </div>
        <details className="lg:hidden">
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-center rounded-md border border-navy/15 bg-white px-3 text-navy">
            <Menu aria-label="メニューを開く" size={22} />
          </summary>
          <div className="absolute left-4 right-4 top-[68px] rounded-lg border border-ink/10 bg-white p-4 shadow-soft">
            <nav className="grid gap-2">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-md px-3 py-3 font-bold">
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" className="rounded-md bg-navy px-3 py-3 font-bold text-white">
                お問い合わせ / LINE案内
              </Link>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
