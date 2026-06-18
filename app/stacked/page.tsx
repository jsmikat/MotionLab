"use client";

import { useState } from "react";

import IsometricStack from "@/components/Isometric";

import ExpandableFeatures from "./ExpandableOptions";

function Page() {
  const [hoveredLayer, setHoveredLayer] = useState<number | null>(0);
  const [isContainerHovered, setIsContainerHovered] = useState(true);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-7xl size-full border-x flex items-center justify-center">
        <div className="w-full h-[70vh] flex flex-row gap-24 justify-end border-y">
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
