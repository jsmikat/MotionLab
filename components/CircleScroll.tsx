"use client";

import * as React from "react";

import { motion } from "motion/react";

interface CircleScrollProps {
  labels?: string[];
  activeColor?: string;
  inactiveColor?: string;
  size?: number;
}

const defaultLabels = [
  "Auckland, New Zealand",
  "Sydney, Australia",
  "New York, USA",
  "Stockholm, Sweden",
  "Berlin, Germany",
  "Oslo, Norway",
  "Copenhagen, Denmark",
  "London, UK",
  "Madrid, Spain",
  "Helsinki, Finland",
  "Shanghai, China",
  "San Francisco, USA",
  "Tokyo, Japan",
  "Sao Paulo, Brazil",
];

export default function CircleScroll({
  labels = defaultLabels,
  activeColor = "#171717",
  inactiveColor = "#a3a3a3",
  size = 700,
}: CircleScrollProps) {
  const [mounted, setMounted] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isScrolling = React.useRef(false);
  const count = labels.length;
  const itemHeight = 42;
  const arcRadius = 450;

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();

      if (isScrolling.current) return;

      const delta = e.deltaY;
      if (Math.abs(delta) < 5) return;

      isScrolling.current = true;

      setActiveIndex((prev) =>
        delta > 0 ? (prev + 1) % count : (prev - 1 + count) % count
      );

      setTimeout(() => {
        isScrolling.current = false;
      }, 350);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [count]);

  if (!mounted) {
    return (
      <div className="flex size-full items-center justify-center">
        <div className="relative" style={{ width: size, height: size }} />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="flex size-full items-center justify-center"
    >
      <div
        className="relative overflow-hidden"
        style={{ width: size, height: size }}
      >
        {/* Blue active indicator */}
        <div
          className="absolute top-1/2 z-10 -translate-y-1/2"
          style={{ left: 54 }}
        >
          <div
            className="size-2 rounded-full"
            style={{ backgroundColor: "#3b82f6" }}
          />
        </div>

        {labels.map((label, i) => {
          let steps = i - activeIndex;
          if (steps > count / 2) steps -= count;
          if (steps < -count / 2) steps += count;

          const abs = Math.abs(steps);
          if (abs > 7) return null;

          const isActive = steps === 0;
          const y = steps * itemHeight;

          const clampedY = Math.max(-arcRadius, Math.min(arcRadius, y));
          const xArc =
            Math.sqrt(arcRadius * arcRadius - clampedY * clampedY) - arcRadius;
          const tilt = -Math.asin(clampedY / arcRadius) * (180 / Math.PI);

          return (
            <motion.div
              key={i}
              className="absolute flex cursor-pointer items-center"
              style={{
                top: "50%",
                left: 70,
                height: 40,
                marginTop: -20,
              }}
              initial={false}
              animate={{
                x: xArc,
                y,
                rotate: tilt,
                opacity: isActive ? 1 : Math.pow(0.7, abs),
              }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              onClick={() => setActiveIndex(i)}
            >
              <span
                className="select-none whitespace-nowrap"
                style={{
                  fontSize: isActive ? 28 : 22,
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? activeColor : inactiveColor,
                  letterSpacing: "-0.01em",
                  transition:
                    "font-size 0.6s cubic-bezier(0.32,0.72,0,1), font-weight 0.6s cubic-bezier(0.32,0.72,0,1), color 0.6s cubic-bezier(0.32,0.72,0,1)",
                }}
              >
                {label}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
