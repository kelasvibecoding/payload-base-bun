# Feature 103

## Metadata
- **Category**: Feature
- **Objective**: Symmetrical border-grid of interactive feature cards.
- **Use Case**: Core capability landing pages, product feature directories, or service hub transitions.
- **Visual Style**: "Clean Border Grid" aesthetic. Header with an outline `Badge`. Grid: `md:grid-cols-2`. Top row features two wide cards. Bottom row: three square cards inside a `md:col-span-2 md:grid-cols-3` sub-grid. Each card features a bold title, description, and a circular `ArrowRight` trigger.
- **Interactivity**: Cards feature a subtle `hover:border-primary` transition for clear feedback.

## Source Code

### `feature103.tsx`
```tsx
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";

const Feature103 = ({ className }: Feature103Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="flex flex-col gap-3">
          <Badge variant="outline" className="w-fit font-bold tracking-tight">CORE CAPABILITIES</Badge>
          <h2 className="text-2xl md:text-4xl font-semibold italic">Discover our advanced tools</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <a href="#" className="flex flex-col gap-4 rounded-xl border p-6 hover:border-primary transition-colors">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-lg font-medium italic">Seamless Updates</h3>
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full border">
                <ArrowRight className="h-auto w-4" />
              </span>
            </div>
            <p className="text-muted-foreground">...</p>
          </a>
          {/* More grid items... */}
        </div>
      </div>
    </section>
  );
};

export { Feature103 };
```
