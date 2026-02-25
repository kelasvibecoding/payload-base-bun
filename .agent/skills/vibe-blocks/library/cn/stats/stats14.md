# Stats 14

## Metadata
- **Category**: Stats
- **Objective**: Countdown timer with promotional messaging
- **Use Case**: Product launch countdown or limited-time offer display
- **Visual Style**: Dotted border container with countdown timer and call-to-action
- **Interactivity**: Live countdown timer with days, hours, minutes, seconds

## Description
A promotional stats section featuring a live countdown timer. Displays a dotted border container with promotional text ("50 new blocks every month"), an animated countdown to a specified end date, and a call-to-action button. The countdown shows days, hours, minutes, and seconds with smooth number animations using Framer Motion and NumberFlow.

## Source Code
```tsx
"use client";

import NumberFlow from "@number-flow/react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
const MotionNumberFlow = motion.create(NumberFlow);

const Stats14 = () => {
  return (
    <section className="py-32">
      <div className="container flex items-center justify-center">
        <DottedDiv className="h-114 w-full">
          <div className="flex h-full w-full flex-col items-center justify-center bg-muted/30">
            <p className="tracking-tight opacity-50 md:text-lg">
              50 new blocks every month
            </p>
            <AnimatedNumberCountdown
              endDate={new Date("2025-12-31")}
              className="my-4"
            />
            <Button
              variant="secondary"
              className="text-md group mt-7 flex w-fit items-center justify-center gap-2 rounded-full px-4 py-1 tracking-tight shadow-none"
            >
              <span>Join The Waitlist</span>
              <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
            </Button>
          </div>
        </DottedDiv>
      </div>
    </section>
  );
};

export { Stats14 };

const DottedDiv = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn("relative h-full w-full overflow-hidden sm:p-4", className)}
  >
    <div className="absolute top-4 left-0 hidden h-[1.5px] w-[100%] bg-muted sm:block" />
    <div className="absolute bottom-4 left-0 hidden h-[1.5px] w-[100%] bg-muted sm:block" />
    <div className="absolute -top-25 left-4 hidden h-[130%] w-[1.5px] bg-muted sm:block" />
    <div className="absolute -top-25 right-4 hidden h-[130%] w-[1.5px] bg-muted sm:block" />
    <div className="absolute top-[12.5px] left-[12.5px] z-10 hidden size-2 rounded-full bg-foreground sm:block" />
    <div className="absolute top-[12.5px] right-[12.5px] z-10 hidden size-2 rounded-full bg-foreground sm:block" />
    <div className="absolute bottom-[12.5px] left-[12.5px] z-10 hidden size-2 rounded-full bg-foreground sm:block" />
    <div className="absolute right-[12.5px] bottom-[12.5px] z-10 hidden size-2 rounded-full bg-foreground sm:block" />
    {children}
  </div>
);

interface CountdownProps {
  endDate: Date;
  startDate?: Date;
  className?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function AnimatedNumberCountdown({
  endDate,
  startDate,
  className,
}: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const start = startDate ? new Date(startDate) : new Date();
      const end = new Date(endDate);
      const difference = end.getTime() - start.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [endDate, startDate]);

  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className="flex flex-col items-center">
        <MotionNumberFlow
          value={timeLeft.days}
          className="text-3xl font-semibold tracking-tight sm:text-5xl"
          format={{ minimumIntegerDigits: 2 }}
        />
        <span className="text-sm text-gray-500">Days</span>
      </div>
      <div className="text-2xl font-bold">:</div>
      <div className="flex flex-col items-center">
        <MotionNumberFlow
          value={timeLeft.hours}
          className="text-3xl font-semibold tracking-tight sm:text-5xl"
          format={{ minimumIntegerDigits: 2 }}
        />
        <span className="text-sm text-gray-500">Hours</span>
      </div>
      <div className="text-2xl font-bold">:</div>
      <div className="flex flex-col items-center">
        <MotionNumberFlow
          value={timeLeft.minutes}
          className="text-3xl font-semibold tracking-tight sm:text-5xl"
          format={{ minimumIntegerDigits: 2 }}
        />
        <span className="text-sm text-gray-500">Minutes</span>
      </div>
      <div className="text-2xl font-bold">:</div>
      <div className="flex flex-col items-center">
        <MotionNumberFlow
          value={timeLeft.seconds}
          className="text-3xl font-semibold tracking-tight sm:text-5xl"
          format={{ minimumIntegerDigits: 2 }}
        />
        <span className="text-sm text-gray-500">Seconds</span>
      </div>
    </div>
  );
}
```
