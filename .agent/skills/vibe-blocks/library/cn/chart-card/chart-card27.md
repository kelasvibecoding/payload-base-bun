# Chart Card 27

## Metadata
- **Category**: Chart Card
- **Objective**: Area chart with threshold zones for displaying performance across different risk/alert levels.
- **Use Case**: System monitoring, CPU usage tracking, performance alerting, threshold visualization, zone-based analytics.
- **Visual Style**: Card-based layout with area chart, gradient fill, multiple reference areas for zones, and responsive design.
- **Interactivity**: Hover tooltips displaying data points, static zone visualization with color-coded backgrounds.

## Description
An area chart card featuring multiple colored background zones to represent different threshold levels (normal, warning, critical). Includes a gradient-filled area chart, Cartesian grid, X and Y axes with formatted ticks, interactive tooltips, and a legend explaining the zone colors. The chart displays system load data with color-coded backgrounds highlighting normal, warning, and critical performance zones.

## Source Code
```tsx
"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis, ReferenceArea } from "recharts";

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

interface ChartCard27Props {
  title?: string;
  description?: string;
  className?: string;
}

const chartData = [
  { time: "00:00", value: 45 },
  { time: "04:00", value: 52 },
  { time: "08:00", value: 78 },
  { time: "12:00", value: 95 },
  { time: "16:00", value: 88 },
  { time: "20:00", value: 72 },
  { time: "24:00", value: 58 },
];

const chartConfig = {
  value: {
    label: "CPU Usage",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

const ChartCard27 = ({
  title = "System Load",
  description = "CPU usage with threshold zones",
  className,
}: ChartCard27Props) => {
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
              <linearGradient id="chartGradient27" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-value)" stopOpacity={0.3} />
                <stop offset="100%" stopColor="var(--color-value)" stopOpacity={0} />
              </linearGradient>
            </defs>
            {/* Zone backgrounds */}
            <ReferenceArea
              y1={0}
              y2={60}
              fill="var(--chart-1)"
              fillOpacity={0.05}
            />
            <ReferenceArea
              y1={60}
              y2={80}
              fill="var(--chart-4)"
              fillOpacity={0.1}
            />
            <ReferenceArea
              y1={80}
              y2={100}
              fill="var(--chart-5)"
              fillOpacity={0.15}
            />
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="time"
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
              domain={[0, 100]}
              tickFormatter={(value) => `${value}%`}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  formatter={(value) => `${value}%`}
                />
              }
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="var(--color-value)"
              strokeWidth={2}
              fill="url(#chartGradient27)"
            />
          </AreaChart>
        </ChartContainer>
        {/* Zone legend */}
        <div className="mt-4 flex items-center justify-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <div className="size-3 rounded-sm bg-chart-1/20" />
            Normal (0-60%)
          </span>
          <span className="flex items-center gap-1.5">
            <div className="size-3 rounded-sm bg-chart-4/30" />
            Warning (60-80%)
          </span>
          <span className="flex items-center gap-1.5">
            <div className="size-3 rounded-sm bg-chart-5/40" />
            Critical (80-100%)
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export { ChartCard27 };
```
