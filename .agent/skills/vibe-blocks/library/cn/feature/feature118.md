# Feature 118

## Metadata
- **Category**: Feature
- **Objective**: Multi-metric trust section combining content pills and massive proof-points.
- **Use Case**: Primary "Value Proposition" blocks, customer success pages, or modular business summaries.
- **Visual Style**: "Evidence-Driven Bento" aesthetic. `bg-muted/60` background for high-contrast separation. Grid Structure:
    - Row 1: `lg:grid-cols-3`. Left (`col-span-2`): Split-card with `LucideGitGraph` icon, text, and `aspect-video` image. Right: bullet-listed card with `CheckCircle2` indicators.
    - Row 2: Wide analytical block. Features a massive 99% conversion stat and a 5.0 star-rating module with a `fill-primary` star stack.
    - Footer: Centered "Let's chat" module.
- **Interactivity**: Static illustrative layout. High information density.

## Source Code

### `feature118.tsx`
```tsx
import {
  CheckCircle2,
  LucideGitGraph,
  MessageSquare,
  Star,
  Zap,
} from "lucide-react";

import { cn } from "@/lib/utils";

const Feature118 = ({ className }: Feature118Props) => {
  return (
    <section className={cn("bg-muted/60 py-32", className)}>
      <div className="container">
        <div className="flex flex-col gap-10">
          {/* Header ... */}
          <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-3 lg:gap-12">
            <div className="col-span-2 grid gap-7 rounded-lg bg-background p-7 md:grid-cols-2 border shadow-sm">
                {/* Reporting Card */}
                <div className="flex h-full flex-col justify-between gap-3">
                    <span className="flex size-14 items-center justify-center rounded-full bg-muted"><LucideGitGraph className="size-6" /></span>
                    <h2 className="mt-5 text-xl font-semibold lg:text-3xl italic tracking-tighter">Generate reports...</h2>
                </div>
                <img src="..." className="aspect-video h-full w-full rounded-xl object-cover" />
            </div>
            {/* Collaboration Card */}
          </div>
          
          {/* Stats Row */}
          <div className="grid items-center gap-12 rounded-lg bg-background p-7 md:p-10 lg:grid-cols-3 border shadow-sm">
             <h2 className="text-xl font-semibold lg:text-3xl italic tracking-tighter uppercase font-mono">Detailed analysis</h2>
             <div className="flex items-center gap-5">
               <span className="text-4xl font-semibold md:text-5xl italic tracking-tighter">99%</span>
               <p className="text-muted-foreground italic">Track and analyze...</p>
             </div>
             {/* Rating ... */}
          </div>
          {/* Footer link ... */}
        </div>
      </div>
    </section>
  );
};

export { Feature118 };
```
