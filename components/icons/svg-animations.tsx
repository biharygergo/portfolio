const appear = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
    opacity: 1,
  },
};

export const animationProps = {
  variants: appear,
  initial: "hidden",
  animate: "visible",
  transition: {
    default: { duration: 2, ease: "easeInOut", delay: 0.5 },
  },
};
