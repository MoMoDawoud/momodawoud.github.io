import { siteConfig } from "@/data/site-config";
import { publications } from "@/data/publications";

export function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    description: siteConfig.bio.short,
    url: "https://momodawoud.github.io",
    email: siteConfig.email,
    affiliation: {
      "@type": "EducationalOrganization",
      name: siteConfig.university,
      department: {
        "@type": "Organization",
        name: siteConfig.department,
      },
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "German International University, Cairo",
      },
    ],
    sameAs: [
      siteConfig.social.github,
      siteConfig.social.linkedin,
      siteConfig.social.twitter,
      siteConfig.social.googleScholar,
    ],
    knowsAbout: siteConfig.researchInterests,
    image: "https://momodawoud.github.io/profile.jpg",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function PublicationsJsonLd() {
  const jsonLd = publications.map((pub) => ({
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    name: pub.title,
    headline: pub.title,
    author: pub.authors.map((author) => ({
      "@type": "Person",
      name: author,
    })),
    datePublished: `${pub.year}`,
    isPartOf: {
      "@type": pub.type === "journal" ? "Periodical" : "Event",
      name: pub.venue,
    },
    abstract: pub.abstract,
    keywords: pub.tags,
    ...(pub.links.doi
      ? { identifier: { "@type": "PropertyValue", propertyID: "doi", value: pub.links.doi } }
      : {}),
    ...(pub.links.paper && pub.links.paper !== "#"
      ? { url: pub.links.paper }
      : {}),
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
