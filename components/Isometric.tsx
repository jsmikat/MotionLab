"use client";

import { useState } from "react";

import { motion } from "motion/react";

import IsometricCardFifth from "./supportingComponents/IsometricCardFifth";
import IsometricCardFourth from "./supportingComponents/IsometricCardFourth";
import IsometricCardSecond from "./supportingComponents/IsometricCardSecond";
import IsometricCardThird from "./supportingComponents/IsometricCardThird";
import IsometricCardTop from "./supportingComponents/IsometricCardTop";

export default function IsometricStack({
  indicators = false,
}: {
  indicators?: boolean;
}) {
  const [hoveredLayer, setHoveredLayer] = useState<number | null>(null);
  const [isContainerHovered, setIsContainerHovered] = useState(false);

  const stackGap = 6;
  const focusExtra = 14;

  const layerIndicators = [
    { name: "STARTERS", desc: "REAL-TIME ANALYTICS AND KPIs" },
    { name: "ADMIN", desc: "ADAPTIVE GRID COMPOSITION" },
    { name: "COMMERCE MODULES", desc: "COMPOSABLE BUILDING BLOCKS" },
    { name: "FRAMEWORK", desc: "EVENT TRACKING AND INSIGHTS" },
    { name: "CLOUD", desc: "BIOMETRIC VERIFICATION LAYER" },
  ];

  const layerData = [
    { id: "layer1", expandedOffset: 0 },
    { id: "layer2", expandedOffset: 34 },
    { id: "layer3", expandedOffset: 68 },
    { id: "layer4", expandedOffset: 102 },
    { id: "layer5", expandedOffset: 136 },
  ];

  const layerCount = layerData.length;

  return (
    <div className="relative flex min-h-[500px] items-center justify-center">
      <div
        className="relative h-[400px] w-[460px]"
        onMouseEnter={() => setIsContainerHovered(true)}
        onMouseLeave={() => {
          setIsContainerHovered(false);
          setHoveredLayer(null);
        }}
      >
        {layerData.map((layer, index) => {
          const isHovered = hoveredLayer === index;
          const isAbove = hoveredLayer !== null && index < hoveredLayer;
          const isBelow = hoveredLayer !== null && index > hoveredLayer;
          const isFaded = isAbove;
          const zIndex = layerCount - index;
          const restY = index * stackGap;

          let hoverY = layer.expandedOffset;
          if (isHovered) {
            hoverY -= 2;
          } else if (isAbove) {
            hoverY -= focusExtra;
          } else if (isBelow) {
            hoverY += focusExtra;
          }

          return (
            <motion.div
              key={layer.id}
              className="pointer-events-none absolute left-0 top-0"
              initial={false}
              animate={{
                y: isContainerHovered ? hoverY : restY,
                opacity: isAbove ? 0.25 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 20,
              }}
              style={{ zIndex }}
            >
              {index === 0 ? (
                <IsometricCardTop
                  isHovered={isHovered}
                  isFaded={isFaded}
                  onMouseEnter={() => setHoveredLayer(index)}
                />
              ) : index === 1 ? (
                <IsometricCardSecond
                  isHovered={isHovered}
                  isFaded={isFaded}
                  onMouseEnter={() => setHoveredLayer(index)}
                />
              ) : index === 2 ? (
                <IsometricCardThird
                  isHovered={isHovered}
                  isFaded={isFaded}
                  onMouseEnter={() => setHoveredLayer(index)}
                />
              ) : index === 3 ? (
                <IsometricCardFourth
                  isHovered={isHovered}
                  isFaded={isFaded}
                  onMouseEnter={() => setHoveredLayer(index)}
                />
              ) : (
                <IsometricCardFifth
                  isHovered={isHovered}
                  isFaded={isFaded}
                  onMouseEnter={() => setHoveredLayer(index)}
                />
              )}
            </motion.div>
          );
        })}

        {/* Layer indicators */}
        {indicators &&
          layerData.map((layer, index) => {
            const isHovered = hoveredLayer === index;
            const isAbove = hoveredLayer !== null && index < hoveredLayer;
            const isBelow = hoveredLayer !== null && index > hoveredLayer;
            const restY = index * stackGap;

            let indY = layer.expandedOffset;
            if (isHovered) indY -= 2;
            else if (isAbove) indY -= focusExtra;
            else if (isBelow) indY += focusExtra;

            return (
              <motion.div
                key={`ind-${layer.id}`}
                className="pointer-events-none absolute left-0 top-0 w-full"
                initial={false}
                animate={{
                  y: isContainerHovered ? indY : restY,
                  opacity: isContainerHovered ? (isAbove ? 0.25 : 1) : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                }}
              >
                {/* Left label */}
                <div
                  className="absolute whitespace-nowrap"
                  style={{
                    top: 122,
                    right: "calc(100% + 180px)",
                    transform: "translateY(-50%)",
                    textAlign: "right",
                  }}
                >
                  <span
                    className="text-[11px] font-medium uppercase tracking-[0.15em]"
                    style={{
                      color: isHovered ? "#171717" : "#a3a3a3",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {layerIndicators[index].name}
                  </span>
                </div>

                {/* Connector line */}
                {isHovered && (
                  <div
                    className="absolute flex items-center"
                    style={{
                      top: 122,
                      left: -168,
                      width: 173,
                      transform: "translateY(-50%)",
                    }}
                  >
                    <motion.div
                      className="h-px flex-1 bg-neutral-300"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      style={{ originX: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                    <div className="ml-px size-[5px] border border-neutral-300" />
                  </div>
                )}

                {/* Right description */}
                {/* {isHovered && (
                  <motion.div
                    className="absolute whitespace-nowrap"
                    style={{
                      top: 180,
                      left: "calc(100% + 20px)",
                      transform: "translateY(-50%)",
                    }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-neutral-400">
                      {layerIndicators[index].desc}
                    </span>
                  </motion.div>
                )} */}
              </motion.div>
            );
          })}
      </div>
    </div>
  );
}
