# Promo Banner 1

## Metadata
- **Category**: Promo Banner
- **Objective**: Display a top-of-page banner tracking a user's progress toward a "Free Shipping" threshold.
- **Use Case**: E-commerce stores looking to increase average order value (AOV) by gamifying the free shipping threshold.
- **Visual Style**: Uses `bg-primary` for high contrast against typical white navbars. It includes a `Progress` bar inline on desktop, which hides on mobile to save space.
- **Interactivity**: Technically driven by props (`threshold`, `currentAmount`). The visual updates conditionally: if qualified, it shows a celebration message; if not, it calculates the remaining amount dynamically.

## Description
Promo Banner 1 is a highly effective e-commerce utility. By combining a clear call to action ("Spend $X more") with a visual progress bar, it encourages users to add just one more item to their cart. It's designed to sit at the absolute top of the viewport above the main navigation.

## Source Code

```tsx
import { Truck } from "lucide-react";

import { cn } from "@/lib/utils";

import { Progress } from "@/components/ui/progress";

interface PromoBanner1Props {
  threshold?: number;
  currentAmount?: number;
  className?: string;
}

const PromoBanner1 = ({
  threshold = 75,
  currentAmount = 45,
  className,
}: PromoBanner1Props) => {
  const progress = Math.min((currentAmount / threshold) * 100, 100);
  const remaining = threshold - currentAmount;
  const hasQualified = remaining <= 0;

  return (
    <div
      className={cn(
        "w-full bg-primary text-primary-foreground",
        className,
      )}
    >
      <div className="container flex items-center justify-center gap-3 py-2.5">
        <Truck className="size-4 shrink-0" />
        {hasQualified ? (
          <p className="text-sm font-medium">
            🎉 You&apos;ve unlocked FREE shipping!
          </p>
        ) : (
          <div className="flex items-center gap-3">
            <p className="text-sm">
              Spend <span className="font-semibold">${remaining.toFixed(2)}</span>{" "}
              more for <span className="font-semibold">FREE shipping</span>
            </p>
            <Progress
              value={progress}
              className="hidden h-1.5 w-24 bg-primary/80 sm:block [&>div]:bg-white"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export { PromoBanner1 };
```
