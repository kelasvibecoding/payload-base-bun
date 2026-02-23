# Chart Card 7

## Metadata
- **Category**: Chart Card
- **Objective**: Compact area chart with summary footer displaying trends and metrics.
- **Use Case**: Executive dashboards, KPI tracking, revenue summaries, performance overview cards.
- **Visual Style**: Card-based layout with compact area chart, gradient fill, and footer with trend indicator.
- **Interactivity**: Hover tooltips displaying data points, static trend summary in footer.

## Description
A compact area chart card featuring a gradient-filled area chart with reduced height for dashboard summaries. Includes a card footer with trend indicator showing percentage change and label. The chart displays 6 months of sample revenue data with a clean, minimal design suitable for executive dashboards and KPI tracking.

## Source Code
```tsx
"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { TrendingUp } from "lucide-react";

import { cn } from "@/lib/utils";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface ChartCard7Props {
  title?: string;
  description?: string;
  totalValue?: string;
  changePercent?: number;
  changeLabel?: string;
  className?: string;
}

const chartData = [
  { month: "Jan", value: 186 },
  { month: "Feb", value: 305 },
  { month: "Mar", value: 237 },
  { month: "Apr", value: 273 },
  { month: "May", value: 209 },
  { month: "Jun", value: 314 },
];

const chartConfig = {
  value: {
    label: "Revenue",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

const ChartCard7 = ({
  title = "Total Revenue",
  description = "January - June 2024",
  totalValue = "$1,524",
  changePercent = 12.5,
  changeLabel = "Trending up this period",
  className,
}: ChartCard7Props) => {
  return (
    <Card className={cn("max-w-2xl w-full", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-48 w-full">
          <AreaChart
            data={chartData}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="chartGradient7" x1="0" y1="0" x2="0" y2="1">
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
            <YAxis hide />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="var(--color-value)"
              strokeWidth={2}
              fill="url(#chartGradient7)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex items-center gap-2 text-sm">
        <div className="flex items-center gap-1 font-medium">
          <TrendingUp className="size-4 text-green-500" />
          <span className="text-green-500">+{changePercent}%</span>
        </div>
        <span className="text-muted-foreground">{changeLabel}</span>
      </CardFooter>
    </Card>
  );
};

export { ChartCard7 };
```
