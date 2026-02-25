# Feature 104

## Metadata
- **Category**: Feature
- **Objective**: Centered visual section with symmetric vertical stacks of feature highlights.
- **Use Case**: Flagship feature overview pages, technical solution breakdowns, or "Platform Highlights" sections.
- **Visual Style**: "Symmetric Feature Bento" aesthetic. Centered header with a `Medal` themed badge. Grid: `lg:grid-cols-3`. Center: dominant vertical image (`placeholder-1.svg`). Left & Right columns: vertical stacks of 3 feature cards within a `gap-2.5` container. Each card: rounded borders, small icon wrapper (`bg-muted`), bold title, and description. Highly balanced and structured layout.
- **Interactivity**: Static layout. High information density.

## Source Code

### `feature104.tsx`
```tsx
import {
  ChartArea,
  ChartNoAxesCombined,
  Layout,
  Medal,
  Monitor,
  Target,
  TrendingUp,
} from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";

const Feature104 = ({ className }: Feature104Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4">
          <Badge variant="outline" className="flex items-center gap-1 px-2.5 py-1.5 text-sm uppercase font-mono tracking-wider">
            <Medal className="h-auto w-4" /> HIGHLIGHTS
          </Badge>
          <h2 className="text-center text-3xl font-semibold lg:text-4xl">Unlock Your Workflow Potential</h2>
          <p className="text-center text-muted-foreground lg:text-lg italic font-medium">Experience the benefits...</p>
        </div>
        <div className="gap mt-14 grid gap-2.5 lg:grid-cols-3">
          <div className="flex flex-col gap-2.5">
            <div className="gap flex flex-col gap-3 rounded-lg border p-6 bg-background">
              <div className="flex items-center gap-2.5">
                <span className="flex size-12 items-center justify-center rounded-md bg-muted">
                  <Target className="h-auto w-6" />
                </span>
                <h3 className="font-medium">Targeted Solutions</h3>
              </div>
              <p className="text-sm text-muted-foreground italic">Tailored features...</p>
            </div>
            {/* More cards on the left */}
          </div>
          <img src="..." className="hidden h-full rounded-lg object-cover lg:block border shadow-xl" />
          <div className="flex flex-col gap-2.5">
            {/* Cards on the right */}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature104 };
```
