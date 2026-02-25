# Hero 233

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for productivity platforms, pairing a centered typography block with high-fidelity "Line-Shadow-Text" animations and a unique "Vertical-Growth" grid background anchored by specialized interactive segment components.
- **Use Case**: Best for task management apps, productivity tools (e.g., "The only app you Need to Stay Productive ever."), or professional launch pages that want to emphasize "Productive" and "Flexible Plan."
- **Visual Style**: Cinematic Launch aesthetic. Features a centered layout Beginning with a prominent merit badge Positioning a status dot and "Flexible Plan" text. The visual anchor is a unique "Infinite Scroll" typography block Positioning a high-fidelity `LineShadowText` Positioning the word "Productive" Utilizing categorical atmospheric masking Positioning specialized `bg-background` and `blur-xl` absolute-divs. Layout uses unique "Grid-Growth" background Positioning 7-18 absolute-positioned `motion.div` columns Utilizing categorical high-fidelity `height: 100%` entrance animations Using specialized `hover:scale-110` and `bg-gradient-to-b` transitions to create a unique high-status technical visual focus.
- **Interactivity**: High cinematic engagement. Features specialized column growth transitions and high-fidelity entrance animations for the typography and buttons to drive professional enrollment.

## Source Code

### `hero233.tsx`
```tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

import { LineShadowText } from "@/components/ui/line-shadow-text";
import { Button } from "@/components/ui/button";

interface Hero233Props {
  className?: string;
}

const Hero233 = ({ className }: Hero233Props) => {
  const isMobile = useIsMobile();

  return (
    <section
      className={cn(
        "relative h-screen w-screen overflow-hidden bg-background py-32",
        className,
      )}
    >
      <div className="relative z-20 container flex flex-col items-center justify-center gap-4 py-10 text-center md:mt-22">
        <div className="absolute -z-1 size-full max-w-3xl bg-background blur-xl" />
        <Button
          variant="secondary"
          className="text-md group my-16 flex w-fit items-center justify-center gap-3 rounded-full bg-muted/60 px-5 py-1 tracking-tight md:my-5"
        >
          <span className="size-2 rounded-full bg-foreground" />
          <span>Flexible Plan customized for you</span>
        </Button>
        <div className="relative flex max-w-4xl items-center justify-center text-center text-5xl font-medium tracking-tight md:text-7xl">
          <h1 className="relative z-10">
            <span className="mr-3 text-muted-foreground/50">
              The only app you Need to Stay
            </span>
            <LineShadowText> Productive </LineShadowText>
            <span className="text-muted-foreground/50"> ever</span>
            <span>.</span>
          </h1>
        </div>

        <p className="mt-5 max-w-xl bg-background text-muted-foreground/80">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum animi,
          ipsam provident optio delectus neque aliquid cumque. Beatae, odio!
        </p>
        <div className="my-5 flex gap-4">
          <Button
            variant="secondary"
            className="text-md group flex w-fit items-center justify-center gap-2 rounded-full px-4 py-1 tracking-tight"
          >
            <span>Documentation</span>
            <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
          </Button>
          <Button
            variant="default"
            className="text-md group flex w-fit items-center justify-center gap-2 rounded-full px-4 py-1 tracking-tight"
          >
            <span>Get Started</span>
            <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
          </Button>
        </div>
      </div>

      <div className="absolute top-0 flex size-full justify-center">
        {Array.from({ length: isMobile ? 7 : 18 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100%" }}
            transition={{
              duration: 0.8,
              delay: i * 0.05,
              ease: "easeOut",
            }}
            className="w-24 border-l bg-gradient-to-b to-transparent transition-all ease-in-out hover:scale-110 hover:from-black/2"
          />
        ))}
      </div>
    </section>
  );
};

export { Hero233 };
```
