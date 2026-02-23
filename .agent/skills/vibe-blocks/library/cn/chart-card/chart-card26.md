# Chart Card 26

## Metadata
- **Category**: Chart Card
- **Objective**: Area chart with target band for displaying performance within acceptable ranges.
- **Use Case**: Revenue tracking with target ranges, KPI monitoring with acceptable bands, performance control charts, process monitoring.
- **Visual Style**: Card-based layout with area chart, gradient fill, reference area for target band, multiple reference lines, and responsive design.
- **Interactivity**: Hover tooltips displaying data points, static target band and lines.

## Description
An area chart card featuring a gradient-filled area chart with a target band (reference area) showing acceptable performance ranges. Includes upper and lower bound reference lines, a target reference line, a Cartesian grid, X and Y axes with formatted ticks, interactive tooltips, and a legend explaining the chart elements. The chart displays revenue data with a target band highlighting when performance is within acceptable ranges.

## Source Code
```tsx
"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis, ReferenceLine, ReferenceArea } from "recharts";

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

interface ChartCard26Props {
  title?: string;
  description?: string;
  target?: number;
  upperBound?: number;
  lowerBound?: number;
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
  { month: "Sep", value: 298 },
  { month: "Oct", value: 342 },
];

const chartConfig = {
  value: {
    label: "Revenue",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

const ChartCard26 = ({
  title = "Revenue with Target Band",
  description = "Monthly revenue within acceptable range",
  target = 280,
  upperBound = 320,
  lowerBound = 240,
  className,
}: ChartCard26Props) => {
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
              <linearGradient id="chartGradient26" x1="0" y1="0" x2="0" y2="1">
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
              domain={[150, 400]}
            />
            {/* Target band */}
            <ReferenceArea
              y1={lowerBound}
              y2={upperBound}
              fill="var(--chart-2)"
              fillOpacity={0.1}
            />
            {/* Target line */}
            <ReferenceLine
              y={target}
              stroke="var(--chart-2)"
              strokeDasharray="4 4"
              strokeWidth={2}
            />
            {/* Upper bound */}
            <ReferenceLine
              y={upperBound}
              stroke="var(--chart-2)"
              strokeOpacity={0.4}
              strokeWidth={1}
            />
            {/* Lower bound */}
            <ReferenceLine
              y={lowerBound}
              stroke="var(--chart-2)"
              strokeOpacity={0.4}
              strokeWidth={1}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="var(--color-value)"
              strokeWidth={2}
              fill="url(#chartGradient26)"
            />
          </AreaChart>
        </ChartContainer>
        {/* Legend */}
        <div className="mt-4 flex items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="h-0.5 w-4 bg-[var(--chart-1)]" />
            <span className="text-muted-foreground">Revenue</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-0.5 w-4 border-t-2 border-dashed border-[var(--chart-2)]" />
            <span className="text-muted-foreground">Target ({target})</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-4 rounded-sm bg-[var(--chart-2)] opacity-20" />
            <span className="text-muted-foreground">Range ({lowerBound}-{upperBound})</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export { ChartCard26 };
```
