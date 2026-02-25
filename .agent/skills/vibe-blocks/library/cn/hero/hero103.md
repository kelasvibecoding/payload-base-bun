# Hero 103

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a high-status B2B billing introduction using custom background textures, a complex asymmetrical image layout, and an high-density auto-scrolling brand cloud.
- **Use Case**: Best for fintech platforms, enterprise billing hubs (e.g., "Usage-based Pricing" tools), or SaaS growth platforms that want to emphasize "Scale" and "Enterprise Trust."
- **Visual Style**: Enterprise-Dark professional aesthetic. Features a split-grid layout using a `dark` theme class on a specialized "Noise" texture pattern background (`noise.png`). The left column is a technical typography block including a tracking-wide "Guide" CTA and standard-variant primary CTAs using `font-mono`. The visual anchor is a unique asymmetrical 4-image stack on the right, utilizing precise absolute positioning and specialized `rounded-3xl` cards to create a complex layered "Dashboard" feel. The section concludes with a full-width auto-scrolling `Carousel` brand wall (`AutoScroll` plugin) displaying white-logo wordmarks (`SUPABASE`, `VERCEL`, etc.).
- **Interactivity**: High interactive motion. Features auto-scrolling global brand cloud. Typography side uses standardized `ChevronRight` hover transitions.

## Source Code

### `hero103.tsx`
```tsx
"use client";
import AutoScroll from "embla-carousel-auto-scroll";
import Autoplay from "embla-carousel-autoplay";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Hero103Props {
  className?: string;
}

const Hero103 = ({ className }: Hero103Props) => {
  return (
    <section
      className={cn(
        "dark bg-background bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/noise.png')] py-20 lg:py-40 font-sans overflow-hidden",
        className,
      )}
    >
      <div className="container relative z-10 px-6">
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-[minmax(35rem,1fr)_1.8fr]">
          
          {/* Billing Transformation side */}
          <div className="flex flex-col gap-10">
            <h1 className="text-5xl font-black text-foreground drop-shadow-sm md:text-7xl lg:text-9xl tracking-tighter leading-[0.85] text-pretty">
              Anticipate greater value from your billing
            </h1>
            <p className="text-xl lg:text-3xl font-medium text-white/70 leading-relaxed max-w-2xl border-l-4 border-primary pl-8 py-2">
              Our service is a usage-based billing platform designed to
              accelerate your product launches. Effortlessly shape your
              pricing today and refine it with confidence tomorrow.
            </p>
            
            <div className="flex flex-col items-center gap-10 lg:flex-row mt-4">
                <Button
                    asChild
                    size="lg"
                    className="block h-fit w-fit rounded-full px-12 py-7 font-black text-xl leading-4 tracking-widest uppercase shadow-2xl transition-transform hover:scale-105"
                >
                    <a href="#">Get a Demo</a>
                </Button>
                
                <Button
                variant="ghost"
                asChild
                className="group flex h-fit items-center gap-4 hover:bg-transparent px-0"
                >
                <a href="#">
                    <p className="text-sm font-black text-white/50 uppercase tracking-[0.4em] group-hover:text-primary transition-colors">
                    GUIDE TO USAGE-BASED PRICING
                    </p>
                    <div className="p-2 rounded-full border border-white/20 group-hover:border-primary transition-colors">
                        <ChevronRight className="h-4 w-4 shrink-0 stroke-foreground group-hover:stroke-primary transition-transform group-hover:translate-x-1" />
                    </div>
                </a>
                </Button>
            </div>
          </div>
          
          {/* Asymmetrical "Billing Pulse" Visual side */}
          <div className="relative group">
            <div className="absolute -inset-10 bg-primary/5 blur-3xl rounded-full opacity-60"></div>
            <div className="relative mr-auto ml-auto aspect-[1.3/1] w-full max-w-[45rem] lg:mr-0 lg:ml-auto">
              
              {/* Main Container Card */}
              <div className="relative mx-auto aspect-[1/1] h-full w-[80%] overflow-hidden rounded-[3rem] border-2 border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transition-transform duration-1000 group-hover:translate-y-4">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                  alt="billing hub dashboard"
                  className="relative z-10 w-full object-cover grayscale brightness-75 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100"
                />
              </div>
              
              {/* Floating Overlay Card 1: Metrics */}
              <div className="absolute top-[20%] -left-[5%] z-30 aspect-[1.76/1] w-[35%] overflow-hidden rounded-3xl border border-white/20 shadow-2xl transition-transform duration-700 group-hover:-translate-x-4">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
                  alt="revenue metrics overlay"
                  className="size-full object-cover"
                />
              </div>
              
              {/* Floating Overlay Card 2: User List */}
              <div className="absolute top-[55%] left-[0%] z-40 aspect-[1.77/1] w-[45%] overflow-hidden rounded-3xl border border-white/20 shadow-2xl transition-transform duration-1000 group-hover:-translate-y-4">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
                  alt="billing customers list"
                  className="size-full object-cover"
                />
              </div>
              
              {/* Floating Overlay Card 3: Status */}
              <div className="absolute top-[40%] right-[-5%] z-30 aspect-[1.17/1] w-[30%] overflow-hidden rounded-3xl border border-white/20 shadow-2xl transition-transform duration-700 group-hover:translate-x-4">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg"
                  alt="system status indicator"
                  className="size-full object-cover"
                />
              </div>
              
            </div>
          </div>
        </div>
      </div>
      
      {/* High-Fidelity Enterprise Logo Cloud */}
      <div className="flex flex-col items-center justify-center gap-12 pt-32 lg:pt-48 relative z-10">
        <p className="px-5 text-center text-xs font-black text-white/30 uppercase tracking-[0.5em]">
          Powering performance for the world&apos;s most innovative teams
        </p>
        <Carousel
          opts={{
            loop: true,
            align: "center",
          }}
          plugins={[
            AutoScroll({
              speed: 1,
            }),
            Autoplay({
              playOnInit: true,
              delay: 1000,
            }),
          ]}
          className="relative w-full max-w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[15%] before:bg-gradient-to-r before:from-background before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[15%] after:bg-gradient-to-l after:from-background after:to-transparent"
        >
          <CarouselContent className="items-center">
            {["react", "shadcn-ui", "supabase", "tailwind", "vercel", "react", "shadcn-ui", "supabase", "tailwind", "vercel"].map((brand, i) => (
                <CarouselItem key={`${brand}-${i}`} className="w-fit basis-auto px-12 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
                    <img
                        src={`https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/${brand}-wordmark-white.svg`}
                        alt={brand}
                        className="h-8 lg:h-10 w-full object-contain"
                    />
                </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export { Hero103 };
```
