# Hero 223

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a high-status narrative introduction for productivity platforms, pairing a centered typography block with high-fidelity "Line-Shadow-Text" animations and a unique "3D-Box-Matrix" anchored by specialized interactive background components.
- **Use Case**: Best for professional SaaS tools, task management ecosystems (e.g., "The only app you Need to Stay Productive ever."), or elite startup landing pages that want to emphasize "Productive" and "See Pricing."
- **Visual Style**: Cinematic Technical aesthetic. Features a centered layout Beginning with a prominent heading Using high-fidelity `LineShadowText` Positioning the word "Productive" with specialized shadow transitions. The visual anchor is a unique "3D Box Matrix" background Positioning a high-fidelity `Boxes` component Utilizing specialized `skewX(-48deg)` and `skewY(14deg)` transformations to create a unique world-class cinematic perspective. Visual anchor is a unique "Infinite Scroll" atmosphere masking Positioning a specialized `radial-gradient` overlay Using high-fidelity CSS transitions to drive categorical engagement.
- **Interactivity**: High engagement through state management and motion. Features specialized hover effects for the 3D box matrix and high-fidelity entrance animations for the typography and buttons to drive professional enrollment.

## Source Code

### `hero223.tsx`
```tsx
"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import React from "react";

import { cn } from "@/lib/utils";

import { LineShadowText } from "@/components/ui/line-shadow-text";
import { Button } from "@/components/ui/button";

interface Hero223Props {
  className?: string; // Optional custom styling
}

const Hero223 = ({ className }: Hero223Props) => {
  return (
    <section className={cn("bg-background py-20 lg:py-40 font-sans border-b overflow-hidden group/hero", className)}>
      <div className="relative container flex h-[60rem] w-full flex-col items-center justify-center overflow-hidden px-6 max-w-[100rem] isolate">
        
        {/* Specialized Atmospheric Masking side */}
        <div className="pointer-events-none absolute inset-0 z-20 h-full w-full bg-background [mask-image:radial-gradient(transparent,white)] opacity-80" />
        
        {/* Unique "3D Box Matrix" Background side */}
        <Boxes className="scale-150 opacity-40 group-hover/hero:opacity-60 transition-opacity duration-1000" />

        <div className="relative z-30 flex flex-col items-center gap-12 text-center group/content">
             {/* Atmos Depth layer side */}
            <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>

            <h1 className="max-w-5xl text-center font-black text-6xl lg:text-[9.5rem] tracking-tighter leading-[0.8] text-foreground drop-shadow-sm uppercase">
                <span className="mr-6 text-muted-foreground/30">
                    The only app elite teams Need to Stay
                </span>
                <LineShadowText className="text-primary italic animate-pulse-slow"> Productive </LineShadowText>
                <span className="text-muted-foreground/30"> ever</span>
                <span className="text-primary">.</span>
            </h1>
            <p className="mx-auto max-w-[45rem] mt-6 text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-x-4 border-primary/10 px-12 py-4">
                Elite productivity world-wide for high-status brands. 
                Experience world-class professional craft for elite status world-wide.
            </p>

            <div className="realtive z-30 mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 group/buttons px-10">
                <Button size="lg" className="h-fit rounded-full bg-primary px-12 py-7 font-black text-xl text-primary-foreground shadow-2xl transition-transform hover:scale-105 active:scale-95 duration-500 uppercase tracking-widest leading-none group/btn-1">
                    <span className="flex items-center gap-6">
                        See Pricing elite
                        <ArrowRight className="size-6 -rotate-45 transition-transform group-hover/btn-1:rotate-0" strokeWidth={3} />
                    </span>
                </Button>
                <Button variant="outline" size="lg" className="h-fit rounded-full bg-background/50 border-2 border-primary/20 backdrop-blur-xl px-12 py-7 font-black text-xl text-foreground shadow-2xl transition-transform hover:scale-105 active:scale-95 duration-500 uppercase tracking-widest leading-none group/btn-2">
                    <span className="flex items-center gap-6">
                        Try free elite
                        <ArrowRight className="size-6 -rotate-45 transition-transform group-hover/btn-2:rotate-0" strokeWidth={3} />
                    </span>
                </Button>
            </div>
        </div>
      </div>
    </section>
  );
};

export { Hero223 };

// Below is the modified component from Aceternity UI
// Original source: npx shadcn@latest add https://ui.aceternity.com/registry/background-boxes.json

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);
  const colors = [
    "var(--primary)",
    "var(--secondary)",
    "#33A1FD",
    "#2276FF",
    "#FDCA41",
    "#2EDCC3",
    "#FF99CA",
  ];
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute -top-1/4 left-1/4 z-0 flex h-full w-full -translate-x-1/2 -translate-y-1/2 p-4",
        className,
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className="relative h-8 w-16 border-l border-muted-foreground/10"
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: `${getRandomColor()}`,
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col` + j}
              className="relative h-8 w-16 border-t border-r border-muted-foreground/10"
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="pointer-events-none absolute -top-[14px] -left-[22px] h-6 w-10 stroke-[0.5px] text-primary/10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
```
