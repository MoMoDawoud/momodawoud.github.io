import { Metadata } from "next";
import { RecognitionContent } from "./recognition-content";

export const metadata: Metadata = {
  title: "Recognition",
  description:
    "Fellowships, media coverage, and recognition for Mohamed Dawoud's work in security and privacy.",
  alternates: { canonical: "/recognition" },
  openGraph: {
    title: "Recognition | Mohamed Dawoud",
    description: "Fellowships, media coverage, and recognition for Mohamed Dawoud's work in security and privacy.",
    url: "/recognition",
  },
};

export default function RecognitionPage() {
  return <RecognitionContent />;
}
