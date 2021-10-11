import { motion } from "framer-motion";
import React from "react";
import { Project } from "../../types";
import { ProjectImage } from "./ProjectImage";
import { ProjectSubtitle } from "./ProjectSubtitle";
import { ProjectTag } from "./ProjectTag";
import { ProjectTitle } from "./ProjectTitle";

export const ProjectModal = (
  props: Project & { layoutIndex: number; onClose: () => void }
) => {
  React.useEffect(() => {
    const onEscape = (e: KeyboardEvent) =>
      e.key === "Escape" && props.onClose();

    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [props]);

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 bg-gray-700 dark:bg-black"
        onClick={props.onClose}
      />
      <motion.div
        className="shadow-lg rounded-md m-2 h-full md:w-3/5 max-w-screen-lg bg-white dark:bg-gray-700 z-10 flex flex-col"
        layoutId={`project-card-container-${props.layoutIndex}`}
        style={{ maxHeight: 500 }}
        role="dialog"
        aria-modal="true"
      >
        <ProjectImage
          url={props.coverImageUrl}
          alt={props.coverImageAlt}
          layoutIndex={props.layoutIndex}
          type="modal"
        />

        <div className="p-4 bg-white dark:bg-gray-700 rounded-b-md h-full flex flex-col flex-1 flex-shrink-0">
          <ProjectTitle layoutIndex={props.layoutIndex} title={props.title} />
          <ProjectSubtitle
            layoutIndex={props.layoutIndex}
            subtitle={props.subtitle}
          />

          <motion.p
            className="text-base my-3 dark:text-gray-50"
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {props.description}
          </motion.p>
          <motion.div
            className="mt-5 mb-2 flex flex-wrap"
            layoutId={`project-tags-${props.layoutIndex}`}
          >
            {props.tags.map((tag, i) => (
              <ProjectTag tag={tag} key={i} />
            ))}
          </motion.div>
          <div className="mt-auto flex justify-end">
            <button
              className="py-2 px-4 mr-2 border-2 md:hidden border-gray-800 rounded-md hover:bg-gray-800 hover:text-white transition-colors dark:text-gray-50 dark:border-white dark:hover:bg-white dark:hover:text-gray-800"
              onClick={props.onClose}
            >
              Close
            </button>
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
};
