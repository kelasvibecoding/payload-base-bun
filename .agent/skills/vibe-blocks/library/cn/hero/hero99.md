# Hero 99

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a balanced marketing introduction using a masked grid pattern and a 3-image staggered grid visual.
- **Use Case**: Best for resource portals, resource management tools, or scaling project platforms that want to emphasize "Versatility" and "Resource availability."
- **Visual Style**: Structured professional aesthetic. Features a centered layout beginning with a prominent informational `Badge`/Link. The typography section is anchored by a sophisticated background `linear-gradient` grid pattern with a soft radial mask (`transparent` to `#000`). The visual anchor is a 3-image grid at the bottom utilizing staggered column spans (`md:col-span-3`, `md:col-span-2`, `md:col-span-5`) to create a high-fidelity visual rhythm.
- **Interactivity**: Static layout. Primary and secondary CTAs use specialized `ChevronRight` icons to drive platform discovery.

## Source Code

### `hero99.tsx`
```tsx
import { ArrowRight, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero99Props {
  className?: string;
}

const Hero90 = ({ className }: Hero99Props) => {
  return (
    <section className={cn("py-20 lg:py-40 font-sans overflow-hidden", className)}>
      <div className="container">
        
        {/* Editorial Text Center */}
        <div className="relative overflow-hidden mb-10 pb-10">
          {/* Masked Grid Pattern Background */}
          <div className="absolute inset-0 -top-1 -left-1 -z-10 h-full w-full bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_50%_100%_at_50%_50%,transparent_50%,#000_100%)] bg-[size:64px_64px] opacity-40"></div>
          
          <div className="mx-auto max-w-5xl px-6 text-center">
            <a
              href="#"
              className="mx-auto mb-10 flex w-fit items-center gap-3 rounded-full bg-muted/50 border border-border/40 px-6 py-2.5 text-sm font-bold tracking-tight shadow-sm hover:bg-muted transition-colors group"
            >
              How to create superior products
              <ArrowRight className="inline size-4 transition-transform group-hover:translate-x-1" />
            </a>
            
            <h1 className="my-6 mb-10 text-5xl font-black lg:text-9xl tracking-tighter leading-[0.9] text-pretty">
              Create effective solutions for <span className="text-primary italic">diverse</span> needs.
            </h1>
            
            <p className="mx-auto mb-12 max-w-3xl text-xl lg:text-3xl text-muted-foreground font-medium leading-relaxed">
              Access all necessary resources for managing tasks and enhancing
              efficiency. Additionally, scale your capabilities across various
              projects with precision.
            </p>
            
            <div className="flex flex-col justify-center gap-4 sm:flex-row mt-4">
              <Button size="lg" className="px-10 py-7 font-black text-lg rounded-full shadow-2xl transition-transform hover:scale-105 active:scale-95 duration-300">
                Get Started
                <ChevronRight className="ml-2 h-6 w-6" />
              </Button>
              <Button variant="secondary" size="lg" className="px-10 py-7 font-bold text-lg rounded-full border shadow-md bg-background/50 backdrop-blur-md">
                Discover Our Platform
                <ChevronRight className="ml-2 h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Staggered 3-Image Rhythm Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-10 group">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
            alt="resource preview 1"
            className="h-full max-h-[500px] w-full rounded-3xl object-cover md:col-span-3 border border-border/40 shadow-xl transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-[1.01]"
          />
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
            alt="resource preview 2"
            className="h-full max-h-[500px] w-full rounded-3xl object-cover md:col-span-2 border border-border/40 shadow-xl transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-[1.01]"
          />
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
            alt="resource preview 3"
            className="h-full max-h-[500px] w-full rounded-3xl object-cover md:col-span-5 border border-border/40 shadow-xl transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-[1.01]"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero90 as Hero99 };
```
