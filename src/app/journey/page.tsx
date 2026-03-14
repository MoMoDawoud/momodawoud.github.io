import { Metadata } from "next";
import { JourneyContent } from "./journey-content";

export const metadata: Metadata = {
  title: "My Journey",
  description:
    "The story of Mohamed Dawoud - from Zefta, Egypt to UC Santa Cruz, pursuing research in security and privacy.",
  alternates: { canonical: "/journey" },
  openGraph: {
    title: "My Journey | Mohamed Dawoud",
    description: "The story of Mohamed Dawoud - from Zefta, Egypt to UC Santa Cruz, pursuing research in security and privacy.",
    url: "/journey",
  },
};

export default function JourneyPage() {
  return <JourneyContent />;
}
