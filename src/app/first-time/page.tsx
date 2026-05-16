import Image from "next/image";
import { DecorativeIcon, InfoCard } from "@/components/Cards";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { flowSteps, trustPoints } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "初めての方へ",
  description:
    "ブランド品買取が初めての方へ。査定だけでも相談でき、無理な営業をしない買い取りバンクの安心設計を説明します。",
  path: "/first-time"
});

export default function FirstTimePage() {
  return (
    <>
      <PageHero
        eyebrow="FIRST TIME"
        title="初めての買取相談でも、急がず、わかりやすく。"
        lead="「売るか決めていない」「相場だけ知りたい」「催事買取が少し不安」な方に向けて、相談前に知っておきたいことをまとめました。"
      />
      <Section title="対面でも、丁寧にご案内します">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-soft">
            <Image
              src="/images/consultation-table.jpg"
              alt="催事会場での相談シーン"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="leading-8 text-ink/74">
              催事会場ではお客様一人ひとりに専任スタッフが対応します。査定の根拠や相場感をその場でわかりやすくご説明し、ご質問にもじっくりお答えします。
            </p>
            <p className="mt-4 leading-8 text-ink/74">
              納得いただけない場合はお持ち帰りいただいて構いません。「この場で決めなくては」というご負担はありません。
            </p>
          </div>
        </div>
      </Section>

      <Section tone="fog" title="不安を減らす3つのお約束" pattern>
        <div className="grid gap-4 md:grid-cols-3">
          {trustPoints.map((point) => (
            <InfoCard key={point.title} title={point.title} body={point.body} icon={point.icon} />
          ))}
        </div>
      </Section>
      <Section tone="fog" title="初めての方におすすめの進め方" pattern>
        <div className="grid gap-4 md:grid-cols-4">
          {flowSteps.map((step, index) => (
            <div key={step.title} className="relative overflow-hidden rounded-lg border border-ink/10 bg-white p-5 transition hover:border-gold">
              <DecorativeIcon icon={step.icon} />
              <div className="relative z-10">
                <p className="font-serif text-3xl font-bold text-gold">0{index + 1}</p>
                <h2 className="mt-3 font-bold text-navy">{step.title}</h2>
                <p className="mt-3 text-sm leading-7 text-ink/68">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section title="事前に用意するとスムーズなもの">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["品物の写真", "全体、ブランドロゴ、型番、傷や汚れがわかる写真を撮っておくとLINE査定がスムーズです。"],
            ["付属品", "箱、保証書、保存袋、余りコマなどがあれば一緒に確認できます。なくても相談可能です。"],
            ["本人確認書類", "買取成立時には本人確認が必要です。必要書類は催事会場や電話で事前に案内します。"]
          ].map(([title, body]) => (
            <div key={title} className="rounded-lg border border-ink/10 bg-white p-5">
              <h2 className="font-bold text-navy">{title}</h2>
              <p className="mt-3 leading-8 text-ink/70">{body}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
