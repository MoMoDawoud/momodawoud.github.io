import { Metadata } from "next";
import { JourneyContent } from "./journey-content";

export const metadata: Metadata = {
  title: "My Journey",
  description:
    "The story of Mohamed Dawoud - from Zefta, Egypt to UC Santa Cruz, pursuing research in security and privacy.",
};

export default function JourneyPage() {
  return <JourneyContent />;
}
