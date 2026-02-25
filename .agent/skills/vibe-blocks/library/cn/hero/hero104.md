# Hero 104

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a comprehensive marketing introduction for ad management, pairing a centered (top) to left-aligned (bottom) typography block with an information-rich technical visual grid.
- **Use Case**: Best for ad management platforms, performance marketing tools, or dashboard-centric SaaS that want to emphasize "Quantifiable Results" and "Simplified Automation."
- **Visual Style**: Metrics-heavy professional aesthetic. Features a split-column layout starting with an high-impact left-aligned typography block. The visual anchor is a unique technical visual grid (right) utilizing a specialized `radial-gradient` background. The grid displays multiple absolute-positioned "Metric cards" including a spinning automation rule (`Zap`), a social proof ad-count pill (`Star`), and a prominent high-contrast revenue chart with a vectorized circular progress SVG. Includes a functional `Dialog`-based video modal trigger.
- **Interactivity**: High interactive complexity. Visual anchor uses a unique `grid-cols` / `grid-rows` layout to stack metric cards. Includes a functional "Watch Presentation" video modal.

## Source Code

### `hero104.tsx`
```tsx
"use client";

import { Check, Play, Star, Zap } from "lucide-react";
import { Fragment, useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Hero104Props {
  className?: string;
}

const Hero104 = ({ className }: Hero104Props) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <Fragment>
      <section className={cn("py-20 lg:py-40 font-sans overflow-hidden", className)}>
        <div className="container relative z-10 px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            
            {/* Impact Editorial side */}
            <div className="mx-auto lg:mx-0 max-w-[50rem] lg:max-w-xl text-center lg:text-left">
              <h1 className="mb-8 font-black text-5xl md:text-8xl lg:text-[7.5rem] tracking-tighter leading-[0.85] text-pretty">
                Increase impact, <span className="text-secondary italic">not</span> effort.
              </h1>
              <p className="mb-12 text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground">
                We streamline your ad management tasks, letting you focus on
                achieving results more quickly through intelligent automation.
              </p>
              
              <div className="flex flex-col items-center gap-6 sm:flex-row lg:justify-start">
                <Button
                  size="lg"
                  className="h-fit w-full sm:w-fit px-12 py-7 font-black text-xl rounded-full shadow-2xl transition-transform hover:scale-105 active:scale-95 duration-300"
                >
                  Start Now – It&apos;s Free
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-fit w-full sm:w-fit border-2 px-10 py-7 font-bold text-xl rounded-full shadow-xl bg-background/50 backdrop-blur-md"
                >
                  Book a Demo
                </Button>
              </div>
              
              {/* Trust Indicators Row */}
              <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-8">
                {[
                  "30-day free trial",
                  "No credit card required",
                  "Cancel anytime",
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="p-0.5 rounded-full bg-green-400/20">
                        <Check className="h-4 w-4 stroke-green-500 font-bold" />
                    </div>
                    <p className="text-sm font-black uppercase tracking-widest text-muted-foreground/80">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* "Metrics Hub" Technical Visual (Desktop Only) */}
            <div className="hidden lg:block relative group">
              <div className="absolute -inset-10 bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              
              {/* Structured Grid Layout for Metric Cards */}
              <div className="grid grid-cols-[repeat(2,12rem)] grid-rows-[3rem_8rem_4rem_8rem_4rem_5rem] gap-x-10 gap-y-6 bg-[radial-gradient(closest-side,hsl(var(--primary)/0.1),transparent)] bg-center bg-no-repeat p-10 rounded-[4rem] border border-border/40 shadow-2xl">
                
                {/* 1. Automation State Card */}
                <div className="relative col-[1/2] row-[1/3] group/card">
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                    alt="state visualization"
                    className="h-full w-full object-cover rounded-3xl opacity-60 blur-sm group-hover/card:blur-0 transition-all duration-700"
                  />
                  <div className="absolute bottom-[-10%] flex w-[18rem] items-center gap-4 rounded-[2rem] bg-background border border-border/50 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-transform group-hover/card:-translate-y-2">
                    <div className="p-3 rounded-2xl bg-secondary/10 border border-secondary/20">
                        <Zap className="h-6 w-6 fill-secondary stroke-secondary animate-pulse" />
                    </div>
                    <div>
                      <div className="text-xs font-black uppercase tracking-widest text-muted-foreground">Automation Rule</div>
                      <div className="text-lg font-black text-foreground">Cancel low-performers</div>
                    </div>
                  </div>
                </div>
                
                {/* 2. Video Preview / Modal Trigger Card */}
                <div className="col-[2/3] row-[2/4]">
                  <div className="flex h-full w-full flex-col justify-between rounded-3xl bg-background p-3 shadow-2xl border border-border/50 transition-transform hover:scale-105 duration-500">
                    <div className="size-6 rounded-full bg-accent/20 animate-pulse"></div>
                    <div className="relative h-40 w-full rounded-2xl bg-muted bg-cover bg-center overflow-hidden border border-border/40 flex items-center justify-center group/btn">
                      <img src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg" className="absolute inset-0 size-full object-cover opacity-50 group-hover/btn:scale-110 transition-transform duration-1000" />
                      <Button
                        variant="default"
                        size="icon"
                        className="relative z-10 flex h-14 w-14 rounded-full bg-foreground text-background shadow-2xl"
                        onClick={() => setIsVideoOpen(true)}
                      >
                        <Play className="fill-current ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* 3. Competitive Social Proof Card */}
                <div className="col-[1/2] row-[3/5]">
                  <div className="flex h-full w-full flex-col justify-between rounded-3xl bg-background p-3 shadow-2xl border border-border/50 transition-transform hover:scale-105 duration-500">
                    <div className="size-6 rounded-full bg-green-400/20 animate-pulse"></div>
                    <div className="relative h-40 w-full rounded-2xl bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg')] bg-cover bg-center border border-border/40 flex items-end justify-center p-3">
                      <div className="flex h-fit w-full items-center justify-center gap-2 rounded-2xl bg-foreground px-4 py-2.5 text-background shadow-2xl">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <div className="text-sm font-black uppercase tracking-widest">
                          Active in 700+ ads
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 4. Revenue "Pulse" Chart Card */}
                <div className="col-[2/3] row-[4/-1]">
                  <div className="flex h-full w-full flex-col justify-between rounded-[2.5rem] bg-background p-6 shadow-2xl border border-border/50 text-center transition-transform hover:scale-110 duration-1000">
                    <div className="text-left">
                      <div className="h-2 w-[80%] rounded-2xl bg-muted/40"></div>
                      <div className="mt-2 h-2 w-[40%] rounded-2xl bg-muted/40"></div>
                    </div>
                    
                    <div className="relative mx-auto size-32 my-4">
                        {/* Custom Circular SVG Chart */}
                        <svg className="size-full -rotate-90" viewBox="0 0 148 148">
                            <circle cx="74" cy="74" r="65" stroke="currentColor" strokeWidth="15" className="text-primary/10" fill="none" />
                            <circle cx="74" cy="74" r="65" stroke="currentColor" strokeWidth="15" className="text-primary" strokeDasharray="300 400" fill="none" />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-1">ROAS</span>
                            <span className="text-2xl font-black text-foreground">$5,900</span>
                        </div>
                    </div>
                  </div>
                </div>
                
                {/* 5. Ghost Tail Visual */}
                <div className="col-[1/2] row-[-1/-2]">
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg"
                    alt="bottom visual accent"
                    className="size-full object-cover rounded-3xl opacity-30 blur-2xl"
                  />
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      
      {/* Video Modal Presentation */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="sm:max-w-[900px] border-none bg-black/95 backdrop-blur-2xl p-0 overflow-hidden rounded-[2.5rem] shadow-2xl">
          <DialogHeader className="hidden">
             <DialogTitle>Strategy Video</DialogTitle>
          </DialogHeader>
          <div className="aspect-video relative">
            <iframe
              className="h-full w-full animate-in fade-in zoom-in duration-1000"
              src="https://www.youtube.com/embed/your-video-id?autoplay=1"
              title="Ad Strategy Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export { Hero104 };
```
