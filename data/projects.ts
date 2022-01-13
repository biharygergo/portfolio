import { Project } from "../types";

export const projects: Project[] = [
  {
    title: "SailLog",
    subtitle: "Cross-platform coaching system for professional sailors",
    description:
      "As a sailing enthusiast, I have been developing SailLog for the past 5 years. Used by more than 2000 sailors around the world, it is a great project to work on in my free-time.",
    tags: ["hobby-project", "angular", "firebase"],
    coverImageUrl: "/saillog-cover",
    coverImageAlt: "Picture of a sailing boat",
    projectUrl: "https://saillogapp.com",
  },
  {
    title: "Planning Poker",
    subtitle: "Remote SCRUM planner",
    description:
      "When Prezi switched to all-remote during to the pandemic, I developed this app to help our planning process. As it is open-source, several teams started implementing it beyond Prezi.",
    tags: ["hobby-project", "angular", "firebase"],
    coverImageUrl: "/planning-cover",
    coverImageAlt: "Illustration of poker cards",
    projectUrl: "https://planningpoker.live",
  },
  {
    title: "Hacktivity",
    subtitle:
      "Real-time online Activity game with audio & video streaming",
    description:
      "We created this awesome little game during a two-day long hackathon project. A great technical challenge with WebRTC connections and a short time-limit.",
    tags: ["hackathon", "react", "node.js"],
    coverImageUrl: "/hacktivity-cover",
    coverImageAlt: "Picture of an Activity board-game",
    projectUrl:
      "https://storage.googleapis.com/hacktivity-296321.appspot.com/index.html",
  },
  {
    title: "Vibes",
    subtitle: "Snapchatlike video messaging prototype app",
    description:
      "Another hackathon project built for Junction 2020. A mostly working prototype with a focus on usability, animations, and the overall UI.",
    tags: ["hackathon", "react", "prototype"],
    coverImageUrl: "/vibe-cover",
    coverImageAlt: "Picture of a phone making a video call",
    projectUrl: "https://junction-vibes.web.app/now",
  },
  {
    title: "IncepTech",
    subtitle: "Brand-new landing page for a leading Hungarian tech agency",
    description:
      "Interesting design challenge of having a scroll-snapping page with curved lines flowing through the entire page. Check it out!",
    tags: ["freelance", "next.js", "motion"],
    coverImageUrl: "/incep-cover",
    coverImageAlt: "Screenshot of the agency's landing page",
    projectUrl: "https://incepteam.com",
  },
  {
    title: "Code Zero",
    subtitle:
      "Customer, order, and inventory management software for a sailing company",
    description:
      "Custom-built digitalization solution for a local sail repair shop. Developing this software from idea to production has been an interesting technical and management challenge.",
    tags: ["freelance", "react", "nodejs"],
    coverImageUrl: "/codezero-cover",
    coverImageAlt: "Image of a sail under repar",
    projectUrl: "https://vitorlaszerviz.hu",
  },
  {
    title: "Proab App",
    subtitle: "Customer facing and back-office solution for accounting",
    description:
      "Developed the front-end of a suite of applications designed to help independent contractors and their bookkeepers in their workflow.",
    tags: ["freelance", "angular", "graphql"],
    coverImageUrl: "/proab-cover",
    coverImageAlt: "Image of the bookkeeping application's screen",
    projectUrl: "https://app.proab.hu",
  },
  {
    title: "JunctionApp",
    subtitle: "Contributing to the open-source hackathon organization platform",
    description:
      "For the past years, I have been contributing to the JunctionApp, which is a widely used platform when organizing hackathons around the world.",
    tags: ["open-source", "react", "graphql"],
    coverImageUrl: "junction-cover",
    coverImageAlt: "Picture of the Junction hackathon",
    projectUrl: "https://app.hackjunction.com",
  },
];
