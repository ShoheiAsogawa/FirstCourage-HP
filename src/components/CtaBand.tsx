import { CheckCircle2 } from "lucide-react";
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
      className={
        dark
          ? "bg-navy py-12 text-white"
          : "bg-white py-12 text-ink"
      }
    >
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className={`mb-2 text-sm font-bold tracking-[0.08em] ${dark ? "text-white/86" : "text-crimson"}`}>
            無料相談
          </p>
          <h2 className="font-serif text-2xl font-bold leading-tight sm:text-3xl">{title}</h2>
          <p className={`mt-4 max-w-2xl leading-8 ${dark ? "text-white/78" : "text-ink/72"}`}>
            {lead}
          </p>
          <ul className="mt-4 grid gap-2 text-sm font-bold sm:grid-cols-3">
            {["査定料無料", "しつこい営業なし", "電話相談も受付"].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 aria-hidden size={17} className={dark ? "text-white" : "text-gold"} />
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
