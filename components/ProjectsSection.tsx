import React from "react";
import { config } from "../data";
import { ProjectCard } from "./project/ProjectCard";

export const ProjectsSection = React.forwardRef<
  HTMLDivElement,
  { onProjectClick: (index: number) => void }
>((props, ref) => (
  <div
    ref={ref}
    className="container min-h-screen mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-2 gap-5 md:gap-10 p-5 md:p-10 items-center"
  >
    {config.projects.map((project, index) => (
      <ProjectCard
        {...project}
        key={index}
        layoutIndex={index}
        onClick={() => props.onProjectClick(index)}
      />
    ))}
  </div>
));

ProjectsSection.displayName = "ProjectsSection";
