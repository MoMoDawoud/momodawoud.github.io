import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

// Stamped at build time so recrawls see a real lastmod rather than none.
const BUILT = new Date();

const BASE_URL = "https://momodawoud.github.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: BUILT, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: BUILT, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/publications`, lastModified: BUILT, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/blog`, lastModified: BUILT, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/teaching`, lastModified: BUILT, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/service`, lastModified: BUILT, changeFrequency: "monthly", priority: 0.7 },
  ];

  const files: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/Mohamed_Dawoud_CV.pdf`, lastModified: BUILT, changeFrequency: "monthly", priority: 0.6 },
  ];

  const posts = getAllPosts();
  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...files, ...blogPages];
}
