# Reviews 2

## Metadata
- **Category**: Reviews
- **Objective**: Provide a data-driven customer feedback layout with visual rating distribution and high-density review cards.
- **Use Case**: E-commerce catalog pages or product detail views where quantitative social proof (rating bars) is as important as qualitative feedback (comments).
- **Visual Style**: Structured dual-column layout featuring a sticky-style summary sidebar (Global Average Rating + interactive Progress Bar distribution) and a primary 2-column grid of compact review cards. Cards feature author avatars, high-contrast verified badges (Emerald), and line-clamped comments for consistent vertical rhythm.
- **Interactivity**: Static aggregate calculations for rating percentages and average values, alongside responsive grid transitions for different device widths.

## Description
Reviews 2 is the "Analytical Feedback" component. It excels at providing a macro-view of customer satisfaction through its sidebar distribution chart. By visualizing how many people gave 5 stars vs. 1 star, it builds transparency and trust. The primary content grid allows users to sample a wide variety of individual experiences quickly, making it a high-performance choice for decision-heavy product categories.

## Source Code

```tsx
"use client";

import { BadgeCheck } from "lucide-react";

import { cn } from "@/lib/utils";

import { Rating } from "@/components/rating";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

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
}

const DEFAULT_REVIEWS: Review[] = [
  {
    id: "1",
    rating: 5,
    title: "Exceeded my expectations",
    content: "The engineering team has really nailed the performance on this one. It's rare to find a library that balances flexibility and speed so elegantly.",
    author: { name: "Sarah M.", avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp" },
    date: "Dec 10, 2024",
    verified: true,
  },
  {
    id: "2",
    rating: 4,
    title: "Great value for money",
    content: "Solid architectural pattern. It handles large-scale state management perfectly. My only minor suggestion would be even more documentation for edge cases.",
    author: { name: "James R.", avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp" },
    date: "Dec 8, 2024",
    verified: true,
  },
  {
    id: "3",
    rating: 5,
    title: "Perfect for production apps",
    content: "We've migrated three enterprise projects to this stack and haven't looked back. The type safety is best-in-class.",
    author: { name: "Emily K.", avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp" },
    date: "Dec 5, 2024",
    verified: true,
  },
];

interface Reviews2Props {
  reviews?: Review[];
  title?: string;
  className?: string;
}

const Reviews2 = ({
  reviews = DEFAULT_REVIEWS,
  title = "Infrastructure Feedback",
  className,
}: Reviews2Props) => {
  const totalReviews = reviews.length;
  const averageRating =
    reviews.reduce((sum, review) => sum + review.rating, 0) / (totalReviews || 1);

  const ratingCounts = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: reviews.filter((r) => r.rating === star).length,
    percentage:
      (reviews.filter((r) => r.rating === star).length / (totalReviews || 1)) * 100,
  }));

  return (
    <section className={cn("py-24 md:py-32 bg-background font-sans", className)}>
      <div className="container max-w-5xl">
        <h2 className="mb-12 text-3xl font-bold tracking-tight md:text-5xl text-foreground">
          {title}
        </h2>

        <div className="grid gap-16 lg:grid-cols-[320px_1fr] lg:gap-20">
          {/* Summary Analysis Sidebar */}
          <div className="space-y-8">
            <div className="text-center lg:text-left space-y-2">
              <div className="text-7xl font-bold tracking-tighter text-foreground">
                {averageRating.toFixed(1)}
              </div>
              <Rating
                rate={averageRating}
                className="justify-center lg:justify-start [&_svg]:size-6 text-primary"
              />
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
                Based on {totalReviews} expert reviews
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-border/50">
              {ratingCounts.map(({ star, count, percentage }) => (
                <div key={star} className="flex items-center gap-4 transition-all hover:translate-x-1">
                  <span className="w-10 text-xs font-bold text-muted-foreground tracking-tighter">
                    {star} STAR
                  </span>
                  <Progress value={percentage} className="h-2 flex-1 bg-muted rounded-full" />
                  <span className="w-10 text-right text-xs font-bold text-foreground tabular-nums">
                    {count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* High-Density Card Grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {reviews.map((review) => (
              <Card key={review.id} className="group flex flex-col border border-border bg-card/30 shadow-none hover:bg-muted/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="space-y-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="size-10 border-2 border-primary/10">
                          <AvatarImage src={review.author.avatar} />
                          <AvatarFallback className="font-bold">{review.author.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center gap-1.5 leading-none">
                            <span className="text-sm font-bold text-foreground">
                              {review.author.name}
                            </span>
                            {review.verified && (
                              <BadgeCheck className="size-4 text-emerald-600" />
                            )}
                          </div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-1">
                            {review.date}
                          </p>
                        </div>
                      </div>
                      <Rating
                        rate={review.rating}
                        className="[&>div]:size-3 text-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">{review.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground font-medium line-clamp-3">
                        {review.content}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Reviews2 };
```
