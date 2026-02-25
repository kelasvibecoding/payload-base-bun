# Hero 164

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a cinematic, high-status introduction for mentorship platforms, pairing a split-column layout with a unique "Intro-Video-Preview" button and a prominent expert portrait.
- **Use Case**: Best for career coaching platforms, expert mentorship networks (e.g., "Success with insights"), or high-end leadership academies that want to emphasize "Career growth" and "Experienced mentors."
- **Visual Style**: Narrative Growth aesthetic. Features a split-column layout starting with an high-impact typography block Utilizing specialized `Onest` font family weighting. Includes a unique introduction callout Feature: a functional video "Play-Button" containerized as an `aspect-video` button Utilizing a secondary `placeholder-2.svg` background with specialized high-fidelity hover-zoom (`bg-[length:120%]`). Visual anchor is a unique full-height vertical expert portrait (`aspect-4/5`) on the right Featuring prominent shadow depth and circular corners.
- **Interactivity**: High interactive storytelling. Features specialized video modal trigger paired with professional professional professional CTAs ("Sign up now") to drive user enrollment.

## Source Code

### `hero164.tsx`
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

interface Hero164Props {
  className?: string;
}

const Hero164 = ({ className }: Hero164Props) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <Fragment>
      <section className={cn("bg-background py-20 lg:py-40 font-sans border-b overflow-hidden", className)}>
        <div className="container relative z-10 px-6">
          <div className="grid w-full grid-cols-1 items-center gap-24 lg:gap-32 lg:grid-cols-2 text-pretty">
            
            {/* Mentorship Narrative side */}
            <div className="flex flex-col gap-16 lg:gap-24">
              <div className="flex flex-col gap-12 max-w-[50rem]">
                <h1 className="text-6xl font-black lg:text-[8.5rem] tracking-tighter leading-[0.85] text-primary drop-shadow-sm">
                  Career Growth with <span className="italic underline decoration-primary/20 decoration-8 underline-offset-8">Expert</span> Mentorship
                </h1>
                <p className="text-xl lg:text-4xl font-medium leading-relaxed text-muted-foreground italic border-l-4 border-primary/20 pl-10">
                  Receive tailored mentorship aligned with your high-status goals. 
                  Experienced mentors guide you to success with world-class insights.
                </p>
                <div className="mt-4">
                  <Button
                    asChild
                    size="lg"
                    className="h-fit rounded-full bg-primary px-12 py-7 font-black text-xl text-primary-foreground shadow-2xl transition-transform hover:scale-105 active:scale-95 duration-300"
                  >
                    <a href="#" className="uppercase tracking-widest leading-none">Sign up now</a>
                  </Button>
                </div>
              </div>
              
              {/* Unique "Video Introduction" Interactive Callout button side */}
              <div className="flex flex-col gap-10 max-w-[30rem] group/intro">
                <p className="text-xs font-black uppercase tracking-[0.4em] text-muted-foreground/60 transition-colors group-hover/intro:text-primary">
                  Watch introduction to discover our services
                </p>
                
                <div className="relative group/box isolate">
                  {/* Subtle Atmos Glow layer */}
                  <div className="absolute -inset-4 bg-primary/5 blur-2xl opacity-0 group-hover/intro:opacity-100 transition-opacity rounded-2xl"></div>

                  <Button
                    variant="ghost"
                    onClick={() => setIsVideoOpen(true)}
                    className="relative flex aspect-video h-full w-full overflow-hidden rounded-[2.5rem] border-4 border-background bg-accent bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg')] bg-cover bg-center transition-all duration-700 hover:bg-accent p-0 shadow-2xl active:scale-[0.98]"
                  >
                    <AspectRatio ratio={16 / 9} className="flex h-full w-full">
                      {/* Interaction High Fidelity Mask side */}
                      <div className="absolute inset-0 bg-background/20 backdrop-blur-sm group-hover/box:backdrop-blur-none transition-all duration-700"></div>
                      
                      <div className="m-auto z-10 flex h-24 w-24 rounded-full bg-primary border-4 border-background shadow-[0_30px_60px_-10px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover/box:scale-110 group-hover/box:rotate-[360deg]">
                        <Play className="m-auto size-10 fill-white stroke-white ml-2" />
                      </div>
                    </AspectRatio>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Visual Anchor Portrait side */}
            <div className="relative group isolate">
                {/* Structural Depth Framing layer side */}
                <div className="absolute inset-20 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>

                <div className="overflow-hidden rounded-[4rem] border-[12px] border-background bg-background shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transition-transform duration-1000 group-hover:-translate-y-4">
                    <img
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                        alt="high-status expert mentor portrait"
                        className="aspect-[4/5] size-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    {/* Portrait Shade side */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none"></div>
                </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* Mentorship Insight presentation Video Modal */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="sm:max-w-[1000px] border-none bg-black/95 backdrop-blur-2xl p-0 overflow-hidden rounded-[3rem] shadow-2xl">
          <DialogHeader className="hidden">
            <DialogTitle>Success Mentorship introduction</DialogTitle>
          </DialogHeader>
          <div className="aspect-video relative">
            <iframe
              className="h-full w-full animate-in fade-in zoom-in duration-1000 shadow-2xl"
              src="https://www.youtube.com/embed/your-video-id?autoplay=1"
              title="Mentorship Success presentation"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export { Hero164 };
```
