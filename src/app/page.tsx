import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CircleCheck as CheckCircle2, Quote } from "lucide-react";
import { ButtonLink, LineButton, PhoneButton } from "@/components/ButtonLink";
import { CtaBand } from "@/components/CtaBand";
import { DecorativeIcon, InfoCard } from "@/components/Cards";
import { Section } from "@/components/Section";
import {
  articles,
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
      {/* ═══ HERO ═══ */}
      <section className="relative isolate min-h-[640px] overflow-hidden bg-white pt-7 text-charcoal sm:min-h-[860px] sm:pt-14 lg:flex lg:items-center lg:pt-16">
        <Image
          src="/images/hero-mobile-new.png"
          alt="ブランド品とスマートフォンで気軽に査定相談する様子"
          fill
          sizes="(max-width: 767px) 100vw, 0vw"
          className="object-cover object-[54%_top] md:hidden"
          priority
        />
        <Image
          src="/images/hero-desktop-new.png"
          alt="ブランド品とスマートフォンで気軽に査定相談する様子"
          fill
          sizes="(min-width: 768px) 100vw, 0vw"
          className="hidden object-cover object-center md:block"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/98 via-white/92 to-white/85 md:bg-gradient-to-r md:from-white/97 md:via-white/90 md:to-white/70" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-12 pt-2 sm:px-6 sm:pb-14 sm:pt-8 lg:pb-20 lg:pt-14">
          <div className="max-w-[340px] sm:max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red/15 bg-crimson-light/40 px-4 py-1.5 text-[11px] font-bold tracking-[3px] text-crimson">
              <span className="inline-block size-1.5 rounded-full bg-crimson animate-pulse-soft" />
              EST. 2018 — 全国催事対応
            </div>
            <h1 className="font-serif text-[1.95rem] font-bold leading-[1.1] tracking-[-0.02em] text-charcoal sm:text-6xl lg:text-7xl">
              大切なブランド品に、<br />
              <span className="text-gradient-crimson">本物の価値</span>を。
            </h1>
            <p className="mt-6 hidden max-w-2xl text-lg leading-9 text-charcoal/68 md:block">
              株式会社FirstCourageは、ブランドバッグ・時計・ジュエリー・貴金属の買取を専門としています。
              思い出の品だからこそ、丁寧な査定と透明なご説明を。まずはLINEで写真をお送りください。
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:flex sm:flex-row sm:gap-4">
              <LineButton
                label="LINEで写真査定"
                className="min-h-12 px-5 py-3 text-sm shadow-xl sm:min-h-[54px] sm:px-8 sm:text-base"
              />
              <PhoneButton
                label="電話で相談する"
                className="min-h-12 border-2 border-charcoal/10 px-5 py-3 text-sm text-charcoal hover:bg-charcoal hover:text-white sm:min-h-[54px] sm:px-8 sm:text-base"
              />
            </div>
            <ul className="mt-9 hidden gap-3 text-sm font-medium text-charcoal/68 sm:grid sm:grid-cols-3">
              {["査定料完全無料", "しつこい営業なし", "許認可を明示して安心"].map((item) => (
                <li key={item} className="flex items-center gap-2.5 rounded-full border border-red/12 bg-white/90 px-5 py-3 backdrop-blur transition-colors hover:bg-white">
                  <CheckCircle2 aria-hidden size={17} className="text-crimson" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ METRICS ═══ */}
      <section className="relative -mt-20 border-y border-red/8 bg-white pb-8">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:grid-cols-3 sm:px-6">
          {metrics.map((metric) => (
            <div key={metric.label} className="card-luxury relative overflow-hidden rounded-3xl border border-red/8 bg-white p-7 shadow-luxury">
              <div className="absolute right-7 top-7 size-2 rounded-full bg-crimson/20" aria-hidden />
              <p className="text-[11px] font-bold tracking-[1.5px] text-charcoal/45">{metric.label}</p>
              <p className="mt-3 font-serif text-4xl font-bold tracking-tighter text-charcoal">
                <span className="text-gradient-crimson">{metric.value}</span>
                <span className="ml-1 text-lg font-sans text-charcoal/50">{metric.unit}</span>
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
        lead="運営元が明確で、しつこい営業をしない。初めての方でも安心してご相談いただける体制を整えています。"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {trustPoints.map((point) => (
            <InfoCard key={point.title} title={point.title} body={point.body} icon={point.icon} />
          ))}
        </div>
      </Section>

      <CtaBand />

      {/* ═══ EXPERIENCE BANNER ═══ */}
      <div className="img-zoom relative h-72 overflow-hidden sm:h-96 lg:h-[480px]">
        <Image
          src="/images/event-venue-wide.jpg"
          alt="FirstCourage 催事会場"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/75 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <div className="max-w-4xl">
            <p className="mb-4 text-[11px] font-bold tracking-[4px] text-white/60">EXPERIENCE</p>
            <p className="font-serif text-3xl font-bold leading-tight tracking-[-0.01em] text-white sm:text-5xl lg:text-6xl">
              洗練された空間で、<br />本物だけがわかる対話を。
            </p>
            <div className="mx-auto mt-6 h-[3px] w-10 rounded-full bg-crimson/60" />
          </div>
        </div>
      </div>

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
              src="/images/line-assessment.png"
              alt="スマートフォンでLINE査定の写真相談をするイメージ"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/86 via-charcoal/38 to-charcoal/6" />
            <div className="absolute bottom-0 left-0 p-7 text-white">
              <p className="text-sm font-bold tracking-[0.12em] text-white/80 drop-shadow">入口はゆるく、説明はまじめに。</p>
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
            { src: "/images/apparel-coat.jpg", label: "アパレル・コート", sub: "ブランドコート・ジャケットなど" },
            { src: "/images/shoes-oxford.jpg", label: "靴・シューズ", sub: "ブランド革靴・パンプス・スニーカー" },
            { src: "/images/accessories-flatlay.jpg", label: "小物・アクセサリー", sub: "財布・ベルト・サングラスなど" }
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

      <CtaBand tone="dark" />

      {/* ═══ ARTICLES ═══ */}
      {Array.isArray(articles) && articles.length > 0 ? (
        <Section align="center" tone="fog" eyebrow="COLUMN" title="お役立ち記事">
          <div className="grid gap-5 md:grid-cols-3">
            {articles.slice(0, 3).map((article: { slug: string; category: string; title: string; description: string }) => (
              <Link key={article.slug} href={`/columns/${article.slug}`} className="card-luxury group flex flex-col min-h-[200px] rounded-2xl border border-charcoal/8 bg-white p-6 shadow-card">
                <p className="text-[11px] font-bold tracking-[1.5px] text-crimson">{article.category}</p>
                <h3 className="mt-2 font-bold text-charcoal">{article.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-charcoal/56">{article.description}</p>
                <p className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-crimson transition-colors group-hover:text-crimson-dark">
                  記事を読む <ArrowRight aria-hidden size={15} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                </p>
              </Link>
            ))}
          </div>
        </Section>
      ) : null}
    </>
  );
}
