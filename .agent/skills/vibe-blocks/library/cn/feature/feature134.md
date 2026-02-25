# Feature 134

## Metadata
- **Category**: Feature
- **Objective**: Stylized gallery-style bento grid with individual image framing and narrative highlights.
- **Use Case**: Flagship feature explorations, luxury portfolio carousels, or primary platform capability sections.
- **Visual Style**: "Framed Gallery Bento" aesthetic. Centered header with a `Flame` icon badge ("Key Highlights"). `lg:grid-cols-3` grid layout featuring asymmetric card spans. Core visual design: 
    - Top image alignment: Each card features a narrative header with a distinct `ArrowRight` icon (rotated -45 deg) inside a `rounded-full border`.
    - Framed Stage: Images are nested inside a padded `rounded-lg p-1` container, creating a distinct "photo frame" border around `placeholder` assets. Card 2 spans `lg:col-span-2` for visual variety.
- **Interactivity**: Static illustrative layout with polished hover states.

## Source Code

### `feature134.tsx`
```tsx
import { ArrowRight, Flame } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";

const Feature134 = ({ className }: Feature134Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container px-4">
        {/* Header Module */}
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center pb-14">
          <Badge variant="outline" className="flex items-center gap-1 px-4 py-2 text-sm font-mono uppercase italic tracking-tighter">
            <Flame className="size-4 fill-primary" /> Key Highlights
          </Badge>
          <h2 className="text-4xl font-extrabold italic tracking-tight uppercase">Enhance Your Workflow</h2>
        </div>
        
        {/* Highlight Grid */}
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          <a href="#" className="group flex flex-col rounded-2xl border bg-background hover:bg-accent/10 hover:shadow-2xl transition-all duration-500 overflow-hidden shadow-sm">
            <div className="flex justify-between p-7">
               <div className="flex flex-col gap-1">
                 <h3 className="font-bold italic tracking-tighter uppercase">Easy Event Scheduling</h3>
                 <p className="text-sm text-muted-foreground italic">Plan effortlessly...</p>
               </div>
               <span className="flex size-11 aspect-square shrink-0 items-center justify-center rounded-full border group-hover:bg-primary group-hover:text-background transition-colors">
                 <ArrowRight className="size-5 -rotate-45" />
               </span>
            </div>
            {/* Framed Visual */}
            <div className="p-1"><img src="..." className="size-full max-h-72 rounded-xl border border-white/10 object-cover" /></div>
          </a>
          
          {/* Spanner Card ... col-span-2 ... */}
        </div>
      </div>
    </section>
  );
};

export { Feature134 };
```
