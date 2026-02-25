# Hero 232

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for productivity platforms, pairing a centered typography block with a high-fidelity "Line-Shadow-Text" anchor and a unique "Technical-Sketch" illustration anchored by specialized orange-focal-point path animations.
- **Use Case**: Best for technical SaaS tools, engineering platforms (e.g., "The only app you need to Stay Productive ever."), or professional design ecosystems that want to emphasize "Productive" and "Flexible Plan."
- **Visual Style**: Cinematic Blueprint aesthetic. Features a centered layout Beginning with a prominent merit badge Positioning a status dot and "Flexible Plan" text. The visual anchor is a unique "Infinite Scroll" typography block Positioning a high-fidelity `LineShadowText` Positioning the word "Productive" Utilizing categorical atmospheric masking Positioning specialized `bg-background` absolute-divs anchored by high-fidelity motion paths. Layout uses unique "Drafting-Illustrations" Positioning high-fidelity SVG drawings Utilizing specialized `Illustration1` fragments anchored by high-fidelity `motion.path` entrance animations Using specialized `text-orange-500` focal points to create a unique high-status coordinate visual focus.
- **Interactivity**: High atmospheric engagement. Features specialized path reveal transitions and high-fidelity entrance animations for the technical drawings and buttons to drive professional enrollment.

## Source Code

