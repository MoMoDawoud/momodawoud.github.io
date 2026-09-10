import { Metadata } from "next";
import { CVContent } from "./cv-content";

export const metadata: Metadata = {
  title: "CV",
  description:
    "Curriculum Vitae of Mohamed Dawoud - PhD Student in Computer Science at UC Santa Cruz.",
  alternates: { canonical: "/cv" },
  openGraph: {
    title: "CV | Mohamed Moustafa Dawoud",
    description: "Curriculum Vitae of Mohamed Dawoud - PhD Student in Computer Science at UC Santa Cruz.",
    url: "/cv",
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

export default function CVPage() {
  return <CVContent />;
}
