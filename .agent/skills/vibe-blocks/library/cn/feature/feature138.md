# Feature 138

## Metadata
- **Category**: Feature
- **Objective**: Premium alternating feature stack with high-contrast text zones and large-scale imagery.
- **Use Case**: Deep feature explorations, master landing page "Capabilities" scrolls, or high-end platform service menus.
- **Visual Style**: "Z-Pattern Detail Stack" aesthetic. Series of alternating `md:flex-row` split cards. Each card is a `rounded-2xl bg-muted` container. 
    - Text Zone: Features centered `text-2xl` titles, a thin `bg-muted-foreground` separator line, and detailed narrative text paired with a "Learn more" `MoveRight` link.
    - Image Zone: High-res `placeholder-dark.svg` assets taking the full 50% width. The stack alternates Image-Left / Image-Right to create a dynamic reading flow.
- **Interactivity**: Static illustrative layout with polished hover interaction on links.

## Source Code

### `feature138.tsx`
```tsx
"use client";

import { MoveRight } from "lucide-react";

import { cn } from "@/lib/utils";

const Feature138 = ({ className }: Feature138Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <h2 className="text-4xl font-extrabold italic tracking-tighter uppercase mb-2">Built by the best</h2>
        <p className="mt-3 text-xl font-medium text-muted-foreground mb-16 italic">Lorem ipsum...</p>
        
        {/* Grid Stack */}
        <div className="flex flex-col gap-16">
           {/* Iterative Alternating Blocks */}
           <div className="flex flex-col overflow-hidden rounded-3xl bg-muted md:flex-row border shadow-xl">
             <img src="..." className="max-h-64 w-full md:w-1/2 object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
             <div className="flex w-full flex-col justify-center gap-6 px-12 py-10 md:w-1/2">
                <h6 className="text-2xl font-bold italic tracking-tight">Proven methodologies</h6>
                <div className="h-px w-20 bg-primary opacity-50" /> {/* Highlight Separator */}
                <p className="text-muted-foreground italic">Lorem ipsum...</p>
                <a href="#" className="inline-flex items-center font-bold uppercase text-sm tracking-widest hover:text-primary transition-colors">
                  <span>Learn more</span> <MoveRight strokeWidth={3} className="ml-2 size-4" />
                </a>
             </div>
           </div>
           {/* ... block 2 (text left) ... block 3 (image left) ... */}
        </div>
      </div>
    </section>
  );
};

export { Feature138 };
```
