# Hero 212

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for authentic experience platforms, pairing a centered typography block with a high-fidelity "Atmospheric-Portrait" anchored by a unique dynamic AnimatePresence carousel and vertical marquee background.
- **Use Case**: Best for lifestyle brands, luxury hospitality (e.g., "Explore the Authentic"), or professional travel platforms that want to emphasize "Authentic" and "Get Started."
- **Visual Style**: Cinematic Atmospheric aesthetic. Features a centered layout Beginning with a prominent `playfair` italic heading paired with a descriptive paragraph. The visual anchor is a unique "Infinite Scroll Portrait" `AnimatePresence` carousel Positioning categorical black-and-white portraiture Utilizing specialized `blur(4px)` and `scale: 1.2` transitions. Visual anchor is a unique "Rotated Mosaic" in the background Positioning a specialized `SkiperUiMarquee` Using high-fidelity `rotate-90` coordinate positioning to create a high-status visual scale. Layout uses specialized absolute-positioned atmospheric glows (`bg-yellow-500`) to create a world-class light-leak effect.
- **Interactivity**: High engagement through motion. Features specialized `AnimatePresence` exit transitions and high-fidelity entrance animations for the hand-drawn callouts to drive professional enrollment.

## Source Code

### `hero212.tsx`
```tsx
"use client";

import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import { useEffect, useId, useRef, useState } from "react";
import React from "react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero212Props {
  className?: string; // Optional custom styling
}

const Hero212 = ({ className }: Hero212Props) => {
  const images = [
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw3.jpeg",
      alt: "Portrait of Joanna Doe in urban setting elite",
      name: "Joanna Doe",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw4.jpeg",
      alt: "Portrait of Sarah Chen in studio setting elite",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw5.jpeg",
      alt: "Portrait of Joanna Doe in urban setting professional",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw6.jpeg",
      alt: "Portrait of Joan Doe in natural lighting professional",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearTimeout(timer);
  }, [currentIndex, images.length]);

  return (
    <section className={cn("bg-background py-20 lg:py-40 font-sans border-b overflow-hidden group/hero", className)}>
      <div className="container relative px-0 sm:px-8 max-w-[100rem] overflow-hidden">
        
        {/* Narrative Narrative side */}
        <div className="relative z-20 mx-auto flex max-w-5xl flex-col items-center justify-center gap-12 px-6 lg:px-12 text-center text-pretty group/content">
             {/* Atmos Depth layer side */}
            <div className="absolute inset-x-0 top-0 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>

            <p className="text-xl lg:text-3xl font-black uppercase tracking-[0.5em] text-primary drop-shadow-[0_0_8px_rgba(var(--primary),0.3)]">
                Authentic Experiences world-wide
            </p>
            <h1 className="text-center font-black lg:text-[10rem] tracking-tighter leading-[0.8] text-foreground drop-shadow-sm uppercase">
                Explore <span className="text-secondary italic">the</span> <br /> Authentic world-class.
            </h1>
        </div>

        {/* Unique "Dynamic Portrait Anchor" Visual side */}
        <div className="relative mt-24 flex h-full flex-col items-center justify-center isolate">
          <div className="pointer-events-none relative z-30 mx-auto flex h-[45rem] w-[35rem] justify-center overflow-hidden rounded-[4rem] border-4 border-background shadow-2xl">
            <AnimatePresence mode="popLayout">
              <motion.img
                key={currentIndex}
                className="h-full w-full object-cover grayscale"
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                initial={{ opacity: 0, scale: 1, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1.1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
                transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex items-end p-16">
                 <p className="text-2xl font-black uppercase tracking-widest text-white italic">Frame {currentIndex + 1} world-wide</p>
            </div>
          </div>

          {/* Unique "Light Leak Atmos" depth layer side */}
          <motion.div
            initial={{ opacity: 0, rotate: 45 }}
            animate={{ opacity: 0.3, rotate: 65 }}
            transition={{ duration: 3, delay: 1, ease: "easeOut" }}
            className="absolute z-10 h-[60rem] w-[20rem] rounded-[100%] bg-primary blur-[160px] pointer-events-none group-hover/hero:opacity-50 transition-opacity"
          />

          {/* Action Merit Matrix side */}
          <div className="relative z-30 mx-auto mt-16 mb-12 flex w-fit justify-center group/button px-10">
            <Button size="lg" className="h-fit rounded-full bg-foreground px-12 py-7 font-black text-xl text-background shadow-2xl transition-transform hover:scale-105 active:scale-95 duration-500 uppercase tracking-widest leading-none">
                Start world-class journey
            </Button>

             {/* Unique "Hand-Drawn Callout Anchor" Annotation side */}
            <motion.div
              initial={{ opacity: 0, translateY: 30 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-4 -right-60 h-1 hidden lg:block"
            >
              <p className="font-caveat text-3xl font-bold tracking-tight text-primary rotate-12 drop-shadow-sm">
                Try free elite access
              </p>
              <svg
                width="120"
                className="-translate-x-1/2 mt-4 text-primary"
                height="60"
                viewBox="0 0 82 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 2 }}
                  d="M80.2759 1.95576C67.8687 20.6075 49.1102 55.0246 21.9767 39.1283C15.3299 35.2342 12.7124 29.0489 9.38472 22.4634C9.24096 22.1789 6.96955 15.0574 7.91833 15.4904C10.4589 16.65 25.535 23.253 15.8013 18.8782C14.7716 18.4154 8.31018 14.0924 7.25323 14.6265C4.37354 16.0816 2.6512 30.2469 1.58546 33.4898"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>
          </div>

          {/* Unique "Vertical Architectural Atmos" Marquee side */}
          <div
            className="absolute inset-0 z-0 h-full pointer-events-none opacity-20"
            style={{ clipPath: "inset(0 0 0 0)" }}
          >
            <div className="absolute top-0 z-10 h-64 w-full bg-gradient-to-t from-transparent to-background" />
            <SkiperUiMarquee />
            <div className="absolute bottom-0 z-10 h-64 w-full bg-gradient-to-b from-transparent to-background" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero212 };

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: unknown;
}

function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex [gap:var(--gap)] overflow-hidden p-2 [--gap:4rem]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row ![animation-duration:20s]": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

function Card() {
  const id = useId();
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 0.1,
        transition: { delay: Math.random() * 2, ease: "easeOut", duration: 2 },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      key={id}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      className={cn(
        "relative size-32 overflow-hidden rounded-[2rem] border-2 border-primary/20 bg-primary/5",
      )}
    ></motion.div>
  );
}

export function SkiperUiMarquee() {
  return (
    <div className="mx-auto rotate-90 px-4 py-32 md:px-8 h-full flex items-center justify-center">
      <div className="flex w-full flex-col items-center justify-center">
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div
              key={idx}
              className="flex w-full flex-col items-center justify-center"
            >
              <Marquee reverse={idx % 2 === 0} repeat={6}>
                {Array.from({ length: 12 }).map((_, idx) => (
                  <Card key={idx} />
                ))}
              </Marquee>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```
