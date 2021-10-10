import React from "react";
import { motion } from "framer-motion";
import { animationProps } from "./svg-animations";

export const LightMode = (props: { onClick: () => void }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 mr-2 text-gray-600 dark:text-white hover:text-gray-500 dark:hover:text-gray-100 transition-colors"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    onClick={props.onClick}
  >
    <motion.path
      {...animationProps}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);
