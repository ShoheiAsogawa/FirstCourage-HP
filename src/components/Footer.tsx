import Link from "next/link";
import { company, navItems } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t-4 border-gold bg-ink py-12 pb-28 text-white sm:pb-32">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="font-serif text-xl font-bold text-white">{company.tradeName}</p>
          <p className="mt-1 text-sm font-bold text-white/85">{company.name}</p>
          <p className="mt-3 max-w-md text-sm leading-7 text-white/70">{company.business}</p>
          <dl className="mt-5 grid gap-2 text-sm text-white/78">
            <div>
              <dt className="sr-only">古物商許可番号</dt>
              <dd>{company.license}</dd>
            </div>
            <div>
              <dt className="sr-only">所在地</dt>
              <dd>{company.address}</dd>
            </div>
            <div>
              <dt className="sr-only">代表者</dt>
              <dd>{company.representative}</dd>
            </div>
            <div>
              <dt className="sr-only">電話番号</dt>
              <dd>{company.phone}</dd>
            </div>
          </dl>
        </div>
        <div>
          <p className="mb-4 text-xs font-bold tracking-[0.15em] text-crimson">サイトメニュー</p>
          <nav className="grid gap-2 text-sm">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-white/58 transition-colors duration-200 hover:text-crimson-glow">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <p className="mb-4 text-xs font-bold tracking-[0.15em] text-crimson">相談導線</p>
          <nav className="grid gap-2 text-sm">
            <Link href="/contact" className="text-white/58 transition-colors duration-200 hover:text-crimson-glow">
              お問い合わせ / LINE案内
            </Link>
            <Link href="/columns" className="text-white/58 transition-colors duration-200 hover:text-crimson-glow">
              お役立ち記事
            </Link>
            <Link href="/purchase-methods#line" className="text-white/58 transition-colors duration-200 hover:text-crimson-glow">
              写真を送るだけ査定
            </Link>
          </nav>
          <p className="mt-8 text-xs leading-6 text-white/32">
            掲載中の一部数値・口コミは開発用プレースホルダーです。公開前に本番値へ差し替えます。
          </p>
        </div>
      </div>
      <div className="relative mx-auto mt-14 max-w-7xl border-t border-white/8 px-5 pt-8 sm:px-6">
        <p className="text-[11px] tracking-[1px] text-white/28">&copy; {new Date().getFullYear()} {company.nameEn}. All rights reserved.</p>
      </div>
    </footer>
  );
}
