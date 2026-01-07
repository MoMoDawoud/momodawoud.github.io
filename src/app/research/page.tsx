import { Metadata } from "next";
import { ResearchContent } from "./research-content";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research projects by Mohamed Dawoud in security, privacy, and cybercrime.",
};

export default function ResearchPage() {
  return <ResearchContent />;
}
