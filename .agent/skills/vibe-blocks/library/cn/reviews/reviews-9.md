# Reviews 9

## Metadata
- **Category**: Reviews
- **Objective**: Provide a premium, horizontal-card review carousel with integrated lifestyle product photography.
- **Use Case**: Interior design, high-end furniture, or architectural services where the aesthetic context is as important as the feedback text.
- **Visual Style**: Sophisticated "Gallery" aesthetic utilizing a wide-format horizontal card layout. Each card features a split design with a 1/3 product image column (rounded edges, high-contrast) and a 2/3 deep-content column featuring star ratings, large-scale serif quotes, and author metadata with synchronized date formatting.
- **Interactivity**: Fully responsive `Carousel` with high-fidelity "Glassmorphic" navigation controls (Blur-heavy background, oversized arrows) and an automated dot indicator system for mobile interactions.

## Description
Reviews 9 is the "Luxury Showcase" component. It treats each user review as a miniature architectural feature. By prioritizing the horizontal layout, it provides ample space for longer, more descriptive comments while simultaneously showcasing the product in a high-fidelity lifestyle shot. The use of the "Primary/5" background tint and glassmorphic navigation arrows creates an elite, premium feel that aligns with the "Nordic Frost" or "Organic & Natural" theme profiles.

## Source Code

```tsx
"use client";

import { Minus } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { Rating } from "@/components/rating";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type ReviewType = {
  rate: number;
  comment: string;
  author: string;
  date: Date;
  image: {
    src: string;
    alt: string;
  };
};

interface Reviews9Props {
  reviews: ReviewType[];
  title: string;
  className?: string;
}

const REVIEWS: ReviewType[] = [
  {
    rate: 5,
    comment: "This sculptural component adds warm character and elite performance to our production interfaces.",
    author: "Emma Thompson",
    date: new Date(),
    image: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/furniture/Modern-Artistic-Lamp-1.png",
      alt: "Review Product",
    },
  },
  {
    rate: 5,
    comment: "The minimalist architecture feels luxurious, comfortable, and perfect for high-traffic UX states.",
    author: "Emma Thompson",
    date: new Date(),
    image: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/furniture/Modern-Minimalist-Sofa-1.png",
      alt: "Review Product",
    },
  },
];

const Reviews9 = ({
  reviews = REVIEWS,
  title = "Expert Reviews",
  className,
}: Reviews9Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onButtonClick = (index: number) => api?.scrollTo(index);

  useEffect(() => {
    if (!api) return;
    const updateCurrent = (api: CarouselApi) => setCurrent(api?.selectedScrollSnap() ?? 0);
    const updateScrollSnaps = (api: CarouselApi) => setScrollSnaps(api?.scrollSnapList() ?? []);
    
    updateCurrent(api);
    updateScrollSnaps(api);

    api.on("reInit", updateCurrent).on("select", updateCurrent).on("resize", updateScrollSnaps);

    return () => {
      api.off("reInit", updateCurrent).off("select", updateCurrent).off("resize", updateScrollSnaps);
    };
  }, [api]);

  return (
    <section className={cn("py-24 md:py-32 bg-background font-sans", className)}>
      <div className="container space-y-12">
        <h2 className="text-4xl font-bold tracking-tight text-foreground lg:text-6xl border-b border-border pb-8">
          {title}
        </h2>
        <Carousel setApi={setApi} className="group overflow-visible">
          <CarouselContent className="-ml-6">
            {reviews.map((review, index) => (
              <CarouselItem className="pl-6 sm:basis-1/2 lg:basis-1/3" key={index}>
                <ReviewCard {...review} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="max-xl:hidden">
            <CarouselNext className="right-[-2rem] size-16 bg-background/80 backdrop-blur-2xl border border-border shadow-2xl hover:bg-primary hover:text-white transition-all [&>svg]:size-6" />
            <CarouselPrevious className="left-[-2rem] size-16 bg-background/80 backdrop-blur-2xl border border-border shadow-2xl hover:bg-primary hover:text-white transition-all [&>svg]:size-6" />
          </div>
        </Carousel>
        
        {/* Mobile Indicator Dots */}
        <div className="-mt-4 flex items-center justify-center xl:hidden gap-3">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => onButtonClick(index)}
              className={cn(
                "h-1 px-4 rounded-full transition-all duration-500",
                current === index ? "bg-primary w-10" : "bg-muted w-6 hover:bg-muted-foreground/30"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ReviewCard = ({
  rate,
  comment,
  author,
  date,
  image,
}: ReviewType) => {
  const formatDate = (d: Date) => {
    return `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${String(d.getFullYear()).slice(-2)}`;
  };

  return (
    <Card className="h-full overflow-hidden border border-border bg-primary/5 hover:bg-primary/10 transition-colors shadow-none rounded-3xl">
      <CardContent className="flex h-full p-0 flex-col sm:flex-row xl:flex-row">
        <div className="flex-1 space-y-8 p-10">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Rating className="[&_svg]:size-4 text-primary" rate={rate} />
              <p className="font-bold tabular-nums text-foreground opacity-60">{rate.toFixed(2)}</p>
            </div>
            <p className="text-2xl font-bold leading-tight text-foreground group-hover:text-primary transition-colors tracking-tight italic">
                &ldquo;{comment}&rdquo;
            </p>
          </div>
          <div className="flex items-baseline gap-3 pt-4 border-t border-primary/10">
            <p className="text-xs font-bold uppercase tracking-widest text-foreground">
              {author}
            </p>
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">
              <Minus className="size-3" />
              <p>{formatDate(date)}</p>
            </div>
          </div>
        </div>
        <div className="shrink-0 basis-44 relative group/image">
            <div className="h-full overflow-hidden aspect-[4/5] sm:aspect-auto">
                <img
                src={image.src}
                alt={image.alt}
                className="block size-full object-cover transition-transform duration-1000 group-hover/image:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />
            </div>
        </div>
      </CardContent>
    </Card>
  );
};

export { Reviews9 };
```
