"use client";

import { LineButton, PhoneButton } from "@/components/ButtonLink";

export function StickyCtaBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-ink/10 bg-white/95 pb-[max(0.75rem,env(safe-area-inset-bottom,0px))] pt-2.5 shadow-[0_-10px_40px_rgba(0,0,0,0.08)] backdrop-blur-md"
      role="region"
      aria-label="お問い合わせ"
    >
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-2 px-3 sm:gap-3 sm:px-4">
        <LineButton
          label="LINEで写真査定"
          className="w-full min-h-12 justify-center px-3 text-xs sm:min-h-14 sm:px-5 sm:text-sm"
        />
        <PhoneButton
          label="電話で相談"
          className="w-full min-h-12 justify-center px-3 text-xs sm:min-h-14 sm:px-5 sm:text-sm"
        />
      </div>
    </div>
  );
}
