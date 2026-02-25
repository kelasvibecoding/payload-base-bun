# Hero 162

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a cinematic introduction for mental wellness services, pairing a split-column layout with a unique "Diagonal-Row" testimonial and project mosaic.
- **Use Case**: Best for mental health platforms, wellness consultancies, or high-end therapy hubs that want to emphasize "Setting industry standards" and "Personalized care."
- **Visual Style**: Cinematic Wellness aesthetic. Features a split-column layout on a dark `bg-background` background. The typography section is anchored by a high-impact title block paired with a prominent "Our services" CTA Utilizing a specialized `transition_duration-500` hover-scale effect. The visual anchor is a unique "Mosaic Matrix" on the right Featuring a 2x2 cluster of containerized images using custom `row-[1/2]` and `md:col-[1/3]` offsets. Includes a unique "Card-Testimonial" block pairing a specialized client avatar with categorical metadata ("More grounded and at ease").
- **Interactivity**: High atmospheric engagement. Features specialized perspectival transforms on image containers using `rounded-3xl` corners to match hardware architectural primitives.

## Source Code

### `hero162.tsx`
```tsx
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero162Props {
  className?: string;
}

const Hero162 = ({ className }: Hero162Props) => {
  return (
    <section
      className={cn(
        "dark relative bg-background py-20 lg:py-40 font-sans min-h-[60rem] lg:h-[62.5rem] border-b overflow-hidden",
        className,
      )}
    >
      <div className="container h-full w-full relative z-20">
        <div className="mx-auto grid h-full w-full max-w-[90rem] grid-cols-1 items-center gap-24 lg:grid-cols-2 text-pretty">
          
          {/* Wellness Narrative side */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-10">
                <h1 className="text-6xl font-black lg:text-9xl tracking-tighter leading-[0.85] text-foreground drop-shadow-sm">
                    Setting <span className="text-primary italic">standards</span> through excellence.
                </h1>
                <p className="text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-l-4 border-primary/20 pl-10">
                    Professional support for mental wellness. Personalized care for
                    emotional balance for high-status individuals.
                </p>
            </div>
            
            <div className="mt-4">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="flex h-fit w-fit items-center justify-center gap-4 rounded-full border-2 border-white bg-transparent px-12 py-7 font-black text-xl text-white transition-all duration-500 hover:scale-110 hover:bg-white hover:text-black shadow-2xl active:scale-95"
              >
                <a href="#" className="uppercase tracking-widest leading-none">Our services</a>
              </Button>
            </div>
          </div>
          
        </div>
      </div>

      {/* Unique "Mosaic Matrix" Visual Anchor side */}
      <div className="absolute top-0 right-0 bottom-0 left-auto w-full lg:max-w-[45%] pointer-events-none group px-6 lg:px-0">
        <div className="grid h-full w-full grid-cols-1 grid-rows-[25rem_auto_15rem] gap-8 md:grid-cols-[1.5fr_1fr] md:grid-rows-[75%_minmax(15%,12rem)] pb-12 lg:pb-0 pt-20 lg:pt-0">
          
          {/* Component 1: Large Wide Preview (Top) */}
          <div className="row-[1/2] md:col-[1/3] overflow-hidden">
            <div className="h-full w-full overflow-hidden rounded-[3rem] border-8 border-background bg-muted shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transition-transform duration-1000 group-hover:-translate-y-4">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                alt="wellness environment preview"
                className="size-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Component 2: The Interactive Client Card (Bottom-Left) */}
          <div className="col-[1/2] row-[2/3] group/card">
            <div className="flex h-full flex-col gap-6 overflow-hidden rounded-[2.5rem] border-4 border-background bg-primary/5 backdrop-blur-3xl p-8 lg:p-10 md:flex-row md:items-center transition-transform duration-700 hover:scale-105 shadow-2xl pointer-events-auto">
              {/* Specialized Client Avatar side */}
              <div className="h-20 w-20 shrink-0 overflow-hidden rounded-2xl md:h-28 md:w-28 border-4 border-background shadow-xl">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp"
                  alt="happy client"
                  className="size-full object-cover grayscale transition-grayscale duration-500 group-hover/card:grayscale-0"
                />
              </div>
              <div className="flex h-full flex-col justify-center gap-3">
                <p className="text-xl lg:text-3xl font-black text-foreground italic leading-tight">
                  &quot;Since beginning therapy here, I feel more grounded and
                  at ease.&quot;
                </p>
                <div className="flex items-center gap-4 text-sm font-black uppercase tracking-[0.2em] text-muted-foreground/60">
                    <span>John Doe</span>
                    <span className="block size-1.5 rounded-full bg-primary/40"></span>
                    <span>High-Status Client</span>
                </div>
              </div>
            </div>
          </div>

          {/* Component 3: Small Square Preview (Bottom-Right) */}
          <div className="row-[3/4] md:col-[2/3] md:row-[2/3]">
            <div className="h-full w-full overflow-hidden rounded-[2.5rem] border-4 border-background bg-secondary shadow-xl transition-transform duration-700 hover:-translate-x-4">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
                alt="therapeutic space fragment"
                className="size-full object-cover opacity-80"
              />
            </div>
          </div>
          
        </div>
      </div>
      
       {/* Ambient Depth Background layers */}
       <div className="absolute top-[20%] right-[30%] z-0 size-96 bg-primary/5 blur-[120px] rounded-full animate-pulse"></div>
    </section>
  );
};

export { Hero162 };
```
