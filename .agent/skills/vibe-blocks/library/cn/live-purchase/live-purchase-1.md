# Live Purchase 1

## Metadata
- **Category**: Live Purchase Notification
- **Objective**: Create social proof and generate urgency (FOMO) by displaying recent customer purchases in an automated, rotating card.
- **Use Case**: Best used on product detail pages or landing pages for e-commerce stores wanting to simulate a busy, active shopping environment.
- **Visual Style**: Utilizes a standard Shadcn `Card` pinned to the bottom-left corner (`fixed bottom-6 left-6 z-50`). It prominently features the product image, formatted text combining customer details with the product name, and the time elapsed.
- **Interactivity**: Automatically rotates through a provided array of purchase objects using `setInterval`. Applies a subtle vertical translation and opacity fade (`translate-y-2 opacity-0`) as items swap out. Users can manually dismiss the notification entirely via the close button.

## Source Code

```tsx
"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Purchase {
  id: string;
  customerName: string;
  customerLocation: string;
  customerAvatar?: string;
  productName: string;
  productImage: string;
  timeAgo: string;
}

const DEFAULT_PURCHASES: Purchase[] = [
  {
    id: "1",
    customerName: "Sarah M.",
    customerLocation: "New York, NY",
    productName: "Wireless Headphones",
    productImage: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/electronics/Modern-White-Headphones-1.png",
    timeAgo: "2 minutes ago",
  },
  {
    id: "2",
    customerName: "James T.",
    customerLocation: "Los Angeles, CA",
    productName: "Leather Crossbody Bag",
    productImage: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/maroon-leather-handbag.png",
    timeAgo: "5 minutes ago",
  },
  {
    id: "3",
    customerName: "Emily R.",
    customerLocation: "Chicago, IL",
    productName: "Cotton Hoodie",
    productImage: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/black-hoodie-against-light-background.png",
    timeAgo: "8 minutes ago",
  },
];

interface LivePurchase1Props {
  purchases?: Purchase[];
  autoRotate?: boolean;
  rotateInterval?: number;
  className?: string;
}

const LivePurchase1 = ({
  purchases = DEFAULT_PURCHASES,
  autoRotate = true,
  rotateInterval = 5000,
  className,
}: LivePurchase1Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!autoRotate || purchases.length <= 1) return;

    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % purchases.length);
        setIsAnimating(false);
      }, 300);
    }, rotateInterval);

    return () => clearInterval(timer);
  }, [autoRotate, rotateInterval, purchases.length]);

  if (!isVisible) return null;

  const current = purchases[currentIndex];

  return (
    <div className={cn("fixed bottom-6 left-6 z-50", className)}>
      <Card
        className={cn(
          "w-80 gap-0 p-0 shadow-lg transition-all duration-300",
          isAnimating && "translate-y-2 opacity-0",
        )}
      >
        <CardContent className="p-3">
          <div className="flex items-start gap-3">
            {/* Product Image */}
            <div className="size-14 shrink-0 overflow-hidden rounded-md bg-muted">
              <img
                src={current.productImage}
                alt={current.productName}
                className="size-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="min-w-0 flex-1">
              <p className="text-sm">
                <span className="font-semibold">{current.customerName}</span>{" "}
                <span className="text-muted-foreground">from</span>{" "}
                <span>{current.customerLocation}</span>
              </p>
              <p className="text-sm text-muted-foreground">
                just purchased{" "}
                <span className="font-medium text-foreground">
                  {current.productName}
                </span>
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {current.timeAgo}
              </p>
            </div>

            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="size-6 shrink-0"
              onClick={() => setIsVisible(false)}
            >
              <X className="size-3" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export { LivePurchase1 };
```
