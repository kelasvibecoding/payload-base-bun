# Feature 101

## Metadata
- **Category**: Feature
- **Objective**: Dynamic feature bento grid with asymmetric sizing and subtle image motion.
- **Use Case**: Primary capability showcases, service directories, or high-impact technical landing sections.
- **Visual Style**: "Modern Bento Grid" aesthetic. Centered header. Grid: `md:grid-cols-2 lg:grid-cols-3`. Card A: large `md:col-span-2 lg:row-span-2` card with top text and a bottom-aligned image. Card B, C, D: standard square cards (`h-80`) with top icons and bottom text. Card E: wide `lg:col-span-2` card with a horizontal grid for content. All cards use `bg-muted/70`.
- **Interactivity**: Images feature a smooth "float up" transition on component hover (`hover:-translate-y-3`).

## Source Code

### `feature101.tsx`
```tsx
import { Blocks, ChartPie, Filter, UsersRound } from "lucide-react";

import { cn } from "@/lib/utils";

const Feature101 = ({ className }: Feature101Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto flex max-w-xl flex-col justify-center gap-4 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Our Capabilities</h1>
          <p className="text-xl text-muted-foreground">Potentials of our platform...</p>
        </div>
        <div className="mx-auto mt-20 grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: Large Feature */}
          <div className="flex flex-col justify-between gap-6 rounded-lg bg-muted/70 p-8 md:col-span-2 lg:row-span-2">
            <div>
              <Blocks className="mb-6 h-auto w-11" strokeWidth={1.5} />
              <h2 className="mb-1 text-2xl font-medium">Integration</h2>
              <p className="text-muted-foreground">...</p>
            </div>
            <img src="..." className="ml-auto max-h-80 w-full rounded-lg object-cover transition-transform duration-300 hover:-translate-y-3 sm:w-11/12" />
          </div>
          {/* Square Cards ... */}
          {/* Final wide card ... */}
        </div>
      </div>
    </section>
  );
};

export { Feature101 };
```
