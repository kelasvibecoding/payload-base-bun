# Feature 89

## Metadata
- **Category**: Feature
- **Objective**: High-density feature section with a primary visual intro and an integrated service grid.
- **Use Case**: Complete feature walkthroughs on platform pages, solution overview sections, or technical capability landings.
- **Visual Style**: "Integrated Service Grid" aesthetic. Large horizontal split intro: left-aligned headline/summary, right-aligned large image (`max-w-3xl`). Decorative top radial-gradient dotted background. Below: `md:grid-cols-3` grid where boundaries are defined by absolute-positioned `h-px`/`w-px` background lines (`bg-input`), creating a seamless blueprint look. Each grid cell features a top-aligned icon, medium title, and description.
- **Interactivity**: Static layout.

## Source Code

### `feature89.tsx`
```tsx
import { DollarSign, KeyRound, Timer } from "lucide-react";

import { cn } from "@/lib/utils";

interface Feature89Props {
  className?: string;
}

const Feature89 = ({ className }: Feature89Props) => {
  return (
    <section className={cn("overflow-hidden py-32", className)}>
      <div className="relative container">
        {/* Decorative Grid Backdrop */}
        <div className="pointer-events-none absolute inset-0 -top-20 -z-10 mx-auto hidden h-[500px] w-[500px] bg-[radial-gradient(var(--color-gray-400)_1px,transparent_1px)] [mask-image:radial-gradient(circle_at_center,white_250px,transparent_250px)] [background-size:6px_6px] opacity-25 lg:block"></div>
        
        {/* Intro Split */}
        <div className="relative flex justify-between gap-16">
          <div className="w-full max-w-96 shrink-0 justify-between">
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-tight">What’s the solution?</p>
            <h2 className="mt-6 mb-3 text-3xl font-medium lg:text-4xl">Let Streamline handle the details</h2>
            <p className="text-sm text-muted-foreground">Streamline optimizes your workflow from start to finish...</p>
          </div>
          <div className="hidden w-full max-w-3xl shrink-0 lg:block">
            <img src="..." className="rounded-lg border object-cover" />
          </div>
        </div>

        {/* Feature Grid with Blueprint Borders */}
        <div className="relative mt-8 grid md:grid-cols-3">
          <div className="flex flex-col gap-y-6 px-2 py-10 md:p-6 lg:p-8">
            <Timer />
            <div>
              <h3 className="text-lg font-medium">Maximize efficiency</h3>
              <p className="mt-1 text-sm text-muted-foreground">...</p>
            </div>
          </div>
          {/* Repeated items... */}
          
          {/* Grid Borders (h-px, w-px containers) */}
          <div className="absolute top-0 -right-2 -left-2 hidden h-px bg-input md:block"></div>
          {/* More border divs... */}
        </div>
      </div>
    </section>
  );
};

export { Feature89 };
```
