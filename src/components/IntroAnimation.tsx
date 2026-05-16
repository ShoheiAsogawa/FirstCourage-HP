"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function IntroAnimation() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setHidden(true), 2900);
    return () => window.clearTimeout(timer);
  }, []);

  if (hidden) return null;

  return (
    <div className="intro-overlay" aria-hidden>
      <div className="intro-scene">
        <Image src="/images/intro-shop.png" alt="" width={742} height={650} className="intro-shop" />
        <Image src="/images/brand-logo-trimmed.png" alt="" width={1460} height={342} className="intro-brand" />
        <Image src="/images/intro-walker-clean.png" alt="" width={539} height={934} className="intro-walker" />
        <Image src="/images/intro-walker-clean.png" alt="" width={539} height={934} className="intro-exit-walker" />
        <Image src="/images/intro-jumper-clean.png" alt="" width={603} height={827} className="intro-jumper" />
        <Image src="/images/intro-heart.png" alt="" width={1366} height={768} className="intro-heart" />
      </div>
    </div>
  );
}
