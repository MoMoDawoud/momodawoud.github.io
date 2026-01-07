import { Metadata } from "next";
import { CVContent } from "./cv-content";

export const metadata: Metadata = {
  title: "CV",
  description:
    "Curriculum Vitae of Mohamed Dawoud - PhD Student in Computer Science at UC Santa Cruz.",
};

export default function CVPage() {
  return <CVContent />;
}
