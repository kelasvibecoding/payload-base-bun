# Industries 4

## Metadata
- **Category**: Showcase Slider
- **Objective**: Deliver a premium, interactive "expanding accordion" showcase for different sectors or categories.
- **Use Case**: High-end landing pages where user exploration and visual impact are required to differentiate category benefits.
- **Visual Style**: Sophisticated industrial design. Combines a huge impact headline (`text-6xl`) with vertical columns that expand/contract. Features high-quality specialized imagery (`hydro.jpg`, `wind.jpg`) that fades in/out with motion.
- **Interactivity**: Advanced interaction model powered by `framer-motion` and React state (`activeContractor`). On hover of a column in desktop mode, the column expands from 48px wide (`w-48`) to flexible growth (`flex-1`), triggering an `AnimatePresence` entry for descriptive text and specific sector imagery results. Mobile mode reverts to a standard card stack for accessibility.

## Source Code

### `industries4.tsx`
```tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CornerDownRight } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Contractor {
  id: string;
  category: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  learnMoreUrl: string;
}

interface Industries4Props {
  heading: string;
  contractors: Contractor[];
  className?: string;
}

const Industries4 = ({
  className,
  heading = "Powering Rewewable Industries",
  contractors = [
    {
      id: "mining-enterprises",
      category: "Hydro",
      title:
        "Revolutionizing Hydroelectric Power Generation Through Smart Dam Management",
      imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/industry/hydro.jpg",
      imageAlt: "Hydroelectricity operations site",
      learnMoreUrl: "#",
    },
    {
      id: "global-finance",
      category: "Wind",
      title:
        "Maximizing Wind Farm Efficiency with AI-Powered Turbine Optimization",
      imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/industry/wind.jpg",
      imageAlt: "Wind power generation",
      learnMoreUrl: "#",
    },
    {
      id: "elite-fashion",
      category: "Solar",
      title:
        "Scaling Solar Infrastructure with Advanced Photovoltaic Grid Integration",
      imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/industry/solar.jpg",
      imageAlt: "Solar power generation",
      learnMoreUrl: "#",
    },
  ],
}: Industries4Props) => {
  const [activeContractor, setActiveContractor] = useState(
    contractors[0]?.id || "",
  );

  const handleContractorHover = (contractorId: string) => {
    setActiveContractor(contractorId);
  };

  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl">{heading}</h2>
        </div>

        {/* Mobile Contractor Showcase */}
        <div className="space-y-6 lg:hidden">
          {contractors.map((contractor) => (
            <a
              key={contractor.id}
              href={contractor.learnMoreUrl}
              className="block overflow-hidden rounded-lg border border-border"
            >
              {/* Image */}
              <div className="relative aspect-video w-full">
                <img
                  src={contractor.imageSrc}
                  alt={contractor.imageAlt}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="space-y-4 p-6">
                <div className="flex items-center">
                  <span className="text-xl font-semibold">
                    {contractor.category}
                  </span>
                </div>
                <h3 className="text-lg leading-tight text-muted-foreground">
                  {contractor.title}
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-0 text-sm font-medium text-primary hover:text-primary/80"
                  asChild
                >
                  <a href={contractor.learnMoreUrl}>
                    <CornerDownRight className="mr-1 h-3 w-3" />
                    Learn more
                  </a>
                </Button>
              </div>
            </a>
          ))}
        </div>

        {/* Desktop Contractor Showcase */}
        <div className="hidden h-128 overflow-hidden border border-border lg:flex">
          {contractors.map((contractor) => (
            <a
              key={contractor.id}
              href={contractor.learnMoreUrl}
              className={`flex h-full cursor-pointer gap-6 overflow-hidden border-l border-border first:border-l-0 ${
                activeContractor === contractor.id ? "flex-1" : "w-48"
              }`}
              onMouseEnter={() => handleContractorHover(contractor.id)}
            >
              <div className="flex h-full min-w-0 flex-col justify-between gap-8 p-6">
                {/* Logo */}
                <div className="flex h-14 w-32 items-center">
                  <span className="text-xl font-semibold">
                    {contractor.category}
                  </span>
                </div>

                <div className="flex flex-col justify-between gap-8">
                  {/* Expanded Content  */}
                  <AnimatePresence>
                    {activeContractor === contractor.id && (
                      <motion.div
                        key={`content-${contractor.id}`}
                        className="space-y-4"
                      >
                        <h3 className="text-lg leading-tight text-muted-foreground">
                          {contractor.title}
                        </h3>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-0 text-sm font-medium text-primary hover:text-primary/80"
                          asChild
                        >
                          <a href={contractor.learnMoreUrl}>
                            <CornerDownRight className="mr-1 h-3 w-3" />
                            Learn more
                          </a>
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Image  */}
              <AnimatePresence>
                {activeContractor === contractor.id && (
                  <motion.div
                    key={contractor.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className={`relative h-full min-w-0 ${
                      contractor.id === contractors[0]?.id
                        ? "w-96 flex-shrink-0"
                        : "flex-1"
                    }`}
                  >
                    <img
                      src={contractor.imageSrc}
                      alt={contractor.imageAlt}
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Industries4 };
```
