# Hero 168

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a cinematic introduction, pairing a split-column layout with a unique "Layered Fragment" visual cluster.
- **Use Case**: Best for creative agencies, digital portfolios, or multi-faceted platforms that want to emphasize "Welcoming users" and "Discovering services."
- **Visual Style**: Narrative Fragment aesthetic. Features a split-column layout starting with an high-impact typography block paired with a prominent "Get Started" CTA. The visual anchor is a unique "Card Matrix" on the right Featuring 4 relative-positioned image fragments overlaying a specialized `bg-linear-to-b` background container. The cluster uses extreme coordinate positioning (`-left-44`, `bottom-[70%]`) to create an architectural, scattered visual depth.
- **Interactivity**: Static layout. Visual anchor emphasizes complex structural depth through the layering of multiple specialized image "fragments" Using `rounded-lg` corners and high-fidelity shadow depth.

## Source Code

### `hero168.tsx`
```tsx
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero168Props {
  className?: string;
}

const Hero168 = ({ className }: Hero168Props) => {
  return (
    <section className={cn("bg-background py-20 lg:py-40 font-sans border-b overflow-hidden", className)}>
      <div className="container relative z-10 px-6 max-w-[95rem]">
        <div className="flex flex-col items-center justify-between gap-16 md:flex-row lg:gap-32 text-pretty">
          
          {/* Marketplace Narrative side */}
          <div className="flex w-full flex-col items-start gap-12 lg:gap-16">
            <div className="flex flex-col gap-10">
                <h1 className="text-6xl font-black lg:text-[9.5rem] tracking-tighter leading-[0.8] text-foreground drop-shadow-sm">
                Transform your <span className="text-primary italic">vision</span> into reality.
                </h1>
                <p className="max-w-[35rem] text-xl lg:text-4xl font-medium leading-relaxed text-muted-foreground italic border-l-4 border-primary/20 pl-10">
                Experience high-status digital craftsmanship. We build professional 
                solutions for those who demand excellence in every pixel.
                </p>
            </div>
            
            <div className="mt-4">
              <Button
                size="lg"
                className="group h-fit rounded-full bg-primary px-12 py-7 font-black text-xl text-primary-foreground shadow-2xl transition-transform hover:scale-105 active:scale-95 duration-300"
                variant="default"
              >
                <a href="#" className="flex items-center gap-6 uppercase tracking-widest leading-none">
                    <span>Get Started</span>
                    <ArrowRight className="size-6 transition-transform group-hover:translate-x-2" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Unique "Interface Fragment Stack" Visual Anchor side */}
          <div className="relative flex h-[35rem] lg:h-[50rem] w-full rounded-[4rem] group isolate">
            {/* Structural Atmospheric Backdrop side */}
            <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>

            <div className="absolute flex h-full w-[120vw] lg:w-screen rounded-[4rem] border-8 border-background bg-linear-to-b from-primary/5 to-secondary/5 shadow-2xl overflow-visible transition-transform duration-1000 group-hover:-translate-x-8">
              
              {/* Primary Central Focus Frame side */}
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                alt="digital solution showcase"
                className="my-auto ml-20 lg:ml-48 block h-3/5 w-auto rounded-[3rem] border-8 border-background object-cover shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transition-transform duration-1000 group-hover:scale-105"
              />

              {/* Fragment cluster 1: The Stacked Pair (Left) */}
              <div className="absolute top-1/2 -left-8 lg:-left-24 -translate-y-1/2 flex flex-col gap-8 transition-transform duration-700 group-hover:-translate-x-4">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg"
                  alt="interface detail 1"
                  className="h-32 w-56 lg:h-48 lg:w-80 rounded-[2rem] border-4 border-background object-cover shadow-2xl"
                />
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-3.svg"
                  alt="interface detail 2"
                  className="h-32 w-56 lg:h-48 lg:w-80 rounded-[2rem] border-4 border-background bg-muted object-cover shadow-2xl"
                />
              </div>

              {/* Fragment cluster 2: The Floating Callout (Bottom-Left) */}
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-3.svg"
                alt="interface quick-access item"
                className="absolute bottom-12 lg:bottom-24 -left-12 lg:left-32 h-36 w-64 lg:h-52 lg:w-96 rounded-[2rem] border-4 border-background bg-muted shadow-2xl transition-transform duration-1000 group-hover:scale-110 group-hover:-translate-y-4"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export { Hero168 };
```
