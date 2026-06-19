"use client";

import * as React from "react";

import { motion } from "motion/react";

const CornerBorder = ({
  position,
  color,
  thickness = 1,
}: {
  position: "tl" | "tr" | "bl" | "br";
  color: string;
  thickness?: number;
}) => {
  const borderStyle = `${thickness}px solid ${color}`;
  return (
    <div
      className={`absolute size-[6px] ${
        position === "tl"
          ? "left-0 top-0"
          : position === "tr"
            ? "right-0 top-0"
            : position === "bl"
              ? "bottom-0 left-0"
              : "bottom-0 right-0"
      }`}
      style={{
        borderLeft: position === "tl" || position === "bl" ? borderStyle : "none",
        borderRight: position === "tr" || position === "br" ? borderStyle : "none",
        borderTop: position === "tl" || position === "tr" ? borderStyle : "none",
        borderBottom: position === "bl" || position === "br" ? borderStyle : "none",
      }}
    />
  );
};

interface SmoothScrollTextProps {
  items?: string[];
  textColor?: string;
  cornerColor?: string;
  cornerThickness?: number;
  backgroundColor?: string;
  verticalGap?: number;
  padding?: number;
  infinite?: boolean;
  align?: "left" | "center" | "right";
}

const defaultItems = [
  "Explore motion with purpose.",
  "Every animation tells a story.",
  "Subtle details create lasting impressions.",
  "Design is how it works.",
  "Simplicity is the ultimate sophistication.",
  "Great experiences feel effortless.",
];

