import Image from "next/image";
import { DecorativeIcon } from "@/components/Cards";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { VisualFrame } from "@/components/VisualFrame";
import { company, purchaseMethods } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "買取方法",
  description:
    "催事買取、LINE査定、電話相談の流れを説明。買い取りバンクは全国の催事会場と写真を送るだけ査定に対応しています。",
  path: "/purchase-methods"
});

export default function PurchaseMethodsPage() {
  return (
    <>
      <PageHero
        eyebrow="METHOD"
        title="催事買取を中心に、LINEと電話で事前相談できます。"
        lead="店舗へ行く手間を減らしながら、相談前の不安も減らすために、複数の入口を用意しています。"
      />
      {purchaseMethods.map((method, index) => (
        <Section
          key={method.title}
          id={index === 0 ? "event" : index === 1 ? "line" : "phone"}
          tone={index % 2 ? "fog" : "white"}
          title={method.title}
          lead={method.lead}
        >
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <VisualFrame
              variant={index === 0 ? "event" : index === 1 ? "line" : "trust"}
              label={`${method.title}の流れを、初めての方にもイメージしやすく伝えます。`}
            />
            <div className="relative overflow-hidden rounded-lg border border-gold-soft bg-white p-6 shadow-sm">
              <DecorativeIcon icon={method.icon} size={240} />
              <div className="relative z-10">
                <p className="leading-8 text-ink/82">{method.body}</p>
              </div>
              <div className="relative z-10 mt-6 rounded-lg border border-gold-soft bg-blush p-5">
                <h2 className="font-bold text-navy">安心して相談するためのポイント</h2>
                <ul className="mt-3 grid gap-2 text-sm leading-7 text-ink/82">
                  <li>・査定だけでも相談できます。</li>
                  <li>・納得できない場合は売却しなくて問題ありません。</li>
                  <li>・会社情報と古物商許可番号を確認できます。</li>
                  {index === 2 ? <li>・電話番号：{company.phone}</li> : null}
                </ul>
              </div>
            </div>
          </div>
        </Section>
      ))}
      <div className="relative h-72 overflow-hidden sm:h-96">
        <Image
          src="/images/event-venue-wide.jpg"
          alt="催事査定の様子"
          fill
          sizes="100vw"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/86 via-navy/62 to-navy/18" />
        <div className="absolute inset-0 flex items-center px-6 sm:px-12">
          <div className="max-w-lg">
            <p className="mb-3 text-sm font-bold tracking-[0.1em] text-white/90 drop-shadow">APPRAISAL</p>
            <p className="font-serif text-2xl font-bold leading-tight text-white sm:text-3xl">
              その価値を、丁寧に査定します。
            </p>
            <p className="mt-4 text-sm leading-7 text-white">
              状態・付属品・市場相場を確認しながら、お客様にわかりやすく説明します。
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
