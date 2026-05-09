import Image from "next/image";
import Link from "next/link";
import type { ComponentProps } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { company } from "@/data/site";

type Variant = "line" | "phone" | "outline" | "dark";

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 sm:text-base";

const variants: Record<Variant, string> = {
  line: "border border-[#06c755]/35 bg-[#e9fff1] text-[#075e2b] shadow-sm hover:border-[#06c755]/70 hover:bg-[#d7f8e3] hover:shadow-gold-glow hover:-translate-y-0.5 active:translate-y-0",
  phone: "bg-navy text-white shadow-sm hover:bg-navy-2 hover:shadow-navy-glow hover:-translate-y-0.5 active:translate-y-0",
  outline: "border border-navy/15 bg-white text-navy shadow-sm hover:border-gold hover:bg-gold-light hover:shadow-gold-glow hover:-translate-y-0.5 active:translate-y-0",
  dark: "bg-ink text-white shadow-sm hover:bg-navy hover:shadow-navy-glow hover:-translate-y-0.5 active:translate-y-0"
};

export function ButtonLink({
  href,
  children,
  variant = "outline",
  showArrow = true,
  showLeadingIcon = true,
  className,
  ...props
}: ComponentProps<typeof Link> & {
  variant?: Variant;
  showArrow?: boolean;
  showLeadingIcon?: boolean;
  className?: string;
}) {
  const merged = `${base} ${variants[variant]}${className ? ` ${className}` : ""}`;
  return (
    <Link href={href} className={merged} {...props}>
      {variant === "line" && showLeadingIcon ? (
        <Image
          src="/images/line-logo.png"
          alt=""
          width={22}
          height={22}
          className="rounded-[5px] bg-white"
          aria-hidden
        />
      ) : null}
      {variant === "phone" && showLeadingIcon ? <Phone aria-hidden size={18} /> : null}
      <span>{children}</span>
      {showArrow ? (
        <ArrowRight aria-hidden size={17} className="transition-transform duration-200 group-hover:translate-x-0.5" />
      ) : null}
    </Link>
  );
}

export function LineButton({
  label = "今すぐ査定",
  prominent = false,
  className
}: {
  label?: string;
  prominent?: boolean;
  className?: string;
}) {
  return (
    <ButtonLink
      href="/assessment/start"
      variant="line"
      showArrow={!prominent}
      showLeadingIcon={false}
      className={
        prominent
          ? ["min-h-14 px-10 py-4 text-lg font-bold tracking-wide shadow-gold-glow sm:text-xl", className].filter(Boolean).join(" ")
          : className
      }
    >
      {label}
    </ButtonLink>
  );
}

export function PhoneButton({
  label = "電話で相談する",
  prominent = false,
  className
}: {
  label?: string;
  prominent?: boolean;
  className?: string;
}) {
  return (
    <ButtonLink
      href={`tel:${company.phone}`}
      variant="phone"
      showArrow={!prominent}
      showLeadingIcon={!prominent}
      className={
        prominent
          ? ["min-h-14 px-10 py-4 text-lg font-bold tracking-wide shadow-navy-glow sm:text-xl", className].filter(Boolean).join(" ")
          : className
      }
    >
      {label}
    </ButtonLink>
  );
}
