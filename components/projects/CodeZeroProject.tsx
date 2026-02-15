import React from "react";
import { ProjectLayout } from "../shared/ProjectLayout";
import { ProjectHeader } from "../shared/ProjectHeader";
import { ProjectSection } from "../shared/ProjectSection";
import { ProjectLink } from "../shared/ProjectLink";
import { ProjectCategory, ProjectMetadata } from "../../types/project";

export const metadata: ProjectMetadata = {
  id: "codezero",
  categories: [ProjectCategory.Freelance],
  year: "2021",
};

export const CodeZeroProject = () => {
  return (
    <ProjectLayout>
      <ProjectHeader
        title="Code Zero"
        subtitle="Custom CRM for a sail manufacturing company at Lake Balaton"
        badges={[
          { label: "Freelance", variant: "accent" },
          { label: "React", variant: "secondary" },
          { label: "Node.js", variant: "secondary" },
        ]}
      />

      <ProjectSection title="Why" delay={0.1}>
        <p>
          A sail manufacturing company at Lake Balaton needed to digitalize their
          operations. They were managing everything with paper forms and spreadsheets and
          needed a custom CRM solution tailored to their specific workflow.
        </p>
      </ProjectSection>

      <ProjectSection title="How" delay={0.2}>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>
            <strong className="font-medium">Lifecycle management:</strong> Track orders from
            initial inquiry to delivery
          </li>
          <li>
            <strong className="font-medium">QR code reading:</strong> Scan codes for
            inventory and order tracking
          </li>
          <li>
            <strong className="font-medium">Employee management:</strong> Task assignment and
            workflow tracking
          </li>
          <li>Custom React dashboard with Node.js backend</li>
          <li>Mobile-responsive for on-the-go access</li>
        </ul>
      </ProjectSection>

      <ProjectSection title="Impact" delay={0.3}>
        <p className="text-sm">
          Successfully digitalized their workflow and learned a lot about business
          processes, manufacturing operations, and management systems. Understanding how
          non-tech businesses operate was valuable for building software that actually fits
          their needs.
        </p>
      </ProjectSection>

      <div className="mt-4">
        <ProjectLink href="https://vitorlaszerviz.hu">Visit Company</ProjectLink>
      </div>
    </ProjectLayout>
  );
};
