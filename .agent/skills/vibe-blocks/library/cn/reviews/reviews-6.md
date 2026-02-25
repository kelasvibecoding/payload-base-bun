# Reviews 6

## Metadata
- **Category**: Reviews
- **Objective**: Provide a large-format, immersive testimonial carousel with integrated product purchase links.
- **Use Case**: Brand landing pages or high-intent product pages where the specific item used by the reviewer is a primary selling point.
- **Visual Style**: High-contrast, brand-primary background (Indigo/Primary). Features a split-card carousel architecture with a large-scale lifestyle image on one side and a product "Mini-Card" overlay (Image + Price + Link) on the other. Includes typographic large-scale quotes, star ratings with high-visibility yellow fills, and a centered pagination system.
- **Interactivity**: Fully responsive `Carousel` with standard Nav controls and a custom "Dot" indicator system. The Product Card overlay provides instant context and a call-to-action path for interested users.

## Description
Reviews 6 is the "Brand Storyteller" component. It elevates reviews from simple text to a full lifestyle experience. By pairing a high-resolution user image with the specific product they are discussing, it bridges the gap between social proof and direct conversion. The bold primary-colored background and large-scale typography make it a high-impact section for homepages or hero-adjacent testimonial blocks.

## Source Code

```tsx
"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import {
  Price,
  type PriceType,
  PriceValue,
} from "@/components/price";
import { Rating } from "@/components/rating";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Product = {
  name: string;
  image: string;
  price: PriceType;
  link: string;
};

type ReviewType = {
  image: string;
  rate: number;
  comment: string;
  author: string;
  product: Product;
};

interface Reviews6Props {
  title: string;
  overline?: string;
  reviews: ReviewType[];
  className?: string;
}

const REVIEWS: ReviewType[] = [
  {
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/electronics/Serene-Listening-2.png",
    rate: 5,
    comment:
      '"The engineering on these components is flawless. Every interface feels intentional, high-performance, and perfectly optimized for our production stack."',
    author: "Sarah Montgomery",
    product: {
      name: "Pro Infrastructure Module",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/electronics/Modern-White-Headphones-1.png",
      price: {
        regular: 599.0,
        currency: "USD",
      },
      link: "#",
    },
  },
  {
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/electronics/Woman-Smiling-Indoors-2.png",
    rate: 5,
    comment:
      '"Absolute game-changer for our team. The attention to type scale and spacing in these UI primitives is arguably the best we have ever used."',
    author: "Sofia L.",
    product: {
      name: "Enterprise Architecture Kit",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/electronics/Sleek-Smartphone-Close-Up-1.png",
      price: {
        regular: 1599.0,
        currency: "USD",
      },
      link: "#",
    },
  },
];

const Reviews6 = ({
  reviews = REVIEWS,
  title = "Expert Consensus",
  overline = "The Industry Perspective",
  className,
}: Reviews6Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onButtonClick = (index: number) => {
    if (!api) return;
    api?.scrollTo(index);
  };

  useEffect(() => {
    if (!api) return;
    const updateCurrent = (api: CarouselApi) => setCurrent(api?.selectedScrollSnap() ?? 0);
    const updateScrollSnaps = (api: CarouselApi) => setScrollSnaps(api?.scrollSnapList() ?? []);
    
    updateCurrent(api);
    updateScrollSnaps(api);

    api
      .on("reInit", updateCurrent)
      .on("select", updateCurrent)
      .on("resize", updateScrollSnaps);

    return () => {
      api
        .off("reInit", updateCurrent)
        .off("select", updateCurrent)
        .off("resize", updateScrollSnaps);
    };
  }, [api]);

  return (
    <section className={cn("bg-primary py-24 md:py-32 font-sans overflow-hidden", className)}>
      <div className="container space-y-12 lg:space-y-16">
        <div className="space-y-4 text-center">
          {overline && (
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary-foreground/60">{overline}</p>
          )}
          <h2 className="text-4xl font-bold tracking-tighter text-primary-foreground lg:text-7xl">
            {title}
          </h2>
        </div>
        
        <div className="space-y-10">
          <Carousel setApi={setApi} className="group relative">
            <CarouselContent>
              {reviews.map((review, index) => (
                <CarouselItem key={index}>
                  <ReviewCard {...review} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="opacity-0 transition-all duration-300 group-hover:opacity-100 max-lg:hidden">
              <CarouselPrevious className="left-10 size-16 border-white/20 bg-white/10 text-white backdrop-blur-xl" />
              <CarouselNext className="right-10 size-16 border-white/20 bg-white/10 text-white backdrop-blur-xl" />
            </div>
          </Carousel>

          <div className="flex items-center justify-center gap-3">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => onButtonClick(index)}
                className={cn(
                  "h-1 px-4 rounded-full transition-all duration-500",
                  current === index ? "bg-primary-foreground w-12" : "bg-primary-foreground/20 w-8 hover:bg-primary-foreground/40"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ReviewCard = ({
  image,
  product,
  rate,
  comment,
  author,
}: ReviewType) => {
  return (
    <Card className="h-full border-none p-0 overflow-hidden bg-white/5 backdrop-blur-3xl rounded-[3rem]">
      <CardContent className="h-full p-0 lg:grid lg:grid-cols-2">
        <div className="relative group/image">
          <div className="relative size-full overflow-hidden aspect-[4/5] lg:aspect-square">
            <img
            src={image}
            alt={product.name}
            className="block size-full object-cover grayscale-[20%] transition-transform duration-1000 group-hover/image:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
          </div>
          <div className="absolute bottom-10 left-10 right-10 md:bottom-12 md:left-12">
            <ProductCard {...product} />
          </div>
        </div>
        <div className="flex px-10 py-16 lg:px-24 lg:py-20 text-white">
          <div className="m-auto w-full space-y-10">
            <div className="w-fit max-lg:mx-auto">
              <Rating
                rate={rate}
                className="[&_svg]:size-6 text-yellow-400 fill-yellow-400 stroke-yellow-400"
              />
            </div>
            <p className="text-2xl font-bold leading-tight max-lg:text-center lg:text-4xl tracking-tight italic">
              {comment}
            </p>
            <div className="space-y-1 max-lg:text-center border-l-2 border-primary-foreground/20 pl-6">
                <p className="text-lg font-bold tracking-tight">
                {author}
                </p>
                <p className="text-xs font-bold uppercase tracking-widest text-primary-foreground/40">Verified Industry Partner</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ProductCard = ({ image, name, price }: Product) => {
  return (
    <div className="flex items-center gap-4 border border-white/20 bg-white/10 backdrop-blur-3xl p-3 pr-10 rounded-3xl shadow-2xl transition-all hover:bg-white/20">
      <div className="shrink-0">
        <div className="size-20 overflow-hidden rounded-2xl shadow-lg ring-1 ring-white/20">
          <img
            src={image}
            alt={name}
            className="block size-full object-cover"
          />
        </div>
      </div>
      <div className="space-y-1">
        <h3 className="text-sm font-bold text-white tracking-tight">{name}</h3>
        <Price className="text-xs font-bold text-white/80">
          <PriceValue price={price.regular} currency={price.currency} />
        </Price>
      </div>
    </div>
  );
};

export { Reviews6 };
```
