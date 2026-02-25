# Feature 127

## Metadata
- **Category**: Feature
- **Objective**: Capability directory with an abstract hero-grid and large detailed content cards.
- **Use Case**: Detailed service explorations, plugin ecosystem directories, or technical "What You Can Do" sections.
- **Visual Style**: "Abstract Grid Portfolio" aesthetic. Header split features a massive `grid-cols-8` decorative background panel of placeholder blocks. Content Grid: `md:grid-cols-2` layout of large `p-12` cards. Each card features:
    - A floating icon module and `ChevronRight` button.
    - High-density narrative text.
    - A bottom-anchored visual stage with a clean `linear-gradient` bottom fade-out.
- **Interactivity**: Static illustrative layout with high visual complexity.

## Source Code

### `feature127.tsx`
```tsx
"use client";

import {
  Blocks,
  ChevronRight,
  Infinity as InfinityIcon,
  Laptop,
  ListEnd,
} from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

const Feature127 = ({ className }: Feature127Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        {/* Header and Abstract Grid ... */}
        
        <div className="mt-2 grid grid-cols-1 gap-6 md:grid-cols-2">
          {itemsData.map((item) => (
            <div key={item.title} className="rounded-lg border p-12 pb-0 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-8 flex items-center justify-between">
                <div className="flex size-12 items-center justify-center rounded-lg bg-muted shadow-inner">{item.icon}</div>
                <Button variant="outline" className="size-10 p-0 rounded-full"><ChevronRight className="size-4" /></Button>
              </div>
              <h4 className="mb-4 text-xl font-bold italic tracking-tighter uppercase">{item.title}</h4>
              <p className="mb-8 text-muted-foreground italic font-medium">{item.description}</p>
              {/* Visual Stage */}
              <div className="relative m-auto mt-4 w-full overflow-hidden border-t">
                <div className="absolute inset-x-0 bottom-0 z-2 h-[80px] bg-linear-to-t from-white to-transparent"></div>
                <img src={item.imageSrc} className="max-h-[270px] w-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature127 };
```
