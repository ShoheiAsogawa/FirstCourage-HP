import Image from "next/image";
import Link from "next/link";
import type { ComponentProps } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { company } from "@/data/site";

type Variant = "line" | "phone" | "outline" | "dark";

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 sm:text-base";

const variants: Record<Variant, string> = {
  line: "bg-[#06c755] text-white shadow-soft hover:bg-[#05a847]",
  phone: "bg-navy text-white hover:bg-navy-2",
  outline: "border border-navy/20 bg-white text-navy hover:border-gold hover:bg-gold-soft/30",
  dark: "bg-ink text-white hover:bg-navy"
};

export function ButtonLink({
  href,
  children,
  variant = "outline",
  showArrow = true,
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant; showArrow?: boolean }) {
  return (
    <Link href={href} className={`${base} ${variants[variant]}`} {...props}>
      {variant === "line" ? (
        <Image
          src="/images/line-logo.png"
          alt=""
          width={22}
          height={22}
          className="rounded-[5px] bg-white"
          aria-hidden
        />
      ) : null}
      {variant === "phone" ? <Phone aria-hidden size={18} /> : null}
      <span>{children}</span>
      {showArrow ? <ArrowRight aria-hidden size={17} /> : null}
    </Link>
  );
}

export function LineButton({ label = "LINEで無料査定" }: { label?: string }) {
  return (
    <ButtonLink href={company.lineUrl} variant="line">
      {label}
    </ButtonLink>
  );
}

export function PhoneButton({ label = "電話で相談する" }: { label?: string }) {
  return (
    <ButtonLink href={`tel:${company.phone}`} variant="phone">
      {label}
    </ButtonLink>
  );
}
