"use client";

import { useEffect, useState, Suspense } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, Mail, Github, Linkedin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";
import { LetterReveal } from "@/components/animations/text-reveal";
import { FadeIn } from "@/components/animations/fade-in";

// Dynamically import 3D component to avoid SSR issues
const ParticleField = dynamic(
  () => import("@/components/3d/particle-field").then((mod) => mod.ParticleField),
  { ssr: false }
);

const roles = [
  "Security Researcher",
  "Privacy Advocate",
  "PhD Student",
  "Empiricist",
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      {mounted && (
        <Suspense fallback={null}>
          <ParticleField />
        </Suspense>
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Greeting */}
            <FadeIn delay={0.2}>
              <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
                Welcome to my corner of the internet
              </span>
            </FadeIn>

            {/* Name */}
            <div className="space-y-2">
              <FadeIn delay={0.3}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  Hi, I&apos;m{" "}
                  <span className="gradient-text">
                    <LetterReveal text="Mohamed" delay={0.5} />
                  </span>
                </h1>
              </FadeIn>

              {/* Animated Role */}
              <FadeIn delay={0.4}>
                <div className="h-12 flex items-center justify-center lg:justify-start">
                  <motion.span
                    key={roleIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-xl sm:text-2xl text-muted-foreground"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </div>
              </FadeIn>
            </div>

            {/* Short Bio */}
            <FadeIn delay={0.5}>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
                {siteConfig.bio.short} I explore how technology, policy, and human
                experience intersect to shape digital trust and freedom.
              </p>
            </FadeIn>

            {/* Affiliation */}
            <FadeIn delay={0.6}>
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span>{siteConfig.university}</span>
              </div>
            </FadeIn>

            {/* CTA Buttons */}
            <FadeIn delay={0.7}>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Button
                  size="lg"
                  className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  asChild
                >
                  <Link href="/publications">
                    <FileText className="mr-2 h-4 w-4" />
                    View Publications
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full"
                  asChild
                >
                  <Link href={`mailto:${siteConfig.email}`}>
                    <Mail className="mr-2 h-4 w-4" />
                    Get in Touch
                  </Link>
                </Button>
              </div>
            </FadeIn>

            {/* Social Links */}
            <FadeIn delay={0.8}>
              <div className="flex items-center justify-center lg:justify-start space-x-4 pt-4">
                {[
                  { icon: Github, href: siteConfig.social.github, label: "GitHub" },
                  { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
                  { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-full bg-muted hover:bg-accent/20 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Profile Image */}
          <FadeIn delay={0.4} direction="left">
            <div className="relative flex justify-center lg:justify-end">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-accent/20 blur-3xl scale-110" />

                {/* Image container */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-accent/20 shadow-2xl">
                  <Image
                    src="/profile.jpg"
                    alt={siteConfig.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

              </motion.div>
            </div>
          </FadeIn>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2 text-muted-foreground"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
