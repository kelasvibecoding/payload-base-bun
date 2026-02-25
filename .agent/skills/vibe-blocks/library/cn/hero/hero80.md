# Hero 80

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a comprehensive marketing introduction using complex background gradients, social proof, and a 2-column image preview grid.
- **Use Case**: Best for UI component libraries, digital product showcases, or developer-facing landing pages that want to emphasize "Visual Quality" and "Adoption."
- **Visual Style**: Value-driven modern aesthetic. Features a 2-column layout. The left column is a high-density typography block including a tracking-wide brand link, social proof avatars, and a star-rating pill (`Star`). The background uses two distinct absolute-positioned `radial-gradient` overlays (`accent` colored) and a "dot grid" pattern mask (`bg-[radial-gradient(...)]`) to create a high-fidelity focal point. The right column features a 2-image staggered grid using precise `aspect-3/4` layouts and `hover:scale-105` transitions.
- **Interactivity**: High interactive hover on image previews. CTAs use standardized `Button` sizes to drive "Browse Components" and "View Demo" tracks.

## Source Code

### `hero80.tsx`
```tsx
"use client";

import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface Hero80Props {
  className?: string;
}

const Hero80 = ({ className }: Hero80Props) => {
  return (
    <section className={cn("relative overflow-hidden py-20 lg:py-40 font-sans", className)}>
      {/* 1. Primary Highlight Gradient */}
      <div className="pointer-events-none absolute inset-x-0 -top-20 -bottom-20 bg-[radial-gradient(ellipse_35%_15%_at_40%_55%,hsl(var(--primary)/0.15)_0%,transparent_100%)] lg:bg-[radial-gradient(ellipse_12%_20%_at_60%_45%,hsl(var(--primary)/0.15)_0%,transparent_100%)]"></div>
      
      {/* 2. Secondary Atmospheric Gradient */}
      <div className="pointer-events-none absolute inset-x-0 -top-20 -bottom-20 bg-[radial-gradient(ellipse_35%_20%_at_70%_75%,hsl(var(--primary)/0.1)_0%,transparent_80%)] lg:bg-[radial-gradient(ellipse_15%_30%_at_70%_65%,hsl(var(--primary)/0.1)_0%,transparent_80%)]"></div>

      {/* 3. Tactical Dot Pattern Mask */}
      <div className="pointer-events-none absolute inset-x-0 -top-20 -bottom-20 bg-[radial-gradient(hsl(var(--primary)/0.1)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_60%_at_65%_50%,#000_0%,transparent_80%)] [background-size:8px_8px]"></div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Typography side */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <a
              href="#"
              className="my-6 text-xs font-black tracking-[0.4em] text-primary uppercase hover:opacity-70 transition-opacity"
            >
              shadcnblocks.com
            </a>

            <h1 className="text-5xl font-black lg:text-8xl tracking-tighter leading-[0.9] text-pretty">
              Beautiful UI
              <br />
              <span className="text-muted-foreground opacity-40 italic">Made Simple</span>
            </h1>

            <p className="my-10 max-w-xl text-lg lg:text-2xl text-muted-foreground font-medium leading-relaxed">
              Build stunning web applications faster with our premium collection
              of ready-to-use UI components. Perfect for high-growth developers.
            </p>

            <div className="flex w-full flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Button size="lg" className="w-full sm:w-fit font-black text-lg px-10 py-7 rounded-full shadow-2xl transition-transform hover:scale-105">
                Browse Components
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-fit font-bold text-lg px-10 py-7 rounded-full border-2 bg-background/50 backdrop-blur-md">
                View Demo
              </Button>
            </div>

            {/* High-fidelity Social Proof Row */}
            <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:items-center group">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4, 5].map((num) => (
                  <Avatar
                    key={num}
                    className="size-14 border-4 border-background shadow-xl ring-2 ring-primary/5 transition-transform group-hover:-translate-y-1"
                  >
                    <AvatarImage
                      src={`https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-${num}.webp`}
                      alt={`user ${num}`}
                    />
                  </Avatar>
                ))}
              </div>

              <div className="flex flex-col items-center sm:items-start">
                <div className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="font-black text-xl ml-1">5.0</span>
                </div>
                <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                  1000+ happy developers
                </p>
              </div>
            </div>
          </div>

          {/* Staggered Image Grid side */}
          <div className="relative grid gap-6 lg:grid-cols-2 mt-10 lg:mt-0">
            {/* Primary Visual */}
            <div className="relative aspect-3/4 w-full overflow-hidden rounded-3xl border border-border/50 shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                alt="UI preview"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Offset Secondary Visual */}
            <div className="relative aspect-3/4 w-full overflow-hidden rounded-3xl border border-border/50 shadow-2xl lg:mt-12 transition-transform duration-700 hover:scale-[1.02]">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
                alt="component preview"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero80 };
```
