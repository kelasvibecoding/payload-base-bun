# Feature 197

## Metadata
- **Category**: Feature
- **Objective**: Stylized vertical accordion discovery section featuring synchronized photographic visual states.
- **Use Case**: Master "Capabilities" walkthroughs, platform module explainers, or technical "About Us" deep-dives.
- **Visual Style**: "Vertical Accordion Preview" aesthetic. Symmetrical horizontal split.
    - Information Hub (Left): Vertical `Accordion` module focusing on five key platform features. Active triggers feature high-contrast `foreground` typography and detailed muted descriptions. 
    - Visual Stage (Right): Dynamic large-format photographic preview (`aspect-4/3`) that state-syncs with the selected accordion item to provide visual context.
- **Interactivity**: Fully interactive React component utilizing Radix-based `Accordion` transitions for state-driven UI updates. Features mobile-optimized inline visual reveals within the accordion content to ensure discovery continuity across devices.

## Source Code

### `feature197.tsx`
```tsx
"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Feature197 = ({ features = DEFAULT_FEATURES, className }: Feature197Props) => {
  const [activeTabId, setActiveTabId] = useState<number | null>(1);
  const [activeImage, setActiveImage] = useState(features[0].image);

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-20">
          {/* Interactive Narrative Stage */}
          <div className="w-full md:w-1/2">
            <Accordion type="single" className="w-full" defaultValue="item-1">
              {features.map((tab) => (
                <AccordionItem key={tab.id} value={`item-${tab.id}`} className="border-primary/10 transition-all hover:bg-muted/5">
                  <AccordionTrigger onClick={() => { setActiveImage(tab.image); setActiveTabId(tab.id); }} className="hover:no-underline py-8">
                    <h4 className={cn("text-2xl font-bold italic tracking-tighter uppercase", tab.id === activeTabId ? "text-primary" : "text-muted-foreground")}>{tab.title}</h4>
                  </AccordionTrigger>
                  <AccordionContent className="pb-8">
                    <p className="text-lg text-muted-foreground italic font-medium leading-relaxed mb-6">{tab.description}</p>
                    {/* Mobile Visual Node */}
                    <div className="md:hidden rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl">
                      <img src={tab.image} className="aspect-video w-full object-cover" />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Master Synchronized Billboard */}
          <div className="relative hidden md:block w-1/2 overflow-hidden rounded-[3rem] border-8 border-white bg-muted shadow-3xl group">
            <img src={activeImage} className="aspect-[4/3] w-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature197 };
```
