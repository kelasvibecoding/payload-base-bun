# Feature 135

## Metadata
- **Category**: Feature
- **Objective**: Asymmetric split layout featuring a sticky key-highlight sidebar and a vertical feature feed.
- **Use Case**: Detailed feature discovery pages, product tour summaries, or data-heavy "Capabilities" sections.
- **Visual Style**: "Sticky Narrative Feed" aesthetic. `lg:grid-cols-2` symmetrical grid. 
    - Left (Sticky): A sticky summary stage (`lg:sticky top-10`) containing a `Star` icon badge, large narrative header, and a list of high-level proof points with `Check` indicators.
    - Right (Feed): A scrolling column of detailed feature cards. Each card features a leading `bg-muted` icon module and asymmetric descriptive text alignment (centered on mobile, left-aligned on desktop).
- **Interactivity**: Dynamic "dual-mode" layout (sticky vs scroll). High informational density with clear focal separation.

## Source Code

### `feature135.tsx`
```tsx
import {
  Calendar,
  Check,
  Infinity as InfinityIcon,
  ListChecks,
  MessagesSquare,
  Star,
  Users,
} from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";

const Feature135 = ({ className }: Feature135Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="relative grid gap-10 lg:grid-cols-2 items-start">
          {/* Sticky Sidebar Proof */}
          <div className="top-10 mx-auto flex h-fit max-w-3xl flex-col items-center gap-4 lg:sticky lg:items-start lg:pr-10">
            <Badge variant="outline" className="flex items-center gap-1 font-mono uppercase tracking-widest"><Star className="size-4 p-0.5 fill-primary" /> Key Highlights</Badge>
            <h2 className="text-3xl font-bold lg:text-left italic tracking-tighter uppercase">Empower Your Workflow...</h2>
            {/* Proof List ... highlights.map ... */}
          </div>
          
          {/* Scrollable Feature Stage */}
          <div className="flex flex-col gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col gap-4 rounded-xl border bg-background p-8 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all group">
                <div className="flex flex-col items-center gap-3 lg:flex-row">
                   <span className="flex size-14 items-center justify-center rounded-lg bg-muted group-hover:bg-primary group-hover:text-background transition-colors shadow-inner">
                     <feature.icon className="size-7" />
                   </span>
                   <h3 className="text-xl font-bold italic tracking-tight uppercase">{feature.title}</h3>
                </div>
                <p className="text-center text-muted-foreground lg:text-left italic font-medium">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature135 };
```
