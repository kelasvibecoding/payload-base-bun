# Reviews 1

## Metadata
- **Category**: Reviews
- **Objective**: Provide a professional, high-trust customer feedback list with integrated ratings and verified status.
- **Use Case**: E-commerce product pages, service-based social proof sections, or B2B case study summaries where textual credibility is the primary conversion driver.
- **Visual Style**: Clean, high-density narrow-column layout. Features a centralized average rating header with aggregate count, individual star-rating displays per entry, high-contrast "Verified Purchase" badges (Emerald), and author metadata with initial-based fallbacks and avatar integration.
- **Interactivity**: Static architectural layout optimized for deep readability and instant trust-building.

## Description
Reviews 1 is the "Trust Core" component of the vibe-library. It prioritizes the "Social Proof" brand archetype by providing a transparent and highly scannable feed of customer experiences. The inclusion of the "Verified Purchase" badge and clear average rating aggregate at the top helps build immediate authority. It is designed to be embedded directly into product or service landing pages where user consensus is a critical final nudges for checkout.

## Source Code

```tsx
"use client";

import { BadgeCheck } from "lucide-react";

import { cn } from "@/lib/utils";

import { Rating } from "@/components/rating";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
}

const DEFAULT_REVIEWS: Review[] = [
  {
    id: "1",
    rating: 5,
    title: "Exceeded my expectations",
    content:
      "The engineering quality of this platform is outstanding. Integration was seamless and the support team provided white-glove assistance throughout the deployment process.",
    author: {
      name: "Sarah Montgomery",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    },
    date: "Dec 10, 2024",
    verified: true,
  },
  {
    id: "2",
    rating: 4,
    title: "Great value for modern teams",
    content:
      "Solid architectural foundation overall. It handles complex state management exactly how we need it. Highly recommended for startups building high-fidelity UIs.",
    author: {
      name: "James Robertson",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    },
    date: "Dec 8, 2024",
    verified: true,
  },
  {
    id: "3",
    rating: 5,
    title: "The best ROI for our stack",
    content:
      "We've reduced our time-to-market by 40% after implementing these UI primitives. The attention to detail in the typography and spacing is remarkable.",
    author: {
      name: "Emily Krasinski",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    },
    date: "Dec 5, 2024",
    verified: true,
  },
];

interface Reviews1Props {
  reviews?: Review[];
  title?: string;
  className?: string;
}

const Reviews1 = ({
  reviews = DEFAULT_REVIEWS,
  title = "Expert Consensus",
  className,
}: Reviews1Props) => {
  const averageRating =
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <section className={cn("py-24 md:py-32 bg-background font-sans", className)}>
      <div className="container max-w-3xl">
        {/* Header Aggregate */}
        <div className="mb-16 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl text-foreground">
            {title}
          </h2>
          <div className="flex items-center gap-4 bg-muted/30 w-fit px-6 py-3 rounded-2xl border border-border shadow-sm">
            <Rating rate={averageRating} className="[&_svg]:size-6 text-primary" />
            <span className="text-lg font-bold text-foreground">
              {averageRating.toFixed(1)} <span className="text-muted-foreground font-medium">out of 5</span>
            </span>
            <span className="text-muted-foreground font-bold opacity-30">|</span>
            <span className="text-muted-foreground font-bold">
              {reviews.length} total reviews
            </span>
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-0">
          {reviews.map((review, index) => (
            <div key={review.id} className="group">
              {index > 0 && <Separator className="my-10 opacity-50" />}
              <div className="space-y-6">
                {/* Rating & Identity */}
                <div className="flex flex-col gap-2">
                  <Rating rate={review.rating} className="[&_svg]:size-4 text-primary" />
                  <h3 className="text-xl font-bold text-foreground leading-tight">{review.title}</h3>
                </div>

                {/* Body Content */}
                <p className="text-lg leading-relaxed text-muted-foreground font-medium">
                  {review.content}
                </p>

                {/* Author Metadata Footer */}
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <Avatar className="size-10 border-2 border-primary/10 transition-transform group-hover:scale-110">
                            <AvatarImage
                            src={review.author.avatar}
                            alt={review.author.name}
                            />
                            <AvatarFallback className="text-xs font-bold">
                            {review.author.name.split(" ").map((n) => n[0]).join("")}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <span className="text-sm font-bold text-foreground">{review.author.name}</span>
                            <time className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">{review.date}</time>
                        </div>
                    </div>

                    {review.verified && (
                        <div className="flex items-center gap-2 bg-emerald-50 dark:bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-100 dark:border-emerald-500/20">
                            <BadgeCheck className="size-4 text-emerald-600 dark:text-emerald-400" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">Verified Expert</span>
                        </div>
                    )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Reviews1 };
```
