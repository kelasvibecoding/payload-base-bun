# Feature 108

## Metadata
- **Category**: Feature
- **Objective**: High-density feature deep-dive using decorative icons and side-by-side content panels.
- **Use Case**: Comparison tables, primary landing page "Core Benefits" sections, or any area requiring deep visual context for multiple categories.
- **Visual Style**: "Premium Content Tabs" aesthetic. Centered header with a primary `Badge`. Interactive `TabsList` features pill-shaped triggers with leading icons (`Zap`, `Pointer`, `Layout`). Core layout: `lg:grid-cols-2` panels inside a large `bg-muted/70` container. Panel A: content hierarchy with badge, header, and description. Panel B: full-bleed `object-cover` large image container.
- **Interactivity**: Fully interactive `Radix UI` tabs. Responsive `flex-col` to `grid` transitions.

## Source Code

### `feature108.tsx`
```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Layout, Pointer, Zap } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Feature108 = ({ className, ...props }: Feature108Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge variant="outline" className="font-mono">shadcnblocks.com</Badge>
          <h1 className="max-w-2xl text-3xl font-semibold md:text-4xl italic">A Collection of Components...</h1>
        </div>
        <Tabs defaultValue="tab-1" className="mt-8">
          <TabsList className="container flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-10">
            {/* Custom Interactive Triggers */}
            <TabsTrigger value="tab-1" className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold tracking-tight data-[state=active]:bg-muted transition-colors">
              <Zap className="h-auto w-4" /> Boost Revenue
            </TabsTrigger>
            {/* More triggers... */}
          </TabsList>
          <div className="mx-auto mt-8 max-w-7xl rounded-2xl bg-muted/70 p-6 lg:p-16 shadow-inner">
             {/* TabsContent split layouts ... */}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export { Feature108 };
```
