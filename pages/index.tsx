import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { ArrowDown } from "../components/Pattern";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  coverImageUrl: string;
  coverImageAlt: string;
  projectUrl: string;
};

const projects: Project[] = [
  {
    title: "SailLog",
    subtitle: "Cross-platform coaching system for professional sailors",
    description:
      "As a sailing enthusiast, I've been developing SailLog for the past 5 years. Used by more than 2000 sailors from around the world, it's a great project to work on my free-time.",
    tags: ["hobby-project", "angular", "firebase"],
    coverImageUrl: "/saillog-cover.jpeg",
    coverImageAlt: "Picture of a sailing boat",
    projectUrl: "https://saillogapp.com",
  },
  {
    title: "Planning Poker",
    subtitle: "SCRUM planning in a remote setup",
    description:
      "When Prezi switched to all-remote due to the pandemic, I've developed this app to help us in our planning process. It's open-source and since then other teams outside of Prezi have started using it as well.",
    tags: ["hobby-project", "angular", "firebase"],
    coverImageUrl: "/planning-cover.png",
    coverImageAlt: "Illustration of poker cards",
    projectUrl: "https://planningpoker.live",
  },
  {
    title: "Hacktivity",
    subtitle:
      "Real-time online Activity game with audio/video/canvas streaming",
    description:
      "A two-day long hackathon project where our team of two created this awesome little game. A great technical challenge with WebRTC connections and short time-limit.",
    tags: ["hackathon", "react", "node.js"],
    coverImageUrl: "/hacktivity-cover.png",
    coverImageAlt: "Picture of an Activity board-game",
    projectUrl:
      "https://storage.googleapis.com/hacktivity-296321.appspot.com/index.html",
  },
  {
    title: "Vibes",
    subtitle: "Snapchat-like video-messaging prototype app",
    description:
      "Another hackathon project, built for Junction 2020. Mostly working prototype with a focus on usability, animations and the overall UI.",
    tags: ["hackathon", "react", "prototype"],
    coverImageUrl: "/vibe-cover.jpeg",
    coverImageAlt: "Picture of a phone making a video call",
    projectUrl: "https://getthevibe.today/",
  },
  {
    title: "IncepTech",
    subtitle: "Brand-new landing page for a leading Hungarian tech agency",
    description:
      "Interesting design challenge of having a scroll-snapping page with curved lines flowing through the entire page. Check it out!",
    tags: ["freelance", "next.js", "motion"],
    coverImageUrl: "/incep-cover.png",
    coverImageAlt: "Screenshot of the agency's landing page",
    projectUrl: "https://incepteam.com",
  },
  {
    title: "Code Zero",
    subtitle:
      "Customer, order and inventory management software for a sailing company",
    description:
      "Custom-built solution to digitalise all processes of a local sail repair shop. Interesting technical and also management challenge of delivering something from idea to production.",
    tags: ["freelance", "react", "nodejs"],
    coverImageUrl: "/codezero-cover.jpeg",
    coverImageAlt: "Image of a sail under repar",
    projectUrl: "https://vitorlaszerviz.hu",
  },
  {
    title: "ProAb App",
    subtitle: "Customer facing and back-office solution for accounting",
    description:
      "Developed the front-end of a suite of applications designed to help independent contractors and their bookkeepers in their workflow.",
    tags: ["freelance", "angular", "graphql"],
    coverImageUrl: "/proab-cover.jpeg",
    coverImageAlt: "Image of the bookkeeping application's screen",
    projectUrl: "https://app.proab.hu",
  },
  {
    title: "JunctionApp",
    subtitle: "Contributing to the open-source hackathon organization platform",
    description:
      "I've been contributing for the past years to the JunctionApp, which is a widely used platform to organize hackathons around the world.",
    tags: ["open-source", "react", "graphql"],
    coverImageUrl: "junction-cover.jpeg",
    coverImageAlt: "Picture of the Junction hackathon",
    projectUrl: "https://app.hackjunction.com",
  },
];

const ProjectTitle = (props: { title: string; layoutIndex: number }) => (
  <motion.h3
    className="text-2xl font-light dark:text-white"
    layoutId={`project-card-title-${props.layoutIndex}`}
  >
    {props.title}
  </motion.h3>
);

