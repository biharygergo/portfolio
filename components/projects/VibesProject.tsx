import React from "react";
import { ProjectLayout } from "../shared/ProjectLayout";
import { ProjectHeader } from "../shared/ProjectHeader";
import { ProjectSection } from "../shared/ProjectSection";
import { ProjectLink } from "../shared/ProjectLink";
import { ProjectCategory, ProjectMetadata } from "../../types/project";

export const metadata: ProjectMetadata = {
  id: "vibes",
  categories: [ProjectCategory.Hackathon],
  year: "2020",
};

export const VibesProject = () => {
  return (
    <ProjectLayout>
      <ProjectHeader
        title="Vibes"
        subtitle="Snapchat-like video messaging prototype"
        badges={[
          { label: "Hackathon", variant: "primary" },
          { label: "React", variant: "secondary" },
          { label: "Prototype", variant: "secondary" },
        ]}
      />

      <ProjectSection title="Why" delay={0.1}>
        <p>
          Built for Junction 2020 hackathon. The goal was to explore ephemeral video
          messaging with a focus on smooth animations and intuitive mobile-first UX.
        </p>
      </ProjectSection>

      <ProjectSection title="How" delay={0.2}>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>React with custom animation library for smooth transitions</li>
          <li>Mobile-first responsive design</li>
          <li>Focus on gesture-based interactions</li>
          <li>Polished UI with attention to micro-interactions</li>
        </ul>
      </ProjectSection>

      <ProjectSection title="Impact" delay={0.3}>
        <p className="text-sm">
          Created a highly polished prototype that demonstrated strong UI/UX skills and
          attention to detail. Positive feedback from judges on usability and animation
          quality.
        </p>
      </ProjectSection>

      <div className="mt-4">
        <ProjectLink href="https://junction-vibes.web.app/now">View Prototype</ProjectLink>
      </div>
    </ProjectLayout>
  );
};
