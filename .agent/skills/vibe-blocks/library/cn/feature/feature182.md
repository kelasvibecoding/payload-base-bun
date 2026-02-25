# Feature 182

## Metadata
- **Category**: Feature
- **Objective**: Symmetrical action-driven grid layout for product capability discovery.
- **Use Case**: Primary "Capabilities" sections, service galleries, or executive landing blocks.
- **Visual Style**: "Balanced Authority Grid" aesthetic. 
    - Header: Symmetrical centered head with bold `text-4xl` headers and high-contrast dual buttons (`Explore` vs `Get Started`) using `sm:flex-row` alignment.
    - Visual Grid: Symmetrical `lg:grid-cols-3` row of high-weight modules. 
    - Module Design: Vertical stack. Features a large-scale photographic billboard (`h-64 rounded-lg`), bold `text-xl` titles, and a specialized bottom-anchored "Technical Icon" block encased in a `border p-2` high-fidelity frame.
- **Interactivity**: Static illustrative layout with polished structural weight and professional action-focused hierarchy.

## Source Code

### `feature182.tsx`
```tsx
"use client";

import { ArrowRight, BadgeCheck, Zap } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

const Feature182 = ({ className }: Feature182Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        {/* Leading Authority Action Center */}
        <div className="text-center mb-20 px-4">
          <h2 className="mb-10 text-4xl font-extrabold italic tracking-tighter uppercase sm:text-6xl lg:text-7xl leading-none">Powerful Features</h2>
          <div className="flex flex-col gap-6 sm:flex-row justify-center">
            <Button className="rounded-full px-10 py-7 font-bold shadow-2xl text-lg">Explore Features <ArrowRight className="size-5 ml-2" /></Button>
            <Button variant="outline" className="rounded-full px-10 py-7 font-bold text-lg shadow-xl">Get Started <BadgeCheck className="size-5 ml-2 text-primary" /></Button>
          </div>
        </div>

        {/* High-Resolution Capability Grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {DATA.map((feature, index) => (
            <div key={index} className="flex flex-col group cursor-pointer transition-all hover:-translate-y-2">
              <div className="overflow-hidden rounded-[2rem] border shadow-2xl mb-8">
                 <img src={feature.image} className="h-64 w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
              </div>
              <h3 className="text-2xl font-black italic tracking-tighter uppercase mb-4 group-hover:text-primary transition-colors">{feature.title}</h3>
              <p className="text-lg text-muted-foreground italic font-medium leading-relaxed mb-10">{feature.description}</p>
              <div className="w-fit rounded-2xl border-2 border-primary/20 bg-primary/5 p-4 shadow-xl transition-all group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                 <span className="size-6">{feature.icon}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature182 };
```
