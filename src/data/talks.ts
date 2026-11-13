export const talks: {
  date: string;
  title: string;
  venue: string;
  location: string;
  href?: string;
}[] = [
  {
    date: "Nov 2026",
    title: "PrivAudit: A Dual-Lens Auditing Framework for Website Privacy Practices under the CCPA",
    venue: "IETF 127, IRTF Measurement and Analysis for Protocols Research Group (MAPRG)",
    location: "San Francisco, CA",
    href: "https://datatracker.ietf.org/meeting/127/materials/agenda-127-maprg",
  },
  {
    date: "Feb 2026",
    title: "From Underground to Mainstream Marketplaces: Measuring AI-Enabled NSFW Deepfakes on Fiverr",
    venue: "Symposium on Usable Security and Privacy (USEC), co-located with NDSS",
    location: "San Diego, CA",
    href: "https://www.ndss-symposium.org/ndss-paper/from-underground-to-mainstream-marketplaces-measuring-ai-enabled-nsfw-deepfakes-on-fiverr/",
  },
];

export const guestLectures: {
  semester: string;
  code: string;
  title: string;
  institution: string;
  instructor: string;
  lectures: { date: string; title: string }[];
}[] = [
  {
    semester: "Fall 2026",
    code: "CSE 253",
    title: "Network Security",
    institution: "University of California, Santa Cruz",
    instructor: "Prof. Ram Sundara Raman",
    lectures: [
      { date: "Nov 12", title: "Online Safety, Privacy and Trust in the Age of AI" },
      { date: "Nov 24", title: "AI for Safety and Safety for AI" },
    ],
  },
];
