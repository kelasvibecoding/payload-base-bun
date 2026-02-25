# Logos 11

## Metadata
- **Category**: Logo Carousel
- **Objective**: Create a highly stylized, maximalist, dual-direction scrolling logo carousel augmented with intricate geometric background patterns.
- **Use Case**: High-end design agencies, premium brand hero footers, or creative portfolios where the UI components themselves serve as a demonstration of technical and design capabilities.
- **Visual Style**: Incorporates custom `BgPattern` functional components using linear CSS gradients (`linear-gradient(135deg...)`) and absolute positioned "screws" or dots. Consists of two independent carousels stacked vertically. Heavily relies on strict borders (`border-t-0 border-r-0 border-border`) to construct an exposed skeleton/wireframe look. One carousel aligns `start`, the other `end`.
- **Interactivity**: Dual auto-scrolling carousels via Embla. Complex decorative hover/layout effects.

## Source Code

```tsx
"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import React from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const bgPattern = {
  backgroundImage:
    "linear-gradient(135deg, var(--muted) 25%, transparent 25.5%, transparent 50%, var(--muted) 50.5%, var(--muted) 75%, transparent 75.5%, transparent)",
  backgroundSize: "10px 10px",
};

interface Logos11Props {
  className?: string;
}

const Logos11 = ({ className }: Logos11Props) => {
  const logos = [
    {
      id: "logo-1",
      description: "Logo 1",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-2",
      fill: true,
      description: "Logo 2",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/arc-white.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-3",
      description: "Logo 3",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-4",
      description: "Logo 4",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-5",
      description: "Logo 5",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-6",
      description: "Logo 6",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-5.svg",
      className: "h-5 w-auto",
    },
    {
      id: "logo-7",
      description: "Logo 7",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-6.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-8",
      description: "Logo 8",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-7.svg",
      className: "h-7 w-auto",
    },
  ];

  return (
    <section
      className={cn("relative grid w-screen overflow-hidden py-32", className)}
    >
      <div className="relative z-10 container h-full items-center justify-center gap-6">
        <div className="relative flex h-20 w-full items-center justify-center border border-x-0">
          <h1 className="text-3xl font-medium tracking-tighter uppercase md:text-4xl">
            Supported by the Finest
          </h1>
          <BgPattern />
        </div>
        <div className="w-full py-20">
          <Carousel
            opts={{ loop: true, align: "start" }}
            plugins={[AutoScroll({ playOnInit: true })]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className={cn(
                    "relative flex h-35 basis-1/2 justify-center border border-t-0 border-r-0 border-border pl-0 sm:basis-1/4 md:basis-1/3 lg:basis-1/6",
                    logo.fill && "bg-orange-500",
                  )}
                >
                  <div className="flex flex-col items-center justify-center lg:mx-10">
                    <img
                      src={logo.image}
                      alt={logo.description}
                      className={logo.className}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <Carousel
            opts={{ loop: true, align: "end" }}
            plugins={[AutoScroll({ playOnInit: true })]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className={cn(
                    "relative flex h-35 basis-1/2 justify-center border border-t-0 border-r-0 border-b-0 border-border pl-0 sm:basis-1/4 md:basis-1/3 lg:basis-1/6",
                    logo.fill && "bg-orange-500",
                  )}
                >
                  <div className="flex flex-col items-center justify-center lg:mx-10">
                    <img
                      src={logo.image}
                      alt={logo.description}
                      className={logo.className}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="relative flex h-20 w-full items-center justify-center border border-x-0">
          <Button className="h-12 rounded-none !px-8">Get Your Now</Button>
          <Button
            variant="ghost"
            className="flex h-12 items-center gap-3 rounded-none !px-8"
          >
            <PlayIcon />
            How it works
          </Button>
          <BgPattern sideLines={false} />
        </div>
      </div>
    </section>
  );
};

export { Logos11 };

const PlayIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="15"
      height="18"
      viewBox="0 0 15 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1.11523 3.94458C1.11523 2.36225 2.86573 1.40657 4.19675 2.26222L12.4982 7.59889C13.7229 8.38617 13.7229 10.1763 12.4982 10.9636L4.19675 16.3003C2.86573 17.1559 1.11523 16.2003 1.11523 14.6179V3.94458Z"
        fill="black"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const BgPattern = ({ sideLines = true }: { sideLines?: boolean }) => {
  return (
    <>
      {/* bg pattern left */}
      <div
        className="absolute top-1/2 left-0 z-20 size-20 -translate-x-full -translate-y-1/2 border border-r-0"
        style={bgPattern}
      >
        <span className="absolute -top-1 -right-1 z-20 size-2 bg-foreground" />
        <span className="absolute -right-1 -bottom-1 z-20 size-2 bg-foreground" />
        <span className="absolute -bottom-1 -left-1 z-20 size-2 bg-foreground" />
        <span className="absolute -top-1 -left-1 z-20 size-2 bg-foreground" />
      </div>

      {/* bg pattern right */}
      <div
        className="absolute top-1/2 right-0 z-20 size-20 translate-x-full -translate-y-1/2 border border-l-0"
        style={bgPattern}
      >
        <span className="absolute -top-1 -right-1 z-20 size-2 bg-foreground" />
        <span className="absolute -right-1 -bottom-1 z-20 size-2 bg-foreground" />
        <span className="absolute -bottom-1 -left-1 z-20 size-2 bg-foreground" />
        <span className="absolute -top-1 -left-1 z-20 size-2 bg-foreground" />
      </div>

      {/* bg Lines left */}
      {sideLines && (
        <div className="absolute left-0 z-10 h-[200vh] w-px border-l" />
      )}
      {sideLines && (
        <div className="absolute -left-20 z-10 h-[200vh] w-px border-l" />
      )}

      {/* bg Lines right */}
      {sideLines && (
        <div className="absolute right-0 z-10 h-[200vh] w-px border-l" />
      )}
      {sideLines && (
        <div className="absolute -right-20 z-10 h-[200vh] w-px border-l" />
      )}
    </>
  );
};
```
