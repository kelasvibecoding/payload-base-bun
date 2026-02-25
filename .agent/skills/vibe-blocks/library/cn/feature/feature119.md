# Feature 119

## Metadata
- **Category**: Feature
- **Objective**: Three-step procedural guide anchored by a massive visual summary.
- **Use Case**: Onboarding walkthroughs, "Quick Start" documentation sections, or product workflow explainers.
- **Visual Style**: "Sequential Process Hero" aesthetic. Centered header with a capability badge. Procedural Grid: `lg:grid-cols-3` layout of steps. Each step features a large mono-font numeric identifier (`01`, `02`, `03`) inside a `size-11` `bg-muted` circle. Below: broad `aspect-video` high-res placeholder image (`placeholder-8-wide.svg`) summarizing the entire process. Highly structured and clean.
- **Interactivity**: Static illustrative layout.

## Source Code

### `feature119.tsx`
```tsx
import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";

const Feature119 = ({ className }: Feature119Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-2.5">
            <Badge variant="outline" className="font-mono uppercase italic tracking-tighter pb-1">Your path to success</Badge>
            <h2 className="text-center text-4xl md:text-5xl font-semibold italic tracking-tight">Get Started with Ease</h2>
          </div>
          <div className="grid gap-7 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            <div className="flex gap-4">
              <span className="text-md flex size-11 shrink-0 items-center justify-center rounded-full bg-muted font-mono font-black italic">01</span>
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold">Create an Account</h3>
                <p className="text-muted-foreground italic">Sign up quickly...</p>
              </div>
            </div>
            {/* Steps 02 and 03 */}
          </div>
          <img src="..." className="aspect-video w-full rounded-xl object-cover shadow-2xl border" />
        </div>
      </div>
    </section>
  );
};

export { Feature119 };
```
