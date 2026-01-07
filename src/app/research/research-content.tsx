"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Shield,
  Globe,
  Brain,
  Lock,
  Users,
  ExternalLink,
  ArrowRight,
  Microscope,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations/fade-in";

const researchProjects = [
  {
    title: "AI Abuse-as-a-Service on Gig Platforms",
    status: "Published",
    description:
      "A mixed-methods empirical study analyzing how mainstream gig platforms enable AI-driven abuse and NCII-related services. Measuring how deepfake production, synthetic identities, and other AI-enabled abuse offerings propagate on freelance marketplaces. First systematic measurement of AI abuse-as-a-service on a commercial gig marketplace.",
    collaborators: ["Alejandro Cuevas (UCSC)", "Prof. Ram Sundara Raman (UCSC)", "Princeton CITP"],
    publications: ["USEC 2026 (co-located with NDSS)"],
    tags: ["AI Abuse", "Platform Safety", "Gig Economy", "NCII"],
    icon: Shield,
    color: "from-red-500 to-orange-500",
  },
  {
    title: "AI Governance, Privacy & Regulation Study",
    status: "Active",
    description:
      "A qualitative study examining how organizations govern AI responsibly under emerging privacy and regulatory demands. Leading the full research lifecycle: IRB design, recruitment, 75-minute expert interviews, data collection, and analysis. Mapping governance structures, challenges, and emerging best practices.",
    collaborators: ["RANDLab (UCSC)", "Stanford Empirical Security Research Group"],
    publications: [],
    tags: ["AI Governance", "Privacy", "Regulation", "CCPA/GDPR"],
    icon: Brain,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "CCPA Privacy Compliance Audit",
    status: "Active",
    description:
      "Investigating whether privacy laws meaningfully protect users in practice. Using a dual-lens audit combining LLM-based privacy-policy evaluation with automated cookie-tracking measurements to examine how CCPA reshapes transparency and tracking behavior across websites.",
    collaborators: ["Prof. Ram Sundara Raman (UCSC)"],
    publications: [],
    tags: ["Privacy", "CCPA", "Policy Analysis", "Web Tracking"],
    icon: Globe,
    color: "from-teal-500 to-cyan-500",
  },
  {
    title: "Ransomware-as-a-Service Ecosystem Analysis",
    status: "Published",
    description:
      "Comprehensive analysis of how Ransomware-as-a-Service is marketed and sold on darknet marketplaces. Examined vendor communication themes, seller strategies, and ecosystem dynamics.",
    collaborators: ["Prof. C. Jordan Howell (USF)"],
    publications: ["Computers in Human Behavior 2025"],
    tags: ["Cybercrime", "Dark Web", "Underground Economy"],
    icon: Lock,
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Android Accessibility Malware Analysis",
    status: "Published",
    description:
      "Systems-level analysis of Android accessibility malware using DVa framework. Investigated LLM potential for static analysis of malicious apps and contributed to understanding how malware exploits accessibility services.",
    collaborators: [
      "Haichuan Xu (Georgia Tech)",
      "Prof. Brendan Saltaformaggio (Georgia Tech)",
    ],
    publications: ["USENIX Security 2024"],
    tags: ["Mobile Security", "Malware Analysis", "Accessibility"],
    icon: Shield,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Human-Centered Security & Privacy",
    status: "Active",
    description:
      "Investigating how different stakeholders form mental models of security and privacy. Using surveys, interviews, and large-scale measurements to understand misalignments between users, engineers, and policymakers.",
    collaborators: ["Prof. Ram Sundara Raman (UC Santa Cruz)"],
    publications: [],
    tags: ["HCI", "Privacy", "Mental Models", "Policy"],
    icon: Users,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Deepfake Detection & Responsible AI",
    status: "Active",
    description:
      "Research on combating deepfakes through human-centered approaches. Investigating user mental models and trust judgments with AI-generated content, and developing prototype systems for detecting and explaining AI-generated media.",
    collaborators: ["MBZUAI"],
    publications: [],
    tags: ["Deepfakes", "AI Trust", "Detection", "Explainability"],
    icon: Brain,
    color: "from-indigo-500 to-violet-500",
  },
];

export function ResearchContent() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <FadeIn>
            <Badge className="mb-4">Projects</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Research</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              My research focuses on understanding and improving security and
              privacy through empirical methods, bridging the gap between
              technology, policy, and human experience.
            </p>
          </FadeIn>
        </div>

        {/* Research Vision */}
        <FadeIn delay={0.1}>
          <div className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-purple-500/10 border border-accent/20">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-accent/20 text-accent">
                <Microscope className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Research Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  My long-term goal is not incremental fixes but evidence-based
                  redesigns that bridge the gap between users, practitioners, and
                  policymakers — and between academia and industry — reimagining
                  technology and policy as forces that empower people and
                  strengthen democratic values.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <section>
          <FadeIn>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <span className="w-8 h-1 bg-accent rounded-full" />
              Research Projects
            </h2>
          </FadeIn>

          <StaggerChildren className="space-y-6">
            {researchProjects.map((project) => (
              <StaggerItem key={project.title}>
                <motion.div
                  whileHover={{ y: -2 }}
                  className="group p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Icon */}
                    <div
                      className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center`}
                    >
                      <project.icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
                          {project.title}
                        </h3>
                        <Badge
                          variant={
                            project.status === "Published"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {project.status}
                        </Badge>
                      </div>

                      <p className="text-muted-foreground">
                        {project.description}
                      </p>

                      {/* Collaborators */}
                      <div className="text-sm">
                        <span className="font-medium">Collaborators: </span>
                        <span className="text-muted-foreground">
                          {project.collaborators.join(", ")}
                        </span>
                      </div>

                      {/* Publications */}
                      {project.publications.length > 0 && (
                        <div className="text-sm">
                          <span className="font-medium">Publications: </span>
                          <span className="text-accent">
                            {project.publications.join(", ")}
                          </span>
                        </div>
                      )}

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </section>

        {/* CTA */}
        <FadeIn delay={0.2}>
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="rounded-full" asChild>
              <Link href="/publications">
                View All Publications
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full" asChild>
              <a href="mailto:mdawoud@ucsc.edu">
                Discuss Collaboration
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
