# Feature 171

## Metadata
- **Category**: Feature
- **Objective**: Stylized technical drafting section featuring dashed-line separators and motto callouts.
- **Use Case**: Master "How we Build" hero sections, agency portfolios, or technical product "Habits" walkthroughs.
- **Visual Style**: "Technical Drafting Gallery" aesthetic. Global container is set on a `bg-secondary` immersive stage.
    - Drafting Logic: Features a leading centered `DashedLine` (`repeating-linear-gradient`) containing a specialized motto text label: "MEASURE TWICE. CUT ONCE."
    - Card Architecture: Massive unified `Card` with high-radius `rounded-2xl` corners. Interior is split using dynamic `DashedLine` components (horizontal or vertical based on viewport) to separate modular items.
    - Item Design: photographic reveal with `rounded-tl-xl` masking and a `linear-to-t` background integration. Bottom narrative row features a bold `text-xl` title and an `ArrowDownRight` interactive trigger.
- **Interactivity**: Static illustrative module with sophisticated technical structural design.

## Source Code

### `feature171.tsx`
```tsx
"use client";

import { ArrowDownRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Card, CardContent } from "@/components/ui/card";

const Feature171 = ({ className }: Feature171Props) => {
  return (
    <section className={cn("bg-secondary py-32", className)}>
      <div className="container">
        {/* Leading Drafting Motto Stage */}
        <div className="relative flex items-center justify-center mb-20">
          <DashedLine className="text-muted-foreground/30 opacity-60" />
          <span className="absolute bg-secondary px-6 font-mono text-sm font-bold uppercase tracking-[0.4em] text-muted-foreground/60 max-lg:hidden">
            MEASURE TWICE. CUT ONCE.
          </span>
        </div>

        {/* Narrative Split */}
        <div className="mx-auto mb-20 grid max-w-5xl gap-12 lg:grid-cols-2">
          <h2 className="text-4xl font-extrabold italic tracking-tighter uppercase sm:text-5xl lg:text-6xl leading-tight">Made for modern product teams</h2>
          <p className="text-xl text-muted-foreground italic font-medium leading-relaxed">Built on habits that make the best teams successful...</p>
        </div>

        {/* Massive Unified Drafting Card */}
        <Card className="overflow-hidden rounded-[2.5rem] border-0 shadow-3xl">
          <CardContent className="flex p-0 max-lg:flex-col bg-background">
            {items.map((item, i) => (
              <div key={i} className="flex flex-1 max-lg:flex-col group">
                <div className="ps-8 pt-8 lg:ps-12 lg:pt-12 flex-1 flex flex-col justify-between">
                  <div className="relative overflow-hidden rounded-tl-3xl border-l border-t shadow-inner bg-muted/20">
                    <img src={item.image} className="aspect-[1.28/1] w-full object-cover transition-transform duration-1000 group-hover:scale-105" title="tool interface" />
                    <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-60" />
                  </div>
                  <a href="#" className="flex items-center justify-between gap-4 p-10 group/link">
                    <h3 className="text-2xl font-bold italic uppercase tracking-widest">{item.title}</h3>
                    <ArrowDownRight className="size-8 text-primary transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                  </a>
                </div>
                {/* Separator artifacts */}
                {i < items.length - 1 && <div className="relative hidden lg:block"><DashedLine orientation="vertical" /></div>}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export { Feature171 };

{/* ... Internal DashedLine component ... */}
```
