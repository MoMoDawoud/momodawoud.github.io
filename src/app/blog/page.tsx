import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { BlogContent } from "./blog-content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Research notes, technical tutorials, and reflections on security, privacy, and AI.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Mohamed Dawoud",
    description: "Research notes, technical tutorials, and reflections on security, privacy, and AI.",
    url: "/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  return <BlogContent posts={posts} />;
}
