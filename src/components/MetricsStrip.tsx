"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type Metric = {
  label: string;
  value: string;
  unit: string;
  note: string;
};

function parseTarget(value: string) {
  return Number(value.replace(/,/g, ""));
}

function formatValue(value: number) {
  return value.toLocaleString("ja-JP");
}

export function MetricsStrip({ metrics }: { metrics: readonly Metric[] }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const targets = useMemo(() => metrics.map((metric) => parseTarget(metric.value)), [metrics]);
  const [values, setValues] = useState(() => targets.map(() => 0));
  const [zeroShuffle, setZeroShuffle] = useState("7");

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 1400;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValues(targets.map((target) => Math.round(target * eased)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, targets]);

  useEffect(() => {
    if (!started) return;
    let count = 0;
    const timer = window.setInterval(() => {
      count += 1;
      if (count >= 10) {
        setZeroShuffle("0");
        window.clearInterval(timer);
        return;
      }
      setZeroShuffle(String(Math.floor(Math.random() * 10)));
    }, 80);
    return () => window.clearInterval(timer);
  }, [started]);

  return (
    <div ref={rootRef} className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-3 sm:px-6">
      {metrics.map((metric, index) => (
        <div key={metric.label} className="relative overflow-visible rounded-3xl border border-red/15 bg-white/95 p-6 shadow-luxury backdrop-blur sm:p-7">
          <div className="pointer-events-none absolute left-1/2 top-0 z-10 h-[72px] w-[224px] -translate-x-1/2 -translate-y-[calc(50%+14px)] sm:h-20 sm:w-64 sm:-translate-y-[calc(50%+18px)]" aria-hidden>
            <Image src="/images/metrics-ornament-alpha.png" alt="" fill sizes="256px" className="object-contain opacity-95" />
          </div>
          <div className="absolute right-5 top-5 text-crimson/20" aria-hidden>*</div>
          <p className="text-xs font-bold tracking-[0.12em] text-charcoal/55">{metric.label}</p>
          <p className="mt-3 font-serif text-4xl font-bold tracking-tighter text-charcoal sm:text-[2.6rem]">
            <span className="text-crimson">{index === 2 ? zeroShuffle : formatValue(values[index] ?? 0)}</span>
            <span className="ml-1 text-lg font-sans text-charcoal/60">{metric.unit}</span>
          </p>
          {metric.note ? <p className="mt-1 text-xs text-charcoal/42">{metric.note}</p> : null}
        </div>
      ))}
    </div>
  );
}
