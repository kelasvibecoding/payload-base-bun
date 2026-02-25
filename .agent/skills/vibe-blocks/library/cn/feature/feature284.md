# Feature 284

## Metadata
- **Category**: Feature
- **Objective**: Immersive bento-grid feature showcase featuring localized glowing effects, high-fidelity photographic cells, and architectural bento-scaling.
- **Use Case**: Master "Technology Showcase" landing rows, executive solution summaries, or technical product capability justified blocks.
- **Visual Style**: "Luminous Bento" aesthetic. Multi-node grid registry coordinating five distinct informational units utilizing specialized bento-classes (`md:col-span-1`, `lg:col-span-2`, `lg:row-span-2`).
    - Effect Logic: features specialized `GlowingEffect` coordination utilizing active recursive paths and localized proximity triggers (`proximity={64}`).
    - Node Architecture: features individualized `div` containers utilizing high-radius `rounded-3xl` borders. items coordinate top-aligned badges ("#1 Block") with central visual assets and bottom-aligned narrative blocks.
    - Visual Narrative: Logic utilizes high-fidelity photographic assets within `bg-muted` overflow-hidden containers. 
    - Information Hierarchy: massive `text-2xl` semi-bold headers focusing on core values (Quality, Innovation, Performance, Reliability).
- **Interactivity**: Fully interactive React component with real-time glowing effects, transition-enabled list logic, and professional bento-grid coordination.

## Source Code

### `feature284.tsx`
```tsx
"use client";

import { GlowingEffect } from "@/components/aceternity/glowing-effect";

const Feature284 = ({ className }: Feature284Props) => {
  return (
    <section className={cn("py-32 bg-background overflow-hidden", className)}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-8 h-[1000px] lg:h-[800px]">
           {FEATURES.map((item, idx) => (
             <div key={idx} className={cn("relative p-10 bg-accent/5 rounded-[3.5rem] border-4 border-white shadow-4xl flex flex-col justify-between overflow-hidden", item.gridClass)}>
                <div className="absolute inset-0 pointer-events-none opacity-50"><GlowingEffect spread={60} /></div>
                
                <div className="flex justify-between items-center z-10">
                   <span className="text-xs font-black italic tracking-widest text-primary uppercase">{item.badgeTitle}</span>
                   <HelpCircleIcon className="size-5 opacity-30" />
                </div>

                <div className="relative flex-grow my-8 rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl">
                   <img src={item.img} className="size-full object-cover" />
                </div>

                <div className="space-y-4 z-10">
                   <h3 className="text-3xl font-black italic uppercase tracking-tighter">{item.title}</h3>
                   <p className="text-md text-muted-foreground italic font-medium leading-relaxed">{item.desc}</p>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};
```
