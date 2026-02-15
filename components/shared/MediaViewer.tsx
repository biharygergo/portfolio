import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image, { StaticImageData } from "next/image";

interface MediaItem {
  type: "image" | "video";
  src: string | StaticImageData;
  alt?: string;
  gradient?: string; // Tailwind gradient classes or CSS gradient string
  orientation?: "landscape" | "portrait"; // Optional orientation hint
}

interface MediaViewerProps {
  media: MediaItem[];
}

export const MediaViewer = ({ media }: MediaViewerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  if (media.length === 0) return null;

  const currentMedia = media[currentIndex];
  const hasMultiple = media.length > 1;

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % media.length);
  };

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  // Detect orientation from image dimensions or use provided orientation
  const getOrientation = (item: MediaItem): "landscape" | "portrait" => {
    if (item.orientation) return item.orientation;
    
    // Auto-detect from StaticImageData if available
    if (typeof item.src === "object" && "width" in item.src && "height" in item.src) {
      return item.src.width > item.src.height ? "landscape" : "portrait";
    }
    
    // Default to landscape for external URLs
    return "landscape";
  };

  const currentOrientation = getOrientation(currentMedia);
  const aspectRatioClass = currentOrientation === "portrait" 
    ? "aspect-[9/16] max-w-md" 
    : "aspect-[16/9] max-w-4xl";

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full h-full min-h-[400px] rounded-xl overflow-hidden flex flex-col">
      {/* Blurred Image Background with Crossfade */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={`bg-${currentIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {currentMedia.type === "image" ? (
              <Image
                src={currentMedia.src}
                alt=""
                fill
                className="object-cover blur-3xl scale-110 opacity-60"
                sizes="100vw"
                priority={currentIndex === 0}
                placeholder={typeof currentMedia.src === "object" ? "blur" : "empty"}
                aria-hidden="true"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 blur-3xl opacity-30" />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Media Container - Full height with centered content */}
      <div className="relative flex-1 flex items-center justify-center p-4 md:p-8 overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 400, damping: 35 },
              opacity: { duration: 0.2 },
            }}
            className={`relative w-full ${aspectRatioClass}`}
            style={{ maxHeight: "min(600px, 80vh)" }}
          >
            {currentMedia.type === "image" ? (
              <div className="relative w-full h-full">
                <Image
                  src={currentMedia.src}
                  alt={currentMedia.alt || `Project screenshot ${currentIndex + 1}`}
                  fill
                  className="object-cover rounded-lg shadow-2xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={currentIndex === 0}
                  placeholder={typeof currentMedia.src === "object" ? "blur" : "empty"}
                />
              </div>
            ) : (
              <video
                src={typeof currentMedia.src === "string" ? currentMedia.src : ""}
                controls
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      {hasMultiple && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3">
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="w-8 h-8 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm flex items-center justify-center hover:bg-white dark:hover:bg-gray-800 transition-colors shadow-lg"
            aria-label="Previous image"
          >
            <svg
              className="w-4 h-4 text-gray-900 dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Indicator Dots */}
          <div className="flex gap-2">
            {media.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-white w-6"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="w-8 h-8 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm flex items-center justify-center hover:bg-white dark:hover:bg-gray-800 transition-colors shadow-lg"
            aria-label="Next image"
          >
            <svg
              className="w-4 h-4 text-gray-900 dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};
