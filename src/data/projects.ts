/*
 * Work in progress: research that is underway but not yet a publication.
 * Kept separate from `publications` so nothing unpublished can drift into the
 * publication list, the CV, or the ScholarlyArticle JSON-LD.
 */

export interface Project {
  title: string;
  authors: string[];
  status: string;
  description: string;
  tags: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    title: "Measuring Model-Level Interventions Against AI-Generated Intimate-Image Abuse",
    authors: ["Mohamed Moustafa Dawoud (lead author)"],
    status: "Under Review",
    description:
      "Removing individual AI-generated intimate images leaves the reusable models behind them available. Using CivitAI as a case study, we simulate model-level restrictions at scale, measuring both the explicit requests involving particular people they would reach and the ordinary uses they would also affect. We also trace whether removed models persist on other hosting platforms, and we introduce a self-hostable toolkit for sharing model notices and evidence across platforms.",
    tags: [
      "NCII",
      "Open-Weight Models",
      "Platform Governance",
      "Content Moderation",
      "LLM-Assisted Measurement",
    ],
  },
  {
    title: "The Impact of US Age Verification Laws on Adult Content Consumption",
    authors: [
      "Alejandro Cuevas",
      "Mohamed Moustafa Dawoud",
      "Zhibin Shen",
      "Ram Sundara Raman",
      "Manoel Horta Ribeiro",
    ],
    status: "Under Review",
    description:
      "We leverage individual-level panel data derived from mobile browsing activity to study the impact of age verification laws on adult content consumption, from both compliant and non-compliant sites, in the US.",
    tags: [
      "Quasi-Experimental",
      "Difference-in-Differences",
      "Policy Impact",
      "Adult Content",
    ],
  },
];
