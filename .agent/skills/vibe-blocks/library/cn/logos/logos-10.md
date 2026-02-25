# Logos 10

## Metadata
- **Category**: Logo Carousel
- **Objective**: Detail a structured, wireframe-styled continuous carousel of partner logos.
- **Use Case**: Brutalist, modern, or high-tech aesthetics where rigid lines and explicitly numbered components enforce a structured, technical identity.
- **Visual Style**: Features explicit right-side borders (`border-r-0 border-border`) bounding each `CarouselItem` to create a moving grid effect. A pill-shaped interactive accent ("Checkout Our Users") acts as a visual subheader. Every cell includes a numeric index indicator (`01`, `02`) placed absolutely in the top left, alongside strong gradient masks (`w-32 bg-linear-to-r`) on the viewport edges.
- **Interactivity**: Auto-scrolling Embla carousel execution.

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

interface Logos10Props {
  className?: string;
}

const Logos10 = ({ className }: Logos10Props) => {
  const logos = [
    {
      id: "logo-1",
      description: "Logo 1",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg",
      className: "h-7 w-auto dark:invert",
    },
    {
      id: "logo-2",
      description: "Logo 2",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg",
      className: "h-7 w-auto dark:invert",
    },
    {
      id: "logo-3",
      description: "Logo 3",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg",
      className: "h-7 w-auto dark:invert",
    },
    {
      id: "logo-4",
      description: "Logo 4",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg",
      className: "h-7 w-auto dark:invert",
    },
    {
      id: "logo-5",
      description: "Logo 5",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg",
      className: "h-7 w-auto dark:invert",
    },
    {
      id: "logo-6",
      description: "Logo 6",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-5.svg",
      className: "h-5 w-auto dark:invert",
    },
    {
      id: "logo-7",
      description: "Logo 7",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-6.svg",
      className: "h-7 w-auto dark:invert",
    },
    {
      id: "logo-8",
      description: "Logo 8",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-7.svg",
      className: "h-7 w-auto dark:invert",
    },
  ];

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <h1 className="my-6 max-w-4xl text-4xl font-medium tracking-tighter text-foreground md:text-6xl">
          Discover how our tools have unlocked new{" "}
          <span className="text-muted-foreground/40">
            levels of creativity{" "}
          </span>
          and efficiency
        </h1>

        <div className="flex w-fit items-center justify-center gap-4 rounded-full bg-muted px-4 py-2 tracking-tight transition-all ease-in-out hover:gap-6">
          <span className="inline-block size-3 rounded-full bg-foreground" />
          <p className="text-foreground">Checkout Our Users</p>
        </div>

        <div className="relative mx-auto flex items-center justify-center pt-8">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true })]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo, index) => (
                <CarouselItem
                  key={logo.id}
                  className="relative flex h-35 basis-1/2 justify-center border border-r-0 border-border pl-0 sm:basis-1/4 md:basis-1/3 lg:basis-1/6"
                >
                  <div className="flex flex-col items-center justify-center lg:mx-10">
                    <p className="absolute top-2 left-2 text-xs tracking-tighter">
                      {(index + 1).toString().padStart(2, "0")}
                    </p>
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
          <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-background to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-background to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export { Logos10 };
```
