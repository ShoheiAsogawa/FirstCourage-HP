"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { company, navItems } from "@/data/site";
import { LineButton } from "@/components/ButtonLink";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ease-luxury ${
        scrolled
          ? "glass-strong shadow-luxury"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-6 lg:py-4">
        <Link href="/" className="group min-w-0 whitespace-nowrap" onClick={close}>
          <p className="font-serif text-base font-bold tracking-wide text-charcoal transition-colors duration-300 sm:text-xl">
            {company.name}
          </p>
          <p className="mt-0.5 text-[10px] font-bold tracking-[2px] text-charcoal/50 sm:text-[11px]">
            EST. 2018 — 全国催事対応
          </p>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="主要ナビゲーション">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link text-[13px] font-bold tracking-wide text-charcoal/65 transition-colors duration-200 hover:text-crimson"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href={`tel:${company.phone}`}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-charcoal/10 bg-white/80 px-4 text-sm font-bold text-charcoal backdrop-blur-sm transition-all duration-200 hover:border-crimson/20 hover:bg-white hover:shadow-card"
          >
            <Phone aria-hidden size={15} className="text-crimson" />
            {company.phone}
          </Link>
          <LineButton label="LINE査定" />
        </div>

        <button
          type="button"
          onClick={() => setOpen(v => !v)}
          className="group relative inline-flex min-h-12 min-w-12 items-center justify-center overflow-hidden rounded-full border border-red/20 bg-white text-crimson shadow-lg ring-1 ring-red/10 transition-all duration-300 hover:border-crimson/40 hover:shadow-xl active:scale-[0.975] lg:hidden"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
        >
          <div className="relative flex h-6 w-6 items-center justify-center">
            <Menu
              aria-hidden
              size={22}
              className={`absolute transition-all duration-500 ${open ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}`}
            />
            <X
              aria-hidden
              size={22}
              className={`absolute transition-all duration-500 ${open ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-md transition-opacity duration-400 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={close}
      >
        <div
          className="absolute inset-x-0 top-0 h-full overflow-y-auto bg-white shadow-elevated"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex items-center justify-between border-b border-red/10 px-6 py-5">
            <div>
              <p className="font-serif text-xl font-bold tracking-[1px] text-crimson">{company.name}</p>
              <p className="text-[10px] font-medium tracking-[2px] text-charcoal/50">EST. 2018</p>
            </div>
            <button
              onClick={close}
              className="rounded-full p-3 text-crimson transition hover:bg-red/5 active:bg-red/10"
              aria-label="メニューを閉じる"
            >
              <X size={26} />
            </button>
          </div>

          <nav className="px-6 pt-8 pb-12" aria-label="モバイルナビゲーション">
            <div className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  className="group flex items-center justify-between border-b border-red/5 py-5 text-[17px] font-medium tracking-wide text-charcoal transition-colors hover:text-crimson"
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-crimson/40 transition-transform group-hover:translate-x-1">&rarr;</span>
                </Link>
              ))}
            </div>

            <div className="mt-10 space-y-3">
              <Link
                href="/contact"
                onClick={close}
                className="btn-luxury flex w-full items-center justify-center rounded-full bg-crimson py-4 text-base font-bold tracking-widest text-white shadow-xl active:scale-[0.985]"
              >
                お問い合わせ / LINE査定
              </Link>
              <Link
                href={`tel:${company.phone}`}
                onClick={close}
                className="btn-luxury flex w-full items-center justify-center gap-3 rounded-full border-2 border-crimson/80 py-4 text-base font-bold tracking-widest text-crimson transition hover:bg-red/5 active:bg-red/10"
              >
                <Phone size={18} /> {company.phone}
              </Link>
            </div>
          </nav>

          <div className="absolute bottom-0 w-full border-t border-red/10 bg-offwhite px-6 py-5 text-center text-[10px] tracking-[1.5px] text-charcoal/40">
            古物商許可番号：{company.license.split("：")[1]}
          </div>
        </div>
      </div>
    </header>
  );
}
