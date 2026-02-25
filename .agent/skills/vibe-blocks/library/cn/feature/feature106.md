# Feature 106

## Metadata
- **Category**: Feature
- **Objective**: Hybrid feature explorer that transitions from a vertical Sidebar-Tab system (Desktop) to a full-bleed Accordion (Mobile).
- **Use Case**: Main "Product Features" landing page blocks, technical capability directories, or modular service walkthroughs.
- **Visual Style**: "Hybrid Feature Explorer" aesthetic. Desktop: `Tabs` grid with a vertical `TabsList` in the left column. Each trigger features a `ChevronRight` and a primary-colored active left-border (`w-[3px] bg-primary`). Right column: large `TabsContent` area for deeper details and a large image. Mobile: seamlessly morphs into a grouped `Accordion` with icons and detailed content expanding inline for focus.
- **Interactivity**: Fully responsive behavior via conditional rendering (`lg:grid` vs `lg:hidden`). Custom primary-bar active states.

## Source Code

### `feature106.tsx`
```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Blocks, ChartPie, ChevronRight, Layout, Target } from "lucide-react";

import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  {
    id: 1,
    header: "Task Coordination",
    excerpt: "Manage and organize tasks...",
    icon: <Target className="h-auto w-5" />,
    title: "Master Task Coordination",
    description: "Learn to easily manage...",
    image: "...",
  },
  // More feature objects...
];

const Feature106 = ({ className }: Feature106Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        {/* Mobile: Accordion View */}
        <Accordion type="multiple" className="flex flex-col gap-px overflow-hidden rounded-xl border bg-border lg:hidden">
          {features.map((feature) => (
            <AccordionItem key={feature.id} value={feature.id.toString()} className="border-b-0 bg-muted px-7 py-4 data-[state=open]:bg-background transition-all">
              <AccordionTrigger className="group relative items-start text-left hover:no-underline">
                 <span className="absolute -top-4 bottom-0 -left-7 h-full w-[3px] bg-primary opacity-0 group-data-[state=open]:opacity-100 transition-opacity"></span>
                 {/* Accordion header content */}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-7 p-5">
                 {/* Details and Image */}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        {/* Desktop: Vertical Tabs View */}
        <Tabs defaultValue="1" className="hidden grid-cols-3 gap-px overflow-hidden rounded-xl border bg-border lg:grid">
          <TabsList className="flex flex-col gap-px bg-border">
            {features.map((feature) => (
              <TabsTrigger key={feature.id} value={feature.id.toString()} className="group relative flex flex-col gap-2.5 bg-muted px-6 py-9 data-[state=active]:bg-background transition-colors">
                <span className="absolute top-0 bottom-0 left-0 h-full w-[3px] bg-primary opacity-0 group-data-[state=active]:opacity-100 transition-opacity"></span>
                {/* Tab trigger content */}
              </TabsTrigger>
            ))}
          </TabsList>
          {/* TabsContent images and details... */}
        </Tabs>
      </div>
    </section>
  );
};

export { Feature106 };
```
