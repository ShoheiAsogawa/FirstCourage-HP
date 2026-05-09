"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { company, navItems } from "@/data/site";
import { LineButton } from "@/components/ButtonLink";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ease-out-expo ${
        scrolled
          ? "border-b border-ink/6 glass-strong shadow-card"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:py-4">
        <Link href="/" className="group min-w-0 whitespace-nowrap">
          <p className="font-serif text-base font-bold tracking-wide text-navy transition-colors duration-300 sm:text-xl">
            {company.name}
          </p>
          <p className="mt-0.5 text-[11px] font-bold text-ink/58 transition-colors duration-300 sm:text-xs">
            ブランド品買取・全国催事対応
          </p>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="主要ナビゲーション">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm font-bold text-ink/68 transition-colors duration-200 hover:text-gold after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-gold after:transition-all after:duration-300 after:ease-out-expo hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href={`tel:${company.phone}`}
            className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-navy/10 bg-white/60 px-4 text-sm font-bold text-navy backdrop-blur-sm transition-all duration-200 hover:border-navy/20 hover:bg-white/80 hover:shadow-card"
          >
            <Phone aria-hidden size={16} className="text-gold" />
            {company.phone}
          </Link>
          <LineButton label="LINE査定" />
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex min-h-11 w-11 items-center justify-center rounded-lg border border-navy/15 bg-white/80 text-navy shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-white lg:hidden"
          aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={`fixed inset-0 top-0 z-40 bg-navy/20 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] transform bg-white shadow-elevated transition-transform duration-500 ease-out-expo lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-ink/8 px-6 py-4">
          <p className="font-serif text-base font-bold text-navy">{company.name}</p>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="flex size-10 items-center justify-center rounded-lg text-ink/60 transition-colors hover:bg-fog hover:text-navy"
            aria-label="メニューを閉じる"
          >
            <X size={22} />
          </button>
        </div>
        <nav className="grid gap-1 p-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-bold text-ink/72 transition-colors duration-200 hover:bg-fog hover:text-navy"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4 border-t border-ink/8 pt-4">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center rounded-lg bg-navy px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-navy-2"
            >
              お問い合わせ / LINE案内
            </Link>
          </div>
          <div className="mt-3 rounded-lg border border-ink/8 p-4">
            <p className="text-xs font-bold text-ink/50">お電話でのご相談</p>
            <p className="mt-1 font-serif text-lg font-bold text-navy">{company.phone}</p>
            <p className="mt-1 text-xs text-ink/50">{company.phoneHours}</p>
          </div>
        </nav>
      </div>
    </header>
  );
}
