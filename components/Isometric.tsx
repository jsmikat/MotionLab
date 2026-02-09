"use client";

import { useState } from "react";

import { motion } from "motion/react";

import IsometricCardFifth from "./supportingComponents/IsometricCardFifth";
import IsometricCardFourth from "./supportingComponents/IsometricCardFourth";
import IsometricCardSecond from "./supportingComponents/IsometricCardSecond";
import IsometricCardThird from "./supportingComponents/IsometricCardThird";
import IsometricCardTop from "./supportingComponents/IsometricCardTop";

export default function IsometricStack() {
  const [hoveredLayer, setHoveredLayer] = useState<number | null>(null);
  const [isContainerHovered, setIsContainerHovered] = useState(false);

  const stackGap = 6;
  const focusExtra = 14;

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
      </div>
    </div>
  );
}
