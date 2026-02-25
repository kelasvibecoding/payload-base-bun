# Hero 101

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a motion-rich, brand-heavy introduction for a "User Management" platform, pairing a multi-gradient background with a logo cloud and an interactive demo trigger.
- **Use Case**: Best for authentication platforms, SaaS admin dashboards, or user management tools where trust (logo cloud) and UX (video demo) are the primary conversion drivers.
- **Visual Style**: High-Editorial SaaS aesthetic. Features a centered layout using a very complex `before:` pseudo-element background that combines three different radial gradients (`violet-100`, `yellow-50`, `cyan-50`) to create a soft, high-fidelity atmosphere. The typography block includes an interactive "Watch Demo" trigger with a unique spinning dual-gradient border animation (`animate-[spin_5s...]`). The visual anchor is a prominent 7-item logo cloud displaying fictional company logos.
- **Interactivity**: High interactive engagement. Features a spinning social-proof demo trigger. Includes a functional `Dialog`-based video modal to display the presentation video without page navigation.

## Source Code

### `hero101.tsx`
```tsx
"use client";

import { PlayIcon } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Hero101Props {
  className?: string;
}

const Hero101 = ({ className }: Hero101Props) => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  return (
    <>
      <section
        className={cn(
          "relative overflow-hidden border-b pt-40 pb-20 font-sans shadow-[inset_0_-4px_20px_rgba(0,0,0,0.03)]",
          // Complex Multi-Gradient Atmospheric Background
          "before:absolute before:-top-[85%] before:left-1/2 before:block before:h-[200%] before:w-[200%] before:-translate-x-1/2 before:bg-[radial-gradient(ellipse_at_center,rgba(167,139,250,0.15)_15%,transparent_25%),radial-gradient(ellipse_at_center,rgba(253,224,71,0.1)_35%,transparent_50%),radial-gradient(ellipse_at_center,rgba(34,211,238,0.1)_55%,transparent_70%)] before:opacity-60 before:content-['']",
          className,
        )}
      >
        <div className="relative z-20 container max-w-[85rem] px-6">
          <div className="mx-auto flex max-w-[55rem] flex-col items-center gap-10">
            <h1 className="text-center text-5xl font-black text-foreground drop-shadow-sm tracking-tighter leading-[0.9] md:text-[5.5rem] text-pretty">
              The ultimate User Management Platform
            </h1>
            <p className="text-center text-xl lg:text-3xl font-medium text-muted-foreground leading-relaxed max-w-3xl">
              We offer a full suite of embeddable UIs, versatile APIs, and
              admin dashboards to manage your users effortlessly.
            </p>
            
            <div className="flex flex-col items-center gap-8 md:flex-row mt-4">
              <Button
                size="lg"
                className="px-10 py-7 font-black text-xl rounded-full shadow-2xl transition-transform hover:scale-105"
              >
                Start for Free
              </Button>
              
              {/* Interactive Demo Trigger with Spinning Animation */}
              <button
                onClick={() => setIsVideoOpen(true)}
                className="group flex items-center gap-4 hover:opacity-80 transition-all outline-none"
              >
                <div className="relative h-12 w-12 rounded-full p-[3px] before:absolute before:top-0 before:left-0 before:block before:h-full before:w-full before:animate-[spin_4s_linear_infinite] before:rounded-full before:bg-gradient-to-r before:from-primary before:via-secondary/50 before:to-primary before:content-['']">
                    <div className="relative z-20 flex h-full w-full rounded-full bg-background border border-border/50">
                      <PlayIcon className="m-auto h-5 w-5 fill-primary stroke-primary ml-1" />
                    </div>
                </div>
                <div className="text-left">
                  <p className="text-lg font-black text-primary leading-none uppercase tracking-widest">
                    Watch Demo
                  </p>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">2 min runtime</p>
                </div>
              </button>
            </div>
          </div>
          
          {/* Fictional Brand Logo Cloud */}
          <div className="mx-auto mt-24 lg:mt-32 max-w-[70rem] lg:max-w-full">
            <div className="flex flex-col items-center gap-10">
              <p className="text-xs font-black uppercase tracking-[0.4em] text-muted-foreground/60">Trusted by modern engineering teams</p>
              <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-60">
                {Array(7)
                  .fill(null)
                  .map((_, i) => (
                    <img
                      key={`hero101-logo-${i}`}
                      src={`https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-${i + 1}.svg`}
                      alt="customer logo"
                      className="h-8 lg:h-10 w-28 lg:w-36 object-contain grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Video Modal Presentation */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="sm:max-w-[1000px] border-none bg-black/95 backdrop-blur-2xl p-0 overflow-hidden rounded-[2rem] shadow-2xl">
          <DialogHeader className="hidden">
            <DialogTitle>Video Presentation</DialogTitle>
          </DialogHeader>
          <AspectRatio ratio={16 / 9}>
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/your-video-id?autoplay=1"
              title="Platform Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </AspectRatio>
        </DialogContent>
      </Dialog>
    </>
  );
};

export { Hero101 };
```
