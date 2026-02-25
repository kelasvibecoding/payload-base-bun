# Feature 166

## Metadata
- **Category**: Feature
- **Objective**: Robust quad-split architectural grid for detailed technical capability overviews.
- **Use Case**: Primary "Platform Features" directory, detailed engineering walkthroughs, or agency "Service Offerings" blocks.
- **Visual Style**: "Quad-Split Technical Grid" aesthetic. 
    - Header: Broad centered zone featuring massive `text-5xl` summary text and centered matching description.
    - Grid: High-weight container split into 4 modules using a `2x2` alternating flex row strategy. 
    - Row 1: `3/5` (Left) vs `2/5` (Right) split.
    - Row 2: `2/5` (Left) vs `3/5` (Right) split (Mirrored).
    - Design: Each module contains a bold `text-xl` title, muted description, and large horizontal `aspect-[1.5]` photographic placeholders with high-res visualizations. 
- **Interactivity**: Static illustrative layout with strong structural weight and corporate polish.

## Source Code

### `feature166.tsx`
```tsx
"use client";

import { cn } from "@/lib/utils";

const Feature166 = ({ className, title, description, feature1, feature2, feature3, feature4 }: Feature166Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        {/* Leading Header Stage */}
        <div className="mb-24 flex flex-col items-center gap-6 text-center">
          <h1 className="text-4xl font-extrabold italic tracking-tighter uppercase lg:text-7xl leading-none">{title}</h1>
          <p className="text-lg text-muted-foreground italic font-medium max-w-4xl">{description}</p>
        </div>
        
        {/* Symmetrical Feature Artifact */}
        <div className="relative border-2 border-muted-foreground/10 shadow-3xl bg-card/5 overflow-hidden">
           {/* Section 1: Alternating Tiers ... Row 1 Wide Left ... */}
           <div className="flex flex-col lg:flex-row border-b border-muted-foreground/10">
              <div className="flex flex-col justify-between p-12 lg:w-3/5 lg:border-r group transition-all hover:bg-accent/10">
                 <div><h2 className="text-2xl font-bold italic tracking-tighter uppercase mb-2">{feature1.title}</h2><p className="text-muted-foreground italic font-medium">{feature1.description}</p></div>
                 <img src={feature1.image} className="mt-12 aspect-[2.4] w-full rounded-2xl object-cover shadow-2xl border grayscale group-hover:grayscale-0 transition-all duration-1000" title="capability preview" />
              </div>
              <div className="p-12 lg:w-2/5 group transition-all hover:bg-accent/10 flex flex-col justify-between">
                 <div><h2 className="text-2xl font-bold italic tracking-tighter uppercase mb-2">{feature2.title}</h2><p className="text-muted-foreground italic font-medium">{feature2.description}</p></div>
                 <img src={feature2.image} className="mt-12 aspect-square w-full rounded-2xl object-cover shadow-2xl border grayscale group-hover:grayscale-0 transition-all duration-1000" />
              </div>
           </div>
           {/* Row 2: Wide Right ... */}
        </div>
      </div>
    </section>
  );
};

export { Feature166 };
```
