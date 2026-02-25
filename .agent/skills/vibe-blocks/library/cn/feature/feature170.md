# Feature 170

## Metadata
- **Category**: Feature
- **Objective**: Minimalist editorial grid showcase for corporate values or guiding principles.
- **Use Case**: "Core Values" sections, "Our Mission" blocks, or cultural overview pages.
- **Visual Style**: "Editorial Principles Grid" aesthetic. 
    - Header: Leading `Badge` with specialized "Heart" icon. Massive `text-6xl` bold title. Narrative sub-block features a stylized inline "Learn More" link with a leading underline and an `ArrowRight`.
    - Grid: High-legibility `lg:grid-cols-3` utility row. 
    - Item Design: Features a leading `lucide-react` icon aligned to the top-left of a bold `text-2xl` header. Specialized `tracking-[-0.96px]` on titles creates an authoritative typographic weight. Clean `text-muted-foreground` descriptions follow.
- **Interactivity**: Static illustrative layout with high-quality typographic polish.

## Source Code

### `feature170.tsx`
```tsx
"use client";

import { ArrowRight, Heart, Lightbulb, Shield, UserPen } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";

const Feature170 = ({ className }: Feature170Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        {/* Leading Editorial Stage */}
        <div className="flex flex-col gap-8 pb-16 border-b border-muted-foreground/10">
          <Badge variant="outline" className="w-fit gap-2 bg-primary/10 px-4 py-2 font-mono uppercase tracking-widest border-primary/20 text-primary">
            <Heart className="size-4" /> <span>We live by</span>
          </Badge>
          <h2 className="text-4xl font-extrabold italic tracking-tighter uppercase sm:text-6xl lg:text-7xl">Our Core Values</h2>
          <div className="flex flex-col gap-4">
            <p className="max-w-2xl text-xl text-muted-foreground italic font-medium leading-relaxed">We believe in principles that guide our growth...</p>
            <p className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest cursor-pointer group active:scale-95 transition-transform">
              <span className="border-b-2 border-primary">Learn More</span>
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-2" />
            </p>
          </div>
        </div>

        {/* Informational Grid Row */}
        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <div className="flex gap-4 group" key={index}>
              <span className="mt-1 size-6 text-primary"><value.icon strokeWidth={1.5} /></span>
              <div>
                <h3 className="text-2xl font-bold italic tracking-tighter uppercase mb-4 leading-none group-hover:text-primary transition-colors">{value.title}</h3>
                <p className="text-muted-foreground italic font-medium leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature170 };
```
