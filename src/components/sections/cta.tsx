"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";
import { siteConfig } from "@/data/site-config";

export function CTA() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent via-purple-600 to-pink-600 p-8 sm:p-12 lg:p-16"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center text-white">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Let&apos;s Collaborate
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-8">
                I&apos;m always interested in discussing research collaborations,
                speaking opportunities, or just connecting with fellow researchers
                and practitioners in security and privacy.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="rounded-full bg-white text-accent hover:bg-white/90"
                  asChild
                >
                  <Link href={`mailto:${siteConfig.email}`}>
                    <Mail className="mr-2 h-5 w-5" />
                    Send me an Email
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/30 text-white hover:bg-white/10"
                  asChild
                >
                  <Link href="/cv">
                    View my CV
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </FadeIn>

            {/* Additional info */}
            <FadeIn delay={0.3}>
              <div className="mt-12 pt-8 border-t border-white/20">
                <p className="text-sm text-white/60 mb-4">Currently based in</p>
                <p className="text-white/90">
                  {siteConfig.location.city}
                </p>
              </div>
            </FadeIn>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
