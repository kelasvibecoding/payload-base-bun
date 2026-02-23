# Chart Card 3

## Metadata
- **Category**: Chart Card
- **Objective**: Bar chart for displaying categorical data comparisons with clear visual hierarchy.
- **Use Case**: Sales performance tracking, monthly comparisons, categorical data visualization, business metrics.
- **Visual Style**: Card-based layout with vertical bar chart, grid lines, and responsive design.
- **Interactivity**: Hover tooltips displaying data points, static data display.

## Description
A bar chart card featuring vertical bars for displaying categorical data comparisons. Includes a Cartesian grid, X and Y axes with formatted ticks, and interactive tooltips that appear on hover. The chart displays 6 months of sample sales data with a clean, professional design suitable for business dashboards and analytics.

## Source Code
```tsx
"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

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

interface ChartCard3Props {
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
];

const chartConfig = {
  value: {
    label: "Sales",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

const ChartCard3 = ({
  title = "Monthly Sales",
  description = "Sales performance by month",
  className,
}: ChartCard3Props) => {
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
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar
              dataKey="value"
              fill="var(--color-value)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export { ChartCard3 };
```
```
