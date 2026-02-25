# Feature 131

## Metadata
- **Category**: Feature
- **Objective**: Premium interactive showcase with dynamic stage transitions and high-contrast accordion triggers.
- **Use Case**: Master product tours, deep feature technical overviews, or capability hubs for high-growth tech.
- **Visual Style**: "High-Contrast Visual Stage" aesthetic. Symmetrical `md:flex-row` split with large `gap-16`. Left: Vertical state-synced `Accordion`. Active items feature a bold `border-primary` highlight and `bg-accent/40` contrast. Right: "Visual Stage". Displays a massive `max-h-[490px]` image inside an `accent/30` stylized frame. Frame features a subtle `bg-linear-to-br from-primary/5` gradient to enhance depth.
- **Interactivity**: Fully interactive React component. Hooks into `onValueChange` of Radix Accordion to sync `activeImage` state. Transitions include smooth state-based border-color and opacity flows.

## Source Code

### `feature131.tsx`
```tsx
"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Feature131 = ({ className }: Feature131Props) => {
  const [activeTabId, setActiveTabId] = useState<number>(1);
  const [activeImage, setActiveImage] = useState<string>(tabsData[0].imageSrc);

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="flex w-full flex-col items-start justify-between gap-8 md:flex-row lg:gap-16">
          <div className="w-full md:max-w-[400px]">
            <h2 className="mb-8 text-3xl font-extrabold italic tracking-tighter uppercase px-2">Our Core Features</h2>
            <Accordion type="single" defaultValue="item-1" onValueChange={(v) => {
               const id = parseInt(v.split("-")[1]);
               setActiveTabId(id);
               setActiveImage(tabsData.find(t=>t.id===id)?.imageSrc || "");
            }}>
              {tabsData.map((tab) => (
                <AccordionItem key={tab.id} value={`item-${tab.id}`} className={cn("border-t-2 border-b-0 px-4 transition-all duration-300", tab.id === activeTabId ? "border-primary bg-accent/40 shadow-inner" : "border-muted hover:bg-accent/20")}>
                  <AccordionTrigger className="cursor-pointer py-6 no-underline! transition-all">
                    <h6 className={cn("text-xl font-bold italic tracking-tight transition-colors duration-300", tab.id === activeTabId ? "text-primary" : "text-muted-foreground")}>{tab.title}</h6>
                  </AccordionTrigger>
                  <AccordionContent className="animate-accordion-down">
                    <p className="mt-2 text-muted-foreground italic font-medium leading-relaxed">{tab.description}</p>
                    <img src={tab.imageSrc} className="md:hidden mt-6 rounded-2xl shadow-xl" />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          {/* Visual Stage Detail */}
          <div className="relative hidden w-full overflow-hidden rounded-2xl bg-accent/30 md:block shadow-2xl border border-white/10 group">
             <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent pointer-events-none opacity-50"></div>
             <div className="pt-14 pl-14 transition-all group-hover:pl-10">
               <img src={activeImage} className="max-h-[490px] w-full rounded-tl-2xl object-cover transition-all duration-700 shadow-[-20px_-20px_40px_rgba(0,0,0,0.1)] grayscale hover:grayscale-0" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature131 };
```
