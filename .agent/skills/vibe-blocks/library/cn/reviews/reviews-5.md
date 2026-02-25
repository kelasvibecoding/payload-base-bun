# Reviews 5

## Metadata
- **Category**: Reviews
- **Objective**: Provide a highly functional, sortable customer feedback list with integrated distribution metrics.
- **Use Case**: B2B platforms, enterprise service reviews, or community boards where users need to sort feedback by "Helpfulness" or "Recency" to find relevant social proof.
- **Visual Style**: Clean, modular architectural layout featuring a top summary row with high-contrast average scores and a compact side-stack of distribution bars. Review entries are minimalist, segmented by horizontal dividers, featuring author avatars, verified icons, and date metadata.
- **Interactivity**: Sophisticated state-based sorting mechanism (`sortBy`) with a `DropdownMenu` supporting "Most Helpful", "Newest", "Highest", and "Lowest". Entries react to "Helpful" metrics with subtle textual displays.

## Description
Reviews 5 is the "Curated Feedback" template. It moves away from flashy visuals to focus on utility and density. The primary driver of this component is the sorting system, which allows users to reorganize the feedback based on their current information needs. By placing the "Helpful" metric front and center, it leverages community-driven curation to highlight the most reliable and informative reviews, making it ideal for technical products where detailed feedback is common.

## Source Code

```tsx
"use client";

import { BadgeCheck, ChevronDown, Sparkles } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Rating } from "@/components/rating";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";
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
  helpful?: number;
}

const DEFAULT_REVIEWS: Review[] = [
  {
    id: "1",
    rating: 5,
    title: "Revolutionary addition to our stack",
    content: "We've tried every UI kit on the market, but nothing matches the architectural purity and performance optimization found here. Deployment was flawless.",
    author: { name: "Sarah Montgomery", avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp" },
    date: "Dec 10, 2024",
    verified: true,
    helpful: 42,
  },
  {
    id: "2",
    rating: 5,
    title: "Unmatched performance metrics",
    content: "The TBT optimization on these components is best-in-class. Our Lighthouse score jumped 20 points after migration. Unmatched quality.",
    author: { name: "James Robertson", avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp" },
    date: "Dec 8, 2024",
    verified: true,
    helpful: 38,
  },
];

type SortOption = "helpful" | "newest" | "highest" | "lowest";

interface Reviews5Props {
  reviews?: Review[];
  className?: string;
}

const Reviews5 = ({ reviews = DEFAULT_REVIEWS, className }: Reviews5Props) => {
  const [sortBy, setSortBy] = useState<SortOption>("helpful");

  const totalReviews = reviews.length;
  const averageRating =
    reviews.reduce((sum, r) => sum + r.rating, 0) / (totalReviews || 1);

  const ratingCounts = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: reviews.filter((r) => r.rating === star).length,
    percentage:
      (reviews.filter((r) => r.rating === star).length / (totalReviews || 1)) * 100,
  }));

  const sortedReviews = [...reviews].sort((a, b) => {
    switch (sortBy) {
      case "helpful":
        return (b.helpful || 0) - (a.helpful || 0);
      case "newest":
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case "highest":
        return b.rating - a.rating;
      case "lowest":
        return a.rating - b.rating;
      default:
        return 0;
    }
  });

  const sortLabels: Record<SortOption, string> = {
    helpful: "High Impact First",
    newest: "Latest Updates",
    highest: "Top Perspective",
    lowest: "Critical Insight",
  };

  return (
    <section className={cn("py-24 md:py-32 bg-background font-sans", className)}>
      <div className="container max-w-3xl">
        {/* Header Aggregate Analysis */}
        <div className="mb-10 flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between px-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl text-foreground">
              Community Insights
            </h2>
            <div className="flex items-center gap-4 bg-muted/30 p-2.5 rounded-2xl border border-border">
              <div className="flex items-baseline gap-1 px-4">
                <span className="text-3xl font-bold tracking-tighter">
                  {averageRating.toFixed(1)}
                </span>
                <span className="text-sm font-bold text-muted-foreground opacity-50">/ 5</span>
              </div>
              <Rating rate={averageRating} className="[&_svg]:size-5 text-primary" />
              <BadgeCheck className="size-5 text-emerald-600 ml-2" />
            </div>
          </div>

          {/* Compact Mini-Metrics */}
          <div className="flex gap-4 sm:w-56 p-4 rounded-2xl bg-muted/20 border border-border/50">
            <div className="flex flex-col gap-2.5 text-[10px] font-bold text-muted-foreground tracking-widest leading-none pt-1">
              {[5, 4, 3, 2, 1].map((n) => (
                <span key={n}>{n}★</span>
              ))}
            </div>
            <div className="flex flex-1 flex-col gap-3.5 pt-1">
              {ratingCounts.map(({ star, percentage }) => (
                <Progress key={star} value={percentage} className="h-1 bg-muted/50 rounded-full" />
              ))}
            </div>
          </div>
        </div>

        {/* Global Action Bar */}
        <div className="mb-6 flex items-center justify-between bg-muted/50 border border-border px-6 py-2.5 rounded-2xl shadow-sm">
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            {totalReviews} expert evaluations
          </span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-2 font-bold text-primary hover:bg-white/10">
                Sorted by: {sortLabels[sortBy]}
                <ChevronDown className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="rounded-xl border-border bg-card">
              {(Object.keys(sortLabels) as SortOption[]).map((option) => (
                <DropdownMenuItem
                  key={option}
                  onClick={() => setSortBy(option)}
                  className={cn("font-bold text-xs uppercase tracking-widest", sortBy === option ? "bg-primary text-primary-foreground" : "text-muted-foreground")}
                 maroon text-rose-500>
                  {sortLabels[option]}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Unified List View */}
        <div className="space-y-0">
          {sortedReviews.map((review, idx) => (
            <div key={review.id} className="group">
              {idx > 0 && <Separator className="my-8 opacity-50" />}
              <div className="space-y-4 px-2">
                {/* Author Metadata Identity */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="size-8 ring-2 ring-primary/10">
                      <AvatarImage src={review.author.avatar} alt={review.author.name} />
                      <AvatarFallback className="text-[10px] font-bold">{review.author.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-foreground">
                        {review.author.name}
                        </span>
                        {review.verified && (
                        <BadgeCheck className="size-4 text-emerald-600" />
                        )}
                    </div>
                  </div>
                  <time className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 tabular-nums">
                    {review.date}
                  </time>
                </div>

                {/* Rating & Headline */}
                <div className="flex items-center gap-3">
                  <Rating
                    rate={review.rating}
                    className="[&>div]:size-3 text-primary"
                  />
                  <h4 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">{review.title}</h4>
                </div>

                {/* Perspective Content */}
                <p className="text-sm leading-relaxed text-muted-foreground font-medium italic">
                    &ldquo;{review.content}&rdquo;
                </p>

                {/* Social Proof Metric */}
                {review.helpful !== undefined && review.helpful > 0 && (
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary/60">
                    <Sparkles className="size-3" />
                    {review.helpful} peers found this perspective helpful
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Actions */}
        <div className="mt-16 flex justify-center">
          <Button variant="outline" className="h-12 px-12 rounded-2xl font-bold border-border shadow-md hover:bg-primary hover:text-white transition-all">
            Unlock Full Archive
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Reviews5 };
```
