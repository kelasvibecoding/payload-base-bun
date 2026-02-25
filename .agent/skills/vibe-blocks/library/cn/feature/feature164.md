# Feature 164

## Metadata
- **Category**: Feature
- **Objective**: Immersive reporting section combining interactive visual tabs with detailed technical summaries.
- **Use Case**: Master "Data Insights" landing sections, financial reporting tools, or "Key Performance" blocks.
- **Visual Style**: "Real-Time Utility Split" aesthetic. Symmetrical `lg:flex-row` split with high structural focus.
    - Left (Interaction): Vertical `Tabs` module. Features a square `aspect-[1]` photographic showcase container (`rounded-3xl`) and a centered horizontal `TabsList` using pill-style triggers for rapid metric switching.
    - Right (Narrative): Bold authority block featuring massive `text-5xl` typography with a specialized `text-muted-foreground/50` "Real-time" leading gradient-style accent. Detailed body text followed by a large primary `Button`.
- **Interactivity**: Fully interactive React component. State-synced `cardNumber` transitions the background visualization assets when clicking the tab triggers. High structural polish.

## Source Code

### `feature164.tsx`
```tsx
"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Feature164 = ({ className }: Feature164Props) => {
  const [cardNumber, setCardNumber] = useState(0);

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="flex flex-col items-center justify-between lg:flex-row gap-20">
          {/* Data Stage (Left) */}
          <Tabs className="lg:w-1/2" defaultValue="0">
             <div className="mb-10 overflow-hidden rounded-[2.5rem] border shadow-2xl bg-muted/20">
                {integrations.map((item, index) => (
                  <TabsContent key={index} value={index.toString()} className="m-0 animate-in fade-in duration-700">
                    <img src={item.image} className="aspect-square w-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 group" />
                  </TabsContent>
                ))}
             </div>
             <TabsList className="flex items-center justify-center gap-3 bg-transparent">
                {integrations.map((item, index) => (
                  <TabsTrigger key={index} value={index.toString()} className={cn("rounded-full border-2 px-6 py-3 font-bold uppercase tracking-widest text-xs transition-all", index === cardNumber ? "border-primary bg-primary text-white" : "border-muted group-hover:border-primary")} onClick={() => setCardNumber(index)}>{item.title}</TabsTrigger>
                ))}
             </TabsList>
          </Tabs>
          
          {/* Narrative Focus (Right) */}
          <div className="flex flex-col items-start lg:w-1/2 px-4">
             <h1 className="mb-8 text-4xl font-extrabold italic tracking-tighter uppercase sm:text-6xl leading-none">
                <span className="text-muted-foreground/30 block mb-2">Real-time data.</span> Dynamic reporting.
             </h1>
             <p className="mb-10 text-xl text-muted-foreground italic font-medium leading-relaxed max-w-md">Quickly create reports to get deeper insights...</p>
             <Button className="rounded-full px-10 py-6 font-bold shadow-2xl">Learn more</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature164 };
```
