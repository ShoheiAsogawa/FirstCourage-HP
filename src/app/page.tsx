import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { DecorativeIcon, InfoCard } from "@/components/Cards";
import { Section } from "@/components/Section";
import {
  brands,
  company,
  eventHistory,
  flowSteps,
  itemCategories,
  metrics,
  priceReferences,
  purchaseMethods,
  testimonials,
  trustPoints
} from "@/data/site";

export default function Home() {
  return (
    <>
      {/* Hero: 画像を活かしつつ、見出しはモバイルは画面中央寄せ・デスクトップは左ブロック */}
      <section className="relative isolate flex min-h-[100dvh] items-center justify-center overflow-hidden bg-white text-charcoal sm:min-h-[820px] md:justify-start">
        <Image
          src="/images/hero-desktop.png"
          alt="ブランド品の状態とご希望を伺いながら、丁寧に査定をご説明する様子"
          fill
          sizes="100vw"
          className="object-cover object-[68%_center] md:object-[50%_center]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/15 to-black/35 md:bg-gradient-to-r md:from-black/35 md:via-black/20 md:to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/90 to-transparent md:h-32" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-4 pb-8 pt-[clamp(4.5rem,18vh,7rem)] text-center md:items-start md:justify-center md:px-6 md:pb-16 md:pt-14 md:text-left lg:px-8 lg:pb-20">
          <div className="max-w-[min(100%,22rem)] sm:max-w-xl md:max-w-3xl">
            <h1 className="hero-title-display font-serif text-[2.15rem] font-bold leading-[1.18] text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.45)] sm:text-5xl md:text-6xl lg:text-7xl flex flex-col items-center gap-8 text-center sm:gap-10 md:items-start md:gap-3.5 md:text-left lg:gap-3.5">
              <span className="max-md:text-balance">大切なブランド品に、</span>
              <span className="sr-only">本物の価値を。</span>
              <span className="hero-value-highlight md:self-start" aria-hidden>
                <span className="hero-value-stack">
                  <span className="hero-value-ghost">本物の価値を。</span>
                  <span className="hero-value-bar-grow" />
                  <span className="hero-value-chrome">本物の価値を。</span>
                  <span className="hero-value-white">本物の価値を。</span>
                </span>
              </span>
            </h1>
            <p className="mt-7 hidden max-w-2xl text-lg font-bold leading-9 text-white [text-shadow:0_1px_12px_rgba(0,0,0,0.35)] md:block">
              {company.tradeName}は、ブランドバッグ・時計・ジュエリー・貴金属の買取を専門としています。
              思い出の品だからこそ、丁寧な査定と透明なご説明を。まずはLINEで写真をお送りください。
            </p>
          </div>
        </div>
      </section>

      <section className="relative border-y border-red/10 bg-gradient-to-b from-white via-fog to-white py-10 sm:py-12">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-3 sm:px-6">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="card-luxury relative overflow-visible rounded-3xl border border-red/15 bg-white/95 p-6 shadow-luxury backdrop-blur sm:p-7"
            >
              <div className="pointer-events-none absolute left-1/2 top-0 z-10 h-[72px] w-[224px] -translate-x-1/2 -translate-y-[calc(50%+14px)] sm:h-20 sm:w-64 sm:-translate-y-[calc(50%+18px)]" aria-hidden>
                <Image
                  src="/images/metrics-ornament-alpha.png"
                  alt=""
                  fill
                  sizes="256px"
                  className="object-contain opacity-95"
                />
              </div>
              <div className="absolute right-5 top-5 text-crimson/20" aria-hidden>
                *
              </div>
              <p className="text-xs font-bold tracking-[0.12em] text-charcoal/55">{metric.label}</p>
              <p className="mt-3 font-serif text-4xl font-bold tracking-tighter text-charcoal sm:text-[2.6rem]">
                <span className="text-crimson">{metric.value}</span>
                <span className="ml-1 text-lg font-sans text-charcoal/60">{metric.unit}</span>
              </p>
              {metric.note ? <p className="mt-1 text-xs text-charcoal/42">{metric.note}</p> : null}
            </div>
          ))}
        </div>
        <p className="mx-auto mt-4 max-w-7xl px-5 text-[11px] text-charcoal/32 sm:px-6">※一部数値は開発用プレースホルダーです</p>
      </section>

      {/* ═══ TRUST ═══ */}
      <Section
        align="center"
        eyebrow="TRUST"
        title="安心できる買取の在り方。"
        lead="運営元が明確で、初めての方でも安心してご相談いただける体制を整えています。"
      >
        <div className="grid gap-8 lg:gap-10">
          <figure className="relative h-56 overflow-hidden rounded-2xl border border-red/10 shadow-luxury sm:h-72 md:h-80 lg:h-[22rem]">
            <Image
              src="/images/home-trust-hero.png"
              alt="ジュエリー・時計など査定対象品の物撮り"
              fill
              className="object-cover object-[55%_center]"
              sizes="(min-width: 1280px) 1280px, 100vw"
            />
            <figcaption className="sr-only">時計・ジュエリーなど査定対象品の例</figcaption>
          </figure>
          <div className="grid gap-4 md:grid-cols-3">
            {trustPoints.map((point) => (
              <InfoCard key={point.title} title={point.title} body={point.body} icon={point.icon} />
            ))}
          </div>
        </div>
      </Section>

      {/* ═══ PURCHASE METHODS ═══ */}
      <Section
        align="center"
        tone="fog"
        title="買取方法"
        lead="催事での対面相談を中心に、来場前のLINE査定と電話相談を組み合わせ、不安の少ない入口を用意します。"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
          <div className="img-zoom relative min-h-80 overflow-hidden rounded-3xl shadow-luxury">
            <Image
              src="/images/home-smartphone-appraisal.png"
              alt="スマートフォンでバッグなど品物を撮影して査定に提出する様子"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/72 via-navy/25 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <p className="text-sm font-bold tracking-[0.12em] text-white/90 drop-shadow">入口はゆるく、説明はまじめに。</p>
              <p className="mt-3 font-serif text-2xl font-bold leading-snug">写真、電話、会場。得意な相談方法から始められます。</p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
            {purchaseMethods.map((method) => (
              <InfoCard
                key={method.title}
                title={method.title}
                body={`${method.lead} ${method.body}`}
                icon={method.icon}
                href={method.href}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* ═══ ITEMS ═══ */}
      <Section
        align="center"
        eyebrow="ITEMS"
        title="買取品目"
        lead="ブランド品から貴金属、整理品までまとめて相談できます。状態に不安があるものもLINEで確認できます。"
      >
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
          {itemCategories.slice(0, 10).map((item) => (
            <div key={item.name} className="card-luxury relative overflow-hidden rounded-xl border border-charcoal/8 bg-white p-3 shadow-card sm:p-4">
              <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-gradient-to-br from-crimson-light/50 to-crimson-light/15 text-crimson shadow-sm">
                <item.icon aria-hidden size={20} strokeWidth={1.8} />
              </div>
              <h3 className="text-sm font-bold text-charcoal sm:text-base">{item.name}</h3>
              <p className="mt-1.5 text-xs leading-5 text-charcoal/52 sm:text-sm sm:leading-6">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            {
              src: "/images/home-category-apparel.png",
              label: "アパレル・和装",
              sub: "着物・帯・ブランド衣類など"
            },
            {
              src: "/images/home-category-shoes.png",
              label: "靴・シューズ",
              sub: "革靴・ローファー・スニーカーなど"
            },
            {
              src: "/images/home-category-leather.png",
              label: "小物・革製品",
              sub: "財布・カードケース・キーケースなど"
            }
          ].map(({ src, label, sub }) => (
            <div key={label} className="img-zoom group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card">
              <Image src={src} alt={label} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-600 ease-luxury group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <p className="font-bold text-white">{label}</p>
                <p className="mt-1 text-xs text-white/72">{sub}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/items" variant="outline">
            買取品目を詳しく見る
          </ButtonLink>
        </div>
      </Section>

      {/* ═══ BRANDS ═══ */}
      <Section
        align="center"
        tone="fog"
        eyebrow="BRANDS"
        title="買取強化ブランド"
        lead="王道ブランドのバッグを中心に、ジュエリー・時計まで幅広く対応しています。"
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "ルイ・ヴィトン", src: "/images/brand-louis-vuitton.jpg" },
            { name: "シャネル", src: "/images/brand-chanel.jpg" },
            { name: "エルメス", src: "/images/brand-hermes.jpg" },
            { name: "グッチ", src: "/images/brand-gucci.jpg" },
            { name: "ディオール", src: "/images/brand-dior.jpg" },
            { name: "プラダ", src: "/images/brand-prada.jpg" },
            { name: "セリーヌ", src: "/images/brand-celine.jpg" },
            { name: "ロエベ", src: "/images/brand-loewe.jpg" }
          ].map(({ name, src }) => (
            <Link
              key={name}
              href="/brands"
              className="card-luxury group overflow-hidden rounded-2xl border border-charcoal/8 bg-white shadow-card"
            >
              <div className="img-zoom relative aspect-square w-full bg-fog">
                <Image
                  src={src}
                  alt={name}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-600 ease-luxury group-hover:scale-110"
                />
              </div>
              <p className="px-4 py-3 text-center text-sm font-bold text-charcoal">{name}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {brands.filter((b) => !["ルイ・ヴィトン","シャネル","エルメス","グッチ","ディオール","プラダ","セリーヌ","ロエベ"].includes(b)).map((brand) => (
            <Link
              key={brand}
              href="/brands"
              className="card-luxury rounded-xl border border-charcoal/8 bg-white px-3 py-4 text-center text-sm font-bold text-charcoal transition-colors hover:border-crimson/30 hover:bg-crimson-light/20"
            >
              {brand}
            </Link>
          ))}
        </div>
      </Section>

      {/* ═══ FLOW ═══ */}
      <Section
        align="center"
        eyebrow="FLOW"
        title="相談から買取までの流れ"
        lead="最初の接点はLINEでも電話でも構いません。納得できた場合のみ、次の手続きへ進みます。"
      >
        <div className="grid gap-5 md:grid-cols-4">
          {flowSteps.map((step, index) => (
            <div key={step.title} className="card-luxury relative overflow-hidden rounded-2xl border border-charcoal/8 bg-white p-6 shadow-card">
              <p className="mb-4 font-serif text-4xl font-bold text-crimson/20">0{index + 1}</p>
              <div className="mb-3 flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-crimson-light/50 to-crimson-light/15 text-crimson shadow-sm">
                <step.icon aria-hidden size={22} strokeWidth={1.8} />
              </div>
              <h3 className="font-bold text-charcoal">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-charcoal/58">{step.body}</p>
              {index < 3 ? (
                <div className="absolute -right-2 top-1/2 hidden -translate-y-1/2 text-crimson/20 md:block">
                  <ArrowRight size={24} />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </Section>

      {/* ═══ PRICES ═══ */}
      <Section align="center" tone="fog" eyebrow="PRICE" title="買取参考価格">
        <div className="grid gap-5 md:grid-cols-3">
          {priceReferences.slice(0, 3).map((item) => (
            <div key={item.item} className="card-luxury relative overflow-hidden rounded-2xl border border-charcoal/8 bg-white p-6 shadow-card">
              <div className="absolute right-6 top-6 size-1.5 rounded-full bg-crimson/20" aria-hidden />
              <p className="text-[11px] font-bold tracking-[1.5px] text-crimson">{item.category}</p>
              <h3 className="mt-2 font-bold text-charcoal">{item.item}</h3>
              <p className="mt-3 text-sm text-charcoal/52">{item.condition}</p>
              <p className="mt-4 font-serif text-2xl font-bold text-charcoal">{item.price}</p>
              <p className="mt-2 text-[11px] text-charcoal/40">{item.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/prices" variant="outline">
            参考価格をもっと見る
          </ButtonLink>
        </div>
      </Section>

      {/* ═══ TESTIMONIALS ═══ */}
      <Section align="center" eyebrow="VOICE" title="お客様の声 / 買取実績">
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((voice) => (
            <figure key={voice.name} className="card-luxury relative overflow-hidden rounded-2xl border border-charcoal/8 bg-white p-6 shadow-card">
              <Quote aria-hidden size={28} className="mb-2 text-crimson/12" />
              <blockquote className="leading-8 text-charcoal/68">&ldquo;{voice.body}&rdquo;</blockquote>
              <figcaption className="mt-5 flex items-center gap-3 text-sm font-bold text-charcoal">
                <div className="flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-crimson-light/50 to-crimson-light/15 text-xs font-bold text-crimson">
                  {voice.name.charAt(0)}
                </div>
                {voice.name}
                {voice.note ? <span className="font-normal text-charcoal/38">/ {voice.note}</span> : null}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-crimson/10 bg-gradient-to-br from-crimson-light/15 to-crimson-light/5 p-6">
          <h3 className="font-bold text-charcoal">催事開催実績</h3>
          <ul className="mt-3 grid gap-2 text-sm text-charcoal/58">
            {eventHistory.map((event) => (
              <li key={event} className="flex items-start gap-2.5">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-crimson" />
                {event}
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
