"use client";

import { useState } from "react";

import IsometricStack from "@/components/Isometric";

import ExpandableFeatures from "./ExpandableOptions";

function Page() {
  const [hoveredLayer, setHoveredLayer] = useState<number | null>(0);
  const [isContainerHovered, setIsContainerHovered] = useState(true);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-7xl size-full border-x flex items-center justify-center relative">
        <svg className="pointer-events-none absolute inset-0 -z-10 size-full select-none text-neutral-200/70 py-px">
          <defs>
            <pattern id="stacked-slash" width="5" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="4" stroke="currentColor" strokeWidth="1.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stacked-slash)" />
        </svg>
        <div className="w-full h-[70vh] bg-white flex flex-row gap-24 justify-end border-y">
          <IsometricStack
            indicators={true}
            hoveredLayer={hoveredLayer}
            setHoveredLayer={setHoveredLayer}
            isContainerHovered={isContainerHovered}
            setIsContainerHovered={setIsContainerHovered}
          />
          <ExpandableFeatures
            hoveredLayer={hoveredLayer}
            setHoveredLayer={setHoveredLayer}
            setIsContainerHovered={setIsContainerHovered}
          />
        </div>
      </div>
    </div>
  );
}

export default Page;
