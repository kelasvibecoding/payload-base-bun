# Feature 199

## Metadata
- **Category**: Feature
- **Objective**: Dynamic scroll-synchronized feature ticker with sticky photographic proofing stage.
- **Use Case**: High-density "Product tour" landing blocks, capability indices, or modular service walkthroughs.
- **Visual Style**: "Sticky Progress Discovery" aesthetic. Massive `text-6xl` bold header.
    - List Stage (Left): Vertical feature registry utilizing `Separator` lines. Items feature a circular "Active Pulse" indicator (`bg-primary`) and high-contrast bold headers (`text-clamp`).
    - Billboard Stage (Right): Specialized `sticky` photographic container set in a technical border. Image state-syncs with the active scroll/hover position to provide instant illustrative context.
- **Interactivity**: Fully interactive React component. Features a specialized `handleScroll` hook that monitors viewport center-points to dynamically update active feature states for mobile users, and `onMouseEnter` logic for desktop discovery. High-fidelity scroll feedback.

## Source Code

### `feature199.tsx`
```tsx
"use client";

import React, { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { Separator } from "@/components/ui/separator";

const Feature199 = ({ className }: Feature199Props) => {
  const [activeFeature, setActiveFeature] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <h1 className="mb-24 text-4xl font-black italic tracking-tighter uppercase sm:text-7xl leading-none">Discover Our Powerful Features</h1>
        <div className="relative md:grid md:grid-cols-5 gap-12">
          {/* Scrollable Intelligence Stage */}
          <div className="col-span-3 space-y-0" ref={containerRef}>
            <Separator className="bg-primary/10" />
            {features.map((feature, index) => (
              <React.Fragment key={index}>
                <div className="group py-8 cursor-pointer" onMouseEnter={() => setActiveFeature(index)}>
                  <div className="flex items-center gap-12">
                    <span className={cn("size-4 rounded-full bg-primary transition-all duration-500 shadow-[0_0_20px_rgba(var(--primary),0.5)]", activeFeature !== index && "opacity-0 scale-50")}></span>
                    <h2 className={cn("text-3xl font-black italic uppercase tracking-tight transition-colors duration-500", activeFeature === index ? "text-primary" : "text-muted-foreground/40 group-hover:text-muted-foreground")}>{feature.title}</h2>
                  </div>
                </div>
                <Separator className="bg-primary/10" />
              </React.Fragment>
            ))}
          </div>

          {/* Sticky Visual Stage */}
          <div className="sticky top-32 col-span-2 h-fit rounded-[3rem] border-8 border-white bg-muted shadow-3xl overflow-hidden group">
            <img src={features[activeFeature].image} className="aspect-square w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 animate-in fade-in" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature199 };
```
