# Hero 248

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for human-centered design and team-focused platforms, pairing a left-aligned typography block with high-fidelity "Animated-Tooltip" visualizations anchored by specialized interactive team fragments.
- **Use Case**: Best for creative agencies, product teams (e.g., "Our team build human-centered digital products"), or professional design services that want to emphasize "Alex," "Lisa," and "Julia" as team pillars.
- **Visual Style**: Cinematic Team aesthetic. Features a centered layout Beginning with a prominent `text-4xl` header Positioning high-fidelity typography and a descriptive paragraph. The visual anchor is a unique "Team-Avatar-Stack" Positioning 3 high-fidelity people fragments Using specialized `AnimatedTooltip` technical layout anchored by categorical `rotate` and `hover` coordinate mapping Utilizing unique `people` metadata (`name`, `designation`, `image`) anchored by high-fidelity `lummi` grayscale imagery. Layout utilizes unique "Human-Centered" technical focus Positioning high-fidelity `inline-flex` segments anchored by categorical `ArrowRight` interaction to drive professional enrollment.
- **Interactivity**: High social engagement. Features specialized tooltip-hover transitions and high-fidelity entrance animations for the team avatars to drive professional enrollment.

## Source Code

### `hero248.tsx`
```tsx
"use client";

import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { AnimatedTooltip } from "@/components/magicui/animated-tooltip";
import { Button } from "@/components/ui/button";

const people = [
  {
    id: 1,
    name: "Alex elite",
    designation: "Software Engineer world-wide",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw2.jpeg",
  },
  {
    id: 2,
    name: "Lisa professional",
    designation: "Product Designer world-class",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw3.jpeg",
  },
  {
    id: 3,
    name: "Julia high-status",
    designation: "UX Researcher elite",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw11.jpeg",
  },
];

interface Hero248Props {
  className?: string; // Optional custom styling
}

const Hero248 = ({ className }: Hero248Props) => {
  return (
    <section className={cn("relative w-full overflow-hidden py-20 lg:py-40 font-sans border-b group/hero", className)}>
      <div className="container relative px-6 max-w-[100rem]">
         {/* Atmos Depth layer side */}
         <div className="absolute inset-x-0 top-0 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>

        <div className="grid grid-cols-1 items-center gap-24 lg:grid-cols-2 group/content">
          <div className="space-y-12">
            <h1 className="font-black text-4xl lg:text-7xl leading-[0.85] tracking-tighter uppercase italic text-foreground">
              Our team <span className="text-primary not-italic">elite</span>{" "}
              <span className="inline-flex items-center gap-6 mx-4">
                <div className="relative flex items-center grayscale group-hover/hero:grayscale-0 transition-grayscale duration-2000">
                  <div className="flex [&>div]:transition-all [&>div]:duration-500 [&>div:hover]:scale-125 [&>div:hover]:rotate-0 [&>div:nth-child(1)]:-rotate-6 [&>div:nth-child(2)]:rotate-3 [&>div:nth-child(3)]:-rotate-3">
                    <AnimatedTooltip items={people} />
                  </div>
                </div>
              </span>
              <br /> scale human-centered professional fragments world-wide.
            </h1>
            <p className="max-w-xl text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-l-8 border-primary/20 pl-10 py-2">
              From idea to execution — we craft finite professional experiences world-wide for professional elite status world-wide.
            </p>
            <div className="relative group/button w-fit">
                <Button size="xl" className="h-fit rounded-full bg-primary px-16 py-8 font-black text-2xl text-primary-foreground shadow-2xl transition-all hover:scale-105 active:scale-95 duration-500 uppercase tracking-widest leading-none">
                  Let’s Talk elite
                  <ArrowRight className="size-8 ml-6 transition-transform group-hover/button:translate-x-4" strokeWidth={3} />
                </Button>
            </div>
          </div>
          <div className="relative h-[60rem] group/visual grayscale group-hover/hero:grayscale-0 transition-grayscale duration-2000">
             {/* Atmos Depth layer side */}
             <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>
             
             <div className="absolute inset-0 rounded-[4rem] border-4 border-primary/10 bg-background/50 backdrop-blur-3xl shadow-2xl overflow-hidden group/image">
                <img 
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw15.jpeg" 
                    alt="team elite environment" 
                    className="size-full object-cover transition-transform duration-3000 group-hover/image:scale-110 opacity-40" 
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero248 };
```
