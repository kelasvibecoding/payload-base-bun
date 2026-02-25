# Live Purchase 2

## Metadata
- **Category**: Live Purchase Notification
- **Objective**: Display recent purchases in a compact, modern format with a visual emphasis on real-time activity.
- **Use Case**: Lifestyle brands, apparel, or high-end retail sites where a smaller UI footprint is preferred over a standard rectangular card.
- **Visual Style**: Distinct pill-shaped container (`rounded-full`) that sits unobtrusively in the corner of the viewport. Features a pulsing "live" indicator dot (using Tailwind's `animate-ping`) to aggressively signal current activity.
- **Interactivity**: Auto-rotates through recent purchases. Uses a delayed initial reveal (2 seconds) to avoid immediately overwhelming the user on page load. Uses a pop-down transition (`translate-y-4 opacity-0`) for swapping items and dismissal.

## Source Code

```tsx
"use client";

import { MapPin, X } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Purchase {
  customerName: string;
  customerLocation: string;
  productName: string;
  productImage: string;
}

const DEFAULT_PURCHASES: Purchase[] = [
  {
    customerName: "Alex",
    customerLocation: "London, UK",
    productName: "Premium Headphones",
    productImage: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/electronics/Modern-White-Headphones-1.png",
  },
  {
    customerName: "Maria",
    customerLocation: "Berlin, DE",
    productName: "Leather Wallet",
    productImage: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    customerName: "John",
    customerLocation: "Sydney, AU",
    productName: "Running Shoes",
    productImage: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
  },
];

interface LivePurchase2Props {
  purchases?: Purchase[];
  autoRotate?: boolean;
  rotateInterval?: number;
  className?: string;
}

const LivePurchase2 = ({
  purchases = DEFAULT_PURCHASES,
  autoRotate = true,
  rotateInterval = 6000,
  className,
}: LivePurchase2Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    // Show after a delay
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(showTimer);
  }, [isDismissed]);

  useEffect(() => {
    if (!autoRotate || purchases.length <= 1 || !isVisible || isDismissed)
      return;

    const timer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % purchases.length);
        setIsVisible(true);
      }, 500);
    }, rotateInterval);

    return () => clearInterval(timer);
  }, [autoRotate, rotateInterval, purchases.length, isVisible, isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };

  if (isDismissed) return null;

  const current = purchases[currentIndex];

  return (
    <div
      className={cn(
        "fixed bottom-6 left-6 z-50 transition-all duration-500",
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 pointer-events-none",
        className,
      )}
    >
      <div className="relative flex items-center gap-3 rounded-full bg-background py-2 pl-2 pr-4 shadow-lg ring-1 ring-border">
        {/* Live Indicator */}
        <div className="absolute right-0 top-0">
          <span className="relative flex size-3">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-3 rounded-full bg-emerald-500" />
          </span>
        </div>

        {/* Product Image */}
        <div className="size-10 overflow-hidden rounded-full bg-muted">
          <img
            src={current.productImage}
            alt={current.productName}
            className="size-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col">
          <p className="text-sm">
            <span className="font-semibold">{current.customerName}</span>{" "}
            <span className="text-muted-foreground">purchased</span>{" "}
            <span className="font-medium">{current.productName}</span>
          </p>
          <p className="flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="size-3" />
            {current.customerLocation}
          </p>
        </div>

        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          className="ml-2 size-6 shrink-0 rounded-full"
          onClick={handleDismiss}
        >
          <X className="size-3" />
        </Button>
      </div>
    </div>
  );
};

export { LivePurchase2 };
```
