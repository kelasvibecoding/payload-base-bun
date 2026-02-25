# Feature 190

## Metadata
- **Category**: Feature
- **Objective**: High-density feature index grid for rapid capability overview.
- **Use Case**: Master "Features" landing sections, service directories, or platform capability indices.
- **Visual Style**: "Structural Capability Index" aesthetic. Centered header with bold `text-4xl` headers and a high-legibility descriptive lead.
    - Grid: High-density `lg:grid-cols-3` grid focused on organizational efficiency.
    - Card Design: Minimalist `rounded-none border-b` modular cards. Horizontal layout. 
    - Content: Leading `h-16 rounded-md` photographic icon acts as the visual anchor (`bg-muted p-2`). Right side houses bold `text-md` titles and specialized `text-xs` muted descriptions. 
    - Conversion: Bottom-anchored conversion `Button` in `secondary` variant to "Explore all features".
- **Interactivity**: Static illustrative layout with immersive professional structural cadence and clean utility hover-states.

## Source Code

### `feature190.tsx`
```tsx
"use client";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Feature190 = ({ className }: Feature190Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        {/* Leading Centered Stage */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl font-extrabold italic tracking-tighter uppercase sm:text-6xl mb-6">Features at a glance</h2>
          <p className="max-w-4xl text-xl text-muted-foreground italic font-medium leading-relaxed">Discover our comprehensive suite of features designed to streamline your workflow...</p>
        </div>

        {/* Technical Registry Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t">
          {DATA.map((feature) => (
            <Card key={feature.id} className="group rounded-none border-0 border-b border-muted bg-transparent p-10 flex items-center shadow-none hover:bg-accent/10 transition-colors">
              <a href="#" className="shrink-0"><img src={feature.imageUrl} className="mr-6 size-16 rounded-2xl bg-muted border shadow-inner p-3 transition-transform group-hover:scale-110" /></a>
              <div className="flex-1">
                <h3 className="text-xl font-bold italic uppercase tracking-widest group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-sm text-muted-foreground italic font-medium leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Global Conversion Row */}
        <div className="mt-16 text-center">
          <Button variant="secondary" size="lg" className="rounded-full px-12 py-7 font-black italic tracking-widest uppercase shadow-2xl">Explore all features</Button>
        </div>
      </div>
    </section>
  );
};

export { Feature190 };
```
