import React from "react";
import { ProjectLayout } from "../shared/ProjectLayout";
import { ProjectHeader } from "../shared/ProjectHeader";
import { ProjectSection } from "../shared/ProjectSection";
import { ProjectLink } from "../shared/ProjectLink";
import { ProjectCategory, ProjectMetadata } from "../../types/project";

export const metadata: ProjectMetadata = {
  id: "proab",
  categories: [ProjectCategory.Freelance],
  year: "2018",
};

export const ProabProject = () => {
  return (
    <ProjectLayout>
      <ProjectHeader
        title="Proab App"
        subtitle="0-to-1 freelance project for Hungary's largest freelancer accounting firm"
        badges={[
          { label: "Freelance", variant: "accent" },
          { label: "Angular", variant: "secondary" },
          { label: "GraphQL", variant: "secondary" },
          { label: "Active", variant: "primary" },
        ]}
      />

      <ProjectSection title="Why" delay={0.1}>
        <p className="mb-3">
          An accounting firm wanted to build a digital platform for their growing base of
          freelance clients. They needed a solution tailored to Hungarian accounting
          requirements that would streamline communication between freelancers and their
          bookkeepers.
        </p>
        <p>
          I worked on this 0-to-1 project to build what is now used by Hungary's largest
          accounting firm for freelancers.
        </p>
      </ProjectSection>

      <ProjectSection title="How" delay={0.2}>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>
            <strong className="font-medium">Client dashboard:</strong> View bookkeeping
            accounts, manage finances, and track deadlines
          </li>
          <li>
            <strong className="font-medium">Collaboration tools:</strong> Real-time
            communication between freelancers and bookkeepers
          </li>
          <li>
            <strong className="font-medium">Dual interfaces:</strong> Separate client-facing
            and back-office views
          </li>
          <li>Angular frontend with GraphQL API</li>
          <li>Automated invoice processing and categorization</li>
        </ul>
      </ProjectSection>

      <ProjectSection title="Impact" delay={0.3}>
        <p className="text-sm">
          The app is still in active use by the firm and their clients. This project taught
          me a lot about business processes, financial workflows, and building software for
          complex regulatory environments. Understanding the bookkeeping domain helped me
          build features that truly fit how accountants and freelancers work.
        </p>
      </ProjectSection>

      <div className="mt-4">
        <ProjectLink href="https://app.proab.hu">Visit App</ProjectLink>
      </div>
    </ProjectLayout>
  );
};
