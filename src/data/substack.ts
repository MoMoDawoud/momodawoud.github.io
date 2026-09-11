/*
 * Essays published on Substack. These live off-site, so this file holds only
 * the pointer and the framing; the posts themselves are never duplicated here.
 */

export const substackUrl = "https://momodawoud.substack.com";

export interface SubstackPost {
  title: string;
  subtitle?: string;
  date: string; // ISO, formatted with the shared UTC formatter
  href: string;
}

export const substackPosts: SubstackPost[] = [
  {
    title: "Community Notes Across Languages and Cultures: The World Cup as a Case Study",
    subtitle:
      "I spent a World Cup testing how well Community Notes catches fakes, in dozens of languages, using both machines and people.",
    date: "2026-08-17",
    href: `${substackUrl}/p/community-notes-across-languages`,
  },
  {
    title: "The Geography of Nonconsensual Intimate Images",
    subtitle:
      "What counts as an intimate image is not fixed. It shifts by country, by law, and by faith, and it decides who the law protects and who it charges.",
    date: "2026-07-19",
    href: `${substackUrl}/p/the-geography-of-nonconsensual-intimate`,
  },
  {
    title: "A World Cup of Deepfakes",
    subtitle:
      "Making a lie got cheap. Catching one didn't. I spent this tournament watching the gap widen.",
    date: "2026-07-11",
    href: `${substackUrl}/p/a-world-cup-of-deepfakes`,
  },
  {
    title: "Messi vs. Egypt vs. the Deepfakes: A World Cup Story in Arabic",
    subtitle:
      "Fake Messi videos flooded Egyptian timelines before Tuesday's match. I took them apart, frame by frame.",
    date: "2026-07-06",
    href: `${substackUrl}/p/messi-vs-egypt-vs-the-deepfakes-a`,
  },
  {
    title: "So, What Would You Do?",
    subtitle:
      "On nonconsensual intimate imagery, and how cultural context changes the answer.",
    date: "2026-06-07",
    href: `${substackUrl}/p/so-what-would-you-do`,
  },
  {
    title: "AI Companions, AI Regulation, and the Harm With No Name",
    date: "2026-05-31",
    href: `${substackUrl}/p/ai-companions-ai-regulation-and-the`,
  },
  {
    title: "AI Nudifiers Are Hitting the Arab World",
    subtitle:
      "Women are swallowing poison and dying. Why the technology has scaled, and why the law has not.",
    date: "2026-05-09",
    href: `${substackUrl}/p/ai-nudifiers-are-hitting-the-arab`,
  },
];
