import { Metadata } from "next";
import { TalksContent } from "./talks-content";

export const metadata: Metadata = {
  title: "Talks",
  description:
    "Talks and guest lectures by Mohamed Moustafa Dawoud on privacy, AI safety, and regulation.",
  alternates: { canonical: "/talks" },
  openGraph: {
    title: "Talks | Mohamed Moustafa Dawoud",
    description: "Talks and guest lectures by Mohamed Moustafa Dawoud on privacy, AI safety, and regulation.",
    url: "/talks",
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

export default function TalksPage() {
  return <TalksContent />;
}
