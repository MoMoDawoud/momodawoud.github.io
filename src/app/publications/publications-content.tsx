"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { FadeIn } from "@/components/animations/fade-in";
import {
  publications,
  publicationYears,
  type Publication,
} from "@/data/publications";

/* ─────────────────────────────────────────
   PUBLICATION ROW
   ───────────────────────────────────────── */

function PublicationRow({ publication }: { publication: Publication }) {
  const [showAbstract, setShowAbstract] = useState(false);

  const typeBadgeColor = {
    conference: "bg-foreground/10 text-foreground",
    journal: "bg-accent/15 text-accent",
    workshop: "bg-accent/10 text-foreground-secondary",
    preprint: "bg-muted text-foreground-tertiary",
  }[publication.type];

  return (
    <article className="py-4 px-3 -mx-3 rounded-lg hover:bg-muted/50 transition-colors duration-150">
      <div className="flex flex-col sm:flex-row sm:gap-6">
        {/* Left: image thumbnail */}
        {publication.image && (
          <div className="w-full sm:w-36 flex-shrink-0 mb-3 sm:mb-0">
            <div className="relative w-full sm:w-36 h-24 rounded-lg border border-border overflow-hidden bg-muted group/thumb">
              <Image
                src={publication.image}
                alt={`Figure from ${publication.title}`}
                fill
                className="object-cover transition-transform duration-300 group-hover/thumb:scale-105"
                sizes="(max-width: 640px) 100vw, 144px"
              />
            </div>
          </div>
        )}

        {/* Middle: title + authors + links */}
        <div className="flex-1 min-w-0">
          <h3 className="font-serif text-base font-medium leading-snug mb-1.5">
            {publication.links.paper && publication.links.paper !== "#" ? (
              <a
                href={publication.links.paper}
                target="_blank"
                rel="noopener noreferrer"
                className="link-subtle"
              >
                {publication.title}
              </a>
            ) : (
              publication.title
            )}
          </h3>

          {/* Authors */}
          <p className="font-mono text-xs text-foreground-tertiary mb-2">
            {publication.authors.map((author, i) => (
              <span key={author}>
                <span
                  className={
                    author.toLowerCase().includes("mohamed") &&
                    (author.toLowerCase().includes("dawoud") ||
                      author.toLowerCase().includes("moustafa"))
                      ? "text-foreground font-medium"
                      : ""
                  }
                >
                  {author}
                </span>
                {i < publication.authors.length - 1 && ", "}
              </span>
            ))}
          </p>

          {/* Links row */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.7rem]">
            {publication.links.paper && publication.links.paper !== "#" && (
              <a
                href={publication.links.paper}
                target="_blank"
                rel="noopener noreferrer"
                className="link-accent"
              >
                [Paper]
              </a>
            )}
            {publication.links.pdf && (
              <a
                href={publication.links.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="link-accent"
              >
                [PDF]
              </a>
            )}
            {publication.links.code && (
              <a
                href={publication.links.code}
                target="_blank"
                rel="noopener noreferrer"
                className="link-accent"
              >
                [Code]
              </a>
            )}
            {publication.links.slides && (
              <a
                href={publication.links.slides}
                target="_blank"
                rel="noopener noreferrer"
                className="link-accent"
              >
                [Slides]
              </a>
            )}
            {publication.links.video && (
              <a
                href={publication.links.video}
                target="_blank"
                rel="noopener noreferrer"
                className="link-accent"
              >
                [Video]
              </a>
            )}
            {publication.links.doi && (
              <a
                href={`https://doi.org/${publication.links.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="link-accent"
              >
                [DOI]
              </a>
            )}
            <button
              onClick={() => setShowAbstract(!showAbstract)}
              className="text-foreground-quaternary hover:text-foreground transition-colors duration-150 inline-flex items-center gap-0.5"
              aria-expanded={showAbstract}
            >
              {showAbstract ? (
                <ChevronUp className="h-3 w-3" />
              ) : (
                <ChevronDown className="h-3 w-3" />
              )}
              Abstract
            </button>
          </div>
        </div>

        {/* Right: venue + type badge */}
        <div className="flex sm:flex-col items-start sm:items-end gap-2 sm:gap-1.5 mt-2 sm:mt-0 sm:w-44 flex-shrink-0">
          <span className="text-xs text-foreground-tertiary">
            {publication.venue}
          </span>
          <div className="flex items-center gap-1.5 flex-wrap sm:justify-end">
            <span className={`inline-block px-1.5 py-0.5 rounded text-[0.6rem] font-mono font-medium uppercase tracking-wider ${typeBadgeColor}`}>
              {publication.type}
            </span>
            <span className="font-mono text-[0.65rem] text-foreground-quaternary">
              {publication.year}
            </span>
            {publication.citations != null && publication.citations > 0 && (
              <span className="font-mono text-[0.6rem] text-foreground-tertiary bg-muted px-1.5 py-0.5 rounded">
                {publication.citations} cited
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Abstract expand */}
      {showAbstract && (
        <p className="text-sm text-foreground-secondary mt-3 pl-4 border-l-2 border-accent max-w-prose leading-relaxed">
          {publication.abstract}
        </p>
      )}
    </article>
  );
}

/* ─────────────────────────────────────────
   MAIN
   ───────────────────────────────────────── */

export function PublicationsContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [showSelected, setShowSelected] = useState(false);

  const filteredPublications = useMemo(() => {
    let results = publications;
    if (showSelected) results = results.filter((pub) => pub.selected);
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(
        (pub) =>
          pub.title.toLowerCase().includes(query) ||
          pub.authors.some((a) => a.toLowerCase().includes(query)) ||
          pub.venue.toLowerCase().includes(query) ||
          pub.abstract.toLowerCase().includes(query) ||
          pub.tags.some((t) => t.toLowerCase().includes(query))
      );
    }
    if (selectedType !== "all")
      results = results.filter((pub) => pub.type === selectedType);
    if (selectedYear)
      results = results.filter(
        (pub) => pub.year.toString() === selectedYear
      );
    return results;
  }, [searchQuery, selectedType, selectedYear, showSelected]);

  const groupedByYear = useMemo(() => {
    const groups: Record<string, Publication[]> = {};
    for (const pub of filteredPublications) {
      const year = pub.year.toString();
      if (!groups[year]) groups[year] = [];
      groups[year].push(pub);
    }
    return Object.entries(groups).sort(([a], [b]) => Number(b) - Number(a));
  }, [filteredPublications]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedType("all");
    setSelectedYear(null);
    setShowSelected(false);
  };
  const hasFilters =
    searchQuery ||
    selectedType !== "all" ||
    selectedYear ||
    showSelected;

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="Publications"
        />

        {/* Toggle + count */}
        <FadeIn direction="none">
          <div className="flex items-center justify-between mb-8">
            <p className="font-mono text-xs text-foreground-tertiary" aria-live="polite">
              {filteredPublications.length} of {publications.length} publications
              <span className="text-foreground-quaternary">
                {" "}
                &middot; 2021&ndash;2026
              </span>
            </p>
            <div className="flex gap-1 font-mono text-xs">
              <button
                onClick={() => setShowSelected(false)}
                className={`px-3 py-1.5 min-h-[36px] rounded transition-colors duration-150 ${
                  !showSelected
                    ? "text-foreground bg-muted"
                    : "text-foreground-quaternary hover:text-foreground"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setShowSelected(true)}
                className={`px-3 py-1.5 min-h-[36px] rounded transition-colors duration-150 ${
                  showSelected
                    ? "text-foreground bg-muted"
                    : "text-foreground-quaternary hover:text-foreground"
                }`}
              >
                Selected
              </button>
            </div>
          </div>
        </FadeIn>

        {/* Filters */}
        <FadeIn direction="none" delay={0.05}>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {/* Search */}
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-foreground-quaternary" />
              <input
                type="search"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-6 pr-2 py-1.5 text-sm bg-transparent border-b border-border focus:border-accent outline-none font-mono placeholder:text-foreground-quaternary transition-colors"
                aria-label="Search publications"
              />
            </div>

            {/* Year */}
            <select
              value={selectedYear || ""}
              onChange={(e) => setSelectedYear(e.target.value || null)}
              className="px-2 py-1.5 text-xs font-mono bg-transparent border border-border rounded text-foreground-secondary focus:ring-1 focus:ring-accent outline-none"
              aria-label="Filter by year"
            >
              <option value="">Year</option>
              {publicationYears.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>

            {/* Type */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-2 py-1.5 text-xs font-mono bg-transparent border border-border rounded text-foreground-secondary focus:ring-1 focus:ring-accent outline-none"
              aria-label="Filter by type"
            >
              <option value="all">Type</option>
              <option value="journal">Journal</option>
              <option value="conference">Conference</option>
              <option value="workshop">Workshop</option>
              <option value="preprint">Preprint</option>
            </select>

            {hasFilters && (
              <button
                onClick={clearFilters}
                className="text-xs text-foreground-quaternary hover:text-foreground transition-colors font-mono"
              >
                Clear
              </button>
            )}
          </div>
        </FadeIn>

        {/* Publications list */}
        <div>
          {groupedByYear.length > 0 ? (
            groupedByYear.map(([year, pubs]) => (
              <div key={year} className="mb-10">
                <h2 className="font-serif text-2xl font-light text-foreground-quaternary tracking-tight mb-1">
                  {year}
                </h2>
                <div className="divide-y divide-border">
                  {pubs.map((pub) => (
                    <PublicationRow key={pub.id} publication={pub} />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16">
              <p className="text-foreground-tertiary text-sm">
                No publications found matching your criteria.
              </p>
              <button
                onClick={clearFilters}
                className="mt-2 text-sm text-accent hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
