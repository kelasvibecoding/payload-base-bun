# Chart Card 2

## Metadata
- **Category**: Chart Card
- **Objective**: Interactive area chart with time period tabs for dynamic data switching.
- **Use Case**: Analytics dashboards requiring time-based filtering (7 days, 30 days, 90 days) for website traffic or similar metrics.
- **Visual Style**: Card-based layout with integrated tab controls in the header, gradient-filled area chart.
- **Interactivity**: Tab-based time period switching with dynamic data updates, hover tooltips.

## Description
An interactive area chart card featuring tab controls (7d, 30d, 90d) for switching between different time periods. Includes a gradient-filled area chart, Cartesian grid lines, X and Y axes, and interactive tooltips. The chart displays website visitor data that dynamically updates based on the selected time period.

## Source Code
```tsx
"use client";

import { useState } from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { cn } from "@/lib/utils";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ChartCard2Props {
  title?: string;
  description?: string;
  className?: string;
}

const chartData = {
  "7d": [
    { day: "Mon", value: 186 },
    { day: "Tue", value: 205 },
    { day: "Wed", value: 237 },
    { day: "Thu", value: 223 },
    { day: "Fri", value: 249 },
    { day: "Sat", value: 214 },
    { day: "Sun", value: 231 },
  ],
  "30d": [
    { day: "Week 1", value: 1420 },
    { day: "Week 2", value: 1650 },
    { day: "Week 3", value: 1580 },
    { day: "Week 4", value: 1820 },
  ],
  "90d": [
    { day: "Jan", value: 4200 },
    { day: "Feb", value: 4800 },
    { day: "Mar", value: 5100 },
  ],
};

const chartConfig = {
  value: {
    label: "Visitors",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

const ChartCard2 = ({
  title = "Website Traffic",
  description = "Unique visitors over time",
  className,
}: ChartCard2Props) => {
  const [period, setPeriod] = useState<"7d" | "30d" | "90d">("7d");

  return (
    <Card className={cn("max-w-2xl w-full", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        <Tabs value={period} onValueChange={(v) => setPeriod(v as "7d" | "30d" | "90d")}>
          <TabsList>
            <TabsTrigger value="7d">7d</TabsTrigger>
            <TabsTrigger value="30d">30d</TabsTrigger>
            <TabsTrigger value="90d">90d</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-64 w-full">
          <AreaChart
            data={chartData[period]}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="chartGradient2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-value)" stopOpacity={0.3} />
                <stop offset="100%" stopColor="var(--color-value)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tickMargin={8}
              fontSize={12}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickMargin={8}
              fontSize={12}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="var(--color-value)"
              strokeWidth={2}
              fill="url(#chartGradient2)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export { ChartCard2 };
```
