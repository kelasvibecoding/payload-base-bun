# Feature 189

## Metadata
- **Category**: Feature
- **Objective**: Stylized editorial split section featuring a high-complexity "Fan Stack" visual presentation.
- **Use Case**: Primary "Value Proposition" blocks, transformation-focused landing sections, or company "About Us" editorial rows.
- **Visual Style**: "Editorial Fan-Stack" aesthetic. Symmetrical `lg:grid-cols-2` split. 
    - Visual Pane (Left): features a sophisticated three-element photographic stack. Middle image acts as the primary visual anchor (`z-10`, elevated h-size). Side images are absolute-positioned with `rotate-12` and `-rotate-12` offsets and high-intensity shadows to create a high-end "magazine scatter" visual cadence.
    - Narrative Pane (Right): features bold `text-2xl` headers and a detailed vertical list of feature values. Bullet items utilize bold primary headers and high-contrast muted descriptions.
    - Conversion: Bottom-anchored conversion `Button` featuring a stylized `ArrowRight`.
- **Interactivity**: Static illustrative layout with immersive visual storytelling and polished editorial typography.

## Source Code

### `feature189.tsx`
```tsx
"use client";

import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

const Feature189 = ({ className }: Feature189Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="grid items-center gap-24 lg:grid-cols-2">
          {/* Immersive Photo Scatter Stack */}
          <div className="relative h-[480px]">
            {/* Elevation Node (Center) */}
            <div className="relative top-0 z-10 mx-auto w-[60%] sm:w-[50%] transition-transform hover:scale-105 duration-1000">
              <img src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg" className="h-[350px] rounded-[2.5rem] object-cover border-8 border-white shadow-3xl" />
            </div>
            {/* Offset Nodes (Left/Right) */}
            <div className="absolute top-12 left-0 z-0 w-[55%] -rotate-12 opacity-80 transition-transform hover:-translate-x-4 duration-700">
              <img src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg" className="h-[300px] rounded-[2.5rem] object-cover border-8 border-white shadow-2xl" />
            </div>
            <div className="absolute top-12 right-0 z-20 w-[55%] rotate-12 transition-transform hover:translate-x-4 duration-700">
              <img src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg" className="h-[300px] rounded-[2.5rem] object-cover border-8 border-white shadow-2xl" />
            </div>
          </div>

          {/* Detailed Editorial Narrative */}
          <div className="max-w-2xl">
            <h2 className="text-4xl font-extrabold italic tracking-tighter uppercase sm:text-5xl leading-tight mb-12">Transform your business</h2>
            <div className="space-y-12">
               {/* Modular list items ... */}
               <div className="group">
                  <h4 className="text-2xl font-black italic uppercase tracking-widest text-primary mb-2">Boost productivity</h4>
                  <p className="text-lg text-muted-foreground italic font-medium leading-relaxed">Automate repetitive tasks and streamline your workflow...</p>
               </div>
            </div>
            <Button variant="secondary" className="mt-16 rounded-full px-12 py-7 font-black italic tracking-widest uppercase shadow-2xl">Learn more <ArrowRight className="ml-2 size-5" /></Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature189 };
```
