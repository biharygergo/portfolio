import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { config } from "../data/";
import { ProjectModal } from "../components/project/ProjectModal";
import { IntroSection } from "../components/IntroSection";
import { ProjectsSection } from "../components/ProjectsSection";

import smoothscroll from "smoothscroll-polyfill";

const Home: NextPage = () => {
  const [openedId, setOpenedId] = React.useState<number | undefined>();
  const [mode, setMode] = React.useState<"light" | "dark">("light");

  const projectsRef = React.useRef<HTMLDivElement | null>(null);

  const scrollToProjects = () =>
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });

  const toggleMode = () => {
    mode === "dark" ? setMode("light") : setMode("dark");
  };

  React.useEffect(() => smoothscroll.polyfill(), []);

  React.useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setMode("dark");
    } else {
      setMode("light");
    }
  }, []);

  return (
    <div className={mode}>
      <Head>
        <title>{config.meta.title}</title>
        <meta name="description" content={config.meta.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white dark:bg-gray-900 transition-colors duration-300">
        <AnimateSharedLayout type="crossfade">
          <IntroSection
            scrollToProjects={scrollToProjects}
            currentMode={mode}
            toggleDarkMode={toggleMode}
          />
          <ProjectsSection ref={projectsRef} onProjectClick={setOpenedId} />
          <AnimatePresence>
            {openedId !== undefined && (
              <ProjectModal
                {...config.projects[openedId]}
                layoutIndex={openedId}
                onClose={() => setOpenedId(undefined)}
              />
            )}
          </AnimatePresence>
        </AnimateSharedLayout>
      </main>
    </div>
  );
};

export default Home;
