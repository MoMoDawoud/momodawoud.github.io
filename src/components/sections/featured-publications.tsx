"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink, FileText, Code, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations/fade-in";

// Featured publications data
const featuredPublications = [
  {
    title: "Ransomware-as-a-Service Marketing on Darknet Marketplaces",
    authors: ["Mohamed Dawoud", "C. Jordan Howell"],
    venue: "Computers in Human Behavior",
    year: 2025,
    type: "Journal",
    tags: ["Cybercrime", "RaaS", "Dark Web"],
    links: {
      paper: "https://www.sciencedirect.com/science/article/abs/pii/S0747563225000184",
    },
    abstract:
      "Analysis of how Ransomware-as-a-Service is marketed on darknet marketplaces, examining seller strategies and ecosystem dynamics.",
  },
  {
    title: "USENIX Security Research on Android Malware",
    authors: ["Haichuan Xu", "Mohamed Dawoud", "Brendan D. Saltaformaggio"],
    venue: "USENIX Security Symposium",
    year: 2024,
    type: "Conference",
    tags: ["Android", "Malware", "Systems Security"],
    links: {
      paper: "https://www.usenix.org/conference/usenixsecurity24/presentation/xu-haichuan",
    },
    abstract:
      "Systems security research on Android malware detection and analysis, contributing to the understanding of mobile threats.",
  },
];

export function FeaturedPublications() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
          <div>
            <FadeIn>
              <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                Featured Work
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Selected Publications
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <Button variant="ghost" className="mt-4 sm:mt-0" asChild>
              <Link href="/publications">
                View All Publications
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </FadeIn>
        </div>

        {/* Publications Grid */}
        <StaggerChildren className="space-y-6">
          {featuredPublications.map((pub, index) => (
            <StaggerItem key={pub.title}>
              <motion.article
                whileHover={{ y: -2 }}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Main Content */}
                  <div className="flex-1 space-y-4">
                    {/* Type Badge & Year */}
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{pub.type}</Badge>
                      <span className="text-sm text-muted-foreground">
                        {pub.year}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
                      {pub.title}
                    </h3>

                    {/* Authors */}
                    <p className="text-muted-foreground">
                      {pub.authors.map((author, i) => (
                        <span key={author}>
                          <span
                            className={
                              author === "Mohamed Dawoud"
                                ? "font-medium text-foreground"
                                : ""
                            }
                          >
                            {author}
                          </span>
                          {i < pub.authors.length - 1 && ", "}
                        </span>
                      ))}
                    </p>

                    {/* Venue */}
                    <p className="text-sm text-accent font-medium">{pub.venue}</p>

                    {/* Abstract */}
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {pub.abstract}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {pub.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex lg:flex-col gap-2">
                    {pub.links.paper && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full"
                        asChild
                      >
                        <a
                          href={pub.links.paper}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FileText className="mr-2 h-4 w-4" />
                          Paper
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
