# Hero 173

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for creative studios, pairing a split-column layout with a unique "Diagonal-Row" image stack and a video interaction callout.
- **Use Case**: Best for creative studios, design agencies (e.g., "Harmony Studio"), or digital product shops that want to emphasize "Stunning experiences" and "Brand-new websites."
- **Visual Style**: Narrative Studio aesthetic. Features a split-column layout starting with an high-impact typography block paired with two unique CTAs: a primary "Discover Now" button and a secondary "How it works" video trigger Featuring a prominent `Play` icon. The visual anchor is a unique "Diagonal Matrix" on the right Featuring 3 relative-positioned image fragments overlaying a specialized structural depth layer. The grid uses custom `bottom-0`, `top-1/2`, and `top-0` offsets to create an architectural, overlapping visual preview block.
- **Interactivity**: High interactive storytelling. Features specialized video modal trigger paired with high-fidelity project previews Utilizing `rounded-sm` corners to match minimalist architectural hardware.

## Source Code

### `hero173.tsx`
```tsx
"use client";
import { Play } from "lucide-react";
import { Fragment, useState } from "react";

import { cn } from "@/lib/utils";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Hero173Props {
  className?: string;
}

const Hero173 = ({ className }: Hero173Props) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <Fragment>
      <section className={cn("bg-background py-20 lg:py-40 font-sans border-b overflow-hidden", className)}>
        <div className="container relative z-10 px-6 max-w-[90rem]">
          <div className="grid grid-cols-1 items-center gap-24 lg:gap-32 lg:grid-cols-2 text-pretty">
            
            {/* Studio Narrative side */}
            <div className="flex flex-col gap-12 lg:gap-16">
              <div className="flex flex-col gap-8">
                <p className="text-xs font-black uppercase tracking-[0.5em] text-primary drop-shadow-[0_0_10px_rgba(var(--primary),0.5)]">
                  Harmony Creative Studio
                </p>
                <div className="flex flex-col gap-10">
                  <h1 className="text-6xl font-black lg:text-[9.5rem] tracking-tighter leading-[0.8] text-foreground drop-shadow-sm">
                    Boost your business with a <span className="text-secondary italic underline decoration-secondary/20 decoration-8 underline-offset-8">brand-new</span> website.
                  </h1>
                  <p className="max-w-[40rem] text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-l-4 border-primary/20 pl-10">
                    Harmony is a full-service design studio crafting stunning
                    high-status digital experiences and professional products.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-8 py-4">
                <Button
                  asChild
                  size="lg"
                  className="h-fit rounded-full bg-primary px-12 py-7 font-black text-xl text-primary-foreground shadow-2xl transition-transform hover:scale-105 active:scale-95 duration-300"
                >
                  <a href="#" className="uppercase tracking-widest leading-none">Discover Now</a>
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => setIsVideoOpen(true)}
                  className="group flex h-fit items-center gap-6 rounded-full bg-background border-2 border-border/40 px-10 py-7 font-bold text-xl shadow-xl transition-all hover:bg-muted active:scale-[0.98]"
                >
                    <div className="flex size-10 rounded-full bg-primary shadow-xl group-hover:scale-110 transition-transform">
                        <Play className="m-auto size-4 fill-white stroke-white ml-1" />
                    </div>
                    <span className="uppercase tracking-widest leading-none">How it works?</span>
                </Button>
              </div>
            </div>
            
            {/* Unique "Diagonal Matrix Stack" Visual Anchor side */}
            <div className="relative group isolate">
                {/* Atmos depth layer side */}
                <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>

              <div className="relative mx-auto aspect-[0.8/1] w-full max-w-[40rem] transition-transform duration-1000 group-hover:-translate-y-4">
                
                {/* Matrix Frame 1: Foundation fragment (Bottom-Left) */}
                <div className="absolute bottom-0 left-0 z-30 w-[63%] transition-transform duration-1000 group-hover:-translate-x-4 group-hover:translate-y-4">
                  <AspectRatio
                    ratio={0.72 / 1}
                    className="overflow-hidden rounded-[3rem] border-8 border-background bg-secondary/10 shadow-2xl"
                  >
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                      alt="studio project preview 1"
                      className="size-full object-cover grayscale transition-grayscale duration-1000 group-hover:grayscale-0"
                    />
                  </AspectRatio>
                </div>

                {/* Matrix Frame 2: Core Center focus fragment side */}
                <div className="absolute top-1/2 left-1/2 z-20 w-[65%] -translate-x-1/2 -translate-y-1/2 transition-transform duration-1000 group-hover:scale-110">
                  <AspectRatio
                    ratio={0.72 / 1}
                    className="overflow-hidden rounded-[3rem] border-[12px] border-background bg-background shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]"
                  >
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                      alt="studio project preview center"
                      className="size-full object-cover"
                    />
                  </AspectRatio>
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none"></div>
                </div>

                {/* Matrix Frame 3: Upper narrative fragment (Top-Right) */}
                <div className="absolute top-0 right-0 z-10 w-[63%] transition-transform duration-1000 group-hover:translate-x-4 group-hover:-translate-y-4">
                  <AspectRatio
                    ratio={0.72 / 1}
                    className="overflow-hidden rounded-[3rem] border-8 border-background bg-muted shadow-2xl"
                  >
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                      alt="studio project preview 3"
                      className="size-full object-cover opacity-60"
                    />
                  </AspectRatio>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Harmony Creative Studio presentation Video Modal */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="sm:max-w-[1000px] border-none bg-black/95 backdrop-blur-3xl p-0 overflow-hidden rounded-[3rem] shadow-2xl">
          <DialogHeader className="hidden">
            <DialogTitle>Harmony Studio Presentation</DialogTitle>
          </DialogHeader>
          <div className="aspect-video relative">
            <iframe
              className="h-full w-full animate-in zoom-in-95 duration-1000"
              src="https://www.youtube.com/embed/your-video-id?autoplay=1"
              title="Harmony Studio Process"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export { Hero173 };
```
