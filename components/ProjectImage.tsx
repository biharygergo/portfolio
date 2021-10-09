import { motion } from "framer-motion";
import React from "react";

export const ProjectImage = (props: {
    url: string;
    alt: string;
    layoutIndex: number;
    type: "card" | "modal";
  }) => (
    <motion.div
      className="rounded-t-md relative"
      layoutId={`project-card-image-${props.layoutIndex}`}
    >
      <motion.img
        className="w-full object-cover rounded-t-md"
        src={props.url}
        alt={props.alt}
        style={{ height: props.type === "card" ? 200 : 300 }}
      />
      <div className="bg-gradient-to-t from-white absolute inset-0 dark:from-gray-800" />
    </motion.div>
  );