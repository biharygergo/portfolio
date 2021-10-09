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
  const projectsRef = React.useRef<HTMLDivElement | null>(null);

  const scrollToProjects = () =>
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });

  React.useEffect(() => smoothscroll.polyfill(), []);

  return (
    <div className="bg-white dark:bg-gray-900">
      <Head>
        <title>{config.meta.title}</title>
        <meta name="description" content={config.meta.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AnimateSharedLayout type="crossfade">
          <IntroSection scrollToProjects={scrollToProjects} />
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
