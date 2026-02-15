import React from "react";
import { ProjectContainer } from "./ProjectContainer";

interface ProjectLayoutProps {
  children: React.ReactNode;
  mediaElement?: React.ReactNode;
}

/**
 * Layout wrapper for projects, handles media viewer positioning
 */
export const ProjectLayout = ({ children, mediaElement }: ProjectLayoutProps) => {
  if (mediaElement) {
    return (
      <ProjectContainer hasMedia={true}>
        {/* Content - shows first on mobile, left on desktop */}
        <div className="order-1 md:order-none">{children}</div>

        {/* Media Viewer - shows last on mobile, right on desktop */}
        <div className="order-2 md:order-none">{mediaElement}</div>
      </ProjectContainer>
    );
  }

  return <ProjectContainer>{children}</ProjectContainer>;
};
