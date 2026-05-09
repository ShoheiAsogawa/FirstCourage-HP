import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CircleCheck as CheckCircle2, Quote } from "lucide-react";
import { ButtonLink, LineButton, PhoneButton } from "@/components/ButtonLink";
import { CtaBand } from "@/components/CtaBand";
import { InfoCard } from "@/components/Cards";
import { Section } from "@/components/Section";
import {
  articles,
  brands,
  company,
  eventHistory,
  flowSteps,
  itemCategories,
  metrics,
  placeholderNotice,
  priceReferences,
  purchaseMethods,
  testimonials,
  trustPoints
} from "@/data/site";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative isolate -mt-[69px] min-h-[880px] overflow-hidden bg-linen pt-28 text-navy sm:min-h-[920px] lg:flex lg:items-center lg:pt-20">
        <Image
          src="/images/hero-mobile-new.png"
          alt="ブランド品とスマートフォンで気軽に査定相談する様子"
          fill
          sizes="(max-width: 767px) 100vw, 0vw"
          className="object-cover object-[center_top] md:hidden"
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
        <div className="absolute inset-0 bg-gradient-to-b from-white/94 via-white/55 to-linen/80 md:bg-gradient-to-r md:from-linen/95 md:via-linen/50 md:to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-linen to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:pb-24 lg:pt-16">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-soft/80 bg-white/70 px-4 py-2 text-xs font-bold text-gold backdrop-blur-sm">
              <span className="inline-block size-2 rounded-full bg-gold animate-pulse-soft" />
              LINE無料査定受付中
            </div>
            <h1 className="font-serif text-4xl font-bold leading-tight text-navy sm:text-5xl lg:text-[3.5rem] lg:leading-[1.2]">
              眠っているブランド品、<br />まずは写真で査定。
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-ink/72">
              {company.name}は、ブランドバッグ・時計・ジュエリー・金貴金属の買取相談を承ります。
              催事会場へ行く前に、Webでかんたんに査定情報を入力。査定だけでもご相談ください。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LineButton label="今すぐ査定" prominent />
              <PhoneButton label="電話で相談" />
            </div>
            <ul className="mt-8 grid gap-3 text-sm font-bold text-navy sm:grid-cols-3">
              {["査定料無料", "無理な営業なし", "会社情報・許認可を明示"].map((item) => (
                <li key={item} className="flex items-center gap-2 rounded-full border border-gold-soft/60 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-sm transition-colors hover:bg-white">
                  <CheckCircle2 aria-hidden size={18} className="text-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 h-[2px] w-16 rounded-full bg-gold/60" />
            <p className="mt-3 text-xs text-ink/48">古物商許可番号を明示。催事買取でも安心の運営体制です。</p>
          </div>
        </div>
      </section>

      {/* Metrics Band */}
      <section className="relative -mt-24 pb-8">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:grid-cols-3 sm:px-6">
          {metrics.map((metric) => (
            <div key={metric.label} className="card-lift rounded-2xl border border-gold-soft/50 bg-white p-6 shadow-card">
              <p className="text-sm font-bold text-ink/55">{metric.label}</p>
              <p className="mt-2 font-serif text-3xl font-bold">
                <span className="text-gold">{metric.value}</span>
                <span className="ml-1 text-base text-navy">{metric.unit}</span>
              </p>
              <p className="mt-1 text-xs text-ink/48">{metric.note}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-4 max-w-7xl px-4 text-xs text-ink/40 sm:px-6">{placeholderNotice}</p>
      </section>

      {/* Trust Section */}
      <Section
        align="center"
        eyebrow="TRUST"
        title="催事買取でも、相談先が見える安心を。"
        lead="初めての方が不安に感じやすい「運営元がわからない」「強引に売らされそう」を、情報開示と相談設計で解消します。"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {trustPoints.map((point) => (
            <InfoCard key={point.title} title={point.title} body={point.body} icon={point.icon} />
          ))}
        </div>
      </Section>

      <CtaBand />

      {/* Experience Banner */}
      <div className="relative h-80 overflow-hidden sm:h-[28rem] lg:h-[32rem]">
        <Image
          src="/images/event-venue-wide.jpg"
          alt="FirstCourage 催事会場"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/70 via-navy/45 to-navy/30" />
        <div className="absolute inset-0 flex items-center px-6 sm:px-12">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-bold tracking-[0.12em] text-gold">EXPERIENCE</p>
            <p className="font-serif text-2xl font-bold leading-relaxed text-white sm:text-4xl lg:text-5xl">
              丁寧な接客と透明な査定で、<br />安心の買取体験を。
            </p>
            <div className="mt-6 h-[2px] w-12 rounded-full bg-gold/60" />
          </div>
        </div>
      </div>

      {/* Purchase Methods */}
      <Section
        align="center"
        tone="fog"
        title="買取方法"
        lead="催事での対面相談を中心に、来場前のLINE査定と電話相談を組み合わせ、不安の少ない入口を用意します。"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
          <div className="img-reveal relative min-h-80 overflow-hidden rounded-2xl shadow-elevated">
            <Image
              src="/images/line-assessment.png"
              alt="スマートフォンでLINE査定の写真相談をするイメージ"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <p className="text-sm font-bold tracking-[0.12em] text-gold">入口はゆるく、説明はまじめに。</p>
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

      {/* Items Section */}
      <Section
        align="center"
        eyebrow="ITEMS"
        title="買取品目"
        lead="ブランド品から貴金属、整理品までまとめて相談できます。状態に不安があるものもLINEで確認できます。"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {itemCategories.slice(0, 10).map((item) => (
            <div key={item.name} className="card-lift rounded-xl border border-ink/8 bg-white p-5 shadow-card">
              <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-gradient-to-br from-fog to-gold-light text-gold">
                <item.icon aria-hidden size={20} />
              </div>
              <h3 className="font-bold text-navy">{item.name}</h3>
              <p className="mt-2 text-sm leading-6 text-ink/60">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { src: "/images/apparel-coat.jpg", label: "アパレル・コート", sub: "ブランドコート・ジャケットなど" },
            { src: "/images/shoes-oxford.jpg", label: "靴・シューズ", sub: "ブランド革靴・パンプス・スニーカー" },
            { src: "/images/accessories-flatlay.jpg", label: "小物・アクセサリー", sub: "財布・ベルト・サングラスなど" }
          ].map(({ src, label, sub }) => (
            <div key={label} className="img-reveal group relative aspect-[4/3] overflow-hidden rounded-xl shadow-card">
              <Image src={src} alt={label} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <p className="font-bold text-white">{label}</p>
                <p className="mt-1 text-xs text-white/78">{sub}</p>
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

      {/* Brands Section */}
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
              className="card-lift group overflow-hidden rounded-xl border border-ink/8 bg-white shadow-card"
            >
              <div className="img-reveal relative aspect-square w-full bg-fog">
                <Image
                  src={src}
                  alt={name}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <p className="px-4 py-3 text-center text-sm font-bold text-navy">{name}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {brands.filter((b) => !["ルイ・ヴィトン","シャネル","エルメス","グッチ","ディオール","プラダ","セリーヌ","ロエベ"].includes(b)).map((brand) => (
            <Link
              key={brand}
              href="/brands"
              className="card-lift rounded-lg border border-ink/8 bg-white px-3 py-4 text-center text-sm font-bold text-navy transition-colors hover:border-gold hover:bg-gold-light"
            >
              {brand}
            </Link>
          ))}
        </div>
      </Section>

      {/* Flow Section */}
      <Section
        align="center"
        eyebrow="FLOW"
        title="相談から買取までの流れ"
        lead="最初の接点はLINEでも電話でも構いません。納得できた場合のみ、次の手続きへ進みます。"
      >
        <div className="grid gap-5 md:grid-cols-4">
          {flowSteps.map((step, index) => (
            <div key={step.title} className="card-lift relative rounded-xl border border-ink/8 bg-white p-6 shadow-card">
              <p className="mb-4 font-serif text-3xl font-bold text-gold">0{index + 1}</p>
              <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-gradient-to-br from-fog to-gold-light text-navy">
                <step.icon aria-hidden size={22} />
              </div>
              <h3 className="font-bold text-navy">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink/64">{step.body}</p>
              {index < 3 ? (
                <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-gold-soft md:block">
                  <ArrowRight size={20} />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </Section>

      {/* Price Section */}
      <Section align="center" tone="fog" eyebrow="PRICE" title="買取参考価格">
        <div className="grid gap-5 md:grid-cols-3">
          {priceReferences.slice(0, 3).map((item) => (
            <div key={item.item} className="card-lift rounded-xl border border-ink/8 bg-white p-6 shadow-card">
              <p className="text-xs font-bold text-gold">{item.category}</p>
              <h3 className="mt-2 font-bold text-navy">{item.item}</h3>
              <p className="mt-3 text-sm text-ink/58">{item.condition}</p>
              <p className="mt-4 font-serif text-2xl font-bold text-navy">{item.price}</p>
              <p className="mt-2 text-xs text-ink/46">{item.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/prices" variant="outline">
            参考価格をもっと見る
          </ButtonLink>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section align="center" eyebrow="VOICE" title="お客様の声 / 買取実績">
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((voice) => (
            <figure key={voice.name} className="card-lift rounded-xl border border-ink/8 bg-white p-6 shadow-card">
              <Quote aria-hidden size={24} className="mb-3 text-gold-soft" />
              <blockquote className="leading-8 text-ink/70">&ldquo;{voice.body}&rdquo;</blockquote>
              <figcaption className="mt-5 flex items-center gap-3 text-sm font-bold text-navy">
                <div className="flex size-8 items-center justify-center rounded-full bg-fog text-xs font-bold text-gold">
                  {voice.name.charAt(0)}
                </div>
                {voice.name}
                <span className="font-normal text-ink/42">/ {voice.note}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-8 rounded-xl border border-gold-soft/60 bg-gradient-to-br from-fog to-gold-light/30 p-6">
          <h3 className="font-bold text-navy">催事開催実績</h3>
          <ul className="mt-3 grid gap-2 text-sm text-ink/66">
            {eventHistory.map((event) => (
              <li key={event} className="flex items-start gap-2">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                {event}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CtaBand tone="dark" />

      {/* Articles Section */}
      <Section align="center" tone="fog" eyebrow="COLUMN" title="お役立ち記事">
        <div className="grid gap-5 md:grid-cols-3">
          {articles.slice(0, 3).map((article) => (
            <Link key={article.slug} href={`/columns/${article.slug}`} className="card-lift group flex flex-col min-h-[200px] rounded-xl border border-ink/8 bg-white p-6 shadow-card">
              <p className="text-xs font-bold text-gold">{article.category}</p>
              <h3 className="mt-2 font-bold text-navy">{article.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-ink/62">{article.description}</p>
              <p className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-gold transition-colors group-hover:text-navy">
                記事を読む <ArrowRight aria-hidden size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
              </p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
