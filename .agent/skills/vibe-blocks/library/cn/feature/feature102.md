# Feature 102

## Metadata
- **Category**: Feature
- **Objective**: Vertical process walkthrough with high-precision connectivity lines and side-aligned images.
- **Use Case**: Deployment guides, release notes summaries, or "How It Works" sections with a focus on chronological order.
- **Visual Style**: "Connected Step Flow" aesthetic. Three vertical steps. Key visual: numeric bubbles (`1`, `2`, `3`) are connected by primary-colored vertical lines (`w-[3px] bg-primary opacity-70`) with gradient fades at the start and end. Side-aligned images (`aspect-video`) provide visual proof for each step.
- **Interactivity**: Static illustrative layout. Fully responsive split-to-stack transition (`min-[960px]:flex-row`).

## Source Code

### `feature102.tsx`
```tsx
import { cn } from "@/lib/utils";

interface Feature102Props {
  className?: string;
}

const Feature102 = ({ className }: Feature102Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto flex max-w-3xl flex-col justify-center gap-7 md:text-center">
          <h2 className="text-2xl md:text-4xl">Launch with Assurance</h2>
          <p className="text-sm text-muted-foreground md:text-base">Simplify your workflow...</p>
        </div>
        <div className="mx-auto mt-14 flex max-w-5xl flex-col gap-4 lg:px-16">
          {/* Step 1 */}
          <div className="flex flex-col items-center justify-between min-[960px]:flex-row min-[960px]:gap-10">
            <div className="flex gap-4 min-[960px]:max-w-md">
              <div className="flex flex-col items-center justify-between gap-1">
                <span className="h-20 shrink-0"></span>
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border bg-muted/50 font-mono text-lg">1</span>
                <span className="h-20 w-[3px] shrink-0 bg-linear-to-b from-transparent to-primary opacity-70"></span>
              </div>
              <div className="flex flex-col justify-center gap-5 px-0 min-[960px]:py-4">
                <h3 className="text-xl min-[960px]:text-2xl">Monitor Deployments live</h3>
                <p className="text-muted-foreground">...</p>
              </div>
            </div>
            <img src="..." className="aspect-video w-full rounded-xl border object-cover min-[960px]:w-auto" />
          </div>
          {/* Repeat for Step 2 and 3 with variations in connecting lines */}
        </div>
      </div>
    </section>
  );
};

export { Feature102 };
```
