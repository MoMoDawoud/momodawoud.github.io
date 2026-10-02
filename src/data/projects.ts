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
