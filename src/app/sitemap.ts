import type { MetadataRoute } from "next";
import { articles } from "@/data/site";

const base = "https://firstcourage.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/first-time",
    "/purchase-methods",
    "/items",
    "/brands",
    "/prices",
    "/faq",
    "/company",
    "/contact",
    "/columns"
  ];

  return [
    ...routes.map((route) => ({
      url: `${base}${route}`,
      lastModified: new Date()
    })),
    ...articles.map((article) => ({
      url: `${base}/columns/${article.slug}`,
      lastModified: new Date()
    }))
  ];
}
