import type { Metadata } from "next";
import { HomeContent } from "@/components/sections/home-content";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 2);
  return <HomeContent recentPosts={recentPosts} />;
}
