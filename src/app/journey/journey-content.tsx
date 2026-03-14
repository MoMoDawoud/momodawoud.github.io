"use client";

import React from "react";
import { PageHeader } from "@/components/page-header";
import { Timeline } from "@/components/timeline";
import { FadeIn } from "@/components/animations/fade-in";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-muted border border-border text-xs font-mono text-foreground-tertiary">
      {children}
    </span>
  );
}

function BadgeRow({ badges }: { badges: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5 mt-2">
      {badges.map((b) => (
        <Badge key={b}>{b}</Badge>
      ))}
    </div>
  );
}

const timelineItems = [
  {
    date: "2000",
    title: "Born in Zefta, Egypt",
    description:
      "A city that once declared itself the Zefta Republic during the 1919 revolution — a bold act of defiance that continues to inspire me with its legacy of resilience and independence.",
    children: (
      <div className="flex flex-wrap gap-1.5 mt-2">
        <Badge>Zefta, Egypt</Badge>
        <a href="https://en.wikipedia.org/wiki/Zefta" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-2 py-0.5 rounded-md bg-accent/10 border border-accent/20 text-xs font-mono text-accent hover:bg-accent/15 transition-colors">
          Wikipedia →
        </a>
      </div>
    ),
  },
  {
    date: "2018",
    title: "18th in Egypt's National Math Exam",
    description:
      "Ranked 18th out of more than 600,000 students nationwide in Egypt's Thanawya Amma mathematics exam. This achievement earned me a full merit scholarship.",
  },
  {
    date: "2018",
    title: "Started at The German University in Cairo",
    description:
      "Began studying Computer Science and Engineering at GUC, one of Egypt's top private universities.",
    children: <BadgeRow badges={["GUC", "Cairo, Egypt"]} />,
  },
  {
    date: "2021",
    title: "Transferred to German International University",
    description:
      "Transferred to GIU on a full merit scholarship to specialize in Information Security.",
    children: <BadgeRow badges={["GIU", "Cairo, Egypt"]} />,
  },
  {
    date: "2022",
    title: "Remote Research with USF",
    description:
      "While still in Egypt, started working remotely with Prof. C. Jordan Howell on cybercrime and underground economies research.",
    children: <BadgeRow badges={["USF", "Remote"]} />,
  },
  {
    date: "2023",
    title: "Research Intern at Georgia Tech",
    description:
      "Moved to the United States as a research intern, working under Prof. Brendan D. Saltaformaggio on systems security. Contributed to research published at USENIX Security.",
    children: <BadgeRow badges={["GT", "Atlanta, GA"]} />,
  },
  {
    date: "2024",
    title: "Graduated from GIU",
    description:
      "Graduated with Excellent with High Honors in Informatics and Computer Science, with a major in Information Security.",
    children: <BadgeRow badges={["GIU", "Cairo, Egypt"]} />,
  },
  {
    date: "2024",
    title: "Research Associate at MBZUAI",
    description:
      "Joined Mohamed bin Zayed University of Artificial Intelligence in Abu Dhabi as a Research Associate, working on combating deepfakes and responsible AI through a human-centered lens.",
    children: <BadgeRow badges={["MBZUAI", "Abu Dhabi, UAE"]} />,
  },
  {
    date: "2025",
    title: "Teaching at Dartmouth College",
    description:
      "Served as Lead Graduate Teaching Assistant for COSC 55: Security & Privacy under Prof. Sami Saydjari. Redesigned the course to embrace AI tools while encouraging deeper reflection.",
    children: <BadgeRow badges={["Dartmouth", "Hanover, NH"]} />,
  },
  {
    date: "2025",
    title: "NDSS 2025 in San Diego",
    description:
      "Attended the Network and Distributed System Security Symposium (NDSS) and the USEC workshop on human factors of security, connecting with researchers passionate about bridging people and technology.",
    children: <BadgeRow badges={["NDSS", "San Diego, CA"]} />,
  },
  {
    date: "2025",
    title: "AAAS CASE 2025 & Guarini Student Spotlight",
    description:
      "One of four graduate students selected to represent Dartmouth College at the AAAS Catalyzing Advocacy in Science and Engineering Workshop in Washington, D.C. Featured by Dartmouth's Guarini School of Graduate and Advanced Studies, discussing research in human-centered security and privacy, the journey from Zefta, Egypt to Dartmouth, and advocacy for international students in STEM policy.",
    children: <BadgeRow badges={["AAAS", "Washington, D.C."]} />,
  },
  {
    date: "2025",
    title: "PhD at UC Santa Cruz",
    description:
      "Joined UC Santa Cruz as a PhD student in Computer Science & Engineering, advised by Prof. Ram Sundara Raman, focusing on human-centered security and privacy.",
    children: <BadgeRow badges={["UCSC", "Santa Cruz, CA"]} />,
  },
  {
    date: "2026",
    title: "Completed M.S. in Computer Science & Engineering",
    description:
      "Earned a Master of Science in Computer Science & Engineering from UC Santa Cruz, en route to the PhD. Thesis reading committee: Prof. Ram Sundara Raman (Chair), Prof. Alvaro A. Cardenas, Prof. David T. Lee, and Dr. Alejandro Cuevas.",
    children: <BadgeRow badges={["UCSC", "Santa Cruz, CA"]} />,
  },
  {
    date: "2026",
    title: "Leading AI Privacy Study with Stanford",
    description:
      "Leading the AI Privacy & Regulation Study in collaboration with Stanford University, examining how practitioners navigate privacy challenges and emerging regulations like the EU AI Act, CCPA, and GDPR when building AI products.",
    children: <BadgeRow badges={["RANDLab", "Stanford"]} />,
  },
  {
    date: "2026",
    title: "Co-founded Egyptians in CS Research",
    description:
      "Co-founded and lead a community directory of 262 Egyptian computer science researchers across 16 research tracks worldwide, expanding scope from AI to all of CS in collaboration with Badr AlKhamissi.",
    children: <BadgeRow badges={["Community", "Global"]} />,
  },
  {
    date: "2026",
    title: "First Talk at NDSS — USEC 2026",
    description:
      "Presented research on AI-enabled NSFW deepfakes on Fiverr at the USEC workshop, co-located with NDSS 2026 in San Diego.",
    children: <BadgeRow badges={["NDSS", "San Diego, CA"]} />,
  },
];

