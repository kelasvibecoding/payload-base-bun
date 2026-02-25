# Hero 165

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for business operation platforms, pairing a prominent "Editorial-Serif" typography block with a unique "Geometric Image Grid."
- **Use Case**: Best for operation management tools, agency workflow platforms (e.g., "Revolutionize operations"), or high-end business consultancies that want to emphasize "Unlock capabilities" and "Ultimate platform."
- **Visual Style**: Editorial Business aesthetic. Features a split-column layout starting with a unique "Geometric Matrix" on the left Featuring a custom grid of 3 image previews Utilizing specialized categorical background tints (blue-100, green-100, pink-100). Metadata imagery utilizes specialized `rounded-[2vw]` cornering to create a custom architectural "Mosaic" feel. The typography section is anchored by a high-impact heading block Utilizing high-fidelity editorial typography pairings (`font-serif` heading + `font-montserrat` paragraph).
- **Interactivity**: Static layout. Visual anchor uses specialized matrix positioning (`col-[1/3]`, `row-[1/3]`) to create extreme architectural visual depth.

## Source Code

### `hero165.tsx`
```tsx
import { cn } from "@/lib/utils";

import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Hero165Props {
  className?: string;
}

const Hero165 = ({ className }: Hero165Props) => {
  return (
    <section className={cn("bg-background py-20 lg:py-40 font-sans border-b overflow-hidden", className)}>
      <div className="container relative z-10 px-6 max-w-[105rem]">
        <div className="grid grid-cols-1 items-center justify-between gap-24 lg:gap-32 lg:grid-cols-[1fr_auto]">
          
          {/* Unique "Geometric Mosaic Grid" Visual Anchor side */}
          <div className="w-full max-w-[55rem] relative group isolate">
            {/* The Atmospheric Atmospheric Depth layers */}
            <div className="absolute inset-20 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>

            <AspectRatio ratio={0.8 / 1} className="transition-transform duration-1000 group-hover:-translate-y-4">
              <div className="mx-auto grid h-full w-full grid-cols-[14%_48%_14%_14%] grid-rows-[34%_26%_34%] gap-6 lg:gap-8 overflow-visible">
                
                {/* Mosaic 1: High Status Operations block (Top-Left) */}
                <div className="col-[1/3] row-[1/3]">
                  <div className="h-full w-full overflow-hidden rounded-[3rem] lg:rounded-[4rem] border-8 border-background bg-blue-50 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transition-transform duration-1000 group-hover:scale-[1.05]">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                      alt="Business operations preview 1"
                      className="h-full w-full object-cover grayscale transition-grayscale duration-700 hover:grayscale-0"
                    />
                  </div>
                </div>

                {/* Mosaic 2: Capability Fragment (Center-Right) */}
                <div className="col-[3/5] row-[2/3]">
                  <div className="h-full w-full overflow-hidden rounded-[3rem] lg:rounded-[3.5rem] border-8 border-background bg-green-50 shadow-2xl transition-transform duration-1000 group-hover:translate-x-4">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
                      alt="Business operations preview 2"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                {/* Mosaic 3: Foundation Lead (Bottom-Center) */}
                <div className="col-[2/4] row-[3/4]">
                  <div className="h-full w-full overflow-hidden rounded-[3rem] lg:rounded-[4rem] border-8 border-background bg-pink-50 shadow-2xl transition-transform duration-1000 group-hover:scale-110">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
                      alt="Business operations preview 3"
                      className="h-full w-full object-cover grayscale brightness-90 hover:grayscale-0 hover:brightness-100 duration-700"
                    />
                  </div>
                </div>
              </div>
            </AspectRatio>
          </div>

          {/* Revolutionary Narrative side */}
          <div className="flex w-full max-w-[50rem] flex-col gap-12 lg:gap-20 text-pretty">
             <div className="flex w-fit items-center gap-4 rounded-full bg-primary/5 border border-primary/20 px-8 py-3 shadow-inner">
                <div className="size-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(var(--primary),0.8)]"></div>
                <span className="text-xs font-black uppercase tracking-[0.4em] text-foreground">Operational Excellence</span>
             </div>

            <h1 className="font-serif text-6xl font-black lg:text-[10rem] tracking-tighter leading-[0.8] text-foreground drop-shadow-sm">
                Revolutionize your business <span className="text-primary italic">operations</span>
            </h1>
            
            <p className="font-sans text-2xl lg:text-5xl font-medium leading-relaxed text-muted-foreground italic border-l-8 border-primary/20 pl-12 py-4">
              The ultimate platform to unlock your high-status agency’s 
              invisible <span className="text-foreground">capabilities</span>.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export { Hero165 };
```
