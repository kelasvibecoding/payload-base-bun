# Reviews 18

## Metadata
- **Category**: Reviews
- **Objective**: Provide an immersive, media-heavy customer review interface with high-fidelity PhotoSwipe integration.
- **Use Case**: Lifestyle products, fashion catalogs, or premium hotel reviews where User-Generated Content (UGC) and situational photos are the primary trust indicators.
- **Visual Style**: Sophisticated split-layout architectural aesthetic. Each review entry features a comprehensive metadata sidebar (Rating, Author, Verified status, Country with Flag icon) and a content primary column with deep-dive comments and a PhotoSwipe-powered synced image gallery.
- **Interactivity**: Progressive PhotoSwipe 5 Lightbox implementation with custom UI (Close, Index Indicator, Navigation), Carousel state synchronization (auto-scrolling carousel to lightbox index), and dynamic sorting (Featured, Rating).

## Description
Reviews 18 is the "UGC Powerhouse" component of the vibe-library. It treats user reviews as curated high-fidelity articles rather than simple feedback snippets. By integrating `photoswipe` and highly visual image carousels directly into each review entry, it allows users to experience the product through the eyes of previous customers. The inclusion of granular metadata like the buyer's country and "Verified Buyer" status creates an undeniable layer of social proof for high-stakes purchases.

## Source Code

```tsx
"use client";

import PhotoSwipeLightbox from "photoswipe/lightbox";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import "photoswipe/style.css";

import { cn } from "@/lib/utils";
import { Rating } from "@/components/rating";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { badgeVariants } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ImageType {
  src: string;
  width: number;
  height: number;
  alt?: string;
}

interface ReviewType {
  rate: number;
  author?: string;
  verifiedBuyer?: boolean;
  country?: {
    name: string;
    code: string;
  };
  date: string;
  title: string;
  comment: string;
  images?: ImageType[];
}

interface ReviewWithOptionalReply extends ReviewType {
  reply?: {
    title: string;
    comment: string;
    date: string;
  };
}

const REVIEWS: ReviewWithOptionalReply[] = [
  {
    rate: 5,
    author: "Johnson C.",
    verifiedBuyer: true,
    country: { name: "Canada", code: "CA" },
    date: "2 months ago",
    title: "Beautiful engineering and great quality",
    comment: "Absolutely love the architectural detailing. It feels premium and looks even better in person than in the documentation drawings.",
    images: [
      { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/accessories/Elegant-Watch-on-Womans-Wrist-2.png", width: 1200, height: 1200 },
      { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/accessories/Elegant-Jewelry-Portrait-1.png", width: 349, height: 640 },
    ],
  },
];

const Reviews18 = ({
  reviews = REVIEWS,
  pageAmmount = "1 - 10 out of 225 reviews",
  className,
}: {
  reviews?: ReviewWithOptionalReply[];
  pageAmmount?: string;
  className?: string;
}) => {
  return (
    <section className={cn("py-32 bg-background font-sans", className)}>
      <div className="container">
        {/* Navigation/Sort Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-b border-border pb-8">
          <div className="space-y-1">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Verified Feedback</h2>
            <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">{pageAmmount}</p>
          </div>
          <Select defaultValue="featured">
            <SelectTrigger className="w-full md:w-56 h-12 rounded-xl font-bold bg-muted/30 border-border">
              <SelectValue placeholder="Sort Experience" />
            </SelectTrigger>
            <SelectContent className="rounded-xl border-border">
              <SelectItem value="featured" className="font-bold">Featured Insights</SelectItem>
              <SelectItem value="highest_rating" className="font-bold">Highest Consensus</SelectItem>
              <SelectItem value="lowest_rating" className="font-bold">Constructive Feedback</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="divide-y divide-border/50">
          {reviews.map((item, idx) => (
            <Review key={idx} {...item} />
          ))}
        </div>

        <div className="mt-16 flex items-center justify-center">
          <Button size="lg" className="rounded-2xl px-12 font-bold shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
            Load More Insights
          </Button>
        </div>
      </div>
    </section>
  );
};

const Review = ({
  title,
  comment,
  images,
  rate,
  author,
  verifiedBuyer,
  country,
  date,
}: ReviewType) => {
  return (
    <div className="grid grid-cols-1 gap-x-16 gap-y-10 py-16 lg:grid-cols-3">
      {/* Sidebar Metadata */}
      <div className="col-span-1 space-y-6">
        <div className="space-y-4">
          <Rating rate={rate} className="[&_svg]:size-5 text-primary" />
          <div className="space-y-1">
            <p className="text-xl font-bold text-foreground">{author}</p>
            {verifiedBuyer && (
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Verified Buyer
              </p>
            )}
          </div>
        </div>
        <div className="pt-4 border-t border-border/50">
          {country && (
            <div className="flex items-center gap-3">
              <img
                alt={country.name}
                className="w-6 rounded-sm shadow-sm"
                src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${country.code}.svg`}
              />
              <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest leading-none">
                {country.name} · {date}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Main Content Column */}
      <div className="space-y-8 lg:col-span-2">
        <div className="space-y-4">
            <h3 className="text-2xl font-bold leading-tight text-foreground lg:text-3xl">
            {title}
            </h3>
            <p className="text-lg leading-relaxed text-muted-foreground font-medium italic">
            &ldquo;{comment}&rdquo;
            </p>
        </div>

        {/* Dynamic Image Carousel Entry */}
        {images && images.length > 0 && (
            <div className="pt-4">
                <ReviewCarousel images={images} />
            </div>
        )}
      </div>
    </div>
  );
};

const ReviewCarousel = ({ images }: { images: ImageType[] }) => {
  const [api, setApi] = useState<CarouselApi>();
  const lightboxRef = useRef<PhotoSwipeLightbox | null>(null);
  const galleryID = "pswp-gallery-" + useId().replace(/[^a-zA-Z0-9]/g, "");

  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#" + galleryID,
      children: "a",
      bgOpacity: 0.95,
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();
    lightboxRef.current = lightbox;

    // Sync Carousel scroll to Lightbox change
    lightbox.on("change", () => {
        api?.scrollTo(lightbox.pswp?.currIndex || 0);
    });

    return () => lightbox.destroy();
  }, [galleryID, api]);

  return (
    <div id={galleryID}>
      <Carousel setApi={setApi} opts={{ align: "start", loop: false }}>
        <CarouselContent className="-ml-4">
          {images.map((img, i) => (
            <CarouselItem key={i} className="basis-1/2 sm:basis-1/3 pl-4">
              <AspectRatio ratio={1} className="overflow-hidden rounded-2xl border border-border shadow-sm group">
                <a
                  href={img.src}
                  data-pswp-width={img.width}
                  data-pswp-height={img.height}
                  target="_blank"
                  rel="noreferrer"
                  className="block size-full"
                >
                  <img
                    src={img.src}
                    alt={img.alt || "Review photo"}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </a>
              </AspectRatio>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export { Reviews18 };
```
