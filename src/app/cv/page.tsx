import { Metadata } from "next";
import { CVContent } from "./cv-content";

export const metadata: Metadata = {
  title: "CV",
  description:
    "Curriculum Vitae of Mohamed Dawoud - PhD Student in Computer Science at UC Santa Cruz.",
  alternates: { canonical: "/cv" },
  openGraph: {
    title: "CV | Mohamed Dawoud",
    description: "Curriculum Vitae of Mohamed Dawoud - PhD Student in Computer Science at UC Santa Cruz.",
    url: "/cv",
  },
};

export default function CVPage() {
  return <CVContent />;
}
