# Integration 6

## Metadata
- **Category**: Action Section
- **Objective**: Drive users toward a component or integration library using a high-density, interactive dark-themed layout.
- **Use Case**: Best used as a secondary hero or a "What's next" section on developer tool landing pages.
- **Visual Style**: Premium dark mode aesthetic (`dark` class applied to container). Features a sophisticated `secondary` variant button that contains an internal, self-cycling `Autoplay` carousel of partner logos within its own label. Separated by thin lines containing a slow-moving `AutoScroll` logo marquee.
- **Interactivity**: Dual-layer motion. The CTA button cycles small icons every 2000ms. Below the headline, a continuous auto-scrolling strip of logos moves at a fixed speed (`speed: 0.5`) across the full width of the container. 

## Source Code

### `integration6.tsx`
```tsx
"use client";
import AutoScroll from "embla-carousel-auto-scroll";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";

const BUTTON_LOGOS = [
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-1.svg", alt: "" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-3.svg", alt: "" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-4.svg", alt: "" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-5.svg", alt: "" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-6.svg", alt: "" },
];

const LOGOS = [
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-1.svg", alt: "" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-2.svg", alt: "" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-3.svg", alt: "" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-4.svg", alt: "" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-5.svg", alt: "" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-6.svg", alt: "" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-7.svg", alt: "" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-8.svg", alt: "" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-9.svg", alt: "" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-10.svg", alt: "" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-11.svg", alt: "" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-13.svg", alt: "" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-14.svg", alt: "" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-15.svg", alt: "" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-16.svg", alt: "" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-17.svg", alt: "" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-18.svg", alt: "" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-8.svg", alt: "" },
];

interface Integration6Props {
  className?: string;
}

const Integration6 = ({ className }: Integration6Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="dark flex flex-col gap-10 overflow-hidden rounded-xl bg-background py-4 md:py-10">
          <div className="flex w-full flex-col justify-between gap-5 px-10 py-5 lg:flex-row lg:items-end">
            <div className="flex-1">
              <div className="flex w-full max-w-[32rem] flex-col gap-5">
                <h2 className="text-[2rem] leading-none font-bold tracking-tight text-foreground md:text-[2.75rem] lg:text-5xl">
                  Build Beautiful Interfaces Fast
                </h2>
                <p className="leading-[1.4] text-muted-foreground">
                  Start designing smarter today with reusable UI blocks that
                  save time, boost consistency, and wow users.
                </p>
              </div>
            </div>
            <div className="lg:self-end">
              <Button
                asChild
                className="h-fit w-full justify-between gap-4 rounded-full p-2.5 pr-5 shadow-[0_0_0_4px_#363636] transition-shadow hover:shadow-[0_0_0_4px_#4b4b4b] sm:w-fit sm:gap-28"
                variant="secondary"
              >
                <a href="#">
                  <div className="flex items-center gap-2.5">
                    <Carousel
                      plugins={[
                        Autoplay({
                          delay: 2000,
                        }),
                      ]}
                      className="size-8 shrink-0 overflow-hidden rounded-full border border-white/20 bg-black/50"
                    >
                      <CarouselContent className="ml-0 size-7.5">
                        {BUTTON_LOGOS.map((logo, index) => (
                          <CarouselItem
                            key={index}
                            className="flex size-7.5 overflow-hidden rounded-full p-0"
                          >
                            <img
                              src={logo.src}
                              alt={logo.alt}
                              className="m-auto block size-4.5 object-contain object-center"
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                    </Carousel>
                    <div>View All Components</div>
                  </div>
                  <ArrowRight />
                </a>
              </Button>
            </div>
          </div>
          <Separator />
          <Carousel
            opts={{
              loop: true,
              watchDrag: false,
              container: "nav",
            }}
            plugins={[
              AutoScroll({
                speed: 0.5,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {LOGOS.map((logo, index) => (
                <CarouselItem key={index} className="h-8 basis-20 pl-12">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="block size-full object-contain object-center"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <Separator />
        </div>
      </div>
    </section>
  );
};

export { Integration6 };
```
