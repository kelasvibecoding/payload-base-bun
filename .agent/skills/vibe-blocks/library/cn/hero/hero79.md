# Hero 79

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a high-contrast industrial introduction using a full-screen photographic background and a sophisticated bottom-weighted layout.
- **Use Case**: Best for industrial firms, networking infrastructure companies (e.g., "Fiber Optics"), or manufacturing networks where "Scale" and "Physical footprint" are the primary status signals.
- **Visual Style**: High-Industrial cinematic aesthetic. Features a full-screen (`h-svh`) background image layout utilizing a high-fidelity industrial photograph (`andrew-kliatskyi-...`). The visual anchor is a unique bottom-aligned layout (`flex items-end justify-between`) that places the logo at the top and the typography/CTA at the bottom of the viewport. The headline uses extremely oversized typography (`md:text-[5.8rem]`) to convey scale and authority.
- **Interactivity**: High-priority "Read More" progression. Features a ghost-variant `Button` in the bottom-right corner with a large `ArrowDown` icon to drive scrolling interaction.

## Source Code

### `hero79.tsx`
```tsx
import { ArrowDown } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero79Props {
  className?: string;
}

const Hero79 = ({ className }: Hero79Props) => {
  return (
    <section
      className={cn(
        "dark h-svh w-full relative bg-background bg-no-repeat bg-cover bg-center overflow-hidden font-sans",
        className,
      )}
      style={{
        backgroundImage: "url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/full-width-backgrounds/andrew-kliatskyi-MaVm_A0xhKk-unsplash.jpg')"
      }}
    >
      {/* Dark tint overlay for industrial depth */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <div className="container relative z-10 h-full flex flex-col justify-between items-start py-20 px-6 xl:px-20 mx-auto">
        {/* Brand Header */}
        <div className="p-4 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
            <img src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-white-1.svg" alt="CableCore logo" className="h-12 w-12" />
        </div>
        
        {/* Bottom Editorial Layout */}
        <div className="flex w-full items-end justify-between gap-10">
          <div className="flex w-full flex-col gap-10 md:w-3/4">
            <h1 className="text-6xl font-black text-white md:text-8xl lg:text-[7.5rem] tracking-tighter leading-[0.85] text-pretty">
              Create your own fiber optics facility
            </h1>
            <p className="text-xl text-white/80 lg:text-3xl font-medium leading-relaxed max-w-2xl border-l-4 border-primary pl-6 py-2">
              CableCore Partnership. Worldwide network. Regional manufacturing. Unrivaled infrastructure access.
            </p>
          </div>
          
          {/* Scroll Discovery CTA */}
          <Button
            variant="ghost"
            className="hidden items-center gap-4 text-white hover:bg-white/10 h-fit rounded-full px-8 py-10 transition-all hover:translate-y-2 md:flex group"
          >
            <span className="text-2xl font-black uppercase tracking-widest whitespace-nowrap">Read More</span>
            <div className="p-2 rounded-full border-2 border-white/40 group-hover:border-white transition-colors">
                <ArrowDown className="size-8!" />
            </div>
          </Button>
        </div>
      </div>
      
      {/* Bottom Vignette for text contrast */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent z-0 pointer-events-none"></div>
    </section>
  );
};

export { Hero79 };
```
