# Feature 110

## Metadata
- **Category**: Feature
- **Objective**: Multi-metric social proof bento grid with auto-scrolling avatar reels.
- **Use Case**: Trust-building sections on landing pages, "How We Compare" summaries, or platform highlights for large user-bases.
- **Visual Style**: "Social-Proof Bento" aesthetic. Centered header with a "Success" theme. `md:grid-cols-2` complex grid. Key features include: a "Dynamic Features" block with multiple `Badge` tags (Fast, Solid, Sleek); a "Premium Quality" block featuring an `AutoScroll` `Carousel` displaying a continuous reel of user Avatars; and an "Unmatched Organization" block with a prominent 5-star rating visual (`fill-primary`).
- **Interactivity**: Fully automated horizontal avatar reel via `embla-carousel-auto-scroll`. Responsive card stacks.

## Source Code

### `feature110.tsx`
```tsx
"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { Atom, ChevronRight, ShieldCheck, Star, Zap } from "lucide-react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Feature110 = ({ className }: Feature110Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        {/* Header ... */}
        <div className="mx-auto mt-12 grid max-w-5xl gap-7 md:grid-cols-2">
          {/* Card 1: Multi-Badge Capabilities */}
          <div className="rounded-xl border bg-muted p-8 shadow-sm">
             {/* Badge Row */}
             <Badge variant="outline" className="bg-background font-bold tracking-tight"><Zap className="size-4" /> Fast</Badge>
             {/* ... */}
          </div>
          
          {/* Card 2: Auto-Scroll Avatar Proof */}
          <div className="rounded-xl border bg-muted pb-8 overflow-hidden">
             {/* Content ... */}
             <Carousel opts={{ loop: true }} plugins={[AutoScroll({ speed: 0.8 })]} className="relative opacity-90">
                <CarouselContent>
                   <CarouselItem className="basis-auto px-1.5"><Avatar>...</Avatar></CarouselItem>
                   {/* Avatar iterations */}
                </CarouselContent>
                <div className="absolute inset-0 bg-linear-to-r from-muted via-transparent to-muted pointer-events-none"></div>
             </Carousel>
          </div>
          {/* Card 3: Star Ratings block */}
          {/* Card 4: Exclusive features block */}
        </div>
      </div>
    </section>
  );
};

export { Feature110 };
```
