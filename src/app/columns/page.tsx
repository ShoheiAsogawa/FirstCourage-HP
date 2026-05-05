import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { articles } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "SEO記事一覧",
  description:
    "ブランド買取、LINE査定、催事買取、初めての売却に関するお役立ち記事一覧。",
  path: "/columns"
});

export default function ColumnsPage() {
  return (
    <>
      <PageHero
        eyebrow="COLUMN"
        title="ブランド品を売る前に知っておきたいこと。"
        lead="ブランド名検索、買取方法、初めての売却不安に応える記事を用意し、LINE査定への内部導線を設計しています。"
      />
      <Section title="記事一覧">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/columns/${article.slug}`}
              className="rounded-lg border border-ink/10 bg-white p-5 transition hover:border-gold"
            >
              <p className="text-xs font-bold text-gold">{article.category}</p>
              <h2 className="mt-2 font-bold text-navy">{article.title}</h2>
              <p className="mt-3 text-sm leading-7 text-ink/66">{article.description}</p>
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
