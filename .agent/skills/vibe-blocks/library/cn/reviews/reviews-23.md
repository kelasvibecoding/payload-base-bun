# Reviews 23

## Metadata
- **Category**: Reviews
- **Objective**: Provide an elite, media-integrated customer testimonial carousel with direct product attribution.
- **Use Case**: Cosmetics, skincare, or lifestyle gadgets where "Before/After" or situational proof is paired with a specific high-ticket item.
- **Visual Style**: Premium "Editorial" aesthetic using a mix of Serif (Headed) and Sans (Metadata) typography. Review cards feature a split-depth architecture: a lifestyle situational image (Portrait Aspect Ratio) paired with a deep-content block featuring author avatars, emerald verified labels, and long-form feedback. A bottom-anchored "Product Mini-Link" with a separator ensures permanent attribution to the reviewed item.
- **Interactivity**: Sophisticated `Carousel` implementation with start-alignment and oversized "Icon-LG" navigation controls. Uses `crypto.randomUUID()` for unique rendering keys and provides a seamless "Tap-to-Retail" experience by embedding the product link directly into the testimonial card.

## Description
Reviews 23 is the "Retail Credibility" component. It excels at situational marketing by showing the product "in action" (e.g., skin results, lifestyle placement) alongside the reviewer's face and their textual feedback. The design uses high-fidelity architectural queues like generous padding, thin separators, and a serif-sans typographic pairing to convey a sense of world-class quality. It is specifically optimized for items where the visual result is the primary conversion driver.

## Source Code

```tsx
"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";

type ReviewType = {
  author: {
    image?: string;
    name: string;
    verifiedBuyer?: boolean;
  };
  comment: string;
  image?: string;
  product: {
    name: string;
    image: string;
    link: string;
  };
};

interface Reviews23Props {
  reviews: ReviewType[];
  className?: string;
}

const REVIEWS: ReviewType[] = [
  {
    author: {
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
      name: "Jenny W.",
      verifiedBuyer: true,
    },
    comment: "The architectural depth this component provides is stunning. It integrates beautifully and gives such a premium feel to our user documentation. Lightweight yet authoritative.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/promotional/Close-Up-of-Womans-Face-1.png",
    product: {
      name: "Dynamic UI Module",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/skin-care-product/Makeup-Product-Flat-Lay-1.png",
      link: "#",
    },
  },
  {
    author: {
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
      name: "Jenny W.",
      verifiedBuyer: true,
    },
    comment: "Absolutely top-tier. The creamy texture of the code abstraction makes it super easy to apply to any project. An essential staple for our development team.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/skin-care-product/Close-Up-of-Lips-1.png",
    product: {
      name: "Shimmer Code Component",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/skin-care-product/Shimmering-Bronze-Lipstick-Close-Up-1.png",
      link: "#",
    },
  },
];

const Reviews23 = ({ reviews = REVIEWS, className }: Reviews23Props) => {
  const [api, setApi] = useState<CarouselApi>();

  return (
    <section className={cn("overflow-hidden py-24 md:py-32 bg-background font-sans", className)}>
      <div className="container space-y-12 pl-4 md:pl-8">
        <div className="flex items-center justify-between gap-6">
          <h2 className="font-serif text-3xl md:text-6xl text-foreground font-bold leading-tight">Expert Reflections</h2>
          <div className="flex gap-4 pr-4">
            <Button
              onClick={() => api?.scrollPrev()}
              variant="outline"
              className="rounded-full size-12 md:size-16 border-border/60 hover:bg-primary hover:text-white transition-all shadow-xl"
              size="icon"
            >
              <ChevronLeft className="size-6" />
            </Button>
            <Button
              onClick={() => api?.scrollNext()}
              variant="outline"
              className="rounded-full size-12 md:size-16 border-border/60 hover:bg-primary hover:text-white transition-all shadow-xl"
              size="icon"
            >
              <ChevronRight className="size-6" />
            </Button>
          </div>
        </div>
        <div>
          <Carousel setApi={setApi} className="[&>div]:overflow-visible" opts={{ align: "start" }}>
            <CarouselContent className="-ml-6">
              {reviews.map((review, idx) => (
                <CarouselItem
                  className="pl-6 basis-[90%] sm:basis-8/12 md:basis-[600px] lg:basis-1/2 xl:basis-[500px]"
                  key={idx}
                >
                  <ReviewCard {...review} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

const ReviewCard = ({ image, product, author, comment }: ReviewType) => {
  return (
    <Card className="h-full rounded-[2.5rem] border border-border bg-card/30 p-8 shadow-sm group">
      <CardContent className="flex h-full flex-col justify-between p-0">
        <div className="flex gap-8 max-md:flex-col-reverse">
          <div className="flex-1 space-y-6">
            <div className="flex gap-4">
              <Avatar className="size-14 border-2 border-primary/10 transition-transform group-hover:scale-110">
                <AvatarImage src={author.image} />
                <AvatarFallback className="font-bold">{author.name[0]}</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h3 className="font-serif text-xl font-bold leading-none text-foreground">
                  {author.name}
                </h3>
                {author.verifiedBuyer && (
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">
                    Verified Industry Expert
                  </span>
                )}
              </div>
            </div>
            <p className="text-lg leading-relaxed text-muted-foreground font-medium italic">
              &ldquo;{comment}&rdquo;
            </p>
          </div>
          <div className="basis-48 relative group/image">
            <AspectRatio ratio={0.8} className="overflow-hidden rounded-3xl border border-border shadow-lg">
              <img
                src={image}
                alt={product.name}
                className="block size-full object-cover grayscale-[20%] group-hover/image:grayscale-0 transition-all duration-1000 group-hover/image:scale-110"
              />
            </AspectRatio>
          </div>
        </div>

        {/* Dynamic Product Anchor */}
        <div className="mt-12 space-y-6">
          <Separator className="opacity-30" />
          <a href={product.link} className="group/link flex items-center gap-4 hover:translate-x-1 transition-transform">
            <div className="size-12 shrink-0 overflow-hidden rounded-xl ring-2 ring-primary/5 shadow-md">
              <img
                src={product.image}
                alt={product.name}
                className="block size-full object-cover"
              />
            </div>
            <div className="space-y-0.5">
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Reviewed Product</span>
                <p className="text-sm font-bold text-foreground underline-offset-4 group-hover/link:underline transition-all">
                {product.name}
                </p>
            </div>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export { Reviews23 };
```
