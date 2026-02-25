# Feature 183

## Metadata
- **Category**: Feature
- **Objective**: Stylized technical showcase stage with hardware reveals, interactive UI floating cards, and high-fidelity stats.
- **Use Case**: Master "Hardware and Software" integration hero sections, primary platform dashboards, or executive "Product Overview" blocks.
- **Visual Style**: "Immersive Component Stage" aesthetic. 
    - Background: Massive relative stage utilizing a high-complexity `SVG pattern` (Blueprinted grid lines) with customized `mask-image` and `linear-gradient` overlays.
    - Presence: Features a massive absolute iPhone hardware reveal centered in the drafting board. 
    - UI Elements: Features dual absolute-positioned floating "Service" cards. Left card: Narrative block rotating 12-degrees. Right card: Functional `Select` interface for rapid product configuration overviews.
    - Metrics: High-contrast bottom symmetrical row featuring massive `text-7xl` bold metrics with specialized `+` indicator suffixes.
- **Interactivity**: Fully interactive React component utilizing Radix-based `Select` elements for hardware UI simulation. Features high-resolution shadow-casting and structural depth.

## Source Code

### `feature183.tsx`
```tsx
"use client";

import { Plus } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Feature183 = ({ className }: Feature183Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        {/* Massive Interactive Visualization Stage */}
        <div className="relative h-[32rem] w-full rounded-[4rem] bg-accent/5 border shadow-inner overflow-hidden mb-24">
           {/* SVG Precision Patterning ... */}
           <div className="absolute inset-0 z-0 bg-[linear-gradient(90deg,transparent_199px,#ffffff1a_1px),linear-gradient(180deg,transparent_199px,#ffffff1a_1px)] bg-[size:200px_200px]" />
           
           {/* Central Hardware Mock */}
           <div className="absolute -top-32 bottom-0 left-1/2 z-10 w-[24rem] -translate-x-1/2 lg:scale-125">
              {/* iPhone Overlay ... */}
           </div>
           
           {/* Floating UI Cards (Left / Right) */}
           <div className="absolute top-20 left-[15%] z-20 hidden lg:block rotate-12 bg-background p-8 rounded-3xl border shadow-[30px_30px_60px_-15px_rgba(0,0,0,0.3)]">
              {/* Info block ... */}
           </div>
           
           <div className="absolute bottom-20 right-[15%] z-20 hidden lg:block -rotate-6 bg-background p-8 rounded-3xl border shadow-2xl">
              {/* Functional Select forms ... */}
           </div>
        </div>

        {/* High-Resolution Metric Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 max-w-6xl mx-auto border-t pt-16">
          {DATA.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
               <span className="text-sm font-bold uppercase tracking-widest text-primary mb-2">{item.title}</span>
               <div className="text-7xl font-black italic tracking-tighter uppercase mb-2 group-hover:scale-110 transition-transform">
                  {item.value}<span className="text-primary">+</span>
               </div>
               <p className="text-muted-foreground italic font-medium">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature183 };
```
