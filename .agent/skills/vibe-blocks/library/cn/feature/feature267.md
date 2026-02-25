# Feature 267

## Metadata
- **Category**: Feature
- **Objective**: Stylized landing section featuring 3D marquee animations, immersive subscription logic, and bold product headers.
- **Use Case**: Master "Hero Conversion" landing rows, executive platform announcements, or technical newsletter signup blocks.
- **Visual Style**: "3D Coordinate Stage" aesthetic. Asymmetrical `lg:grid-cols-2` horizontal split focusing on high-octane conversion.
    - Architectural Narrative (Left): features massive `text-6xl` bold headers and clean descriptive leads. includes specialized branded "shadcn Blocks" badge utilizing `Sparkles` iconography.
    - Global Conversion Hub: features stylized high-radius `rounded-full` input field integrated with a primary conversion button to create a seamless interaction flow.
    - Visual Orchestration (Right): High-complexity `ThreeDMarquee` registry utilizing architectural perspective and transition-enabled asset coordination. features a massive registry of branded photographic assets orbiting a central axis.
- **Interactivity**: Fully interactive React component with transition-enabled 3D marquee logic, responsive input states, and professional rhythmic coordination.

## Source Code

### `feature267.tsx`
```tsx
"use client";

import { Sparkles } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import { ThreeDMarquee } from "@/components/aceternity/3d-marquee";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Feature267 = ({ className }: Feature267Props) => {
  return (
    <section className={cn("py-32 bg-background overflow-hidden", className)}>
      <div className="container grid lg:grid-cols-12 gap-20 items-center">
        {/* Conversion Archetype */}
        <div className="lg:col-span-6 space-y-12">
          <div className="flex items-center gap-4 px-6 py-2 rounded-full bg-accent/10 border-2 border-primary/10 w-fit">
            <Sparkles className="size-6 text-primary fill-primary" />
            <span className="text-sm font-black italic uppercase tracking-widest">Premium Blocks</span>
          </div>

          <h1 className="text-6xl lg:text-[100px] leading-[0.85] font-black italic uppercase tracking-tighter">Supercharge<br/>Your App.</h1>
          
          <div className="relative flex items-center p-2 bg-white/40 rounded-full border-4 border-white shadow-3xl max-w-lg">
             <Input placeholder="Enter your email" className="bg-transparent border-none text-lg italic shadow-none focus-visible:ring-0" />
             <Button className="rounded-full px-12 font-black italic uppercase tracking-widest shadow-xl">Subscribe</Button>
          </div>
        </div>

        {/* Immersive 3D Marquee */}
        <div className="lg:col-span-6 relative h-[600px] grayscale hover:grayscale-0 transition-all duration-1000">
           <ThreeDMarquee images={IMAGES} className="scale-125" />
        </div>
      </div>
    </section>
  );
};
```
