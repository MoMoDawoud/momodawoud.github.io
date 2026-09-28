import { Metadata } from "next";
import { TeachingContent } from "./teaching-content";

export const metadata: Metadata = {
  title: "Teaching",
  description:
    "Teaching experience and courses by Mohamed Moustafa Dawoud in security and privacy.",
  alternates: { canonical: "/teaching" },
  openGraph: {
    title: "Teaching | Mohamed Moustafa Dawoud",
    description: "Teaching experience and courses by Mohamed Moustafa Dawoud in security and privacy.",
    url: "/teaching",
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

export default function TeachingPage() {
  return <TeachingContent />;
}
