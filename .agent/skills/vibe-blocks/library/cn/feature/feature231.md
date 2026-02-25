# Feature 231

## Metadata
- **Category**: Feature
- **Objective**: Symmetrical discovery section featuring massive typographic authority and a numeric informational registry.
- **Use Case**: Primary "Technology Stack" landing rows, executive platform explainers, or modular product walkthroughs.
- **Visual Style**: "Authoritative Tech Discovery" aesthetic. Symmetrical `lg:grid-cols-2` horizontal architecture focusing on high-contrast white-space.
    - Editorial Master (Left): features massive `text-7xl` bold headers utilizing secondary `text-primary` spans to highlight core technology markers (Shadcn, Tailwind). Narrative Hub focuses on high-legibility descriptive leads and dual-action conversion buttons.
    - Registry Grid (Right): Symmetrical `sm:grid-cols-2` grid layout focused on structured information density. 
    - Item Design: Informational `Card` modules utilizing localized primary-colored numeric anchors (`index + 1`), bold headers, and focused descriptive sub-text. 
    - Polish: features architectural `border-t-2` separators and professional structural cadence.
- **Interactivity**: Static illustrative layout with immersive branding-focused structural design and polished utility actions.

## Source Code

### `feature231.tsx`
```tsx
"use client";

import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

const Feature231 = ({ className }: Feature231Props) => {
  return (
    <section className={cn("py-32 bg-background", className)}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          {/* Typographic Authority Stage */}
          <div className="space-y-12">
            <h1 className="text-5xl lg:text-8xl font-black italic tracking-tighter uppercase leading-[0.85]">
              <span className="block text-muted-foreground/50">Blocks built with</span>
              <span className="block text-primary">Shadcn</span>
              <span className="block">& Tailwind.</span>
            </h1>
            <div className="w-40 h-2 bg-primary/20 rounded-full" />
            <p className="text-2xl text-muted-foreground italic font-medium max-w-md">Create stunning web experiences with our premium components...</p>
            <div className="flex gap-4">
              <Button size="lg" className="rounded-full px-12 py-8 font-black italic uppercase tracking-widest text-lg bg-primary shadow-2xl">Get Started <ArrowRight className="ml-2 size-6" /></Button>
              <Button size="lg" variant="outline" className="rounded-full px-12 py-8 font-black italic uppercase tracking-widest text-lg">Learn More</Button>
            </div>
          </div>

          {/* Numeric Registry Grid */}
          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="group p-8 rounded-[2.5rem] border-4 border-white bg-accent/5 transition-all hover:bg-background hover:shadow-3xl hover:translate-y-[-8px]">
                <div className="size-12 rounded-2xl bg-primary text-white grid place-items-center mb-8 font-black italic text-xl shadow-xl transition-all group-hover:rotate-12">{idx + 1}</div>
                <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-4">{feature.title}</h3>
                <p className="text-md text-muted-foreground italic font-medium leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
```
