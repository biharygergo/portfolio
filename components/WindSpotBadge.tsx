import { motion } from "motion/react";
import React from "react";

interface WindSpotBadgeProps {
  location: string;
  windSpeed?: number;
  delay?: number;
}

export const WindSpotBadge = ({
  location,
  windSpeed,
  delay = 0,
}: WindSpotBadgeProps) => {
  const currentSpeed = windSpeed ?? null;
  const isLoading = windSpeed === undefined;

  // Calculate wind-based animation parameters
  const speed = currentSpeed ?? 0;
  
  // Wind categories: light (0-8), moderate (8-15), strong (15+)
  const windIntensity = Math.min(speed / 25, 1); // 0 to 1 scale
  
  // Animation speed: slower overall, faster in high wind
  const animationDuration = Math.max(1.5, 3.5 - windIntensity * 1.5);
  
  // Wave amplitude in high wind - reduced for subtler movement
  const waveAmplitude = 0.5 + windIntensity * 1.5; // 0.5 to 2 units
  
  // Droop in low wind - reduced for subtler effect
  const droop = (1 - windIntensity) * 2; // 2 units droop at no wind, 0 at full wind
  
  // Top and bottom edge flutter - reduced amplitude
  const topFlutter = 0.3 + windIntensity * 1; // 0.3 to 1.3 units
  const bottomFlutter = 0.2 + windIntensity * 0.9; // 0.2 to 1.1 units
  
  // Horizontal flutter - reduced for subtler movement
  const horizontalFlutter = 0.1 + windIntensity * 0.4; // 0.1 to 0.5 unit

  // Generate animated path with keyframes
  const paths = [
    // Frame 1: slight wave, corners slightly offset
    `M0 0 Q${8} ${droop + waveAmplitude} ${16 - horizontalFlutter * 0.3} ${droop * 0.8 + topFlutter * 0.2} L${16 - horizontalFlutter * 0.2} ${12 + droop * 0.8 - bottomFlutter * 0.3} Q${8} ${12 - waveAmplitude + droop} 0 12 Z`,
    // Frame 2: wave peaks, top corner forward, bottom corner back
    `M0 0 Q${8} ${droop * 0.3 + waveAmplitude * 1.2} ${16 + horizontalFlutter * 0.5} ${droop * 0.4 + topFlutter} L${16 - horizontalFlutter * 0.4} ${12 + droop * 0.4 + bottomFlutter * 0.8} Q${8} ${12 - waveAmplitude * 0.8 + droop * 0.3} 0 12 Z`,
    // Frame 3: reverse wave, corners in opposite phase
    `M0 0 Q${8} ${droop * 0.7 - waveAmplitude * 0.5} ${16 - horizontalFlutter * 0.6} ${droop * 1.2 - topFlutter * 0.5} L${16 + horizontalFlutter * 0.3} ${12 + droop * 1.2 - bottomFlutter * 0.6} Q${8} ${12 + waveAmplitude * 0.6 + droop * 0.7} 0 12 Z`,
    // Frame 4: small wave, corners settling
    `M0 0 Q${8} ${droop * 0.5 + waveAmplitude * 0.7} ${16 + horizontalFlutter * 0.2} ${droop * 0.6 - topFlutter * 0.3} L${16 - horizontalFlutter * 0.1} ${12 + droop * 0.6 + bottomFlutter * 0.4} Q${8} ${12 - waveAmplitude * 0.4 + droop * 0.5} 0 12 Z`,
    // Back to Frame 1
    `M0 0 Q${8} ${droop + waveAmplitude} ${16 - horizontalFlutter * 0.3} ${droop * 0.8 + topFlutter * 0.2} L${16 - horizontalFlutter * 0.2} ${12 + droop * 0.8 - bottomFlutter * 0.3} Q${8} ${12 - waveAmplitude + droop} 0 12 Z`,
  ];

  return (
    <motion.div
      className="inline-flex items-center gap-1.5 px-2 py-1 text-sm"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
    >
      {/* Animated Flag */}
      <div className="relative w-5 h-4 flex items-end opacity-60">
        {/* Flagpole */}
        <div className="absolute left-0 bottom-0 w-0.5 h-4 bg-gray-600 dark:bg-gray-500" />
        
        {/* Flag that waves in the wind - left edge stays attached to pole */}
        <svg
          viewBox="0 0 16 12"
          className="absolute left-0.5 top-0 w-3.5 h-2.5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d={paths[0]}
            fill="currentColor"
            className="text-gray-600 dark:text-gray-500"
            animate={{ d: paths }}
            transition={{
              duration: animationDuration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>

      {/* Location and Wind Speed */}
      <div className="flex items-baseline gap-1">
        <span className="text-gray-700 dark:text-gray-400">
          {location}
        </span>
        {isLoading ? (
          <span className="text-xs text-gray-400 dark:text-gray-600">...</span>
        ) : currentSpeed ? (
          <span className="text-xs text-gray-500 dark:text-gray-500 font-normal">
            {Math.round(currentSpeed)}kts
          </span>
        ) : null}
      </div>
    </motion.div>
  );
};
