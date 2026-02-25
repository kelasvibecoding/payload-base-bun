# Feature 146

## Metadata
- **Category**: Feature
- **Objective**: Dramatic technical blueprint hero section with stylized drafting indicators and high-contrast asymmetric zones.
- **Use Case**: Master landing hero sections for high-end creative agencies, engineering-driven platforms, or "Culture & Process" walkthroughs.
- **Visual Style**: "Technical Drafting Hero" aesthetic. Massive `lg:flex-row` split header with typographic weight. Main Visual: Full-width border-framed container. Theme: "Architectural Drafting Board".
    - Drafting Elements: Features `absolute` positioned dashed lines (`border-dashed`), drafting markers, and `cross-pattern.svg` icons in every corner.
    - Layout: Two vertical tiers. Top tier is a `2/5` vs `3/5` split of high-density narrative + horizontal imagery. Bottom tier is a full-width focus block with horizontal visual alignment.
- **Interactivity**: Static illustrative layout with polished structural depth.

## Source Code

### `feature146.tsx`
```tsx
"use client";

import { cn } from "@/lib/utils";

const Feature146 = ({ className }: Feature146Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        {/* Dynamic Multi-Header */}
        <div className="mb-24 flex flex-col items-center justify-between gap-6 lg:flex-row px-4">
           <div className="text-4xl font-black md:w-1/2 lg:w-3/5 lg:text-left italic tracking-tighter uppercase">
             <h1 className="text-muted-foreground">Proven methodologies.</h1>
             <h1>A culture of innovation.</h1>
           </div>
           <div className="text-left text-lg font-medium md:w-1/2 lg:w-2/5 italic text-muted-foreground">Lorem ipsum...</div>
        </div>
        
        {/* Drafting Board Container */}
        <div className="relative flex w-full flex-col border-2 border-solid border-muted-foreground/30 shadow-2xl rounded-sm">
           {/* Section 1: Split Head ... */}
           <div className="relative flex flex-col lg:flex-row border-b border-muted-foreground/30">
              {/* Drafting Indicators ... absolute dashed lines ... */}
              <div className="flex flex-col justify-between gap-8 p-10 lg:w-2/5 lg:border-r">
                 <h2 className="font-bold italic uppercase tracking-tighter">Research & Discovery</h2>
                 <img src="..." className="aspect-video w-full rounded-md object-cover shadow-xl border grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="flex flex-col justify-between gap-8 p-10 lg:w-3/5">
                 <h2 className="font-bold italic uppercase tracking-tighter">Strategy & Execution</h2>
                 <img src="..." className="aspect-[2.4] w-full rounded-md object-cover shadow-xl border grayscale hover:grayscale-0 transition-all duration-1000" />
              </div>
           </div>
           {/* Section 2: Bottom Focus ... */}
           
           {/* Corner Cross Indicators */}
           <img src="...cross-pattern.svg" className="absolute top-[-6px] left-[-6px] w-3" />
           <img src="...cross-pattern.svg" className="absolute top-[-6px] right-[-6px] w-3" />
           {/* etc ... */}
        </div>
      </div>
    </section>
  );
};

export { Feature146 };
```
