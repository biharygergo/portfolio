import React from "react";
import { ProjectLayout } from "../shared/ProjectLayout";
import { ProjectHeader } from "../shared/ProjectHeader";
import { ProjectSection } from "../shared/ProjectSection";
import { MediaViewer } from "../shared/MediaViewer";
import { ProjectCategory, ProjectMetadata } from "../../types/project";
import homeImage from "@/public/projects/inceptech/home.png";
import globeImage from "@/public/projects/inceptech/globe.png";

export const metadata: ProjectMetadata = {
  id: "inceptech",
  categories: [ProjectCategory.Freelance],
  year: "2020",
};

const media = [
  {
    type: "image" as const,
    src: homeImage,
    alt: "IncepTech website home page",
  },
  {
    type: "image" as const,
    src: globeImage,
    alt: "IncepTech interactive globe visualization",
  },
];

export const IncepTechProject = () => {
  return (
    <ProjectLayout mediaElement={<MediaViewer media={media} />}>
      <ProjectHeader
        title="IncepTech"
        subtitle="Sole developer building a beautiful, SEO-optimized website for a tech agency"
        badges={[
          { label: "Freelance", variant: "accent" },
          { label: "Next.js", variant: "secondary" },
          { label: "Framer Motion", variant: "secondary" },
          { label: "SEO", variant: "secondary" },
          { label: "Archived", variant: "secondary" },
        ]}
      />

      <ProjectSection title="Why" delay={0.1}>
        <p className="mb-3">
          IncepTech wanted a beautiful, standout website that reflected their creative
          approach to problem-solving, but they couldn't build it in-house. They needed
          someone who could translate their vision into a fast, modern web presence.
        </p>
        <p>
          I was excited about this project because it gave me the opportunity to work on
          something highly visual and design-focused while maintaining technical excellence
          in performance and SEO.
        </p>
      </ProjectSection>

      <ProjectSection title="How" delay={0.2}>
        <p className="mb-3">
          The main technical challenge was maintaining design consistency while implementing
          animations and UI elements that mimicked their office's interior design aesthetic.
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>
            <strong className="font-medium">Design translation:</strong> Matched website UI
            to their physical office interior design
          </li>
          <li>
            <strong className="font-medium">Performance + SEO:</strong> Built with Next.js
            for optimal speed and search visibility
          </li>
          <li>
            <strong className="font-medium">Curved SVG animations:</strong> Signature flowing
            lines throughout the page
          </li>
          <li>
            <strong className="font-medium">Scroll-snapping:</strong> Smooth section
            transitions with Framer Motion
          </li>
          <li>
            <strong className="font-medium">Design consistency:</strong> Maintained cohesive
            aesthetic across all breakpoints
          </li>
        </ul>
      </ProjectSection>

      <ProjectSection title="Impact" delay={0.3}>
        <p className="text-sm mb-3">
          The website served as IncepTech's primary web presence for years until their
          acquisition by McKinsey. The unique curved line design became a signature element
          of their brand identity. The site has since been archived following the
          acquisition.
        </p>
        <p className="text-sm">
          This project taught me how to balance beautiful design with technical performance,
          translate real-world aesthetics into digital experiences, and deliver as a sole
          developer on client projects.
        </p>
      </ProjectSection>
    </ProjectLayout>
  );
};
