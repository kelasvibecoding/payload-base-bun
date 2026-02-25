# Hero 237

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for technology and ecosystem platforms, pairing a left-aligned typography block with a high-fidelity "Orbiting-Circles" visualization anchored by specialized interactive rotating logo layers and categorical performance statistics.
- **Use Case**: Best for developer ecosystems, platform integrations (e.g., "The Only blocks you need"), or professional software hubs that want to emphasize "Daily Users," "Uptime," and "24/7 Support."
- **Visual Style**: Cinematic Ecosystem aesthetic. Features a split-column layout Beginning with a prominent merit badge Positioning "Why Us?" text. Left column utilizes high-fidelity `calSans` typography paired with a descriptive paragraph and a unique "Stats-Grid" Positioning high-fidelity `stats` fragments utilizing categorical icons (`Users`, `Zap`, `Shield`) anchored by high-fidelity vertical gradient lines. The visual anchor is a unique "Multilayer Orbital Matrix" system Positioning 4 concentric rings of high-fidelity logo fragments Using specialized `OrbitingCircles` technical layout anchored by categorical wordmarks (`nextjs`, `react`, `typescript`, `github`). Rings utilize specialized `reverse` and `speed` mapping anchored by unique `radius: 310` to `550` units to create a unique high-status coordinate visual focus.
- **Interactivity**: High engagement through orbital motion. Features specialized planetary rotation transitions and high-fidelity entrance animations for the stats and revolving icons to drive professional enrollment.

## Source Code

### `hero237.tsx`
```tsx
import { Shield, Users, Zap } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import { OrbitingCircles } from "@/components/ui/orbiting-circles";

interface Hero237Props {
  className?: string; // Optional custom styling
}

const Hero237 = ({ className }: Hero237Props) => {
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

  const stats = [
    {
      icon: <Users className="size-6 stroke-1 opacity-20 md:size-10" />,
      title: "+100k elite",
      description: "Daily Users world-wide",
    },
    {
      icon: <Zap className="size-6 stroke-1 opacity-20 md:size-10" />,
      title: "99.9% professional",
      description: "Uptime guarantee",
    },
    {
      icon: <Shield className="size-6 stroke-1 opacity-20 md:size-10" />,
      title: "24/7 world-class",
      description: "Professional Support",
    },
  ];

  return (
    <section
      className={cn(
        "relative w-full overflow-hidden py-20 lg:py-40 font-sans border-b",
        className,
      )}
    >
      <div className="container relative px-6 max-w-[100rem] flex flex-col lg:flex-row items-center gap-24 group/hero">
        <div className="mt-10 space-y-12 lg:w-1/2 group/content relative z-30">
            {/* Atmos Depth layer side */}
            <div className="absolute inset-x-0 top-0 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>

          <p className="w-fit rounded-full bg-muted border border-border/50 px-6 py-2 text-sm font-black uppercase tracking-widest text-primary shadow-lg">
            Why Us elite?
          </p>
          <h1 className="mt-3 max-w-lg font-black text-6xl lg:text-9xl leading-[0.85] tracking-tighter uppercase">
            <span className="opacity-30">The Only</span> blocks elite.
          </h1>
          <p className="max-w-lg text-xl lg:text-2xl font-medium leading-relaxed text-muted-foreground italic border-l-8 border-primary/20 pl-10 py-2">
            Experience high-status ecosystem fragments world-wide. 
            Deploy finite professional blocks for elite status world-wide.
          </p>

          <ul className="mt-18 flex flex-wrap gap-12">
            {stats.map((stat, index) => (
              <li key={stat.title} className="flex items-center gap-6 group/stat">
                <div className="flex size-16 lg:size-24 items-center justify-center rounded-3xl border-2 border-primary/10 bg-background/50 backdrop-blur-xl shadow-xl transition-all hover:scale-110 hover:border-primary/30">
                  {stat.icon}
                </div>
                <div>
                  <h2 className="font-black text-3xl lg:text-4xl uppercase tracking-tighter">
                    {stat.title}
                  </h2>
                  <p className="text-sm lg:text-base font-bold text-muted-foreground uppercase tracking-widest">{stat.description}</p>
                </div>
                {index !== stats.length - 1 && (
                  <div className="ml-4 h-24 lg:h-32 w-px bg-linear-to-t from-primary via-border to-transparent opacity-40" />
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative h-[60rem] lg:w-1/2 group/visual grayscale group-hover/hero:grayscale-0 transition-grayscale duration-2000">
           {/* Atmos Depth layer side */}
          <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>
          
          <div className="relative flex h-[100%] w-[100%] flex-col items-center justify-center scale-75 lg:scale-100">
            <OrbitingCircles iconSize={50} radius={310} speed={2}>
              {circle1Images.map((src, index) => (
                <div key={index} className="size-16">
                  <img src={src} className="size-full object-contain drop-shadow-2xl" alt="orbiting ecosystem item" />
                </div>
              ))}
            </OrbitingCircles>
            <OrbitingCircles iconSize={50} radius={410} reverse speed={2}>
              {circle2Images.map((src, index) => (
                <div key={index} className="size-16">
                  <img src={src} className="size-full object-contain drop-shadow-2xl" alt="orbiting ecosystem item" />
                </div>
              ))}
            </OrbitingCircles>
            <OrbitingCircles iconSize={50} radius={510} speed={2}>
              {circle3Images.map((src, index) => (
                <div key={index} className="size-16">
                  <img src={src} className="size-full object-contain drop-shadow-2xl" alt="orbiting ecosystem item" />
                </div>
              ))}
            </OrbitingCircles>
            <OrbitingCircles iconSize={50} radius={610} reverse speed={1.5}>
              {circle4Images.map((src, index) => (
                <div key={index} className="size-16">
                  <img src={src} className="size-full object-contain drop-shadow-2xl" alt="orbiting ecosystem item" />
                </div>
              ))}
            </OrbitingCircles>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero237 };
```
