# Hero 178

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for customer support platforms, pairing a split-column layout with high-fidelity "Geometric-Type" headlines and a unique "Floating Image Grid."
- **Use Case**: Best for customer support software, team collaboration platforms (e.g., "Change their life"), or customer-focused tools that want to emphasize "Exceptional support" and "Designed for teams."
- **Visual Style**: Narrative Support aesthetic. Features a split-column layout starting with an high-impact typography block Utilizing specialized `clamp` font sizing and a unique "Geometric-Type" heading layout Utilizing absolute-positioned line-breaks. The typography section is anchored by a high-impact title block Utilizing the `mono` font family for categorical social-merit callouts ("Customer Support"). Visual anchor is a unique "Floating Mosaic" on the right Featuring 3 relative-positioned image containers overlaying a specialized structural depth layer. Matrix image units utilize specialized `object-top-left` and `object-top` alignments to create extreme visual depth.
- **Interactivity**: Static layout. Visual anchor emphasizes architectural craftsmanship Through the complex coordinate positioning of multiple high-fidelity project fragments Using `rounded-lg` corners.

## Source Code

### `hero178.tsx`
```tsx
import { cn } from "@/lib/utils";

import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Hero178Props {
  className?: string;
}

const Hero178 = ({ className }: Hero178Props) => {
  return (
    <section
      className={cn(
        "relative bg-background pt-20 lg:pt-40 pb-20 lg:pb-32 font-sans border-b overflow-hidden",
        className,
      )}
    >
      <div className="container relative z-10 px-6 max-w-[100rem]">
        <div className="grid grid-cols-1 items-center gap-16 lg:gap-24 lg:grid-cols-2 text-pretty">
          
          {/* Narrative Narrative side */}
          <div className="flex w-full flex-col gap-12 lg:gap-16 lg:py-[10%]">
            <p className="font-mono text-xs font-black uppercase tracking-[0.5em] text-primary drop-shadow-[0_0_10px_rgba(var(--primary),0.5)]">
              Customer Support Excellence
            </p>
            <div className="flex flex-col gap-10">
                <h1 className="text-7xl font-black lg:text-[11rem] tracking-tighter leading-[0.8] text-foreground drop-shadow-sm uppercase">
                Change<br />
                <span className="text-secondary italic">their</span> life.
                </h1>
                <p className="text-xl lg:text-4xl font-medium leading-relaxed text-muted-foreground italic border-l-8 border-primary/20 pl-12 py-4">
                Customer challenges can cause high-status chaos. 
                Deliver exceptional support with a platform designed for 
                driven, professional teams world-wide.
                </p>
            </div>
          </div>
          
          {/* Unique "Mosaic Fragment Grid" Visual Anchor side */}
          <div className="relative group isolate h-[40rem] lg:h-[55rem] w-full">
            {/* The Atmospheric Atmospheric Depth layers */}
            <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>

            <div className="relative h-full w-full max-w-[60rem] lg:absolute lg:right-0 lg:bottom-0 lg:w-[120%] transition-transform duration-1000 group-hover:-translate-y-4">
              
              {/* Mosaic Frame 1: Foundation landscape (Rear-Right) */}
              <div className="absolute right-0 bottom-12 lg:bottom-24 w-[85%] overflow-hidden rounded-[3rem] border-8 border-background bg-secondary/5 shadow-2xl transition-transform duration-1000 group-hover:scale-105">
                <AspectRatio ratio={0.9 / 1}>
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                    alt="support environment world-view"
                    className="size-full object-cover object-top-left grayscale opacity-80 transition-grayscale duration-1000 group-hover:grayscale-0"
                  />
                </AspectRatio>
              </div>

              {/* Mosaic Frame 2: Core focus wide (Bottom-Left) */}
              <div className="absolute bottom-0 left-[0%] w-[75%] overflow-hidden rounded-[3.5rem] border-[12px] border-background bg-background shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transition-transform duration-1000 group-hover:-translate-x-8">
                <AspectRatio ratio={1.9 / 1}>
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg"
                    alt="support dashboard focus preview"
                    className="size-full object-cover object-center scale-110"
                  />
                </AspectRatio>
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none"></div>
              </div>

              {/* Mosaic Frame 3: Upper fragment wide (Center-Right) */}
              <div className="absolute right-[5%] bottom-24 lg:bottom-48 w-[45%] overflow-hidden rounded-[2.5rem] border-8 border-background bg-muted shadow-2xl transition-transform duration-700 hover:scale-110 group-hover:translate-y-[-10px]">
                <AspectRatio ratio={0.78 / 1}>
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-3.svg"
                    alt="support workflow detail"
                    className="size-full object-cover object-top"
                  />
                </AspectRatio>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export { Hero178 };
```
