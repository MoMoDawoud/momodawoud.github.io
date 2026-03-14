"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { StaggerChildren, StaggerItem } from "@/components/animations/fade-in";

const newsItems = [
  {
    date: "Mar 2026",
    title: "Attended the 4th Annual Bay Area HCI Gathering",
    description:
      "Connected with ~150 HCI researchers at Santa Clara University across topics in human-computer interaction, accessibility, and responsible AI.",
    link: "/blog/hello-world",
  },
  {
    date: "Mar 2026",
    title: "Now recruiting for the AI Privacy & Regulation Study",
    description:
      "Our study with UC Santa Cruz and Stanford University is actively recruiting practitioners who build, govern, or deploy AI products. We are conducting confidential one-hour interviews to understand how professionals navigate privacy under the EU AI Act, CCPA, GDPR, and evolving US state laws.",
    link: "https://randlab.engineering.ucsc.edu/aigov-study/",
  },
  {
    date: "Feb 2026",
    title: "Presented at USEC 2026 (co-located with NDSS) in San Diego",
    description:
      "Gave my first PhD research talk on our paper \"From Underground to Mainstream Marketplaces: Measuring AI-Enabled NSFW Deepfakes on Fiverr\" at the Symposium on Usable Security and Privacy.",
    link: "/blog/ndss-2026-experience",
  },
  {
    date: "Feb 2026",
    title: "Paper on AI-enabled deepfakes accepted at USEC 2026",
    description:
      "Our paper measuring AI abuse-as-a-service on Fiverr was accepted at USEC 2026, co-located with NDSS (~32% acceptance rate) — the first systematic study of NSFW deepfake services on a mainstream gig platform.",
    link: "/publications",
  },
  {
    date: "Feb 2026",
    title: "Launched Egyptians in CS Research with Badr AlKhamissi",
    description:
      "Co-founded a community directory featuring 262 Egyptian computer science researchers across 16 research tracks worldwide, expanding scope from AI to all of CS.",
    link: "/blog/egyptians-in-cs-research",
  },
  {
    date: "Dec 2025",
    title: "Released PaperClerk AI",
    description:
      "Open-sourced a local, privacy-preserving assistant for managing and triaging research paper libraries.",
    link: "/blog/paperclerk-ai",
  },
  {
    date: "Jun 2025",
    title: "Joined UC Santa Cruz as a PhD student",
    description:
      "Started my PhD in Computer Science & Engineering, advised by Prof. Ramakrishnan (Ram) Sundara Raman, with a focus on human-centered security, privacy, and responsible AI.",
  },
  {
    date: "Apr 2025",
    title: "Featured in Dartmouth Guarini School Student Spotlight",
    description:
      "Profiled by Dartmouth's Guarini School of Graduate and Advanced Studies — discussing research in human-centered security and privacy, the journey from Zefta, Egypt to Dartmouth, and advocacy for international students in STEM policy.",
    link: "https://guarinigrad.dartmouth.edu/blog/2025/04/28/student-spotlight-mohamed-moustafa-dawoud/",
  },
  {
    date: "Feb 2025",
    title: "Selected as AAAS CASE Workshop Delegate",
    description:
      "One of four graduate students chosen to represent Dartmouth College at the AAAS Catalyzing Advocacy in Science and Engineering Workshop in Washington, D.C., engaging with policymakers on science, technology, and public policy.",
  },
  {
    date: "Feb 2025",
    title: "Attended NDSS 2025 in San Diego",
    description:
      "Participated in the Network and Distributed System Security Symposium and the USEC workshop on human factors of security.",
  },
  {
    date: "Jan 2025",
    title: "RaaS paper published in Computers in Human Behavior",
    description:
      "Our paper \"Vendor communication themes in darknet Ransomware-as-a-Service (RaaS) advertisements\" is now published, analyzing how vendors communicate with potential customers on darknet marketplaces — with victimization appearing in 70% of advertisements as the dominant theme.",
    link: "/publications",
  },
  {
    date: "Jan 2025",
    title: "Started as Lead GTA at Dartmouth College",
    description:
      "Serving as Lead Graduate Teaching Assistant for COSC 55: Security & Privacy under Prof. Sami Saydjari, designing an AI-integrated teaching model with structured oral evaluations for 28 students.",
    link: "/teaching",
  },
  {
    date: "Sep 2024",
    title: "Joined MBZUAI as Research Associate",
    description:
      "Began research at Mohamed bin Zayed University of AI in Abu Dhabi on combating deepfakes and promoting responsible AI through a human-centered lens.",
  },
  {
    date: "Aug 2024",
    title: "DVa paper published at USENIX Security 2024",
    description:
      "Our paper \"DVa: Extracting Victims and Abuse Vectors from Android Accessibility Malware\" appeared at the 33rd USENIX Security Symposium.",
    link: "/publications",
  },
];

export function NewsContent() {
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="News"
          description="Latest updates from my research, publications, and academic activities."
        />

        <StaggerChildren className="divide-y divide-border">
          {newsItems.map((item, index) => (
            <StaggerItem key={index}>
              <div className="flex gap-4 sm:gap-6 py-4 first:pt-0 hover:bg-accent-subtle transition-colors duration-150 -mx-3 px-3 rounded">
                <span className="font-mono text-xs text-foreground-quaternary w-20 flex-shrink-0 pt-0.5 tabular-nums">
                  {item.date}
                </span>
                <div className="flex-1 min-w-0">
                  <h2 className="text-sm font-medium mb-0.5">{item.title}</h2>
                  <p className="text-sm text-foreground-secondary">
                    {item.description}
                  </p>
                  {item.link && (
                    <Link
                      href={item.link}
                      className="inline-flex items-center gap-1 mt-1 font-mono text-xs link-accent"
                    >
                      Read more <ArrowRight className="h-3 w-3" />
                    </Link>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Follow */}
        <div className="mt-16 text-sm text-foreground-tertiary">
          <p>
            Follow my work on{" "}
            <a
              href="https://scholar.google.com/citations?user=Xeo2-fIAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent"
            >
              Google Scholar
            </a>
            <span className="text-foreground-quaternary"> &middot; </span>
            <a
              href="https://twitter.com/mohameddawoud"
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent"
            >
              Twitter/X
            </a>
            <span className="text-foreground-quaternary"> &middot; </span>
            <a
              href="https://linkedin.com/in/mohamedmostafadawod"
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
