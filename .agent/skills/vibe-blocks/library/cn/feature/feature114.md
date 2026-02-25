# Feature 114

## Metadata
- **Category**: Feature
- **Objective**: Impactful split-hero section combining persona proof with automated vertical feature carousels.
- **Use Case**: Primary "Innovation" or "Capability" sections for high-growth tech platforms and agencies.
- **Visual Style**: "Carousel-Enhanced Split Hero" aesthetic. `md:grid-cols-2` symmetrical layout. Left: high-density proof area with an `Avatar` stack, large font-semibold heading, "View Features" CTA with `MoveRight`, and two large-scale metric counters (`85%` Conversion boost, `25k+` Customers). Right: dynamic dual-column vertical carousels (`embla-carousel-auto-scroll`) displaying a continuous stream of feature cards (`Pixel-Perfect`, `SEO Optimized`, etc.).
- **Interactivity**: Fully automated, dual-column vertical scroll effect. Responsive persona content.

## Source Code

### `feature114.tsx`
```tsx
"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import {
  Globe,
  MessagesSquare,
  MoveRight,
  PanelsTopLeft,
  PenTool,
  ScissorsLineDashed,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Feature114 = ({ className }: Feature114Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="grid items-center gap-20 md:grid-cols-2">
          {/* Proof Column */}
          <div className="flex flex-col items-center gap-5 text-center md:items-start md:text-left">
            <span className="inline-flex items-center -space-x-4 border rounded-full px-1">
               <Avatar><AvatarImage src="..." /></Avatar>
               {/* iterations... */}
            </span>
            <h1 className="text-3xl font-semibold md:text-5xl italic">Explore New Frontiers...</h1>
            {/* stats... */}
          </div>
          
          {/* Vertical Carousel Column */}
          <div className="grid gap-4 md:gap-7 lg:grid-cols-2">
            <Carousel opts={{ loop: true, align: "start" }} plugins={[AutoScroll({ speed: 0.7 })]} orientation="vertical" className="relative group grayscale hover:grayscale-0 transition-all pointer-events-none">
              <CarouselContent className="max-h-[600px]">
                {/* Feature Card Iterations */}
                <CarouselItem>
                   <div className="flex flex-col rounded-xl border p-4 bg-muted/20">
                      <Zap className="size-12" />
                      <h3 className="font-semibold italic">Pixel-Perfect</h3>
                   </div>
                </CarouselItem>
                {/* ... */}
              </CarouselContent>
              <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-background pointer-events-none"></div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature114 };
```
