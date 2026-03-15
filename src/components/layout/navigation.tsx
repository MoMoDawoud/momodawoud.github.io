"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon, Search } from "lucide-react";
import { GlobalSearch } from "@/components/global-search";
import { Magnetic } from "@/components/interactive/magnetic";
import { siteConfig } from "@/data/site-config";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Publications", href: "/publications" },
  { name: "Teaching", href: "/teaching" },
  { name: "Service & Outreach", href: "/service" },
  { name: "Recognition", href: "/recognition" },
  { name: "Blog", href: "/blog" },
  { name: "My Journey", href: "/journey" },
  { name: "CV", href: "/cv" },
];

const mobileNavItems = navItems;

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Track scroll for background opacity
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Close mobile menu on Escape
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    },
    [isMobileMenuOpen]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 print:static print:border-0",
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        )}
      >
        <nav
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-between h-12">
            {/* Logo spacer */}
            <div />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Magnetic key={item.href} strength={0.25}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cn(
                      "relative px-3 py-2 text-sm transition-colors duration-150 block",
                      isActive(item.href)
                        ? "text-foreground"
                        : "text-foreground-tertiary hover:text-foreground"
                    )}
                  >
                    {item.name}
                    {isActive(item.href) && (
                      <motion.div
                        layoutId="navbar-dot"
                        className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.5,
                        }}
                      />
                    )}
                  </Link>
                </Magnetic>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-1">
              {/* Desktop search */}
              <div className="hidden md:block">
                <GlobalSearch />
              </div>
              {/* Mobile search icon */}
              <GlobalSearch mobile />

              {/* Theme toggle with circular wipe */}
              {mounted && (
                <button
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = rect.left + rect.width / 2;
                    const y = rect.top + rect.height / 2;
                    const nextTheme = theme === "dark" ? "light" : "dark";

                    // Check for reduced motion
                    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

                    if (prefersReduced) {
                      setTheme(nextTheme);
                      return;
                    }

                    // Create wipe overlay
                    const wipe = document.createElement("div");
                    wipe.className = "theme-wipe";
                    wipe.style.setProperty("--wipe-x", `${x}px`);
                    wipe.style.setProperty("--wipe-y", `${y}px`);
                    wipe.style.backgroundColor = nextTheme === "dark" ? "#0B0F1A" : "#FFFFFF";
                    document.body.appendChild(wipe);

                    // Switch theme midway through animation
                    setTimeout(() => {
                      setTheme(nextTheme);
                    }, 250);

                    // Remove overlay after animation
                    wipe.addEventListener("animationend", () => {
                      wipe.remove();
                    });
                  }}
                  className="h-8 w-8 flex items-center justify-center rounded-md text-foreground-tertiary hover:text-foreground transition-colors duration-150"
                  aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                >
                  {theme === "dark" ? (
                    <Sun className="h-4 w-4" />
                  ) : (
                    <Moon className="h-4 w-4" />
                  )}
                </button>
              )}

              {/* Mobile menu toggle */}
              <button
                className="md:hidden h-8 w-8 flex items-center justify-center rounded-md text-foreground-tertiary hover:text-foreground transition-colors duration-150"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu — slide in from right */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/30 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden
            />
            {/* Panel */}
            <motion.div
              id="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              className="fixed inset-y-0 right-0 z-50 w-72 md:hidden bg-background border-l border-border flex flex-col"
              role="dialog"
              aria-label="Mobile navigation"
            >
              {/* Close button */}
              <div className="flex items-center justify-end h-12 px-4">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="h-8 w-8 flex items-center justify-center rounded-md text-foreground-tertiary hover:text-foreground transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 px-4 py-2" aria-label="Mobile navigation">
                {mobileNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cn(
                      "flex items-center gap-3 px-3 py-3 text-sm rounded-md transition-colors duration-150",
                      isActive(item.href)
                        ? "text-foreground font-medium"
                        : "text-foreground-secondary hover:text-foreground hover:bg-muted"
                    )}
                  >
                    {isActive(item.href) && (
                      <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                    )}
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Social links at bottom */}
              <div className="px-4 py-6 border-t border-border">
                <div className="flex flex-wrap gap-3 font-mono text-xs text-foreground-quaternary">
                  <a
                    href={siteConfig.social.googleScholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors min-h-[44px] flex items-center"
                  >
                    Scholar
                  </a>
                  <span className="flex items-center" aria-hidden>·</span>
                  <a
                    href={siteConfig.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors min-h-[44px] flex items-center"
                  >
                    GitHub
                  </a>
                  <span className="flex items-center" aria-hidden>·</span>
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors min-h-[44px] flex items-center"
                  >
                    LinkedIn
                  </a>
                  <span className="flex items-center" aria-hidden>·</span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:text-foreground transition-colors min-h-[44px] flex items-center"
                  >
                    Email
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
