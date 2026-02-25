# Feature 130

## Metadata
- **Category**: Feature
- **Objective**: Asymmetric bento grid for primary service highlights with clean drop-shadowed visual containers.
- **Use Case**: Flagship feature explorations, luxury portfolio showcases, or primary service menus.
- **Visual Style**: "Shadowed Visual Bento" aesthetic. Multi-block layout.
    - Card 1: `bg-card border` with bottom-aligned `max-h-52` image featuring high visual weight (`shadow-[0_0_10px_rgb(0,0,0,0.2)]`).
    - Card 2: `bg-card border` with top-aligned `max-h-48` image and padded narrative area.
    - Anchor Card: Wide `md:flex-row` layout with left-aligned description and right-aligned massive `max-h-96` visual.
- **Interactivity**: Static illustrative layout with high visual contrast.

## Source Code

### `feature130.tsx`
```tsx
"use client";

import { Code, MessageCircle, Text } from "lucide-react";

import { cn } from "@/lib/utils";

const Feature130 = ({ className }: Feature130Props) => {
  return (
    <section className={cn("container py-32", className)}>
      <h2 className="text-3xl font-extrabold italic tracking-tighter uppercase mb-20 drop-shadow-sm">Various integrations...</h2>
      <div className="grid gap-6 xl:grid-cols-2 mb-6">
        {/* Copy Paste Card */}
        <div className="flex flex-col justify-between rounded-2xl border bg-card px-12 pt-12 shadow-sm overflow-hidden group">
          <div className="flex flex-col gap-3">
            <Code className="size-6 text-primary" />
            <h4 className="text-xl font-bold uppercase italic">Copy paste components</h4>
          </div>
          <img src="..." className="max-h-52 w-full rounded-t-md object-cover shadow-2xl group-hover:scale-105 transition-transform duration-700" />
        </div>
        
        {/* Customizable Card */}
        <div className="rounded-2xl border bg-card shadow-sm overflow-hidden group flex flex-col-reverse">
           <div className="flex flex-col gap-3 p-12">
             <Text className="size-6 text-primary" />
             <h4 className="text-xl font-bold uppercase italic">100% customizable</h4>
           </div>
           <div className="px-12 pt-12"><img src="..." className="max-h-48 w-full rounded-b-md object-cover shadow-2xl group-hover:scale-105 transition-transform duration-700" /></div>
        </div>
      </div>
      
      {/* 24/7 Support Banner */}
      <div className="flex w-full flex-col items-center justify-center gap-6 overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-lg md:flex-row group">
        <div className="flex w-full flex-col p-12 md:gap-3">
          <MessageCircle className="size-8 text-primary" />
          <h4 className="text-2xl font-bold uppercase italic tracking-tighter">24/7 support</h4>
        </div>
        <div className="w-full pl-12 md:pt-12">
          <img src="..." className="max-h-96 w-full rounded-tl-3xl object-cover shadow-2xl group-hover:translate-x-2 transition-transform duration-700" title="support placeholder" />
        </div>
      </div>
    </section>
  );
};

export { Feature130 };
```
