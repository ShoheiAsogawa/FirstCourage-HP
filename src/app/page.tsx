import Image from "next/image";
import { CheckCircle2, Quote } from "lucide-react";
import { ButtonLink, LineButton, PhoneButton } from "@/components/ButtonLink";
import { CtaBand } from "@/components/CtaBand";
import { DecorativeIcon, InfoCard } from "@/components/Cards";
import { Section } from "@/components/Section";
import {
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
      {/* Luxurious Red & White Hero */}
      <section className="relative isolate min-h-[620px] overflow-hidden bg-white pt-7 text-charcoal sm:min-h-[820px] sm:pt-14 lg:flex lg:items-center lg:pt-16">
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
        {/* Rich red-tinted elegant overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/98 via-white/92 to-white/85 md:bg-gradient-to-r md:from-white/97 md:via-white/90 md:to-white/70" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
        
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-12 pt-2 sm:px-6 sm:pb-14 sm:pt-8 lg:pb-20 lg:pt-14">
          <div className="max-w-[340px] sm:max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red/20 bg-red/5 px-4 py-1 text-xs font-bold tracking-[3px] text-crimson">
              EST. 2018 — 全国催事対応
            </div>
            <h1 className="font-serif text-[1.95rem] font-bold leading-[1.1] tracking-[-0.02em] text-charcoal sm:text-6xl lg:text-7xl">
              大切なブランド品に、<span className="text-crimson">本物の価値</span>を。
            </h1>
            <p className="mt-6 hidden max-w-2xl text-lg leading-9 text-charcoal/70 md:block">
              株式会社FirstCourageは、ブランドバッグ・時計・ジュエリー・貴金属の買取を専門としています。
              思い出の品だからこそ、丁寧な査定と透明なご説明を。まずはLINEで写真をお送りください。
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:flex sm:flex-row sm:gap-4">
              <LineButton
                label="LINEで写真査定"
                className="min-h-12 px-5 py-3 text-sm shadow-xl sm:min-h-[54px] sm:px-8 sm:text-base btn-luxury"
              />
              <PhoneButton
                label="電話で相談する"
                className="min-h-12 border-2 border-charcoal/10 px-5 py-3 text-sm text-charcoal hover:bg-charcoal hover:text-white sm:min-h-[54px] sm:px-8 sm:text-base btn-luxury"
              />
            </div>
            <ul className="mt-9 hidden gap-3 text-sm font-medium text-charcoal/70 sm:grid sm:grid-cols-3">
              {["査定料完全無料", "しつこい営業なし", "許認可を明示して安心"].map((item) => (
                <li key={item} className="flex items-center gap-2.5 rounded-full border border-red/15 bg-white/90 px-5 py-3 backdrop-blur">
                  <CheckCircle2 aria-hidden size={17} className="text-crimson" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative -mt-20 border-y border-red/10 bg-white pb-8">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-3 sm:px-6">
          {metrics.map((metric) => (
            <div key={metric.label} className="card-luxury relative overflow-hidden rounded-3xl border border-red/10 bg-white p-6 shadow-luxury">
              <div className="absolute right-6 top-6 size-1.5 rounded-full bg-crimson" aria-hidden />
              <p className="text-xs font-bold tracking-[1px] text-charcoal/50">{metric.label}</p>
              <p className="mt-3 font-serif text-4xl font-bold tracking-tighter text-charcoal">
                <span className="text-crimson">{metric.value}</span>
                <span className="ml-1 text-lg font-sans text-charcoal/60">{metric.unit}</span>
              </p>
              {metric.note ? <p className="mt-1 text-xs text-charcoal/50">{metric.note}</p> : null}
            </div>
          ))}
        </div>
      </section>

      <Section
        align="center"
        eyebrow="TRUST"
        title="安心できる買取の在り方。"
        lead="運営元が明確で、しつこい営業をしない。初めての方でも安心してご相談いただける体制を整えています。"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {trustPoints.map((point) => (
            <InfoCard key={point.title} title={point.title} body={point.body} icon={point.icon} />
          ))}
        </div>
      </Section>

      <CtaBand />

      <div className="relative h-72 overflow-hidden sm:h-96 lg:h-[480px]">
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
            <p className="mb-4 text-xs font-bold tracking-[4px] text-white/70">EXPERIENCE</p>
            <p className="font-serif text-3xl font-bold leading-tight tracking-[-0.01em] text-white sm:text-5xl lg:text-6xl">
              洗練された空間で、<br />本物だけがわかる対話を。
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
            <div className="absolute inset-0 bg-gradient-to-t from-navy/86 via-navy/38 to-navy/6" />
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

      <Section
        align="center"
        eyebrow="ITEMS"
        title="買取品目"
        lead="ブランド品から貴金属、整理品までまとめて相談できます。状態に不安があるものもLINEで確認できます。"
      >
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
          {itemCategories.slice(0, 10).map((item) => (
            <div key={item.name} className="relative overflow-hidden rounded-xl border border-ink/10 bg-white p-3 shadow-sm transition hover:border-gold sm:p-4">
              <DecorativeIcon icon={item.icon} size={132} />
              <div className="relative z-10 min-h-28 sm:min-h-28">
                <h3 className="text-sm font-bold leading-snug text-navy sm:text-base">{item.name}</h3>
                <p className="mt-2 text-xs leading-5 text-ink/65 sm:text-sm sm:leading-6">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-4">
          {[
            { src: "/images/apparel-coat.jpg", label: "アパレル・コート", sub: "ブランドコート・ジャケットなど" },
            { src: "/images/shoes-oxford.jpg", label: "靴・シューズ", sub: "ブランド革靴・パンプス・スニーカー" },
            { src: "/images/accessories-flatlay.jpg", label: "小物・アクセサリー", sub: "財布・ベルト・サングラスなど" }
          ].map(({ src, label, sub }) => (
            <div key={label} className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-soft">
              <Image src={src} alt={label} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/78 via-ink/28 to-transparent" />
              <div className="absolute bottom-0 left-0 p-3 sm:p-4">
                <p className="text-sm font-bold leading-snug text-white sm:text-base">{label}</p>
                <p className="mt-0.5 text-[11px] leading-snug text-white/80 sm:text-xs">{sub}</p>
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
        eyebrow="FLOW"
        title="相談から買取までの流れ"
        lead="最初の接点はLINEでも電話でも構いません。納得できた場合のみ、次の手続きへ進みます。"
      >
        <div className="grid gap-4 md:grid-cols-4">
          {flowSteps.map((step, index) => (
            <div key={step.title} className="relative overflow-hidden rounded-2xl border border-ink/10 bg-white p-5 shadow-sm transition hover:border-gold">
              <DecorativeIcon icon={step.icon} />
              <div className="relative z-10">
                <p className="mb-4 font-serif text-3xl font-bold text-gold">0{index + 1}</p>
                <h3 className="font-bold text-navy">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/68">{step.body}</p>
              </div>
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
            <figure key={voice.name} className="relative overflow-hidden rounded-lg border border-ink/10 bg-white p-5">
              <DecorativeIcon icon={Quote} size={176} />
              <div className="relative z-10">
                <blockquote className="leading-8 text-ink/72">「{voice.body}」</blockquote>
                <figcaption className="mt-4 text-sm font-bold text-navy">
                  {voice.name}
                </figcaption>
              </div>
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
    </>
  );
}
