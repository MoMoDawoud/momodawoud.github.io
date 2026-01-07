"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ExternalLink,
  GraduationCap,
  Users,
  Brain,
  Shield,
  CheckCircle,
  Lock,
  Quote,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/animations/fade-in";

export function TeachingContent() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <FadeIn>
            <Badge className="mb-4">Education</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Teaching</h1>
            <p className="text-xl text-muted-foreground">
              Materials and reflections from courses I have taught and supported.
            </p>
          </FadeIn>
        </div>

        {/* Dartmouth Course Header */}
        <FadeIn delay={0.1}>
          <div className="mb-8">
            <h2 className="font-serif text-3xl font-bold mb-2">Dartmouth College</h2>
            <h3 className="text-xl text-accent font-medium mb-2">Spring 2025 — COSC 55: Security & Privacy</h3>
            <p className="text-muted-foreground font-medium">
              Role: Lead Graduate Teaching Assistant (with Prof. Sami Saydjari)
            </p>
          </div>
        </FadeIn>

        {/* Main Photo */}
        <FadeIn delay={0.15}>
          <div className="rounded-2xl overflow-hidden mb-10 border border-border">
            <Image
              src="/prof_sami.jpg"
              alt="Teaching session with Prof. Sami Saydjari"
              width={1200}
              height={800}
              className="w-full h-auto"
              priority
            />
          </div>
        </FadeIn>

        {/* Main Narrative */}
        <FadeIn delay={0.2}>
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
            <p className="text-lg leading-relaxed">
              This spring at Dartmouth College, I had the chance to serve as a (Lead) Graduate Teaching Assistant for COSC 55: Security & Privacy with the incredible Prof. Sami Saydjari—and it turned out to be one of the most transformative experiences of my academic journey.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              It wasn&apos;t just about supporting a course.<br />
              It was about reimagining how we teach Computer Science in a world where tools like ChatGPT and GitHub Copilot are always just a click away.
            </p>

            <div className="p-6 rounded-xl bg-accent/5 border border-accent/20 my-8">
              <div className="flex items-start gap-3">
                <Lightbulb className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-lg font-medium m-0">
                  I came into this role with a belief that guided everything I did:<br />
                  <span className="text-accent">AI is reshaping how students learn—and our teaching must evolve with it.</span>
                </p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Instead of pretending students weren&apos;t using these tools, I leaned in. I redesigned part of the course to embrace AI coding assistants—while holding students to a higher standard of understanding.
            </p>

            {/* Lab Design Points */}
            <div className="my-8">
              <p className="font-medium mb-4">I created a new set of labs where:</p>
              <div className="space-y-3">
                {[
                  "Students had full freedom in system design",
                  "AI tools were allowed—but used mindfully",
                  "Every week, I met each student/team for oral check-ins to probe real understanding",
                  "Each project ended with a final oral evaluation",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              If you used AI, great—but you had to explain, justify, and defend your choices.
            </p>

            <p className="leading-relaxed">
              This wasn&apos;t about catching anyone—it was about preparing students to think like engineers, not just produce output.
              I learned that it&apos;s not enough to ask what students built—we have to keep asking <em>why</em> until they own their thinking.
            </p>

            {/* Stats */}
            <div className="my-8 p-6 rounded-xl bg-card border border-border">
              <p className="font-medium mb-4">I decided to take full ownership of this new model:</p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-accent">28</div>
                  <div className="text-sm text-muted-foreground">Students</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">Weekly</div>
                  <div className="text-sm text-muted-foreground">1-on-1s</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">100%</div>
                  <div className="text-sm text-muted-foreground">Lab Design & Grading</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                It was a heavy lift—far beyond the usual expectations.
              </p>
            </div>

            {/* WhisperChain+ Project */}
            <div className="my-8 p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-accent/10 border border-purple-500/20">
              <h4 className="font-semibold text-lg mb-3">Standout Project: WhisperChain+</h4>
              <p className="text-muted-foreground mb-4">
                A secure, anonymous compliment system featuring:
              </p>
              <div className="space-y-2">
                {[
                  "Role-based control",
                  "Blind signature tokens",
                  "Privacy-preserving audit logs",
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Lock className="h-4 w-4 text-purple-500" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4 italic">
                It was ambitious, messy, and beautifully real.
              </p>
            </div>

            {/* Student Quote */}
            <div className="my-10 p-8 rounded-2xl bg-card border border-border relative">
              <Quote className="h-10 w-10 text-accent/20 absolute top-4 left-4" />
              <blockquote className="text-xl italic text-center px-8 py-4">
                &ldquo;This is the best way to force real understanding. I wish more courses at Dartmouth did this.&rdquo;
              </blockquote>
              <p className="text-center text-sm text-muted-foreground mt-2">
                — Student feedback after final oral evaluation
              </p>
              <p className="text-center text-accent font-medium mt-4">
                That one sentence made my whole term.
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Then came the anonymous feedback—filled with honesty, kindness, and deep appreciation. Reading them all was genuinely overwhelming—in the best possible way.
            </p>

            <p className="leading-relaxed">
              None of this would&apos;ve been possible without <strong>Prof. Sami Saydjari</strong>, who treated me not as a TA but as a co-teacher.
              His trust gave me the space to build something I believed in—and I&apos;ll always be grateful for that.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Now the term is over. I&apos;ve watched teams evolve from &ldquo;Which hash function do we use?&rdquo; to debating zero-knowledge proofs and user-experience trade-offs.
            </p>

            <div className="p-6 rounded-xl bg-accent/5 border border-accent/20 my-8">
              <p className="text-lg font-medium m-0 text-center">
                And I&apos;ve walked away convinced that the future of Computer Science education is:<br />
                <span className="text-accent">AI-enabled, yet deeply human—built on conversation, reflection, and the courage to demand understanding over syntax.</span>
              </p>
            </div>

            <p className="leading-relaxed italic">
              To my students: You challenged me, and you grew with me. I&apos;ll carry this term with me for a long time.
            </p>

            <p className="leading-relaxed font-medium">
              To fellow educators: The future is already here. <span className="text-accent">AI belongs in the classroom—but so does rigor, reflection, and humanity.</span>
            </p>

            {/* LinkedIn Button */}
            <div className="my-8">
              <Button variant="outline" className="rounded-full" asChild>
                <a
                  href="https://www.linkedin.com/posts/mohamedmostafadawod_cybersecurity-aiineducation-privacy-activity-7338998254958764035-AywP"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check out my LinkedIn post
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </FadeIn>

        {/* Teaching Photos */}
        <FadeIn delay={0.3}>
          <div className="space-y-6 mt-12">
            <div className="rounded-xl overflow-hidden border border-border">
              <Image
                src="/teaching_2.jpg"
                alt="Teaching session at Dartmouth"
                width={1200}
                height={900}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-border">
              <Image
                src="/teaching_1.jpg"
                alt="Teaching session at Dartmouth"
                width={1200}
                height={900}
                className="w-full h-auto"
              />
            </div>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.4}>
          <div className="mt-16 p-8 rounded-2xl bg-accent/5 border border-accent/20 text-center">
            <h3 className="text-xl font-semibold mb-2">
              Interested in Collaboration?
            </h3>
            <p className="text-muted-foreground mb-4">
              I&apos;m always open to guest lectures, curriculum consulting, or
              research collaborations in security education.
            </p>
            <Button asChild>
              <a href="mailto:mdawoud@ucsc.edu">Get in Touch</a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
