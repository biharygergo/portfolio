import React from "react";
import { ProjectLayout } from "../shared/ProjectLayout";
import { ProjectHeader } from "../shared/ProjectHeader";
import { ProjectSection } from "../shared/ProjectSection";
import { ProjectLink } from "../shared/ProjectLink";
import { ProjectCategory, ProjectMetadata } from "../../types/project";

export const metadata: ProjectMetadata = {
  id: "hacktivity",
  categories: [ProjectCategory.Hackathon],
  year: "2020",
};

export const HacktivityProject = () => {
  return (
    <ProjectLayout>
      <ProjectHeader
        title="Hacktivity"
        subtitle="Real-time online Activity game with video streaming"
        badges={[
          { label: "Hackathon", variant: "primary" },
          { label: "React", variant: "secondary" },
          { label: "WebRTC", variant: "secondary" },
        ]}
      />

      <ProjectSection title="Why" delay={0.1}>
        <p>
          During lockdown, we wanted to bring the fun of the Activity board game online. The
          challenge: real-time video streaming with low latency for a smooth gaming
          experience.
        </p>
      </ProjectSection>

      <ProjectSection title="How" delay={0.2}>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>WebRTC for peer-to-peer video and audio streaming</li>
          <li>Real-time game state synchronization with WebSockets</li>
          <li>React for responsive UI and game mechanics</li>
          <li>Built in 48 hours during a hackathon</li>
        </ul>
      </ProjectSection>

      <ProjectSection title="Impact" delay={0.3}>
        <p className="text-sm">
          Successfully created a working prototype that demonstrated the feasibility of
          bringing classic board games online with real-time video interaction. Great
          learning experience with WebRTC.
        </p>
      </ProjectSection>

      <div className="mt-4">
        <ProjectLink href="https://storage.googleapis.com/hacktivity-296321.appspot.com/index.html">
          Try Demo
        </ProjectLink>
      </div>
    </ProjectLayout>
  );
};
