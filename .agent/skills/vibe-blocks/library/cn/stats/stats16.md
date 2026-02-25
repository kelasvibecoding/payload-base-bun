# Stats 16

## Metadata
- **Category**: Stats
- **Objective**: Performance metrics with interactive line chart visualization
- **Use Case**: Business analytics dashboard with data visualization
- **Visual Style**: Centered layout with line chart and key performance indicators
- **Interactivity**: Interactive chart with hover tooltips and data points

## Description
A comprehensive stats section featuring an interactive line chart with monthly data visualization. Displays three key performance indicators (SEO optimization, pre-built blocks, developer trust) alongside a responsive line chart showing desktop metrics. Includes smooth animations, hover effects, and professional data visualization using Recharts. Perfect for analytics dashboards and performance reporting.

## Source Code
```tsx
"use client";

import React from "react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import { cn } from "@/lib/utils";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface StatItem {
  title: string;
  description: string;
}

const statsData: StatItem[] = [
  {
    title: "100%",
    description: "Pre-Optimised for SEO",
  },
  {
    title: "750+",
    description: "Pre Built Blocks",
  },
  {
    title: "85k+",
    description: "Developers Trust",
  },
];

interface Stats16Props {
  className?: string;
}

const Stats16 = ({ className }: Stats16Props) => {
  return (
    <section className={cn("overflow-hidden py-32", className)}>
      <div className="container flex w-full flex-col items-center justify-center px-4">
        <p className="mb-4 rounded-full bg-muted px-2 py-1 text-xs uppercase">
          STATS
        </p>
        <h2 className="relative py-2 text-center font-sans text-4xl font-semibold tracking-tighter lg:text-5xl">
          Stats That Show the Difference
        </h2>
        <p className="mx-auto max-w-xl px-5 text-center text-sm text-muted-foreground lg:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut
        </p>

        <div className="my-20 h-[30vh] w-full max-w-xl">
          <ChartLineDots />
        </div>
        <div className="flex w-full max-w-2xl items-center justify-between">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="flex w-25 flex-col items-center justify-center gap-2 text-center"
            >
              <h2 className="text-3xl font-semibold tracking-tighter md:text-5xl">
                {stat.title}
              </h2>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

const ChartLineDots = () => {
  return (
    <ChartContainer config={chartConfig} className="h-full w-full">
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Line
          dataKey="desktop"
          type="natural"
          stroke="var(--color-desktop)"
          strokeWidth={2}
          dot={{
            fill: "var(--color-desktop)",
          }}
          activeDot={{
            r: 6,
          }}
        />
      </LineChart>
    </ChartContainer>
  );
};

export { Stats16 };
```