### `hero232.tsx`
```tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import { LineShadowText } from "@/components/ui/line-shadow-text";
import { Button } from "@/components/ui/button";

interface Hero232Props {
  className?: string; // Optional custom styling
}

const Hero232 = ({ className }: Hero232Props) => {
  return (
    <section
      className={cn(
        "relative h-screen w-full bg-background font-sans border-b overflow-hidden flex items-center justify-center",
        className,
      )}
    >
      <div className="relative z-30 container px-6 max-w-[100rem] flex flex-col items-center justify-center gap-12 text-center text-pretty group/content">
        
        {/* Narrative Merit Badge side */}
        <div className="group/badge">
             <Button
                variant="secondary"
                size="lg"
                className="h-fit rounded-full bg-muted/60 border-2 border-primary/20 backdrop-blur-xl px-12 py-5 font-black text-xl text-foreground shadow-xl transition-all hover:scale-105 active:scale-95 duration-500 uppercase tracking-widest leading-none flex items-center gap-8"
            >
                <span className="size-4 rounded-full bg-primary animate-pulse shadow-[0_0_15px_rgba(var(--primary),0.8)]" />
                <span>Flexible Plans elite</span>
            </Button>
        </div>

        <div className="relative flex flex-col items-center gap-10">
             {/* Atmos Depth layer side */}
            <div className="absolute inset-x-0 top-0 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse size-1/2 left-1/4"></div>

            <div className="relative flex max-w-5xl items-center justify-center text-center">
                <h1 className="relative z-10 font-black lg:text-[10rem] tracking-tighter leading-[0.8] text-foreground drop-shadow-sm uppercase">
                    <span className="mr-6 text-muted-foreground/30">
                        The only app elite teams need to Stay
                    </span>
                    <LineShadowText className="text-primary italic animate-pulse-slow"> Productive </LineShadowText>
                    <span className="text-muted-foreground/30"> ever</span>
                    <span className="text-primary">.</span>
                </h1>
                {/* specialized atmospheric typography masking side */}
                <div className="absolute z-[-1] h-[105%] w-[85%] bg-background/80 blur-3xl opacity-60 pointer-events-none" />
            </div>

            <p className="mx-auto max-w-[45rem] mt-6 text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-x-4 border-primary/10 px-12 py-4">
                Elite productivity world-wide for high-status brands. 
                Experience world-class professional craft for elite status world-wide.
            </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-10 group/buttons px-10">
          <Button
            variant="outline"
            size="lg"
            className="h-fit rounded-full bg-background/50 border-4 border-primary/10 px-16 py-8 font-black text-2xl text-foreground shadow-2xl transition-all hover:scale-105 active:scale-95 duration-500 uppercase tracking-[0.2em] leading-none group/action-1"
          >
            <span className="flex items-center gap-8">
                Documentation
                <ArrowRight className="size-8 -rotate-45 transition-transform group-hover/action-1:rotate-0" strokeWidth={4} />
            </span>
          </Button>
          <Button
            size="lg"
             className="h-fit rounded-full bg-primary px-16 py-8 font-black text-2xl text-primary-foreground shadow-2xl transition-all hover:scale-105 active:scale-95 duration-500 uppercase tracking-[0.2em] leading-none group/action-2"
          >
            <span className="flex items-center gap-8">
                Get Started elite
                <ArrowRight className="size-8 -rotate-45 transition-transform group-hover/action-2:rotate-0" strokeWidth={4} />
            </span>
          </Button>
        </div>
      </div>

      {/* Unique "Architectural Illustration Matrix" Visual side */}
      <div className="absolute inset-0 pointer-events-none group-hover/hero:opacity-80 transition-opacity duration-2000 opacity-40">
        <Illustration1
            initial={{ opacity: 0, y: -200, scale: 1.1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-12 left-0 hidden lg:block size-[60rem] text-primary"
        />

        <Illustration1
            initial={{ opacity: 0, y: -200, scale: 1.1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="absolute top-48 right-0 hidden scale-x-[-1] scale-y-[-1] lg:block size-[60rem] text-primary"
        />
      </div>
    </section>
  );
};

export { Hero232 };

const Illustration1 = (props: any) => {
  return (
    <motion.svg
      {...props}
      viewBox="0 0 571 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.1"
        d="M166.571 320.89L166.337 320.448L166.571 320.89ZM-185.483 414.753L-185.029 414.961L-185.483 414.753ZM-90.798 550.017L-90.541 550.446L-90.541 550.446L-90.798 550.017ZM251.609 358.688L251.447 358.215L251.447 358.215L251.609 358.688ZM569.859 394.354C570.073 394.528 570.388 394.496 570.562 394.281C570.736 394.067 570.703 393.752 570.489 393.578L569.859 394.354M166.571 320.89L166.337 320.448C84.8815 363.503 5.15738 369.122 -58.3672 372.888C-90.1101 374.77 -117.856 376.19 -139.709 381.614C-161.58 387.041 -177.656 396.504 -185.937 414.544L-185.483 414.753L-185.029 414.961C-176.926 397.312 -161.193 387.976 -139.469 382.584C-117.727 377.188 -90.0926 375.77 -58.308 373.886C5.22228 370.12 85.1407 364.497 166.804 321.332L166.571 320.89ZM-185.483 414.753L-185.937 414.544C-213.037 473.573 -201.627 514.972 -177.119 537.918C-152.665 560.814 -115.234 565.241 -90.541 550.446L-90.798 550.017L-91.055 549.588C-115.323 564.129 -152.27 559.813 -176.436 537.188C-200.548 514.612 -212 473.711 -185.029 414.961L-185.483 414.753ZM-90.798 550.017L-90.541 550.446C-58.5271 531.264 -27.9166 512.042 1.68716 493.418C31.2925 474.794 59.8897 456.769 87.8844 439.978C143.875 406.396 197.433 377.763 251.771 359.161L251.609 358.688L251.447 358.215C197.009 376.851 143.38 405.527 87.37 439.121C59.3643 455.918 30.7575 473.949 1.15467 492.572C-28.4497 511.196 -59.0516 530.413 -91.055 549.588L-90.798 550.017ZM251.609 358.688L251.771 359.161C376.455 316.476 485.473 325.788 569.859 394.354L570.174 393.966L570.489 393.578C485.756 324.729 376.346 315.457 251.447 358.215L251.609 358.688ZM-3.19002 2.72941L-3.12782 3.22553C104.974 -10.3276 201.201 40.6009 243.453 109.09C264.574 143.326 272.197 181.928 261.119 219.065C250.041 256.203 220.237 291.959 166.337 320.448L166.571 320.89L166.804 321.332C220.873 292.754 250.903 256.812 262.077 219.351C273.252 181.891 265.545 142.995 244.304 108.565C201.832 39.719 105.21 -11.365 -3.25222 2.23329L-3.19002 2.72941Z"
      />
      <motion.path
        initial={{ pathLength: 0, opacity: 0, pathOffset: 0.3 }}
        animate={{
          pathLength: 1,
          pathOffset: 0,
          opacity: 1,
        }}
        transition={{
          duration: 3,
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 1 },
        }}
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M166.571 320.89L166.337 320.448L166.571 320.89ZM-185.483 414.753L-185.029 414.961L-185.483 414.753ZM-90.798 550.017L-90.541 550.446L-90.541 550.446L-90.798 550.017ZM251.609 358.688L251.447 358.215L251.447 358.215L251.609 358.688ZM569.859 394.354C570.073 394.528 570.388 394.496 570.562 394.281C570.736 394.067 570.703 393.752 570.489 393.578L569.859 394.354M166.571 320.89L166.337 320.448C84.8815 363.503 5.15738 369.122 -58.3672 372.888C-90.1101 374.77 -117.856 376.19 -139.709 381.614C-161.58 387.041 -177.656 396.504 -185.937 414.544L-185.483 414.753L-185.029 414.961C-176.926 397.312 -161.193 387.976 -139.469 382.584C-117.727 377.188 -90.0926 375.77 -58.308 373.886C5.22228 370.12 85.1407 364.497 166.804 321.332L166.571 320.89ZM-185.483 414.753L-185.937 414.544C-213.037 473.573 -201.627 514.972 -177.119 537.918C-152.665 560.814 -115.234 565.241 -90.541 550.446L-90.798 550.017L-91.055 549.588C-115.323 564.129 -152.27 559.813 -176.436 537.188C-200.548 514.612 -212 473.711 -185.029 414.961L-185.483 414.753ZM-90.798 550.017L-90.541 550.446C-58.5271 531.264 -27.9166 512.042 1.68716 493.418C31.2925 474.794 59.8897 456.769 87.8844 439.978C143.875 406.396 197.433 377.763 251.771 359.161L251.609 358.688L251.447 358.215C197.009 376.851 143.38 405.527 87.37 439.121C59.3643 455.918 30.7575 473.949 1.15467 492.572C-28.4497 511.196 -59.0516 530.413 -91.055 549.588L-90.798 550.017ZM251.609 358.688L251.771 359.161C376.455 316.476 485.473 325.788 569.859 394.354L570.174 393.966L570.489 393.578C485.756 324.729 376.346 315.457 251.447 358.215L251.609 358.688ZM-3.19002 2.72941L-3.12782 3.22553C104.974 -10.3276 201.201 40.6009 243.453 109.09C264.574 143.326 272.197 181.928 261.119 219.065C250.041 256.203 220.237 291.959 166.337 320.448L166.571 320.89L166.804 321.332C220.873 292.754 250.903 256.812 262.077 219.351C273.252 181.891 265.545 142.995 244.304 108.565C201.832 39.719 105.21 -11.365 -3.25222 2.23329L-3.19002 2.72941Z"
      />
    </motion.svg>
  );
};
```
