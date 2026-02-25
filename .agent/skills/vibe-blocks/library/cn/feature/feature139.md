# Feature 139

## Metadata
- **Category**: Feature
- **Objective**: Symmetrical authority section combining feature narrative with a multi-metric proof grid.
- **Use Case**: Primary "Value Proposition" blocks, customer success pages, or modular business summaries.
- **Visual Style**: "Evidence-Driven Authority" aesthetic. Unified container using `rounded-lg border bg-card` with `p-10`. 
    - Zone 1 (Split Hero): `md:flex-row`. Left: narrative block with `Badge`, massive heading, and description. Right: `max-h-[420px]` horizontal image.
    - Zone 2 (Metric Grid): `md:grid-cols-4` grid of high-contrast stats. Features massive `text-4xl text-muted-foreground` numbers (`400+`, etc.), bold tool titles, and detailed secondary summaries. High informational weight.
- **Interactivity**: Static illustrative layout with polished typography.

## Source Code

### `feature139.tsx`
```tsx
"use client";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";

const Feature139 = ({ className }: Feature139Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="rounded-3xl border bg-card p-10 shadow-2xl overflow-hidden">
          {/* Top Stage */}
          <div className="flex w-full flex-col items-center justify-between gap-12 md:flex-row pb-20 border-b">
            <div className="w-full max-w-md">
              <Badge variant="outline" className="px-4 py-2 font-mono uppercase tracking-widest mb-4">The badge</Badge>
              <h2 className="text-3xl font-extrabold lg:text-4xl italic tracking-tighter uppercase mb-6">Build with UI blocks</h2>
              <p className="text-muted-foreground italic font-medium">Lorem ipsum...</p>
            </div>
            <div className="w-full max-w-lg">
              <img src="..." className="max-h-[420px] w-full rounded-2xl object-cover shadow-xl border grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
          
          {/* Bottom Stats */}
          <div className="mt-20 grid grid-cols-1 justify-between gap-12 sm:grid-cols-2 md:grid-cols-4 px-4">
            {items.map((item) => (
              <div key={item.title} className="group">
                <p className="text-5xl font-black italic tracking-tighter text-primary/80 group-hover:text-primary transition-colors">{item.number}+</p>
                <h6 className="mt-5 mb-3 font-bold uppercase italic tracking-widest text-sm">{item.title}</h6>
                <p className="text-sm text-muted-foreground italic font-medium leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature139 };
```
