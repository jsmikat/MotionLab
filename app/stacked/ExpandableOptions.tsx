"use client";

import { useState } from "react";

import { Bot, Brain, Globe } from "lucide-react";

import { cn } from "@/lib/utils";

const features = [
  {
    title: "AI Models",
    description:
      "Switch between GPT, Claude, and Gemini from a unified interface.",
    icon: Brain,
  },
  {
    title: "Global Reach",
    description: "Collaborate in real time with teammates across the globe.",
    icon: Globe,
  },
  {
    title: "Smart Agent",
    description: "Automate repetitive tasks with context-aware AI agents.",
    icon: Bot,
  },
];

export default function ExpandableFeatures() {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  const handleSelect = (index: number) => {
    if (index === expandedIndex) return;
    setExpandedIndex(index);
  };

  return (
    <section className="bg-background @container overflow-hidden py-24">
      <div className="mx-auto max-w-5x px-2 md:px-6">
        <div className="bg-foreground/10 grid gap-px rounded-2xl p-px md:grid-cols-2">
          <div className="bg-background relative rounded-[15px]">
            <div className="flex h-full flex-col gap-12 px-6 pt-6 sm:p-12 sm:pb-6">
              <div
                className={cn(
                  "mt-auto grid divide-y transition-all duration-300",
                  expandedIndex === 0 && "grid-rows-[1fr_auto_auto]",
                  expandedIndex === 1 && "grid-rows-[auto_1fr_auto]",
                  expandedIndex === 2 && "grid-rows-[auto_auto_1fr]"
                )}
              >
                {features.map((feature, index) => (
                  <div
                    key={feature.title}
                    data-expanded={expandedIndex === index}
                    className="not-first:border-t not-first:border-t-card group relative grid grid-rows-[auto_1fr]"
                  >
                    <button
                      onClick={() => handleSelect(index)}
                      className="group flex w-full cursor-pointer items-center gap-3 py-4 text-left"
                    >
                      <feature.icon
                        className={cn(
                          "size-4 shrink-0 transition-colors",
                          expandedIndex === index
                            ? "text-foreground"
                            : "text-muted-foreground group-hover:text-foreground"
                        )}
                      />
                      <h3
                        className={cn(
                          "group-hover:text-foreground font-medium transition-colors",
                          expandedIndex === index
                            ? "text-foreground"
                            : "text-muted-foreground"
                        )}
                      >
                        {feature.title}
                      </h3>
                    </button>

                    <div
                      className={cn(
                        "grid transition-[grid-template-rows] duration-300",
                        expandedIndex === index
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]"
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="text-muted-foreground text-balance pb-6 pl-7">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
