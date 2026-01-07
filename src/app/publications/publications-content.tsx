"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  FileText,
  ExternalLink,
  Code,
  Video,
  Presentation,
  Copy,
  Check,
  Filter,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations/fade-in";
import {
  publications,
  publicationYears,
  allTags,
  publicationTypes,
  type Publication,
} from "@/data/publications";
import Fuse from "fuse.js";

const fuse = new Fuse(publications, {
  keys: ["title", "authors", "venue", "abstract", "tags"],
  threshold: 0.3,
});

function PublicationCard({ publication }: { publication: Publication }) {
  const [copiedBibtex, setCopiedBibtex] = useState(false);

  const copyBibtex = () => {
    if (publication.bibtex) {
      navigator.clipboard.writeText(publication.bibtex);
      setCopiedBibtex(true);
      setTimeout(() => setCopiedBibtex(false), 2000);
    }
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ y: -2 }}
      className="group relative p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300"
    >
      {/* Selected badge */}
      {publication.selected && (
        <div className="absolute -top-2 -right-2">
          <Badge className="bg-accent text-accent-foreground">
            <Star className="h-3 w-3 mr-1 fill-current" />
            Featured
          </Badge>
        </div>
      )}

      <div className="space-y-4">
        {/* Type & Year */}
        <div className="flex items-center gap-2 text-sm">
          <Badge variant="secondary" className="capitalize">
            {publication.type}
          </Badge>
          <span className="text-muted-foreground">{publication.year}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
          {publication.title}
        </h3>

        {/* Authors */}
        <p className="text-muted-foreground">
          {publication.authors.map((author, i) => (
            <span key={author}>
              <span
                className={
                  author.toLowerCase().includes("mohamed") && (author.toLowerCase().includes("dawoud") || author.toLowerCase().includes("moustafa"))
                    ? "font-medium text-foreground"
                    : ""
                }
              >
                {author}
              </span>
              {i < publication.authors.length - 1 && ", "}
            </span>
          ))}
        </p>

        {/* Venue */}
        <p className="text-accent font-medium">{publication.venue}</p>

        {/* Abstract */}
        <p className="text-sm text-muted-foreground line-clamp-3">
          {publication.abstract}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {publication.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-2 pt-2">
          {publication.links.paper && (
            <Button variant="outline" size="sm" className="rounded-full" asChild>
              <a
                href={publication.links.paper}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="mr-2 h-4 w-4" />
                Paper
                <ExternalLink className="ml-2 h-3 w-3" />
              </a>
            </Button>
          )}
          {publication.links.pdf && (
            <Button variant="outline" size="sm" className="rounded-full" asChild>
              <a
                href={publication.links.pdf}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="mr-2 h-4 w-4" />
                PDF
              </a>
            </Button>
          )}
          {publication.links.code && (
            <Button variant="outline" size="sm" className="rounded-full" asChild>
              <a
                href={publication.links.code}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code className="mr-2 h-4 w-4" />
                Code
              </a>
            </Button>
          )}
          {publication.links.slides && (
            <Button variant="outline" size="sm" className="rounded-full" asChild>
              <a
                href={publication.links.slides}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Presentation className="mr-2 h-4 w-4" />
                Slides
              </a>
            </Button>
          )}
          {publication.links.video && (
            <Button variant="outline" size="sm" className="rounded-full" asChild>
              <a
                href={publication.links.video}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Video className="mr-2 h-4 w-4" />
                Video
              </a>
            </Button>
          )}
          {publication.bibtex && (
            <Button
              variant="outline"
              size="sm"
              className="rounded-full"
              onClick={copyBibtex}
            >
              {copiedBibtex ? (
                <>
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="mr-2 h-4 w-4" />
                  BibTeX
                </>
              )}
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function PublicationsContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredPublications = useMemo(() => {
    let results = publications;

    // Search
    if (searchQuery) {
      results = fuse.search(searchQuery).map((r) => r.item);
    }

    // Type filter
    if (selectedType !== "all") {
      results = results.filter((pub) => pub.type === selectedType);
    }

    // Year filter
    if (selectedYear) {
      results = results.filter((pub) => pub.year.toString() === selectedYear);
    }

    // Tag filter
    if (selectedTag) {
      results = results.filter((pub) => pub.tags.includes(selectedTag));
    }

    return results;
  }, [searchQuery, selectedType, selectedYear, selectedTag]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedType("all");
    setSelectedYear(null);
    setSelectedTag(null);
  };

  const hasFilters =
    searchQuery || selectedType !== "all" || selectedYear || selectedTag;

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <FadeIn>
            <Badge className="mb-4">Research Output</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Publications</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              My research spans security, privacy, and cybercrime. Below you&apos;ll
              find my peer-reviewed publications with links to papers, code, and
              presentation materials.
            </p>
          </FadeIn>
        </div>

        {/* Search & Filters */}
        <FadeIn delay={0.1}>
          <div className="space-y-4 mb-8">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search publications by title, author, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 rounded-full"
              />
            </div>

            {/* Filter Row */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Type Filter */}
              <Tabs
                value={selectedType}
                onValueChange={setSelectedType}
                className="w-auto"
              >
                <TabsList className="rounded-full">
                  {publicationTypes.map((type) => (
                    <TabsTrigger
                      key={type.value}
                      value={type.value}
                      className="rounded-full"
                    >
                      {type.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>

              {/* Year Filter */}
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <select
                  value={selectedYear || ""}
                  onChange={(e) => setSelectedYear(e.target.value || null)}
                  className="px-3 py-2 rounded-full bg-muted border-0 text-sm focus:ring-2 focus:ring-accent"
                >
                  <option value="">All Years</option>
                  {publicationYears.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              {/* Clear Filters */}
              {hasFilters && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="rounded-full"
                >
                  Clear Filters
                </Button>
              )}
            </div>

            {/* Tag Pills */}
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <motion.button
                  key={tag}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    setSelectedTag(selectedTag === tag ? null : tag)
                  }
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    selectedTag === tag
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  {tag}
                </motion.button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Results Count */}
        <FadeIn delay={0.2}>
          <p className="text-sm text-muted-foreground mb-6">
            Showing {filteredPublications.length} of {publications.length}{" "}
            publications
          </p>
        </FadeIn>

        {/* Publications List */}
        <div className="space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredPublications.length > 0 ? (
              filteredPublications.map((pub) => (
                <PublicationCard key={pub.id} publication={pub} />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-muted-foreground">
                  No publications found matching your criteria.
                </p>
                <Button
                  variant="link"
                  onClick={clearFilters}
                  className="mt-2"
                >
                  Clear all filters
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
