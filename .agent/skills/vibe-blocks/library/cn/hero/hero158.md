# Hero 158

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for innovation-focused platforms, pairing a split-column layout with a unique "Diagonal-Row" image mosaic.
- **Use Case**: Best for innovation hubs, future-focused consultancies, or startup incubators that want to emphasize "Uncovering our vision" and "Innovating solutions."
- **Visual Style**: Narrative Growth aesthetic. Features a split-column layout on a specialized `bg-primary/5` background. The typography section is anchored by a categorical title block paired with a unique "Dynamic-Slide" CTA button. Visual anchor is a unique "Mosaic Matrix" on the right Featuring a 2x1 grid of 3 containerized images. The matrix grid uses custom `col-[1/2]` and `row-[1/3]` offsets to create a staggered, high-status project preview block.
- **Interactivity**: High atmospheric engagement. Features a specialized "Double-Icon" button animation Utilizing two relative-positioned `MoveRight` icons for a cinematic slide-through effect on hover. Project images utilize specialized `rounded-3xl` cornering to match modern visual hardware.

## Source Code

### `hero158.tsx`
```tsx
import { MoveRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

interface Hero158Props {
  className?: string;
}

const Hero158 = ({ className }: Hero158Props) => {
  return (
    <section className={cn("bg-primary/5 py-20 lg:py-40 font-sans border-b overflow-hidden", className)}>
      <div className="container relative z-10 px-6 max-w-[90rem]">
        <div className="grid grid-cols-1 gap-24 lg:gap-32 lg:grid-cols-2 items-center">
          
          {/* Innovations Narrative side */}
          <div className="flex flex-col gap-12 lg:gap-20 text-pretty">
            <div className="flex flex-col gap-10">
              <h1 className="text-6xl font-black lg:text-9xl tracking-tighter leading-[0.85] text-foreground drop-shadow-sm">
                Uncover our vision for a more <span className="text-primary italic underline decoration-primary/20 decoration-8 underline-offset-8">innovative</span>, better future.
              </h1>
              <p className="text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-l-4 border-primary/20 pl-10 max-w-xl">
                Be part of our journey to innovate and develop solutions that
                enrich lives and fuel progress for high-status builders.
              </p>
            </div>
            
            {/* Unique "Dual-Move" Interactive Advanced Motion Button */}
            <Button
              asChild
              size="lg"
              className="group h-fit w-fit items-center gap-6 rounded-full bg-primary px-12 py-7 font-black text-xl text-primary-foreground shadow-2xl transition-transform hover:scale-105 active:scale-95 duration-500 overflow-hidden"
            >
              <a href="#">
                <span className="uppercase tracking-widest leading-none">Started for free</span>
                {/* Advanced icon slide effect */}
                <div className="relative h-8 w-10 overflow-hidden">
                  <div className="absolute top-0 left-0 flex -translate-x-1/2 items-center transition-transform duration-700 ease-in-out group-hover:translate-x-0">
                    <MoveRight className="size-8 text-white px-1" strokeWidth={3} />
                    <MoveRight className="size-8 text-white px-1" strokeWidth={3} />
                  </div>
                </div>
              </a>
            </Button>
          </div>
          
          {/* Unique "Mosaic Matrix" Visual Anchor side */}
          <div className="w-full relative group">
            {/* Structural Glow layer */}
            <div className="absolute -inset-20 bg-primary/10 blur-[120px] rounded-full z-[-1] animate-pulse"></div>
            
            <AspectRatio ratio={1.4 / 1}>
              <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-8 lg:gap-12 transition-transform duration-1000 group-hover:-translate-y-4">
                
                {/* Matrix 1: Long Foundation (Left) */}
                <div className="col-[1/2] row-[1/3]">
                  <div className="h-full w-full overflow-hidden rounded-[3rem] border-4 border-background bg-secondary/5 shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                      alt="visionary innovation preview 1"
                      className="size-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  </div>
                </div>
                
                {/* Matrix 2: Fragment block (Top-Right) */}
                <div className="col-[2/3] row-[1/2]">
                  <div className="h-full w-full overflow-hidden rounded-[3rem] border-4 border-background bg-primary/5 shadow-xl transition-transform duration-700 hover:scale-[1.05]">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg"
                      alt="visionary innovation preview 2"
                      className="size-full object-cover opacity-80"
                    />
                  </div>
                </div>
                
                {/* Matrix 3: Fragment block (Bottom-Right) */}
                <div className="col-[2/3] row-[2/3]">
                  <div className="h-full w-full overflow-hidden rounded-[3rem] border-4 border-background bg-muted/50 shadow-xl transition-transform duration-700 hover:scale-[1.05]">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-3.svg"
                      alt="visionary innovation preview 3"
                      className="size-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </AspectRatio>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export { Hero158 };
```