export function JourneyContent() {
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="My Journey"
          description="From a small city in Egypt that once declared independence, to pursuing research that fights for people's freedom and dignity in the digital age."
        />

        {/* Timeline */}
        <section className="mb-16 ml-12 sm:ml-16">
          <Timeline items={timelineItems} variant="minimal" />
        </section>

        {/* Beyond Research — prose style */}
        <section className="mb-16">
          <hr className="mb-12" />
          <FadeIn direction="none">
            <h2 className="font-serif text-2xl font-semibold tracking-tight mb-6">
              Beyond Research
            </h2>
            <div className="space-y-4 font-serif text-foreground-secondary leading-relaxed">
              <p>
                When I&apos;m not buried in research, you&apos;ll probably catch
                me at the gym, walking along the California coast, wandering
                through redwood forests, or chasing down the next great coffee
                shop.
              </p>
              <p>
                I tell myself these moments are breaks from research — but
                truthfully, even while sipping coffee or hiking a trail, my mind
                drifts back to the same question:{" "}
                <span className="text-foreground font-semibold">
                  how can I leave the world better than I found it?
                </span>
              </p>
              <p className="text-foreground-tertiary text-sm font-sans">
                Sometimes that means pushing my research forward, sometimes it
                means dreaming about building impactful startups, and sometimes it
                simply means working hard to be kind and present with the people
                around me.
              </p>
            </div>
          </FadeIn>
        </section>
      </div>
    </div>
  );
}
