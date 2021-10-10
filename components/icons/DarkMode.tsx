import { motion } from "framer-motion";
import React from "react";
import { animationProps } from "./svg-animations";
export const DarkMode = (props: { onClick: () => void }) => (
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
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
);
