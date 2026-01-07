"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";
import { siteConfig } from "@/data/site-config";

export function Intro() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Profile Card */}
          <FadeIn className="lg:col-span-1">
            <motion.div
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-card border border-border sticky top-24"
            >
              {/* Profile Image */}
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-accent/20">
                <Image
                  src="/profile.jpg"
                  alt={siteConfig.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <div className="text-center space-y-2">
                <h3 className="text-xl font-bold">{siteConfig.name}</h3>
                <p className="text-accent text-sm font-medium">
                  {siteConfig.role}
                </p>
                <p className="text-muted-foreground text-sm">
                  {siteConfig.department}
                </p>
              </div>

              {/* Location & Contact */}
              <div className="mt-6 pt-6 border-t border-border space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <GraduationCap className="h-4 w-4 text-accent" />
                  <span>{siteConfig.university}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span>{siteConfig.location.city}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 text-accent" />
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-accent">
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              {/* Link to Journey */}
              <div className="mt-6">
                <Button variant="outline" className="w-full rounded-full" asChild>
                  <Link href="/journey">
                    My Story
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </FadeIn>

          {/* Bio Content */}
          <div className="lg:col-span-2 space-y-6">
            <FadeIn>
              <p className="text-lg leading-relaxed">
                I am a PhD student in <span className="font-medium">Computer Science & Engineering</span> at the{" "}
                <a
                  href="https://engineering.ucsc.edu/departments/computer-science-and-engineering/"
                  className="text-accent hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  University of California, Santa Cruz
                </a>
                , where I am fortunate to be advised by{" "}
                <a
                  href="https://ramakrishnansr.com"
                  className="text-accent hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Prof. Ramakrishnan (Ram) Sundara Raman
                </a>
                .
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At my core, I am an <span className="text-foreground font-medium">empiricist</span> with a mission. I believe that the future of technology cannot be designed in isolation — it must be grounded in evidence of how it is used, misused, and experienced by real people.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I view <span className="text-foreground font-medium">security and privacy as socio-technical challenges</span>, defined as much by human decisions and institutional practices as by the technologies that enable them. My research focuses on <span className="text-accent font-medium">human-centered security and privacy</span>, examining how technology, policy, and lived human experience intersect to shape — and too often undermine — trust, freedom, and dignity.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am especially interested in how different stakeholders form their <span className="text-foreground font-medium">mental models</span> of security and privacy: how everyday users understand digital protections, how engineers and practitioners weigh trade-offs under pressure, and how policymakers interpret ambiguous or conflicting regulations.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="p-6 rounded-2xl bg-accent/5 border border-accent/20">
                <h3 className="text-lg font-semibold mb-3 text-accent">Research Approach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  By studying these perspectives through <span className="text-foreground font-medium">large-scale internet measurements, experiments, surveys, and interviews</span>, I aim to uncover where misunderstandings, misalignments, and compliance failures emerge — and to design interventions that close these gaps.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am equally interested in how <span className="text-foreground font-medium">AI can be harnessed for good</span>. Beyond analyzing threats like deepfakes and disinformation, I explore how large language models (LLMs) can be leveraged to support stakeholders across the ecosystem — helping users make sense of risks, assisting experts with decision-making, and giving policymakers clearer evidence for action.
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My long-term goal is not incremental fixes but <span className="text-foreground font-medium">evidence-based redesigns</span> that bridge the gap between users, practitioners, and policymakers — reimagining technology and policy as forces that empower people and strengthen democratic values.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
