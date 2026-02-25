# Hero 116

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a high-status "Software Growth" introduction using motion-text CTAs and a side-by-side editorial "Device Array" visual.
- **Use Case**: Best for software agencies, growth platforms, or enterprise SaaS portals that want to emphasize "Accelerated software growth" and "Impactful solutions."
- **Visual Style**: Impact-first professional aesthetic. Features a split-column layout starting with an high-impact centered typography block. Dual CTAs utilize specialized "Vertical-Slide" motion text effects (`group-hover:-translate-y-[110%]`) to drive interactive high-engagement discovery. The visual anchor is a unique side-by-side array of 4 containerized images, utilize varying aspect ratios and absolute positioning (`-top-[28%]`, `-bottom-[14%]`, etc.) to create a stacked "Workspace" depth effect. Includes a functional `Dialog`-based video modal trigger.
- **Interactivity**: High interactive motion. Features specialized slide-text button hover effects. Visual anchor uses a complex relative grid to display dashboard previews. Includes a functional "Watch Presentation" video modal.

## Source Code

### `hero116.tsx`
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

interface Hero116Props {
  className?: string;
}

const ButtonTextSlide = ({ label }: { label: string }) => (
    <span className="block overflow-hidden relative">
        <span
        data-text={label}
        className="relative block text-nowrap transition-all duration-500 ease-in-out group-hover:-translate-y-[110%] group-hover:opacity-0 after:absolute after:top-[110%] after:left-0 after:h-full after:w-full after:content-[attr(data-text)] after:opacity-0 group-hover:after:opacity-100"
        >
        {label}
        </span>
    </span>
);

const Hero116 = ({ className }: Hero116Props) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <Fragment>
      <section
        className={cn("font-sans bg-background py-20 lg:py-40 overflow-hidden", className)}
      >
        <div className="container relative z-10 px-6 max-w-[1440px]">
          <div className="flex flex-col gap-24 lg:gap-32">
            
            {/* Growth Narrative side */}
            <div className="flex flex-col items-center justify-center gap-12 text-center text-pretty">
              <h1 className="max-w-[1100px] text-6xl font-black lg:text-[9rem] tracking-tighter leading-[0.85] text-foreground drop-shadow-sm">
                Unlock impactful solutions for software growth
              </h1>
              <p className="max-w-[55rem] text-xl lg:text-4xl font-medium leading-relaxed text-muted-foreground italic border-l-4 border-primary/20 pl-10">
                Sign up on our website and use your account for as long as you&apos;d
                like. Our expert growth team is always available to solve any issues you encounter.
              </p>
              
              <div className="flex flex-col items-center justify-center gap-6 md:flex-row mt-6">
                {/* Advanced Motion Text Button: Primary */}
                <Button
                  onClick={() => setIsVideoOpen(true)}
                  size="lg"
                  className="group relative h-fit w-full sm:w-fit items-center gap-3 overflow-hidden rounded-full px-12 py-7 font-black text-xl shadow-2xl transition-transform hover:scale-105 duration-300"
                >
                  <ButtonTextSlide label="See How it Works" />
                  <Play className="size-6! fill-current" />
                </Button>
                
                {/* Advanced Motion Text Button: Secondary */}
                <Button
                  variant="outline"
                  size="lg"
                  className="group relative h-fit w-full sm:w-fit overflow-hidden rounded-full border-2 px-12 py-7 font-bold text-xl text-foreground shadow-xl transition-all hover:bg-muted"
                >
                   <ButtonTextSlide label="Get Started Now" />
                </Button>
              </div>
            </div>
            
            {/* Complex side-by-side "Device Workspace" Array visual */}
            <div className="w-full py-[10%] lg:py-[5%] relative">
                <div className="absolute -inset-20 bg-primary/5 blur-3xl opacity-50 rounded-full"></div>
                
                <div className="relative aspect-[2.7/1] w-full border-t border-border/40 group">
                    {/* Visual 1: Left Anchor Top */}
                    <div className="absolute -top-[30%] left-[15%] w-[32%] max-w-[30rem] z-20 transition-transform duration-1000 group-hover:-translate-y-6">
                        <AspectRatio ratio={1.1 / 1} className="rounded-[3rem] border-8 border-background shadow-2xl overflow-hidden bg-muted">
                            <img
                            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
                            alt="growth metric dashboard"
                            className="size-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                            />
                        </AspectRatio>
                    </div>
                    
                    {/* Visual 2: Right Anchor Top */}
                    <div className="absolute -top-[25%] left-[50%] w-[22%] max-w-[20rem] z-10 transition-transform duration-1000 group-hover:translate-y-4">
                        <AspectRatio ratio={0.85 / 1} className="rounded-[2.5rem] border-8 border-background shadow-2xl overflow-hidden bg-muted">
                            <img
                            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                            alt="team activity view"
                            className="size-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                            />
                        </AspectRatio>
                    </div>
                    
                    {/* Visual 3: Large Right Anchor Bottom */}
                    <div className="absolute -bottom-[15%] left-[50%] w-[42%] max-w-[40rem] z-30 transition-transform duration-1000 group-hover:-translate-x-6">
                        <AspectRatio ratio={1.7 / 1} className="rounded-[3rem] border-8 border-background shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden bg-muted">
                            <img
                            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
                            alt="software performance overview"
                            className="size-full object-cover transition-all duration-700 hover:scale-105"
                            />
                        </AspectRatio>
                    </div>
                    
                    {/* Visual 4: Large Left Anchor Bottom */}
                    <div className="absolute -bottom-[35%] left-[8%] w-[42%] max-w-[40rem] z-40 transition-transform duration-1000 group-hover:translate-y-6">
                        <AspectRatio ratio={1.4 / 1} className="rounded-[3rem] border-8 border-background shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden bg-muted">
                            <img
                            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg"
                            alt="custom growth tools"
                            className="size-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                            />
                        </AspectRatio>
                    </div>
                </div>
            </div>
            
          </div>
        </div>
      </section>
      
      {/* Video Modal Presentation */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="sm:max-w-[1000px] border-none bg-black/95 backdrop-blur-2xl p-0 overflow-hidden rounded-[3rem] shadow-2xl">
          <DialogHeader className="hidden">
            <DialogTitle>Growth Presentation</DialogTitle>
          </DialogHeader>
          <div className="aspect-video relative">
            <iframe
              className="h-full w-full animate-in fade-in zoom-in duration-1000"
              src="https://www.youtube.com/embed/your-video-id?autoplay=1"
              title="Impact Presentation"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export { Hero116 };
```
