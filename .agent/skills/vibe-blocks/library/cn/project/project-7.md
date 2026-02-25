# Project 7

## Metadata
- **Category**: Project
- **Objective**: Deliver a comprehensive, long-form editorial case study with integrated carousel galleries.
- **Use Case**: Architectural firms, massive construction projects, or deep-dive product development stories.
- **Visual Style**: Completely static (no Framer Motion) favoring reliable, performant HTML/CSS rendering. Features a massive parallax-inspired `bg-cover` header. Uses standard `prose` classes for highly readable long-form text. Interspersed with a dynamic image carousel and mixed-aspect grids (`21:9`, square grids).
- **Interactivity**: Employs the Shadcn UI `Carousel` component for inline image browsing without leaving the flow of the article.

## Description
Project 7 is a robust, narrative-driven case study block. It eschews scroll animations in favor of pure performance and readability, relying on the `prose` typography plugin to format extensive textual content perfectly. The inclusion of a Carousel allows for dense visual storytelling (like progressing through construction days) without consuming excessive vertical space.

## Source Code

```tsx
"use client";

import { cn } from "@/lib/utils";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = {
  hero: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw12.jpeg",
  carousel: [
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw17.jpeg",

    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw7.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw8.jpeg",
  ],
  dayOne: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw12.jpeg",
  dayTwo: [
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw1.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw2.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw3.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw4.jpeg",
  ],
};

interface Project7Props {
  className?: string;
}

const Project7 = ({ className }: Project7Props) => {
  return (
    <section className={cn("", className)}>
      <section className="relative flex h-[700px] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${images.hero})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
          <p className="mb-6 text-sm tracking-[0.2em] text-white/80 uppercase">
            Modern Architecture Studio
          </p>
          <h1 className="mb-6 text-4xl leading-tight font-semibold md:text-6xl lg:text-7xl">
            The Meridian
            <br />
            Tower Project
          </h1>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-white/80 md:text-xl">
            A groundbreaking 47-story residential tower that redefines urban
            living through innovative design, sustainable materials, and
            thoughtful integration with the city's architectural heritage.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-8 md:py-12">
        <div className="mb-12">
          <h2 className="mb-8 text-2xl font-light text-foreground md:text-3xl">
            Design Philosophy & Vision
          </h2>
          <div className="prose max-w-none text-muted-foreground prose-gray">
            <p>
              The Meridian Tower represents a new chapter in contemporary
              residential design. Our approach centered on creating a vertical
              neighborhood that fosters community while providing residents with
              unparalleled privacy and luxury.
            </p>
            <p>
              Every detail, from the building's distinctive angular facade to
              its integrated green spaces, was meticulously planned to enhance
              both the resident experience and the surrounding urban fabric. The
              tower serves as a landmark that respects its context while boldly
              looking toward the future.
            </p>
            <p>
              Through careful material selection and innovative structural
              solutions, we've created not just a building, but a living,
              breathing extension of the city itself.
            </p>
          </div>
        </div>

        <div className="relative">
          <Carousel className="w-full">
            <CarouselContent>
              {images.carousel.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-[5/3] overflow-hidden">
                    <img
                      src={image}
                      alt={`Project process ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-8 md:py-12">
        <div className="mb-12">
          <h2 className="mb-8 text-2xl font-light text-foreground md:text-3xl">
            Architectural Innovation
          </h2>
          <div className="prose max-w-none text-muted-foreground prose-gray">
            <p>
              The tower's most striking feature is its crystalline facade
              system—a double-skin envelope that maximizes natural light while
              providing superior energy performance. Each unit benefits from
              floor-to-ceiling windows that frame panoramic city views.
            </p>
            <p>
              Our structural innovation includes a hybrid concrete-steel system
              that reduces material usage by 30% while enabling the tower's
              distinctive cantilevers and terraced setbacks. These architectural
              gestures create outdoor spaces at multiple levels, bringing the
              ground plane experience to the sky.
            </p>
            <p>
              Sustainability is woven into every aspect of the design, from
              rainwater harvesting systems to integrated photovoltaic panels
              that generate clean energy for common areas.
            </p>
          </div>
        </div>

        <div className="aspect-[16/9] overflow-hidden md:aspect-[21/9]">
          <img
            src={images.dayOne}
            alt="Meridian Tower main facade"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-8 md:py-12">
        <div className="mb-12">
          <h2 className="mb-8 text-2xl font-light text-foreground md:text-3xl">
            Construction & Materiality
          </h2>
          <div className="prose max-w-none text-muted-foreground prose-gray">
            <p>
              The construction process showcased advanced prefabrication
              techniques, with facade elements manufactured off-site to exacting
              specifications. This approach reduced construction time by 40% and
              minimized disruption to the surrounding neighborhood.
            </p>
            <p>
              Material selection focused on durability and timeless
              aesthetics—charcoal-toned concrete, bronze-finished aluminum, and
              high-performance glass create a palette that shifts throughout the
              day, revealing different moods and textures as light conditions
              change.
            </p>
            <p>
              Interior common spaces feature locally sourced stone and reclaimed
              wood, connecting residents to the region's natural heritage while
              maintaining a sophisticated, contemporary atmosphere.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {images.dayTwo.map((image, index) => (
            <div key={index} className="aspect-square overflow-hidden">
              <img
                src={image}
                alt={`Construction detail ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-8 md:py-12">
        <h2 className="mb-8 text-2xl font-light text-foreground md:text-3xl">
          Project Impact & Recognition
        </h2>
        <div className="prose max-w-none text-muted-foreground prose-gray">
          <p>
            The Meridian Tower has been recognized with multiple design awards,
            including the International Architecture Prize and the Sustainable
            Design Excellence Award. The project demonstrates how thoughtful
            architecture can enhance urban density while creating meaningful
            spaces for human connection.
          </p>
          <p>
            Beyond its architectural merits, the tower has become a catalyst for
            neighborhood revitalization, inspiring additional investment in
            public spaces and cultural amenities that benefit the entire
            community.
          </p>
          <p>
            This project represents the future of residential high-rise
            design—where innovation, sustainability, and human-centered thinking
            converge to create environments that truly enhance the urban
            experience.
          </p>
        </div>
      </section>
    </section>
  );
};

export { Project7 };
```
