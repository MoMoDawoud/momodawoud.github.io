import type { Metadata } from "next";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mohamed Moustafa Dawoud, PhD student at UC Santa Cruz working on human-centered security, privacy, and AI governance. From Zefta, Egypt to Santa Cruz.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Mohamed Moustafa Dawoud",
    description:
      "PhD student at UC Santa Cruz working on human-centered security, privacy, and AI governance. From Zefta, Egypt to Santa Cruz.",
    url: "/about",
    siteName: "Mohamed Moustafa Dawoud",
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: "/og-card.png",
        width: 1200,
        height: 630,
        alt: "Mohamed Moustafa Dawoud - PhD Student at UC Santa Cruz",
      },
    ],
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
