# Hero 166

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a high-status "Operational Revolution" introduction pairing a split-column layout with a unique "Infinite-Loop" image mosaic.
- **Use Case**: Best for agency dashboards, operational management platforms, or high-end business suites that want to emphasize "Revolutionizing operations" and "Unlock capabilities."
- **Visual Style**: Cinematic Dynamic aesthetic. Features a split-column layout starting with an high-impact typography block paired with a prominent "Book a Demo" CTA Featuring high-fidelity `hover:-translate-y-1` interactivity. The visual anchor is a unique "Infinite-Loop Grid" on the right Featuring a 2-column cluster of containerized images Utilizing 4 specialized CSS-keyframe animations (`transform1` through `transform4` paired with `image1` through `image3`). The mosaic grid creates a continuous, high-fidelity visual rotation of project previews.
- **Interactivity**: High atmospheric engagement. Features multiple synchronized infinite-loop animations to maintain high interactive visual depth and engagement.

## Source Code

### `hero166.tsx`
```tsx
import { cn } from "@/lib/utils";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

interface Hero166Props {
  className?: string;
}

const Hero166 = ({ className }: Hero166Props) => {
  return (
    <section className={cn("bg-background py-20 lg:py-40 font-sans border-b overflow-hidden", className)}>
      <div className="container relative z-10 px-6 max-w-[110rem]">
        <div className="grid w-full grid-cols-1 items-center justify-between gap-24 lg:gap-32 lg:grid-cols-2 text-pretty">
          
          {/* Marketplace Narrative side */}
          <div className="flex w-full flex-col gap-12 lg:gap-20">
            <div className="flex flex-col gap-12">
                <h1 className="font-serif text-6xl font-black lg:text-[9.5rem] tracking-tighter leading-[0.8] text-foreground drop-shadow-sm">
                Revolutionize your <span className="text-primary italic underline decoration-primary/20 decoration-8 underline-offset-8">business</span> operations
                </h1>
                <p className="font-sans text-2xl lg:text-5xl font-medium leading-tight text-muted-foreground italic border-l-8 border-primary/20 pl-12 py-4">
                The ultimate platform to unlock your agency’s potential and world-class capabilities.
                </p>
            </div>
            
            <div className="mt-4">
              <Button
                asChild
                size="lg"
                className="h-fit w-full sm:w-fit rounded-full bg-primary px-12 py-7 font-black text-xl text-primary-foreground shadow-2xl transition-transform hover:scale-105 active:scale-95 duration-300"
              >
                <a href="#" className="uppercase tracking-widest leading-none">Book a Demo</a>
              </Button>
            </div>
          </div>
          
          {/* Unique "Infinite-Loop Mosaic Matrix" Visual Anchor side */}
          <div className="mx-auto w-full max-w-[55rem] lg:mx-0 group relative isolate">
            {/* The Atmospheric Atmospheric Depth layers */}
            <div className="absolute inset-20 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>

            <AspectRatio ratio={1.05 / 1} className="transition-transform duration-1000 group-hover:-translate-y-4">
              <div className="grid w-full grid-cols-2 items-center justify-center gap-8 lg:gap-10">
                
                {/* Column 1 Cluster: Continuous Narrative side */}
                <div className="flex flex-col items-end justify-center gap-8 lg:gap-10">
                  {/* Fragment Frame 1 */}
                  <div className="relative animate-[transform1_15s_ease-in-out_infinite] overflow-hidden rounded-[3rem] border-4 border-background bg-secondary shadow-2xl w-full aspect-[4/5]">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                      alt="operational preview loop"
                      className="absolute block h-full w-full animate-[image1_15s_ease-in-out_infinite] object-cover grayscale transition-all group-hover:grayscale-0"
                    />
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
                      alt="operational preview loop alt"
                      className="absolute block h-full w-full animate-[image2_15s_ease-in-out_infinite] object-cover"
                    />
                  </div>
                  
                  {/* Fragment Frame 2 */}
                  <div className="relative animate-[transform2_15s_ease-in-out_infinite] overflow-hidden rounded-[3.5rem] border-8 border-background bg-muted shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] w-[120%] aspect-square">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
                      alt="capability loop 1"
                      className="absolute block h-full w-full animate-[image1_15s_ease-in-out_infinite] object-cover"
                    />
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg"
                      alt="capability loop 2"
                      className="absolute block h-full w-full animate-[image2_15s_ease-in-out_infinite] object-cover grayscale brightness-75"
                    />
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg"
                      alt="capability loop 3"
                      className="absolute block h-full w-full animate-[image3_15s_ease-in-out_infinite] object-cover"
                    />
                  </div>
                </div>

                {/* Column 2 Cluster: Narrative side */}
                <div className="flex flex-col items-start justify-center gap-8 lg:gap-10">
                  {/* Fragment Frame 3 */}
                  <div className="relative animate-[transform4_15s_ease-in-out_infinite] overflow-hidden rounded-[3rem] border-4 border-background bg-primary/5 shadow-2xl w-3/4 aspect-square">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                      alt="status anchor loop"
                      className="absolute block h-full w-full animate-[image3_15s_ease-in-out_infinite] object-cover brightness-50"
                    />
                  </div>
                  
                  {/* Fragment Frame 4 */}
                  <div className="relative animate-[transform3_15s_ease-in-out_infinite] overflow-hidden rounded-[3.5rem] border-8 border-background bg-secondary shadow-[0_30px_60px_-10px_rgba(0,0,0,0.4)] w-full aspect-[4/5]">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg"
                      alt="agency loop detail 1"
                      className="absolute block h-full w-full animate-[image1_15s_ease-in-out_infinite] object-cover"
                    />
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg"
                      alt="agency loop detail 2"
                      className="absolute block h-full w-full animate-[image2_15s_ease-in-out_infinite] object-cover"
                    />
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-6.svg"
                      alt="agency loop detail 3"
                      className="absolute block h-full w-full animate-[image3_15s_ease-in-out_infinite] object-cover grayscale"
                    />
                  </div>
                </div>
                
              </div>
            </AspectRatio>
          </div>
          
        </div>
      </div>
      
      {/* Required CSS Animations for this high-status infinite loop implementation 
         Note: These should be integrated into individual global CSS libraries side.
      */}
    </section>
  );
};

export { Hero166 };
```
