# Feature 175

## Metadata
- **Category**: Feature
- **Objective**: High-end immersive vertical tabs interface featuring large-scale visual stages.
- **Use Case**: Primary "Capabilities" discovery blocks, technical product walkthroughs, or modular service descriptions.
- **Visual Style**: "Dark Modular Discovery" aesthetic. Section utilizes a specific immersive dark background (`dark:bg-[#2F332E]`).
    - Interaction Stage: Symmetrical `Tabs` module split into a vertical `TabsList` (Left) and a massive `Col-span-3` `TabsContent` stage (Right).
    - TabsList: High-density vertical pill list. Triggers feature large-scale icons (`size-9`), bold headers, and descriptive base text. Active states feature high-contrast `text-black` and `shadow-xl`.
    - Content Stage: Houses detailed informational blocks with split bold/muted typography and oversized `h-[512px]` vertical photographic assets.
- **Interactivity**: Fully interactive React component. Utilizes `orientation="vertical"` for secondary-tier tab navigation. Smooth color and shadow transitions on trigger activation.

## Source Code

### `feature175.tsx`
```tsx
"use client";

import { Blend, ChartNoAxesColumn, CircleDot, Diamond } from "lucide-react";

import { cn } from "@/lib/utils";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Feature175 = ({ className }: Feature175Props) => {
  return (
    <section className={cn("py-32 dark:bg-[#2F332E]", className)}>
      <div className="container">
        {/* Editorial Split Header */}
        <div className="flex gap-12 items-end justify-between max-md:flex-col mb-20 px-4">
          <h2 className="flex-1 text-4xl font-extrabold italic tracking-tighter uppercase sm:text-6xl leading-none">Streamline your allocation</h2>
          <p className="flex-1 text-xl text-muted-foreground italic font-medium leading-relaxed max-w-sm">Built on habits that make the best product teams successful...</p>
        </div>

        {/* Master Interactive Stage */}
        <Tabs defaultValue={FEATURES[0].title} orientation="vertical" className="bg-card/5 p-8 rounded-[3rem] border shadow-2xl grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Side Triggers */}
          <TabsList className="bg-muted p-2 rounded-[2rem] flex flex-col h-auto justify-start border overflow-hidden">
             {FEATURES.map((feature) => (
               <TabsTrigger key={feature.title} value={feature.title} className="w-full text-left p-10 rounded-[1.5rem] data-[state=active]:bg-background data-[state=active]:shadow-2xl transition-all group">
                  <feature.icon className="size-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold italic uppercase tracking-tighter mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground italic font-medium">{feature.description}</p>
               </TabsTrigger>
             ))}
          </TabsList>
          
          {/* Main Visual Content area */}
          {FEATURES.map((feature) => (
             <TabsContent key={feature.title} value={feature.title} className="lg:col-span-3 m-0 animate-in fade-in slide-in-from-right-10 duration-700">
                <div className="mb-10"><h4 className="text-3xl font-black italic tracking-tighter uppercase mb-4">{feature.content.title}</h4><p className="text-xl text-muted-foreground italic font-medium leading-relaxed max-w-2xl">{feature.content.description}</p></div>
                <img src={feature.content.image} className="h-[500px] w-full rounded-[2rem] object-cover shadow-3xl border-4 border-white/10 grayscale group-hover:grayscale-0 transition-grayscale" />
             </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export { Feature175 };
```
