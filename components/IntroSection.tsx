import { motion } from "motion/react";
import React from "react";
import { config } from "../data";
import { ArrowDown } from "./icons/ArrowDown";
import { DarkMode } from "./icons/DarkMode";
import { Github } from "./icons/Github";
import { LightMode } from "./icons/LightMode";
import { LinkedIn } from "./icons/LinkedIn";
import { WindSpotBadge } from "./WindSpotBadge";

export const IntroSection = (props: {
  scrollToProjects: () => void;
  toggleDarkMode: () => void;
  currentMode: "dark" | "light";
  windData: Record<string, number | null>;
}) => (
  <div className="relative container min-h-screen mx-auto flex flex-col justify-center items-center px-4">
    <div className="max-w-2xl mx-auto text-center">
      {/* Greeting */}
      <motion.h1
        className="text-4xl md:text-5xl font-normal text-gray-900 dark:text-white mb-12 tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Hi there! 👋
      </motion.h1>

      {/* Content Section */}
      <motion.div
        className="space-y-6 mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      >
        {/* Work */}
        <p className="text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          At work, I'm a{" "}
          <span className="text-gray-900 dark:text-white">
            Growth Software Engineer at ElevenLabs
          </span>
        </p>

        {/* Sailing */}
        <p className="text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          Outside of work, I love{" "}
          <span className="text-gray-900 dark:text-white">
            everything with a sail
          </span>
        </p>
      </motion.div>

      {/* Sailing Spots Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">
          You'll probably find me at one of these spots when it's windy
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <WindSpotBadge 
            location="Balaton" 
            windSpeed={props.windData.Balaton ?? undefined}
            delay={0.25} 
          />
          <WindSpotBadge 
            location="Prasonisi" 
            windSpeed={props.windData.Prasonisi ?? undefined}
            delay={0.3} 
          />
          <WindSpotBadge 
            location="Riva del Garda" 
            windSpeed={props.windData["Riva del Garda"] ?? undefined}
            delay={0.35} 
          />
        </div>
      </motion.div>
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
