# Logos 9

## Metadata
- **Category**: Logo Carousel / Testimonials
- **Objective**: Combine an auto-scrolling logo marquee with an auto-scrolling testimonial carousel to create a dense "social proof" block.
- **Use Case**: High-converting landing pages where brand authority (the logos) and user validation (the quotes) are both required sequentially.
- **Visual Style**: Dual-layer architecture. The top section is a `Carousel` of logos featuring linear gradient margin fades. A `Separator` line distinctively divides the layout. The bottom section is a second `Carousel` showcasing structured testimonial text, with right-sided borders (`border-r`) creating clean vertical delineation between slides.
- **Interactivity**: Employs two independent, infinitely auto-scrolling carousels utilizing the `embla-carousel-auto-scroll` plugin.

## Source Code

```tsx
"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import { cn } from "@/lib/utils";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";

interface Logos9Props {
  className?: string;
}

const Logos9 = ({ className }: Logos9Props) => {
  const logos = [
    {
      id: "logo-1",
      description: "Logo 1",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-2",
      description: "Logo 2",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg",
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
  const testimonials = [
    {
      quote:
        "AI search capabilities have revolutionized our team's knowledge sharing. A true productivity game changer.",
      name: "Mercury, Head of Finance",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg",
    },
    {
      quote:
        "Polished components and great docs have saved us countless hours while maintaining consistency.",
      name: "Perplexity, Lead Machine Learning",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-7.svg",
    },
    {
      quote:
        "Perfect customization options - we've created a unique look while keeping battle-tested reliability.",
      name: "Retool, Product Manager",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-5.svg",
    },
  ];
  return (
    <section className={cn("py-32", className)}>
      <div className="container flex flex-col items-center text-center">
        <h1 className="my-6 text-lg font-semibold tracking-tight text-foreground">
          The world's best product teams using our blocks
        </h1>
      </div>

      <div className="relative mx-auto flex items-center justify-center pt-8 lg:max-w-5xl">
        <Carousel
          opts={{ loop: true }}
          plugins={[AutoScroll({ playOnInit: true })]}
        >
          <CarouselContent className="ml-0">
            {logos.map((logo) => (
              <CarouselItem
                key={logo.id}
                className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
              >
                <div className="flex shrink-0 items-center justify-center lg:mx-10">
                  <div>
                    <img
                      src={logo.image}
                      alt={logo.description}
                      className={logo.className}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-y-0 left-0 w-12 bg-linear-to-r from-background to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-12 bg-linear-to-l from-background to-transparent"></div>
      </div>
      <Separator className="mx-auto my-15 max-w-5xl" />

      <div>
        <Carousel opts={{ loop: true }} className="mx-auto w-full max-w-6xl">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div
                  className={cn(
                    "relativ w-full border-r border-border px-12 text-center md:px-8 md:text-left",
                    index == 0 && "lg:border-l",
                  )}
                  key={index}
                >
                  <h5 className="mt-5 mb-14 line-clamp-3 text-lg tracking-tight text-muted-foreground md:mb-28">
                    {testimonial.quote}
                  </h5>
                  <div className="mt-auto">
                    <p className="text-lg font-semibold tracking-tight text-foreground">
                      {testimonial.name}
                    </p>
                    <img
                      className="mx-auto my-5 w-40 md:mx-0"
                      alt="Company logo"
                      src={testimonial.image}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export { Logos9 };
```
