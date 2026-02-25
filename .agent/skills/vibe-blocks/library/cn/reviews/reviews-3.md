# Reviews 3

## Metadata
- **Category**: Reviews
- **Objective**: Provide a media-rich, retail-focused review list with product variant metadata and helpfulness voting.
- **Use Case**: Fashion, lifestyle, or tech accessory sites where knowing the specific "Size" or "Color" a reviewer bought adds critical context to their feedback.
- **Visual Style**: Clean architectural layout featuring wide-format entries with integrated product thumbnail galleries. Entries include specialized variant metadata (e.g., "Size M, Navy Blue"), stateful "Helpful" voting buttons with animated icons, and author avatars with emerald verified status.
- **Interactivity**: Dynamic "Helpful" toggle state using `Set<string>` and reactive count increments, alongside smooth card hover highlight effects.

## Description
Reviews 3 is the "Retailer's Choice" component. It addresses several high-value conversion factors simultaneously: it displays real customer photos, shows exactly which product variation the customer received, and allows the community to peer-review feedback through the "Helpful" voting system. This template is designed for high-traffic commerce platforms where user-generated imagery and specific variant feedback are the primary drivers of purchase confidence.

## Source Code

```tsx
"use client";

import { BadgeCheck, ThumbsUp } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Rating } from "@/components/rating";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface Review {
  id: string;
  rating: number;
  title: string;
  content: string;
  author: {
    name: string;
    avatar?: string;
  };
  date: string;
  verified?: boolean;
  images?: string[];
  helpful?: number;
  variant?: string;
}

const DEFAULT_REVIEWS: Review[] = [
  {
    id: "1",
    rating: 5,
    title: "Absolutely stunning quality",
    content: "The engineering on this component is incredible. Photos don't do it justice - it looks even better when integrated into a high-fidelity dashboard. The material design feels premium.",
    author: { name: "Sarah Montgomery", avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp" },
    date: "Dec 10, 2024",
    verified: true,
    images: [
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/Person-in-Activewear-1.png",
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/Fashionable-Woman-in-Monochrome-Attire-1.png",
    ],
    helpful: 24,
    variant: "Professional License",
  },
  {
    id: "2",
    rating: 4,
    title: "Great product, minor setup delay",
    content: "Love the implementation. Runs slightly heavy in dev mode but production performance is fantastic. The code abstraction is exactly what our team was looking for.",
    author: { name: "James Robertson", avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp" },
    date: "Dec 8, 2024",
    verified: true,
    helpful: 18,
    variant: "Cloud Tier",
  },
];

interface Reviews3Props {
  reviews?: Review[];
  title?: string;
  className?: string;
}

const Reviews3 = ({
  reviews = DEFAULT_REVIEWS,
  title = "Verified Customer Feedback",
  className,
}: Reviews3Props) => {
  const [helpfulClicked, setHelpfulClicked] = useState<Set<string>>(new Set());

  const totalReviews = reviews.length;
  const averageRating =
    reviews.reduce((sum, review) => sum + review.rating, 0) / (totalReviews || 1);

  const handleHelpful = (reviewId: string) => {
    setHelpfulClicked((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(reviewId)) newSet.delete(reviewId);
      else newSet.add(reviewId);
      return newSet;
    });
  };

  return (
    <section className={cn("py-24 md:py-32 bg-background font-sans", className)}>
      <div className="container max-w-3xl">
        {/* Header Section */}
        <div className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl text-foreground">
              {title}
            </h2>
            <div className="flex items-center gap-4 bg-muted/30 w-fit px-5 py-2.5 rounded-2xl border border-border">
              <Rating rate={averageRating} className="[&_svg]:size-5 text-primary" />
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold">{averageRating.toFixed(1)}</span>
                <span className="text-sm font-bold text-muted-foreground uppercase opacity-50 tracking-widest">
                  ({totalReviews} Reviews)
                </span>
              </div>
            </div>
          </div>
          <Button variant="outline" className="rounded-xl h-12 px-8 font-bold shadow-sm shadow-black/5 hover:bg-primary hover:text-white transition-all">
            Write a Review
          </Button>
        </div>

        {/* Reviews List */}
        <div className="space-y-0">
          {reviews.map((review, index) => (
            <div key={review.id} className="group">
              {index > 0 && <Separator className="my-10 opacity-50" />}
              <Card className="border-0 p-0 shadow-none bg-transparent">
                <CardContent className="space-y-6 p-0 text-foreground">
                  {/* Author Metadata Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="size-12 border-2 border-primary/10">
                        <AvatarImage src={review.author.avatar} />
                        <AvatarFallback className="font-bold">{review.author.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold tracking-tight">{review.author.name}</span>
                          {review.verified && (
                            <BadgeCheck className="size-4 text-emerald-600" />
                          )}
                        </div>
                        <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                          <span>{review.date}</span>
                          {review.variant && (
                            <>
                              <span className="opacity-30">|</span>
                              <span className="text-primary truncate">{review.variant}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    <Rating rate={review.rating} className="[&_svg]:size-4 text-primary" />
                  </div>

                  {/* Comment Body */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">{review.title}</h3>
                    <p className="text-lg leading-relaxed text-muted-foreground font-medium italic">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  {/* Thumbnails Gallery */}
                  {review.images && review.images.length > 0 && (
                    <div className="flex flex-wrap gap-4 pt-2">
                      {review.images.map((image, imgIdx) => (
                        <div key={imgIdx} className="size-24 overflow-hidden rounded-2xl border border-border shadow-sm ring-4 ring-muted/30 hover:scale-105 hover:-rotate-2 transition-all">
                          <AspectRatio ratio={1}>
                            <img src={image} alt="User photo" className="size-full object-cover" />
                          </AspectRatio>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Feedback Interaction Footer */}
                  <div className="flex items-center gap-6 pt-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className={cn(
                        "h-10 px-4 rounded-xl gap-2 font-bold transition-all",
                        helpfulClicked.has(review.id) ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : "text-muted-foreground hover:bg-muted"
                      )}
                      onClick={() => handleHelpful(review.id)}
                    >
                      <ThumbsUp className={cn("size-4", helpfulClicked.has(review.id) && "fill-current")} />
                      Found Helpful
                      {review.helpful !== undefined && (
                        <span className="tabular-nums">
                          ({review.helpful + (helpfulClicked.has(review.id) ? 1 : 0)})
                        </span>
                      )}
                    </Button>
                    <Button variant="ghost" size="sm" className="h-10 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50 hover:text-destructive transition-colors">
                      Unreliable Feedback? Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Reviews3 };
```
