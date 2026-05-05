import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Quote } from "lucide-react";
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
      <section className="relative isolate -mt-[69px] min-h-[820px] overflow-hidden bg-linen pt-28 text-navy sm:min-h-[860px] lg:flex lg:items-center lg:pt-20">
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
        <div className="absolute inset-0 bg-gradient-to-b from-white/92 via-white/52 to-transparent md:bg-gradient-to-r md:from-linen md:via-linen/45 md:to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-linen to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-14 pt-8 sm:px-6 lg:pb-20 lg:pt-14">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl font-bold leading-tight text-navy sm:text-5xl lg:text-6xl">
              眠っているブランド品、まずは写真で査定。
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-ink/76">
              {company.name}は、ブランドバッグ・時計・ジュエリー・金貴金属の買取相談を承ります。
              催事会場へ行く前に、LINEで写真を送るだけ。査定だけでもご相談ください。
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <LineButton label="LINEで写真を送るだけ査定" />
              <PhoneButton label="電話で相談" />
            </div>
            <ul className="mt-8 grid gap-3 text-sm font-bold text-navy sm:grid-cols-3">
              {["査定料無料", "無理な営業なし", "会社情報・許認可を明示"].map((item) => (
                <li key={item} className="flex items-center gap-2 rounded-full border border-gold-soft/70 bg-white/75 px-4 py-3 backdrop-blur-sm">
                  <CheckCircle2 aria-hidden size={18} className="text-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-7 h-px w-16 bg-gold-soft" />
            <p className="mt-3 text-xs text-ink/50">古物商許可番号を明示。催事買取でも安心の運営体制です。</p>
          </div>
        </div>
      </section>

      <section className="relative -mt-20 border-y border-ink/10 bg-transparent pb-8">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-3 sm:px-6">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-gold-soft/70 bg-white p-5 shadow-soft">
              <p className="text-sm font-bold text-ink/60">{metric.label}</p>
              <p className="mt-1 font-serif text-3xl font-bold">
                <span className="text-gold">{metric.value}</span>
                <span className="ml-1 text-base text-navy">{metric.unit}</span>
              </p>
              <p className="mt-1 text-xs text-ink/55">{metric.note}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-3 max-w-7xl px-4 text-xs text-ink/45 sm:px-6">{placeholderNotice}</p>
      </section>

      <Section
        align="center"
        eyebrow="TRUST"
        title="催事買取でも、相談先が見える安心を。"
        lead="初めての方が不安に感じやすい「運営元がわからない」「強引に売らされそう」を、情報開示と相談設計で解消します。"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {trustPoints.map((point) => (
            <InfoCard key={point.title} title={point.title} body={point.body} icon={point.icon} />
          ))}
        </div>
      </Section>

      <CtaBand />

      <div className="relative h-72 overflow-hidden sm:h-96 lg:h-[460px]">
        <Image
          src="/images/event-venue-wide.jpg"
          alt="FirstCourage 催事会場"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/55" />
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-bold tracking-[0.12em] text-gold">EXPERIENCE</p>
            <p className="font-serif text-2xl font-bold leading-relaxed text-white sm:text-4xl lg:text-5xl">
              丁寧な接客と透明な査定で、安心の買取体験を。
            </p>
          </div>
        </div>
      </div>

      <Section
        align="center"
        tone="fog"
        title="買取方法"
        lead="催事での対面相談を中心に、来場前のLINE査定と電話相談を組み合わせ、不安の少ない入口を用意します。"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
          <div className="relative min-h-80 overflow-hidden rounded-3xl shadow-soft">
            <Image
              src="/images/line-assessment.png"
              alt="スマートフォンでLINE査定の写真相談をするイメージ"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/78 via-navy/18 to-transparent" />
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

      <Section
        align="center"
        eyebrow="ITEMS"
        title="買取品目"
        lead="ブランド品から貴金属、整理品までまとめて相談できます。状態に不安があるものもLINEで確認できます。"
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {itemCategories.slice(0, 10).map((item) => (
            <div key={item.name} className="rounded-2xl border border-ink/10 bg-white p-4 shadow-sm">
              <item.icon aria-hidden className="mb-3 text-gold" size={23} />
              <h3 className="font-bold text-navy">{item.name}</h3>
              <p className="mt-2 text-sm leading-6 text-ink/65">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { src: "/images/apparel-coat.jpg", label: "アパレル・コート", sub: "ブランドコート・ジャケットなど" },
            { src: "/images/shoes-oxford.jpg", label: "靴・シューズ", sub: "ブランド革靴・パンプス・スニーカー" },
            { src: "/images/accessories-flatlay.jpg", label: "小物・アクセサリー", sub: "財布・ベルト・サングラスなど" }
          ].map(({ src, label, sub }) => (
            <div key={label} className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-soft">
              <Image src={src} alt={label} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <p className="font-bold text-white">{label}</p>
                <p className="mt-0.5 text-xs text-white/80">{sub}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-7 flex justify-center">
          <ButtonLink href="/items" variant="outline">
            買取品目を詳しく見る
          </ButtonLink>
        </div>
      </Section>

      <Section
        align="center"
        tone="fog"
        eyebrow="BRANDS"
        title="買取強化ブランド"
        lead="王道ブランドのバッグを中心に、ジュエリー・時計まで幅広く対応しています。"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
              className="group overflow-hidden rounded-lg border border-ink/10 bg-white shadow-sm transition hover:border-gold"
            >
              <div className="relative aspect-square w-full bg-fog">
                <Image
                  src={src}
                  alt={name}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition group-hover:scale-105"
                />
              </div>
              <p className="px-3 py-3 text-center text-sm font-bold text-navy">{name}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {brands.filter((b) => !["ルイ・ヴィトン","シャネル","エルメス","グッチ","ディオール","プラダ","セリーヌ","ロエベ"].includes(b)).map((brand) => (
            <Link
              key={brand}
              href="/brands"
              className="rounded-md border border-ink/10 bg-white px-3 py-4 text-center text-sm font-bold text-navy transition hover:border-gold"
            >
              {brand}
            </Link>
          ))}
        </div>
      </Section>

      <Section
        align="center"
        eyebrow="FLOW"
        title="相談から買取までの流れ"
        lead="最初の接点はLINEでも電話でも構いません。納得できた場合のみ、次の手続きへ進みます。"
      >
        <div className="grid gap-4 md:grid-cols-4">
          {flowSteps.map((step, index) => (
            <div key={step.title} className="rounded-2xl border border-ink/10 bg-white p-5 shadow-sm">
              <p className="mb-4 font-serif text-3xl font-bold text-gold">0{index + 1}</p>
              <step.icon aria-hidden size={24} className="mb-3 text-navy" />
              <h3 className="font-bold text-navy">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink/68">{step.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section align="center" tone="fog" eyebrow="PRICE" title="買取参考価格">
        <div className="grid gap-4 md:grid-cols-3">
          {priceReferences.slice(0, 3).map((item) => (
            <div key={item.item} className="rounded-lg border border-ink/10 bg-white p-5">
              <p className="text-xs font-bold text-gold">{item.category}</p>
              <h3 className="mt-2 font-bold text-navy">{item.item}</h3>
              <p className="mt-3 text-sm text-ink/62">{item.condition}</p>
              <p className="mt-4 font-serif text-2xl font-bold text-navy">{item.price}</p>
              <p className="mt-2 text-xs text-ink/50">{item.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-7 flex justify-center">
          <ButtonLink href="/prices" variant="outline">
            参考価格をもっと見る
          </ButtonLink>
        </div>
      </Section>

      <Section align="center" eyebrow="VOICE" title="お客様の声 / 買取実績">
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((voice) => (
            <figure key={voice.name} className="rounded-lg border border-ink/10 bg-white p-5">
              <Quote aria-hidden size={20} className="mb-2 text-gold-soft" />
              <blockquote className="leading-8 text-ink/72">"{voice.body}"</blockquote>
              <figcaption className="mt-4 text-sm font-bold text-navy">
                {voice.name} <span className="font-normal text-ink/45">/ {voice.note}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-8 rounded-lg border border-gold-soft bg-fog p-5">
          <h3 className="font-bold text-navy">催事開催実績</h3>
          <ul className="mt-3 grid gap-2 text-sm text-ink/70">
            {eventHistory.map((event) => (
              <li key={event}>・{event}</li>
            ))}
          </ul>
        </div>
      </Section>

      <CtaBand tone="dark" />

      <Section align="center" tone="fog" eyebrow="COLUMN" title="お役立ち記事">
        <div className="grid gap-4 md:grid-cols-3">
          {articles.slice(0, 3).map((article) => (
            <Link key={article.slug} href={`/columns/${article.slug}`} className="flex flex-col min-h-[180px] rounded-lg border border-ink/10 bg-white p-6 transition hover:border-gold">
              <p className="text-xs font-bold text-gold">{article.category}</p>
              <h3 className="mt-2 font-bold text-navy">{article.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-ink/66">{article.description}</p>
              <p className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-gold">
                記事を読む <ArrowRight aria-hidden size={15} />
              </p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