const ProjectSubtitle = (props: { subtitle: string; layoutIndex: number }) => (
  <motion.h4
    className="text-base text-gray-700 dark:text-gray-50 my-2"
    layoutId={`project-card-subtitle-${props.layoutIndex}`}
  >
    {props.subtitle}
  </motion.h4>
);

const ProjectTag = (props: { tag: string }) => (
  <div
    className="rounded-xl bg-blue-100 text-center py-1 px-3 flex items-center"
    key={props.tag}
  >
    <span className="text-xs">#{props.tag}</span>
  </div>
);

const ProjectImage = (props: {
  url: string;
  alt: string;
  layoutIndex: number;
  type: "card" | "modal";
}) => (
  <motion.div
    className="rounded-t-md relative"
    layoutId={`project-card-image-${props.layoutIndex}`}
  >
    <motion.img
      className="w-full object-cover rounded-t-md"
      src={props.url}
      alt={props.alt}
      style={{ height: props.type === "card" ? 200 : 400 }}
    />
    <div className="bg-gradient-to-t from-white absolute inset-0 dark:from-gray-800" />
  </motion.div>
);

const ProjectCard = (
  props: Project & {
    layoutId: string;
    layoutIndex: number;
    onClick: () => void;
  }
) => (
  <motion.div
    className={`shadow-lg rounded-md self-stretch flex flex-col hover:shadow-xl transition-shadow select-none`}
    onClick={props.onClick}
    layoutId={`project-card-container-${props.layoutIndex}`}
    style={{ maxHeight: 500 }}
  >
    <ProjectImage
      url={props.coverImageUrl}
      alt={props.coverImageAlt}
      layoutIndex={props.layoutIndex}
      type="card"
    />

    <div className="p-4 bg-white dark:bg-gray-800 rounded-b-md flex flex-col h-full">
      <ProjectTitle layoutIndex={props.layoutIndex} title={props.title} />
      <ProjectSubtitle
        layoutIndex={props.layoutIndex}
        subtitle={props.subtitle}
      />
      <motion.div
        className="mt-auto mb-2 flex flex-wrap gap-2"
        layoutId={`project-tags-${props.layoutIndex}`}
      >
        {props.tags.map((tag, i) => (
          <ProjectTag tag={tag} key={i} />
        ))}
      </motion.div>
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
      className="shadow-lg rounded-md m-2 md:w-8/12 bg-white dark:bg-gray-800 z-10"
      layoutId={`project-card-container-${props.layoutIndex}`}
    >
      <ProjectImage
        url={props.coverImageUrl}
        alt={props.coverImageAlt}
        layoutIndex={props.layoutIndex}
        type="modal"
      />

      <div className="p-4 bg-white dark:bg-gray-800 rounded-b-md">
        <ProjectTitle layoutIndex={props.layoutIndex} title={props.title} />
        <ProjectSubtitle
          layoutIndex={props.layoutIndex}
          subtitle={props.subtitle}
        />

        <motion.p className="text-base my-3 dark:text-gray-50">
          {props.description}
        </motion.p>
        <motion.div
          className="mt-5 mb-2 flex flex-wrap gap-2"
          layoutId={`project-tags-${props.layoutIndex}`}
        >
          {props.tags.map((tag, i) => (
            <ProjectTag tag={tag} key={i} />
          ))}
        </motion.div>
        <div className="mt-5 flex justify-end">
          <a
            className="py-2 px-4 border-2 border-gray-800 rounded-md hover:bg-gray-800 hover:text-white transition-colors dark:text-gray-50 dark:border-white dark:hover:bg-white dark:hover:text-gray-800"
            href={props.projectUrl}
            target="_blank"
            rel="noreferrer"
          >
            View Project
          </a>
        </div>
      </div>
    </motion.div>
  </div>
);

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
          <div className="container min-h-screen mx-auto flex justify-center items-center">
            <motion.h1
              className="text-7xl text-center dark:text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Hi there!
            </motion.h1>
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
          </div>
          <div
            ref={projectsRef}
            className="container min-h-screen mx-auto grid md:grid-cols-2 xl:grid-cols-4 grid-rows-2 gap-10 p-5 md:p-10 items-center"
          >
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
