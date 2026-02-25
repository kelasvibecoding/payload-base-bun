# Hero 135

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven "Customer Stories" introduction pairing a unique diagonal-grid typography block with a full-height autoplay video testimonial.
- **Use Case**: Best for high-touch services, enterprise consulting, or high-end platform providers that want to emphasize "Client journeys" and "Thriving companies."
- **Visual Style**: Narrative-first modern aesthetic. Features a split-column layout starting with an high-impact typography block on a `bg-primary/5` background. Typography section is anchored by a prominent icon badge (`MessagesSquare`) titled "Customer Stories." The visual anchor is a unique full-height `video` testimonial (`rounded-3xl`) Featuring a Prominent "Play-Overlay" button at the bottom Corner. The play button is a large centered pill containing a functional `Play` icon and categorical client metadata ("John Doe, CEO").
- **Interactivity**: High interactive storytelling. Features specialized `Button`-overlay on a looping `video` preview to trigger a full-fidelity `Dialog`-based presentation video. Video components utilize specialized `object-cover` framing to maintain high-impact visual depth.

## Source Code

### `hero135.tsx`
```tsx
"use client";
import { MessagesSquare, Play } from "lucide-react";
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

interface Hero135Props {
  className?: string;
}

const Hero135 = ({ className }: Hero135Props) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <Fragment>
      <section
        className={cn("bg-primary/5 py-20 lg:py-40 font-sans border-b overflow-hidden", className)}
      >
        <div className="container relative z-10 px-6">
          <div className="flex flex-col lg:flex-row items-center gap-24 lg:gap-32">
            
            {/* Story Narrative side */}
            <div className="flex flex-col gap-12 lg:w-1/2 items-center lg:items-start text-center lg:text-left text-pretty">
              <div className="flex w-fit items-center gap-4 rounded-[2rem] bg-background border border-border/50 py-3 px-8 shadow-xl transition-transform hover:rotate-3">
                <MessagesSquare className="size-8 text-primary" strokeWidth={2.5} />
                <div className="text-xl font-black uppercase tracking-[0.2em] text-foreground">
                  Customer Stories
                </div>
              </div>
              <h1 className="max-w-[600px] text-7xl font-black lg:text-[10rem] tracking-tighter leading-[0.8] text-foreground drop-shadow-sm">
                Client Journeys
              </h1>
              <p className="max-w-[650px] text-2xl lg:text-4xl font-medium leading-relaxed text-muted-foreground italic border-l-8 border-primary/20 pl-10 py-4">
                Inspiring tales of bold, high-performing companies thriving with Us.
              </p>
            </div>
            
            {/* Narrative Video Visual side */}
            <div className="lg:w-1/2 w-full">
              <div className="relative group w-full overflow-hidden rounded-[3.5rem] border-[12px] border-background bg-background shadow-2xl transition-transform duration-1000 group-hover:scale-[1.02]">
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10"></div>
                <AspectRatio ratio={1}>
                  <div className="size-full">
                    {/* The Background Looping Story Preview */}
                    <video
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/man-1.mp4"
                      muted
                      autoPlay
                      loop
                      className="size-full object-cover grayscale brightness-75 transition-all duration-1000 group-hover:grayscale-0 group-hover:brightness-100"
                    />
                    
                    {/* The Interactive Interactive Narrative Callout Button */}
                    <Button
                      size="icon"
                      onClick={() => setIsVideoOpen(true)}
                      className="absolute bottom-10 left-10 z-20 flex h-fit w-fit items-center gap-6 rounded-full bg-background border-4 border-primary/10 py-4 pr-12 pl-4 transition-all duration-500 hover:scale-110 hover:bg-background shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] group/btn"
                    >
                      <div className="flex h-24 w-24 rounded-full bg-primary border-4 border-background shadow-xl transition-all group-hover/btn:rotate-[360deg] duration-700">
                        <Play className="m-auto size-10 fill-white stroke-white ml-2 transition-transform group-hover/btn:scale-125" />
                      </div>
                      <div className="text-left">
                        <div className="text-xl lg:text-2xl font-black text-foreground tracking-tight leading-none mb-1">
                          John Doe
                        </div>
                        <div className="text-lg font-bold text-muted-foreground uppercase tracking-widest leading-none">
                          Founder & CEO
                        </div>
                      </div>
                    </Button>
                    
                  </div>
                </AspectRatio>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      
      {/* Full-Fidelity Video Story Presentation Modal */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="sm:max-w-[1000px] border-none bg-black/95 backdrop-blur-2xl p-0 overflow-hidden rounded-[3rem] shadow-2xl">
          <DialogHeader className="hidden">
            <DialogTitle>Full Customer Story</DialogTitle>
          </DialogHeader>
          <div className="aspect-video relative">
            <iframe
              className="h-full w-full animate-in fade-in zoom-in duration-1000 shadow-2xl"
              src="https://www.youtube.com/embed/your-video-id?autoplay=1"
              title="Success Journey Presentation"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export { Hero135 };
```
