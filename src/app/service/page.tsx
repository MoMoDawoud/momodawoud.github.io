import { Metadata } from "next";
import { ServiceContent } from "./service-content";

export const metadata: Metadata = {
  title: "Mentorship & Service",
  description:
    "Mentoring for students, community building, and professional service by Mohamed Moustafa Dawoud.",
  alternates: { canonical: "/service" },
  openGraph: {
    title: "Mentorship & Service | Mohamed Moustafa Dawoud",
    description: "Mentoring for students, community building, and professional service by Mohamed Moustafa Dawoud.",
    url: "/service",
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

export default function ServicePage() {
  return <ServiceContent />;
}
