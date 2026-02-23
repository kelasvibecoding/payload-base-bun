# Chart Card 8

## Metadata
- **Category**: Chart Card
- **Objective**: Grouped bar chart for comparing multiple categories across time periods.
- **Use Case**: Platform traffic comparison, multi-category analysis, side-by-side metric visualization, performance benchmarking.
- **Visual Style**: Card-based layout with grouped vertical bars, color-coded series, legend, and responsive design.
- **Interactivity**: Hover tooltips displaying data points for all series, legend for series identification.

## Description
A grouped bar chart card featuring side-by-side bars for comparing multiple data series across the same categories. Includes a Cartesian grid, X and Y axes with formatted ticks, interactive tooltips that display values for all series, and a legend to identify each data series. The chart displays desktop vs mobile traffic data with color-coded bars for easy comparison.

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
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

interface ChartCard8Props {
  title?: string;
  description?: string;
  className?: string;
}

const chartData = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 273, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 214, mobile: 140 },
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

const ChartCard8 = ({
  title = "Traffic by Platform",
  description = "Desktop vs mobile visitors",
  className,
}: ChartCard8Props) => {
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
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="desktop"
              fill="var(--color-desktop)"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="mobile"
              fill="var(--color-mobile)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export { ChartCard8 };
```
