# Services 21

## Metadata
- **Category**: Services
- **Objective**: Provide an immersive, interactive service directory with context-aware sidebar imagery.
- **Use Case**: High-end creative agencies, digital product studios, or luxury brand designers looking to combine large-scale typography with impactful situational photography.
- **Visual Style**: Clean split layout featuring a sticky sidebar with dynamic image and description containers, and a primary list of huge typographic service names that trigger content changes on hover.
- **Interactivity**: Dynamic "Active State" switching driven by hover, featuring sophisticated Framer Motion spring-based clip-path transitions for the image reveals.

## Description
Services 21 is a masterclass in dynamic storytelling. By utilizing a "clip-path" transition for the sidebar imagery, it creates a "wipe" effect as the user moves from service to service, making the transition feel physical and premium. The sticky nature of the sidebar ensures that while the user scrolls through the list of expertise, the visual and textual context remains consistently in view, providing a high-bandwidth informational exchange.

## Source Code

```tsx
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

// Custom hook to get previous value for smooth transitions
const usePrevious = <T,>(value: T): T | undefined => {
  const [prev, setPrev] = useState<T | undefined>(undefined);
  const ref = useRef(value);

  useEffect(() => {
    setPrev(ref.current);
    ref.current = value;
  }, [value]);

  return prev;
};

interface Services21Props {
  className?: string;
}

const Services21 = ({ className }: Services21Props) => {
  const services = [
    {
      id: "{01}",
      title: "Product Design",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img11.png",
      description:
        "We begin by understanding your business goals, target audience, and current challenges. This phase involves research, analysis, and strategic planning to identify opportunities.",
    },
    {
      id: "{02}",
      title: "Brand Design",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img25.jpeg",
      description:
        "Based on our findings, we develop a comprehensive strategy that aligns with your objectives. This includes defining the approach, timeline, and key milestones for success.",
    },
    {
      id: "{03}",
      title: "UI/UX Design",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img10.png",
      description:
        "We bring the strategy to life through careful implementation and development. Our team works collaboratively to ensure every detail meets your requirements and standards.",
    },
    {
      id: "{04}",
      title: "Branding",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img9.png",
      description:
        "We continuously monitor performance and gather feedback to refine and improve the solution. This iterative process ensures long-term success and growth.",
    },
    {
      id: "{05}",
      title: " Packaging",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img25.jpeg",
      description:
        "We create comprehensive packaging solutions that protect your products while enhancing brand visibility. Our designs balance functionality with aesthetic appeal to drive consumer engagement.",
    },
  ];

  const [active, setActive] = useState<number>(0);
  const previousActive = usePrevious(active);

  return (
    <section className={cn("py-32 bg-background", className)}>
      <div className="container">
        <div className="flex w-full flex-col justify-between lg:flex-row lg:gap-20">
          <div className="top-10 h-fit w-full space-y-7 py-8 lg:sticky lg:max-w-md">
            <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-2xl">
              {previousActive !== undefined && (
                <div className="absolute top-0 h-full w-full">
                  <img
                    src={services[previousActive].image}
                    className="h-full w-full object-cover grayscale brightness-75"
                    alt=""
                  />
                </div>
              )}
              <motion.div
                initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
                animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                key={active}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 25,
                }}
                className="h-full w-full z-10 relative"
              >
                <img
                  src={services[active].image}
                  className="h-full w-full object-cover"
                  alt=""
                />
              </motion.div>
            </div>
            <div className="space-y-4">
              <p className="font-semibold tracking-widest text-primary uppercase text-sm">
                {services[active].title}
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground transition-all duration-500">
                {services[active].description}
              </p>
            </div>
          </div>
          <div className="relative w-full xl:pl-20 mt-12 lg:mt-0">
            <ul className="divide-y divide-border/30">
              {services.map((service, index) => (
                <li
                  key={index}
                  onMouseEnter={() => setActive(index)}
                  className={cn(
                    "cursor-pointer py-10 transition-all duration-300",
                  )}
                >
                  <div
                    className={cn(
                      "flex items-start gap-4 transition-all duration-500",
                      index === active ? "translate-x-4 opacity-100" : "opacity-20 hover:opacity-40"
                    )}
                  >
                    <span className="text-4xl font-bold tracking-tighter md:text-7xl lg:text-8xl">
                      {service.title}
                    </span>
                    <sup className="align-super text-xs font-mono font-bold text-red-500 md:text-xl pt-4">
                      {service.id}
                    </sup>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-12 flex justify-start">
              <Button size="lg" className="group rounded-full px-8 py-6 h-fit bg-red-600 hover:bg-red-700 text-white border-none shadow-lg shadow-red-500/20">
                Get Started
                <ArrowUpRight className="ml-2 size-5 transition-transform duration-300 group-hover:rotate-45" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Services21 };
```
