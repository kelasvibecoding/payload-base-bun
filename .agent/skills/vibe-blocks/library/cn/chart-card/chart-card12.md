# Chart Card 12

## Metadata
- **Category**: Chart Card
- **Objective**: Stacked bar chart for displaying financial breakdowns across time periods.
- **Use Case**: Quarterly financial reports, revenue/cost/profit analysis, business performance tracking, financial dashboards.
- **Visual Style**: Card-based layout with stacked vertical bars, color-coded series, legend, and responsive design.
- **Interactivity**: Hover tooltips displaying data points for all series, legend for series identification.

## Description
A stacked bar chart card featuring bars that are divided into segments to show the contribution of revenue, costs, and profit for each quarter. The stacked design allows viewers to see both the individual components and the total value for each period. Includes a Cartesian grid, X-axis for quarters, interactive tooltips that display values for all series, and a legend to identify each data series. The chart displays quarterly financial data with color-coded segments showing revenue, costs, and profit stacked together.

## Source Code
```tsx
"use client";

import { Bar, BarChart, XAxis } from "recharts";

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

interface ChartCard12Props {
  title?: string;
  description?: string;
  className?: string;
}

const chartData = [
  { quarter: "Q1", revenue: 4200, costs: 2800, profit: 1400 },
  { quarter: "Q2", revenue: 5100, costs: 3200, profit: 1900 },
  { quarter: "Q3", revenue: 4800, costs: 3000, profit: 1800 },
  { quarter: "Q4", revenue: 6200, costs: 3800, profit: 2400 },
];

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--chart-1)",
  },
  costs: {
    label: "Costs",
    color: "var(--chart-2)",
  },
  profit: {
    label: "Profit",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

const ChartCard12 = ({
  title = "Quarterly Breakdown",
  description = "Revenue, costs, and profit by quarter",
  className,
}: ChartCard12Props) => {
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
            margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
          >
            <XAxis
              dataKey="quarter"
              axisLine={false}
              tickLine={false}
              tickMargin={8}
              fontSize={12}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="revenue"
              stackId="a"
              fill="var(--color-revenue)"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="costs"
              stackId="a"
              fill="var(--color-costs)"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="profit"
              stackId="a"
              fill="var(--color-profit)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export { ChartCard12 };
```
```
