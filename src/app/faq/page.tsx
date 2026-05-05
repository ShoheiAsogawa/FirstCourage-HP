import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { faqs } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "よくある質問",
  description: "LINE査定、催事買取、付属品、査定だけの相談など、FirstCourageによくある質問。",
  path: "/faq"
});

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="相談前の不安を、先に解消します。"
        lead="催事買取やLINE査定が初めての方からよくいただく質問をまとめました。"
      />
      <Section title="よくある質問">
        <div className="grid gap-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="rounded-lg border border-ink/10 bg-white p-5">
              <summary className="cursor-pointer font-bold text-navy">{faq.question}</summary>
              <p className="mt-4 leading-8 text-ink/72">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Section>
      <CtaBand tone="dark" />
    </>
  );
}
