# Feature 162

## Metadata
- **Category**: Feature
- **Objective**: Organic multi-module organic grid featuring high-radius rounded corners and asymmetric reveals.
- **Use Case**: Primary "Product Use Case" blocks, high-end agency portfolios, or creative "Explore" sections.
- **Visual Style**: "Organic Bento Collection" aesthetic. High-radius `rounded-[36px]` corners on all cards and containers to create a fluid, approachable design language.
    - Layout: Full-width top row and 50/50 bottom split.
    - Module 1 (Master): Long-form horizontal block. Split between detailed leading text and a large asymmetric photographic reveal with specialized `rounded-tl/rounded-br` masking.
    - Module 2 (Lower Left): Vertical block with top-aligned narrative and full photographic base.
    - Module 3 (Lower Right): Pure large-scale photographic billboard.
- **Interactivity**: Static illustrative layout with sophisticated structural balance and organic curves.

## Source Code

### `feature162.tsx`
```tsx
"use client";

import { cn } from "@/lib/utils";

const Feature162 = ({ className }: Feature162Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container px-4">
        {/* Organic Master Block */}
        <div className="mb-8 flex flex-col items-center gap-16 rounded-[40px] border bg-accent/5 pt-16 pl-16 md:flex-row overflow-hidden shadow-2xl">
          <div className="max-w-md pb-16">
            <h6 className="text-2xl font-bold italic tracking-tighter italic uppercase text-primary mb-4">Connected to data</h6>
            <p className="text-xl text-muted-foreground italic font-medium leading-relaxed pr-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, cum!</p>
          </div>
          <div className="w-full flex-1 h-full pl-0">
             <img src="..." className="max-h-[500px] w-full rounded-tl-[40px] rounded-br-[40px] object-cover object-bottom border-l-4 border-t-4 border-white/20 shadow-[-20px_-20px_60px_-15px_rgba(0,0,0,0.3)]" />
          </div>
        </div>
        
        {/* Bento Split Row */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Vertical Split Module */}
          <div className="flex flex-col rounded-[40px] border bg-card overflow-hidden shadow-xl hover:shadow-2xl transition-all">
            <div className="p-12 text-xl italic font-medium">
               <span className="font-extrabold uppercase text-primary block mb-2 tracking-widest text-sm">Versatility</span>
               Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </div>
            <div className="flex-1 mt-auto">
               <img src="..." className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
            </div>
          </div>
          
          {/* Pure Visual Module */}
          <div className="rounded-[40px] overflow-hidden border shadow-xl hover:shadow-2xl transition-all">
            <img src="..." className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105" title="contextual visualization" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature162 };
```
