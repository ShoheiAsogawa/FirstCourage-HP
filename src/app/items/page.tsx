import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { InfoCard, PillList } from "@/components/Cards";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { brands, itemCategories } from "@/data/site";
import { createMetadata } from "@/lib/seo";

const featuredItems = [
  { src: "/images/watch-chronograph.jpg", category: "高級時計", title: "クロノグラフ・機械式時計", note: "稼働品・不動品ともに相談可" },
  { src: "/images/watch-modern.jpg", category: "高級時計", title: "ドレスウォッチ・現行モデル", note: "国内外ブランド対応" },
  { src: "/images/jewelry-diamond.jpg", category: "ジュエリー", title: "ダイヤモンド・色石ジュエリー", note: "鑑定書なしでも査定可能" },
  { src: "/images/gold-bullion.jpg", category: "金・貴金属", title: "金・コイン・地金", note: "当日相場で迅速査定" },
  { src: "/images/wallet-leather.jpg", category: "ブランド小物", title: "財布・革小物", note: "使用感のある品物も相談可" },
  { src: "/images/apparel-coat.jpg", category: "アパレル", title: "ブランドコート・ジャケット", note: "シーズン物もご相談ください" }
];

export const metadata = createMetadata({
  title: "買取品目一覧",
  description:
    "ブランドバッグ、高級時計、ジュエリー、貴金属、アパレルなど幅広いブランド品を買取。状態に不安があってもLINEや電話でまずご相談ください。",
  path: "/items"
});

export default function ItemsPage() {
  return (
    <>
      <PageHero
        eyebrow="ITEMS"
        title="バッグから貴金属まで、幅広いブランド品をお引き受けします。"
        lead="ブランド品の整理でお困りの方も、一点だけ相談したい方も。まずはLINEか電話でお気軽にご相談ください。"
      />

      <Section title="買取品目一覧">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {itemCategories.map((category) => (
            <InfoCard
              key={category.name}
              title={category.name}
              body={category.description}
              icon={category.icon}
            />
          ))}
        </div>
      </Section>

      <Section
        tone="fog"
        title="まとめて相談できます"
        lead="遺品整理や生前整理など、点数が多い場合もお気軽にご相談ください。一点ずつお持ち込みいただく必要はありません。"
      >
        <p className="mb-6 max-w-3xl leading-8 text-ink/72">
          ご自宅の整理や相続品の中にブランド品が複数あっても、まとめてLINEや電話でご相談いただけます。ブランド名がわからない品物も、写真を送っていただければ確認のポイントをご案内します。以下のブランドを中心に、掲載のないブランドも対応しています。
        </p>
        <PillList items={brands} />
      </Section>

      <Section
        title="買取対象アイテム例"
        eyebrow="EXAMPLES"
        lead="バッグ・時計・ジュエリー・貴金属・アパレル・小物まで。下記は買取例の一部です。"
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredItems.map((item) => (
            <div key={item.title} className="overflow-hidden rounded-lg border border-ink/10 bg-white shadow-soft">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-bold tracking-wide text-gold">{item.category}</p>
                <h3 className="mt-2 font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/65">{item.note}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="fog" title="品物の状態について">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "使用感・傷があっても相談できます",
              body: "角スレ、金具のくすみ、内側の汚れ、型崩れなど使用感がある品物もご相談いただけます。まずは現状のまま写真を送ってください。"
            },
            {
              title: "付属品がなくても大丈夫です",
              body: "箱、保証書、保存袋がない場合でも査定は可能です。付属品があればあわせてご確認しますが、なくても相談の入口を閉じることはありません。"
            },
            {
              title: "古いモデルや動かない時計も",
              body: "流行の過ぎたデザインや、電池切れ・不動の時計も、ブランドやモデルによっては需要があります。処分を決める前にご相談ください。"
            }
          ].map(({ title, body }) => (
            <div key={title} className="rounded-lg border border-ink/10 bg-white p-5">
              <h3 className="font-bold text-navy">{title}</h3>
              <p className="mt-3 leading-7 text-ink/70">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand tone="dark" />
    </>
  );
}
