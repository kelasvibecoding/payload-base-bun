# Feature 94

## Metadata
- **Category**: Feature
- **Objective**: Integration-oriented feature grid with multi-logo card headers and a side-aligned action.
- **Use Case**: Complex integration ecosystems, "Powered By" directories, or capability grids where tools work in tandem.
- **Visual Style**: "Multi-Partner Feature Grid" aesthetic. Horizontal header row with a bold `text-4xl` multi-line headline and an "Explore Integrations" outline button. Below: `lg:grid-cols-4` grid of rounded `bg-muted` cards. Key visual: each card features two overlapping integration logos (`w-16`) in the top section, followed by a bold title (`Insights`, `Metrics`, etc.) and a large description.
- **Interactivity**: Static layout. High visual density.

## Source Code

### `feature94.tsx`
```tsx
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

const Feature94 = ({ className }: Feature94Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-y-4 md:flex-row">
            <h2 className="text-center text-2xl font-bold md:text-left md:text-4xl">
              Make better decisions<br /> across your entire workflow
            </h2>
            <Button variant="outline" size="lg">View all integrations</Button>
          </div>
          <div className="mt-16 grid gap-6 md:mt-24 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border bg-muted p-6">
              <div className="mb-6 flex gap-4">
                <img src="..." className="h-auto w-16" />
                <img src="..." className="h-auto w-16" />
              </div>
              <h4 className="mb-4 text-xl font-semibold md:text-2xl">Insights</h4>
              <p className="text-lg text-muted-foreground">Leverage your existing data...</p>
            </div>
            {/* More cards... */}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature94 };
```
