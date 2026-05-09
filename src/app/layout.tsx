import type { Metadata } from "next";
import Script from "next/script";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { company } from "@/data/site";
import { siteJsonLd } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://firstcourage.example.com"),
  title: {
    default: `${company.name} | ブランド品買取・LINE無料査定`,
    template: `%s | ${company.name}`
  },
  description:
    "ブランドバッグ、時計、ジュエリー、金・貴金属の催事買取とLINE無料査定。写真を送るだけで、初めての方も気軽に相談できます。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: company.name
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        <Header />
        <main className="pt-[69px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
