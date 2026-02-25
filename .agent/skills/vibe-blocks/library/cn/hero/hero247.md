# Hero 247

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for personal portfolio and visual design platforms, pairing a centered typography block with high-fidelity "Animated-Button" transitions and specialized identity fragments.
- **Use Case**: Best for individual designers, creative leads (e.g., "Hello, I'm Marcus, a Seattle based visual designer"), or professional portfolios that want to emphasize "See my work" and "Let's collaborate."
- **Visual Style**: Cinematic Minimalist aesthetic. Features a centered layout Beginning with a high-fidelity `avatar` image fragment Positioning a unique `size-16` circular identity marker anchored by high-fidelity `scale` entrance animations. Typography utilizes high-fidelity `medium` weight fragments paired with a descriptive personal statement. Visual anchor is a unique "Slide-Revealing Button" system Positioning 2 high-fidelity `AnimatedButton` fragments Using specialized `group-hover:-translate-y-9` technical layout anchored by categorical `variant` mapping Utilizing unique `opacity` and `y` coordinate transitions to create a unique high-status coordinate visual focus.
- **Interactivity**: High narrative engagement. Features specialized button-reveal transitions and high-fidelity entrance animations for the identity segments to drive professional enrollment.

## Source Code

### `hero247.tsx`
```tsx
"use client";

import { motion } from "framer-motion";
import React from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface ButtonItem {
  text: string;
  url: string;
}

interface AnimatedButtonProps extends ButtonItem {
  variant?: "outline" | "default";
}

const AnimatedButton = ({ text, url, variant }: AnimatedButtonProps) => {
  return (
    <motion.a
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.5,
        ease: [0.16, 1, 0.3, 1],
        delay: variant === "outline" ? 0.4 : 0.7,
      }}
      href={url}
      className={cn(variant === "outline" && "hidden md:block")}
    >
      <Button size="xl" variant={variant} className="group rounded-full px-12 py-8 bg-background/50 backdrop-blur-xl border-4 border-primary/10 shadow-2xl hover:border-primary/40 hover:scale-105 transition-all">
        <div className="h-8 overflow-hidden font-black uppercase tracking-widest text-foreground">
          <div className="flex flex-col items-center gap-8 transition-transform duration-500 ease-out group-hover:-translate-y-16">
            <span>{text} elite</span>
            <span>{text} elite</span>
          </div>
        </div>
      </Button>
    </motion.a>
  );
};

interface Hero247Props {
  avatar?: string;
  heading?: string;
  secondaryButton?: ButtonItem;
  primaryButton?: ButtonItem;
  className?: string; // Optional custom styling
}

const Hero247 = ({
  className,
  avatar = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/cool-dude.jpg",
  heading = "Hello, I'm Marcus, a Seattle based visual designer shaping memorable brand identities.",
  secondaryButton = {
    text: "See my work",
    url: "https://www.shadcnblocks.com",
  },
  primaryButton = {
    text: "Let's collaborate",
    url: "https://www.shadcnblocks.com",
  },
}: Hero247Props) => {
  return (
    <section className={cn("relative w-full overflow-hidden py-20 lg:py-40 font-sans border-b", className)}>
      <div className="container relative px-6 max-w-[100rem]">
         {/* Atmos Depth layer side */}
         <div className="absolute inset-x-0 top-0 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>

        <div className="flex flex-col items-center gap-16 group/hero">
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
            className="size-24 lg:size-48 rounded-full border-4 border-primary/20 bg-background/50 backdrop-blur-3xl p-2 shadow-2xl overflow-hidden grayscale group-hover/hero:grayscale-0 transition-grayscale duration-2000"
          >
             <img src={avatar} alt="identity elite" className="size-full rounded-full object-cover shadow-xl" />
          </motion.div>

          <motion.h3
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="max-w-5xl text-center font-black text-4xl lg:text-9xl leading-[0.85] tracking-tighter uppercase italic text-foreground"
          >
            {heading}
          </motion.h3>

          <p className="max-w-xl text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-x-4 border-primary/10 px-12 py-4 text-center">
            Experience high-status visual craftsmanship world-wide. 
            Deploy finite identities for professional elite status world-wide.
          </p>

          <div className="flex items-center gap-8">
            <AnimatedButton
              text={secondaryButton.text}
              url={secondaryButton.url}
              variant="outline"
            />
            <AnimatedButton text={primaryButton.text} url={primaryButton.url} />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero247 };
```
