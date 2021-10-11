import { motion } from "framer-motion";
import React from "react";
import { Project } from "../../types";
import { ProjectImage } from "./ProjectImage";
import { ProjectSubtitle } from "./ProjectSubtitle";
import { ProjectTag } from "./ProjectTag";
import { ProjectTitle } from "./ProjectTitle";

export const ProjectCard = (
  props: Project & {
    layoutIndex: number;
    onClick: () => void;
  }
) => (
  <motion.div
    className={`shadow-lg rounded-md h-full flex flex-col hover:shadow-2xl dark:hover:shadow-dark cursor-pointer transition-shadow select-none focus:outline-none focus:shadow-2xl ${
      props.layoutIndex > 3 ? "self-start" : "self-end"
    }`}
    onClick={props.onClick}
    layoutId={`project-card-container-${props.layoutIndex}`}
    style={{ maxHeight: 400 }}
    tabIndex={0}
    onKeyPress={(e: React.KeyboardEvent) =>
      e.key === "Enter" && props.onClick()
    }
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
        className="mt-auto mb-2 flex flex-wrap"
        layoutId={`project-tags-${props.layoutIndex}`}
      >
        {props.tags.map((tag, i) => (
          <ProjectTag tag={tag} key={i} />
        ))}
      </motion.div>
    </div>
  </motion.div>
);
