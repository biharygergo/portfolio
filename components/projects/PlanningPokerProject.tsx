import React from "react";
import { ProjectLayout } from "../shared/ProjectLayout";
import { ProjectHeader } from "../shared/ProjectHeader";
import { ProjectSection } from "../shared/ProjectSection";
import { ProjectMetricGrid } from "../shared/ProjectMetricGrid";
import { ProjectLink } from "../shared/ProjectLink";
import { MediaViewer } from "../shared/MediaViewer";
import { ProjectCategory, ProjectMetadata } from "../../types/project";
import homeImage from "@/public/projects/planningpoker/home.png";
import presentationImage from "@/public/projects/planningpoker/presentation.jpeg";
import zoomImage from "@/public/projects/planningpoker/zoom.png";
import zoomAppImage from "@/public/projects/planningpoker/zoom_app.avif";

export const metadata: ProjectMetadata = {
  id: "poker",
  categories: [ProjectCategory.Hobby],
  year: "2020-2026",
};

const media = [
  {
    type: "image" as const,
    src: homeImage,
    alt: "Planning Poker home page",
    gradient: "linear-gradient(180deg, #001a43 0% 15%, #0d2d5a 35%, #1c4182, #244782 85%, #0d2d5a)",
  },
  {
    type: "image" as const,
    src: zoomAppImage,
    alt: "Planning Poker Zoom app integration",
    gradient: "linear-gradient(180deg, #001a43 0% 15%, #0d2d5a 35%, #1c4182, #244782 85%, #0d2d5a)",
  },
  {
    type: "image" as const,
    src: presentationImage,
    alt: "Planning Poker presentation mode",
    gradient: "linear-gradient(180deg, #001a43 0% 15%, #0d2d5a 35%, #1c4182, #244782 85%, #0d2d5a)",
  },
  {
    type: "image" as const,
    src: zoomImage,
    alt: "Planning Poker in Zoom meeting",
    gradient: "linear-gradient(180deg, #001a43 0% 15%, #0d2d5a 35%, #1c4182, #244782 85%, #0d2d5a)",
  },
];

export const PlanningPokerProject = () => {
  return (
    <ProjectLayout mediaElement={<MediaViewer media={media} />}>
      <ProjectHeader
        title="Planning Poker"
        subtitle="Solo-built SCRUM estimation tool scaled to 15,000 users and generating ~$500/month"
        size="large"
        badges={[
          { label: "Solo Project", variant: "primary" },
          { label: "Angular", variant: "secondary" },
          { label: "Firebase", variant: "secondary" },
        ]}
      />

      <ProjectSection title="Why" delay={0.1}>
        <p className="mb-3">
          When the pandemic hit in 2020, remote teams struggled with sprint planning.
          Existing tools were either too complex, too expensive, or didn't integrate with
          video calls. I saw an opportunity to build something better.
        </p>
        <p>
          I created Planning Poker as a solo project to solve this pain point: a simple,
          fast estimation tool that works seamlessly with Zoom, Teams, and Google Meet.
        </p>
      </ProjectSection>

      <ProjectSection title="How" delay={0.2}>
        <p className="mb-3">
          Built and maintained solo, with focus on low operational costs and sustainable
          growth.
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>
            <strong className="font-medium">Lean infrastructure:</strong> Firebase backend
            keeping costs at ~$10/month despite 15k users
          </li>
          <li>
            <strong className="font-medium">Growth engineering:</strong> SEO optimization
            and content strategy drove growth from 3 to 15,000 users
          </li>
          <li>
            <strong className="font-medium">Video integrations:</strong> Works with Zoom,
            Teams, Google Meet, and other platforms
          </li>
          <li>
            <strong className="font-medium">Continuous iteration:</strong> Regular feature
            updates based on user feedback
          </li>
          <li>
            <strong className="font-medium">Monetization:</strong> Premium features
            generating sustainable revenue
          </li>
        </ul>
      </ProjectSection>

      <ProjectSection title="Impact" delay={0.3}>
        <ProjectMetricGrid
          metrics={[
            { value: "15,000", label: "Global users" },
            { value: "~$500", label: "Monthly revenue" },
            { value: "~$10", label: "Monthly costs" },
          ]}
        />
        <p className="text-sm">
          Demonstrates end-to-end product skills: from technical architecture and growth
          engineering to monetization strategy. Scaled 5000x from initial launch while
          maintaining 98%+ profit margins.
        </p>
      </ProjectSection>

      <div className="flex flex-wrap gap-3 mt-6">
        <ProjectLink href="https://planningpoker.live">Try Planning Poker</ProjectLink>
      </div>
    </ProjectLayout>
  );
};
