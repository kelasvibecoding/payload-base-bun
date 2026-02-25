# Feature 105

## Metadata
- **Category**: Feature
- **Objective**: Multi-stage horizontal workflow navigator using large decorative icons.
- **Use Case**: Onboarding flows, complex software capability overviews, or "Platform Pillars" walkthroughs.
- **Visual Style**: "Iconic Phase Tabs" aesthetic. Centered header with a `Flag` icon badge. Core visual: a horizontal `TabsList` (scrollable on mobile) displaying 7 phases (`Aim`, `Plans`, `Execution`, etc.). Each phase features a large `size-12` icon wrapper. Active state: `group-data-[state=active]:bg-primary` for the icon and a bottom primary border for the trigger. `TabsContent` reveals full-width `aspect-video` image placeholders.
- **Interactivity**: Fully interactive `Radix UI` tabs. Responsive horizontal scroll for phase navigation.

## Source Code

### `feature105.tsx`
```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import {
  FileSpreadsheet,
  Flag,
  Layout,
  MessagesSquare,
  Settings,
  Target,
  Timer,
  Wand,
} from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";

const Feature105 = ({ className }: Feature105Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4">
          <Badge variant="outline" className="flex items-center gap-1 px-2.5 py-1.5 text-sm font-mono uppercase">
            <Flag className="h-auto w-4" /> HIGHLIGHTS
          </Badge>
          <h2 className="text-center text-3xl font-semibold lg:text-4xl italic">Steps to Achieve Your Goals</h2>
          <p className="text-center text-muted-foreground lg:text-lg">Discover effective strategies...</p>
        </div>
        <div className="mx-auto mt-14 max-w-7xl">
          <Tabs defaultValue="tab-1">
            <div className="max-w-[100vw-4rem] overflow-x-auto no-scrollbar">
              <TabsList className="mx-auto flex w-fit justify-center gap-5 border-b pb-px">
                {/* 7 Interactive Phases */}
                <TabsTrigger value="tab-1" className="group -mb-px flex flex-col items-center gap-1.5 px-1 pb-3.5 data-[state=active]:border-b data-[state=active]:border-primary transition-all">
                  <span className="flex size-12 items-center justify-center rounded-md bg-muted transition-colors group-data-[state=active]:bg-primary group-data-[state=active]:text-background">
                    <Target className="w-7 p-0.5" />
                  </span>
                  <p className="text-sm text-muted-foreground font-medium uppercase tracking-tighter">Aim</p>
                </TabsTrigger>
                {/* ... more triggers */}
              </TabsList>
            </div>
            <div className="mt-5 border rounded-xl overflow-hidden shadow-2xl">
              {/* Image contents */}
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export { Feature105 };
```
