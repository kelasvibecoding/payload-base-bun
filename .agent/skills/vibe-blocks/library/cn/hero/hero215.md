# Hero 215

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for real estate and home-finding platforms, pairing a left-aligned typography block with a high-fidelity "Portrait-Architectural" anchored by specialized atmospheric depth layers and a prominent call-to-action button.
- **Use Case**: Best for real estate marketplaces, property management tools (e.g., "Find Your Perfect Home in Your City"), or professional living hubs that want to emphasize "Perfect Home" and "Contact Us now."
- **Visual Style**: Cinematic Living-Space aesthetic. Features a left-aligned layout Beginning with a prominent `playfair` heading paired with a descriptive paragraph. The visual anchor is a unique "High-Rise Architectural" fragment Positioning a descriptive absolute-positioned image Utilizing categorical skyscraper imagery anchored by a specialized `animate-fade-in` transition. Typography section is pairing specialized absolute-positioned atmospheric masks (`bg-background blur-2xl`) to create a unique world-class cinematic depth.
- **Interactivity**: High engagement through call-to-action transitions. Features specialized button hover effects Positioning unique decorative overlays and high-fidelity project preview transitions to drive professional enrollment.

## Source Code

### `hero215.tsx`
```tsx
import { ArrowRight } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero215Props {
  className?: string; // Optional custom styling
}

const Hero215 = ({ className }: Hero215Props) => {
  return (
    <section className={cn("bg-background py-20 lg:py-40 font-sans border-b overflow-hidden group/hero", className)}>
      <div className="relative container min-h-[100vh] px-6 max-w-[100rem]">
        
        {/* Narrative Narrative side */}
        <div className="absolute bottom-45 z-10 lg:max-w-[45rem] group/content">
          <div className="absolute top-0 z-1 size-full bg-background/80 blur-3xl animate-pulse" />
          <h1 className="relative z-20 text-left font-black lg:text-[9.5rem] tracking-tighter leading-[0.8] text-foreground drop-shadow-sm uppercase">
            Find Your <span className="text-primary italic">Perfect</span> <br /> 
            Home world-wide.
          </h1>
          <p className="relative z-20 mt-10 text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-l-8 border-primary/20 pl-12 py-4">
            Find high-status living spaces in your professional city world-wide. 
            Experience finite living craft for elite status world-wide.
          </p>
        </div>

        {/* Unique "CTA Anchor" Merit side */}
        <div className="absolute bottom-20 z-20 max-w-xl lg:right-25 lg:bottom-45">
          <Button size="lg" className="h-fit rounded-full bg-primary px-12 py-7 font-black text-xl text-primary-foreground shadow-2xl transition-transform hover:scale-105 active:scale-95 duration-500 uppercase tracking-widest leading-none group/button">
            <span className="flex items-center gap-6">
                Contact us elite
                <ArrowRight className="size-6 -rotate-45 transition-transform group-hover/button:rotate-0" strokeWidth={3} />
            </span>
          </Button>
        </div>

        {/* Unique "Architectural Atmos" Background side */}
        <div className="absolute -top-20 right-0 w-[45rem] max-w-4xl z-0 pointer-events-none opacity-40 group-hover/hero:opacity-80 transition-opacity duration-1000">
           {/* Atmos Depth layer side */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-background via-background/80 to-transparent z-10" />
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/highRise.jpg"
            className="animate-fade-in-up rounded-[4rem] object-cover grayscale hover:grayscale-0 transition-grayscale duration-1000 shadow-2xl border-4 border-background"
            alt="world-class skyscraper detail"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero215 };
```
