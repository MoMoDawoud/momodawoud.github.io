import { Metadata } from "next";
import { PublicationsContent } from "./publications-content";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Academic publications by Mohamed Dawoud in security, privacy, and cybercrime research.",
};

export default function PublicationsPage() {
  return <PublicationsContent />;
}
