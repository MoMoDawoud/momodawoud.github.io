"use client";

import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, X, FileText, GraduationCap, PenLine } from "lucide-react";
import { publications } from "@/data/publications";

interface SearchResult {
  title: string;
  description: string;
  href: string;
  type: string;
  icon: React.ElementType;
}

const staticPages: SearchResult[] = [
  { title: "Home", description: "Main page and bio", href: "/", type: "Page", icon: FileText },
  { title: "About", description: "Background, research, and the path from Zefta to Santa Cruz", href: "/about", type: "Page", icon: FileText },
  { title: "Publications", description: "All peer-reviewed publications", href: "/publications", type: "Page", icon: FileText },
  { title: "Teaching", description: "Teaching experience at Dartmouth", href: "/teaching", type: "Page", icon: GraduationCap },
  { title: "Mentorship & Service", description: "Mentoring, community building, and professional service", href: "/service", type: "Page", icon: FileText },
  { title: "CV", description: "Curriculum Vitae (PDF)", href: "/Mohamed_Dawoud_CV.pdf", type: "File", icon: FileText },
  { title: "Blog", description: "Research notes and tutorials", href: "/blog", type: "Page", icon: PenLine },
];

const publicationResults: SearchResult[] = publications.map((pub) => ({
  title: pub.title,
  description: `${pub.venue}, ${pub.year}`,
  href: "/publications",
  type: "Publication",
  icon: FileText,
}));

export interface BlogSearchItem {
  slug: string;
  title: string;
  description: string;
}

interface GlobalSearchProps {
  mobile?: boolean;
  /** Derived from getAllPosts() in the server layout, so a new post can never
      be missing from search the way the hand-maintained index allowed. */
  posts?: BlogSearchItem[];
}

export function GlobalSearch({ mobile, posts = [] }: GlobalSearchProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();
  const resultsRef = useRef<HTMLDivElement>(null);
  const restoreFocusRef = useRef<HTMLElement | null>(null);

  const allSearchItems = useMemo(
    () => [
      ...staticPages,
      ...publicationResults,
      ...posts.map((post) => ({
        title: post.title,
        description: post.description,
        href: `/blog/${post.slug}`,
        type: "Blog",
        icon: PenLine,
      })),
    ],
    [posts]
  );

  // Return focus to whatever opened the dialog (WCAG 2.4.3).
  useEffect(() => {
    if (isOpen) {
      restoreFocusRef.current = document.activeElement as HTMLElement;
    } else {
      restoreFocusRef.current?.focus?.();
      restoreFocusRef.current = null;
    }
  }, [isOpen]);

  const results = useMemo(() => {
    if (!query.trim()) return staticPages;
    const q = query.toLowerCase();
    return allSearchItems.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q)
    ).slice(0, 8);
  }, [query, allSearchItems]);

  // Adjust state during render rather than in an effect: resetting in an
  // effect renders one frame with a stale highlight, then re-renders.
  const [lastQuery, setLastQuery] = useState(query);
  if (query !== lastQuery) {
    setLastQuery(query);
    setActiveIndex(0);
  }

  const handleSelect = useCallback((href: string) => {
    setIsOpen(false);
    setQuery("");
    setActiveIndex(0);
    router.push(href);
  }, [router]);

  // Keyboard shortcut: Cmd/Ctrl + K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Keyboard navigation within results
  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + results.length) % results.length);
    } else if (e.key === "Enter" && results.length > 0) {
      e.preventDefault();
      handleSelect(results[activeIndex].href);
    }
  };

  // Scroll active item into view
  useEffect(() => {
    const container = resultsRef.current;
    if (!container) return;
    const activeEl = container.children[activeIndex] as HTMLElement;
    if (activeEl) {
      activeEl.scrollIntoView({ block: "nearest" });
    }
  }, [activeIndex]);

  // Mobile trigger: just an icon. Must fall through to the dialog below when
  // open. Returning here unconditionally left the button dead on mobile, since
  // the desktop instance that renders the dialog sits inside a `hidden md:block`.
  if (mobile && !isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-center h-10 w-10 rounded-md text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Search"
      >
        <Search className="h-4 w-4" />
      </button>
    );
  }

  // Desktop trigger: button with label
  if (!isOpen && !mobile) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-md text-foreground-tertiary text-sm hover:text-foreground transition-colors duration-150"
        aria-label="Search (Ctrl+K)"
      >
        <Search className="h-3.5 w-3.5" />
        <kbd className="hidden lg:inline font-mono text-xs text-foreground-quaternary">
          ⌘K
        </kbd>
      </button>
    );
  }

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[60] bg-black/50"
        onClick={() => { setIsOpen(false); setQuery(""); setActiveIndex(0); }}
        aria-hidden
      />

      {/* Search Dialog */}
      <div
        className="fixed top-[20%] left-1/2 -translate-x-1/2 z-[70] w-full max-w-lg"
        role="dialog"
        aria-modal="true"
        aria-label="Global search"
      >
        <div className="bg-background border border-border rounded-lg shadow-lg overflow-hidden mx-4">
          {/* Search Input */}
          <div className="flex items-center gap-3 px-4 border-b border-border">
            <Search className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            <input
              type="text"
              placeholder="Search pages, publications..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleInputKeyDown}
              className="flex-1 py-3 text-sm bg-transparent placeholder:text-foreground-quaternary font-mono"
              autoFocus
              aria-label="Search"
              aria-activedescendant={results.length > 0 ? `search-result-${activeIndex}` : undefined}
              role="combobox"
              aria-expanded={results.length > 0}
              aria-controls="search-results"
            />
            <button
              onClick={() => { setIsOpen(false); setQuery(""); setActiveIndex(0); }}
              className="text-muted-foreground hover:text-foreground"
              aria-label="Close search"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Results */}
          <div
            id="search-results"
            ref={resultsRef}
            className="max-h-80 overflow-y-auto py-2"
            role="listbox"
          >
            {results.length > 0 ? (
              results.map((result, i) => (
                <button
                  key={`${result.href}-${i}`}
                  id={`search-result-${i}`}
                  role="option"
                  aria-selected={i === activeIndex}
                  onClick={() => handleSelect(result.href)}
                  onMouseEnter={() => setActiveIndex(i)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                    i === activeIndex ? "bg-muted" : "hover:bg-muted"
                  }`}
                >
                  <result.icon className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{result.title}</p>
                    <p className="text-xs text-muted-foreground truncate">
                      {result.description}
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground flex-shrink-0">
                    {result.type}
                  </span>
                </button>
              ))
            ) : (
              <p className="px-4 py-6 text-sm text-muted-foreground text-center">
                No results found for &ldquo;{query}&rdquo;
              </p>
            )}
          </div>

          {/* Footer hint */}
          <div className="border-t border-border px-4 py-2 flex items-center gap-4 text-xs text-muted-foreground">
            <span><kbd className="px-1 py-0.5 rounded bg-muted border border-border">↑↓</kbd> Navigate</span>
            <span><kbd className="px-1 py-0.5 rounded bg-muted border border-border">↵</kbd> Select</span>
            <span><kbd className="px-1 py-0.5 rounded bg-muted border border-border">Esc</kbd> Close</span>
          </div>
        </div>
      </div>
    </>
  );
}
