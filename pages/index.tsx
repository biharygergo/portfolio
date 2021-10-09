import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { ArrowDown } from "../components/icons/ArrowDown";
import { ExternalLink } from "../components/icons/ExternalLink";
import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectModal } from "../components/ProjectModal";

const Home: NextPage = () => {
  const [openedId, setOpenedId] = React.useState<number | undefined>();
  const projectsRef = React.useRef<HTMLDivElement | null>(null);

  const scrollToProjects = () =>
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="bg-white dark:bg-gray-900">
      <Head>
        <title>Gergely Bihary</title>
        <meta
          name="description"
          content="Gergely Bihary's portfolio page - under development"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <AnimateSharedLayout type="crossfade">
          <div className="container min-h-screen mx-auto flex flex-col justify-center items-center">
            <motion.h1
              className="text-7xl text-center dark:text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Hi there!
            </motion.h1>
            <motion.h2 className="mt-2 text-gray-800 dark:text-gray-100">
              I am Gergely Bihary, software engineer at Prezi.
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
              <ArrowDown onClick={scrollToProjects} />
            </div>
            <div className="absolute top-10 right-10 flex">
              <a
                href="https://www.linkedin.com/in/gergely-sandor-bihary/"
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLink onClick={() => {}} />
              </a>
            </div>
          </div>
          <div
            ref={projectsRef}
            className="container min-h-screen mx-auto grid md:grid-cols-2 xl:grid-cols-4 grid-rows-2 gap-10 p-5 md:p-10 items-center"
          >
            {projects.map((project, index) => (
              <ProjectCard
                {...project}
                key={index}
                layoutIndex={index}
                onClick={() => setOpenedId(index)}
              />
            ))}
          </div>
          <AnimatePresence>
            {openedId !== undefined && (
              <ProjectModal
                {...projects[openedId]}
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
