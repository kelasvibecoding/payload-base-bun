# Hero 152

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a high-fidelity introduction for design systems, pairing a centered typography block with a unique "Perspective Stack" visual of dashboard previews.
- **Use Case**: Best for UI component libraries, design systems (e.g., "Design system that delivers"), or prototyping tools that want to emphasize "Clean and effortless" and "Minutes to prototype."
- **Visual Style**: High-Status Prototyping aesthetic. Features a centered layout beginning with a prominent trust badge ("Trusted by over 7,000 customers"). Primary CTAs feature unique dual-button styling: a `rounded-[5rem]` "Preview" button with a specialized `MoveUpRight` transition, and a prominent "Get Module" callout. The visual anchor is a unique "Perspective Stack" at the bottom Featuring 3 relative-positioned dashboard previews with specialized high-fidelity transforms (`rotateY(-30deg)_rotateX(-18deg)_rotate(-4deg)`) to create extreme visual depth.
- **Interactivity**: High atmospheric engagement. Features specialized perspectival transforms on image previews and transition-heavy button states.

## Source Code

### `hero152.tsx`
```tsx
import { MoveUpRight, Star } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero152Props {
  className?: string;
}

const Hero152 = ({ className }: Hero152Props) => {
  return (
    <section className={cn("bg-muted pt-20 lg:pt-40 font-sans border-b overflow-hidden", className)}>
      <div className="mx-auto max-w-[100rem] px-6">
        <div className="container relative z-10">
          <div className="mx-auto flex max-w-[50rem] flex-col items-center gap-10 text-center text-pretty">
            
            {/* Design Trust Merit row side */}
            <div className="flex items-center justify-center gap-4 bg-background/50 backdrop-blur-xl px-6 py-2 rounded-full border border-border/40 shadow-sm">
              <Star className="size-5 fill-primary text-primary" />
              <p className="text-xs font-black uppercase tracking-[0.2em] text-foreground">
                Trusted by over 7,000 high-status customers
              </p>
            </div>
            
            <div className="flex flex-col gap-10">
              <h1 className="text-6xl font-black lg:text-9xl tracking-tighter leading-[0.85] text-foreground drop-shadow-sm">
                Design system that <span className="text-primary italic">delivers</span>
              </h1>
              <p className="text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-x-4 border-primary/10 px-10">
                Create, prototype, and personalize any design—clean, 
                effortless, and professional in just minutes.
              </p>
            </div>
            
            <div className="flex w-full flex-wrap items-center justify-center gap-6 md:w-fit mt-4">
              <Button
                variant="secondary"
                asChild
                className="group flex h-fit min-w-[200px] items-center justify-center gap-4 rounded-full border-2 border-primary bg-background px-8 py-5 font-black text-xl shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                <a href="#">
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-icon.svg"
                    alt="design source badge"
                    className="block size-8 shrink-0 grayscale group-hover:grayscale-0"
                  />
                  <span className="tracking-tight">Preview</span>
                  <MoveUpRight className="size-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </Button>
              <Button
                asChild
                variant="default"
                className="flex h-fit min-w-[200px] items-center justify-center gap-4 rounded-full bg-primary px-10 py-5 font-black text-xl text-primary-foreground shadow-2xl transition-all hover:scale-105 active:scale-95"
              >
                <a href="#" className="uppercase tracking-widest leading-none">Get Module</a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Unique "Perspective Prototype Stack" Visual side */}
        <div className="relative mt-32 lg:mt-48 aspect-[1.5/1] lg:aspect-[3/1] group transition-transform duration-1000">
          {/* Ambient Foundation layer */}
          <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full z-0 animate-pulse"></div>

          {/* Perspective Grid: The Stack of Interfaces */}
          <div className="relative h-full w-full [perspective:4000px]">
            {/* Left Layer Overflow */}
            <div className="absolute top-[15%] left-[5%] z-10 aspect-[0.7/1] w-[35%] overflow-hidden rounded-[2rem] lg:rounded-[3rem] border-8 border-background bg-background shadow-2xl transition-transform duration-1000 group-hover:-translate-x-10 group-hover:-translate-y-4">
              <div className="size-full [transform:rotateY(-30deg)_rotateX(-18deg)_rotate(-4deg)] origin-center">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                  alt="design system preview left"
                  className="block size-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Core Center Layer */}
            <div className="absolute top-0 left-1/2 z-20 aspect-[0.7/1] w-[40%] -translate-x-1/2 overflow-hidden rounded-[2rem] lg:rounded-[3.5rem] border-[12px] border-background bg-background shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transition-transform duration-1000 group-hover:-translate-y-8">
              <div className="size-full [transform:rotateY(-30deg)_rotateX(-18deg)_rotate(-4deg)] origin-center">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg"
                  alt="design system preview center"
                  className="block size-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
            </div>

            {/* Right Layer Overflow */}
            <div className="absolute top-[5%] -right-[5%] z-30 aspect-[0.7/1] w-[45%] overflow-hidden rounded-[2rem] lg:rounded-[3rem] border-8 border-background bg-background shadow-2xl transition-transform duration-1000 group-hover:translate-x-10 group-hover:-translate-y-4">
              <div className="size-full [transform:rotateY(-30deg)_rotateX(-18deg)_rotate(-4deg)] origin-center">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-3.svg"
                  alt="design system preview right"
                  className="block size-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero152 };
```
