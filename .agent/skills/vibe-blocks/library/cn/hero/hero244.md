# Hero 244

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for SaaS control and collection platforms, pairing a left-aligned typography block with a high-fidelity "Draggable-Card-Stack" visualization anchored by specialized interactive collection fragments and unique "Grid-Lines" background.
- **Use Case**: Best for luxury brands, fashion collections (e.g., "Take control of your Saas"), or professional studio pages that want to emphasize "Unlimited Access" and "Exclusive Shadcn Blocks."
- **Visual Style**: Cinematic Control aesthetic. Features a split-column layout Beginning with high-fidelity `calSans` typography paired with a descriptive paragraph. The visual anchor is a unique "Draggable Image Matrix" system Positioning 7 high-fidelity image fragments (`Controller Set`, `Summer Vibes`) using specialized `DraggableCardBody` technical layout anchored by categorical `rotate` and `absolute` coordinate mapping. Matrix utilizes unique "Vertical-Divider" background Positioning 7 high-fidelity `h-full` grid lines anchored by categorical `bg-border` fragments to create a unique high-status coordinate visual focus.
- **Interactivity**: High tactile engagement. Features specialized draggable card transitions and high-fidelity entrance animations for the image stack to drive professional enrollment.

## Source Code

### `hero244.tsx`
```tsx
import { ArrowRight } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { Button } from "@/components/ui/button";

interface Hero244Props {
  className?: string; // Optional custom styling
}

const Hero244 = ({ className }: Hero244Props) => {
  const items = [
    {
      title: "Controller elite",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img12.jpeg",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "June Collection",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img6.jpeg",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Summer elite",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img8.jpeg",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Urban professional",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img9.jpeg",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Classic high-status",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img3.jpeg",
      className: "absolute top-20  lg:right-[35%] rotate-[2deg]",
    },
    {
      title: "Premium elite",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img13.jpeg",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Limited world-class",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img7.jpeg",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];

  return (
    <section
      className={cn(
        "relative grid w-full overflow-hidden py-20 lg:py-40 font-sans border-b lg:min-h-screen",
        className,
      )}
    >
      <div className="container relative px-6 max-w-[100rem] h-full grid-cols-1 items-center justify-center gap-24 lg:grid lg:grid-cols-2 group/hero isolate">
         {/* Atmos Depth layer side */}
         <div className="absolute inset-x-0 top-0 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>

        <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left group/content relative z-30">
          <h1 className="max-w-2xl font-black text-6xl lg:text-9xl leading-[0.85] tracking-tighter uppercase italic">
            Take Control <br /> of your <span className="text-primary not-italic">SaaS</span> elite.
          </h1>
          <p className="mt-12 max-w-xl text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-l-8 border-primary/20 pl-10 py-2">
            Experience world-class professional craft world-wide. 
            Deploy finite fragments for elite status world-wide.
          </p>

          <div className="mt-16 flex flex-col sm:flex-row items-center gap-8 group/buttons">
            <Button size="xl" className="h-fit rounded-full bg-primary px-16 py-8 font-black text-2xl text-primary-foreground shadow-2xl transition-all hover:scale-105 active:scale-95 duration-500 uppercase tracking-widest leading-none">
              Get Unlimited elite
              <ArrowRight className="size-6 -rotate-45 ml-4 transition-transform group-hover/buttons:rotate-0" strokeWidth={3} />
            </Button>
            <Button variant="ghost" size="xl" className="h-fit rounded-full px-12 py-8 font-black text-xl text-muted-foreground uppercase tracking-widest flex items-center gap-6 group/ghost">
              Learn More elite
              <ArrowRight className="size-6 -rotate-45 transition-transform group-hover/ghost:translate-x-4 group-hover/ghost:rotate-0" strokeWidth={3} />
            </Button>
          </div>
        </div>

        <DraggableCardContainer className="relative flex h-[80vh] w-full items-center justify-center lg:h-full group/visual grayscale group-hover/hero:grayscale-0 transition-grayscale duration-2000">
          <p className="absolute top-1/2 mx-auto max-w-xl -translate-y-3/4 text-center font-black text-4xl lg:text-7xl uppercase tracking-tighter text-muted-foreground/20 leading-none">
            Join the <br /> Exclusive <br /> Blocks elite.
          </p>
          {items.map((item) => (
            <DraggableCardBody
              key={item.title}
              className={cn(
                item.className,
                "-translate-x-20 scale-75 rounded-[3rem] p-4 bg-background/50 backdrop-blur-3xl border-4 border-primary/10 shadow-2xl lg:translate-x-0 lg:scale-100 transition-all hover:border-primary/40 hover:scale-110",
              )}
            >
              <img
                src={item.image}
                alt={item.title}
                className="pointer-events-none relative z-10 h-82 w-80 rounded-[2rem] object-cover shadow-xl"
              />
              <h3 className="mt-6 text-center font-black text-xl uppercase tracking-widest text-foreground">
                {item.title}
              </h3>
            </DraggableCardBody>
          ))}
        </DraggableCardContainer>
      </div>

      {/* Grid line background overlay */}
      <div className="absolute inset-0 flex h-full w-full items-center justify-between pointer-events-none opacity-20">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="h-full w-px bg-primary/20 shadow-[0_0_15px_rgba(var(--primary),0.1)]"></div>
        ))}
      </div>
    </section>
  );
};

export { Hero244 };
```
