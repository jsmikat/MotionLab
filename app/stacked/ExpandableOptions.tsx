"use client";

import { BarChart3, Blocks, Cloud, Layers, ShieldCheck } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { cn } from "@/lib/utils";

const features = [
  {
    title: "Starters",
    description:
      "Pre-built templates and starter kits designed for rapid prototyping and instant deployment.",
    icon: BarChart3,
  },
  {
    title: "Admin",
    description:
      "Adaptive grid layouts with drag-and-drop widgets and real-time data visualization.",
    icon: Layers,
  },
  {
    title: "Commerce Modules",
    description:
      "Composable building blocks — from product catalogs and carts to checkout and subscriptions.",
    icon: Blocks,
  },
  {
    title: "Framework",
    description:
      "Event tracking, analytics pipelines, and actionable insights across your entire stack.",
    icon: ShieldCheck,
  },
  {
    title: "Cloud",
    description:
      "Biometric verification, edge deployment, and auto-scaling infrastructure built in.",
    icon: Cloud,
  },
];

export default function ExpandableFeatures({
  hoveredLayer,
  setHoveredLayer,
  setIsContainerHovered,
}: {
  hoveredLayer: number | null;
  setHoveredLayer: (layer: number | null) => void;
  setIsContainerHovered: (hovered: boolean) => void;
}) {
  const expandedIndex = hoveredLayer;

  const handleSelect = (index: number) => {
    setHoveredLayer(index);
    setIsContainerHovered(true);
  };

  return (
    <div className="h-full flex flex-col border-l border-neutral-200 w-full max-w-sm">
      {features.map((feature, index) => {
        const isExpanded = expandedIndex === index;
        const isAnyExpanded = expandedIndex !== null;
        const Icon = feature.icon;

        return (
          <motion.div
            key={feature.title}
            className={cn(
              "relative cursor-pointer overflow-hidden",
              "border-b border-neutral-100 last:border-b-0"
            )}
            animate={{
              flex: isExpanded
                ? "1 0 0%"
                : isAnyExpanded
                  ? "0 0 auto"
                  : "1 0 0%",
            }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 30,
              mass: 0.8,
            }}
            onClick={() => handleSelect(index)}
          >
            {/* Header */}
            <div className="flex items-center gap-3.5 px-6 py-4">
              <Icon
                className={cn("size-4 shrink-0 text-neutral-900")}
                strokeWidth={1.5}
              />
              <span
                className={cn(
                  "text-[13px] font-medium tracking-[0.12em] uppercase text-neutral-900"
                )}
              >
                {feature.title}
              </span>
            </div>

            {/* Description — slides in when expanded */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  className="px-6 overflow-hidden"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <p className="text-[14px] leading-[1.6] text-neutral-500 pl-[30px] pb-4">
                    {feature.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
