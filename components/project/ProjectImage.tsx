import { motion } from "framer-motion";
import React from "react";

export const ProjectImage = (props: {
  url: string;
  alt: string;
  layoutIndex: number;
  type: "card" | "modal";
}) => (
  <motion.div
    className="rounded-t-md relative min-h-0 overflow-hidden flex-grow"
    layoutId={`project-card-image-${props.layoutIndex}`}
    style={{ height: props.type === "card" ? 200 : "40%" }}
  >
    <picture>
      <source srcSet={`${props.url}.webp`} type="image/webp" />
      <source srcSet={`${props.url}.jpeg`} type="image/jpeg" />
      <motion.img
        className="w-full object-cover rounded-t-md h-full"
        src={props.url}
        alt={props.alt}
        style={{ maxHeight: 300 }}
      />
    </picture>
    <div className="bg-gradient-to-t from-white absolute inset-0 dark:from-gray-800 h-full" />
  </motion.div>
);
