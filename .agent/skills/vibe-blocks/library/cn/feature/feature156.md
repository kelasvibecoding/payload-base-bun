# Feature 156

## Metadata
- **Category**: Feature
- **Objective**: Immersive patterned-stage Tabs interface for deep technical product explorations.
- **Use Case**: Primary "Product Capabilities" walkthroughs, engineering platform discovery, or modular service explainers.
- **Visual Style**: "Patterned Stage Discovery" aesthetic. 
    - Background: High-complexity `linear-gradient` grid pattern (`2rem_2rem`) with a large radial mask at 50% 50% to focus the eye. Massive `text-7xl` centered title.
    - Interaction Zone: Master `Tabs` stage. `TabsContent` features a `h-[480px]` relative container with `backdrop-blur-sm` and custom `bg-muted` stage housing high-precision technical visualizations.
    - TabsList: Horizontal grid (`lg:grid-cols-3`) of architectural `TabsTrigger` cards. Each features a custom numeric pill (`bg-primary/10`), bold `text-xl` title, and descriptive `text-pretty` summary.
- **Interactivity**: Fully interactive React component utilizing state-based Tab transitions. Smooth background and border-color transitions on triggers.

## Source Code

### `feature156.tsx`
```tsx
"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Feature156 = ({ className }: Feature156Props) => {
  const [cardNumber, setCardNumber] = useState(0);

  return (
    <section className={cn("relative overflow-hidden py-32", className)}>
      {/* Structural Grid Background Overlay */}
      <div className="absolute inset-0 z-[-10]">
        <div className="absolute inset-0 size-full bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_1000px_at_50%_50%,transparent,white)]" />
      </div>

      <div className="relative container">
        {/* Typographic Stage */}
        <div className="mb-20 flex flex-col items-center">
          <h1 className="max-w-4xl text-center text-4xl font-extrabold italic tracking-tighter uppercase md:text-7xl lg:text-8xl leading-none">Build better software</h1>
        </div>
        
        <Tabs defaultValue="0" className="space-y-20">
          {/* Massive Visualization Stage */}
          <div className="relative flex h-[500px] items-center justify-center overflow-hidden rounded-[2.5rem] bg-muted/40 backdrop-blur-md border border-white/10 shadow-3xl">
            {integrations.map((item, index) => (
              <TabsContent value={index.toString()} key={index} className="absolute inset-0 size-full animate-in fade-in slide-in-from-bottom-5">
                <div className="flex size-full items-center justify-center p-12">
                  <img src={item.image} className="max-h-full max-w-full drop-shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" title="feature stage visualization" />
                </div>
              </TabsContent>
            ))}
          </div>
          
          {/* Card-Style Trigger Grid */}
          <TabsList className="grid h-full w-full grid-cols-1 gap-8 bg-transparent p-0 lg:grid-cols-3">
            {integrations.map((item, index) => (
              <TabsTrigger key={index} value={index.toString()} className="group flex flex-col items-start rounded-3xl border bg-background/50 p-10 shadow-2xl transition-all hover:bg-muted/80 data-[state=active]:border-primary data-[state=active]:bg-muted/40" onClick={() => setCardNumber(index)}>
                <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-primary/10 font-black italic text-primary group-hover:bg-primary group-hover:text-white transition-all">0{index + 1}</div>
                <h3 className="mb-4 text-2xl font-bold italic uppercase tracking-tighter">{item.title}</h3>
                <p className="text-left text-sm text-muted-foreground italic font-medium leading-relaxed">{item.description}</p>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </section>
  );
};

export { Feature156 };
```
