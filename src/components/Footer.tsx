import Link from "next/link";
import Image from "next/image";
import { company, navItems } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative border-t-4 border-gold bg-white py-12 pb-28 text-charcoal sm:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-center bg-no-repeat opacity-[0.08]"
        style={{ backgroundImage: "url('/images/seigaiha-pattern.png')", backgroundSize: "cover" }}
      />
      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <Image
            src="/images/brand-logo-trimmed.png"
            alt={company.tradeName}
            width={1460}
            height={342}
            className="h-auto w-[220px] object-contain"
          />
          <p className="mt-1 text-sm font-bold text-charcoal/85">{company.name}</p>
          <dl className="mt-5 grid gap-2 text-sm text-charcoal/78">
            <div>
              <dt className="sr-only">古物商許可番号</dt>
              <dd>{company.license}</dd>
            </div>
            <div>
              <dt className="sr-only">所在地</dt>
              <dd>{company.address}</dd>
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
              <Link key={item.href} href={item.href} className="text-charcoal/68 transition-colors duration-200 hover:text-crimson">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="relative mx-auto mt-14 max-w-7xl px-5 pt-8 sm:px-6">
        <p className="text-[11px] tracking-[1px] text-charcoal/45">&copy; {new Date().getFullYear()} {company.nameEn}. All rights reserved.</p>
      </div>
    </footer>
  );
}
