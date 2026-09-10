import type { Metadata } from "next";
import { NewsContent } from "./news-content";

export const metadata: Metadata = {
  title: "News",
  description:
    "Latest news and updates from Mohamed Dawoud's research in security, privacy, and AI governance.",
  alternates: { canonical: "/news" },
  openGraph: {
    title: "News | Mohamed Moustafa Dawoud",
    description: "Latest news and updates from Mohamed Dawoud's research in security, privacy, and AI governance.",
    url: "/news",
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

export default function NewsPage() {
  return <NewsContent />;
}
