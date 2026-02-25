# Feature 128

## Metadata
- **Category**: Feature
- **Objective**: Unified central capability island with a clean, separated internal grid.
- **Use Case**: Core product highlight sections, master capability summaries, or "Why Choose Us" blocks on landing pages.
- **Visual Style**: "Island Feature Grid" aesthetic. Centered horizontal `rounded-3xl bg-muted` container. Header: massive `text-5xl` title with typographic contrast. Body: `grid-cols-2 md:grid-cols-3` internal grid. Key design detail: items are separated by a high-contrast `bg-muted-foreground` grid-line background. Each item features a clean `bg-background` card with a dropshadowed icon and centered description.
- **Interactivity**: Static illustrative layout with high structural clarity.

## Source Code

### `feature128.tsx`
```tsx
import {
  Blocks,
  Infinity as InfinityIcon,
  Laptop,
  ListEnd,
  Zap,
  ZoomIn,
} from "lucide-react";

import { cn } from "@/lib/utils";

const Feature128 = ({ className }: Feature128Props) => {
  return (
    <section className={cn("container py-32", className)}>
      <div className="m-auto rounded-3xl bg-muted px-8 pt-14 pb-8 text-center md:px-16 md:pt-24 md:pb-16 shadow-inner border border-white/10">
        <h2 className="mx-auto mb-4 max-w-xl text-3xl font-normal md:text-5xl italic tracking-tighter uppercase">
          Build your own website with our <span className="font-bold underline decoration-primary">UI blocks</span>
        </h2>
        {/* Descriptive grid */}
        <div className="mt-16 grid w-full grid-cols-2 gap-px bg-muted-foreground/20 md:grid-cols-3 border rounded-xl overflow-hidden shadow-2xl">
          {items.map((item, index) => (
            <div key={index} className="flex w-full flex-col items-center justify-center gap-6 bg-muted px-3 py-4 md:px-6 md:py-8 hover:bg-accent/40 transition-colors">
              <div className="flex size-14 items-center justify-center rounded-xl border border-primary/10 bg-background drop-shadow-2xl">{item.icon}</div>
              <p className="text-sm italic font-medium">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature128 };
```
