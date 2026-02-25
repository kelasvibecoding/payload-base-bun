# Feature 116

## Metadata
- **Category**: Feature
- **Objective**: Dynamic, interactive visual bento grid with sliding reveal overlays.
- **Use Case**: Flagship feature explorations, luxury portfolio highlights, or primary platform capability sections.
- **Visual Style**: "Lensed Reveal Bento" aesthetic. `xl:grid-cols-3` layout with 3 major cards. Card 1 (Large Focus): full-height photo background with "Sustainability Focus" icon/text and bottom-left content. Card 2 & 3: stacked vertical images with similar interactive overlays. Key visual: each card has a `group relative` container. On hover, a primary-colored gradient slides up via `translate-y-20` to `translate-y-0`, creating a clean, focused detail reveal.
- **Interactivity**: State-based visual reveals on `group-hover`. High-end transitional motion.

## Source Code

### `feature116.tsx`
```tsx
import { Atom, ChevronRight, Settings, Zap } from "lucide-react";

import { cn } from "@/lib/utils";

const Feature116 = ({ className }: Feature116Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <h1 className="mb-4 text-center text-4xl font-semibold italic tracking-tight">Dynamic Layouts</h1>
        <p className="text-center text-muted-foreground pb-14">Adapt the box to suit any purpose</p>
        <div className="grid grid-cols-1 gap-y-5 xl:grid-cols-3 xl:grid-rows-2 xl:gap-x-5 xl:gap-y-0">
          {/* Large Vertical Card */}
          <a href="#" className="group relative col-span-2 row-span-3 overflow-hidden rounded-xl bg-background border shadow-2xl">
            <img src="..." className="h-full max-h-[580px] w-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 translate-y-20 bg-linear-to-t from-primary/90 to-transparent transition-transform duration-300 group-hover:translate-y-0 pointer-events-none"></div>
            <div className="absolute inset-0 flex flex-col justify-between p-7">
               <span className="ml-auto flex items-center gap-1 p-2.5 text-sm font-semibold text-background bg-foreground/10 backdrop-blur-md rounded-full shadow-lg border border-white/10 uppercase tracking-widest font-mono">
                 <Atom className="h-auto w-6 p-0.5" /> Sustainability 
               </span>
               <div className="flex flex-col gap-5 text-background">
                 <h4 className="text-2xl font-semibold lg:text-3xl italic">Build stunning websites...</h4>
                 <p className="flex items-center gap-1 font-medium hover:underline">Get started <ChevronRight className="h-auto w-4" /></p>
               </div>
            </div>
          </a>
          {/* Vertical Stack Cards... */}
        </div>
      </div>
    </section>
  );
};

export { Feature116 };
```
