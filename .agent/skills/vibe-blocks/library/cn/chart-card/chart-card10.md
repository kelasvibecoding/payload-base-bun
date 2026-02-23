# Chart Card 10

## Metadata
- **Category**: Chart Card
- **Objective**: Stacked bar chart for displaying cumulative contributions across categories.
- **Use Case**: Acquisition channel analysis, multi-source attribution, contribution breakdowns, marketing analytics.
- **Visual Style**: Card-based layout with stacked vertical bars, color-coded series, legend, and responsive design.
- **Interactivity**: Hover tooltips displaying data points for all series, legend for series identification.

## Description
A stacked bar chart card featuring bars that are divided into segments to show the contribution of each data series to the total. Includes a Cartesian grid, X and Y axes with formatted ticks, interactive tooltips that display values for all series, and a legend to identify each data series. The chart displays organic, paid, and referral traffic data with color-coded stacked bars showing the cumulative total for each month.

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

interface ChartCard10Props {
  title?: string;
  description?: string;
  className?: string;
}

const chartData = [
  { month: "Jan", organic: 186, paid: 80, referral: 45 },
  { month: "Feb", organic: 305, paid: 200, referral: 65 },
  { month: "Mar", organic: 237, paid: 120, referral: 55 },
  { month: "Apr", organic: 273, paid: 190, referral: 70 },
  { month: "May", organic: 209, paid: 130, referral: 50 },
  { month: "Jun", organic: 214, paid: 140, referral: 60 },
];

const chartConfig = {
  organic: {
    label: "Organic",
    color: "var(--chart-1)",
  },
  paid: {
    label: "Paid",
    color: "var(--chart-2)",
  },
  referral: {
    label: "Referral",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

const ChartCard10 = ({
  title = "Acquisition Channels",
  description = "Traffic sources breakdown by month",
  className,
}: ChartCard10Props) => {
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
              dataKey="organic"
              stackId="a"
              fill="var(--color-organic)"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="paid"
              stackId="a"
              fill="var(--color-paid)"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="referral"
              stackId="a"
              fill="var(--color-referral)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export { ChartCard10 };
```
```
