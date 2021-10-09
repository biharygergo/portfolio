import { motion } from "framer-motion";
import React from "react";
import { animationProps } from "./svg-animations";

export const ArrowDown = (props: { onClick: () => void }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-gray-800 dark:text-white hover:text-gray-500 dark:hover:text-gray-100 transition-colors"
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
      {...animationProps}
    />
  </svg>
);
