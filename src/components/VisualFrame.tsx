"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera, Gem, MessageCircle, ShieldCheck, Watch } from "lucide-react";

const fallbackIcons = {
  hero: [Gem, Watch, MessageCircle],
  line: [Camera, MessageCircle, ShieldCheck],
  event: [ShieldCheck, Gem, Watch],
  items: [Gem, Watch, Camera],
  trust: [ShieldCheck, MessageCircle, Gem]
} as const;

const images = {
  hero: {
    src: "/images/stock-marble-consultation-watch-ring.png",
    alt: "ブランド品の査定相談"
  },
  line: {
    src: "/images/home-line-assessment.png",
    alt: "LINEで写真を送るだけの査定"
  },
  event: {
    src: "/images/event-booth.png",
    alt: "催事会場での査定相談"
  },
  items: {
    src: "/images/stock-mixed-luxury-goods-flatlay-wide.png",
    alt: "買取対象のブランド品"
  },
  trust: {
    src: "/images/home-trust-hero.png",
    alt: "丁寧な接客の査定相談"
  }
} as const;

export function VisualFrame({
  variant = "hero",
  label
}: {
  variant?: keyof typeof fallbackIcons;
  label?: string;
}) {
  const [imgError, setImgError] = useState(false);
  const IconSet = fallbackIcons[variant];
  const image = images[variant];

  if (imgError) {
    return (
      <div className="relative overflow-hidden rounded-lg border border-gold-soft bg-white shadow-soft">
        <div className="relative aspect-[4/3] bg-gradient-to-br from-fog via-white to-gold-soft/30">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6">
            <div className="grid grid-cols-3 gap-3">
              {IconSet.map((Icon, index) => (
                <div
                  key={index}
                  className="flex aspect-square w-14 items-center justify-center rounded-md border border-gold-soft/60 bg-white text-navy shadow-sm"
                >
                  <Icon aria-hidden size={index === 1 ? 30 : 24} strokeWidth={1.5} />
                </div>
              ))}
            </div>
            {label ? <p className="max-w-xs text-center text-sm font-bold leading-7 text-ink/65">{label}</p> : null}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-lg border border-gold-soft bg-white shadow-soft">
      <div className="relative aspect-[4/3]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 46vw, 100vw"
          className="object-cover"
          priority={variant === "hero"}
          onError={() => setImgError(true)}
        />
      </div>
    </div>
  );
}
