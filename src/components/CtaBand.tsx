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
        dark ? "bg-navy text-white" : "bg-white text-ink"
      }`}
    >
      {dark ? (
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-2 to-navy opacity-90" />
      ) : null}
      {dark ? (
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 30% 40%, #b79a5b 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      ) : null}
      <div className={`relative mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center ${dark ? "" : "bg-gradient-to-r from-gold-light/40 via-white to-gold-light/40 rounded-2xl p-8 sm:p-10"}`}>
        <div>
          <p className="mb-2 text-sm font-bold tracking-[0.12em] text-gold">無料相談</p>
          <h2 className="font-serif text-2xl font-bold leading-tight sm:text-3xl">{title}</h2>
          <p className={`mt-4 max-w-2xl leading-8 ${dark ? "text-white/78" : "text-ink/68"}`}>
            {lead}
          </p>
          <ul className="mt-5 grid gap-2 text-sm font-bold sm:grid-cols-3">
            {["査定料無料", "しつこい営業なし", "電話相談も受付"].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 aria-hidden size={17} className="text-gold" />
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
