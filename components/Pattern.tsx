import { motion } from "framer-motion";
import React from "react";

const appear = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
    opacity: 1,
  },
};

export const ArrowDown = (props: { onClick: () => void }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-gray-800 dark:text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    onClick={props.onClick}
  >
    <motion.path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 14l-7 7m0 0l-7-7m7 7V3"
      variants={appear}
      initial="hidden"
      animate="visible"
      transition={{
        default: { duration: 2, ease: "easeInOut", delay: 0.5 },
      }}
    />
  </svg>
);
