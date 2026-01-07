"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, Globe, Brain, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations/fade-in";

const ongoingProjects = [
  {
    title: "Human-Centered Security & Privacy",
    description:
      "Investigating how different stakeholders form mental models of security and privacy through surveys, interviews, and large-scale measurements.",
    icon: Users,
    status: "Active",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "AI for Security Decision Making",
    description:
      "Exploring how LLMs can help users understand risks, assist experts with decision-making, and provide policymakers with clearer evidence.",
    icon: Brain,
    status: "Active",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Internet Censorship & Surveillance",
    description:
      "Large-scale internet measurements to understand censorship, surveillance, and privacy violations across different regions.",
    icon: Globe,
    status: "Active",
    color: "from-blue-500 to-cyan-500",
  },
];

export function OngoingProjects() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
          <div>
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                Ongoing Projects
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-muted-foreground">
                Current research directions and active investigations
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <Button variant="ghost" className="mt-4 sm:mt-0" asChild>
              <Link href="/research">
                View All Research
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </FadeIn>
        </div>

        {/* Projects Grid */}
        <StaggerChildren className="grid md:grid-cols-3 gap-6">
          {ongoingProjects.map((project) => (
            <StaggerItem key={project.title}>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 h-full"
              >
                {/* Status badge */}
                <Badge className="absolute top-4 right-4 bg-green-500/10 text-green-500 border-green-500/20">
                  {project.status}
                </Badge>

                {/* Icon */}
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${project.color} mb-4`}
                >
                  <project.icon className="h-6 w-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-3 group-hover:text-accent transition-colors pr-16">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
