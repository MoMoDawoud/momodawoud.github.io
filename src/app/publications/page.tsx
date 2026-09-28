import type { Metadata } from "next";
import { PublicationsContent } from "./publications-content";
import { PublicationsJsonLd } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Peer-reviewed publications by Mohamed Moustafa Dawoud on security, privacy, cybercrime, and AI governance.",
  alternates: { canonical: "/publications" },
  openGraph: {
    title: "Publications | Mohamed Moustafa Dawoud",
    description: "Peer-reviewed publications by Mohamed Moustafa Dawoud on security, privacy, cybercrime, and AI governance.",
    url: "/publications",
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

export default function PublicationsPage() {
  return (
    <>
      <PublicationsJsonLd />
      <PublicationsContent />
    </>
  );
}
