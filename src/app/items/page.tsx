import Image from "next/image";
import { DecorativeIcon } from "@/components/Cards";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { itemCategories } from "@/data/site";
import { createMetadata } from "@/lib/seo";

type FeaturedExample = {
  src: string;
  category: string;
  title: string;
  note: string;
  imageClass?: string;
};

const featuredItems: FeaturedExample[] = [
  {
    src: "/images/items-example-watch-mechanical.png",
    category: "高級時計",
    title: "クロノグラフ・機械式時計",
    note: "稼働品・不動品ともに相談可"
  },
  {
    src: "/images/items-example-watch-lifestyle.png",
    category: "高級時計",
    title: "ドレスウォッチ・現行モデル",
    note: "国内外ブランド対応"
  },
  {
    src: "/images/stock-colored-gems-diamonds-on-rock.png",
    category: "ジュエリー",
    title: "ダイヤモンド・色石ジュエリー",
    note: "鑑定書なしでも査定可能",
    imageClass: "object-cover object-center"
  },
  {
    src: "/images/items-example-gold-ingot.png",
    category: "金・貴金属",
    title: "金・コイン・地金",
    note: "当日相場で迅速査定"
  },
  {
    src: "/images/items-example-leather-goods.png",
    category: "ブランド小物",
    title: "財布・革小物",
    note: "使用感のある品物も相談可"
  },
  {
    src: "/images/items-example-apparel.png",
    category: "アパレル・和装",
    title: "ブランド衣類・着物・帯",
    note: "洋服・呉服・シーズン物もご相談ください"
  }
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
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-4">
          {itemCategories.map((category) => (
            <div
              key={category.name}
              className="relative overflow-hidden rounded-xl border border-ink/10 bg-white p-3 shadow-sm transition hover:border-gold sm:p-5"
            >
              <DecorativeIcon icon={category.icon} size={150} />
              <div className="relative z-10 min-h-32 sm:min-h-28">
                <h2 className="text-sm font-bold leading-snug text-navy sm:text-lg">{category.name}</h2>
                <p className="mt-2 text-xs leading-5 text-ink/70 sm:text-base sm:leading-7">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        tone="fog"
        title="まとめて相談できます"
        lead="遺品整理や生前整理など、点数が多い場合もお気軽にご相談ください。一点ずつお持ち込みいただく必要はありません。"
        pattern
      >
        <p className="mb-6 max-w-3xl leading-8 text-ink/72">
          ご自宅の整理や相続品の中にブランド品が複数あっても、まとめてLINEや電話でご相談いただけます。ブランド名がわからない品物も、写真を送っていただければ確認のポイントをご案内します。
        </p>
      </Section>

      <Section
        title="買取対象アイテム例"
        eyebrow="EXAMPLES"
        lead="バッグ・時計・ジュエリー・貴金属・アパレル・小物まで。下記は買取例の一部です。"
      >
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
          {featuredItems.map((item) => (
            <div key={item.title} className="overflow-hidden rounded-xl border border-ink/10 bg-white shadow-soft">
              <div className="relative aspect-[4/3] w-full bg-fog">
                <Image
                  src={item.src}
                  alt={`${item.category}：${item.title}の買取例イメージ`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className={item.imageClass ?? "object-cover"}
                />
              </div>
              <div className="p-3 sm:p-5">
                <p className="text-[11px] font-bold tracking-wide text-crimson sm:text-xs">{item.category}</p>
                <h3 className="mt-1 text-sm font-bold leading-snug text-navy sm:mt-2 sm:text-base">{item.title}</h3>
                <p className="mt-1 text-xs leading-5 text-ink/65 sm:mt-2 sm:text-sm sm:leading-6">{item.note}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="fog" title="品物の状態について" pattern>
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
    </>
  );
}
