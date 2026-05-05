import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { brands } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "買取強化ブランド",
  description:
    "ルイ・ヴィトン、シャネル、エルメス、ロレックス、カルティエなどFirstCourageの買取強化ブランド一覧。",
  path: "/brands"
});

const featuredBrands = [
  { name: "ルイ・ヴィトン", note: "モノグラム・ダミエ・エピなど全ライン", src: "/images/brand-louis-vuitton.jpg" },
  { name: "シャネル", note: "マトラッセ・ボーイシャネル・チェーンウォレット", src: "/images/brand-chanel.jpg" },
  { name: "エルメス", note: "バーキン・ケリー・コンスタンスなど", src: "/images/brand-hermes.jpg" },
  { name: "グッチ", note: "ホースビット・GG柄・バンブーシリーズ", src: "/images/brand-gucci.jpg" },
  { name: "ディオール", note: "レディディオール・サドル・ブックトート", src: "/images/brand-dior.jpg" },
  { name: "プラダ", note: "サフィアーノ・ナイロン・ガレリア", src: "/images/brand-prada.jpg" },
  { name: "セリーヌ", note: "ラゲージ・トラペーズ・ベルトバッグ", src: "/images/brand-celine.jpg" },
  { name: "ロエベ", note: "パズル・ハンモック・アマソナ", src: "/images/brand-loewe.jpg" }
] as const;

export default function BrandsPage() {
  return (
    <>
      <PageHero
        eyebrow="BRANDS"
        title="王道ブランドから時計・ジュエリーまで、幅広く相談できます。"
        lead="掲載ブランド以外もご相談可能です。ブランド名がわからない品物も、写真で確認します。"
      />

      <Section
        eyebrow="BAGS"
        title="ブランドバッグ買取強化"
        lead="国内人気ブランドのバッグを中心に、状態や年代を問わずお買取りを強化しています。"
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredBrands.map((brand) => (
            <div
              key={brand.name}
              className="overflow-hidden rounded-lg border border-ink/10 bg-white shadow-soft transition hover:border-gold"
            >
              <div className="relative aspect-square w-full bg-fog">
                <Image
                  src={brand.src}
                  alt={`${brand.name}のバッグ買取`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-navy">{brand.name}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/65">{brand.note}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="fog" eyebrow="JEWELRY & WATCH" title="ジュエリー・時計の主要ブランド">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-lg border border-ink/10 bg-white shadow-soft">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/jewelry-luxury-brands.jpg"
                alt="カルティエ・ティファニー・ブルガリの買取"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-navy">高級ジュエリー</h3>
              <p className="mt-2 text-sm font-bold text-gold">
                カルティエ ／ ティファニー ／ ブルガリ
              </p>
              <p className="mt-3 leading-7 text-ink/68">
                LOVEブレス、Tシリーズ、セルペンティなど、定番モデルから限定品まで査定対応します。
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-ink/10 bg-white shadow-soft">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/watches-luxury-brands.jpg"
                alt="ロレックス・オメガ・タグ・ホイヤー・パテックフィリップの買取"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-navy">高級時計</h3>
              <p className="mt-2 text-sm font-bold text-gold">
                ロレックス ／ オメガ ／ タグ・ホイヤー ／ パテック フィリップ
              </p>
              <p className="mt-3 leading-7 text-ink/68">
                サブマリーナ、スピードマスター、ノーチラスなど人気モデルを中心に強化買取しています。
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="買取強化ブランド一覧">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {brands.map((brand) => (
            <div
              key={brand}
              className="rounded-lg border border-ink/10 bg-white p-5 text-center font-bold text-navy"
            >
              {brand}
            </div>
          ))}
        </div>
      </Section>

      <Section tone="fog" title="ブランドがわからない品物もご相談ください">
        <p className="max-w-3xl leading-8 text-ink/74">
          整理品の中には、ブランド名や素材がわからないものもあります。バッグ、時計、ジュエリー、貴金属などは、写真を送っていただければ確認のポイントをご案内します。
        </p>
      </Section>

      <CtaBand tone="dark" />
    </>
  );
}
