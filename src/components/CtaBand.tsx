import { CircleCheck as CheckCircle2 } from "lucide-react";
import { LineButton, PhoneButton } from "@/components/ButtonLink";
import { company } from "@/data/site";

export function CtaBand({
  title = "まずはLINEで、写真を送るだけ無料査定。",
  lead = "売るか迷っている段階でも大丈夫です。品物の写真を送って、売れるかどうか・催事会場に持ち込むべきかを気軽に相談できます。",
  tone = "light"
}: {
  title?: string;
  lead?: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";

  return (
    <section
      className={`relative overflow-hidden py-16 sm:py-20 ${
        dark
          ? "bg-charcoal text-white"
          : "bg-white text-charcoal"
      }`}
    >
      {dark ? (
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-ink to-charcoal" />
      ) : null}
      {dark ? (
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 30% 40%, #B91C1C 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      ) : null}
      <div className={`relative mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center ${dark ? "" : "rounded-3xl border border-crimson/8 bg-gradient-to-r from-crimson-light/20 via-white to-crimson-light/20 p-8 sm:p-10"}`}>
        <div>
          <p className={`mb-3 inline-flex items-center gap-3 text-xs font-bold tracking-[0.15em] ${dark ? "text-white/60" : "text-crimson"}`}>
            <span className={`h-px w-8 ${dark ? "bg-white/30" : "bg-crimson/40"}`} aria-hidden />
            無料相談
          </p>
          <h2 className="font-serif text-2xl font-bold leading-tight sm:text-3xl">{title}</h2>
          <p className={`mt-4 max-w-2xl leading-8 ${dark ? "text-white/72" : "text-charcoal/62"}`}>
            {lead}
          </p>
          <ul className="mt-5 grid gap-2 text-sm font-bold sm:grid-cols-3">
            {["査定料無料", "しつこい営業なし", "電話相談も受付"].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 aria-hidden size={17} className={dark ? "text-crimson-glow" : "text-crimson"} />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          <LineButton />
          <PhoneButton label={`${company.phone}へ電話`} />
        </div>
      </div>
    </section>
  );
}
