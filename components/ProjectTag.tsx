import React from "react";

export const ProjectTag = (props: { tag: string }) => (
  <div
    className="rounded-xl bg-blue-100 text-center py-1 px-3 flex items-center"
    key={props.tag}
  >
    <span className="text-xs">#{props.tag}</span>
  </div>
);
