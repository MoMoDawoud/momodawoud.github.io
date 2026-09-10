import { Metadata } from "next";
import { JourneyContent } from "./journey-content";

export const metadata: Metadata = {
  title: "My Journey",
  description:
    "The story of Mohamed Dawoud - from Zefta, Egypt to UC Santa Cruz, pursuing research in security and privacy.",
  alternates: { canonical: "/journey" },
  openGraph: {
    title: "My Journey | Mohamed Moustafa Dawoud",
    description: "The story of Mohamed Dawoud - from Zefta, Egypt to UC Santa Cruz, pursuing research in security and privacy.",
    url: "/journey",
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

export default function JourneyPage() {
  return <JourneyContent />;
}
