"use client";

import { motion } from "framer-motion";
import { Shield, Brain, Globe, Lock, Users, LineChart } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations/fade-in";

const researchAreas = [
  {
    icon: Shield,
    title: "Human-Centered Security",
    description:
      "Examining how users, engineers, and policymakers form mental models of security and privacy.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Globe,
    title: "Internet Measurements",
    description:
      "Large-scale measurements to understand censorship, surveillance, and privacy violations.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Lock,
    title: "Privacy Engineering",
    description:
      "Designing systems that make privacy protections more usable and transparent.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Brain,
    title: "AI for Security",
    description:
      "Leveraging LLMs to help users understand risks and support expert decision-making.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Users,
    title: "Cybercrime Ecosystems",
    description:
      "Analyzing underground economies, RaaS markets, and threat actor behaviors.",
    color: "from-indigo-500 to-violet-500",
  },
  {
    icon: LineChart,
    title: "Security Education",
    description:
      "Redesigning security courses to embrace AI tools while encouraging critical thinking.",
    color: "from-rose-500 to-pink-500",
  },
];

export function ResearchHighlights() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Research Focus
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Bridging Technology, Policy & People
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My research sits at the intersection of empirical security research,
              human-computer interaction, and policy analysis.
            </p>
          </FadeIn>
        </div>

        {/* Research Cards */}
        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchAreas.map((area, index) => (
            <StaggerItem key={area.title}>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 h-full"
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                {/* Icon */}
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${area.color} mb-4`}
                >
                  <area.icon className="h-6 w-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                  {area.title}
                </h3>
                <p className="text-muted-foreground text-sm">{area.description}</p>

                {/* Hover indicator */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <motion.span
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                    className="text-accent"
                  >
                    →
                  </motion.span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
