# Feature 285

## Metadata
- **Category**: Feature
- **Objective**: Executive horizontal split section featuring dual-column marquee registry, interactive blur/scale hover logic, and bold "Built for Developers" headers.
- **Use Case**: Master "Leadership Narrative" landing rows, executive platform showcases, or technical platform identity blocks.
- **Visual Style**: "Architectural Marquee Deck" aesthetic. Dual-column horizontal layout split into a narrative engine (Left) and an active marquee hub (Right).
    - Narrative Authority (Left): features top-aligned "Shadcnblocks" branding registry. central assembly highlighting massive `text-4xl` bold headers focusing on systemic superiority ("Built by Developers for Developers").
    - Action Pivot: features specialized `Button` conversion logic hosted within a high-legibility descriptive lead block.
    - Visual Registry (Right): High-complexity dual `Marquee` coordination. features vertical automated paths for photographic assets utilizing high-radius `rounded-3xl` borders.
    - Animation Logic: Logic utilizes `motion` image coordination with localized `blur(10px)` triggers for non-hovered assets. vertical marquee utilizes stylized `[--duration:20s]` timing and architectural `bg-gradient-to-b` masks to provide atmospheric depth.
- **Interactivity**: Fully interactive React component with automated vertical marquees, transition-enabled blur/scale logic, and professional structural rhythm.

## Source Code

### `feature285.tsx`
```tsx
"use client";

import { motion } from "framer-motion";
import { Marquee } from "@/components/magicui/marquee";

const Feature285 = ({ className }: Feature285Props) => {
  return (
    <section className={cn("bg-background py-40 overflow-hidden", className)}>
      <div className="container p-0 overflow-hidden rounded-[4rem] bg-accent/5 border-8 border-white shadow-5xl grid lg:grid-cols-2">
        {/* Narrative Core */}
        <div className="p-20 flex flex-col justify-between">
           <div className="flex items-center gap-4">
              <img src="logo.svg" className="size-10" />
              <span className="text-xl font-black italic uppercase tracking-tighter">Leader.</span>
           </div>

           <div className="space-y-8 max-w-xl">
              <h2 className="text-6xl lg:text-[100px] leading-[0.85] font-black italic uppercase tracking-tighter leading-none">Built for<br/>The Elite.</h2>
              <p className="text-xl text-muted-foreground italic font-medium leading-relaxed">Systemic architecture designed to eliminate friction.</p>
              <Button size="lg" className="rounded-none font-black italic uppercase tracking-widest px-12">Be a Member <Forward className="ml-4"/></Button>
           </div>
        </div>

        {/* Dynamic Visual Hub */}
        <div className="relative h-[800px] flex gap-8 p-8 grayscale hover:grayscale-0 transition-all duration-1000">
           <Marquee vertical className="[--duration:40s]">
              {IMAGES.map(src => <img src={src} className="w-full rounded-[2.5rem] border-4 border-white mb-8" />)}
           </Marquee>
           <Marquee vertical reverse className="[--duration:40s]">
              {IMAGES.map(src => <img src={src} className="w-full rounded-[2.5rem] border-4 border-white mb-8" />)}
           </Marquee>
           <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-accent/5 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
```
