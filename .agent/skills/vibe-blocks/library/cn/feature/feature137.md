# Feature 137

## Metadata
- **Category**: Feature
- **Objective**: Multi-format values showcase combining visual cards and an alternating list.
- **Use Case**: "Core Principles" platform sections, company culture explainers, or mission-driven service blocks.
- **Visual Style**: "Narrative Value Stage" aesthetic. Two distinct zones:
    - Zone 1 (Card Grid): `sm:grid-cols-2` grid of `rounded-2xl bg-muted` cards. Top-anchored image placeholders followed by large `text-2xl` headings and padded summaries.
    - Zone 2 (Alternating List): A clean vertical list of items. Features alternating `bg-muted` backgrounds for visual separation. Each item combines a prominent leading icon (`InfinityIcon`, `Zap`), bold title, and secondary descriptive text in a responsive `sm:flex-row` split.
- **Interactivity**: Static illustrative layout with high informational hierarchy.

## Source Code

### `feature137.tsx`
```tsx
"use client";

import { Infinity as InfinityIcon, Laptop, Zap, ZoomIn } from "lucide-react";

import { cn } from "@/lib/utils";

const Feature137 = ({ className }: Feature137Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container px-4">
        <h2 className="text-4xl font-extrabold italic tracking-tighter uppercase mb-12">Our Values and Principles</h2>
        
        {/* Visual Cards Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 mb-20">
          {items1.map((item) => (
            <div key={item.title} className="overflow-hidden rounded-2xl bg-muted pb-10 shadow-sm border border-white/10 group">
              <img src={item.imgSrc} className="h-40 w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              <p className="mt-8 mb-4 px-10 text-2xl font-bold italic tracking-tight">{item.title}</p>
              <p className="px-10 text-muted-foreground italic font-medium">{item.description}</p>
            </div>
          ))}
        </div>
        
        {/* Alternating List Stage */}
        <div className="flex flex-col gap-2">
          {items2.map((item, index) => (
            <div key={item.title} className={cn("flex flex-col items-center justify-between gap-4 rounded-2xl p-10 sm:flex-row sm:gap-10 transition-all hover:bg-accent/40", index % 2 !== 0 && "bg-muted border border-white/5")}>
              <div className="flex w-full gap-4 items-center">
                <span className="text-primary">{item.icon}</span>
                <p className="text-xl font-bold uppercase italic tracking-tighter">{item.title}</p>
              </div>
              <p className="w-full text-muted-foreground italic font-medium">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature137 };
```
