import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { company } from "@/data/site";
import { createMetadata } from "@/lib/seo";
import Image from "next/image";

export const metadata = createMetadata({
  title: "会社概要",
  description:
    "買い取りバンク（運営：株式会社FirstCourage）の会社概要。所在地、代表者、古物商許可番号、電話番号などを掲載しています。",
  path: "/company"
});

export default function CompanyPage() {
  const companyRows: [string, string][] = [
    ["会社名", company.name],
    ["屋号", company.tradeName],
    ["所在地", company.address],
    ["古物商許可番号", company.license],
    ["電話番号", company.phone],
    ["事業内容", company.business]
  ];

  return (
    <>
      <PageHero
        eyebrow="COMPANY"
        title="会社情報と許認可を明示し、透明性のある買取を目指します。"
        lead="催事買取だからこそ、運営元・連絡先・許認可をわかりやすく掲載しています。ご不明な点はLINEや電話でご確認ください。"
      />

      <Section title="会社概要">
        <div className="mb-8 flex justify-start">
          <Image
            src="/images/company-logo-trimmed.png"
            alt={`${company.name} logo`}
            width={1476}
            height={272}
            className="h-12 w-auto object-contain sm:h-16"
          />
        </div>
        <div className="overflow-hidden rounded-lg border border-ink/10 bg-white">
          {companyRows.map(([label, value]) => (
            <dl
              key={label}
              className="grid border-b border-ink/10 last:border-b-0 sm:grid-cols-[200px_1fr]"
            >
              <dt className="bg-fog px-5 py-4 text-sm font-bold text-navy">{label}</dt>
              <dd className="px-5 py-4 leading-7 text-ink/74">{value}</dd>
            </dl>
          ))}
        </div>
      </Section>

      <Section
        tone="fog"
        title="事業内容"
        lead="全国各地の催事会場を中心に、LINEと電話でも相談できる体制を整えています。"
        pattern
      >
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "催事買取",
              body: "商業施設や地域の会場で期間限定の査定相談会を開催しています。実店舗を持たずに全国対応できるのが催事形式の特徴です。査定内容はその場で丁寧に説明し、ご納得いただいた場合のみ手続きに進みます。"
            },
            {
              title: "LINE・電話査定",
              body: "来場前に写真や電話で品物の状態を確認できます。ブランド名がわからない品物や、まとめて整理したい場合の相談窓口として、初めての方にも使いやすい導線を用意しています。"
            },
            {
              title: "全国対応",
              body: "関東・中部・関西をはじめ、全国各地で催事を開催しています。開催予定はLINEや電話でお知らせすることも可能です。お近くの開催情報についてもお気軽にお問い合わせください。"
            },
            {
              title: "ご相談から買取まで",
              body: "査定のみのご相談も歓迎しています。金額や手続きに納得できない場合は見送りも可能です。無理な売却をすすめない姿勢を大切にしています。"
            }
          ].map(({ title, body }) => (
            <div key={title} className="rounded-lg border border-ink/10 bg-white p-5">
              <h3 className="font-bold text-navy">{title}</h3>
              <p className="mt-3 leading-7 text-ink/70">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="fog" title="古物商許可について" pattern>
        <div className="max-w-3xl">
          <p className="leading-8 text-ink/72">
            ブランド品・時計・ジュエリー・貴金属の買取を行うにあたり、古物営業法に基づく古物商許可を取得しています。催事会場での買取にあたっても、法令に基づく本人確認と帳簿管理を適切に行います。
          </p>
          <div className="mt-6 rounded-lg border border-gold-soft bg-white p-5">
            <p className="text-sm font-bold text-navy">許可番号</p>
            <p className="mt-2 leading-7 text-ink/74">{company.license}</p>
          </div>
        </div>
      </Section>
    </>
  );
}
