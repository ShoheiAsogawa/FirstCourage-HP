import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { LineButton, PhoneButton } from "@/components/ButtonLink";
import { articles } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) return {};

  return createMetadata({
    title: article.title,
    description: article.description,
    path: `/columns/${article.slug}`
  });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();

  const related = articles.filter((item) => item.slug !== article.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={article.category}
        title={article.title}
        lead={article.description}
      />

      {/* Article body */}
      <Section>
        <div className="article-body mx-auto max-w-3xl">
          {article.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          {/* CTA card */}
          <div className="mt-10 rounded-lg border border-gold-soft bg-fog p-6">
            <h2 className="font-serif text-xl font-bold text-navy">この品目の査定を相談する</h2>
            <p className="mt-3 leading-8 text-ink/72">
              写真を送るだけでLINE査定できます。まずはお気軽にご相談ください。
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <LineButton />
              <PhoneButton />
            </div>
          </div>
        </div>
      </Section>

      {/* 関連記事 */}
      <Section tone="fog" title="関連記事">
        <div className="grid gap-4 md:grid-cols-3">
          {related.map((item) => (
            <Link
              key={item.slug}
              href={`/columns/${item.slug}`}
              className="rounded-lg border border-ink/10 bg-white p-5 transition hover:border-gold"
            >
              <p className="text-xs font-bold text-gold">{item.category}</p>
              <h2 className="mt-2 font-bold text-navy">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-ink/66">{item.description}</p>
              <p className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-gold">
                記事を読む <ArrowRight aria-hidden size={15} />
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand tone="dark" />
    </>
  );
}
