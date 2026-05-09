import type { MetadataRoute } from "next";
const base = "https://firstcourage.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/first-time",
    "/purchase-methods",
    "/items",
    "/prices",
    "/faq",
    "/company",
    "/contact"
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date()
  }));
}
