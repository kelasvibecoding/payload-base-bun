# Hero 219

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for tool-heavy platforms, pairing a centered typography block with a high-fidelity "Preserve-3D" text animation and a unique "Multi-Marquee" anchored by specialized vertical sliding logo components.
- **Use Case**: Best for integration hubs, SaaS ecosystems (e.g., "The only app you Need to Stay Productive"), or professional developer toolsets that want to emphasize "Productivity" and "Elite Integrations."
- **Visual Style**: Cinematic Tool-Matrix aesthetic. Features a centered layout Beginning with a prominent heading Using high-fidelity `preserve-3d` text-splitting Positioning each word with specialized `rotateX` entrance animations. The visual anchor is a unique "Infinite Scroll Matrix" of logos Using a specialized `SkiperUiMarquee` Using high-fidelity vertical `Marquee` transitions Utilizing categorical logo collections anchored by a specialized `box-shadow` depth to create a high-status visual focus. Matrix units utilize specialized absolute-positioned atmospheric masks (`bg-background blur-xl`) to create a unique world-class depth.
- **Interactivity**: High atmospheric engagement. Features specialized 3D typography entrance animations and high-fidelity marquee interactions for the logo grid to drive professional enrollment.

## Source Code

### `hero219.tsx`
```tsx
"use client";

import { motion } from "framer-motion";
import React from "react";

import { cn } from "@/lib/utils";

import { Particles } from "@/components/ui/particles";

const Hero219 = () => {
  return (
    <section className="bg-background py-20 lg:py-40 font-sans border-b overflow-hidden group/hero">
      <div className="container relative px-6 max-w-[100rem] flex flex-col items-center justify-center gap-12 text-center text-pretty isolate">
        
        {/* Narrative Narrative side */}
        <div className="flex flex-col items-center gap-10 group/content">
             {/* Atmos Depth layer side */}
            <div className="absolute inset-x-0 top-0 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>

            <p className="text-xl lg:text-3xl font-black uppercase tracking-[0.5em] text-primary drop-shadow-[0_0_8px_rgba(var(--primary),0.3)]">
                Bridging Elite Builders world-wide
            </p>
            <h1 className="relative z-20 max-w-[65rem] text-6xl font-black lg:text-[9.5rem] tracking-tighter leading-[0.8] text-foreground drop-shadow-sm uppercase">
                The only app elite teams Need to <br />
                <span
                    className="overflow-hidden block py-4"
                    style={{
                    transformStyle: "preserve-3d",
                    perspective: "1200px",
                    }}
                >
                    {"Stay Productive world-class".split(" ").map((word, i) => (
                    <motion.span
                        className="relative inline-block px-4"
                        key={i}
                        initial={{
                        opacity: 0,
                        y: "100%",
                        rotateX: "-45deg",
                        }}
                        animate={{
                        opacity: 1,
                        y: "0%",
                        rotateX: "0deg",
                        }}
                        transition={{
                        delay: i * 0.1 + 0.5,
                        duration: 1.2,
                        ease: [0.16, 1, 0.3, 1],
                        }}
                    >
                        {word === "Productive" ? (
                        <span className="text-primary italic">{word}</span>
                        ) : (
                        word
                        )}
                    </motion.span>
                    ))}
                </span>
            </h1>
        </div>

        {/* Unique "Atmospheric Matrix" Background side */}
        <Particles
          className="absolute inset-0 z-0 pointer-events-none opacity-20"
          quantity={600}
          ease={100}
          color="var(--primary)"
          refresh
        />

        {/* Unique "Multi-Marquee Logo Matrix" Visual side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 mt-16 flex items-center justify-center gap-10 group/matrix grayscale hover:grayscale-0 transition-grayscale duration-1000"
        >
          {/* specialized architectural marquee channels side */}
          <SkiperUiMarquee
            showCard={1}
            reverse={true}
            src={[
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nextjs-icon.svg",
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/react-icon.svg",
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vue-icon.svg",
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/typescript-icon.svg",
            ]}
          />
          <SkiperUiMarquee
            showCard={2}
            src={[
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-icon.svg",
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-icon.svg",
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/remix-icon.svg",
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vite-icon.svg",
            ]}
          />
          <SkiperUiMarquee
            showCard={3}
            reverse={true}
            src={[
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/github-icon.svg",
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/laravel-icon.svg",
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/gatsby-icon.svg",
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vscode-icon.svg",
            ]}
          />
          <SkiperUiMarquee
            showCard={2}
            src={[
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-icon.svg",
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-icon.svg",
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/notion-icon.svg",
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/spotify-icon.svg",
            ]}
          />
           <SkiperUiMarquee
            showCard={1}
            reverse={true}
            src={[
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/slack-icon.svg",
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/twitter-icon.svg",
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/google-icon.svg",
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/dropbox-icon.svg",
            ]}
          />
        </motion.div>

        {/* specialized architectural atmospheric masks side */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background via-background/80 to-transparent z-30" />
      </div>
    </section>
  );
};

export { Hero219 };

function Marquee({
  className,
  reverse,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: any) {
  return (
    <div
      {...props}
      className={cn(
        "group flex [gap:var(--gap)] overflow-hidden p-2 [--gap:2rem]",
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
            className={cn(
              "flex shrink-0 justify-around [gap:var(--gap)] ![animation-duration:20s] [animation-play-state:running] group-hover/hero:[animation-play-state:paused]",
              {
                "animate-marquee flex-row": !vertical,
                "animate-marquee-vertical flex-col": vertical,
                "[animation-direction:reverse]": reverse,
              },
            )}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

interface SkiperUiMarqueeProps {
  showCard: number;
  reverse?: boolean;
  className?: string;
  src: string[];
}

export function SkiperUiMarquee({
  showCard,
  reverse = false,
  className,
  src,
}: SkiperUiMarqueeProps) {
  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{
        height: showCard * 160,
      }}
    >
      <Marquee reverse={reverse} vertical={true}>
        {src.map((item, idx) => (
          <Card key={idx} src={item} />
        ))}
      </Marquee>
      <div className="absolute top-0 z-10 h-16 w-full bg-gradient-to-b from-background to-transparent" />
      <div className="absolute bottom-0 z-10 h-16 w-full bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}

function Card({ src }: { src?: string }) {
  return (
    <div
      className={cn(
        "relative flex size-32 items-center justify-center overflow-hidden rounded-[2.5rem] border-2 border-border/40 p-8 shadow-xl",
        "bg-background/50 backdrop-blur-xl transition-all duration-500",
        "hover:border-primary/40 hover:shadow-primary/5",
      )}
    >
      <img
        src={src || "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/notion-icon.svg"}
        alt="Elite tool logo fragment focus"
        className="size-16 object-contain"
      />
    </div>
  );
}
```
