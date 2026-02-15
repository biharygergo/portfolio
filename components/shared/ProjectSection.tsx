import { motion } from "motion/react";
import React from "react";

interface ProjectSectionProps {
  title: string;
  children: React.ReactNode;
  delay?: number;
}

export const ProjectSection = ({
  title,
  children,
  delay = 0,
}: ProjectSectionProps) => {
  return (
    <motion.section
      className="mb-6"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
    >
      <h3 className="text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-3">
        {title}
      </h3>
      <div className="text-gray-700 dark:text-gray-300 leading-relaxed font-normal">
        {children}
      </div>
    </motion.section>
  );
};
