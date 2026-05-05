import Image from "next/image";
import Link from "next/link";
import type { ComponentProps } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { company } from "@/data/site";

type Variant = "line" | "phone" | "outline" | "dark";

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 sm:text-base";

const variants: Record<Variant, string> = {
  line: "border border-[#06c755]/35 bg-[#e9fff1] text-[#075e2b] shadow-soft hover:border-[#06c755]/70 hover:bg-[#d7f8e3]",
  phone: "bg-navy text-white hover:bg-navy-2",
  outline: "border border-navy/20 bg-white text-navy hover:border-gold hover:bg-gold-soft/30",
  dark: "bg-ink text-white hover:bg-navy"
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
      {showArrow ? <ArrowRight aria-hidden size={17} /> : null}
    </Link>
  );
}

export function LineButton({
  label = "LINEで無料査定",
  prominent = false,
  className
}: {
  label?: string;
  /** アイコン・矢印を消し、文字を強調（トップなど） */
  prominent?: boolean;
  className?: string;
}) {
  return (
    <ButtonLink
      href={company.lineUrl}
      variant="line"
      showArrow={!prominent}
      showLeadingIcon={!prominent}
      className={
        prominent
          ? ["min-h-14 px-10 py-4 text-lg font-bold tracking-wide sm:text-xl", className].filter(Boolean).join(" ")
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
          ? ["min-h-14 px-10 py-4 text-lg font-bold tracking-wide sm:text-xl", className].filter(Boolean).join(" ")
          : className
      }
    >
      {label}
    </ButtonLink>
  );
}
