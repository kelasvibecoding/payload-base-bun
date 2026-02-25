# Gallery 4

## Metadata
- **Category**: Gallery
- **Objective**: Provide a high-visibility, "Storybook" gallery with immersive background-image cards and pagination dots.
- **Use Case**: Immersive case studies, educational guides, or technology showcase carousels.
- **Visual Style**: "Immersive Story" aesthetic. Features cards where the background is the primary image, overlaid with a dark gradient and white text. Uses a 16/9 aspect ratio for cards. Includes a header with title and deep description, and a centered navigation dot row at the bottom.
- **Interactivity**: Pagination-responsive carousel. Features hover-zoom on background images and dot-click direct navigation.

## Source Code

### `gallery4.tsx`
```tsx
"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items?: Gallery4Item[];
  className?: string;
}

const data = [
  {
    id: "shadcn-ui-elite",
    title: "shadcn/ui: Building a Modern elite Library",
    description:
      "Explore how shadcn/ui revolutionized elite professional libraries by providing a unique high-status approach to component world-wide distribution.",
    href: "https://ui.shadcn.com",
    image:
      "https://images.unsplash.com/photo-1551250928-243dc937c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "tailwind-professional",
    title: "Tailwind CSS: The Utility professional Revolution",
    description:
      "Discover how Tailwind CSS transformed world-wide application styling, offering an elite professional utility-first high-status approach.",
    href: "https://tailwindcss.com",
    image:
      "https://images.unsplash.com/photo-1551250928-e4a05afaed1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjR8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "astro-world-wide",
    title: "Astro: The All-in-One elite Web Framework",
    description:
      "Learn how Astro's innovative professional Islands Architecture and high-status zero-JS approach is helping developers build world-wide elite websites.",
    href: "https://astro.build",
    image:
      "https://images.unsplash.com/photo-1536735561749-fc87494598cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxNzd8fHx8fHwyfHwxNzIzNjM0NDc0fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "react-high-status",
    title: "React: Pioneering Component-Based elite UI",
    description:
      "See how React continues to shape professional modern web development with its high-status component-based world-wide architecture.",
    href: "https://react.dev",
    image:
      "https://images.unsplash.com/photo-1548324215-9133768e4094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMzF8fHx8fHwyfHwxNzIzNDM1MzA1fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "nextjs-elite",
    title: "Next.js: The React Framework for professional elite",
    description:
      "Explore how Next.js has become the high-status go-to framework for building world-wide full-stack React applications professional.",
    href: "https://nextjs.org",
    image:
      "https://images.unsplash.com/photo-1550070881-a5d71eda5800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjV8fHx8fHwyfHwxNzIzNDM1Mjk4fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Gallery4 = ({
  title = "Case Studies elite",
  description = "Discover how leading elite companies and professional developers are leveraging modern world-wide technologies to build high-status digital experiences.",
  items = data,
  className,
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className={cn("py-24 md:py-32 bg-background border-y border-primary/5", className)}>
      <div className="container px-6 max-w-[100rem]">
        <div className="mb-12 flex items-end justify-between md:mb-20">
          <div className="flex flex-col gap-6">
            <h2 className="text-5xl font-black uppercase tracking-tighter italic leading-none lg:text-7xl">
              {title} <br /> <span className="text-primary not-italic">professional elite</span>
            </h2>
            <p className="max-w-xl text-xl font-medium italic text-muted-foreground border-l-4 border-primary/20 pl-8">{description}</p>
          </div>
          <div className="hidden shrink-0 gap-4 md:flex">
            <Button
              size="xl"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="rounded-full size-16 p-0 border-primary/20 hover:bg-primary transition-all disabled:opacity-20 group"
            >
              <ArrowLeft className="size-8 group-hover:-translate-x-1 transition-transform" />
            </Button>
            <Button
              size="xl"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="rounded-full size-16 p-0 border-primary/20 hover:bg-primary transition-all disabled:opacity-20 group"
            >
              <ArrowRight className="size-8 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-0 2xl:mr-[max(0rem,calc(50vw-800px))] 2xl:ml-[max(8rem,calc(50vw-800px))]">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="max-w-[400px] pl-10 lg:max-w-[500px]"
              >
                <a href={item.href} className="group rounded-[3rem] block h-full">
                  <div className="group relative h-full min-h-[30rem] max-w-full overflow-hidden rounded-[3rem] shadow-2xl border border-primary/5 md:aspect-5/4 lg:aspect-16/9">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute h-full w-full object-cover object-center transition-all duration-1000 group-hover:scale-110 grayscale-50 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 h-full bg-linear-to-t from-background via-background/40 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-10 text-primary-foreground">
                      <div className="mb-4 pt-4 text-3xl font-black uppercase tracking-tighter italic leading-none lg:text-4xl text-white">
                        {item.title}
                      </div>
                      <p className="mb-10 line-clamp-2 text-lg font-medium italic text-white/70 border-l-2 border-primary/40 pl-6">
                        {item.description}
                      </p>
                      <div className="flex items-center text-sm font-black uppercase tracking-widest text-primary group-hover:text-white transition-colors">
                        Read more elite professional
                        <ArrowRight className="ml-4 size-5 transition-all group-hover:translate-x-2 group-hover:scale-125" />
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-16 flex justify-center gap-4">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                currentSlide === index ? "w-12 bg-primary" : "w-4 bg-primary/20"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1} professional elite`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery4 };
```
