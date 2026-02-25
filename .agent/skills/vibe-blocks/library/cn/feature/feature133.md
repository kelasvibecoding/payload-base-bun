# Feature 133

## Metadata
- **Category**: Feature
- **Objective**: Asymmetric service bento with high-contrast visual focus and modular tech-cards.
- **Use Case**: Feature summaries for software platforms, technical service menus, or "Capabilities" blocks on landing pages.
- **Visual Style**: "Technical Grid Bento" aesthetic. `md:flex-row` split layout. Left: massive full-height `bg-card border` featuring a high-density narrative header and a bottom-aligned `max-h-52` image with `shadow-lg`. Right: modular vertical stack.
    - Top card: Clean text-only module with `Text` icon.
    - Bottom card: Horizontal-aligned `md:flex-row` text-only module with `MessageCircle` icon.
- **Interactivity**: Static illustrative layout with high visual depth via shadow and border layering.

## Source Code

### `feature133.tsx`
```tsx
import { Code, MessageCircle, Text } from "lucide-react";

import { cn } from "@/lib/utils";

const Feature133 = ({ className }: Feature133Props) => {
  return (
    <section className={cn("container py-32", className)}>
      <h2 className="text-3xl font-extrabold italic tracking-tighter uppercase mb-20 drop-shadow-sm">Building with Excellence</h2>
      <div className="mt-12 flex flex-col gap-6 md:flex-row">
        {/* Dominant Left Card */}
        <div className="flex w-full flex-col justify-between overflow-hidden rounded-2xl border bg-card px-12 pt-12 shadow-sm group">
          <div className="mb-12 flex flex-col gap-3">
            <Code className="size-6 text-primary" />
            <h4 className="text-xl font-bold uppercase italic">Copy paste components</h4>
            <p className="text-muted-foreground">Lorem ipsum...</p>
          </div>
          <img src="..." className="max-h-52 w-full rounded-t-xl object-cover shadow-2xl group-hover:scale-105 transition-transform duration-700" />
        </div>
        
        {/* Modular Right Stack */}
        <div className="flex w-full flex-col gap-6">
          <div className="w-full overflow-hidden rounded-2xl border bg-card p-12 shadow-sm hover:bg-accent/10 transition-colors">
             <Text className="size-6 text-primary mb-3" />
             <h4 className="text-xl font-bold uppercase italic">100% customizable</h4>
             <p className="text-muted-foreground">Lorem ipsum...</p>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 overflow-hidden rounded-2xl border bg-card p-12 shadow-sm md:flex-row hover:bg-accent/10 transition-colors">
            <div className="flex w-full flex-col md:gap-3">
              <MessageCircle className="size-6 text-primary" />
              <h4 className="text-xl font-bold uppercase italic">24/7 support</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature133 };
```
