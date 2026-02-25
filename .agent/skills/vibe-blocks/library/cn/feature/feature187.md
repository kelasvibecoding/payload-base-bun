# Feature 187

## Metadata
- **Category**: Feature
- **Objective**: Stylized step-by-step roadmap section featuring connected "Timeline Logic" separators.
- **Use Case**: Master "Success Roadmap" sections, onboarding checklists, or "How we Work" process explainers.
- **Visual Style**: "Technical Process Roadmap" aesthetic. 
    - Grid: Symmetrical `lg:grid-cols-3` row focusing on a 3-step successful progression. 
    - Step Item: features a specialized "Visual Connector" system. Centralized circular anchors (`bg-background border-4`) house the bold step ID. Vertical (mobile) or horizontal (desktop) `bg-muted/50` lines act as connectors.
    - Final State Logic: The final connector utilizes a specialized `bg-linear-to-r` fade to `white` to indicate process completion. Bold headers and high-contrast primary text follow.
- **Interactivity**: Static illustrative roadmap with high-quality structural logic and technical polish.

## Source Code

### `feature187.tsx`
```tsx
"use client";

import React from "react";

import { cn } from "@/lib/utils";

const Feature187 = ({ className }: Feature187Props) => {
  return (
    <section className={cn("py-32 bg-secondary/5", className)}>
      <div className="container px-4">
        {/* Editorial Lead Stage */}
        <div className="mb-24 flex flex-col items-center text-center">
          <h2 className="text-4xl font-extrabold italic tracking-tighter uppercase sm:text-6xl lg:text-7xl leading-none mb-6">Achieve Success with Ease</h2>
          <p className="text-xl text-muted-foreground italic font-medium leading-relaxed max-w-2xl">Follow our proven steps to streamline your workflow...</p>
        </div>

        {/* Technical Roadmap Grid */}
        <div className="grid gap-px lg:grid-cols-3 max-w-6xl mx-auto">
          {DATA.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center text-center p-12 group">
               {/* Timeline Connector Logic */}
               <div className="relative mb-8 w-full flex justify-center">
                  <div className={cn("absolute top-1/2 -z-10 h-1 w-full -translate-y-1/2 bg-muted transition-all group-hover:bg-primary/20", index === DATA.length - 1 && "bg-linear-to-r from-muted to-transparent")} />
                  <div className="grid size-16 place-items-center rounded-full border-4 border-background bg-card text-2xl font-black italic shadow-xl group-hover:border-primary group-hover:text-primary transition-all">
                    {step.id}
                  </div>
               </div>
               
               {/* Narrative Block */}
               <h3 className="text-2xl font-bold italic uppercase tracking-widest mb-4">{step.title}</h3>
               <p className="text-muted-foreground italic font-medium leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature187 };
```
