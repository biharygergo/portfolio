import React from "react";
import { ProjectLayout } from "../shared/ProjectLayout";
import { ProjectHeader } from "../shared/ProjectHeader";
import { ProjectSection } from "../shared/ProjectSection";
import { ProjectLink } from "../shared/ProjectLink";
import { MediaViewer } from "../shared/MediaViewer";
import { ProjectCategory, ProjectMetadata } from "../../types/project";
import dagImage from "@/public/projects/dag/Screenshot 2026-02-15 at 10.42.40.png";

export const metadata: ProjectMetadata = {
  id: "workflow-graph",
  categories: [ProjectCategory.Work],
  year: "2024",
};

const media = [
  {
    type: "image" as const,
    src: dagImage,
    alt: "Workflow Graph DAG visualization",
  },
];

export const WorkflowGraphProject = () => {
  return (
    <ProjectLayout mediaElement={<MediaViewer media={media} />}>
      <ProjectHeader
        title="Workflow Graph (DAG)"
        subtitle="Open-sourced Google's internal DAG component — hundreds of stars, used in Vertex AI"
        badges={[
          { label: "Google", variant: "accent" },
          { label: "Open Source", variant: "primary" },
          { label: "Angular", variant: "secondary" },
          { label: "TypeScript", variant: "secondary" },
          { label: "NPM", variant: "secondary" },
        ]}
      />

      <ProjectSection title="Why" delay={0.1}>
        <p className="mb-3">
          Google had an internal Directed Acyclic Graph (DAG) component that was critical
          for visualizing workflows and model development pipelines across teams. However,
          it was only available within Google's internal environment.
        </p>
        <p>
          The team recognized an opportunity to enable external teams and the wider
          community to access this component as a web component outside of Google Cloud.
          This would allow other organizations to benefit from the same visualization
          capabilities used internally at Google.
        </p>
      </ProjectSection>

      <ProjectSection title="How" delay={0.2}>
        <p className="mb-3">
          The biggest challenge was migrating from Google's internal Blaze build system to
          open-source tooling while maintaining all functionality. This was a collaborative
          effort across teams.
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>
            <strong className="font-medium">Large-scale migration:</strong> Migrated from
            Blaze (internal) to Bazel + Angular build tools for open-source compatibility
          </li>
          <li>
            <strong className="font-medium">Performance optimization:</strong> Custom
            animations and CSS to efficiently render large graphs with hundreds of nodes
          </li>
          <li>
            <strong className="font-medium">Reusable components:</strong> DAG renderer,
            toolbar, state badges, and helper classes for rapid graph construction
          </li>
          <li>
            <strong className="font-medium">Multi-format distribution:</strong> Available
            as both Angular library and standalone Web Component for flexibility
          </li>
          <li>
            <strong className="font-medium">NPM package:</strong> Published to npm as{" "}
            <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">
              @google/workflow-graph
            </code>{" "}
            for easy integration
          </li>
        </ul>
      </ProjectSection>

      <ProjectSection title="Impact" delay={0.3}>
        <p className="text-sm mb-3">
          The open-sourced component has received hundreds of stars on GitHub and enabled
          teams outside of Google Cloud to leverage the same DAG visualization
          capabilities. It continues to be actively maintained and used within Google
          Vertex AI for visualizing ML workflows and model development pipelines.
        </p>
        <p className="text-sm">
          This project demonstrated the value of open-sourcing internal tools to benefit
          the broader community, while navigating the technical challenges of build system
          migrations and maintaining compatibility across different environments.
        </p>
      </ProjectSection>

      <div className="flex flex-wrap gap-3 mt-6">
        <ProjectLink href="https://github.com/google/workflow-graph">
          View on GitHub
        </ProjectLink>
        <ProjectLink href="https://www.npmjs.com/package/@google/workflow-graph">
          NPM Package
        </ProjectLink>
      </div>
    </ProjectLayout>
  );
};
