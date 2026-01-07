"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, GraduationCap } from "lucide-react";

const socialLinks = [
  { name: "Email", href: "mailto:mdawoud@ucsc.edu", icon: Mail },
  { name: "GitHub", href: "https://github.com/MoMoDawoud", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/in/mohameddawoud", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com/mohameddawoud", icon: Twitter },
  { name: "Google Scholar", href: "https://scholar.google.com/citations?user=YOUR_ID", icon: GraduationCap },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold gradient-text">Mohamed Dawoud</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              PhD Student in Computer Science at UC Santa Cruz, researching security and privacy.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-2">
              {[
                { name: "Publications", href: "/publications" },
                { name: "Research", href: "/research" },
                { name: "Teaching", href: "/teaching" },
                { name: "My Journey", href: "/journey" },
                { name: "CV", href: "/cv" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Connect
            </h3>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Mohamed Dawoud. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with{" "}
            <span className="text-accent">Next.js</span>,{" "}
            <span className="text-accent">Three.js</span>, and{" "}
            <span className="text-accent">Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
