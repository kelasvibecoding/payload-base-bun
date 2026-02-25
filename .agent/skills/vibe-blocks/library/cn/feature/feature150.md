# Feature 150

## Metadata
- **Category**: Feature
- **Objective**: Immersive split-action showcase with background-image reveals and high-contrast typography.
- **Use Case**: Core service category selection, persona discovery, or platform "Dual Offer" blocks.
- **Visual Style**: "Split Reveal Hero" aesthetic. Full-width stage split into two giant vertical `a` tags (`lg:grid-cols-2`). 
    - Dormant State: Clean `bg-muted-foreground/10` blocks with centered bold black text and minimalist pill buttons.
    - Active State: On hover, an absolute-positioned high-res background image transitions from `opacity-0` to `opacity-100`. Simultaneously, text colors shift to white, and primary buttons transition to transparent-ghost styles.
- **Interactivity**: Fully interactive hover-based reveal. Uses `group-hover` logic for seamless visual synchronized transitions of background opacity and text color.

## Source Code

### `feature150.tsx`
```tsx
"use client";

import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

const Feature150 = ({ className }: Feature150Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="grid min-h-[500px] grid-cols-1 gap-px bg-muted border-y lg:grid-cols-2 shadow-2xl">
        {integrations.map((item, index) => (
          <a key={index} className="relative group flex flex-col items-center justify-center p-20 cursor-pointer overflow-hidden transition-all">
             {/* Hidden reveal stage */}
             <img src={item.image} className="absolute inset-0 z-0 h-full w-full object-cover scale-110 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-1000" />
             <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-5" />

             {/* Content Overlay */}
             <div className="relative z-10 flex max-w-sm flex-col items-start gap-10">
                <div className="flex flex-col gap-4">
                   <h1 className="text-4xl font-black italic tracking-tighter uppercase group-hover:text-white transition-colors duration-500">{item.title}</h1>
                   <p className="text-xl text-muted-foreground group-hover:text-white/80 transition-colors duration-500 italic">{item.description}</p>
                </div>
                <Button variant="outline" className="rounded-full px-8 border-2 group-hover:bg-white group-hover:text-black transition-all font-bold">
                  {item.buttonTitle} <ArrowUpRight className="ml-2 size-4" />
                </Button>
             </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export { Feature150 };
```
