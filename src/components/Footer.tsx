import Link from "next/link";
import { company, navItems } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-serif text-xl font-bold">{company.name}</p>
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
          <p className="mb-3 text-sm font-bold text-gold">サイトメニュー</p>
          <nav className="grid gap-2 text-sm">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-white/76 hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <p className="mb-3 text-sm font-bold text-gold">相談導線</p>
          <nav className="grid gap-2 text-sm">
            <Link href="/contact" className="text-white/76 hover:text-white">
              お問い合わせ / LINE案内
            </Link>
            <Link href="/columns" className="text-white/76 hover:text-white">
              お役立ち記事
            </Link>
            <Link href="/purchase-methods#line" className="text-white/76 hover:text-white">
              写真を送るだけ査定
            </Link>
          </nav>
          <p className="mt-6 text-xs leading-6 text-white/52">
            掲載中の一部数値・口コミは開発用プレースホルダーです。公開前に本番値へ差し替えます。
          </p>
        </div>
      </div>
    </footer>
  );
}
