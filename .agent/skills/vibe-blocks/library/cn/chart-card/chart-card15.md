# Chart Card 15

## Metadata
- **Category**: Chart Card
- **Objective**: Waterfall chart for displaying cumulative changes and final totals.
- **Use Case**: Revenue breakdowns, financial statements, profit/loss analysis, change tracking, cumulative effect visualization.
- **Visual Style**: Card-based layout with waterfall bars, color-coded values (positive/negative/total), value labels, and responsive design.
- **Interactivity**: Hover tooltips displaying change amounts with increase/decrease indicators, color-coded bars.

## Description
A waterfall chart card featuring bars that show the cumulative effect of sequential changes to an initial value. Each bar represents a change (positive or negative) from the previous value, with the final bar showing the total. Includes color-coded bars (green for positive changes, red for negative changes, blue for totals), value labels on each bar, and interactive tooltips that display formatted values with increase/decrease indicators. The chart displays a revenue waterfall with start value, various changes (sales, refunds, expenses, tax), and end value.

## Source Code
```tsx
"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Cell, LabelList } from "recharts";

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

interface ChartCard15Props {
  title?: string;
  description?: string;
  className?: string;
}

// Waterfall chart data - each item shows the change from previous
const rawData = [
  { name: "Start", value: 10000 },
  { name: "Sales", value: 5000 },
  { name: "Refunds", value: -1200 },
  { name: "Expenses", value: -3500 },
  { name: "Tax", value: -800 },
  { name: "End", value: 9500 },
];

// Transform data for waterfall visualization
const chartData = rawData.map((item, index) => {
  if (index === 0 || item.name === "End") {
    return {
      name: item.name,
      value: item.value,
      start: 0,
      isTotal: true,
    };
  }
  
  // Calculate running total up to this point
  let runningTotal = rawData[0].value;
  for (let i = 1; i < index; i++) {
    runningTotal += rawData[i].value;
  }
  
  return {
    name: item.name,
    value: item.value,
    start: item.value >= 0 ? runningTotal : runningTotal + item.value,
    isTotal: false,
  };
});

const chartConfig = {
  value: {
    label: "Amount",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

const ChartCard15 = ({
  title = "Revenue Waterfall",
  description = "Breakdown of revenue changes",
  className,
}: ChartCard15Props) => {
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
            margin={{ top: 20, right: 10, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tickMargin={8}
              fontSize={11}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickMargin={8}
              fontSize={12}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  formatter={(value) => {
                    const num = Number(value);
                    if (num === 0) return null;
                    return `$${Math.abs(num).toLocaleString()}${num < 0 ? " (decrease)" : num > 0 ? " (increase)" : ""}`;
                  }}
                />
              }
            />
            {/* Invisible bar for positioning */}
            <Bar dataKey="start" stackId="a" fill="transparent" />
            {/* Visible bar showing the change */}
            <Bar dataKey="value" stackId="a" radius={[4, 4, 4, 4]}>
              {chartData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={
                    entry.isTotal
                      ? "var(--chart-3)"
                      : entry.value >= 0
                        ? "var(--chart-1)"
                        : "var(--chart-5)"
                  }
                />
              ))}
              <LabelList
                dataKey="value"
                position="top"
                fontSize={10}
                formatter={(value: number) => {
                  if (value === 0) return "";
                  return `$${(Math.abs(value) / 1000).toFixed(1)}k`;
                }}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export { ChartCard15 };
```
