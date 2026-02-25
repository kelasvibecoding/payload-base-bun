# Feature 113

## Metadata
- **Category**: Feature
- **Objective**: Detailed feature showcase using centralized icon-triggers and large content blocks.
- **Use Case**: Primary product dashboard highlights, technical deep-dives on landing pages, or feature hub navigation.
- **Visual Style**: "Structured Feature Tabs" aesthetic. Centered header with a capability badge. Interactive `TabsList` features centered triggers with leading icons (`Zap`, `Pointer`, `Layout`). Core layout: `lg:grid-cols-2` symmetrical split inside a heavy `bg-muted/70` container. Left: high-contrast typography hierarchy (Badge, massive Heading, Description) and a prominent "See Plans" button with a `CreditCard` icon. Right: `max-h-96` high-res image placeholder.
- **Interactivity**: Fully interactive `Radix UI` tabs. Smooth responsive grid transitions.

## Source Code

### `feature113.tsx`
```tsx
import { CreditCard, Layout, Pointer, Zap } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Feature113 = ({ className }: Feature113Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container flex flex-col items-center gap-4 text-center">
        <Badge variant="outline" className="uppercase font-mono tracking-widest">Top-notch Craft</Badge>
        <h2 className="text-3xl font-semibold md:text-4xl italic">Shape tomorrow</h2>
      </div>
      <Tabs defaultValue="tab-1" className="mt-14">
        <div className="container flex justify-center">
          <TabsList>
            <TabsTrigger value="tab-1" className="flex items-center gap-2 px-4 py-2 font-bold tracking-tighter">
              <Zap className="hidden h-auto w-4 shrink-0 sm:block" /> Speed
            </TabsTrigger>
            {/* ... other triggers */}
          </TabsList>
        </div>
        <div className="container mt-10 max-w-7xl rounded-2xl bg-muted/70 p-8 md:mt-14 lg:p-16 shadow-inner">
           {/* Split Grid Content for each tab */}
           <TabsContent value="tab-1" className="grid place-items-center gap-20 lg:grid-cols-2 lg:gap-10 mt-0 focus-visible:outline-none">
             <div className="flex flex-col gap-5">
               <Badge variant="outline" className="w-fit bg-background uppercase text-[10px] tracking-tight">Modern Tactics</Badge>
               <h3 className="text-3xl font-semibold lg:text-5xl italic">Make your site standout.</h3>
               {/* description and buttons */}
             </div>
             <img src="..." className="max-h-96 rounded-xl border object-cover shadow-2xl" />
           </TabsContent>
           {/* ... more contents */}
        </div>
      </Tabs>
    </section>
  );
};

export { Feature113 };
```
