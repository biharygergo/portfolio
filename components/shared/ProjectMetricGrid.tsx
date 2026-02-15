import React from "react";

export interface Metric {
  value: string;
  label: string;
}

interface ProjectMetricGridProps {
  metrics: Metric[];
}

export const ProjectMetricGrid = ({ metrics }: ProjectMetricGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="text-center p-3 border border-gray-200 dark:border-gray-700 rounded-lg"
        >
          <div className="text-2xl font-medium text-gray-900 dark:text-white">
            {metric.value}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">
            {metric.label}
          </div>
        </div>
      ))}
    </div>
  );
};
