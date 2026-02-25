# Integration 8

## Metadata
- **Category**: High-Density Showcase
- **Objective**: Create a "wall of logos" effect using multiple rows of high-speed marquees for maximum social proof.
- **Use Case**: Best for large SaaS landing pages or multi-platform tools where the shear volume of integrations is a core selling point.
- **Visual Style**: Kinetic, "infinite room" style. Features 4 distinct rows of marquees. Rows 1 and 3 scroll forward, while rows 2 and 4 scroll in reverse (`reverse` prop). Each pill has a `muted` background and rounded-full corners for a soft modern look. Utilizes background-to-transparent gradients at the edges to fade pills in and out of the viewport.
- **Interactivity**: Managed by the `Marquee` component from Magic UI. Supports `pauseOnHover` for individual interaction and custom scrolling duration (`[--duration:20s]`). 

## Source Code

### `integration8.tsx`
```tsx
"use client";

import React from "react";

import { cn } from "@/lib/utils";

import { Marquee } from "@/components/magicui/marquee";

interface Integration8Props {
  className?: string;
}

const Integration8 = ({ className }: Integration8Props) => {
  const logos = [
    {
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/slack-icon.svg",
      name: "Slack",
      className: " ",
    },
    {
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/notion-icon.svg",
      name: "Notion",
      className: " ",
    },
    {
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/github-icon.svg",
      name: "Github",
      className: " ",
    },
    {
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/google-icon.svg",
      name: "Google",
      className: " ",
    },
    {
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nike-icon.svg",
      name: "Nike",
      className: " ",
    },
    {
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/sketch-icon.svg",
      name: "Sketch",
      className: " ",
    },
    {
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma-icon.svg",
      name: "Figma",
      className: " ",
    },
  ];

  return (
    <section className={cn("py-32", className)}>
      <div className="container pt-32">
        <h1 className="text-center text-5xl font-medium tracking-tight md:text-7xl">
          Integrated with fav Apps
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-center tracking-tight text-muted-foreground/80 md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt Lorem ipsum dolor sit amet.
        </p>

        <div className="relative mt-12">
          <Marquee pauseOnHover className="[--duration:20s]">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-4 rounded-full bg-muted px-5 py-2"
              >
                <img
                  src={logo.image}
                  alt={logo.name}
                  className={cn("size-5", logo?.className)}
                />
                <p className="text-lg">{logo.name}</p>
              </div>
            ))}
          </Marquee>
          <Marquee pauseOnHover reverse className="[--duration:20s]">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-4 rounded-full bg-muted px-5 py-2"
              >
                <img
                  src={logo.image}
                  alt={logo.name}
                  className={cn("size-5", logo?.className)}
                />
                <p className="text-lg">{logo.name}</p>
              </div>
            ))}
          </Marquee>
          <Marquee pauseOnHover className="[--duration:20s]">
            {[...logos].reverse().map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-4 rounded-full bg-muted px-5 py-2"
              >
                <img
                  src={logo.image}
                  alt={logo.name}
                  className={cn("size-5", logo?.className)}
                />
                <p className="text-lg">{logo.name}</p>
              </div>
            ))}
          </Marquee>
          <Marquee pauseOnHover reverse className="[--duration:20s]">
            {[...logos].reverse().map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-4 rounded-full bg-muted px-5 py-2"
              >
                <img
                  src={logo.image}
                  alt={logo.name}
                  className={cn("size-5", logo?.className)}
                />
                <p className="text-lg">{logo.name}</p>
              </div>
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-36 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-36 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </section>
  );
};

export { Integration8 };
```
