import { motion } from "motion/react";
import React from "react";
import { config } from "../data";
import { ArrowDown } from "./icons/ArrowDown";
import { DarkMode } from "./icons/DarkMode";
import { Github } from "./icons/Github";
import { LightMode } from "./icons/LightMode";
import { LinkedIn } from "./icons/LinkedIn";

export const IntroSection = (props: {
  scrollToProjects: () => void;
  toggleDarkMode: () => void;
  currentMode: "dark" | "light";
}) => (
  <div className="relative container min-h-screen mx-auto flex flex-col justify-center items-center px-4">
    <div className="max-w-4xl mx-auto text-center">
      {/* Role Badge */}
      <motion.div
        className="inline-block px-4 py-2 mb-6 text-sm font-normal text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Software Engineer @ Google
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 dark:text-white mb-6 tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      >
        Building delightful web experiences
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="text-lg md:text-xl font-normal text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        {config.intro}
      </motion.p>
    </div>

    {/* Scroll Indicator */}
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
      <motion.span
        className="text-sm font-normal text-gray-600 dark:text-gray-400 mb-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Projects
      </motion.span>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.4,
          duration: 0.6,
        }}
      >
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown onClick={props.scrollToProjects} />
        </motion.div>
      </motion.div>
    </div>

    {/* Top Right Controls */}
    <div className="absolute top-6 right-6 md:top-10 md:right-10 flex items-center gap-2">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        <a
          href={config.linkedIn}
          target="_blank"
          rel="noreferrer"
          className="p-2 hover:opacity-70 transition-opacity"
          aria-label="LinkedIn Profile"
        >
          <LinkedIn />
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.35, duration: 0.4 }}
      >
        <a
          href={config.github}
          target="_blank"
          rel="noreferrer"
          className="p-2 hover:opacity-70 transition-opacity"
          aria-label="GitHub Profile"
        >
          <Github />
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
      >
        {props.currentMode === "light" ? (
          <DarkMode onClick={props.toggleDarkMode} />
        ) : (
          <LightMode onClick={props.toggleDarkMode} />
        )}
      </motion.div>
    </div>
  </div>
);
