import { Metadata } from "next";
import { RecognitionContent } from "./recognition-content";

export const metadata: Metadata = {
  title: "Recognition",
  description:
    "Fellowships, media coverage, and recognition for Mohamed Dawoud's work in security and privacy.",
  alternates: { canonical: "/recognition" },
  openGraph: {
    title: "Recognition | Mohamed Moustafa Dawoud",
    description: "Fellowships, media coverage, and recognition for Mohamed Dawoud's work in security and privacy.",
    url: "/recognition",
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

export default function RecognitionPage() {
  return <RecognitionContent />;
}
