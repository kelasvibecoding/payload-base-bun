# Feature 266

## Metadata
- **Category**: Feature
- **Objective**: Editorial feature collection featuring sequential reveal animations, magnified hover triggers, and high-density branding headers.
- **Use Case**: Primary "Artistic Showcase" landing rows, executive collection previews, or premium brand aesthetic discovery blocks.
- **Visual Style**: "Fragments of Light" aesthetic. Monochrome editorial layout prioritizing negative space and refined typography.
    - Leadership Hub: Centered vertical assembly highlighting massive lightweight headers with localized `tracking-wide` styling.
    - Collection Grid: Symmetrical `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` staggered reveal registry using `framer-motion`.
    - Interactive Nodes: "Shadows in motion" cards utilizing high-contrast photographic thumbnails. 
    - Tooltip Orchestration: features localized `Tooltip` magnification logic. logic utilizes `TooltipProvider` with `delayDuration={0}` to provide instant visual expansion of the grayscale assets on hover.
    - Narrative Polish: features lightweight numeric labels (`01`, `02`) and poetic descriptive text blocks that utilize transition-enabled color shifts (`text-muted-foreground` to `text-foreground`).
- **Interactivity**: Fully interactive React component with staggered entry animations, magnified tooltip reveals, and professional transition logic.

## Source Code

### `feature266.tsx`
```tsx
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Feature266 = ({ className }: Feature266Props) => {
  return (
    <section className={cn("py-32 bg-background", className)}>
      <div className="container">
        {/* Editorial Collection Header */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} className="text-center mb-32">
          <p className="text-xs font-black tracking-[0.4em] text-primary mb-6 italic uppercase">Collection</p>
          <h1 className="text-6xl lg:text-[120px] leading-[0.85] font-light italic uppercase tracking-tighter">Fragments of<br/>Light & Stillness.</h1>
        </motion.div>

        {/* Dynamic Visual Registry */}
        <div className="grid md:grid-cols-3 gap-16">
          {SERVICES.map((item, idx) => (
            <motion.div key={item.id} className="group flex flex-col items-center text-center space-y-10">
               <span className="text-xs font-black italic tracking-widest text-muted-foreground opacity-30">[{item.id}]</span>
               
               {/* Magnified Focal Point */}
               <TooltipProvider delayDuration={0}>
                 <Tooltip>
                   <TooltipTrigger>
                      <div className="relative size-64 bg-accent/5 rounded-[4rem] border-4 border-white shadow-4xl overflow-hidden group-hover:scale-105 transition-all duration-700 p-8 grayscale">
                         <img src={item.image} className="size-full object-cover rounded-[3rem]" />
                      </div>
                   </TooltipTrigger>
                   <TooltipContent className="rounded-[2rem] border-8 border-white p-0 overflow-hidden shadow-5xl">
                      <img src={item.image} className="h-[400px] w-[300px] object-cover" />
                   </TooltipContent>
                 </Tooltip>
               </TooltipProvider>

               <div className="space-y-4">
                  <h3 className="text-3xl font-black italic uppercase tracking-tighter">{item.title}</h3>
                  <p className="text-lg text-muted-foreground italic font-medium leading-relaxed max-w-xs">{item.description}</p>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
```
