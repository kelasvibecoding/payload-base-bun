# Promo Banner 3

## Metadata
- **Category**: Promo Banner
- **Objective**: Display a countdown timer creating urgency for shipping cutoffs.
- **Use Case**: Holiday seasons, guaranteed next-day delivery promises, or time-sensitive fulfillment windows.
- **Visual Style**: Inline text layout featuring a `font-mono` ticker for the countdown. Includes a `Gift` icon to reinforce the delivery/gift concept.
- **Interactivity**: Fully functional React interval timer. Counts down aggressively in seconds to a specified `cutoffTime` date object.

## Description
Promo Banner 3 uses scarcity and urgency to drive conversions. By showing a live, ticking clock, it forces the user to recognize that a specific delivery window (e.g., "delivery by Dec 24") is closing soon. The logic includes a standard `setInterval` mapped to a React `useState` object managing hours, minutes, and seconds.

## Source Code

```tsx
"use client";

import { Gift } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { cn } from "@/lib/utils";

interface PromoBanner3Props {
  deliveryDate?: string;
  cutoffTime?: Date;
  className?: string;
}

const PromoBanner3 = ({
  deliveryDate = "Dec 24",
  cutoffTime,
  className,
}: PromoBanner3Props) => {
  const defaultCutoffTime = useMemo(
    () => new Date(Date.now() + 4 * 60 * 60 * 1000),
    [],
  );
  const targetTime = cutoffTime ?? defaultCutoffTime;

  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = targetTime.getTime();
      const diff = target - now;

      if (diff <= 0) {
        return { hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        hours: Math.floor(diff / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime]);

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className={cn("w-full bg-primary text-primary-foreground", className)}>
      <div className="container py-2.5">
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
          <div className="flex items-center gap-2">
            <Gift className="size-4" />
            <span>
              Order within{" "}
              <span className="font-mono font-bold">
                {pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:
                {pad(timeLeft.seconds)}
              </span>{" "}
              for delivery by{" "}
              <span className="font-semibold">{deliveryDate}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PromoBanner3 };
```
