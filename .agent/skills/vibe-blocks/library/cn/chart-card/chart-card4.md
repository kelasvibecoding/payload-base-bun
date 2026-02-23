# Chart Card 4

## Metadata
- **Category**: Chart Card
- **Objective**: Horizontal bar chart for displaying ranked categorical data with clear visual hierarchy.
- **Use Case**: Browser usage statistics, platform comparisons, ranked data visualization, user agent analytics.
- **Visual Style**: Card-based layout with horizontal bar chart, grid lines, and responsive design.
- **Interactivity**: Hover tooltips displaying data points, static data display.

## Description
A horizontal bar chart card featuring bars that extend from left to right for displaying ranked categorical data. Includes a Cartesian grid, Y-axis for categories and X-axis for values, and interactive tooltips that appear on hover. The chart displays browser usage statistics with a vertical layout that makes it easy to compare values across different categories.

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

interface ChartCard4Props {
  title?: string;
  description?: string;
  className?: string;
}

const chartData = [
  { name: "Chrome", value: 4520 },
  { name: "Safari", value: 3210 },
  { name: "Firefox", value: 1890 },
  { name: "Edge", value: 1240 },
  { name: "Other", value: 680 },
];

const chartConfig = {
  value: {
    label: "Users",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

const ChartCard4 = ({
  title = "Browser Usage",
  description = "Users by browser type",
  className,
}: ChartCard4Props) => {
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
            layout="vertical"
            margin={{ top: 0, right: 10, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis type="number" axisLine={false} tickLine={false} fontSize={12} />
            <YAxis
              type="category"
              dataKey="name"
              axisLine={false}
              tickLine={false}
              fontSize={12}
              width={80}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar
              dataKey="value"
              fill="var(--color-value)"
              radius={[0, 4, 4, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export { ChartCard4 };
```
