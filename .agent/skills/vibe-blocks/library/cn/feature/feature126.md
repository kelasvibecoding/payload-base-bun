# Feature 126

## Metadata
- **Category**: Feature
- **Objective**: Dynamic image explorer using a state-synced vertical accordion and primary visual stage.
- **Use Case**: Deep feature tours, "Core Platform" walkthroughs, or product capability directories.
- **Visual Style**: "Stage-Driven Accordion" aesthetic. Symmetrical `md:flex-row` split with a large `gap-28`. Left: multi-item feature `Accordion`. Items are separated by a `border-t-2` highlight that turns from neutral to `border-foreground` when active. Right: "Visual Stage". Displays a massive `max-h-[490px]` image that updates instantly via React state when an accordion item is clicked. The stage features a clean bottom-fade overlay (`linear-gradient(to_top, white 0% ...)`) for seamless page integration.
- **Interactivity**: Fully interactive React component. Syncs `activeTabId` and `activeImage` states. Transitions include opacity fades and border-color shifts.

## Source Code

### `feature126.tsx`
```tsx
"use client";

import { MoveRight } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const tabsData = [
  { id: 1, title: "Performance", imageSrc: "...", description: "..." },
  // ...
];

const Feature126 = ({ className }: Feature126Props) => {
  const [activeTabId, setActiveTabId] = useState<number | null>(1);
  const [activeImage, setActiveImage] = useState<string>(tabsData[0].imageSrc);

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        {/* Header and Example Links ... */}
        
        <div className="mb-12 flex w-full flex-col md:flex-row items-center justify-between gap-28">
          <div className="w-full md:max-w-[400px]">
            <Accordion type="single" defaultValue="item-1">
              {tabsData.map((tab) => (
                <AccordionItem key={tab.id} value={`item-${tab.id}`} className={cn("border-t-2 border-b-0 px-2 transition", tab.id === activeTabId && "border-foreground bg-accent/20")}>
                  <AccordionTrigger onClick={() => { setActiveImage(tab.imageSrc); setActiveTabId(tab.id); }} className="py-5 no-underline!">
                     <h6 className={cn("text-xl font-bold italic tracking-tight transition", tab.id === activeTabId ? "text-primary" : "text-muted-foreground")}>{tab.title}</h6>
                  </AccordionTrigger>
                  <AccordionContent>
                      <p className="mt-3 text-muted-foreground italic font-medium">{tab.description}</p>
                      <img src={tab.imageSrc} className="md:hidden mt-4 rounded-xl" /> {/* Mobile visual */}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          {/* Desktop Visual Stage */}
          <div className="relative hidden flex-1 overflow-hidden md:block shadow-2xl rounded-2xl border">
            <div className="absolute inset-x-0 bottom-0 z-2 h-[100px] bg-linear-to-t from-background to-transparent pointer-events-none"></div>
            <img src={activeImage} className="max-h-[490px] w-full object-cover transition-all duration-500 ease-in-out" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature126 };
```
