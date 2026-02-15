import React from "react";
import { ProjectLayout } from "../shared/ProjectLayout";
import { ProjectHeader } from "../shared/ProjectHeader";
import { ProjectSection } from "../shared/ProjectSection";
import { ProjectMetricGrid } from "../shared/ProjectMetricGrid";
import { ProjectLink } from "../shared/ProjectLink";
import { MediaViewer } from "../shared/MediaViewer";
import { ProjectCategory, ProjectMetadata } from "../../types/project";
import presentationImage from "@/public/projects/saillog/presentation.jpg";
import teamsImage from "@/public/projects/saillog/teams.jpg";
import phoneImage from "@/public/projects/saillog/phone.jpeg";

export const metadata: ProjectMetadata = {
  id: "saillog",
  categories: [ProjectCategory.Hobby],
  year: "2018-2024",
};

const media = [
  {
    type: "image" as const,
    src: presentationImage,
    alt: "SailLog presentation view",
  },
  {
    type: "image" as const,
    src: teamsImage,
    alt: "SailLog teams management",
  },
  {
    type: "image" as const,
    src: phoneImage,
    alt: "SailLog mobile app",
  },
];

export const SailLogProject = () => {
  return (
    <ProjectLayout mediaElement={<MediaViewer media={media} />}>
      <ProjectHeader
        title="SailLog"
        subtitle="My first cross-platform growth project reaching thousands of sailors worldwide"
        size="large"
        badges={[
          { label: "First Growth Project", variant: "primary" },
          { label: "Angular", variant: "secondary" },
          { label: "Firebase", variant: "secondary" },
          { label: "Mobile", variant: "secondary" },
          { label: "Archived", variant: "secondary" },
        ]}
      />

      <ProjectSection title="Why" delay={0.1}>
        <p className="mb-3">
          As a passionate sailor myself, I saw an opportunity to build a digital training
          log for the sailing community. Coaches and athletes were still using paper logs
          and spreadsheets, and I wanted to create something better.
        </p>
        <p>
          This was my first attempt at building a growth-focused product, targeting both
          web and mobile platforms to reach the global sailing community.
        </p>
      </ProjectSection>

      <ProjectSection title="How" delay={0.2}>
        <p className="mb-3">
          Built for both web and mobile with cross-platform data synchronization.
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>
            <strong className="font-medium">Cross-platform:</strong> Web (Angular) and
            mobile apps with shared Firebase backend
          </li>
          <li>
            <strong className="font-medium">Real-time sync:</strong> Training data
            accessible across all devices instantly
          </li>
          <li>
            <strong className="font-medium">Offline-first:</strong> Works without internet,
            syncs when connected
          </li>
          <li>
            <strong className="font-medium">Analytics:</strong> Performance tracking and
            progress visualization
          </li>
        </ul>
      </ProjectSection>

      <ProjectSection title="Learnings" delay={0.3}>
        <ProjectMetricGrid
          metrics={[
            { value: "2,000+", label: "Sailors reached" },
            { value: "30+", label: "Countries" },
            { value: "5 years", label: "Development" },
          ]}
        />
        <p className="text-sm">
          While it successfully reached thousands of sailors globally, it didn't achieve
          product-market fit with professional coaches. This taught me invaluable lessons
          about target audience validation, feature prioritization, and the importance of
          finding true product-market fit early. The technical experience with
          cross-platform development and Firebase at scale proved essential for future
          projects. The project has since been archived.
        </p>
      </ProjectSection>
    </ProjectLayout>
  );
};
