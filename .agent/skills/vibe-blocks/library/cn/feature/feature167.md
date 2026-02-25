# Feature 167

## Metadata
- **Category**: Feature
- **Objective**: Executive corporate tab section focusing on AI-driven productivity with high-end architectural borders.
- **Use Case**: Primary "AI Features" landing section, high-fidelity platform discovery, or enterprise service walkthroughs.
- **Visual Style**: "Architectural AI Stage" aesthetic. 
    - Layout: Symmetrical section encased in high-contrast `border-y` and `border-x` separators to simulate an engineering drafting board. 
    - Interactive Zone: Master `Tabs` module split into a `1/3` vs `2/3` horizontal layout (`lg:flex-row`).
    - TabsList: Left-aligned vertical list of proof-links. Triggers feature a specialized bottom indicator gradient (`blue-600 to-transparent`) and deep descriptive body text.
    - TabsContent: Right-aligned oversized visual stage featuring high-precision photographic visualizations in a `bg-muted` frame.
- **Interactivity**: Fully interactive state-based React component. Triggers utilize `group-data-[state=active]` animations to reveal a customized focus underline.

## Source Code

### `feature167.tsx`
```tsx
"use client";

import { CalendarClock, ChartNoAxesCombined, PocketKnife, SquarePen } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Feature167 = ({ className }: Feature167Props) => {
  return (
    <section className={cn("py-32", className)}>
      {/* Drafting Board Title block */}
      <div className="border-y border-muted-foreground/10 bg-accent/5">
        <div className="container flex flex-col gap-6 border-x border-muted-foreground/10 py-10 lg:py-16">
          <Badge variant="outline" className="w-fit gap-2 bg-card px-4 py-2 font-mono uppercase tracking-widest shadow-xl">
            <PocketKnife className="size-4 text-primary" /> <span>Features</span>
          </Badge>
          <h2 className="text-4xl font-extrabold italic tracking-tighter uppercase md:text-6xl lg:text-7xl">Smart productivity with AI</h2>
          <p className="max-w-[600px] text-xl text-muted-foreground italic font-medium">Unlock smarter productivity...</p>
        </div>
      </div>

      {/* Main Multi-Stage Interaction */}
      <div className="container border-x border-muted-foreground/10 px-0 relative">
        <Tabs defaultValue={FEATURES_DATA[0].title} className="flex flex-col lg:flex-row divide-y lg:divide-x lg:divide-y-0">
          <TabsList className="flex flex-col lg:w-1/3 border-b lg:border-r lg:border-b-0 bg-transparent h-auto p-0">
            {FEATURES_DATA.map((item, index, array) => (
              <TabsTrigger key={item.title} value={item.title} className="group relative flex w-full flex-col items-start p-10 text-left border-b last:border-b-0 hover:bg-accent/20 transition-all data-[state=active]:bg-accent/5 mt-0">
                 <div className="absolute bottom-[-1px] left-0 h-1 w-0 bg-linear-to-r from-primary to-transparent group-data-[state=active]:w-[60%] transition-all duration-700" />
                 <div className="flex items-center gap-3 mb-4">
                    <item.icon className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-bold italic uppercase tracking-tight">{item.title}</h3>
                 </div>
                 <p className="text-sm text-muted-foreground italic font-medium leading-relaxed">{item.description}</p>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {/* Global Pattern Visualization Area */}
          <div className="relative flex-1 bg-muted/20 min-h-[500px]">
             {FEATURES_DATA.map((item, index) => (
               <TabsContent key={index} value={item.title} className="absolute inset-0 m-0 p-12 transition-all animate-in fade-in duration-1000">
                  <div className="flex h-full items-center justify-center p-12 bg-background/50 rounded-[3rem] border-2 border-dashed border-primary/20 shadow-inner">
                     <img src={item.image} className="max-h-full drop-shadow-3xl animate-pulse-slow" title="AI feature visualization" />
                  </div>
               </TabsContent>
             ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export { Feature167 };
```
