import React from "react";
import { ProjectBadge } from "./ProjectBadge";

interface Badge {
  label: string;
  variant: "primary" | "secondary" | "accent";
}

interface ProjectHeaderProps {
  title: string;
  subtitle: string;
  badges: Badge[];
  size?: "default" | "large";
}

export const ProjectHeader = ({
  title,
  subtitle,
  badges,
  size = "default",
}: ProjectHeaderProps) => {
  return (
    <>
      <h2
        className={`font-medium text-gray-900 dark:text-white mb-2 ${
          size === "large" ? "text-2xl" : "text-xl"
        }`}
      >
        {title}
      </h2>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 font-normal">
        {subtitle}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {badges.map((badge, index) => (
          <ProjectBadge key={index} variant={badge.variant}>
            {badge.label}
          </ProjectBadge>
        ))}
      </div>
    </>
  );
};
