import React, { useState } from "react";
import { PROJECT_REGISTRY } from "./projects";
import { ProjectCategory, FILTER_LABELS } from "../types/project";

type FilterType = "all" | ProjectCategory;

export const ProjectsSection = React.forwardRef<HTMLDivElement>((_, ref) => {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>("all");

  // Build filters dynamically from available categories
  const filters = [
    { id: "all" as const, label: "All" },
    ...Object.values(ProjectCategory).map((category) => ({
      id: category,
      label: FILTER_LABELS[category],
    })),
  ];

  // Filter projects based on selected category
  const filteredProjects =
    selectedFilter === "all"
      ? PROJECT_REGISTRY
      : PROJECT_REGISTRY.filter((project) =>
          project.metadata.categories.includes(selectedFilter)
        );

  return (
    <div ref={ref} className="container mx-auto px-4 md:px-8 lg:px-10 py-16 max-w-7xl">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-medium text-gray-900 dark:text-white mb-3">
          Selected Work
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl font-normal mb-6">
          A collection of projects I've built and contributed to over the years.
        </p>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`
                px-4 py-2 rounded-full text-sm font-normal
                transition-all duration-200
                ${
                  selectedFilter === filter.id
                    ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                }
              `}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Simple Vertical Stack */}
      <div className="space-y-6">
        {filteredProjects.map((project) => (
          <project.Component key={project.metadata.id} />
        ))}
      </div>
    </div>
  );
});

ProjectsSection.displayName = "ProjectsSection";
