import { motion } from "framer-motion";
import React from "react";

export const ProjectTitle = (props: { title: string; layoutIndex: number }) => (
  <motion.h3
    className="text-2xl font-light dark:text-white"
    layoutId={`project-card-title-${props.layoutIndex}`}
  >
    {props.title}
  </motion.h3>
);
