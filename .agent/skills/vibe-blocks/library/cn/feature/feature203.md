# Feature 203

## Metadata
- **Category**: Feature
- **Objective**: Detailed enterprise feature registry grid focusing on capability depth and structural proof.
- **Use Case**: Master "Product Capabilities" landing rows, technical service directories, or comparative feature indices.
- **Visual Style**: "Structural Utility Registry" aesthetic. Symmetrical `md:grid-cols-2` grid layout.
    - Card Architecture: Technical modular containers utilizing `bg-muted` for structural separation.
    - Header Stage: Circular `bg-primary` icon anchors paired with bold `text-2xl` headers and descriptive sub-text.
    - Feature Registry: Focused vertical list of capabilities (`text-sm`) utilizing `Separator` lines for high-fidelity categorization. Features primary-colored `CheckIcon` indicators for authoritative proof.
- **Interactivity**: Static illustrative layout with immersive professional structural cadence and clean utility polish.

## Source Code

### `feature203.tsx`
```tsx
"use client";

import { BoxesIcon, ShieldCheckIcon, PuzzleIcon, HeadphonesIcon, CheckIcon } from "lucide-react";
import { Fragment } from "react";

import { cn } from "@/lib/utils";

import { Separator } from "@/components/ui/separator";

const Feature203 = ({ className }: Feature203Props) => {
  return (
    <section className={cn("py-32 bg-background", className)}>
      <div className="container">
        {/* Technical Registry Grid */}
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          {cards.map((card, idx) => (
            <div key={idx} className="flex flex-col gap-10 rounded-[2.5rem] bg-muted/30 border-2 p-12 transition-all hover:bg-muted/50 hover:translate-y-[-4px] shadow-xl">
               {/* Descriptive Hub */}
               <div className="flex flex-col gap-6">
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-primary shadow-lg"><card.icon className="size-7 text-background" /></span>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-3xl font-black italic tracking-tighter uppercase leading-none">{card.title}</h3>
                    <p className="text-lg text-muted-foreground italic font-medium leading-relaxed">{card.description}</p>
                  </div>
               </div>

               {/* Proofing Registry */}
               <ul className="flex flex-col gap-4">
                  {card.features.map((feature, fIdx) => (
                    <Fragment key={fIdx}>
                      <Separator className="bg-primary/10" />
                      <li className="flex items-center gap-4 text-md font-bold italic uppercase tracking-widest text-muted-foreground">
                        <CheckIcon className="size-5 shrink-0 text-primary" />{feature}
                      </li>
                    </Fragment>
                  ))}
               </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature203 };
```
