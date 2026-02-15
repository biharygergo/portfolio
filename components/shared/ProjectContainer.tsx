import { motion } from "motion/react";
import React from "react";

interface ProjectContainerProps {
  children: React.ReactNode;
  hasMedia?: boolean;
}

export const ProjectContainer = ({ children, hasMedia = false }: ProjectContainerProps) => {
  return (
    <motion.article
      className={`
        relative rounded-2xl
        bg-white dark:bg-gray-800
        border border-gray-200 dark:border-gray-700
        transition-all duration-300
        hover:border-gray-300 dark:hover:border-gray-600
        p-6
        ${hasMedia ? "flex flex-col md:grid md:grid-cols-2 gap-8" : ""}
      `}
      style={{ overflow: "hidden" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.article>
  );
};
