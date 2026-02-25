# Hero 225

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for UI component platforms, pairing a centered typography block with a unique "Orbiting-Circles" anchored by specialized interactive logo components and a prominent call-to-action button.
- **Use Case**: Best for UI component libraries, design tool showcases (e.g., "Build with shadcn and Tailwind CSS"), or professional developer resource hubs that want to emphasize "Pay once and use everywhere."
- **Visual Style**: Cinematic Technical aesthetic. Features a centered layout Beginning with a prominent `calSans` heading paired with a descriptive paragraph. The centerpiece is a unique "Orbiting-Circles Matrix" Positioning 4 concentric channels Using specialized `OrbitingCircles` functional layout Utilizing categorical logo collections (`nextjs`, `react`, `tailwind`, `vercel`) anchored by a specialized `bg-gradient-to-t` atmosphere masking. Matrix units utilize specialized absolute-positioned functional icons Utilizing unique world-class speed and radius coordinate positioning to create a high-status visual scale.
- **Interactivity**: High atmospheric engagement. Features specialized orbiting transitions and high-fidelity entrance animations for the secondary buttons to drive professional enrollment.

## Source Code

### `hero225.tsx`
```tsx
"use client";

import { ArrowRight } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { Button } from "@/components/ui/button";

interface Hero225Props {
  className?: string; // Optional custom styling
}

const Hero225 = ({ className }: Hero225Props) => {
  const circle1Images = [
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nextjs-icon.svg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/react-icon.svg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vue-icon.svg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vite-icon.svg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/spotify-icon.svg",
  ];

  const circle2Images = [
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/typescript-icon.svg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-icon.svg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-icon.svg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-icon.svg",
  ];

  const circle3Images = [
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/notion-icon.svg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/github-icon.svg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma-icon.svg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/slack-icon.svg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/laravel-icon.svg",
  ];

  const circle4Images = [
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/gatsby-icon.svg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/dropbox-icon.svg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/brave-icon.svg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vscode-icon.svg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/sketch-icon.svg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/google-icon.svg",
  ];

  return (
    <section className={cn("bg-background py-20 lg:py-40 font-sans border-b overflow-hidden group/hero", className)}>
      <div className="container relative px-6 max-w-[100rem]">
        
        {/* Narrative Narrative side */}
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-12 px-6 lg:px-12 text-center text-pretty group/content">
             {/* Atmos Depth layer side */}
            <div className="absolute inset-x-0 top-0 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>

            <p className="text-xl lg:text-3xl font-black uppercase tracking-[0.5em] text-primary drop-shadow-[0_0_8px_rgba(var(--primary),0.3)]">
                Build with Shadcn world-class
            </p>
            <h1 className="text-center font-black lg:text-[9.5rem] tracking-tighter leading-[0.8] text-foreground drop-shadow-sm uppercase">
                Pay Once <span className="text-secondary italic">use</span> Everywhere elite.
            </h1>
        </div>

        {/* Unique "Orbiting Matrix" Visual side */}
        <div className="relative mt-24 h-[40rem] overflow-hidden grayscale group-hover/hero:grayscale-0 transition-grayscale duration-1000 border-t-2 border-border/40 isolate">
             {/* specialized atmospheric masks side */}
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background via-background/80 to-transparent z-20" />
            
            <div className="relative flex h-[120rem] w-full flex-col items-center justify-center overflow-hidden scale-110">
                <OrbitingCircles iconSize={50} radius={450} speed={2} className="opacity-40 hover:opacity-100 transition-opacity">
                {circle1Images.map((src, index) => (
                    <div key={index} className="size-16 p-4 bg-background/50 rounded-2xl backdrop-blur-xl border border-border/40 shadow-xl">
                        <img src={src} className="size-full object-contain" alt="elite tool logo fragment" />
                    </div>
                ))}
                </OrbitingCircles>
                <OrbitingCircles iconSize={50} radius={600} reverse speed={2} className="opacity-40 hover:opacity-100 transition-opacity">
                {circle2Images.map((src, index) => (
                    <div key={index} className="size-16 p-4 bg-background/50 rounded-2xl backdrop-blur-xl border border-border/40 shadow-xl">
                        <img src={src} className="size-full object-contain" alt="professional tool logo fragment" />
                    </div>
                ))}
                </OrbitingCircles>
                <OrbitingCircles iconSize={50} radius={750} speed={2} className="opacity-40 hover:opacity-100 transition-opacity">
                {circle3Images.map((src, index) => (
                    <div key={index} className="size-16 p-4 bg-background/50 rounded-2xl backdrop-blur-xl border border-border/40 shadow-xl">
                        <img src={src} className="size-full object-contain" alt="high-status tool logo fragment" />
                    </div>
                ))}
                </OrbitingCircles>
                <OrbitingCircles iconSize={50} radius={900} reverse speed={1} className="opacity-40 hover:opacity-100 transition-opacity">
                {circle4Images.map((src, index) => (
                    <div key={index} className="size-16 p-4 bg-background/50 rounded-2xl backdrop-blur-xl border border-border/40 shadow-xl">
                        <img src={src} className="size-full object-contain" alt="world-wide tool logo fragment" />
                    </div>
                ))}
                </OrbitingCircles>
            </div>

            <div className="absolute z-30 bottom-12 left-1/2 -translate-x-1/2 group/button w-fit">
                <Button size="lg" className="h-fit rounded-full bg-primary px-12 py-7 font-black text-xl text-primary-foreground shadow-2xl transition-transform hover:scale-105 active:scale-95 duration-500 uppercase tracking-widest leading-none">
                    <span className="flex items-center gap-6">
                        Get started elite
                        <ArrowRight className="size-6 -rotate-45 transition-transform group-hover/button:rotate-0" strokeWidth={3} />
                    </span>
                </Button>
            </div>
        </div>
      </div>
    </section>
  );
};

export { Hero225 };
```
