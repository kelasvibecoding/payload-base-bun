# Hero 171

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a high-status "Effortless Freedom" introduction Pairing a split-column layout with unique "Avatars-Stack" social proof and a complex "Matrix-Grid" of product features.
- **Use Case**: Best for booking platforms, lifestyle startups (e.g., "Effortless for you"), or high-end productivity tools that want to emphasize "Freeing up time" and "Extra freedom."
- **Visual Style**: Narrative Freedom aesthetic. Features a split-column layout starting with an high-impact typography block paired with two unique "3D-Flip" CTA buttons Utilizing specialized CSS `transform-style:preserve-3d` animations. Includes a unique trust-merit block Pairing a prominent `Avatar` stack with high-impact categorical metadata ("97K Users"). The visual anchor is a unique "Infinite-Matrix" grid on the right Featuring 4 relative-positioned containers Utilizing relative-positioned SVG "swirl" patterns and functional `Signal` and `AudioLines` icons to create extreme visual depth.
- **Interactivity**: High interactive storytelling. Features specialized "Slide-In" promo video modal trigger and 3D-flipping button states to drive high-fidelity user engagement.

## Source Code

### `hero171.tsx`
```tsx
"use client";
import { AudioLines, Play, Plus, Signal } from "lucide-react";
import { Fragment, useState } from "react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Hero171Props {
  className?: string;
}

const Hero171 = ({ className }: Hero171Props) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <Fragment>
      <section className={cn("bg-background py-20 lg:py-40 font-sans border-b overflow-hidden", className)}>
        <div className="container relative z-10 px-6">
          <div className="flex flex-col items-center gap-24 lg:flex-row lg:items-start text-pretty">
            
            {/* Freedom Narrative side */}
            <div className="w-full max-w-[35rem] flex flex-col gap-16 lg:gap-24">
              <div className="flex flex-col gap-10">
                <h1 className="text-6xl font-black lg:text-[8.5rem] tracking-tighter leading-[0.85] text-foreground drop-shadow-sm">
                  We make it <span className="text-secondary italic">effortless</span> for you.
                </h1>
                <p className="text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-l-4 border-primary/20 pl-10">
                  Say goodbye to manual labor and free up your high-status 
                  time to focus on your vision and professional freedom.
                </p>
              </div>

              {/* Unique "3D-Flip" Interactive Button row side */}
              <div className="flex flex-wrap gap-8">
                <Button
                  asChild
                  className="group h-fit rounded-full bg-primary px-12 py-7 font-black text-xl text-primary-foreground shadow-2xl transition-all hover:scale-105 active:scale-95"
                >
                  <a href="#">
                    <span
                      data-text="Try for Free"
                      className="relative inline-block origin-[50%_0%] p-0 transition-all [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)] before:absolute before:top-full before:left-0 before:h-full before:w-full before:origin-[50%_0%] before:[transform:rotateX(-90deg)] before:p-0 before:text-center before:content-[attr(data-text)] uppercase tracking-widest leading-none"
                    >
                      Try for Free
                    </span>
                  </a>
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  className="group h-fit rounded-full bg-background border-2 border-border px-10 py-7 font-black text-xl shadow-xl transition-all hover:scale-105 active:scale-95"
                >
                  <a href="#">
                    <span
                      data-text="Contact us"
                      className="relative inline-block origin-[50%_0%] p-0 transition-all [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)] before:absolute before:top-full before:left-0 before:h-full before:w-full before:origin-[50%_0%] before:[transform:rotateX(-90deg)] before:p-0 before:text-center before:content-[attr(data-text)] uppercase tracking-widest leading-none"
                    >
                      Contact us
                    </span>
                  </a>
                </Button>
              </div>

              {/* Unique "Social Trust" Indicators side */}
              <div className="mt-10 flex flex-col sm:flex-row gap-16 lg:gap-24 pt-12 border-t border-border/40">
                <div className="flex flex-col gap-10 group/avatars">
                  <div className="relative flex -space-x-8 transition-transform group-hover/avatars:translate-x-4 duration-500">
                    {[1, 2, 3].map((i) => (
                      <Avatar key={i} className="size-20 lg:size-24 rounded-full border-[6px] border-background shadow-2xl ring-4 ring-primary/5">
                        <AvatarImage src={`https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-${i}.webp`} alt="high-status user" />
                        <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                    ))}
                    <div className="flex size-20 lg:size-24 rounded-full border-[6px] border-background bg-secondary shadow-2xl group-hover/avatars:rotate-12 transition-transform">
                      <Plus className="m-auto size-8 text-foreground/40" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-6xl font-black text-primary leading-none tracking-tighter">97K+</span>
                    <span className="text-xs font-black uppercase tracking-[0.4em] text-muted-foreground/60">Global High-Status Users</span>
                  </div>
                </div>

                <div className="flex flex-col gap-8 group/promo items-start">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setIsVideoOpen(true)}
                    className="size-24 lg:size-28 rounded-full border-4 border-primary bg-background shadow-2xl transition-all hover:scale-110 hover:bg-primary group/play"
                  >
                    <Play className="m-auto size-10 fill-primary group-hover/play:fill-white transition-colors ml-4" />
                  </Button>
                  <p className="text-xs font-black uppercase tracking-[0.4em] text-muted-foreground/60 transition-colors group-hover/promo:text-primary">
                    Watch promo video
                  </p>
                </div>
              </div>
            </div>

            {/* Unique "Infinite Mosaic Matrix" Visual Anchor side */}
            <div className="mx-auto flex flex-col items-center">
              <div className="grid grid-cols-[6rem_7rem_12rem] grid-rows-[12rem_10rem_2rem_6rem] sm:grid-cols-[8rem_9rem_16rem] sm:grid-rows-[14rem_12rem_3rem_8rem] lg:grid-cols-[10rem_12.5rem_22rem] lg:grid-rows-[18rem_16rem_3rem_10rem] gap-8 group relative isolate">
                
                {/* Structural Depth layer side */}
                <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>

                <div className="col-[2/-1] overflow-hidden rounded-[3rem] lg:rounded-[4rem] border-[12px] border-background bg-blue-50 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transition-transform duration-1000 group-hover:-translate-y-4">
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                    alt="high-status life showcase"
                    className="size-full object-cover grayscale transition-grayscale duration-700 group-hover:grayscale-0"
                  />
                </div>

                <div className="col-[1/2] row-[1/2] self-end relative z-10 transition-transform duration-700 group-hover:-translate-x-4">
                  {/* Categorical Abstract SVG side */}
                   <svg
                    className="w-full fill-primary/10 drop-shadow-2xl"
                    viewBox="0 0 131 174"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M123.385 5.96661C123.548 6.77895 123.021 7.56919 122.209 7.73166C115.896 8.99415 109.63 9.96037 103.486 10.9077C99.0811 11.5869 94.7393 12.2564 90.4886 13.0183C80.1979 14.8631 70.1037 17.2952 59.8744 21.8151C41.5635 29.906 25.0024 41.8876 14.0337 58.7365C8.37592 67.4273 4.29836 78.5442 3.60483 89.504C2.91206 100.452 5.59556 111.123 13.2956 119.15C17.2013 123.222 22.165 126.554 27.7033 129.043C26.3041 123.491 25.7088 117.6 26.1196 111.355C27.0927 96.5641 39.1649 88.8778 52.0447 87.6439C64.8739 86.4148 79.2577 91.4779 85.4762 102.943C88.8209 109.11 89.0032 115.236 86.7021 120.549C84.4187 125.822 79.7615 130.137 73.7 132.917C63.9444 137.39 51.9845 138.282 40.6769 136.184C37.8771 135.664 35.1075 134.96 32.412 134.076C37.8412 148.683 49.141 160.796 61.9724 170.755C62.6268 171.263 62.7456 172.205 62.2377 172.86C61.7298 173.514 60.7875 173.633 60.133 173.125C46.4556 162.51 34.1037 149.186 28.7723 132.754C22.0105 130.053 15.8772 126.176 11.1305 121.227C2.69861 112.436 -0.119486 100.855 0.610818 89.3145C1.34036 77.7856 5.61055 66.1764 11.5195 57.0997C22.8909 39.6323 39.9827 27.3247 58.6619 19.071C69.1997 14.4148 79.5552 11.9305 89.9592 10.0654C94.3905 9.27105 98.7725 8.59677 103.176 7.91915C109.222 6.98883 115.309 6.05221 121.62 4.78992C122.433 4.62745 123.223 5.15427 123.385 5.96661ZM31.2114 130.479C34.4288 131.674 37.7946 132.598 41.2243 133.234C52.0581 135.245 63.3684 134.354 72.4495 130.19C77.9974 127.646 82.0229 123.805 83.9492 119.357C83.9492 119.357 83.9492 119.357 83.9492 119.357Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                <div className="col-[1/3] overflow-hidden rounded-[3rem] border-8 border-background bg-muted shadow-xl transition-transform duration-1000 group-hover:translate-x-8 translate-y-4">
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-10">
                      <div className="text-6xl font-black text-primary leading-none tracking-tighter">99%</div>
                      <Signal className="size-16 stroke-primary" strokeWidth={3} />
                    </div>
                    <p className="mt-8 text-xl lg:text-3xl font-black text-foreground italic leading-tight uppercase tracking-tighter">
                      Crystal-clear <span className="text-muted-foreground">voice and video</span> calls for high-status builders.
                    </p>
                  </div>
                </div>

                <div className="col-[2/3] row-[-3/-1] flex h-full w-full items-center justify-center overflow-hidden rounded-[3rem] border-8 border-background bg-secondary/10 shadow-2xl transition-transform duration-1000 group-hover:scale-110 group-hover:-rotate-6">
                  <AudioLines className="size-24 lg:size-32 text-primary/40 animate-pulse" strokeWidth={3} />
                </div>

                <div className="relative col-[3/4] row-[2/4] rounded-[4rem] group isolate">
                  <div className="h-full w-full overflow-hidden rounded-[4rem] border-[12px] border-background bg-background shadow-[0_30px_60px_-10px_rgba(0,0,0,0.5)] transition-transform duration-1000 group-hover:translate-x-4">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
                      alt="expert solution preview"
                      className="size-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>
                </div>
                
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Effortless Freedom Narrative Promo Video Modal */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="sm:max-w-[1000px] border-none bg-black/95 backdrop-blur-2xl p-0 overflow-hidden rounded-[3rem] shadow-2xl">
          <DialogHeader className="hidden">
            <DialogTitle>Freedom booking Platform Promo</DialogTitle>
          </DialogHeader>
          <div className="aspect-video relative">
            <iframe
              className="h-full w-full animate-in slide-in-from-bottom duration-1000"
              src="https://www.youtube.com/embed/your-video-id?autoplay=1"
              title="Freedom booking platform Presentation"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export { Hero171 };
```
