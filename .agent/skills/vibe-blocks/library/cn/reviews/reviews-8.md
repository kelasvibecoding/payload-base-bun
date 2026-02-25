# Reviews 8

## Metadata
- **Category**: Reviews
- **Objective**: Provide a polymorphically balanced review carousel with both text-based testimonials and image-heavy user reviews.
- **Use Case**: Art, design, or high-end decor platforms where visual imagery and descriptive poetic feedback carry equal weight.
- **Visual Style**: Minimalist architectural "Gallery" aesthetic. Uses a flexible carousel layout where text cards (thin-bordered, typography-focused) and image cards (full-bleed photography, minimalist captions) alternate to create visual rhythm. Features circular "Icon-LG" navigation buttons and a custom mobile dot indicator that tracks carousel progress via width animation.
- **Interactivity**: Fluid `Carousel` implementation with start-alignment, custom API integration for desktop navigation, and a reactive mobile pagination system using `scrollSnapList` to ensure one-to-one mapping of indices.

## Description
Reviews 8 is the "Modern Gallery" component. It rejects the standard list format in favor of a curated exhibition of user feedback. By allowing for both `text` and `image` based review types to coexist in the same carousel, it creates a rich, textured browsing experience. The design adheres strictly to the "Minimalist Clean" theme profile, utilizing pure white backgrounds, thin borders, and generous tracking in its typography to convey a sense of premium authenticity.

## Source Code

```tsx
"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { Rating } from "@/components/rating";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

type ReviewType = {
  rate: number;
  title: string;
  comment?: string;
  verifiedBuyer?: boolean;
  author: string;
  image?: string;
  type?: "text" | "image";
};

interface Reviews8Props {
  reviews: ReviewType[];
  title: string;
  className?: string;
}

const REVIEWS: ReviewType[] = [
  {
    rate: 5,
    title: "Minimalist, but full of character.",
    author: "Joanne E.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/Fashionable-Woman-in-Monochrome-Attire-1.png",
    type: "image",
  },
  {
    rate: 4,
    title: "Thoughtful design you can feel.",
    comment: "Each architectural primitive has a quiet elegance to it. You can tell a lot of care went into the craftsmanship. Functional and beautifully made.",
    author: "Sarah M.",
    verifiedBuyer: true,
    type: "text",
  },
];

const Reviews8 = ({
  reviews = REVIEWS,
  title = "Expert Evaluations",
  className,
}: Reviews8Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [current, setCurrent] = useState(0);

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
    <section className={cn("overflow-hidden py-24 md:py-32 bg-background font-sans", className)}>
      <div className="container space-y-12">
        <div className="flex items-end justify-between gap-6">
          <div className="flex-1">
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl text-foreground">
              {title}
            </h2>
          </div>
          <div className="flex gap-4 max-md:hidden pb-1">
            <Button
              onClick={() => api?.scrollPrev()}
              variant="outline"
              className="rounded-full size-14 border-border/80 text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm"
              size="icon"
            >
              <ChevronLeft className="size-6" />
            </Button>
            <Button
              onClick={() => api?.scrollNext()}
              variant="outline"
              className="rounded-full size-14 border-border/80 text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm"
              size="icon"
            >
              <ChevronRight className="size-6" />
            </Button>
          </div>
        </div>

        <div className="space-y-12">
          <Carousel
            opts={{ align: "start", loop: false }}
            setApi={setApi}
            className="[&>div]:overflow-visible"
          >
            <CarouselContent className="-ml-6">
              {reviews.map(({ type, ...review }, idx) => (
                <CarouselItem
                  className="pl-6 basis-[85%] sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                  key={idx}
                >
                  {type === "image" ? (
                    <ImageReviewCard {...review} />
                  ) : (
                    <TextReviewCard {...review} />
                  )}
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          
          {/* Reactive Mobile Pagination */}
          <div className="flex items-center justify-center gap-3 md:hidden">
            {scrollSnaps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => onButtonClick(idx)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-500",
                  current === idx ? "bg-primary w-10" : "bg-muted w-4 hover:bg-muted-foreground/30"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TextReviewCard = ({
  rate,
  title,
  comment,
  author,
  verifiedBuyer,
}: Omit<ReviewType, "type">) => {
  return (
    <Card className="h-full rounded-2xl border border-primary/20 bg-primary/5 p-8 transition-all hover:bg-primary/10 hover:translate-y-[-4px]">
      <CardContent className="space-y-6 p-0 h-full flex flex-col">
        <Rating className="[&_svg]:size-3.5 text-primary" rate={rate} />
        <CardTitle className="text-xl font-bold leading-tight tracking-tight text-foreground">{title}</CardTitle>
        <CardDescription className="text-sm font-medium leading-relaxed text-muted-foreground italic flex-1">
          &ldquo;{comment}&rdquo;
        </CardDescription>
        <div className="pt-6 mt-auto border-t border-primary/10">
          <p className="text-xs font-bold tracking-tight text-foreground uppercase">{author}</p>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 mt-1">
            {verifiedBuyer ? "Verified Expert" : "Community Member"}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

const ImageReviewCard = ({
  image,
  title,
  rate,
  author,
  verifiedBuyer,
}: Omit<ReviewType, "type">) => {
  return (
    <Card className="h-full border-0 bg-transparent p-0 shadow-none group">
      <CardContent className="space-y-6 p-0">
        <AspectRatio ratio={1} className="overflow-hidden rounded-3xl border border-border shadow-md">
          <img
            src={image}
            alt={title}
            className="block size-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
          />
        </AspectRatio>
        <div className="space-y-4 px-2">
            <Rating className="[&_svg]:size-3.5 text-primary" rate={rate} />
            <CardTitle className="text-xl font-bold leading-tight tracking-tight text-foreground group-hover:text-primary transition-colors">{title}</CardTitle>
            <div className="pt-2">
                <p className="text-xs font-bold tracking-tight text-foreground uppercase">{author}</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 mt-1">
                    {verifiedBuyer ? "Verified Expert" : "Community Member"}
                </p>
            </div>
        </div>
      </CardContent>
    </Card>
  );
};

export { Reviews8 };
```
