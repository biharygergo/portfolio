import React from "react";
import { ProjectLayout } from "../shared/ProjectLayout";
import { ProjectHeader } from "../shared/ProjectHeader";
import { ProjectSection } from "../shared/ProjectSection";
import { ProjectLink } from "../shared/ProjectLink";
import { MediaViewer } from "../shared/MediaViewer";
import { ProjectCategory, ProjectMetadata } from "../../types/project";
import homeImage from "@/public/projects/soundboard/home.png";
import editImage from "@/public/projects/soundboard/edit.png";

export const metadata: ProjectMetadata = {
  id: "sb1-soundboard",
  categories: [ProjectCategory.Work],
  year: "2025",
};

const media = [
  {
    type: "image" as const,
    src: homeImage,
    alt: "SB1 Soundboard home interface",
  },
  {
    type: "image" as const,
    src: editImage,
    alt: "SB1 Soundboard edit mode",
  },
];

export const SB1SoundboardProject = () => {
  return (
    <ProjectLayout mediaElement={<MediaViewer media={media} />}>
      <ProjectHeader
        title="SB1 Infinite Soundboard"
        subtitle="0-to-1 growth product at ElevenLabs — an AI-powered infinite soundboard"
        size="large"
        badges={[
          { label: "ElevenLabs", variant: "accent" },
          { label: "Growth", variant: "primary" },
          { label: "0-to-1", variant: "primary" },
          { label: "React", variant: "secondary" },
          { label: "AI", variant: "secondary" },
        ]}
      />

      <ProjectSection title="Why" delay={0.1}>
        <p className="mb-3">
          At ElevenLabs, we identified an opportunity to target the "soundboard" keyword
          with a new product that would showcase our text-to-sound effects AI. Traditional
          soundboards rely on static MP3 libraries you have to hunt down online. We asked:
          what if you could just describe any sound and generate it instantly?
        </p>
        <p>
          This was my first larger 0-to-1 growth project at the company — building a tool
          that's both functional and beautiful, designed to attract users searching for
          soundboards while demonstrating the power of generative audio AI.
        </p>
      </ProjectSection>

      <ProjectSection title="How" delay={0.2}>
        <p className="mb-3">
          I built the entire product from scratch with React and Tailwind CSS, working
          closely with our talented designers. We started with a Lovable prototype before
          creating the final UI and code.
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>
            <strong className="font-medium">Infinite sound generation:</strong> Integrated
            ElevenLabs SFX API — type any description, get custom sounds in ~2 seconds
          </li>
          <li>
            <strong className="font-medium">Interactive interface:</strong> Grid of pads
            with keyboard shortcuts, looping controls, and live triggering
          </li>
          <li>
            <strong className="font-medium">Shareable presets:</strong> Users can create,
            save, and share custom soundboard configurations
          </li>
          <li>
            <strong className="font-medium">SEO optimization:</strong> Targeted soundboard
            keywords for organic discovery
          </li>
          <li>
            <strong className="font-medium">Multi-use cases:</strong> Built for streamers,
            podcasters, game developers, and content creators
          </li>
        </ul>
      </ProjectSection>

      <ProjectSection title="Impact" delay={0.3}>
        <p className="text-sm mb-3">
          SB1 successfully ranked for our target keywords and became a popular showcase of
          our AI audio capabilities. The soundboard is used for everything from livestream
          sound cues to ambient atmospheres and drum machines — all generated on demand.
        </p>
        <p className="text-sm">
          This project taught me about balancing aesthetics with functionality,
          growth-driven product development, and building features that serve both
          marketing and product goals. We even wrote a{" "}
          <a
            href="https://elevenlabs.io/blog/how-we-created-a-soundboard-using-elevenlabs-sfx-api"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-white underline hover:no-underline"
          >
            technical deep-dive blog post
          </a>{" "}
          about how we built it.
        </p>
      </ProjectSection>

      <div className="flex flex-wrap gap-3 mt-6">
        <ProjectLink href="https://elevenlabs.io/sound-effects/soundboard">
          Try SB1 Soundboard
        </ProjectLink>
      </div>
    </ProjectLayout>
  );
};
