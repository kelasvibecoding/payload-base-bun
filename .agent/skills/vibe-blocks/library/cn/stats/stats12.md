# Stats 12

## Metadata
- **Category**: Stats
- **Objective**: Interactive financial performance dashboard with toggle functionality
- **Use Case**: Business analytics dashboard showing monthly vs yearly financial metrics
- **Visual Style**: Two-column layout with animated number flow and interactive toggle button
- **Interactivity**: Toggle between monthly and yearly statistics with smooth number animations

## Description
An advanced interactive stats dashboard featuring animated number transitions between monthly and yearly financial metrics. Includes a prominent revenue display, toggle functionality for switching time periods, and a grid of supporting metrics. Features smooth animations using Framer Motion and NumberFlow for professional data visualization.

## Source Code
```tsx
"use client";

import NumberFlow from "@number-flow/react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, RefreshCcw } from "lucide-react";
import { useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

const STATS = {
  monthly: {
    TotalRevenue: 12.3,
    TotalUsers: 0.3,
    CompanyGrowth: 300,
    NewCustomers: 100,
    BigCorpClients: 10,
  },
  yearly: {
    TotalRevenue: 105,
    TotalUsers: 50,
    CompanyGrowth: 30,
    NewCustomers: 1.5,
    BigCorpClients: 75,
  },
} as const;

const ZERO_STATS = {
  monthly: {
    TotalRevenue: 0,
    TotalUsers: 0,
    CompanyGrowth: 0,
    NewCustomers: 0,
    BigCorpClients: 0,
  },
  yearly: {
    TotalRevenue: 0,
    TotalUsers: 0,
    CompanyGrowth: 0,
    NewCustomers: 0,
    BigCorpClients: 0,
  },
};

interface Stats12Props {
  className?: string;
}

const Stats12 = ({ className }: Stats12Props) => {
  const [showMonthlyStats, setShowMonthlyStats] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const stats = isInView ? STATS : ZERO_STATS;

  return (
    <section className={cn("py-32", className)}>
      <div className="container flex justify-center">
        <div className="flex w-full flex-col justify-between gap-4 lg:flex-row">
          <div className="w-full lg:w-1/3">
            <h1 className="w-full font-calSans text-6xl font-medium">
              We don't just talk we Deliver Results
            </h1>
            <p className="my-4 text-lg tracking-tight text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              perferendis deserunt quis excepturi reiciendis nulla?
            </p>
            <Button
              variant="secondary"
              className="text-md group mt-10 flex w-fit items-center justify-center gap-2 rounded-full px-6 py-1 tracking-tight shadow-none"
            >
              <span>Get Started With Us</span>
              <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
            </Button>
            <div className="mt-10 lg:w-[115%]">
              <Graph />
            </div>
          </div>
          <div ref={ref} className="flex w-full flex-col items-end lg:w-1/2">
            <h1 className="font-calSans text-8xl leading-0 lg:text-[10rem]">
              <NumberFlow
                value={
                  showMonthlyStats
                    ? stats.monthly.TotalRevenue
                    : stats.yearly.TotalRevenue
                }
                prefix="$"
                suffix="M"
                className="font-calSans"
              />
            </h1>
            <div className="mb-6 flex flex-col items-center justify-center gap-6 lg:flex-row lg:gap-17">
              <p>And its just in a year</p>
              <Button
                variant="secondary"
                className="text-md group flex w-fit items-center justify-center gap-2 rounded-full px-6 py-1 tracking-tight shadow-none transition-all duration-300 ease-out active:scale-95"
                onClick={() => setShowMonthlyStats(!showMonthlyStats)}
              >
                <span>Show Monthly Stats</span>
                <RefreshCcw className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
              </Button>
            </div>
            <div className="mt-auto mb-10 grid w-full grid-cols-2 gap-14">
              <div className="text-left">
                <h2 className="text-4xl font-medium lg:text-6xl">
                  <NumberFlow
                    value={
                      showMonthlyStats
                        ? stats.monthly.TotalUsers
                        : stats.yearly.TotalUsers
                    }
                    suffix="k+"
                  />
                </h2>
                <p className="text-muted-foreground/70"> Team Members </p>
              </div>
              <div className="text-right">
                <h2 className="text-4xl font-medium lg:text-6xl">
                  <NumberFlow
                    value={
                      showMonthlyStats
                        ? stats.monthly.CompanyGrowth
                        : stats.yearly.CompanyGrowth
                    }
                    suffix="%"
                  />
                </h2>
                <p className="text-muted-foreground/70"> Company Growth </p>
              </div>
              <div className="text-left">
                <h2 className="text-4xl font-medium lg:text-6xl">
                  <NumberFlow
                    value={
                      showMonthlyStats
                        ? stats.monthly.NewCustomers
                        : stats.yearly.NewCustomers
                    }
                    suffix="M"
                  />
                </h2>
                <p className="text-muted-foreground/70"> New Customers </p>
              </div>
              <div className="text-right">
                <h2 className="text-4xl font-medium lg:text-6xl">
                  <NumberFlow
                    value={
                      showMonthlyStats
                        ? stats.monthly.BigCorpClients
                        : stats.yearly.BigCorpClients
                    }
                    prefix="~"
                    suffix="+"
                  />
                </h2>
                <p className="text-muted-foreground/70"> Revenue </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Stats12 };

function Graph() {
  return (
    <div className="wrapper">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 644 388"
        initial={{
          clipPath: "inset(0px 100% 0px 0px)",
        }}
        animate={{
          clipPath: "inset(0px 0% 0px 0px)",
        }}
        transition={{
          duration: 1,
          type: "spring",
          damping: 18,
        }}
      >
        <g clipPath="url(#grad)">
          <path
            d="M1 118.5C1 118.5 83.308 102.999 114.735 89.4998C146.162 76.0008 189.504 87.7868 235.952 77.4998C273.548 69.1718 294.469 62.4938 329.733 46.9998C409.879 11.7848 452.946 30.9998 483.874 22.4998C514.802 13.9998 635.97 0.84884 644 1.49984"
            stroke="#0090FF"
            strokeWidth="2"
          />
          <path
            d="M113.912 89.4888C82.437 102.988 1 118.487 1 118.487V438.477H644V1.49977C635.957 0.849773 514.601 13.9988 483.625 22.4978C452.649 30.9958 409.515 11.7838 329.245 46.9938C293.926 62.4868 272.973 69.1638 235.318 77.4908C188.798 87.7768 145.388 75.9908 113.912 89.4888Z"
            fill="url(#grad)"
          />
        </g>
        <defs>
          <linearGradient
            id="grad"
            x1="321.5"
            y1="0.476773"
            x2="321.5"
            y2="387.477"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#138EED" stopOpacity="0.4" />
            <stop offset="1" stopColor="#058FFB" stopOpacity="0" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
}
```
