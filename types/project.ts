export enum ProjectCategory {
  Work = "work",
  Hobby = "hobby",
  Freelance = "freelance",
  Hackathon = "hackathon",
  Volunteer = "volunteer",
  OpenSource = "open-source",
}

export interface ProjectMetadata {
  id: string;
  categories: ProjectCategory[];
  year: string; // Year or year range (e.g., "2025" or "2020-2026")
}

export const FILTER_LABELS: Record<ProjectCategory, string> = {
  [ProjectCategory.Work]: "Work",
  [ProjectCategory.Hobby]: "Hobby",
  [ProjectCategory.Freelance]: "Freelance",
  [ProjectCategory.Hackathon]: "Hackathon",
  [ProjectCategory.Volunteer]: "Volunteer",
  [ProjectCategory.OpenSource]: "Open Source",
};
