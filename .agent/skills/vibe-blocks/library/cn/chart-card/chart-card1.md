# Chart Card 1

## Metadata
- **Category**: Chart Card
- **Objective**: Area chart for displaying trends over time with gradient fill and tooltip interactions.
- **Use Case**: Financial data visualization, revenue tracking, analytics dashboards showing continuous data patterns.
- **Visual Style**: Card-based layout with gradient-filled area chart, grid lines, and responsive design.
- **Interactivity**: Hover tooltips displaying data points, static data display.

## Description
An area chart card featuring a gradient-filled area chart for displaying trends over time. Includes a linear gradient that fades from opaque to transparent, Cartesian grid lines, X and Y axes with formatted ticks, and interactive tooltips that appear on hover. The chart displays 12 months of sample revenue data with dollar-formatted Y-axis values.

## Source Code
```tsx
"use client";

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

interface ChartCard1Props {
  title?: string;
  description?: string;
  className?: string;
}

const chartData = [
  { month: "Jan", value: 186 },
  { month: "Feb", value: 305 },
  { month: "Mar", value: 237 },
  { month: "Apr", value: 273 },
  { month: "May", value: 209 },
  { month: "Jun", value: 214 },
  { month: "Jul", value: 286 },
  { month: "Aug", value: 320 },
  { month: "Sep", value: 298 },
  { month: "Oct", value: 342 },
  { month: "Nov", value: 375 },
  { month: "Dec", value: 410 },
];

const chartConfig = {
  value: {
    label: "Revenue",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

const ChartCard1 = ({
  title = "Revenue Over Time",
  description = "Monthly revenue for the current year",
  className,
}: ChartCard1Props) => {
  return (
    <Card className={cn("max-w-2xl w-full", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-64 w-full">
          <AreaChart
            data={chartData}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-value)" stopOpacity={0.3} />
                <stop offset="100%" stopColor="var(--color-value)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="month"
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
              tickFormatter={(value) => `$${value}`}
            />
            <ChartTooltip
              content={<ChartTooltipContent />}
              cursor={{ stroke: "var(--border)", strokeDasharray: "4 4" }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="var(--color-value)"
              strokeWidth={2}
              fill="url(#chartGradient)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export { ChartCard1 };
```
