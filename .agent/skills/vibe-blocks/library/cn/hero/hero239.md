# Hero 239

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for design libraries and premium asset platforms, pairing a centered typography block with a high-fidelity "3D-Marquee" visualization anchored by specialized interactive image fragments and categorical professional enrollment.
- **Use Case**: Best for asset marketplaces, UI kits (e.g., "Unlock the Premium Blocks Just one time payment"), or professional digital catalogs that want to emphasize "Unlock Premium" and "Explore Benefits."
- **Visual Style**: Cinematic Catalog aesthetic. Features a centered layout Beginning with a prominent merit badge Positioning "shadcnblocks" text. The visual anchor is a unique "3D Parallax Marquee" system Positioning 35+ high-fidelity image fragments Using specialized `ThreeDMarquee` technical layout anchored by categorical portrait and architectural imagery. Layout utilizes high-fidelity `semi-bold` typography paired with a descriptive paragraph and high-fidelity call-to-action buttons (`Get Started`, `Explore Benefits`) anchored by specialized `ArrowRight` interaction. Marquee utilizes specialized `rounded-none` styling and high-fidelity entrance transitions to create a unique high-status coordinate visual focus.
- **Interactivity**: High engagement through perspective motion. Features specialized 3D scrolling marquee transitions and high-fidelity entrance animations for the typography and buttons to drive professional enrollment.

## Source Code

### `hero239.tsx`
```tsx
import { ArrowRight } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { Button } from "@/components/ui/button";

interface Hero239Props {
  className?: string; // Optional custom styling
}

const Hero239 = ({ className }: Hero239Props) => {
  const images = [
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img1.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img2.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img3.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img4.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img5.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img6.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img7.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img8.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img9.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img10.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img11.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img12.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img13.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img14.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img15.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img16.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img17.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img18.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img19.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img20.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img21.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img22.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img23.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img24.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img25.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img26.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img27.jpeg",
  ];

  return (
    <section className={cn("relative py-20 lg:py-40 font-sans border-b overflow-hidden group/hero", className)}>
      <div className="container relative px-6 max-w-[100rem] flex flex-col items-center justify-center gap-12 text-center group/content">
         {/* Atmos Depth layer side */}
         <div className="absolute inset-x-0 top-0 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>

        <p className="w-fit rounded-full bg-muted border border-border/50 px-6 py-2 text-sm font-black uppercase tracking-widest text-primary shadow-lg">
          shadcnblocks elite
        </p>
        <h1 className="mt-3 max-w-4xl font-black text-6xl lg:text-[10rem] leading-[0.85] tracking-tighter uppercase">
          Unlock the <span className="text-primary italic">Premium</span> Blocks elite.
        </h1>
        <p className="max-w-xl text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-x-4 border-primary/10 px-12 py-4">
          Experience world-class professional craft for high-status brands. 
          Deploy finite fragments for elite status world-wide.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-8 group/buttons">
           <Button size="lg" className="h-fit rounded-full bg-primary px-16 py-8 font-black text-2xl text-primary-foreground shadow-2xl transition-all hover:scale-105 active:scale-95 duration-500 uppercase tracking-widest leading-none">
              Get Started
            </Button>
            <Button variant="ghost" size="lg" className="h-fit rounded-full px-12 py-8 font-black text-xl text-muted-foreground uppercase tracking-widest flex items-center gap-6 group/ghost">
              Explore Benefits 
              <ArrowRight className="size-6 transition-transform group-hover/ghost:translate-x-4" strokeWidth={3} />
            </Button>
        </div>

        <div className="mt-20 flex h-full w-full items-center justify-center grayscale group-hover/hero:grayscale-0 transition-grayscale duration-2000 relative">
          <div className="absolute inset-0 bg-primary/5 blur-[100px] z-10 pointer-events-none" />
          <ThreeDMarquee className="rounded-none border-y border-primary/10" images={images} />
        </div>
      </div>
    </section>
  );
};

export { Hero239 };
```
