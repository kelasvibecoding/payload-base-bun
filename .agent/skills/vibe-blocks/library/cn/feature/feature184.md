# Feature 184

## Metadata
- **Category**: Feature
- **Objective**: Interactive dual-pane feature discovery section combining large-scale visuals with detailed vertical tab triggers.
- **Use Case**: Primary "How it Works" product tours, platform feature deep-dives, or service configuration walkthroughs.
- **Visual Style**: "Responsive Discovery Split" aesthetic. Symmetrical `lg:grid-cols-2` column split.
    - Presence Pane: Features a massive dynamic photographic stage on the left with high-radius `rounded-xl` corners. Image source is state-synced to the active tab.
    - Interaction Pane: Features a vertical `TabsList` composed of high-fidelity "Trigger Cards". Each card acts as an interactive block with a leading icon highlight (`Workflow`, `Users`, etc.), bold `text-xl` summary, and a `rotate-180` Chevron indicator.
    - Active Logic: Transitions to a high-contrast `bg-primary/95` background with `text-primary-foreground` and high-intensity shadows.
- **Interactivity**: Fully interactive React component. Utilizes `onValueChange` to sync the visual pane with current tab state. High structural polish including multi-tier conversion buttons at the base.

## Source Code

### `feature184.tsx`
```tsx
"use client";

import { Zap, Workflow, Users, Flag, ChevronUp } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Feature184 = ({ className }: Feature184Props) => {
  const [activeTab, setActiveTab] = useState(FEATURES[0].title);

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        {/* Leading Centered Header */}
        <div className="mb-20 flex flex-col items-center">
          <h2 className="text-4xl font-extrabold italic tracking-tighter uppercase sm:text-6xl lg:text-7xl leading-none">Explore our features</h2>
        </div>

        {/* Discovery Split Stage */}
        <div className="grid gap-12 lg:grid-cols-2 max-w-7xl mx-auto">
          {/* Dynamic Image Pane (Left) */}
          <div className="relative h-[500px] overflow-hidden rounded-[3rem] border-8 border-white shadow-3xl">
            <img src={FEATURES.find((f) => f.title === activeTab)?.image} className="h-full w-full object-cover animate-in fade-in duration-1000" />
          </div>

          {/* Interactive Trigger List (Right) */}
          <Tabs defaultValue={FEATURES[0].title} onValueChange={(v) => setActiveTab(v)} className="h-full">
            <TabsList className="flex flex-col gap-6 bg-transparent h-auto p-0">
              {FEATURES.map((feature) => (
                <TabsTrigger key={feature.title} value={feature.title} className="group w-full p-10 rounded-[2rem] border bg-accent/5 hover:bg-accent/10 transition-all data-[state=active]:bg-primary data-[state=active]:text-white shadow-xl hover:shadow-2xl">
                   <div className="flex w-full items-center justify-between">
                      <div className="flex items-center gap-8">
                         <div className="rounded-2xl bg-primary/10 p-4 font-black italic group-data-[state=active]:bg-background group-data-[state=active]:text-primary transition-all">{feature.icon}</div>
                         <div className="flex flex-col text-left">
                            <h3 className="text-2xl font-bold tracking-tight">{feature.title}</h3>
                            <span className="text-sm font-medium italic opacity-70">{feature.description}</span>
                         </div>
                      </div>
                      <ChevronUp className="size-6 group-data-[state=active]:rotate-180 transition-all duration-700" />
                   </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Global Action Row */}
        <div className="mt-20 flex justify-center gap-6 max-sm:flex-col items-center">
           <Button className="rounded-full px-12 py-7 font-black italic tracking-widest uppercase shadow-2xl">Get Started</Button>
           <Button variant="outline" className="rounded-full px-12 py-7 font-black italic tracking-widest uppercase shadow-xl transition-all hover:bg-accent">Register Now</Button>
        </div>
      </div>
    </section>
  );
};

export { Feature184 };
```
