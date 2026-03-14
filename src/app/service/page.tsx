import { Metadata } from "next";
import { ServiceContent } from "./service-content";

export const metadata: Metadata = {
  title: "Service & Outreach",
  description:
    "Professional service, community outreach, and mentorship by Mohamed Dawoud.",
  alternates: { canonical: "/service" },
  openGraph: {
    title: "Service & Outreach | Mohamed Dawoud",
    description: "Professional service, community outreach, and mentorship by Mohamed Dawoud.",
    url: "/service",
  },
};

export default function ServicePage() {
  return <ServiceContent />;
}
