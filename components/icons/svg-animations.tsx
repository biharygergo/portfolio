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
  initial: "hidden" as const,
  animate: "visible" as const,
  transition: {
    duration: 2,
    ease: "easeInOut" as const,
    delay: 0.5,
  },
};
