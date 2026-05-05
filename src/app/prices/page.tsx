import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { priceReferences } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "買取参考価格",
  description:
    "ブランドバッグ、時計、ジュエリー、金・貴金属の買取参考価格。実際の査定額は状態と相場により変動します。",
  path: "/prices"
});

export default function PricesPage() {
  return (
    <>
      <PageHero
        eyebrow="PRICE"
        title="参考価格は、相談前の目安としてご確認ください。"
        lead="実際の査定額は相場、状態、付属品、需要によって変わります。確定前に丁寧に説明します。"
      />
      <Section title="買取参考価格">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {priceReferences.map((item) => (
            <article key={item.item} className="rounded-lg border border-ink/10 bg-white p-5">
              <p className="text-xs font-bold text-gold">{item.category}</p>
              <h2 className="mt-2 font-bold text-navy">{item.item}</h2>
              <p className="mt-3 text-sm text-ink/62">{item.condition}</p>
              <p className="mt-4 font-serif text-2xl font-bold text-navy">{item.price}</p>
              <p className="mt-2 text-xs leading-6 text-ink/52">{item.note}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section tone="fog" title="価格表示の考え方">
        <p className="max-w-3xl leading-8 text-ink/74">
          参考価格は、根拠のない高額表示で期待をあおるためのものではありません。品物の状態や市場相場により変動するため、LINE査定や催事会場で現物を確認しながら説明します。
        </p>
      </Section>
      <CtaBand />
    </>
  );
}
