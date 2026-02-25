# Promo Banner 6

## Metadata
- **Category**: Promo Banner
- **Objective**: Display an elaborate, detailed countdown timer for long-running sales.
- **Use Case**: Holiday promotions or seasonal events where the sale lasts for several days and building anticipation is key.
- **Visual Style**: Provides a rich, dashboard-like presentation of the remaining time. Each unit (Days, Hrs, Min, Sec) is placed in its own high-contrast block `bg-white/20 px-2 py-1` with a micro-cap label (`text-[10px] uppercase`) underneath.
- **Interactivity**: Fully functional React interval timer tracking Days, Hours, Minutes, and Seconds based on an injected `endTime` prop.

## Description
Promo Banner 6 moves beyond the standard inline textual countdown. By blowing out the timer into distinct visual boxes, it creates a much higher perceived value and urgency. It feels structural and "heavy," making it ideal for the most important promotional events of the year (e.g., Cyber Monday).

## Source Code

```tsx
"use client";

import { Gift } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { cn } from "@/lib/utils";

interface PromoBanner6Props {
  endTime?: Date;
  title?: string;
  className?: string;
}

const PromoBanner6 = ({
  endTime,
  title = "Holiday Sale",
  className,
}: PromoBanner6Props) => {
  const defaultEndTime = useMemo(
    () => new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
    [],
  );
  const targetTime = endTime ?? defaultEndTime;

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
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
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
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

  return (
    <div
      className={cn(
        "w-full bg-primary text-primary-foreground",
        className,
      )}
    >
      <div className="container py-3">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <Gift className="size-5" />
            <span className="font-semibold">{title}</span>
          </div>
          <div className="flex items-center gap-2">
            {[
              { value: timeLeft.days, label: "Days" },
              { value: timeLeft.hours, label: "Hrs" },
              { value: timeLeft.minutes, label: "Min" },
              { value: timeLeft.seconds, label: "Sec" },
            ].map((unit, index) => (
               <div key={unit.label} className="flex items-center gap-2">
                <div className="flex flex-col items-center">
                  <span className="min-w-[2.5rem] rounded bg-white/20 px-2 py-1 text-center font-mono text-lg font-bold">
                    {unit.value.toString().padStart(2, "0")}
                  </span>
                  <span className="mt-0.5 text-[10px] uppercase tracking-wider opacity-80">
                    {unit.label}
                  </span>
                </div>
                {index < 3 && (
                  <span className="mb-4 text-lg font-bold opacity-50">:</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { PromoBanner6 };
```
