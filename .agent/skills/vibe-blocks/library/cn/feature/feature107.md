# Feature 107

## Metadata
- **Category**: Feature
- **Objective**: Asymmetric integration grid with persona intro and actionable partner cards.
- **Use Case**: Ecosystem landing pages, service partner directories, or integration hubs for platform products.
- **Visual Style**: "Integration Showcase" aesthetic. `lg:grid-cols-4` grid. Left-side (`col-span-2`): prominent header area with a `GitCompare` tagged badge and bold `text-4xl` summary. Remaining columns: interactive integration cards. Each card features a small logo wrapper, a "Visit Website" button-link with an `ArrowRight`, and detailed feature text.
- **Interactivity**: Integration cards feature `hover:bg-muted/60` and animated arrow transitions.

## Source Code

### `feature107.tsx`
```tsx
import { ArrowRight, GitCompare } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";

const Feature107 = ({ className }: Feature107Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="gap grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Intro Section */}
          <div className="mx-auto flex flex-col gap-4 md:col-span-2">
            <Badge variant="outline" className="flex w-fit gap-1 px-2.5 py-1.5 text-sm uppercase">
              <GitCompare className="h-auto w-4" /> Integrations
            </Badge>
            <h2 className="text-3xl font-semibold lg:text-4xl">Unlock Synergy...</h2>
            <p className="text-muted-foreground">Explore SAP seamless integrations...</p>
          </div>
          
          {/* Integration Cards */}
          <a href="#" className="flex flex-col gap-4 rounded-xl border p-6 transition-all hover:bg-muted/60">
            <div className="flex items-center justify-between">
              <span className="grid size-12 place-content-center rounded-md border font-bold">
                <img src="..." className="h-auto w-7" />
              </span>
              <span className="flex items-center gap-1 rounded-full border px-3 py-2.5 text-sm font-medium">
                Visit Website <ArrowRight className="h-auto w-4 shrink-0" />
              </span>
            </div>
            <div>
              <h3 className="font-medium md:text-lg italic">Mail Link</h3>
              <p className="text-sm text-muted-foreground pb-2">Quick connect...</p>
            </div>
          </a>
          {/* More partners... */}
        </div>
      </div>
    </section>
  );
};

export { Feature107 };
```
