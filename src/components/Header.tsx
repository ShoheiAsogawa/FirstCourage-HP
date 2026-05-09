"use client";

import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { company, navItems } from "@/data/site";
import { LineButton } from "@/components/ButtonLink";

export function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="min-w-0 whitespace-nowrap" onClick={closeMenu}>
          <p className="font-serif text-base font-bold tracking-wide text-navy sm:text-xl">
            {company.name}
          </p>
          <p className="mt-0.5 text-[11px] font-bold text-ink/58 sm:text-xs">
            ブランド品買取・全国催事対応
          </p>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="主要ナビゲーション">
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

        <button
          type="button"
          className="group relative inline-flex min-h-12 min-w-12 items-center justify-center overflow-hidden rounded-full border border-red/20 bg-white text-crimson shadow-lg ring-1 ring-red/10 transition-all duration-300 hover:border-crimson/40 hover:shadow-xl active:scale-[0.975] lg:hidden"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <div className="relative flex h-6 w-6 items-center justify-center">
            <Menu 
              aria-hidden 
              size={22} 
              className={`absolute transition-all duration-500 ${open ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`} 
            />
            <X 
              aria-hidden 
              size={22} 
              className={`absolute transition-all duration-500 ${open ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`} 
            />
          </div>
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-xl lg:hidden" onClick={closeMenu}>
          <div 
            className="absolute inset-x-0 top-0 h-full overflow-hidden bg-white shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Elegant top bar */}
            <div className="flex items-center justify-between border-b border-red/10 px-6 py-5">
              <div>
                <p className="font-serif text-xl font-bold tracking-[1px] text-crimson">{company.name}</p>
                <p className="text-[10px] font-medium tracking-[2px] text-charcoal/60">EST. 2018</p>
              </div>
              <button 
                onClick={closeMenu} 
                className="rounded-full p-3 text-crimson transition hover:bg-red/5 active:bg-red/10"
                aria-label="メニューを閉じる"
              >
                <X size={26} />
              </button>
            </div>

            {/* Luxurious menu items */}
            <nav className="px-6 pt-8 pb-12" aria-label="モバイルナビゲーション">
              <div className="space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="group flex items-center justify-between border-b border-red/5 py-5 text-[17px] font-medium tracking-wide text-charcoal transition-colors hover:text-crimson"
                  >
                    <span>{item.label}</span>
                    <span className="text-xs text-crimson/50 group-hover:translate-x-1 transition">→</span>
                  </Link>
                ))}
              </div>

              {/* Premium CTA buttons */}
              <div className="mt-10 space-y-3">
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="btn-luxury flex w-full items-center justify-center rounded-full bg-crimson py-4 text-base font-bold tracking-widest text-white shadow-xl active:scale-[0.985]"
                >
                  お問い合わせ / LINE査定
                </Link>
                <Link
                  href={`tel:${company.phone}`}
                  onClick={closeMenu}
                  className="btn-luxury flex w-full items-center justify-center gap-3 rounded-full border-2 border-crimson/80 py-4 text-base font-bold tracking-widest text-crimson transition hover:bg-red/5 active:bg-red/10"
                >
                  <Phone size={18} /> {company.phone}
                </Link>
              </div>
            </nav>

            {/* Subtle footer info */}
            <div className="absolute bottom-0 w-full border-t border-red/10 bg-offwhite px-6 py-5 text-center text-[10px] tracking-[1.5px] text-charcoal/50">
              古物商許可番号：{company.license.split('：')[1]}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
