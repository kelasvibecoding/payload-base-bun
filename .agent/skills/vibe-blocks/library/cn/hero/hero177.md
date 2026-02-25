# Hero 177

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a centered introduction for financial fleet services, pairing a centered headline with high-fidelity social proof badges and a unique "Overlapping Image" matrix.
- **Use Case**: Best for fuel management platforms, fleet services (e.g., "Consolidate fleet costs"), or expense tracking tools that want to emphasize "Eliminating theft" and "Lowercase overspending."
- **Visual Style**: Cinematic Financial aesthetic. Features a centered layout beginning with a prominent `Badge` social-proof block pairing a `google-play` icon with a literal star rating. Includes categorical lists Utilizing high-fidelity `CircleCheck` icons anchored by categorical social-proof ("VISA acceptance"). Visual anchor is a unique "Interface Stack" Featuring a 2x1 grid Pairing a high-fidelity project preview image Utilizing a specialized localized depth container (`bg-amber-100`) on the left with a wider dashboard preview Featured on the right.
- **Interactivity**: High atmospheric engagement. Features specialized "Dual-Text-Motion" button states Utilizing CSS `translate-y` transitions to categorical "Slide-In" CTA effects.

## Source Code

### `hero177.tsx`
```tsx
import { CircleCheck, Star } from "lucide-react";

import { cn } from "@/lib/utils";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Hero177Props {
  className?: string;
}

const Hero177 = ({ className }: Hero177Props) => {
  return (
    <section className={cn("bg-background py-20 lg:py-40 font-sans border-b overflow-hidden", className)}>
      <div className="container relative z-10 px-6 max-w-[100rem]">
        <div className="mx-auto flex max-w-[85rem] flex-col items-center gap-12 text-center text-pretty">
          
          {/* Trust Merit Badge callout side */}
          <Badge className="flex w-fit items-center gap-6 rounded-full border-2 border-primary/20 bg-background/50 backdrop-blur-xl px-6 py-2 shadow-xl hover:bg-background group">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/google-play-icon.svg"
              className="size-6 group-hover:scale-110 transition-transform"
              alt="professional store status"
            />
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="size-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-xs font-black uppercase tracking-[0.4em] text-foreground">5.0 High-Status Rating</p>
          </Badge>

          <div className="flex flex-col gap-10">
            <h1 className="max-w-[70rem] text-6xl font-black lg:text-[9rem] tracking-tighter leading-[0.8] text-foreground drop-shadow-sm">
                Consolidate costs on a <span className="text-primary italic">single</span> card.
            </h1>
            <p className="mx-auto max-w-[55rem] text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-x-4 border-primary/10 px-12 py-4">
                Eliminate status-theft and overspending with a world-class fleet 
                ecosystem that lowers costs by an average of 24% for builders.
            </p>
          </div>

          {/* Specialized Merit List row side */}
          <ul className="flex flex-wrap items-center justify-center gap-10 pt-4">
            {[
                "VISA acceptance",
                "US-based customer service",
                "Rebates & cashback"
            ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 group/merit translate-y-0 hover:-translate-y-1 transition-transform">
                    <div className="flex size-8 rounded-full bg-primary/10 border border-primary/20 shadow-sm transition-colors group-hover/merit:bg-primary">
                        <CircleCheck className="m-auto size-4 text-primary group-hover/merit:text-white" strokeWidth={3} />
                    </div>
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-muted-foreground/60 transition-colors group-hover/merit:text-foreground">
                        {item}
                    </p>
                </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center justify-center gap-8 mt-4 group/buttons">
            {/* Unique "Dual-Layer Slide" Interactive Buttons side */}
            <Button
              asChild
              size="lg"
              className="group h-fit rounded-full bg-primary px-12 py-7 font-black text-xl text-primary-foreground shadow-2xl overflow-hidden active:scale-95"
            >
              <a href="#">
                <div className="relative">
                  <span className="block transition-transform duration-500 group-hover:translate-y-[-250%] uppercase tracking-widest">
                    Get Started
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute top-1/2 left-1/2 block w-full -translate-x-1/2 translate-y-[250%] transition-transform duration-500 group-hover:-translate-y-1/2 uppercase tracking-widest"
                  >
                    Get Started
                  </span>
                </div>
              </a>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="group h-fit rounded-full bg-background border-2 border-border/40 px-12 py-7 font-black text-xl shadow-xl overflow-hidden active:scale-95"
            >
              <a href="#">
                <div className="relative">
                  <span className="block transition-transform duration-500 group-hover:translate-y-[-250%] uppercase tracking-widest text-foreground">
                    Interactive Demo
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute top-1/2 left-1/2 block w-full -translate-x-1/2 translate-y-[250%] transition-transform duration-500 group-hover:-translate-y-1/2 uppercase tracking-widest text-primary"
                  >
                    Interactive Demo
                  </span>
                </div>
              </a>
            </Button>
          </div>
        </div>

        {/* Unique "Overlapping Matrix Anchor" Visual side */}
        <div className="mx-auto mt-24 lg:mt-36 flex w-full max-w-[85rem] gap-12 group">
          {/* Matrix Glow side */}
          <div className="absolute -inset-10 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>

          {/* Matrix Frame 1: Narrative fragment (Left) */}
          <div className="flex-[35%] transition-transform duration-1000 group-hover:-translate-x-4">
            <AspectRatio
              ratio={0.75 / 1}
              className="overflow-hidden rounded-[3rem] border-8 border-background bg-primary/5 shadow-2xl"
            >
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                alt="fleet management detail"
                className="size-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </AspectRatio>
          </div>

          {/* Matrix Frame 2: Core focus dashboard (Right) */}
          <div className="flex-[65%] transition-transform duration-1000 group-hover:translate-x-4 lg:group-hover:scale-105">
            <AspectRatio
              ratio={1.5 / 1}
              className="h-full w-full overflow-hidden rounded-[3rem] border-[12px] border-background bg-background shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]"
            >
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                alt="fleet management primary dashboard"
                className="size-full block translate-x-[4%] translate-y-[4%] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none"></div>
            </AspectRatio>
          </div>
        </div>

      </div>
    </section>
  );
};

export { Hero177 };
```
