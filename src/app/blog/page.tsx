import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { BlogContent } from "./blog-content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Research notes, field reports, and reflections on security, privacy, and the people affected by them.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Mohamed Moustafa Dawoud",
    description: "Research notes, field reports, and reflections on security, privacy, and the people affected by them.",
    url: "/blog",
    siteName: "Mohamed Moustafa Dawoud",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-card.png",
        width: 1200,
        height: 630,
        alt: "Mohamed Moustafa Dawoud - PhD Student at UC Santa Cruz",
      },
    ]
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  return <BlogContent posts={posts} />;
}
