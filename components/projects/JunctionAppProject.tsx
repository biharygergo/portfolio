import React from "react";
import { ProjectLayout } from "../shared/ProjectLayout";
import { ProjectHeader } from "../shared/ProjectHeader";
import { ProjectSection } from "../shared/ProjectSection";
import { ProjectLink } from "../shared/ProjectLink";
import { ProjectCategory, ProjectMetadata } from "../../types/project";

export const metadata: ProjectMetadata = {
  id: "junction",
  categories: [ProjectCategory.OpenSource],
  year: "2019-2023",
};

export const JunctionAppProject = () => {
  return (
    <ProjectLayout>
      <ProjectHeader
        title="JunctionApp"
        subtitle="Open-source platform I contributed to for organizing hackathons with 1000+ participants"
        badges={[
          { label: "Open Source", variant: "accent" },
          { label: "React", variant: "secondary" },
          { label: "GraphQL", variant: "secondary" },
          { label: "Active", variant: "primary" },
        ]}
      />

      <ProjectSection title="Why" delay={0.1}>
        <p className="mb-3">
          I love hackathons - I've participated in dozens, and now I also organize and judge
          them. As an organizer and student at Helsinki, I wanted to contribute to making
          the hackathon experience better for everyone.
        </p>
        <p>
          Junction is one of Europe's largest hackathons, and this open-source platform was
          the perfect opportunity to give back to the community while learning React and
          collaborating with other students and engineers.
        </p>
      </ProjectSection>

      <ProjectSection title="How" delay={0.2}>
        <p className="mb-3">
          Contributed over several years as both participant and organizer, learning React
          through hands-on collaboration.
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>React frontend with modern UI components</li>
          <li>GraphQL API for flexible data queries</li>
          <li>Multi-tenant architecture supporting multiple events</li>
          <li>Team formation and project submission workflows</li>
          <li>Judge dashboard for evaluating projects</li>
          <li>Collaborative development with students and engineers</li>
        </ul>
      </ProjectSection>

      <ProjectSection title="Impact" delay={0.3}>
        <p className="text-sm mb-3">
          Used to organize Junction and other hackathons with 1000+ participants. Still
          actively maintained and used by hackathons worldwide.
        </p>
        <p className="text-sm">
          This project taught me the value of open-source collaboration, working with
          distributed teams, and building systems that scale to real-world events. It was
          also where I deepened my React skills through practical, production code.
        </p>
      </ProjectSection>

      <div className="mt-4">
        <ProjectLink href="https://app.hackjunction.com">Visit Platform</ProjectLink>
      </div>
    </ProjectLayout>
  );
};
