# Feature 247

## Metadata
- **Category**: Feature
- **Objective**: Immersive scroll-driven text reveal section featuring professional narrative transitions and massive editorial headers.
- **Use Case**: Primary "Manifesto" landing rows, executive platform stories, or high-fidelity brand mission blocks.
- **Visual Style**: "Narrative Storyteller Stage" aesthetic. Global container utilizes a massive `200vh` vertical staging architecture to accommodate scroll-driven interactions.
    - Content Coordination: features high-complexity `TextReveal` logic utilizing `useScroll` and `useTransform`. 
    - Text Design: Multi-weighted typographic assembly featuring bold `text-lg` titles and massive `xl:text-5xl` narrative bodies. Logic derives individual word opacity from specific scroll ranges (`range=[start, end]`).
    - Visual Transition: Logic provides a clean transition from `black/20` (inactive state) to `text-black` (active discovery), creating a high-fidelity "Living Script" environment.
    - Polish: features architectural `sticky` positioning and professional structural cadence.
- **Interactivity**: Fully interactive React component utilizing scroll-position state, sequential text-reveal transitions, and premium narrative polish.

## Source Code

### `feature247.tsx`
```tsx
"use client";

import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";

import { cn } from "@/lib/utils";

const TextReveal = ({ children, title, className }: TextRevealProps) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const words = children.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
        {/* Sticky Interaction Node */}
        <div className="sticky top-0 mx-auto flex h-screen items-center justify-center bg-transparent">
          <div className="flex flex-col items-center justify-center space-y-12">
            <span className="font-black italic uppercase tracking-[0.4em] text-sm text-primary">{title}</span>
            <span className="flex flex-wrap items-center justify-center p-12 text-5xl lg:text-7xl font-black italic uppercase tracking-tighter leading-none text-black/10">
              {words.map((word, i) => {
                const start = i / words.length;
                const end = start + 1 / words.length;
                return (
                  <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>
                );
              })}
            </span>
          </div>
        </div>
    </div>
  );
};
```