export default function SmoothScrollText({
  items = defaultItems,
  textColor = "#171717",
  cornerColor = "#8b5cf6",
  cornerThickness = 1.6,
  backgroundColor = "transparent",
  verticalGap = 16,
  padding = 40,
  infinite = true,
  align = "left",
}: SmoothScrollTextProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [dimensions, setDimensions] = React.useState<
    Record<number, { width: number; height: number }>
  >({});
  const itemsRef = React.useRef<(HTMLSpanElement | null)[]>([]);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isScrolling = React.useRef(false);

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

      if (infinite) {
        if (delta > 0) {
          setCurrentIndex((prev) => (prev + 1) % items.length);
        } else {
          setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
        }
      } else {
        if (delta > 0 && currentIndex < items.length - 1) {
          setCurrentIndex((prev) => prev + 1);
        } else if (delta < 0 && currentIndex > 0) {
          setCurrentIndex((prev) => prev - 1);
        }
      }

      setTimeout(() => {
        isScrolling.current = false;
      }, 500);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [items.length, infinite, currentIndex]);

  const measureItems = React.useCallback(() => {
    const newDimensions: Record<number, { width: number; height: number }> = {};
    itemsRef.current.forEach((el, i) => {
      if (el) {
        const rect = el.getBoundingClientRect();
        newDimensions[i] = {
          width: Math.round(rect.width),
          height: Math.round(rect.height),
        };
      }
    });
    setDimensions(newDimensions);
  }, []);

  React.useLayoutEffect(() => {
    measureItems();
    const observer = new ResizeObserver(() => measureItems());
    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    window.addEventListener("resize", measureItems);
    return () => {
      window.removeEventListener("resize", measureItems);
      observer.disconnect();
    };
  }, [measureItems, currentIndex]);

  const getRelativePosition = (index: number) => {
    if (!infinite) {
      return index - currentIndex;
    }
    const total = items.length;
    let diff = index - currentIndex;
    if (diff > total / 2) diff -= total;
    if (diff <= -total / 2) diff += total;
    return diff;
  };

  const getTransform = (index: number) => {
    const relativePos = getRelativePosition(index);
    const currentDims = dimensions[currentIndex] || { height: 0 };
    const myDims = dimensions[index] || { height: 0 };

    const currentH = currentDims.height;
    const myH = myDims.height;
    const gap = verticalGap;

    const getHeight = (offset: number) => {
      const idx = (currentIndex + offset + items.length) % items.length;
      return dimensions[idx]?.height || 0;
    };

    let y = 0;
    let opacity = 0;
    let blur = 0;

    if (relativePos === 0) {
      y = 0;
      opacity = 1;
      blur = 0;
    } else if (relativePos === -1) {
      y = -(currentH / 2 + gap + myH / 2);
      opacity = 0.4;
      blur = 1;
    } else if (relativePos === 1) {
      y = currentH / 2 + gap + myH / 2;
      opacity = 0.4;
      blur = 1;
    } else if (relativePos === -2) {
      const n1 = getHeight(-1);
      y = -(currentH / 2 + gap + n1 + gap + myH / 2);
      opacity = 0.15;
      blur = 2;
    } else if (relativePos === 2) {
      const n1 = getHeight(1);
      y = currentH / 2 + gap + n1 + gap + myH / 2;
      opacity = 0.15;
      blur = 2;
    } else if (relativePos === -3) {
      const n1 = getHeight(-1);
      const n2 = getHeight(-2);
      y = -(currentH / 2 + gap + n1 + gap + n2 + gap + myH / 2);
      opacity = 0;
      blur = 3;
    } else if (relativePos === 3) {
      const n1 = getHeight(1);
      const n2 = getHeight(2);
      y = currentH / 2 + gap + n1 + gap + n2 + gap + myH / 2;
      opacity = 0;
      blur = 3;
    } else {
      const direction = relativePos > 0 ? 1 : -1;
      y = direction * 300;
      opacity = 0;
      blur = 4;
    }

    return { y, opacity, blur };
  };

  const activeDims = dimensions[currentIndex] || { width: 300, height: 50 };
  const cornerPaddingX = 16;
  const cornerPaddingY = 8;

  return (
    <div ref={containerRef} className="size-full">
      <div
        className={`relative flex size-full items-center overflow-hidden ${
          align === "left"
            ? "justify-start"
            : align === "center"
              ? "justify-center"
              : "justify-end"
        }`}
        style={{ backgroundColor }}
      >
        <div
          className={`pointer-events-none absolute inset-0 flex items-center ${
            align === "left"
              ? "justify-start"
              : align === "center"
                ? "justify-center"
                : "justify-end"
          }`}
        >
          <motion.div
            layout
            initial={false}
            animate={{
              width: activeDims.width + cornerPaddingX,
              height: activeDims.height + cornerPaddingY,
            }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="relative"
            style={{
              zIndex: 100,
              ...(align === "left" && { marginLeft: padding - cornerPaddingX / 2 }),
              ...(align === "right" && { marginRight: padding - cornerPaddingX / 2 }),
            }}
          >
            <CornerBorder position="tl" color={cornerColor} thickness={cornerThickness} />
            <CornerBorder position="tr" color={cornerColor} thickness={cornerThickness} />
            <CornerBorder position="bl" color={cornerColor} thickness={cornerThickness} />
            <CornerBorder position="br" color={cornerColor} thickness={cornerThickness} />
          </motion.div>
        </div>

        <div className="relative flex size-full items-center">
          {items.map((text, i) => {
            const { y, opacity, blur } = getTransform(i);
            return (
              <motion.div
                key={i}
                initial={false}
                animate={{
                  y,
                  opacity,
                  filter: `blur(${blur}px)`,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className={`absolute flex w-full ${
                  align === "left"
                    ? "justify-start"
                    : align === "center"
                      ? "justify-center"
                      : "justify-end"
                }`}
                style={{
                  ...(align === "left" && { paddingLeft: padding }),
                  ...(align === "right" && { paddingRight: padding }),
                }}
              >
                <span
                  ref={(el) => {
                    itemsRef.current[i] = el;
                  }}
                  className={`inline-block text-2xl font-medium tracking-tight md:text-3xl ${
                    align === "center"
                      ? "text-center"
                      : align === "right"
                        ? "text-right"
                        : "text-left"
                  }`}
                  style={{
                    maxWidth: `calc(100% - ${padding * 2}px)`,
                    color: textColor,
                    lineHeight: 1.1,
                    paddingBottom: "0.1em", // Optical adjustment for vertical centering
                  }}
                >
                  {text}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
