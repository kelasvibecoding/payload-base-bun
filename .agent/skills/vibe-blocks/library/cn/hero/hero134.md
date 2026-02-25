# Hero 134

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a conversion-heavy introduction for sales-focused platforms, pairing a centered typography block with a wide-format dashboard preview and an enterprise logo trust bar.
- **Use Case**: Best for POS systems, e-commerce management platforms, or revenue-focused SaaS that want to emphasize "Converting visitors" and "Managing sales."
- **Visual Style**: Growth-centric professional aesthetic. Features a centered layout beginning with a bold typography block. Primary CTA features a unique "Radial-Slide" motion effect using a hidden `bg-pink-400` circle container that expands on hover (`group-hover:w-[110%]`). The visual anchor is a wide-format dashboard preview (`max-w-[82.5rem]`) at the bottom, utilizing `rounded-t-3xl` corners to create an "Infinity Scroll" feel. Concludes with a categorical logo trust bar displaying social proof ("Trusted by these brands").
- **Interactivity**: High interactive engagement. Features specialized radial-slide button hover effects and a functional `Dialog`-based "Watch Video" modal trigger. Logo bar uses `opacity-55` for a refined, non-distracting verification layer.

## Source Code

### `hero134.tsx`
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

interface Hero134Props {
  className?: string;
}

const Hero134 = ({ className }: Hero134Props) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <Fragment>
      <section className={cn("bg-background py-20 lg:py-40 font-sans overflow-hidden border-b", className)}>
          <div className="container relative z-10 px-6">
            <div className="flex flex-col items-center gap-24 lg:gap-32">
              
              {/* Conversion Narrative side */}
              <div className="flex flex-col items-center gap-12 text-center text-pretty">
                  <div className="flex flex-col items-center gap-10">
                    <h1 className="max-w-[1000px] text-6xl font-black lg:text-9xl tracking-tighter leading-[0.85] text-foreground drop-shadow-sm">
                        Quickly convert visitors into <span className="text-primary italic">paying</span> customers
                    </h1>
                    <p className="max-w-[800px] text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-x-4 border-primary/10 px-10">
                        Transform your smartphone or tablet into a powerful sales tool.
                        Effortlessly manage sales, inventory, and boost your revenue today.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-10 mt-6">
                    {/* Unique "Radial-Slide" Advanced Motion Button */}
                    <Button className="group relative h-fit overflow-hidden rounded-full bg-primary border-none px-12 py-7 font-black text-xl text-primary-foreground shadow-2xl transition-transform hover:scale-105 active:scale-95 duration-500">
                      <span className="relative z-10 tracking-widest uppercase">Start Your Free Trial</span>
                      {/* Interactive background reveal circle */}
                      <div className="absolute -bottom-16 -left-16 aspect-square w-24 rounded-full bg-secondary transition-all duration-700 ease-in-out group-hover:bottom-1/2 group-hover:-left-12 group-hover:w-[130%] group-hover:translate-y-1/2 opacity-20 group-hover:opacity-100"></div>
                    </Button>

                    <button
                        onClick={() => setIsVideoOpen(true)}
                        className="group flex items-center gap-4 hover:opacity-80 transition-all outline-none"
                    >
                        <div className="flex h-16 w-16 rounded-full bg-primary border-4 border-background shadow-xl scale-95 group-hover:scale-110 transition-transform">
                        <Play className="m-auto size-6 fill-white stroke-white ml-1" />
                        </div>
                        <div className="text-left font-black text-lg text-foreground uppercase tracking-widest leading-none">Play Video</div>
                    </button>
                  </div>
              </div>
              
              {/* Wide-Format Platform Anchor visual */}
              <div className="w-full relative group">
                <div className="absolute -inset-10 bg-primary/5 blur-3xl opacity-50 rounded-full z-[-1]"></div>
                <div className="relative z-20 w-full max-w-[90rem] mx-auto overflow-hidden rounded-t-[3rem] border-x-8 border-t-8 border-foreground shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transition-transform duration-1000 group-hover:-translate-y-4">
                    <AspectRatio ratio={2.2 / 1}>
                        <img
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                        alt="sales and inventory dashboard"
                        className="size-full object-cover transition-all duration-1000 group-hover:scale-105"
                        />
                    </AspectRatio>
                    {/* Dashboard Detail Shade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none"></div>
                </div>
              </div>

            </div>
          </div>

          {/* Enterprise Logo Trust side */}
          <div className="container relative z-10 px-6 mt-32 lg:mt-48 py-20 border-t border-border/40">
            <div className="flex flex-col items-center gap-16">
              <p className="text-center text-xs font-black uppercase tracking-[0.4em] text-muted-foreground/60">
                Trusted by these brands and many others
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-20 gap-y-12 opacity-30">
                {Array(6).fill(null).map((_, i) => (
                    <img
                        key={`hero134-logo-${i}`}
                        src={`https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-${i + 1}.svg`}
                        alt="partner logo"
                        className="h-8 lg:h-12 w-auto grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100"
                    />
                ))}
              </div>
            </div>
          </div>
      </section>

      {/* Presentation Video Modal */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="sm:max-w-[1000px] border-none bg-black/95 backdrop-blur-2xl p-0 overflow-hidden rounded-[3rem] shadow-2xl">
          <DialogHeader className="hidden">
            <DialogTitle>Sales Platform Preview</DialogTitle>
          </DialogHeader>
          <div className="aspect-video relative">
            <iframe
              className="h-full w-full animate-in fade-in zoom-in duration-1000"
              src="https://www.youtube.com/embed/your-video-id?autoplay=1"
              title="Platform Preview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export { Hero134 };
```
