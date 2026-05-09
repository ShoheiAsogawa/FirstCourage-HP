import Link from "next/link";
import { company, navItems } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink py-16 text-white">
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle at 70% 30%, #b79a5b 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-serif text-xl font-bold">{company.name}</p>
          <div className="mt-3 h-[2px] w-10 rounded-full bg-gold/60" />
          <p className="mt-4 max-w-md text-sm leading-7 text-white/70">{company.business}</p>
          <dl className="mt-6 grid gap-2 text-sm text-white/68">
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
          <p className="mb-4 text-sm font-bold text-gold">サイトメニュー</p>
          <nav className="grid gap-2 text-sm">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-white/68 transition-colors duration-200 hover:text-gold-soft">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <p className="mb-4 text-sm font-bold text-gold">相談導線</p>
          <nav className="grid gap-2 text-sm">
            <Link href="/contact" className="text-white/68 transition-colors duration-200 hover:text-gold-soft">
              お問い合わせ / LINE案内
            </Link>
            <Link href="/columns" className="text-white/68 transition-colors duration-200 hover:text-gold-soft">
              お役立ち記事
            </Link>
            <Link href="/purchase-methods#line" className="text-white/68 transition-colors duration-200 hover:text-gold-soft">
              写真を送るだけ査定
            </Link>
          </nav>
          <p className="mt-8 text-xs leading-6 text-white/42">
            掲載中の一部数値・口コミは開発用プレースホルダーです。公開前に本番値へ差し替えます。
          </p>
        </div>
      </div>
      <div className="relative mx-auto mt-12 max-w-7xl border-t border-white/8 px-4 pt-8 sm:px-6">
        <p className="text-xs text-white/36">&copy; {new Date().getFullYear()} {company.nameEn}. All rights reserved.</p>
      </div>
    </footer>
  );
}
