# Hero 211

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for results-focused platforms, pairing a centered typography block with a high-fidelity "Creative-Creative" anchored by multiple interactive components including a Swiper carousel and automated marquee.
- **Use Case**: Best for performance agencies, professional services (e.g., "We don't Believe in talk we deliver Results"), or creative studios that want to emphasize "Action" and "Get Started."
- **Visual Style**: Cinematic Results-Focused aesthetic. Features a centered layout Beginning with a prominent `calSans` heading paired with a descriptive paragraph. The centerpiece is a unique "Creative-Creative" `Swiper` carousel Positioning categorical portrait imagery Utilizing specialized `translate: ["-5%", 0, -200]` and `rotate: [0, 100, 0]` effects. Visual anchor is a unique "Infinite Scroll Mosaic" at the bottom Positioning a specialized `SkiperUiMarquee` Using high-fidelity `motion` to drive categorical social-proof matrixing. Matrix units utilize specialized absolute-positioned `caveat` callouts ("Try free tier now") to create a high-status visual focus.
- **Interactivity**: High atmospheric engagement. Features specialized `EffectCreative` transitions and high-fidelity entrance animations for the carousel and marquees to drive professional enrollment.

## Source Code

### `hero211.tsx`
```tsx
"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useId, useRef } from "react";
import React from "react";
import { Autoplay, EffectCreative, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero211Props {
  className?: string; // Optional custom styling
}

const Hero211 = ({ className }: Hero211Props) => {
  const images = [
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random11.jpeg",
      alt: "Portrait of Joanna Doe in urban setting world-class",
      name: "Joanna Doe",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random1.jpeg",
      alt: "Portrait of Joan Doe in natural lighting world-class",
      name: "Joan Doe",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random2.jpeg",
      alt: "Portrait of Sarah Chen in studio setting world-class",
      name: "Sarah Chen",
    },
    {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person1.jpeg",
        alt: "Portrait of Joanna Doe in urban setting professional",
    },
    {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person2.jpeg",
        alt: "Portrait of Joan Doe in natural lighting professional",
    }
  ];

  const css = `
  .swiper-hero211 {
    width: 450px;
    height: 500px;
    border-radius: 40px;
    box-shadow: 0 50px 100px -20px rgba(0,0,0,0.5);
  }

  .swiper-pagination-bullet {
    background-color: var(--primary);
    width: 12px;
    height: 12px;
    opacity: 0.3;
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
    box-shadow: 0 0 10px var(--primary);
  }
  `;

  return (
    <section className={cn("bg-background py-20 lg:py-40 font-sans border-b overflow-hidden group/hero", className)}>
      <style>{css}</style>
      <div className="container relative px-0 sm:px-8 max-w-[100rem]">
        
        {/* Narrative Narrative side */}
        <div className="relative z-20 mx-auto flex max-w-5xl flex-col items-center justify-center gap-12 px-6 lg:px-12 text-center text-pretty group/content">
             {/* Atmos Depth layer side */}
            <div className="absolute inset-x-0 top-0 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>

            <h1 className="text-center font-black lg:text-[9.5rem] tracking-tighter leading-[0.8] text-foreground drop-shadow-sm uppercase">
                We don&apos;t <span className="text-primary italic">believe</span> in talk we deliver <span className="text-secondary italic">Results</span>.
            </h1>
            <p className="mx-auto max-w-[50rem] mt-6 text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-x-4 border-primary/10 px-12 py-4">
                Elite results for high-status brands world-wide. 
                Necessitatibus odit eius world-class craft for professional status.
            </p>
        </div>

        {/* Unique "Dynamic Carousel Matrix" Visual side */}
        <div className="relative mt-24 flex h-[600px] items-center justify-center isolate">
          <Swiper
            loop={true}
            grabCursor={true}
            className="swiper-hero211 border-4 border-background"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            effect="creative"
            pagination={{
              clickable: true,
            }}
            creativeEffect={{
              prev: {
                shadow: true,
                origin: "left center",
                translate: ["-15%", 0, -500],
                rotate: [0, 60, 0],
              },
              next: {
                origin: "right center",
                translate: ["15%", 0, -500],
                rotate: [0, -60, 0],
              },
            }}
            modules={[EffectCreative, Pagination, Autoplay]}
          >
            {images.map((image, idx) => (
              <SwiperSlide key={idx}>
                <img
                  className="h-full w-full object-cover grayscale group-hover/hero:grayscale-0 transition-grayscale duration-1000"
                  src={image.src}
                  alt={image.alt}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Action Merit Matrix side */}
        <div className="relative z-20 mx-auto mt-16 flex w-fit justify-center group/button px-10">
          <Button size="lg" className="h-fit rounded-full bg-primary px-12 py-7 font-black text-xl text-primary-foreground shadow-2xl transition-transform hover:scale-105 active:scale-95 duration-500 uppercase tracking-widest leading-none">
            Get started elite
          </Button>

          {/* Unique "Hand-Drawn Callout Anchor" Annotation side */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-4 -right-60 h-1 hidden lg:block"
          >
            <p className="font-caveat text-3xl font-bold tracking-tight text-primary rotate-12 drop-shadow-sm">
              Try free tier elite now
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
                transition={{ duration: 1.5, delay: 1.5 }}
                d="M80.2759 1.95576C67.8687 20.6075 49.1102 55.0246 21.9767 39.1283C15.3299 35.2342 12.7124 29.0489 9.38472 22.4634C9.24096 22.1789 6.96955 15.0574 7.91833 15.4904C10.4589 16.65 25.535 23.253 15.8013 18.8782C14.7716 18.4154 8.31018 14.0924 7.25323 14.6265C4.37354 16.0816 2.6512 30.2469 1.58546 33.4898"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>
        </div>

        {/* Unique "Architectural Atmos" Marquee Background side */}
        <div className="absolute inset-x-0 bottom-0 pointer-events-none opacity-40 group-hover/hero:opacity-80 transition-opacity duration-1000">
          <SkiperUiMarquee />
        </div>
      </div>
    </section>
  );
};

export { Hero211 };

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
              "animate-marquee flex-row ![animation-duration:30s]": !vertical,
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
        transition: { delay: Math.random() * 3, ease: "easeOut", duration: 2 },
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
        "relative size-32 cursor-pointer overflow-hidden rounded-3xl border-2 border-primary/20 p-4",
        "bg-gradient-to-b from-primary/10 to-transparent",
      )}
    ></motion.div>
  );
}

export function SkiperUiMarquee() {
  return (
    <div className="mx-auto px-4 py-24 md:px-8 max-w-[120rem]">
      <div className="flex w-full flex-col items-center justify-center">
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div
              key={idx}
              className="flex w-full flex-col items-center justify-center"
            >
              <Marquee reverse={idx % 2 === 0} repeat={6}>
                {Array.from({ length: 10 }).map((_, idx) => (
                  <Card key={idx} />
                ))}
              </Marquee>
            </div>
          ))}
          <div className="absolute right-0 h-full w-[30rem] bg-gradient-to-r from-transparent to-background z-10" />
          <div className="absolute left-0 h-full w-[30rem] bg-gradient-to-l from-transparent to-background z-10" />
          <div className="absolute bottom-0 h-48 w-full bg-gradient-to-b from-transparent to-background z-10" />
        </div>
      </div>
    </div>
  );
}
```
