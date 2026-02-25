# Feature 160

## Metadata
- **Category**: Feature
- **Objective**: Interactive in-container Tabs showcase for high-fidelity platform tours.
- **Use Case**: Master "CRM Tour" sections, primary "How it Works" blocks, or persona-based product discovery.
- **Visual Style**: "Integrated Dashboard Reveal" aesthetic. Massive `text-[52px]` bold head with broad leading text.
    - Container: Unified `rounded-3xl border` stage containing the `Tabs` logic.
    - TabsList: High-density `lg:grid-cols-4` grid. Each tab is a large vertical clickable area with a leading light-weight icon (`strokeWidth={1}`), bold header, and descriptive proof block.
    - TabsContent (Stage): Features a massive bottom-anchored image area with `rounded-t-[28px]` and `object-bottom` alignment to simulate a partial dashboard screen capture that seamlessly integrates with the card base.
- **Interactivity**: Fully interactive React component utilizing `group-hover` style opacity transitions (`opacity-50` to `opacity-100`) on the tab triggers. High structural polish.

## Source Code

### `feature160.tsx`
```tsx
"use client";

import { Code, GitBranch, List, WandSparkles } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Feature160 = ({ className }: Feature160Props) => {
  const [cardNumber, setCardNumber] = useState(0);

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        {/* Authority Header Area */}
        <div className="mb-20 max-w-xl">
          <h1 className="mb-6 text-4xl font-extrabold italic tracking-tighter uppercase md:text-6xl">A CRM for your vision.</h1>
          <h3 className="text-2xl text-muted-foreground italic font-medium leading-relaxed">Lorem ipsum dolor sit amet...</h3>
        </div>
        
        {/* Unified Interactive Tabs Module */}
        <Tabs className="rounded-[2.5rem] border bg-accent/5 px-6 pt-10 sm:px-12 sm:pt-16 shadow-2xl" defaultValue="0">
          <TabsList className="mb-20 grid h-full grid-cols-1 gap-12 bg-transparent p-0 md:grid-cols-2 lg:grid-cols-4">
            {integrations.map((item, index) => (
              <TabsTrigger key={index} value={index.toString()} onClick={() => setCardNumber(index)} className={cn("block cursor-pointer border-0 text-left whitespace-normal transition-all duration-500 hover:opacity-100", index === cardNumber ? "opacity-100" : "opacity-40")}>
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-primary">{item.logo}</span>
                  <h4 className="text-lg font-bold italic uppercase tracking-widest">{item.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground italic font-medium leading-relaxed">{item.description}</p>
              </TabsTrigger>
            ))}
          </TabsList>
          {/* Dashboard Stage reveal */}
          <div className="rounded-t-[2rem] p-1 pb-0 overflow-hidden bg-background/40">
            {integrations.map((item, index) => (
              <TabsContent value={index.toString()} key={index} className="m-0 animate-in fade-in slide-in-from-bottom-10 duration-700">
                <img src={item.image} className="max-h-[450px] w-full rounded-t-[1.5rem] object-cover object-bottom border-x border-t shadow-3xl grayscale group-hover:grayscale-0 transition-opacity" />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export { Feature160 };
```
