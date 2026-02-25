# Hero 146

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a cinematic "AI Agents" introduction pairing a centered gradient typography block with a unique "Shadow-Ping" CTA and a centered "Build" video preview.
- **Use Case**: Best for AI platforms, enterprise automation tools, or low-code frameworks that want to emphasize "Deployed in no time" and "Custom agents."
- **Visual Style**: Futuristic Enterprise aesthetic. Features a centered layout on a background textured with specialized "SVG Grid" vertical patterns (`grid-1.svg`). The typography section is anchored by a high-impact title utilizing specialized `bg-linear-to-r` gradient text to create a high-fidelity metallic depth. CTA features a unique `animate-shadow-ping` motion effect pairing a specialized `bg-linear-gradient` background with a prominent shadow pulse. The visual anchor is a unique "Dashboard Frame" featuring an autoplay video preview (`AspectRatio 3/1`) paired with a high-fidelity, shadow-layered `Play` button.
- **Interactivity**: High interactively visual engagement. Features specialized "Ping-Shadow" button interactivity and a functional `Dialog`-based "Presentation Video" modal trigger.

## Source Code

### `hero146.tsx`
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

interface Hero146Props {
  className?: string;
}

const Hero146 = ({ className }: Hero146Props) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <Fragment>
      <section
        className={cn(
          "bg-[url(https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/grid-1.svg)] bg-cover bg-center bg-no-repeat font-sans py-20 lg:py-40 overflow-hidden relative border-b",
          className,
        )}
      >
        <div className="container relative z-10 px-6 pt-12 lg:pt-24">
          <div className="flex flex-col items-center gap-12 text-center text-pretty">
            
            <h1 className="max-w-[1200px] bg-linear-to-r from-neutral-950 via-neutral-600 to-neutral-900 bg-clip-text text-6xl font-black lg:text-[9.5rem] tracking-tighter leading-[0.85] text-transparent drop-shadow-2xl">
              AI agents for Enterprise deployed in no time
            </h1>
            
            <p className="max-w-[45rem] text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-x-4 border-primary/10 px-12">
              Design and launch custom AI agents tailored to any workflow and
              integrated with every app—no coding needed for high-status builders.
            </p>
            
            <div className="pt-6 relative group">
              {/* Unique "Shadow-Ping" Advanced Motion Button */}
              <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-2xl animate-pulse group-hover:opacity-100 opacity-60 transition-opacity"></div>
              <Button size="lg" className="relative block h-fit w-full sm:w-fit rounded-2xl border-4 border-background bg-foreground px-12 py-7 font-black text-2xl text-background shadow-2xl transition-transform hover:scale-105 active:scale-95 duration-300 overflow-hidden">
                <a href="#" className="relative z-10 uppercase tracking-widest">Get Started Today</a>
                {/* Simulated Glow Sweep */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
              </Button>
            </div>
          </div>
          
          {/* Unique "Dashboard Frame" visual anchor */}
          <div className="relative mx-auto mt-32 lg:mt-48 w-full max-w-[100rem] group">
            {/* Structural Depth Framing side */}
            <div className="absolute -inset-10 bg-primary/5 blur-3xl opacity-50 z-[-1] rounded-full"></div>
            
            <div className="p-4 lg:p-8 rounded-[3rem] lg:rounded-[4rem] border-8 border-background bg-background shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transition-transform duration-1000 group-hover:-translate-y-4">
               <div className="relative overflow-hidden rounded-[2rem] lg:rounded-[3rem] bg-muted shadow-inner group/video">
                <p className="absolute top-8 left-8 z-30 inline-block text-xs font-black uppercase tracking-[0.4em] text-white/40 drop-shadow-md">
                    Watch how we build in <span className="text-primary underline decoration-primary/20 underline-offset-4 decoration-4">5 minutes</span>.
                </p>
                
                <AspectRatio ratio={2.8 / 1} className="overflow-hidden">
                  <div className="size-full">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-aspect-video-1.svg"
                      alt="autonomous AI agent dashboard preview"
                      className="size-full object-cover object-top-left grayscale group-hover:grayscale-0 transition-all duration-1000 brightness-75 group-hover:brightness-100"
                    />
                    
                    {/* The Interactive Interactive Play Overlay */}
                    <button
                      onClick={() => setIsVideoOpen(true)}
                      className="absolute top-1/2 left-1/2 z-40 flex size-20 lg:size-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-background/50 backdrop-blur-3xl border-4 border-white/20 shadow-2xl transition-all hover:scale-110 hover:bg-background group/play"
                    >
                      <div className="flex size-[70%] rounded-full bg-primary border-4 border-background transition-transform duration-500 group-hover/play:rotate-[360deg]">
                        <Play className="m-auto size-[40%]! fill-white stroke-white ml-2" />
                      </div>
                    </button>
                  </div>
                </AspectRatio>
                
                {/* Interactive bottom fade mask */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-background to-transparent z-20 pointer-events-none"></div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
      
      {/* Build Presentation Video Modal */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="sm:max-w-[1000px] border-none bg-black/95 backdrop-blur-2xl p-0 overflow-hidden rounded-[3rem] shadow-2xl">
          <DialogHeader className="hidden">
            <DialogTitle>AI Agent Build In 5 Minutes</DialogTitle>
          </DialogHeader>
          <div className="aspect-video relative">
            <iframe
              className="h-full w-full animate-in fade-in zoom-in duration-1000"
              src="https://www.youtube.com/embed/your-video-id?autoplay=1"
              title="Autonomous Build Showcase"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export { Hero146 };
```
