# Feature 210

## Metadata
- **Category**: Feature
- **Objective**: High-density template category registry featuring a symmetrical grid and interactive link headers.
- **Use Case**: Master "Resource" directories, platform template indices, or multi-category capability landing blocks.
- **Visual Style**: "Template Utility Registry" aesthetic. High-contrast asymmetric header featuring a leading `ScrollText` metadata anchor and bold `text-4xl` headers.
    - Grid: High-density `xl:grid-cols-4` grid focused on organizational efficiency and rapid category discovery.
    - Item Design: Minimalist directional link containers (`a` tag). Features a leading primary-colored icon (`size-4`), bold category title, and a specialized `ChevronRight` interactive indicator.
    - Navigation Polish: Features high-quality transition effects; text colors and icon translations update on `md:hover:bg-muted` events to provide instant feedback. High legibility and structural cadence.
- **Interactivity**: Static illustrative registry with immersive professional structural flow and polished utility hover states.

## Source Code

### `feature210.tsx`
```tsx
"use client";

import { ScrollText, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

const Feature210 = ({ className }: Feature210Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        {/* Leading Editorial Header */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-24 max-w-7xl mx-auto">
          <div className="basis-1/2 space-y-6">
            <div className="flex items-center gap-3 text-primary"><ScrollText className="size-5" /><p className="text-xs font-bold uppercase tracking-[0.4em]">Templates</p></div>
            <h2 className="text-4xl font-extrabold italic tracking-tighter uppercase sm:text-6xl text-balance">Build beautiful websites in minutes.</h2>
          </div>
          <p className="basis-1/2 text-xl text-muted-foreground italic font-medium leading-relaxed">Jump start your next project with our professionally designed templates...</p>
        </div>

        {/* Technical Registry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, idx) => (
            <a key={idx} href={feature.link} className="group flex flex-col gap-4 p-8 rounded-3xl border border-primary/5 bg-accent/5 hover:bg-primary hover:text-white transition-all duration-500 hover:translate-y-[-4px] shadow-xl hover:shadow-primary/20">
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                     <feature.icon className="size-5" />
                     <p className="text-lg font-bold italic uppercase tracking-widest">{feature.title}</p>
                  </div>
                  <ChevronRight className="size-5 transition-transform group-hover:translate-x-2" />
               </div>
               <p className="text-sm opacity-70 italic font-medium leading-relaxed">{feature.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature210 };
```
