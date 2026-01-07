import { Metadata } from "next";
import { TeachingContent } from "./teaching-content";

export const metadata: Metadata = {
  title: "Teaching",
  description:
    "Teaching experience and courses by Mohamed Dawoud in security and privacy.",
};

export default function TeachingPage() {
  return <TeachingContent />;
}
