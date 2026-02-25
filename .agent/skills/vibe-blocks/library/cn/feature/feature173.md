# Feature 173

## Metadata
- **Category**: Feature
- **Objective**: Post-modern analytical section focusing on high-contrast numerical metrics and specialized color gradients.
- **Use Case**: Master "Results" sections, comparison blocks (e.g. "vs Jira"), or executive metric dashboards.
- **Visual Style**: "Post-Modern Analytical Bento" aesthetic.
    - Header: Dynamic split layout between a massive `text-5xl` summary and a specialized `self-end` descriptive block to create a high-end editorial cadence.
    - Metric Grid: `lg:grid-cols-3` staggered grid containing customized `[aspect-ratio:3.8/5]` vertical bento cards.
    - Card Design: High-radius `rounded-[24px]` containers featuring a specialized `bg-linear-to-b` from `muted` to a custom teal-tinted hex (`#D6E3DF`). 
    - Content: Large-scale icon (`size-10`) in the head zone. Massive `text-6xl` bold numeric metric and sub-title in the bottom-anchored zone. 
- **Interactivity**: Static illustrative layout with immersive organic colors and high-contrast typography. Features an editorial footnote at the base.

## Source Code

### `feature173.tsx`
```tsx
"use client";

import { Bell, Bug, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";

const Feature173 = ({ className }: Feature173Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container px-4">
        {/* Editorial Split Header */}
        <div className="flex gap-12 items-end justify-between max-md:flex-col mb-20">
          <h2 className="flex-1 text-4xl font-extrabold italic tracking-tighter uppercase sm:text-6xl lg:text-7xl leading-none">Tailor made for product teams</h2>
          <p className="flex-1 text-xl text-muted-foreground italic font-medium leading-relaxed max-w-md">Streamline is built on habits that make the best teams successful...</p>
        </div>

        {/* Immersive Metric Row */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((metric, i) => (
            <div key={i} className="relative flex aspect-[0.76] flex-col justify-between overflow-hidden rounded-[3rem] border-4 border-white/40 bg-linear-to-b from-muted to-[#D6E3DF] p-12 transition-all hover:shadow-2xl hover:-translate-y-2 dark:to-[#2A3633]">
              <div className="flex items-center justify-start"><metric.icon className="size-12 text-primary" strokeWidth={1.5} /></div>
              <div className="space-y-2">
                 <div className="text-7xl font-black italic tracking-tighter uppercase leading-none">{metric.value}</div>
                 <div className="text-2xl font-bold italic uppercase tracking-widest text-primary/60">{metric.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote Stage */}
        <div className="mt-12 text-end text-sm text-muted-foreground/60 italic font-mono uppercase tracking-widest leading-loose">*average increase in comparison to standards.</div>
      </div>
    </section>
  );
};

export { Feature173 };
```
