import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

const BASE_URL = "https://momodawoud.github.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/publications`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/cv`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/teaching`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/service`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/recognition`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/news`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/journey`, changeFrequency: "monthly", priority: 0.6 },
  ];

  const posts = getAllPosts();
  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
