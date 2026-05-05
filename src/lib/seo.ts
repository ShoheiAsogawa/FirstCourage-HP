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
  const fullTitle = `${title} | ${company.name}`;
  const url = `${siteUrl}${path}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: company.name,
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
  name: company.name,
  areaServed: "JP",
  telephone: company.phone,
  address: company.address,
  legalName: company.name,
  description: company.business
};
