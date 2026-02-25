# Feature 99

## Metadata
- **Category**: Feature
- **Objective**: Minimalist setup guide with high-impact numeric headings.
- **Use Case**: Quick-start instructions, process guides, or onboarding summaries.
- **Visual Style**: "Numeric Process Row" aesthetic. `lg:flex-row` container with a status indicator ("Get started" badge with a pulsing green dot). Main area featuring a clean `text-5xl` heading. Process bottom row: `md:grid-cols-3` split of three steps. Key visual: each step is anchored by a very large mono-font number (`text-6xl`) and a precise `border-l` vertical line.
- **Interactivity**: Static layout.

## Source Code

### `feature99.tsx`
```tsx
import { cn } from "@/lib/utils";

interface Feature99Props {
  className?: string;
}

const Feature99 = ({ className }: Feature99Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-20">
          <div className="flex h-fit items-center gap-2.5 text-lg whitespace-nowrap font-medium">
            <span className="size-3 shrink-0 rounded-full bg-green-500 animate-pulse"></span>
            Get started
          </div>
          <div>
            <h2 className="mb-11 text-3xl lg:text-5xl font-semibold">Quick Setup Guide</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col gap-1 border-l pr-4 pl-4 md:pl-8">
                <span className="font-mono text-4xl lg:text-6xl font-black opacity-10">1</span>
                <h3 className="mt-2 text-xl font-medium">Integrate effortlessly</h3>
                <p className="text-sm text-muted-foreground">...</p>
              </div>
              {/* More steps... */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature99 };
```
