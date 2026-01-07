"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  GraduationCap,
  Building2,
  Plane,
  Coffee,
  Heart,
  TreePine,
  Dumbbell,
  Calendar,
  Award,
  Quote,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations/fade-in";

const timeline = [
  {
    year: "1999",
    title: "Born in Zefta, Egypt",
    description:
      "A city that once declared itself the Zefta Republic during the 1919 revolution — a bold act of defiance that continues to inspire me with its legacy of resilience and independence.",
    icon: MapPin,
    type: "origin",
  },
  {
    year: "2019",
    title: "18th in Egypt's National Math Exam",
    description:
      "Ranked 18th out of more than 600,000 students nationwide in Egypt's Thanawya Amma mathematics exam. This achievement earned me a full merit scholarship.",
    icon: Award,
    type: "achievement",
  },
  {
    year: "2019",
    title: "Started at German International University",
    description:
      "Began studying Computer Science with a specialization in Information Security in Cairo, on a full merit scholarship.",
    icon: GraduationCap,
    type: "education",
  },
  {
    year: "2022",
    title: "Remote Research with USF",
    description:
      "While still in Egypt, started working remotely with Prof. C. Jordan Howell on cybercrime and underground economies research.",
    icon: Building2,
    type: "research",
  },
  {
    year: "2023",
    title: "Research Intern at Georgia Tech",
    description:
      "Moved to the United States as a research intern, working under Prof. Brendan D. Saltaformaggio on systems security. Contributed to research published at USENIX Security.",
    icon: Plane,
    type: "research",
  },
  {
    year: "Sep-Dec 2024",
    title: "Research Associate at MBZUAI",
    description:
      "Joined Mohamed bin Zayed University of Artificial Intelligence in Abu Dhabi as a Research Associate, working on combating deepfakes and responsible AI through a human-centered lens.",
    icon: Building2,
    type: "research",
  },
  {
    year: "Jan-Jun 2025",
    title: "Teaching at Dartmouth College",
    description:
      "Served as Lead Graduate Teaching Assistant for COSC 55: Security & Privacy under Prof. Sami Saydjari. Redesigned the course to embrace AI tools while encouraging deeper reflection.",
    icon: GraduationCap,
    type: "teaching",
  },
  {
    year: "Feb 2025",
    title: "NDSS 2025 in San Diego",
    description:
      "Attended the Network and Distributed System Security Symposium (NDSS) and the USEC workshop on human factors of security, connecting with researchers passionate about bridging people and technology.",
    icon: Building2,
    type: "research",
  },
  {
    year: "Apr 2025",
    title: "AAAS CASE 2025 Student Spotlight",
    description:
      "Traveled to Washington, D.C. for the AAAS CASE conference on federal policymaking and advocacy for scientific research. Featured in Guarini School Student Spotlight.",
    icon: Award,
    type: "achievement",
  },
  {
    year: "Jun 2025",
    title: "PhD at UC Santa Cruz",
    description:
      "Joined UC Santa Cruz as a PhD student in Computer Science & Engineering, advised by Prof. Ram Sundara Raman, focusing on human-centered security and privacy.",
    icon: GraduationCap,
    type: "education",
  },
];

const interests = [
  {
    icon: Dumbbell,
    title: "Fitness",
    description: "Regular gym sessions keep me grounded and energized.",
  },
  {
    icon: Coffee,
    title: "Coffee",
    description: "Always on the hunt for the next great coffee shop.",
  },
  {
    icon: TreePine,
    title: "Nature",
    description: "Walking the California coast and wandering through redwood forests.",
  },
  {
    icon: Heart,
    title: "Impact",
    description: "Constantly asking: how can I leave the world better than I found it?",
  },
];

const typeColors: Record<string, string> = {
  origin: "bg-orange-500",
  achievement: "bg-yellow-500",
  education: "bg-blue-500",
  research: "bg-purple-500",
  teaching: "bg-green-500",
};

export function JourneyContent() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <FadeIn>
            <Badge className="mb-4">Personal</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">My Journey</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From a small city in Egypt that once declared independence, to pursuing
              research that fights for people&apos;s freedom and dignity in the digital age.
            </p>
          </FadeIn>
        </div>

        {/* Origin Story */}
        <section className="mb-20">
          <FadeIn>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-purple-500/10 border border-accent/20">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-accent/20 text-accent">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Where I Come From</h2>
                  <p className="text-accent font-medium">Zefta, Egypt</p>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I proudly come from <span className="text-foreground font-medium">Zefta, Egypt</span> — a city that once declared itself the{" "}
                <a
                  href="https://egyptian-gazette.com/egypt/zefta-egyptian-town-that-once-turned-into-republic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Zefta Republic
                </a>{" "}
                during the 1919 revolution, a bold act of defiance that continues to inspire me with its legacy of resilience and independence. That spirit shaped my own journey.
              </p>
            </div>
          </FadeIn>
        </section>

        {/* Timeline */}
        <section className="mb-20">
          <FadeIn>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Calendar className="h-6 w-6 text-accent" />
              The Path So Far
            </h2>
          </FadeIn>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

            <StaggerChildren className="space-y-8">
              {timeline.map((item, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="relative flex gap-6 group"
                  >
                    {/* Timeline dot */}
                    <div
                      className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${typeColors[item.type]} text-white shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      <item.icon className="h-5 w-5" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <div className="p-5 rounded-xl bg-card border border-border group-hover:border-accent/50 transition-colors">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <Badge variant="outline">{item.year}</Badge>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* Beyond Research */}
        <section className="mb-20">
          <FadeIn>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Heart className="h-6 w-6 text-accent" />
              Beyond Research
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              When I&apos;m not buried in research, you&apos;ll probably catch me at the gym, walking along the California coast, wandering through redwood forests, or chasing down the next great coffee shop.
            </p>
          </FadeIn>

          <StaggerChildren className="grid sm:grid-cols-2 gap-4">
            {interests.map((interest) => (
              <StaggerItem key={interest.title}>
                <motion.div
                  whileHover={{ y: -2 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border"
                >
                  <div className="p-2 rounded-lg bg-accent/10 text-accent">
                    <interest.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{interest.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {interest.description}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </section>

        {/* Philosophy */}
        <section>
          <FadeIn>
            <div className="p-8 rounded-2xl bg-card border border-border">
              <Quote className="h-8 w-8 text-accent mb-4" />
              <p className="text-xl leading-relaxed italic text-muted-foreground mb-4">
                &ldquo;I tell myself these moments are breaks from research — but truthfully, even while sipping coffee or hiking a trail, my mind drifts back to the same question: <span className="text-foreground font-medium">how can I leave the world better than I found it?</span>&rdquo;
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Sometimes that means pushing my research forward, sometimes it means dreaming about building impactful startups, and sometimes it simply means working hard to be kind and present with the people around me. Either way, I&apos;m always fueled by the same drive: <span className="text-accent font-medium">fighting for people&apos;s freedom, dignity, and trust in the digital age.</span>
              </p>
            </div>
          </FadeIn>
        </section>
      </div>
    </div>
  );
}
