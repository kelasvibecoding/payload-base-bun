# Reviews 4

## Metadata
- **Category**: Reviews
- **Objective**: Provide a highly interactive, filterable review board with visual feedback for rating distributions.
- **Use Case**: Extensive product catalogs where users want to drill down into specific feedback types (e.g., "Show me all 1-star reviews").
- **Visual Style**: Modern architectural layout featuring a rounded summary block with an integrated 5-point distribution bar. Individual bars act as interactive buttons for filtering. Reviews are displayed in a responsive 2-column grid of bordered cards, featuring author avatars and precise date metadata.
- **Interactivity**: Fluid state-based filtering by star rating (`selectedRating`), interactive hover highlights on distribution bars, and clearable filter indicators with animated transitions.

## Description
Reviews 4 is the "Insight Explorer" component. It moves beyond static feedback by treating the review summary as an interactive dashboard. By allowing users to click on the individual rating bars to filter the primary feed, it empowers them to find the specific information they need—whether it's looking for praise in 5-star reviews or identifying common issues in lower-rated ones. The 2-column grid provides high information density, making it suitable for products with hundreds of diverse reviews.

## Source Code

```tsx
"use client";

import { Star, X } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Rating } from "@/components/rating";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface Review {
  id: string;
  rating: number;
  content: string;
  author: {
    name: string;
    avatar?: string;
  };
  date: string;
}

const DEFAULT_REVIEWS: Review[] = [
  {
    id: "1",
    rating: 5,
    content: "Absolutely love the architectural patterns in this library. The quality exceeded my expectations and it integrated perfectly into our existing stack.",
    author: { name: "Sarah Montgomery", avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp" },
    date: "Dec 10, 2024",
  },
  {
    id: "2",
    rating: 5,
    content: "Perfect execution! Exactly what I was looking for. The mobile responsiveness is handled with incredible care.",
    author: { name: "James Robertson", avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp" },
    date: "Dec 8, 2024",
  },
  {
    id: "3",
    rating: 4,
    content: "Very high-quality logic patterns. Documentation is clear. Would love to see even more variants for the sidebar layouts.",
    author: { name: "Emily Krasinski", avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp" },
    date: "Dec 5, 2024",
  },
];

interface Reviews4Props {
  reviews?: Review[];
  className?: string;
}

const Reviews4 = ({ reviews = DEFAULT_REVIEWS, className }: Reviews4Props) => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const totalReviews = reviews.length;
  const averageRating =
    reviews.reduce((sum, review) => sum + review.rating, 0) / (totalReviews || 1);

  const ratingCounts = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: reviews.filter((r) => r.rating === star).length,
    percentage:
      (reviews.filter((r) => r.rating === star).length / (totalReviews || 1)) * 100,
  }));

  const filteredReviews = selectedRating
    ? reviews.filter((r) => r.rating === selectedRating)
    : reviews;

  return (
    <section className={cn("py-24 md:py-32 bg-background font-sans", className)}>
      <div className="container max-w-4xl">
        {/* Interactive Analysis Hub */}
        <div className="mb-16 rounded-[2rem] border border-border bg-muted/30 p-8 md:p-12 shadow-sm">
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-20">
            {/* Aggregate Score Display */}
            <div className="text-center md:text-left space-y-2">
              <div className="text-7xl font-bold tracking-tighter text-foreground">
                {averageRating.toFixed(1)}
              </div>
              <Rating
                rate={averageRating}
                className="justify-center md:justify-start [&_svg]:size-6 text-primary"
              />
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground pt-2">
                Expert consensus ({totalReviews} reviews)
              </p>
            </div>

            {/* Tap-to-Filter Bar System */}
            <div className="flex-1 space-y-3">
              {ratingCounts.map(({ star, count, percentage }) => (
                <button
                  key={star}
                  onClick={() =>
                    setSelectedRating(selectedRating === star ? null : star)
                  }
                  className={cn(
                    "group flex w-full items-center gap-4 rounded-xl px-4 py-2 transition-all",
                    selectedRating === star ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : "hover:bg-muted"
                  )}
                >
                  <div className="flex w-16 items-center gap-1.5 text-xs font-bold tracking-widest uppercase">
                    <span>{star}</span>
                    <Star className={cn("size-3.5", selectedRating === star ? "fill-current" : "fill-muted-foreground opacity-30")} />
                  </div>
                  <Progress value={percentage} className={cn("h-1.5 flex-1 rounded-full", selectedRating === star ? "bg-white/20" : "bg-muted")} />
                  <span className={cn("w-10 text-right text-sm font-bold tabular-nums", selectedRating === star ? "text-primary-foreground" : "text-muted-foreground")}>
                    {count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Filter Status */}
        {selectedRating && (
          <div className="mb-8 flex items-center justify-between bg-muted/50 px-6 py-3 rounded-2xl border border-border animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
                Showing
                </span>
                <span className="font-bold text-primary flex items-center gap-1">
                    {selectedRating} Star Feedback
                </span>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="h-8 rounded-lg px-4 font-bold text-xs"
              onClick={() => setSelectedRating(null)}
            >
              <X className="mr-2 size-3" />
              Reset View
            </Button>
          </div>
        )}

        {/* High-Resolution List */}
        <div className="grid gap-6 sm:grid-cols-2">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="group rounded-2xl border border-border bg-card p-6 shadow-none transition-all duration-300 hover:shadow-xl hover:bg-muted/30"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <Avatar className="size-10 border-2 border-primary/10">
                    <AvatarImage src={review.author.avatar} alt={review.author.name} />
                    <AvatarFallback className="font-bold">{review.author.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{review.author.name}</p>
                    <time className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">{review.date}</time>
                  </div>
                </div>
                <Rating
                  rate={review.rating}
                  className="[&_svg]:size-3.5 text-primary"
                />
              </div>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground font-medium italic">
                &ldquo;{review.content}&rdquo;
              </p>
            </div>
          ))}
        </div>

        {filteredReviews.length === 0 && (
          <div className="py-20 text-center rounded-3xl border-2 border-dashed border-border flex flex-col items-center gap-4">
            <Star className="size-10 text-muted-foreground/20" />
            <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
                No archived {selectedRating}-star insights.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export { Reviews4 };
```
