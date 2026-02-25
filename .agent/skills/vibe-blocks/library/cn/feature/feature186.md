# Feature 186

## Metadata
- **Category**: Feature
- **Objective**: Patterned interactive tabs discovery section featuring an architectural visual backdrop.
- **Use Case**: Primary "How it works" landing blocks, capability discovery modules, or technical service walkthroughs.
- **Visual Style**: "Patterned Drafting Discovery" aesthetic. 
    - Background: Features a massive absolute-positioned overlay utilizing the "Architect" SVG pattern. Implements a specialized `radial-gradient` ellipse mask to smoothly integrate the pattern into the global `bg-background`.
    - Interaction Stage: Left-aligned `TabsList` with minimalist textual triggers. 
    - Content Pane: Features a high-contrast `aspect-3/2` container on a `bg-accent` background. Interior houses a black-tiled circular icon zone (`size-12`), bold `text-2xl` headers, and massive `h-full` photographic assets.
- **Interactivity**: Fully interactive React component. Features specialized "Mobile Navigation Dots" to ensure rapid tab-switching and high-fidelity feedback on touch devices.

## Source Code

### `feature186.tsx`
```tsx
"use client";

import { Sparkles, Database, LockKeyhole } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Feature186 = ({ className }: Feature186Props) => {
  const [selection, setSelection] = useState(DATA[0].id);

  return (
    <section className={cn("relative py-32 overflow-hidden", className)}>
      {/* Immersive Drafting pattern background */}
      <div className="absolute inset-x-0 top-0 z-0 h-[800px] bg-repeat opacity-[0.05] [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_70%)]" style={{ backgroundImage: "url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/architect.svg')", backgroundSize: "40px" }} />
      
      <div className="relative z-10 container">
        {/* Editorial Lead */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-4xl font-extrabold italic tracking-tighter uppercase sm:text-6xl lg:text-7xl leading-none">Our Key Features</h2>
          <p className="mt-8 text-xl text-muted-foreground italic font-medium leading-relaxed">Unlock the full potential of your projects...</p>
        </div>

        {/* Master Tab Interaction Stage */}
        <Tabs value={selection} onValueChange={setSelection}>
           <div className="mb-12"><TabsList className="bg-transparent gap-8 border-b rounded-none w-full justify-start">{DATA.map((feature) => (<TabsTrigger key={feature.id} value={feature.id} className="pb-4 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent text-xl font-bold italic uppercase tracking-widest">{feature.title}</TabsTrigger>))}</TabsList></div>
           
           {/* Immersive content presentation */}
           <div className="relative overflow-hidden">
             {DATA.map((feature) => (
                <TabsContent key={feature.id} value={feature.id} className="animate-in fade-in slide-in-from-bottom-10 duration-1000">
                   <div className="grid lg:grid-cols-2 gap-12 bg-accent/20 p-12 rounded-[3.5rem] border shadow-2xl items-center">
                      <div className="flex flex-col gap-6">
                         <div className="size-16 rounded-[1.25rem] bg-black grid place-items-center shadow-xl"><feature.icon className="size-8" /></div>
                         <h3 className="text-3xl font-black italic tracking-tighter uppercase leading-none">{feature.title}</h3>
                         <p className="text-xl text-muted-foreground italic font-medium leading-relaxed">{feature.description}</p>
                      </div>
                      <img src={feature.image} className="aspect-video w-full rounded-[2.5rem] object-cover border-8 border-white shadow-3xl" />
                   </div>
                </TabsContent>
             ))}
           </div>
        </Tabs>
      </div>
    </section>
  );
};

export { Feature186 };
```
