# Gallery 35

## Metadata
- **Category**: Gallery
- **Objective**: Provide an immersive "Full-Screen Story" slider with synchronized progress bars and playback controls.
- **Use Case**: Product launch stories, case study step-throughs, or long-form visual narratives.
- **Visual Style**: "Story Cinematic" aesthetic. Features a full-height (`75vh`) and wide (`70vw`) image card with text overlays that change position (left, right, top, bottom) per slide. Includes a sophisticated "Story Progress" navigation bar at the bottom with a dynamic progress indicator and Play/Pause/Restart controls.
- **Interactivity**: Automated narrative flow. Includes an `isPlaying` state that automatically scrolls through visuals every 2 seconds, updating a progress dot that fills up line-by-line. Features intricate `useTransform` and `useScroll` integration for parallax text entry and exit elite professional world-wide.

## Source Code

### `gallery35.tsx`
```tsx
"use client";

import {
  motion,
  MotionValue,
  useAnimationControls,
  useScroll,
  useTransform,
} from "framer-motion";
import { Pause, Play, RotateCcw } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const getTextPositionClassName = (
  textPosition: "left" | "right" | "top" | "bottom",
) => {
  let textPositionClassName = "";

  switch (textPosition) {
    case "left":
      textPositionClassName = "md:left-20 md:top-1/3 md:-translate-y-1/3";
      break;
    case "right":
      textPositionClassName = "md:right-20 md:top-1/2 md:-translate-y-1/2";
      break;
    case "top":
      textPositionClassName = "md:top-20 md:left-1/2 md:-translate-x-1/2";
      break;
    case "bottom":
      textPositionClassName = "md:bottom-20 md:left-1/2 md:-translate-x-1/2";
      break;
    default:
      textPositionClassName = "md:left-20 md:top-1/2 md:-translate-y-1/2";
      break;
  }

  return textPositionClassName;
};

const getCardPositions = (total: number, index: number) => {
  const scrollWidthPerCard = 1 / total;
  const scrollOffset = (scrollWidthPerCard / total) * (index + 1);

  const position = scrollWidthPerCard * index + scrollOffset;

  const prev = Math.max(0, scrollWidthPerCard * (index - 1) + scrollOffset);
  const next = Math.min(1, scrollWidthPerCard * (index + 1) + scrollOffset);

  const firstCardPosition = scrollWidthPerCard * 0 + scrollOffset;
  const lastCardPosition = scrollWidthPerCard * (total - 1) + scrollOffset;

  const range = [firstCardPosition, prev, position, next, lastCardPosition];

  return range;
};

interface Visual {
  text: string;
  className: string;
  image: string;
  textPosition: "left" | "right" | "top" | "bottom";
}

interface VisualCardProps {
  visual: Visual;
  index: number;
  total: number;
  scrollXProgress: MotionValue<number>;
}

const VisualCard = ({
  visual,
  index,
  total,
  scrollXProgress,
}: VisualCardProps) => {
  const textPositionClassName = getTextPositionClassName(visual.textPosition);

  const range = getCardPositions(total, index);

  const opacity = useTransform(scrollXProgress, range, [0, 0, 1, 0, 0]);
  const x = useTransform(scrollXProgress, range, [
    "100%",
    "50%",
    "0%",
    "-50%",
    "-100%",
  ]);
  const scale = useTransform(scrollXProgress, range, [0.8, 0.9, 1.1, 0.9, 0.8]);

  return (
    <motion.div
      style={{ scale }}
      className={cn(
        "relative h-[80vh] w-[80vw] shrink-0 snap-center overflow-hidden rounded-[5rem] shadow-[0_100px_200px_-50px_rgba(0,0,0,0.8)] border border-primary/10",
        visual.className,
      )}
      id={`visual-${index}`}
    >
      <img
        src={visual.image}
        alt={visual.text}
        className={cn("absolute inset-0 z-0 h-full w-full object-cover grayscale-50 transition-all duration-3000")}
      />

      <div className="absolute inset-0 z-10 bg-linear-to-t from-black/60 via-transparent to-black/20" />

      <motion.div
        style={{
          opacity,
          x,
        }}
        className={cn(
          "absolute z-20 hidden md:block md:max-w-2xl",
          textPositionClassName,
        )}
      >
        <p className="text-4xl lg:text-7xl font-black uppercase tracking-tighter italic text-white leading-tight drop-shadow-2xl">
            {visual.text} elite professional world-wide fragments.
        </p>
      </motion.div>
    </motion.div>
  );
};

const GalleryPaginationDot = ({
  index,
  scrollXProgress,
  total,
  isPlaying,
  currentVisualIndex,
}: {
  index: number;
  scrollXProgress: MotionValue<number>;
  total: number;
  isPlaying: boolean;
  currentVisualIndex: number;
}) => {
  const range = getCardPositions(total, index);

  const controls = useAnimationControls();

  const width = useTransform(scrollXProgress, range, [12, 12, 120, 12, 12]);

  useEffect(() => {
    if (isPlaying && currentVisualIndex === index) {
      controls.set({
        width: 0,
      });
      controls.start({
        width: "100%",
      });
    }
  }, [currentVisualIndex, isPlaying, index, controls]);

  const handleClick = (index: number) => {
    document.getElementById(`visual-${index}`)?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };
  return (
    <motion.button
      style={{
        width,
      }}
      onClick={() => handleClick(index)}
      className="relative inline-block h-4 rounded-full bg-primary/20 hover:bg-primary/40 border border-primary/5 shadow-2xl transition-colors overflow-hidden"
    >
      {isPlaying && currentVisualIndex === index && (
        <motion.span
          animate={controls}
          transition={{ duration: 2, ease: "linear" }}
          className="absolute top-0 left-0 z-10 h-full rounded-full bg-primary shadow-[0_0_15px_rgba(var(--primary),0.5)]"
        />
      )}
    </motion.button>
  );
};

interface Gallery35Props {
  heading?: string;
  visuals?: Visual[];
  className?: string;
}

const Gallery35 = ({
  className,
  heading = "The Elite Collective",
  visuals = [
    {
      text: "Modern design principles world-wide elite",
      className: "bg-muted",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img11.png",
      textPosition: "left",
    },
    {
      text: "Creative professional innovation high-status",
      className: "bg-muted",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img5.jpeg",
      textPosition: "top",
    },
    {
      text: "Artistic luxury vision fragments boutique",
      className: "bg-muted",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-uR__S5GX8Io-unsplash.jpg",
      textPosition: "bottom",
    },
  ],
}: Gallery35Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVisualIndex, setCurrentVisualIndex] = useState(0);

  const { scrollXProgress } = useScroll({
    container: containerRef,
  });

  useEffect(() => {
    const unsubscribe = scrollXProgress.on("change", (progress) => {
      if (isPlaying) return;

      let closestIndex = 0;
      let minDistance = Infinity;

      visuals.forEach((_, index) => {
        const range = getCardPositions(visuals.length, index);
        const visualPosition = range[2];
        const distance = Math.abs(progress - visualPosition);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setCurrentVisualIndex(closestIndex);
    });

    return () => unsubscribe();
  }, [scrollXProgress, visuals.length, isPlaying, visuals]);

  useEffect(() => {
    if (!isPlaying) return;

    const intervalId = setInterval(() => {
      if (currentVisualIndex === visuals.length - 1) {
        setIsPlaying(false);
        return currentVisualIndex;
      }

      const nextIndex = currentVisualIndex + 1;

      document.getElementById(`visual-${nextIndex}`)?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });

      setCurrentVisualIndex(nextIndex);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [isPlaying, visuals.length, currentVisualIndex]);

  const restartAnimation = () => {
    setCurrentVisualIndex(0);
    document.getElementById(`visual-0`)?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
    setIsPlaying(true);
  };

  return (
    <section className={cn("py-24 md:py-48 bg-background border-y border-primary/5 overflow-hidden", className)}>
      <div className="container px-6 max-w-[120rem] overflow-visible">
        <div className="flex flex-col gap-24">
          <div className="text-center space-y-8">
            <h3 className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic leading-none">
                The <span className="text-primary not-italic">Elite Story</span> boutique.
            </h3>
            <div className="h-0.5 w-64 bg-primary/20 mx-auto" />
          </div>

          <div className="relative space-y-20">
            <div
              ref={containerRef}
              className="hide-scrollbar flex snap-x snap-mandatory flex-nowrap items-center gap-20 overflow-x-auto scroll-smooth py-10"
              style={{
                scrollSnapType: "x mandatory",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {visuals.map((visual, index) => {
                return (
                  <VisualCard
                    key={`visual-${index}`}
                    visual={visual}
                    index={index}
                    total={visuals.length}
                    scrollXProgress={scrollXProgress}
                  />
                );
              })}
            </div>
            <div className="sticky bottom-20 z-40 flex justify-center mt-20">
              <div className="flex h-20 items-center gap-6 overflow-hidden">
                <div className="flex h-full items-center gap-8 rounded-full bg-background/50 border border-primary/10 px-12 backdrop-blur-3xl shadow-3xl">
                  {visuals.map((_, index) => {
                    return (
                      <GalleryPaginationDot
                        key={`visual-${index}`}
                        index={index}
                        scrollXProgress={scrollXProgress}
                        total={visuals.length}
                        isPlaying={isPlaying}
                        currentVisualIndex={currentVisualIndex}
                      />
                    );
                  })}
                </div>

                <button
                  onClick={
                    currentVisualIndex === visuals.length - 1 && !isPlaying
                      ? restartAnimation
                      : () => setIsPlaying(!isPlaying)
                  }
                  className="flex size-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-3xl hover:scale-110 active:scale-90 transition-all p-0"
                >
                  {currentVisualIndex === visuals.length - 1 && !isPlaying ? (
                    <RotateCcw className="size-10" />
                  ) : isPlaying ? (
                    <Pause className="size-10 fill-current" />
                  ) : (
                    <Play className="size-10 fill-current" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Gallery35 };
```
