import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  tags: string[];
  coverImageUrl: string;
  coverImageAlt: string;
  projectUrl: string;
};

const projects: Project[] = [
  {
    title: "SailLog",
    description: "Lorem ipsum dolor sit amet",
    tags: ["hobby-project", "angular", "firebase"],
    coverImageUrl: "https://i.redd.it/bk9zksmcmbl51.jpg",
    coverImageAlt: "Picture of a sailing boat",
    projectUrl: "https://saillogapp.com",
  },
  {
    title: "SailLog",
    description: "Lorem ipsum dolor sit amet",
    tags: ["hobby-project", "angular", "firebase"],
    coverImageUrl: "https://i.redd.it/bk9zksmcmbl51.jpg",
    coverImageAlt: "Picture of a sailing boat",
    projectUrl: "https://saillogapp.com",
  },
  {
    title: "SailLog",
    description: "Lorem ipsum dolor sit amet",
    tags: ["hobby-project", "angular", "firebase"],
    coverImageUrl: "https://i.redd.it/bk9zksmcmbl51.jpg",
    coverImageAlt: "Picture of a sailing boat",
    projectUrl: "https://saillogapp.com",
  },
  {
    title: "SailLog",
    description: "Lorem ipsum dolor sit amet",
    tags: ["hobby-project", "angular", "firebase"],
    coverImageUrl: "https://i.redd.it/bk9zksmcmbl51.jpg",
    coverImageAlt: "Picture of a sailing boat",
    projectUrl: "https://saillogapp.com",
  },
  {
    title: "SailLog",
    description: "Lorem ipsum dolor sit amet",
    tags: ["hobby-project", "angular", "firebase"],
    coverImageUrl: "https://i.redd.it/bk9zksmcmbl51.jpg",
    coverImageAlt: "Picture of a sailing boat",
    projectUrl: "https://saillogapp.com",
  },
  {
    title: "SailLog",
    description: "Lorem ipsum dolor sit amet",
    tags: ["hobby-project", "angular", "firebase"],
    coverImageUrl: "https://i.redd.it/bk9zksmcmbl51.jpg",
    coverImageAlt: "Picture of a sailing boat",
    projectUrl: "https://saillogapp.com",
  },
  {
    title: "SailLog",
    description: "Lorem ipsum dolor sit amet",
    tags: ["hobby-project", "angular", "firebase"],
    coverImageUrl: "https://i.redd.it/bk9zksmcmbl51.jpg",
    coverImageAlt: "Picture of a sailing boat",
    projectUrl: "https://saillogapp.com",
  },
  {
    title: "SailLog",
    description: "Lorem ipsum dolor sit amet",
    tags: ["hobby-project", "angular", "firebase"],
    coverImageUrl: "https://i.redd.it/bk9zksmcmbl51.jpg",
    coverImageAlt: "Picture of a sailing boat",
    projectUrl: "https://saillogapp.com",
  },
];

const ProjectCard = (
  props: Project & {
    layoutId: string;
    layoutIndex: number;
    onClick: () => void;
  }
) => (
  <motion.div
    className={`shadow-lg rounded-md ${
      props.layoutIndex > 3 ? "self-start" : "self-end"
    }`}
    onClick={props.onClick}
    layoutId={`project-card-container-${props.layoutIndex}`}
  >
    <motion.img
      className="w-full object-cover rounded-t-md"
      src={props.coverImageUrl}
      alt={props.coverImageAlt}
      style={{ maxHeight: 200 }}
      layoutId={`project-card-image-${props.layoutIndex}`}
    />
    <div className="p-4 bg-white rounded-b-md">
      <motion.h3
        className="text-2xl font-light"
        layoutId={`project-card-title-${props.layoutIndex}`}
      >
        {props.title}
      </motion.h3>
      <div className="mt-5 mb-2 flex flex-wrap gap-2">
        {props.tags.map((tag, i) => (
          <div
            className="rounded-xl bg-blue-100 text-center py-1 px-3 flex items-center"
            key={tag}
          >
            <span className="text-xs">#{tag}</span>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

const ProjectModal = (
  props: Project & { layoutIndex: number; onClose: () => void }
) => (
  <div className="fixed inset-0 flex items-center justify-center">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
      transition={{ duration: 0.2 }}
      className="absolute inset-0 bg-gray-800"
      onClick={props.onClose}
    />
    <motion.div
      className="shadow-lg rounded-md w-8/12 bg-white z-10"
      layoutId={`project-card-container-${props.layoutIndex}`}
    >
      <motion.img
        className="w-full object-cover rounded-t-md"
        src={props.coverImageUrl}
        alt={props.coverImageAlt}
        style={{ maxHeight: 400 }}
        layoutId={`project-card-image-${props.layoutIndex}`}
      />
      <div className="p-4 bg-white rounded-b-md">
        <motion.h3
          className="text-2xl font-light"
          layoutId={`project-card-title-${props.layoutIndex}`}
        >
          {props.title}
        </motion.h3>
        <div className="mt-5 mb-2 flex flex-wrap gap-2">
          {props.tags.map((tag, i) => (
            <div
              className="rounded-xl bg-blue-100 text-center py-1 px-3 flex items-center"
              key={tag}
            >
              <span className="text-xs">#{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  </div>
);

const Home: NextPage = () => {
  const [openedId, setOpenedId] = React.useState<number | undefined>();

  return (
    <div className="bg-white">
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
          <div className="container scroll-snap-child min-h-screen mx-auto flex justify-center items-center">
            <h1 className="text-7xl text-center">Hi there!</h1>
          </div>
          <div className="container min-h-screen mx-auto grid grid-cols-4 grid-rows-2 gap-10 p-10 items-center">
            {projects.map((project, index) => (
              <ProjectCard
                {...project}
                layoutId={"something"}
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
