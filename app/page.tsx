"use client";

import React from "react";
import { LayoutGroup } from "motion/react";
import { IntroSection } from "@/components/IntroSection";
import { ProjectsSection } from "@/components/ProjectsSection";

export default function Home() {
  const [mode, setMode] = React.useState<"light" | "dark">("light");

  const projectsRef = React.useRef<HTMLDivElement | null>(null);

  const scrollToProjects = () =>
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });

  const toggleMode = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
    // Apply class to HTML element for Tailwind v4 dark mode
    document.documentElement.classList.toggle("dark", newMode === "dark");
  };

  React.useEffect(() => {
    // Check system preference on mount
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setMode(isDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  return (
    <main className="bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
      <LayoutGroup>
        <IntroSection
          scrollToProjects={scrollToProjects}
          currentMode={mode}
          toggleDarkMode={toggleMode}
        />
        <ProjectsSection ref={projectsRef} />
      </LayoutGroup>
    </main>
  );
}
