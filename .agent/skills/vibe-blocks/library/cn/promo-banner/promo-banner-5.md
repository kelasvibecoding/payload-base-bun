# Promo Banner 5

## Metadata
- **Category**: Promo Banner
- **Objective**: Display a highly visible "Flash Sale" countdown timer.
- **Use Case**: Black Friday sales, limited-time drops, or 24-hour flash sales where urgency is the primary driver.
- **Visual Style**: The countdown timer itself is visually extracted into distinct blocks `rounded bg-primary/80 px-2 py-0.5` with a colon separator. This makes the ticker feel more mechanical and robust than plain inline text.
- **Interactivity**: Fully functional React interval timer. Counts down aggressively in seconds to a specified `endTime` date object.

## Description
Promo Banner 5 is a more visually aggressive variant of the countdown timer. Instead of being embedded gracefully in a sentence, the timer is a distinct UI component in the row, bookended by a message and a description. It's impossible to miss and instantly communicates a sense of ticking scarcity.

## Source Code

```tsx
"use client";

import { useEffect, useMemo, useState } from "react";

import { cn } from "@/lib/utils";

interface PromoBanner5Props {
  endTime?: Date;
  message?: string;
  description?: string;
  className?: string;
}

const PromoBanner5 = ({
  endTime,
  message = "Flash Sale Ends In",
  description = "Up to 50% off on selected items",
  className,
}: PromoBanner5Props) => {
  const defaultEndTime = useMemo(
    () => new Date(Date.now() + 24 * 60 * 60 * 1000),
    [],
  );
  const targetTime = endTime ?? defaultEndTime;

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
    <div
      className={cn(
        "w-full bg-primary text-primary-foreground",
        className,
      )}
    >
      <div className="container py-2.5">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm">
          <span className="font-medium">{message}</span>
          <div className="flex items-center gap-1 font-mono text-lg font-bold">
            <span className="rounded bg-primary/80 px-2 py-0.5">
              {pad(timeLeft.hours)}
            </span>
            <span>:</span>
            <span className="rounded bg-primary/80 px-2 py-0.5">
              {pad(timeLeft.minutes)}
            </span>
            <span>:</span>
            <span className="rounded bg-primary/80 px-2 py-0.5">
              {pad(timeLeft.seconds)}
            </span>
          </div>
          <span className="opacity-90">{description}</span>
        </div>
      </div>
    </div>
  );
};

export { PromoBanner5 };
```
