# Hero 149

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a cinematic "Design-on-Demand" introduction pairing a centered typography block with a "Trust Merit" row and a prominent wide-format project preview.
- **Use Case**: Best for design agencies, fractional leadership services (e.g., "Design done in days"), or creative talent networks that want to emphasize "Boosting capacity" and "Unlimited tasks."
- **Visual Style**: Narrative Creative aesthetic. Features a centered layout beginning with a bold typography block anchored by a stylized `bg-[radial-gradient]` background visual. The title uses a high-impact typography block using large `leading-tight` font sizes. Includes a unique "Trust Merit" row display below the CTAs Utilize `CircleCheck` icons to categorical social proof ("Unlimited tasks," "Cancel anytime"). The visual anchor is a unique wide-format project preview (`max-w-[1000px]`) Featuring an absolute-positioned "Scan-Line" pattern overlay (`line.svg`) to create a high-fidelity "Drafting" atmosphere.
- **Interactivity**: High interactive atmosphere. Features specialized `Button` interactions paired with a functional `Dialog`-based "How it Works" modal trigger. Visual anchor utilizes high-fidelity shadow depth (`shadow-[4px_2px_3.123rem]`) to create "Pop-from-Page" visual weight.

## Source Code

### `hero149.tsx`
```tsx
"use client";
import { CircleCheck } from "lucide-react";
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

interface Hero149Props {
  className?: string;
}

const Hero149 = ({ className }: Hero149Props) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <Fragment>
      <section
        className={cn(
          "relative overflow-hidden bg-background py-20 lg:py-40 font-sans border-b",
          className,
        )}
      >
        <div className="relative z-20 container px-6">
          <div className="mx-auto flex max-w-[1000px] flex-col gap-16 items-center text-center text-pretty">
            
            <div className="flex flex-col gap-12">
                <h1 className="text-6xl font-black lg:text-9xl tracking-tighter leading-[0.85] text-foreground drop-shadow-sm">
                    Get all your design done <br/> using our <span className="text-secondary italic">elite</span> service.
                </h1>
                <p className="mx-auto max-w-[800px] text-xl lg:text-3xl font-medium text-muted-foreground leading-relaxed border-x-4 border-primary/10 px-10">
                    Equip your team with a top-tier designer and boost your creative 
                    capacity instantly—in days, not months.
                </p>
            </div>
            
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 mt-4">
              <Button
                asChild
                size="lg"
                className="h-fit w-full sm:w-fit rounded-full bg-primary px-12 py-7 font-black text-xl text-primary-foreground shadow-2xl transition-transform hover:scale-105 active:scale-95 duration-300"
              >
                <a href="#" className="uppercase tracking-widest">Book a Demo</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                onClick={() => setIsVideoOpen(true)}
                className="h-fit w-full sm:w-fit rounded-full border-2 border-primary bg-background px-12 py-7 font-bold text-xl shadow-xl hover:bg-muted transition-all"
              >
                <a href="#" className="uppercase tracking-widest">How it Works</a>
              </Button>
            </div>
            
            {/* Unique "Trust Merit" categorical social proof side */}
            <div className="mx-auto flex w-full flex-col sm:flex-row flex-wrap items-center justify-center gap-x-12 gap-y-6 pt-10">
              {[
                "Unlimited design tasks",
                "Results in less than 48h",
                "No contracts—Cancel Anytime"
              ].map((text, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="flex h-8 w-8 rounded-full bg-primary/10 transition-transform group-hover:scale-110">
                        <CircleCheck className="m-auto size-5 text-primary" strokeWidth={3} />
                    </div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground italic">
                        {text}
                    </p>
                  </div>
              ))}
            </div>
          </div>
          
          {/* Main Visual Anchor: The Drawing Board */}
          <div className="relative mx-auto mt-32 lg:mt-48 w-full max-w-[1200px] group isolate">
            {/* The Atmospheric Atmospheric Depth layers */}
            <div className="absolute inset-20 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>
            
            <div className="relative overflow-hidden rounded-[3rem] border-8 border-background bg-muted shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transition-transform duration-1000 group-hover:-translate-y-6">
                <AspectRatio ratio={1.4 / 1}>
                {/* The Dashboard / Design Preview */}
                <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                    alt="design service project portal preview"
                    className="size-full object-cover transition-all duration-1000 transform group-hover:scale-105"
                />
                </AspectRatio>
                
                {/* Unique absolute "Scan-Line" drafting pattern overlay */}
                <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/line.svg"
                    alt="drawing board texture"
                    className="absolute inset-0 z-10 block size-full object-cover opacity-10 pointer-events-none mix-blend-overlay"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent z-15 pointer-events-none" />
            </div>
          </div>
          
        </div>
        
        {/* Complex Ambient Glow side */}
        <div className="absolute top-auto bottom-[40%] left-[30%] z-0 size-80 pointer-events-none opacity-40">
          <AspectRatio
            ratio={1}
            className="bg-[radial-gradient(closest-side,hsl(var(--primary)),transparent)]"
          />
        </div>
        <div className="absolute top-[10%] right-[10%] z-0 size-96 pointer-events-none opacity-20">
          <AspectRatio
            ratio={1}
            className="bg-[radial-gradient(closest-side,hsl(var(--secondary)),transparent)]"
          />
        </div>
      </section>
      
      {/* Narrative Workflow Video Modal */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="sm:max-w-[1000px] border-none bg-black/95 backdrop-blur-3xl p-0 overflow-hidden rounded-[3rem] shadow-2xl">
          <DialogHeader className="hidden">
            <DialogTitle>Our Design Workflow</DialogTitle>
          </DialogHeader>
          <div className="aspect-video relative">
            <iframe
              className="h-full w-full animate-in fade-in zoom-in duration-1000"
              src="https://www.youtube.com/embed/your-video-id?autoplay=1"
              title="Service Explainer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export { Hero149 };
```
