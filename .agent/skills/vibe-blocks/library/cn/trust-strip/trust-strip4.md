# Trust Strip 4

## Metadata
- **Category**: Trust Strip
- **Objective**: Display rating, reviews, key features, and verified seller badge.
- **Use Case**: E-commerce product page or store section showing trust indicators and seller verification.
- **Visual Style**: Horizontal layout with rating, feature list, and verified badge.
- **Interactivity**: Static display (no interactive elements).

## Description
A compact trust strip showing star rating, verified reviews, key features (free shipping, returns, warranty, support), and verified seller badge to build customer confidence.

## Source Code
```tsx
import {
  BadgeCheck,
  Headphones,
  RotateCcw,
  Shield,
  Star,
  Truck,
} from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface TrustStrip4Props {
  rating?: number;
  reviewCount?: number;
  className?: string;
}

const TrustStrip4 = ({
  rating = 4.8,
  reviewCount = 25000,
  className,
}: TrustStrip4Props) => {
  const features = [
    { icon: <Truck className="size-4" />, text: "Free shipping over $75" },
    { icon: <RotateCcw className="size-4" />, text: "30-day free returns" },
    { icon: <Shield className="size-4" />, text: "2-year warranty" },
    { icon: <Headphones className="size-4" />, text: "24/7 support" },
  ];

  return (
    <section className={cn("bg-muted/50 py-4", className)}>
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Rating */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "size-4",
                      i < Math.floor(rating)
                        ? "fill-amber-400 text-amber-400"
                        : "fill-muted text-muted",
                    )}
                  />
                ))}
              </div>
              <span className="text-sm font-semibold">{rating}</span>
            </div>
            <Separator orientation="vertical" className="h-4" />
            <span className="text-sm text-muted-foreground">
              {reviewCount.toLocaleString()}+ verified reviews
            </span>
          </div>

          {/* Features */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-1.5 text-sm text-muted-foreground"
              >
                {feature.icon}
                <span>{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Verified Badge */}
          <Badge variant="secondary" className="gap-1.5">
            <BadgeCheck className="size-3.5 text-emerald-600" />
            Verified Seller
          </Badge>
        </div>
      </div>
    </section>
  );
};

export { TrustStrip4 };
```
