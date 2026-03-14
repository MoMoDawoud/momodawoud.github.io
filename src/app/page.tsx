import { HomeContent } from "@/components/sections/home-content";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 2);
  return <HomeContent recentPosts={recentPosts} />;
}
