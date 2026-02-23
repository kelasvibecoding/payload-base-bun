# Chart Group 5

## Metadata
- **Category**: Chart Group
- **Objective**: Year-over-year comparison chart with summary statistics card.
- **Use Case**: Performance benchmarking, revenue comparison, growth analysis, period-over-period tracking.
- **Visual Style**: Two-column grid layout with main comparison chart and summary statistics card.
- **Interactivity**: Static display with hover tooltips on chart and calculated summary metrics.

## Description
A chart group layout featuring a year-over-year comparison line chart displaying current versus previous year performance, accompanied by a summary statistics card. The main chart shows two lines (current and previous year) with different styling, while the summary card displays totals for each period, difference, growth percentage, and monthly averages. Includes interactive tooltips and a clean, professional design suitable for financial dashboards.

## Source Code
```tsx
"use client";

import { Line, LineChart, CartesianGrid, XAxis, YAxis } from "recharts";

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

interface ChartGroup5Props {
  className?: string;
}

const currentData = [
  { month: "Jan", value: 18600 },
  { month: "Feb", value: 30500 },
  { month: "Mar", value: 23700 },
  { month: "Apr", value: 27300 },
  { month: "May", value: 20900 },
  { month: "Jun", value: 31400 },
];

const previousData = [
  { month: "Jan", value: 15200 },
  { month: "Feb", value: 24800 },
  { month: "Mar", value: 21100 },
  { month: "Apr", value: 22500 },
  { month: "May", value: 19400 },
  { month: "Jun", value: 26200 },
];

const combinedData = currentData.map((item, index) => ({
  month: item.month,
  current: item.value,
  previous: previousData[index].value,
}));

const chartConfig = {
  current: { label: "This Year", color: "var(--chart-1)" },
  previous: { label: "Last Year", color: "var(--chart-4)" },
} satisfies ChartConfig;

const ChartGroup5 = ({ className }: ChartGroup5Props) => {
  const currentTotal = currentData.reduce((sum, item) => sum + item.value, 0);
  const previousTotal = previousData.reduce((sum, item) => sum + item.value, 0);
  const growth = ((currentTotal - previousTotal) / previousTotal * 100).toFixed(1);

  return (
    <section className={cn("py-32", className)}>
      <div className="container grid gap-4 md:grid-cols-3">
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Year over Year Comparison</CardTitle>
          <CardDescription>Revenue performance vs last year</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-64 w-full">
            <LineChart data={combinedData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tickMargin={8} fontSize={12} />
              <YAxis axisLine={false} tickLine={false} tickMargin={8} fontSize={12} tickFormatter={(v) => `$${v / 1000}k`} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Line type="monotone" dataKey="current" stroke="var(--color-current)" strokeWidth={2} dot={{ fill: "var(--color-current)", r: 4 }} />
              <Line type="monotone" dataKey="previous" stroke="var(--color-previous)" strokeWidth={2} strokeDasharray="4 4" dot={{ fill: "var(--color-previous)", r: 4 }} />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Summary</CardTitle>
          <CardDescription>Period comparison</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 font-mono text-sm">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">This Year</span>
            <span className="font-semibold">${currentTotal.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Last Year</span>
            <span className="text-muted-foreground">${previousTotal.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Difference</span>
            <span className="text-green-500">+${(currentTotal - previousTotal).toLocaleString()}</span>
          </div>
          <div className="border-t pt-3">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Growth</span>
              <span className="font-semibold text-green-500">+{growth}%</span>
            </div>
          </div>
          <div className="border-t pt-3 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Avg/Month (This)</span>
              <span>${Math.round(currentTotal / 6).toLocaleString()}</span>
            </div>
            <div className="mt-1 flex items-center justify-between">
              <span className="text-muted-foreground">Avg/Month (Last)</span>
              <span className="text-muted-foreground">${Math.round(previousTotal / 6).toLocaleString()}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
    </section>
  );
};

export { ChartGroup5 };
```
