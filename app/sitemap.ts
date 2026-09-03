import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-posts";

const SITE_URL = "https://www.totymfinance.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/pricing",
    "/contact",
    "/blog",
    "/privacy",
    "/terms",
    "/services/monthly-bookkeeping",
    "/services/catch-up-bookkeeping",
    "/services/tax-ready-financials",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date("2026-09-03"),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1.0 : path === "/privacy" || path === "/terms" ? 0.2 : 0.8,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
