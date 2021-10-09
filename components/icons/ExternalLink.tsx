import React from "react";
import { motion } from "framer-motion";
import { animationProps } from "./svg-animations";

export const ExternalLink = (props: { onClick: () => void }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-gray-600 dark:text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    onClick={props.onClick}
  >
    <motion.path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      {...animationProps}
    />
  </svg>
);
