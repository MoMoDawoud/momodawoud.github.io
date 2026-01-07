"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/fade-in";
import { siteConfig } from "@/data/site-config";

export function ResearchInterests() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Research Interests
          </h2>
        </FadeIn>

        {/* Main Research Philosophy */}
        <div className="space-y-6">
          <FadeIn delay={0.1}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe that the future of technology cannot be designed in isolation — it must be grounded in evidence of how it is used, misused, and experienced by real people. I view <span className="text-foreground font-medium">security and privacy as socio-technical challenges</span>, defined as much by human decisions and institutional practices as by the technologies that enable them.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My research focuses on <span className="text-foreground font-medium">human-centered security and privacy</span>, examining how technology, policy, and lived human experience intersect to shape — and too often undermine — trust, freedom, and dignity. I am especially interested in how different stakeholders form their <span className="text-accent font-medium">mental models</span> of security and privacy: how everyday users understand digital protections, how engineers and practitioners weigh trade-offs under pressure, and how policymakers interpret ambiguous or conflicting regulations.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              By studying these perspectives through <span className="text-foreground font-medium">large-scale internet measurements, experiments, surveys, and interviews</span>, I aim to uncover where misunderstandings, misalignments, and compliance failures emerge — and to design interventions that close these gaps.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-8 p-6 rounded-2xl bg-accent/5 border border-accent/20">
              <h3 className="text-lg font-semibold mb-3 text-accent">AI for Good</h3>
              <p className="text-muted-foreground leading-relaxed">
                I am equally interested in how AI can be harnessed for good. Beyond analyzing threats like deepfakes and disinformation, I explore how <span className="text-foreground font-medium">large language models (LLMs)</span> can be leveraged to support stakeholders across the ecosystem — helping users make sense of risks, assisting experts with decision-making, and giving policymakers clearer evidence for action.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My long-term goal is not incremental fixes but <span className="text-foreground font-medium">evidence-based redesigns</span> that bridge the gap between users, practitioners, and policymakers — and between academia and industry — reimagining technology and policy as forces that empower people and strengthen democratic values.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
