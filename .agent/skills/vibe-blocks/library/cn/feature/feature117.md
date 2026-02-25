# Feature 117

## Metadata
- **Category**: Feature
- **Objective**: Premium symmetrical visual bento grid with state-based icon and avatar overlays.
- **Use Case**: Core platform capability showcases, flagship service directories, or high-end product feature sections.
- **Visual Style**: "Lensed Visual Bento" aesthetic. `xl:grid-cols-3` grid housing three large `max-h-[450px]` interactive image cards. On hover, a primary-colored gradient slides up (`translate-y-20` to `translate-y-0`). Each card features a unique top-right overlay:
    - Card A/C: Primary-colored dynamic icon badge (`Zap`).
    - Card B: `backdrop-blur` avatar badge ("Tailored for experts").
    All cards feature massive bold headings and `ChevronRight` links on the bottom gradient.
- **Interactivity**: Clean state-based visual reveals on `group-hover`. High visual impact.

## Source Code

### `feature117.tsx`
```tsx
import { ChevronRight, Zap } from "lucide-react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarImage } from "@/components/ui/avatar";

const Feature117 = ({ className }: Feature117Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <h1 className="mb-4 text-center text-4xl font-semibold italic tracking-tight">Versatile Designs</h1>
        <p className="text-center text-muted-foreground pb-14 italic">Personalize the box...</p>
        <div className="grid gap-5 pt-14 xl:grid-cols-3">
          {/* Static Card A */}
          <a href="#" className="group relative overflow-hidden rounded-xl bg-background border shadow-2xl">
            <img src="..." className="h-full size-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 translate-y-20 bg-linear-to-t from-primary to-transparent transition-transform duration-300 group-hover:translate-y-0"></div>
            <div className="absolute inset-0 flex flex-col justify-between p-7">
               {/* Icon Overlay */}
               <span className="ml-auto flex items-center gap-1 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-background shadow-lg uppercase tracking-tighter">
                 <Zap className="h-auto w-6 fill-background" /> Advanced tools
               </span>
               <div className="flex flex-col gap-5 text-background">
                 <h4 className="text-2xl font-semibold lg:text-3xl italic tracking-tight">Transform your website...</h4>
                 <p className="flex items-center gap-1 font-medium hover:underline">Explore all <ChevronRight className="h-auto w-4" /></p>
               </div>
            </div>
          </a>
          {/* Card B (Avatar) & Card C (Latest) ... */}
        </div>
      </div>
    </section>
  );
};

export { Feature117 };
```
