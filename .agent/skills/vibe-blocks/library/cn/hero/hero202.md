# Hero 202

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a card-driven introduction for creative design studios, pairing a prominent typography block with a high-fidelity "Card-Container" architectural layout and high-status visual badges.
- **Use Case**: Best for creative agencies, UI/UX design tools (e.g., "Let's Create Something Amazing!"), or professional portfolios that want to emphasize "Amazing!" and "Let's Talk."
- **Visual Style**: Narrative Creative aesthetic. Features a card-driven layout Beginning with a prominent `Card` container Utilizing a specialized `bg-muted` background anchored by a unique `rounded-4xl` border context. The typography section is anchored by an high-impact heading block Utilizing an high-fidelity `bg-linear-to-b` text-gradient. Visual anchor is a unique absolute-positioned "Planetary" fragment Positioning an high-fidelity `tokyo-solar-system` illustration Utilizing specialized `-rotate-45` coordinate positioning to create a high-status visual focus.
- **Interactivity**: High engagement through state transitions. Features specialized card hover effects Positioning unique decorative illustrations and high-fidelity project preview layering to drive professional enrollment.

## Source Code

### `hero202.tsx`
```tsx
import { ArrowRightIcon } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Hero202Props {
  className?: string; // Optional custom styling
}

const Hero202 = ({ className }: Hero202Props) => {
  return (
    <section className={cn("bg-background py-20 lg:py-40 font-sans border-b overflow-hidden group/hero", className)}>
      <div className="container px-6 max-w-[100rem]">
        <Card className="group relative w-full overflow-hidden rounded-[4rem] border-none bg-muted shadow-2xl transition-all duration-1000 hover:shadow-primary/5">
          <CardContent className="py-20 lg:px-24 lg:py-32 isolate">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center text-pretty relative">
              
              {/* Creative Narrative side */}
              <div className="flex flex-col justify-center gap-12 relative z-20">
                <div className="flex items-center gap-6 group/status">
                  <div className="flex size-10 rounded-xl bg-background border-2 border-border/40 items-center justify-center shadow-stone group-hover/status:bg-primary transition-colors">
                    <img
                        className="size-5 group-hover/status:invert transition-all"
                        alt="copy paste functional icon"
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
                    />
                  </div>
                  <p className="text-xl font-black uppercase tracking-[0.4em] text-foreground leading-none">
                    World-class Copy Paste blocks
                  </p>
                </div>

                <div className="flex flex-col gap-10">
                    <h1 className="text-6xl font-black lg:text-9xl tracking-tighter leading-[0.8] text-foreground drop-shadow-sm uppercase">
                    Let&apos;s create something <br />
                    <span className="bg-linear-to-b from-primary to-primary/60 bg-clip-text text-transparent italic">
                        Amazing!
                    </span>
                    </h1>
                </div>

                <div className="flex items-center gap-6 group/buttons">
                  <Button size="lg" className="h-fit rounded-full bg-foreground px-12 py-7 font-black text-xl text-background shadow-2xl transition-transform hover:scale-105 active:scale-95 duration-500 uppercase tracking-widest leading-none">
                    Let&apos;s talk world-wide
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="size-20 -rotate-45 rounded-full border-2 border-foreground/10 bg-background/50 backdrop-blur-xl shadow-xl transition-all duration-700 hover:rotate-0 hover:bg-primary hover:text-white"
                  >
                    <ArrowRightIcon className="size-8" strokeWidth={3} />
                  </Button>
                </div>
              </div>

              {/* Unique "Architectural Fragment Anchor" Visual side */}
              <div className="absolute -right-80 -bottom-80 -rotate-45 transition-all duration-1000 ease-in-out group-hover:-rotate-0 opacity-20 group-hover:opacity-40 grayscale group-hover:grayscale-0 pointer-events-none z-10">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/illustrations/tokyo-solar-system-around-a-smiley.svg"
                  className="size-[60rem] lg:size-[80rem]"
                  alt="architectural planet illustration core"
                />
              </div>

              {/* Atmos Depth layer side */}
              <div className="absolute top-0 right-0 bg-primary/5 blur-[120px] rounded-full z-0 animate-pulse size-1/2"></div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export { Hero202 };
```
