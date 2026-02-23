# Chart Card 25

## Metadata
- **Category**: Chart Card
- **Objective**: Area chart with target reference line for displaying performance against goals.
- **Use Case**: Revenue tracking with targets, KPI monitoring, goal achievement visualization, performance benchmarking.
- **Visual Style**: Card-based layout with area chart, gradient fill, target reference line, and responsive design.
- **Interactivity**: Hover tooltips displaying data points, static target line display.

## Description
An area chart card featuring a gradient-filled area chart with a horizontal reference line showing a target value. Includes a Cartesian grid, X and Y axes with formatted ticks, interactive tooltips, and a dashed reference line displaying the target value with label. The chart displays monthly revenue data with a target benchmark line, making it easy to see when performance meets or exceeds goals.

## Source Code
```tsx
"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis, ReferenceLine } from "recharts";

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

interface ChartCard25Props {
  title?: string;
  description?: string;
  target?: number;
  className?: string;
}

const chartData = [
  { month: "Jan", value: 186 },
  { month: "Feb", value: 305 },
  { month: "Mar", value: 237 },
  { month: "Apr", value: 273 },
  { month: "May", value: 209 },
  { month: "Jun", value: 314 },
  { month: "Jul", value: 286 },
  { month: "Aug", value: 320 },
];

const chartConfig = {
  value: {
    label: "Revenue",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

const ChartCard25 = ({
  title = "Revenue vs Target",
  description = "Monthly revenue with target benchmark",
  target = 280,
  className,
}: ChartCard25Props) => {
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
              <linearGradient id="chartGradient25" x1="0" y1="0" x2="0" y2="1">
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
            />
            <ReferenceLine
              y={target}
              stroke="var(--chart-5)"
              strokeDasharray="4 4"
              strokeWidth={2}
              label={{
                value: `Target: ${target}`,
                position: "right",
                fill: "var(--muted-foreground)",
                fontSize: 11,
              }}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="var(--color-value)"
              strokeWidth={2}
              fill="url(#chartGradient25)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export { ChartCard25 };
```
