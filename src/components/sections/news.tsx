"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations/fade-in";

// News items - easy to update
const newsItems = [
  {
    date: "January 2025",
    title: "Started PhD at UC Santa Cruz",
    description:
      "Joined the Computer Science & Engineering department at UC Santa Cruz, advised by Prof. Ram Sundara Raman.",
    type: "Milestone",
    link: null,
  },
  {
    date: "2025",
    title: "Paper Published in Computers in Human Behavior",
    description:
      "Our paper on Ransomware-as-a-Service marketing on darknet marketplaces was published.",
    type: "Publication",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0747563225000184",
  },
  {
    date: "2024",
    title: "USENIX Security Publication",
    description:
      "Research on Android malware analysis published at USENIX Security Symposium.",
    type: "Publication",
    link: "https://www.usenix.org/conference/usenixsecurity24/presentation/xu-haichuan",
  },
  {
    date: "2024",
    title: "Student Spotlight: AAAS CASE",
    description:
      "Featured in student spotlight discussing journey from Zefta, Egypt to Dartmouth.",
    type: "Media",
    link: null,
  },
];

const typeColors: Record<string, string> = {
  Milestone: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  Publication: "bg-green-500/10 text-green-500 border-green-500/20",
  Media: "bg-purple-500/10 text-purple-500 border-purple-500/20",
  Award: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
};

export function News() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            News & Updates
          </h2>
        </FadeIn>

        {/* News List */}
        <StaggerChildren className="space-y-4">
          {newsItems.map((item, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ x: 4 }}
                className="group flex gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors"
              >
                {/* Date */}
                <div className="flex-shrink-0 w-24 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {item.date}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-2 mb-1">
                    <h3 className="font-medium group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <Badge
                      variant="outline"
                      className={`flex-shrink-0 text-xs ${typeColors[item.type] || ""}`}
                    >
                      {item.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-accent hover:underline mt-2"
                    >
                      Read more
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
