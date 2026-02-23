# Chart Card 13

## Metadata
- **Category**: Chart Card
- **Objective**: Bar chart with positive and negative values for displaying net changes, gains and losses.
- **Use Case**: Profit/loss tracking, net change visualization, financial performance, monthly gain/loss analysis.
- **Visual Style**: Card-based layout with vertical bars, bidirectional chart (positive/negative), reference line at zero, and responsive design.
- **Interactivity**: Hover tooltips displaying formatted values with gain/loss indicators, color-coded bars (positive/negative).

## Description
A bar chart card featuring vertical bars that extend both above and below zero for displaying net changes, gains and losses. Includes a Cartesian grid, X and Y axes with formatted ticks, a reference line at y=0 to clearly separate positive and negative values, and interactive tooltips that display formatted values with gain/loss indicators. The chart displays monthly net change data with color-coded bars (green for positive/gains, red for negative/losses).

## Source Code
```tsx
"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Cell, ReferenceLine } from "recharts";

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

interface ChartCard13Props {
  title?: string;
  description?: string;
  className?: string;
}

const chartData = [
  { month: "Jan", value: 2400 },
  { month: "Feb", value: -1398 },
  { month: "Mar", value: 3200 },
  { month: "Apr", value: -2780 },
  { month: "May", value: 1890 },
  { month: "Jun", value: 2390 },
  { month: "Jul", value: -1490 },
  { month: "Aug", value: 3490 },
];

const chartConfig = {
  value: {
    label: "Net Change",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

const ChartCard13 = ({
  title = "Monthly Net Change",
  description = "Profit and loss by month",
  className,
}: ChartCard13Props) => {
  return (
    <Card className={cn("max-w-2xl w-full", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-64 w-full">
          <BarChart
            data={chartData}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
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
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <ReferenceLine y={0} stroke="var(--border)" strokeWidth={1} />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  formatter={(value) => {
                    const num = Number(value);
                    return `$${Math.abs(num).toLocaleString()}${num < 0 ? " (loss)" : " (gain)"}`;
                  }}
                />
              }
            />
            <Bar dataKey="value" radius={[4, 4, 4, 4]}>
              {chartData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={entry.value >= 0 ? "var(--chart-1)" : "var(--chart-5)"}
                />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export { ChartCard13 };
```
