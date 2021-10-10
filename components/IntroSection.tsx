import { motion } from "framer-motion";
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
  <div className="container min-h-screen mx-auto flex flex-col justify-center items-center">
    <motion.h1
      className="text-7xl text-center dark:text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      Hi there!
    </motion.h1>
    <motion.h2
      className="mt-2 text-gray-800 dark:text-gray-100 px-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      {config.intro}
    </motion.h2>
    <div className="absolute bottom-10 mx-auto flex flex-col items-center">
      <motion.span
        className="text-sm text-gray-800 dark:text-white mb-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        Projects
      </motion.span>
      <ArrowDown onClick={props.scrollToProjects} />
    </div>
    <div className="absolute top-10 right-10 flex">
      {props.currentMode === "light" ? (
        <DarkMode onClick={props.toggleDarkMode} />
      ) : (
        <LightMode onClick={props.toggleDarkMode} />
      )}
      <a
        href={config.linkedIn}
        target="_blank"
        rel="noreferrer"
        className="mr-2"
      >
        <LinkedIn />
      </a>
      <a href={config.github} target="_blank" rel="noreferrer">
        <Github />
      </a>
    </div>
  </div>
);
