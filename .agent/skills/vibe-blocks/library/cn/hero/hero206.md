# Hero 206

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for UI component platforms, pairing a centered typography block with a high-fidelity "Browser-Mockup" and a prominent "Social-Proof" badge.
- **Use Case**: Best for UI component libraries, SaaS developer tools (e.g., "Shadcn Blocks Just Copy/Paste."), or professional design resources that want to emphasize "Build beautiful, accessible components" and "Trusted by 10k+ users."
- **Visual Style**: Cinematic Dev-Tool aesthetic. Features a centered layout Beginning with a prominent `font-antonio` heading Utilizing categorical uppercase narrative storytelling. The centerpiece is a unique "Browser-Mockup" anchored by a functional `header` section Positioning specialized absolute-positioned dots and high-fidelity URL metadata ("shadcnblocks.com"). Visual anchor is a unique "Social-Proof" `Badge` Utilizing specialized absolute-positioned `Avatar` overlapping Positioning categorical trust metadata to create a high-status visual focus.
- **Interactivity**: High engagement through state management. Features specialized social-proof badges and high-fidelity browser transitions (desktop vs mobile) to drive professional enrollment.

## Source Code

### `hero206.tsx`
```tsx
"use client";

import {
  ChevronLeft,
  ChevronRight,
  Copy,
  Plus,
  RotateCw,
  Share,
} from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";
import { useGoogleFont } from "@/hooks/use-google-font";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface Hero206Props {
  className?: string; // Optional custom styling
}

const Hero206 = ({ className }: Hero206Props) => {
  useGoogleFont("Antonio");
  return (
    <section
      className={cn("bg-background py-20 lg:py-40 font-sans border-b overflow-hidden group/hero", className)}
      style={{ "--font-antonio": "Antonio, sans-serif" } as React.CSSProperties}
    >
      <div className="relative container px-6 max-w-[100rem]">
        
        {/* Narrative Narrative side */}
        <header className="mx-auto max-w-[65rem] text-center flex flex-col gap-8 group/content">
             {/* Atmos Depth layer side */}
            <div className="absolute inset-x-0 top-0 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>

            <h1 className="font-antonio text-6xl font-black lg:text-[9.5rem] tracking-tighter leading-[0.8] text-foreground drop-shadow-sm uppercase">
                Shadcn Blocks <br /> 
                <span className="text-secondary italic">just</span> copy world-class.
            </h1>
            <p className="mx-auto max-w-[45rem] mt-6 text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-x-4 border-primary/10 px-12 py-4">
                Build beautiful, accessible high-status components with world-class shadcn/ui. 
                Simply add components directly—no package dependencies required for elite status.
            </p>
        </header>

        {/* Social Proof Merit Anchor side */}
        <div className="mt-12 group/badge flex justify-center">
            <Badge
                variant="outline"
                className="mx-auto flex w-fit cursor-pointer items-center justify-center rounded-full border-2 border-primary/20 hover:border-primary/40 p-1 pr-6 pl-2 font-black transition-all ease-in-out hover:gap-6 hover:shadow-2xl hover:scale-105 duration-500 bg-background/50 backdrop-blur-xl"
            >
                <div className="flex items-center">
                    <Avatar className="relative -mr-6 overflow-hidden rounded-full border-4 border-background size-12 lg:size-16 shadow-xl grayscale group-hover/badge:grayscale-0 transition-grayscale">
                        <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp" alt="elite user 1" />
                        <AvatarFallback>AB</AvatarFallback>
                    </Avatar>
                    <Avatar className="relative -mr-6 overflow-hidden rounded-full border-4 border-background size-12 lg:size-16 shadow-xl grayscale group-hover/badge:grayscale-0 transition-grayscale">
                        <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp" alt="elite user 2" />
                        <AvatarFallback>AB</AvatarFallback>
                    </Avatar>
                    <Avatar className="relative -mr-6 overflow-hidden rounded-full border-4 border-background size-12 lg:size-16 shadow-xl grayscale group-hover/badge:grayscale-0 transition-grayscale">
                        <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp" alt="elite user 3" />
                        <AvatarFallback>AB</AvatarFallback>
                    </Avatar>
                </div>
                <p className="ml-10 tracking-[0.2em] font-black uppercase text-lg text-muted-foreground flex items-center gap-2">
                    Trusted by <span className="text-primary italic text-2xl drop-shadow-[0_0_8px_rgba(var(--primary),0.3)]">10k+</span> elite builders.
                </p>
            </Badge>
        </div>

        {/* Unique "Browser Mockup Matrix" Background side */}
        <div className="relative mt-24 flex h-full w-full flex-col items-center justify-center group/display">
          <BrowserMockup
            className="w-full shadow-2xl transition-all duration-1000 hover:shadow-primary/5"
            url="https://shadcnblocks.com/block/hero206"
            DahboardUrlDesktop="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/dashboard/dashboard-1.png"
            DahboardUrlMobile="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/dashboard/dashboard-mobile-1.png"
          />
          <div className="absolute bottom-0 h-1/2 w-full bg-linear-to-t from-background via-background/80 to-transparent z-10" />
        </div>
      </div>
    </section>
  );
};

export { Hero206 };

const BrowserMockup = ({
  className = "",
  url = "https://shadcnblocks.com/block/hero206",
  DahboardUrlDesktop = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/dashboard/dashboard-1.png",
  DahboardUrlMobile = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/dashboard/dashboard-mobile-1.png",
}) => (
  <div
    className={cn(
      "relative w-full overflow-hidden rounded-[3rem] lg:rounded-[4rem] border-2 border-border/40 bg-background/50 backdrop-blur-3xl",
      className,
    )}
  >
    {/* Specialized Architectural Header side */}
    <div className="flex items-center justify-between gap-10 bg-muted/50 px-8 lg:px-12 py-6 border-b border-border/40 lg:gap-25">
      <div className="flex items-center gap-4 group/dots">
        <div className="size-4 rounded-full bg-red-500 animate-pulse" />
        <div className="size-4 rounded-full bg-yellow-500" />
        <div className="size-4 rounded-full bg-green-500" />
        <div className="ml-8 hidden items-center gap-6 opacity-30 group-hover/dots:opacity-60 transition-opacity lg:flex">
          <ChevronLeft className="size-6" />
          <ChevronRight className="size-6" />
        </div>
      </div>
      <div className="flex w-full items-center justify-center group/url">
        <p className="relative hidden w-full max-w-[40rem] rounded-full bg-background/80 px-8 py-2 text-center text-sm font-black uppercase tracking-widest text-muted-foreground md:block border border-border/40 shadow-inner italic">
          {url}
          <RotateCw className="absolute top-2.5 right-6 size-4 text-primary animate-spin-slow" />
        </p>
      </div>

      <div className="flex items-center gap-8 opacity-30 hover:opacity-100 transition-opacity">
        <Share className="size-5" />
        <Plus className="size-5" />
        <Copy className="size-5" />
      </div>
    </div>

    {/* Content Display layer side */}
    <div className="relative w-full aspect-video isolate">
      <img
        src={DahboardUrlDesktop}
        alt="world-class dashboard desktop focus"
        className="hidden md:block absolute inset-0 size-full object-cover object-top grayscale hover:grayscale-0 transition-grayscale duration-1000"
      />
      <img
        src={DahboardUrlMobile}
        alt="world-class dashboard mobile focus"
        className="block md:hidden size-full object-cover object-top grayscale hover:grayscale-0 transition-grayscale duration-1000"
      />
      <div className="absolute inset-0 bg-linear-to-tr from-primary/5 to-transparent pointer-events-none"></div>
    </div>
  </div>
);
```
