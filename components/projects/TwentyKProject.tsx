import React from "react";
import { ProjectLayout } from "../shared/ProjectLayout";
import { ProjectHeader } from "../shared/ProjectHeader";
import { ProjectSection } from "../shared/ProjectSection";
import { ProjectLink } from "../shared/ProjectLink";
import { ProjectCategory, ProjectMetadata } from "../../types/project";

export const metadata: ProjectMetadata = {
  id: "20k",
  categories: [ProjectCategory.Volunteer],
  year: "2022",
};

export const TwentyKProject = () => {
  return (
    <ProjectLayout>
      <ProjectHeader
        title="20K"
        subtitle="Volunteer work supporting 20,000 election observers on election day"
        badges={[
          { label: "Volunteer", variant: "accent" },
          { label: "React", variant: "secondary" },
          { label: "Hasura", variant: "secondary" },
          { label: "GraphQL", variant: "secondary" },
        ]}
      />

      <ProjectSection title="Why" delay={0.1}>
        <p className="mb-3">
          I joined this volunteer project because I believed in the cause of keeping
          Hungarian elections clean and transparent. Election integrity is fundamental to
          democracy, and I wanted to contribute my technical skills to something meaningful.
        </p>
        <p>
          The 20K initiative needed to build a system that could handle 20,000 volunteers
          submitting data in real-time on election day - a significant technical challenge
          and great learning opportunity.
        </p>
      </ProjectSection>

      <ProjectSection title="How" delay={0.2}>
        <p className="mb-3">
          Worked on a larger-scale application with Hasura, collaborating with senior
          engineers and volunteers from across Hungary.
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>
            <strong className="font-medium">Core functionality:</strong> Contributed to user
            identification and validation workflows
          </li>
          <li>
            <strong className="font-medium">Scale:</strong> System supporting 20,000
            concurrent volunteers on election day
          </li>
          <li>React frontend with real-time data updates</li>
          <li>Hasura GraphQL API over PostgreSQL database</li>
          <li>Identity validation and verification systems</li>
          <li>Real-time issue reporting and tracking</li>
        </ul>
      </ProjectSection>

      <ProjectSection title="Impact" delay={0.3}>
        <p className="text-sm mb-3">
          On election day, 20,000 Hungarian volunteers used the platform to submit data and
          reports. Everything ran flawlessly, successfully supporting democratic oversight at
          scale.
        </p>
        <p className="text-sm">
          This was an incredible learning experience - collaborating with senior engineers,
          working under real-world pressure with critical deadlines, and contributing to
          something larger than myself. It showed me the impact technology can have on
          democracy and civic participation.
        </p>
      </ProjectSection>

      <div className="mt-4">
        <ProjectLink href="https://app.20k.hu">Visit 20K</ProjectLink>
      </div>
    </ProjectLayout>
  );
};
