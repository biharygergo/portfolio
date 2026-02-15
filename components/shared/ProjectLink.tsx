import { motion } from "motion/react";
import React from "react";

interface ProjectLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
}

export const ProjectLink = ({
  href,
  children,
  variant = "primary",
  external = true,
}: ProjectLinkProps) => {
  const variantClasses = {
    primary:
      "bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100",
    secondary:
      "bg-transparent text-gray-900 border-2 border-gray-900 hover:bg-gray-900 hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-gray-900",
  };

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`
        inline-flex items-center gap-2 px-5 py-2.5 rounded-lg
        font-normal text-sm
        transition-colors duration-200
        ${variantClasses[variant]}
      `}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
      {external && (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      )}
    </motion.a>
  );
};
