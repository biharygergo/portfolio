import { ProjectMetadata } from "../../types/project";

// Import all project components
import {
  SB1SoundboardProject,
  metadata as sb1Metadata,
} from "./SB1SoundboardProject";
import {
  WorkflowGraphProject,
  metadata as workflowGraphMetadata,
} from "./WorkflowGraphProject";
import {
  PlanningPokerProject,
  metadata as pokerMetadata,
} from "./PlanningPokerProject";
import {
  IncepTechProject,
  metadata as inceptechMetadata,
} from "./IncepTechProject";
import {
  CodeZeroProject,
  metadata as codezeroMetadata,
} from "./CodeZeroProject";
import { ProabProject, metadata as proabMetadata } from "./ProabProject";
import {
  SailLogProject,
  metadata as saillogMetadata,
} from "./SailLogProject";
import { TwentyKProject, metadata as twentyKMetadata } from "./TwentyKProject";
import {
  JunctionAppProject,
  metadata as junctionMetadata,
} from "./JunctionAppProject";
import {
  HacktivityProject,
  metadata as hacktivityMetadata,
} from "./HacktivityProject";
import { VibesProject, metadata as vibesMetadata } from "./VibesProject";

// Project registry with component and metadata
export interface ProjectEntry {
  Component: React.ComponentType;
  metadata: ProjectMetadata;
}

// Helper function to extract the most recent year from a year string
const getLatestYear = (yearString: string): number => {
  // Handle ranges like "2020-2026" or "2018-2024"
  const years = yearString.split('-').map(y => parseInt(y.trim()));
  return Math.max(...years);
};

export const PROJECT_REGISTRY: ProjectEntry[] = [
  { Component: SB1SoundboardProject, metadata: sb1Metadata },
  { Component: WorkflowGraphProject, metadata: workflowGraphMetadata },
  { Component: PlanningPokerProject, metadata: pokerMetadata },
  { Component: IncepTechProject, metadata: inceptechMetadata },
  { Component: CodeZeroProject, metadata: codezeroMetadata },
  { Component: ProabProject, metadata: proabMetadata },
  { Component: SailLogProject, metadata: saillogMetadata },
  { Component: TwentyKProject, metadata: twentyKMetadata },
  { Component: JunctionAppProject, metadata: junctionMetadata },
  { Component: HacktivityProject, metadata: hacktivityMetadata },
  { Component: VibesProject, metadata: vibesMetadata },
].sort((a, b) => {
  // Sort by most recent year, descending (newest first)
  return getLatestYear(b.metadata.year) - getLatestYear(a.metadata.year);
});
