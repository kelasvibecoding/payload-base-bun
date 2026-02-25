# Feature 192

## Metadata
- **Category**: Feature
- **Objective**: Structural interactive accordion section with synchronized visual state and blueprinted background.
- **Use Case**: Primary "Capabilities" discovery sections, modular product walkthroughs, or detailed pricing-tier technical comparisons.
- **Visual Style**: "Blueprinted Capability Stage" aesthetic. Global container features an absolute-positioned immersive `PlusSigns` SVG pattern (16px gap) with a specialized `bg-linear-to-bl` from a gradient tint to `transparent`.
    - Interaction Stage: Symmetrical split. 
    - Information Hub (Left): Vertical `Accordion` module focusing on five key platform modules. Active states utilize high-contrast textual weight and detailed muted descriptions. 
    - Visual Stage (Right): Dynamic photographic billboard (`rounded-2xl shadow-lg`) that state-syncs with the selected accordion item via indexing to provide illustrative proof.
- **Interactivity**: Fully interactive React component utilizing Radix-based `Accordion` transitions for state-driven UI updates. High fidelity visual feedback through image transitions and structural pattern depth.

## Source Code

### `feature192.tsx`
```tsx
"use client";

import { useId, useState } from "react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function Feature192() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="container max-w-7xl py-32">
      <div className="relative overflow-hidden rounded-[3rem] border-2 bg-linear-to-bl from-primary/5 to-transparent p-12 lg:p-20 shadow-3xl">
        {/* Drafting patterns */}
        <div className="absolute inset-0 z-[-1] opacity-[0.03]"><PlusSigns className="h-full w-full" /></div>
        
        {/* Header Block */}
        <div className="mb-16">
          <h3 className="font-mono text-sm font-bold tracking-[0.4em] text-primary uppercase mb-4 opacity-70">WHY CHARTER?</h3>
          <h2 className="text-4xl font-extrabold italic tracking-tighter uppercase sm:text-6xl">Code security</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-20 items-start">
           {/* Interactive Controller */}
           <Accordion type="single" className="flex-1 w-full" defaultValue="0" onValueChange={(v) => setSelectedIndex(Number(v))}>
              {FEATURES.map((feature, index) => (
                <AccordionItem key={feature.id} value={index.toString()} className="border-primary/10">
                   <AccordionTrigger className="hover:no-underline group py-6">
                      <h3 className="text-2xl font-black italic uppercase tracking-tight group-data-[state=open]:text-primary transition-colors">{feature.title}</h3>
                   </AccordionTrigger>
                   <AccordionContent className="pb-8">
                      <p className="text-lg text-muted-foreground italic font-medium leading-relaxed max-w-xl">{feature.description}</p>
                   </AccordionContent>
                </AccordionItem>
              ))}
           </Accordion>
           
           {/* Sync Visual Node */}
           <div className="hidden lg:block flex-1 w-full">
              <div className="relative aspect-square rounded-[2rem] border-8 border-white shadow-3xl overflow-hidden group">
                 <img src={FEATURES[selectedIndex].image} className="h-full w-full object-cover grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0 animate-in fade-in" />
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}

{/* ... PlusSigns Pattern Logic ... */}
```
