import { Metadata } from "next";
import { ServiceContent } from "./service-content";

export const metadata: Metadata = {
  title: "Service & Outreach",
  description:
    "Professional service, community outreach, and mentorship by Mohamed Dawoud.",
  alternates: { canonical: "/service" },
  openGraph: {
    title: "Service & Outreach | Mohamed Moustafa Dawoud",
    description: "Professional service, community outreach, and mentorship by Mohamed Dawoud.",
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
