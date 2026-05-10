import { FileText, MessageCircle, Phone } from "lucide-react";
import { DecorativeIcon } from "@/components/Cards";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ButtonLink } from "@/components/ButtonLink";
import { company, flowSteps } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "お問い合わせ・LINE査定",
  description:
    "LINEで写真を送るだけ、またはお電話で買い取りバンクにご相談ください。査定のご案内を丁寧に行います。",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT"
        title="LINEまたはお電話で、気軽にご相談ください。"
        lead="写真を送るだけのLINE査定、またはお電話での相談を受け付けています。売るか迷っている段階でも、査定だけでもお気軽にどうぞ。"
      />

      {/* 3つの相談方法 */}
      <Section eyebrow="HOW TO" title="3つの相談方法">
        <div className="grid gap-6 md:grid-cols-3">
          {/* LINE査定 */}
          <div className="relative overflow-hidden rounded-lg border border-ink/10 bg-white p-6 shadow-soft transition hover:border-gold">
            <DecorativeIcon icon={MessageCircle} size={230} />
            <div className="relative z-10">
              <p className="mb-2 text-xs font-bold tracking-[0.08em] text-gold">01</p>
              <h2 className="font-serif text-xl font-bold text-navy">LINE査定</h2>
              <p className="mt-3 leading-8 text-ink/72">
                品物の写真をLINEで送るだけで、売れるかどうかや目安金額を事前に確認できます。来場前に相談できるため、初めての方にも安心です。
              </p>
            </div>
          </div>

          {/* お電話 */}
          <div className="relative overflow-hidden rounded-lg border border-ink/10 bg-white p-6 shadow-soft transition hover:border-gold">
            <DecorativeIcon icon={Phone} size={230} />
            <div className="relative z-10">
              <p className="mb-2 text-xs font-bold tracking-[0.08em] text-gold">02</p>
              <h2 className="font-serif text-xl font-bold text-navy">お電話</h2>
              <p className="mt-3 leading-8 text-ink/72">
                写真の送付が難しい方や、まず話してから相談したい方はお電話ください。品物の種類・点数・催事会場の案内などをスタッフが対応します。
              </p>
              <p className="mt-4 font-serif text-2xl font-bold text-navy">{company.phone}</p>
              <p className="mt-1 text-xs text-ink/50">{company.phoneHours}</p>
            </div>
          </div>

          {/* お問い合わせフォーム */}
          <div className="relative overflow-hidden rounded-lg border border-ink/10 bg-white p-6 shadow-soft transition hover:border-gold">
            <DecorativeIcon icon={FileText} size={230} />
            <div className="relative z-10">
              <p className="mb-2 text-xs font-bold tracking-[0.08em] text-gold">03</p>
              <h2 className="font-serif text-xl font-bold text-navy">お問い合わせフォーム</h2>
              <p className="mt-3 leading-8 text-ink/72">
                テキストで詳細をお伝えしたい方向けに、フォームを準備中です。現在はLINEまたはお電話にてご相談ください。
              </p>
              <p className="mt-6 inline-block rounded-md border border-ink/15 bg-fog px-4 py-2 text-sm text-ink/50">
                準備中
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* よくある質問への入口 */}
      <Section tone="fog" eyebrow="FAQ" title="相談前の疑問はFAQで解消できます。">
        <p className="max-w-2xl leading-8 text-ink/72">
          査定だけでもよいか、付属品がなくても売れるか、催事買取は安心かなど、よくいただく質問をまとめています。
        </p>
        <div className="mt-7">
          <ButtonLink href="/faq" variant="outline">
            よくある質問を見る
          </ButtonLink>
        </div>
      </Section>

      {/* ご相談の流れ */}
      <Section
        eyebrow="FLOW"
        title="ご相談の流れ"
        lead="最初の接点はLINEでも電話でも構いません。納得できた場合のみ、次の手続きへ進みます。"
      >
        <div className="grid gap-4 md:grid-cols-4">
          {flowSteps.map((step, index) => (
            <div key={step.title} className="relative overflow-hidden rounded-lg border border-ink/10 bg-white p-5 transition hover:border-gold">
              <DecorativeIcon icon={step.icon} />
              <div className="relative z-10">
                <p className="mb-4 font-serif text-3xl font-bold text-gold">0{index + 1}</p>
                <h3 className="font-bold text-navy">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/68">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
