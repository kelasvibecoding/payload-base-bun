# Feature 144

## Metadata
- **Category**: Feature
- **Objective**: High-density modular card group for structured product capability overviews.
- **Use Case**: Primary "Capabilities" section, deep feature tours, or platform service directories.
- **Visual Style**: "Modular Narrative Cards" aesthetic. Symmetrical layout combining multi-scale modules.
    - Zone 1 (Wide Header): Centered `text-4xl` summary.
    - Zone 2 (Master Card): Massive full-width `Card` with `md:flex-row` split. Features large `text-3xl` header vs a horizontal `max-h-80` image.
    - Zone 3 (Sub Grid): `md:flex-row` grid of two vertical cards. Each features a top-aligned image followed by large narrative text and a prominent footer `Badge`.
- **Interactivity**: Static illustrative layout with polished structural clarity.

## Source Code

### `feature144.tsx`
```tsx
"use client";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Feature144 = ({ className }: Feature144Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        {/* Leading Header Module */}
        <div className="text-center pb-20">
           <h2 className="text-4xl font-extrabold italic tracking-tight uppercase">Build with UI blocks</h2>
           <p className="mt-4 text-center text-xl text-muted-foreground italic font-medium">Lorem ipsum...</p>
        </div>
        
        {/* Master Row Card */}
        <Card className="mt-20 flex flex-col gap-6 p-10 md:flex-row md:gap-12 shadow-inner border hover:shadow-2xl transition-all group overflow-hidden">
          <div className="flex w-full flex-col justify-between">
            <h6 className="text-2xl md:text-4xl font-bold tracking-tighter italic uppercase leading-tight">Expertly Crafted components...</h6>
            <Badge variant="outline" className="mt-8 px-4 py-2 uppercase font-mono tracking-widest bg-muted">Core Module</Badge>
          </div>
          <div className="w-full h-full">
            <img src="..." className="max-h-80 w-full rounded-2xl object-cover shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700" title="feature placeholder" />
          </div>
        </Card>
        
        {/* Detailed Grid Row ... md:grid-cols-2 Cards ... */}
      </div>
    </section>
  );
};

export { Feature144 };
```
