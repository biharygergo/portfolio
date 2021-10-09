import { motion } from "framer-motion";
import React from "react";

export const ProjectSubtitle = (props: {
  subtitle: string;
  layoutIndex: number;
}) => (
  <motion.h4
    className="text-base text-gray-700 dark:text-gray-50 my-2"
    layoutId={`project-card-subtitle-${props.layoutIndex}`}
  >
    {props.subtitle}
  </motion.h4>
);
