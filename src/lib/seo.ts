import type { Metadata } from "next";
import { company } from "@/data/site";

const siteUrl = "https://firstcourage.example.com";

export function createMetadata({
  title,
  description,
  path = "/"
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const fullTitle = `${title} | ${company.tradeName}`;
  const url = `${siteUrl}${path}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: company.tradeName,
      locale: "ja_JP",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description
    }
  };
}

export const siteJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.tradeName,
  alternateName: company.name,
  areaServed: "JP",
  telephone: company.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "谷町９丁目２－１２－３０２",
    addressLocality: "大阪市中央区",
    addressRegion: "大阪府",
    postalCode: "540-0009",
    addressCountry: "JP"
  },
  legalName: company.name,
  description: company.business
};
