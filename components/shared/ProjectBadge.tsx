import React from "react";

interface ProjectBadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent";
  color?: string;
}

export const ProjectBadge = ({
  children,
  variant = "secondary",
  color,
}: ProjectBadgeProps) => {
  const variantClasses = {
    primary: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    secondary:
      "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300",
    accent: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-normal ${variantClasses[variant]}`}
      style={color ? { backgroundColor: color + "20", color } : undefined}
    >
      {children}
    </span>
  );
};
