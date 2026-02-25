# Stats 15

## Metadata
- **Category**: Stats
- **Objective**: Interactive year-based performance timeline with animated metrics
- **Use Case**: Company growth dashboard showing yearly progression from 2021-2024
- **Visual Style**: Two-column layout with year selector buttons and animated metric display
- **Interactivity**: Year selection buttons with animated connecting lines and number transitions

## Description
An interactive timeline stats component featuring year-based performance metrics from 2021-2024. Includes a two-column layout with descriptive content on the left and interactive year selector buttons on the right. Features animated connecting lines that move based on selected year, smooth number transitions using NumberFlow, and comprehensive business metrics including revenue, users, growth, customers, and corporate clients.

## Source Code
```tsx
"use client";

import NumberFlow from "@number-flow/react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React, { useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Stats15Props {
  className?: string;
}

const Stats15 = ({ className }: Stats15Props) => {
  const ref = useRef(null);
  const IllustrationRef = useRef(null);
  const [selectedYear, setSelectedYear] = useState(2021);

  const Stats = {
    2021: {
      TotalRevenue: 12.3,
      TotalUsers: 0.3,
      CompanyGrowth: 300,
      NewCustomers: 100,
      BigCorpClients: 10,
      PathHeight: 0,
    },
    2022: {
      TotalRevenue: 105,
      TotalUsers: 50,
      CompanyGrowth: 30,
      NewCustomers: 1.5,
      BigCorpClients: 75,
      PathHeight: 55,
    },
    2023: {
      TotalRevenue: 250,
      TotalUsers: 120,
      CompanyGrowth: 45,
      NewCustomers: 2.8,
      BigCorpClients: 150,
      PathHeight: 105,
    },
    2024: {
      TotalRevenue: 500,
      TotalUsers: 300,
      CompanyGrowth: 65,
      NewCustomers: 4.2,
      BigCorpClients: 250,
      PathHeight: 160,
    },
  };

  const years = Object.keys(Stats).map(Number);

  return (
    <section className={cn("py-32", className)}>
      <div className="container flex flex-col md:flex-row">
        <div className="z-10 md:flex-1">
          <h1 className="font-cal max-w-xl text-5xl font-medium tracking-tighter md:text-6xl">
            Numbers don&apos;t Lie
          </h1>
          <p className="mt-4 max-w-xl text-muted-foreground/80">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad,
            distinctio eius incidunt doloribus quam velit sint sed alias,
          </p>
          <div className="my-10 flex gap-4">
            <Button
              variant="secondary"
              className="text-md group flex w-fit items-center justify-center gap-2 rounded-full px-4 py-1 tracking-tight"
            >
              <span>Documentation</span>
              <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
            </Button>
            <Button
              variant="default"
              className="text-md group flex w-fit items-center justify-center gap-2 rounded-full px-4 py-1 tracking-tight"
            >
              <span>Get Started</span>
              <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
            </Button>
          </div>
          <div
            ref={ref}
            className="mt-12 flex max-w-3xl flex-col items-end bg-background md:mt-32 xl:bg-transparent"
          >
            <div className="mt-auto mb-10 grid w-full grid-cols-2 gap-4 md:grid-cols-4">
              <div className="w-full text-left">
                <h2 className="text-4xl font-medium lg:text-5xl">
                  <NumberFlow
                    value={Stats[selectedYear as keyof typeof Stats].TotalUsers}
                    suffix="k+"
                  />
                </h2>
                <p className="text-sm whitespace-pre text-muted-foreground/70">
                  {" "}
                  Team Members{" "}
                </p>
              </div>
              <div className="w-full text-left">
                <h2 className="text-4xl font-medium lg:text-5xl">
                  <NumberFlow
                    value={
                      Stats[selectedYear as keyof typeof Stats].CompanyGrowth
                    }
                    suffix="%"
                  />
                </h2>
                <p className="text-sm whitespace-pre text-muted-foreground/70">
                  {" "}
                  Company Growth{" "}
                </p>
              </div>
              <div className="w-full text-left">
                <h2 className="text-4xl font-medium lg:text-5xl">
                  <NumberFlow
                    value={
                      Stats[selectedYear as keyof typeof Stats].NewCustomers
                    }
                    suffix="M"
                  />
                </h2>
                <p className="text-sm whitespace-pre text-muted-foreground/70">
                  {" "}
                  New Customers{" "}
                </p>
              </div>
              <div ref={IllustrationRef} className="w-full text-left">
                <h2 className="text-4xl font-medium lg:text-5xl">
                  <NumberFlow
                    value={
                      Stats[selectedYear as keyof typeof Stats].BigCorpClients
                    }
                    prefix="~"
                    suffix="+"
                  />
                </h2>
                <p className="text-sm whitespace-pre text-muted-foreground/70">
                  {" "}
                  Revenue{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex w-fit flex-row flex-wrap gap-2 md:mt-42 md:flex-col">
          {years.map((year) => (
            <div key={year} className="group">
              <button
                onClick={() => setSelectedYear(year)}
                className={`relative rounded-full px-4 py-1 text-sm transition-all ease-out ${
                  selectedYear === year
                    ? "bg-primary text-primary-foreground md:-translate-x-8"
                    : "bg-muted/70 group-hover:-translate-x-4 group-hover:bg-muted"
                }`}
              >
                {year} - {year + 1}
              </button>
            </div>
          ))}
          <LinkIllustration
            className="absolute bottom-9 -left-14 hidden -translate-x-full -translate-y-full text-orange-500 md:block"
            PathHeight={Stats[selectedYear as keyof typeof Stats].PathHeight}
          />
        </div>
      </div>
    </section>
  );
};

export { Stats15 };

const LinkIllustration = ({ className = "", PathHeight = 0 }) => {
  return (
    <svg
      width="280"
      height="124"
      viewBox="0 0 412 178"
      overflow="visible"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
        key={PathHeight}
        d={`M408.308 ${PathHeight}H294L114.965 274H1`}
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <motion.path
        d={`M408.308 ${PathHeight}H294L114.965 274H1`}
        stroke="black"
        strokeWidth="1.5"
        opacity="0.1"
      />
      <circle cx="408.309" cy={PathHeight} r="5" fill="currentColor" />
      <circle cx="2" cy="274" r="5" fill="currentColor" />
    </svg>
  );
};
```
