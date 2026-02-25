# Promo Banner 7

## Metadata
- **Category**: Promo Banner
- **Objective**: Combine time urgency with inventory scarcity to maximize promotional conversion rates.
- **Use Case**: Fast-moving inventory drops, flash sales, or limited-run merchandise drops (like hypebeast clothing drops).
- **Visual Style**: Highly aggressive layout. Uses an active `Zap` icon on the left, an `animate-pulse` colon flashing within the countdown timer, and a visual `Progress` bar tracking dwindling stock levels.
- **Interactivity**: Active React timer ticking down, paired with structural CSS animations (`animate-pulse`) to catch the eye immediately upon page load.

## Description
Promo Banner 7 uses every psychological trick in the e-commerce playbook simultaneously. By placing a ticking clock directly next to a shrinking inventory progress bar (which tells the user exactly how many items remain), it creates an unavoidable sense of FOMO (Fear Of Missing Out). This is the ultimate, high-pressure conversion utility.

## Source Code

```tsx
"use client";

import { Zap } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { cn } from "@/lib/utils";

import { Progress } from "@/components/ui/progress";

interface PromoBanner7Props {
  endTime?: Date;
  totalStock?: number;
  soldStock?: number;
  className?: string;
}

const PromoBanner7 = ({
  endTime,
  totalStock = 100,
  soldStock = 73,
  className,
}: PromoBanner7Props) => {
  const defaultEndTime = useMemo(
    () => new Date(Date.now() + 6 * 60 * 60 * 1000),
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
  const soldPercentage = (soldStock / totalStock) * 100;
  const remaining = totalStock - soldStock;

  return (
    <div
      className={cn(
        "w-full bg-primary text-primary-foreground",
        className,
      )}
    >
      <div className="container py-2.5">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <div className="flex items-center gap-2">
            <Zap className="size-4 fill-current" />
            <span className="font-semibold">Flash Sale</span>
          </div>
          
          <div className="flex items-center gap-2 font-mono font-bold">
            <span>{pad(timeLeft.hours)}</span>
            <span className="animate-pulse">:</span>
            <span>{pad(timeLeft.minutes)}</span>
            <span className="animate-pulse">:</span>
            <span>{pad(timeLeft.seconds)}</span>
          </div>

          <div className="flex items-center gap-2">
            <Progress
              value={soldPercentage}
              className="h-2 w-20 bg-primary/80 [&>div]:bg-white"
            />
            <span className="text-sm">
              <span className="font-semibold">{remaining}</span> left
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PromoBanner7 };
```
