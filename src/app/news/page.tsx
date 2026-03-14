import type { Metadata } from "next";
import { NewsContent } from "./news-content";

export const metadata: Metadata = {
  title: "News",
  description:
    "Latest news and updates from Mohamed Dawoud's research in security, privacy, and AI governance.",
  alternates: { canonical: "/news" },
  openGraph: {
    title: "News | Mohamed Dawoud",
    description: "Latest news and updates from Mohamed Dawoud's research in security, privacy, and AI governance.",
    url: "/news",
  },
};

export default function NewsPage() {
  return <NewsContent />;
}
