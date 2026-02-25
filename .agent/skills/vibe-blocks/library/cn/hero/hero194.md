# Hero 194

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for AI-powered geography tools, pairing a split-column layout with a unique "Vertical-Scroll" project preview and a professional dark UI.
- **Use Case**: Best for land surveying tools, AI photo enhancement platforms (e.g., "Generative topologies"), or specialized engineering software that want to emphasize "Intricate details" and "Stunning images."
- **Visual Style**: Cinematic Engineering aesthetic. Features a split-column layout starting with an high-impact typography block Utilizing a prominent dark `bg-black` background anchored by a specialized `bg-linear-to-r` center-fade overlay. The typography section is anchored by a high-impact heading block paired with a functional "Download Now" CTA Utilizing a prominent `Command` icon. Visual anchor is a unique "Infinite Scroll Grid" on the right Featuring 4 columns of vertical-scrolling team/project fragments Utilizing `AutoScroll` and `Carousel` to drive categorical narrative storytelling. Matrix units utilize specialized `rotate-[7deg]` coordinate positioning to create an architectural blueprint visual context.
- **Interactivity**: High engagement through automation. Features automated `AutoScroll` vertical motion and high-fidelity project preview layering to drive professional trust and enrollment.

## Source Code

### `hero194.tsx`
```tsx
"use client";
import AutoScroll from "embla-carousel-auto-scroll";
import { Command } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const teamImages = [
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/jeremy-bishop-iEjCQtcsVPY-unsplash.jpg",
    alt: "professional project detail 1",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/carles-rabada-f7UprkNqi08-unsplash.jpg",
    alt: "world-class survey visual 1",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/ivan-bandura-hqnUYXsN5oY-unsplash.jpg",
    alt: "high-status topology preview",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/kevin-charit-1fL2Q1JcbNc-unsplash.jpg",
    alt: "elite developer environment",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/sam-wermut-FiUuNWxnb3k-unsplash.jpg",
    alt: "professional project detail 2",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/ines-alvarez-fdez-VjRc6HDXJ5s-unsplash.jpg",
    alt: "world-class survey visual 2",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/ivan-bandura-Kj2tYAl4HZg-unsplash.jpg",
    alt: "high-status topology preview 2",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/vasilis-karkalas-qOaeVSKyhhE-unsplash.jpg",
    alt: "elite developer environment 2",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/pat-whelen-gWfpmH0H2bM-unsplash.jpg",
    alt: "professional project detail 3",
  },
];

const offsets = [0, 2, 4, 6];
const rotatedTeamImagesArray = offsets.map((offset) =>
  teamImages.slice(offset).concat(teamImages.slice(0, offset)),
);

const TeamCarousel = () => {
  return (
    <div className="w-full">
      <div className="relative -top-12 -right-[20%] hidden gap-6 lg:flex group/carousel">
        {rotatedTeamImagesArray.map((rotatedTeamImages, index) => (
          <Carousel
            opts={{
              loop: true,
              align: "center",
              axis: "y",
            }}
            plugins={[
              AutoScroll({
                speed: 0.8,
                direction: index % 2 ? "backward" : "forward",
              }),
            ]}
            orientation="vertical"
            className="rotate-[7deg] transition-opacity duration-700 opacity-60 group-hover/carousel:opacity-100"
            key={`carousel-1-team-${index}`}
          >
            <CarouselContent className="h-full max-h-[50rem] w-fit">
              {rotatedTeamImages.map((t, i) => (
                <CarouselItem key={`team-image-${i}`} className="-mt-4">
                  <div className="h-[12rem] w-[10rem] overflow-hidden rounded-[1.5rem] border-4 border-background bg-muted shadow-xl transition-transform hover:scale-105 duration-500">
                    <img
                      src={t.src}
                      alt={t.alt}
                      className="size-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        ))}
      </div>

      <div className="flex flex-col gap-6 pb-12 lg:hidden">
        {[...Array(2)].map((_, i) => (
          <Carousel
            opts={{
              loop: true,
              align: "center",
            }}
            plugins={[
              AutoScroll({
                speed: 0.5,
                direction: i % 2 ? "backward" : "forward",
              }),
            ]}
            key={`carousel-2-team-${i}`}
          >
            <CarouselContent>
              {teamImages.map((t, i) => (
                <CarouselItem
                  key={`team-image-${i}`}
                  className="h-[10rem] w-full max-w-[9rem] pl-4"
                >
                  <div className="size-full overflow-hidden rounded-[1.5rem] border-4 border-background shadow-xl">
                    <img
                      src={t.src}
                      alt={t.alt}
                      className="block size-full object-cover object-center"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        ))}
      </div>
    </div>
  );
};

interface Hero194Props {
  className?: string;
}

const Hero194 = ({ className }: Hero194Props) => {
  return (
    <section className={cn("bg-background py-20 lg:py-40 font-sans border-b overflow-hidden", className)}>
      <div className="container px-6 max-w-[1536px]">
        <div className="dark relative overflow-hidden rounded-[4rem] bg-black shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/10 group/card">
          <div className="grid h-full w-full grid-cols-1 lg:max-h-[800px] lg:grid-cols-2 isolate">
            
            {/* Engineering Narrative side */}
            <div className="flex w-full flex-col justify-center gap-10 py-20 pr-10 pl-16 lg:pl-24 lg:py-0">
              <div className="flex flex-col gap-8">
                <h1 className="text-5xl font-black lg:text-7xl xl:text-8xl tracking-tighter leading-[0.9] text-white uppercase italic">
                    Generative <span className="text-primary">topologies</span> with world-class AI surveying.
                </h1>
                <p className="max-w-[35rem] text-lg lg:text-xl font-medium leading-relaxed text-muted-foreground/80 border-l-4 border-primary/20 pl-8 py-2">
                    Enhance your professional surveyor photos with cutting-edge high-status 
                    technology that brings out vibrant world-class colors world-wide.
                </p>
              </div>

              <div className="flex gap-4">
                <Button size="lg" className="h-fit rounded-full bg-white px-10 py-6 font-black text-lg text-black hover:bg-white/90 shadow-2xl transition-transform active:scale-95 duration-500 uppercase tracking-widest leading-none">
                    <Command className="size-5 mr-3" strokeWidth={3} />
                    Download Now
                </Button>
              </div>
            </div>

            {/* Unique "Atmospheric Depth" separation layer side */}
            <div className="absolute left-1/2 z-10 hidden h-full w-[600px] bg-linear-to-r from-black via-black/95 to-transparent lg:block pointer-events-none"></div>
            
            {/* The Mosaic Matrix side */}
            <div className="relative group/mosaic isolate">
                <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>
                <TeamCarousel />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero194 };
```
