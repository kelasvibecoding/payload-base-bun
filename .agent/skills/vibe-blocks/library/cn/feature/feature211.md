# Feature 211

## Metadata
- **Category**: Feature
- **Objective**: Massive high-end capability stage section featuring immersive visual variant layouts and editorial typography.
- **Use Case**: Primary "Product Capabilities" discovery rows, executive product walkthroughs, or heavy-weight transformation explainers.
- **Visual Style**: "Immersive Capability Stage" aesthetic. Global container is a massive full-width `rounded-xl bg-muted` stage utilizing extreme padding and professional structural logic.
    - Coordination: Symmetrical `xl:grid-cols-[37.5rem_1fr]` horizontal split.
    - Information Hub (Left): Features specialized primary-colored icon anchors, massive `font-serif text-7xl` bold headers, and high-contrast descriptive leads.
    - Visual Stage (Right): High-complexity `Images` component featuring four distinct variant strategies (16:9 Billboard, Photo Scatter Stack, Centered Overlap, and 2x2 Registry Grid). 
    - Styling: Features high-radius `rounded-[0.625rem]` photographic containers and high-fidelty box-shadows.
- **Interactivity**: Fully interactive React component utilizing Radix-based `Tabs` transitions and specialized image variant indexing for state-driven discovery. Features polished capsule-style `TabsList` triggers with high-feedback active states.

## Source Code

### `feature211.tsx`
```tsx
"use client";

import { ScanFace, Eye, View, Users, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Feature211 = ({ className }: Feature211Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="rounded-[4rem] bg-muted/30 border-2 p-12 lg:p-24 shadow-3xl overflow-hidden">
          {/* Master Tab Discovery Hub */}
          <Tabs defaultValue={TAB_LIST[0].tabName} className="flex flex-col-reverse gap-20">
            {/* Global Capsules Controller */}
            <TabsList className="bg-background/50 h-16 p-2 rounded-full w-fit mx-auto border shadow-xl">
               {TAB_LIST.map((tab) => (<TabsTrigger key={tab.tabName} value={tab.tabName} className="rounded-full px-8 font-black italic uppercase tracking-widest text-xs">{tab.tabName}</TabsTrigger>))}
            </TabsList>
            
            {/* Immersive Content Pane */}
            {TAB_LIST.map((tab) => (
              <TabsContent key={tab.tabName} value={tab.tabName} className="grid xl:grid-cols-2 items-center gap-24 animate-in fade-in slide-in-from-bottom-10 duration-1000">
                 <div className="flex flex-col gap-12">
                    <div className="size-16 rounded-2xl bg-primary grid place-items-center shadow-2xl"><tab.icon className="size-8 text-white" /></div>
                    <h2 className="text-5xl lg:text-8xl font-black italic tracking-tighter uppercase leading-none">{tab.title}</h2>
                    <p className="text-2xl text-muted-foreground italic font-medium leading-relaxed">{tab.summary}</p>
                    {tab.link && <Button className="w-fit rounded-full px-12 py-8 font-black italic uppercase tracking-widest bg-primary shadow-2xl">Learn more <ArrowRight className="ml-2 size-5" /></Button>}
                 </div>
                 <div className="relative h-full min-h-[450px]"><Images variant={tab.imageComponent} images={tab.images} /></div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};
```
