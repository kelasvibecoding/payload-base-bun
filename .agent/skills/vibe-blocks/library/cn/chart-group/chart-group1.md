# Chart Group 1

## Metadata
- **Category**: Chart Group
- **Objective**: Side-by-side chart layout displaying revenue trends and order volume.
- **Use Case**: Dashboard overview with multiple metrics, revenue and order tracking, comparative analytics.
- **Visual Style**: Two-column grid layout with equal-width cards, featuring area chart and bar chart.
- **Interactivity**: Static display with hover tooltips on individual charts.

## Description
A chart group layout featuring two charts displayed side-by-side in a responsive grid. Includes an area chart showing monthly revenue trends with gradient fill, and a bar chart displaying order volume. Both charts include Cartesian grids, formatted axes, and interactive tooltips. The layout adapts from a two-column grid on desktop to stacked columns on mobile.

## Source Code
```tsx
"use client";

import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

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

interface ChartGroup1Props {
  className?: string;
}

const revenueData = [
  { month: "Jan", value: 18600 },
  { month: "Feb", value: 30500 },
  { month: "Mar", value: 23700 },
  { month: "Apr", value: 27300 },
  { month: "May", value: 20900 },
  { month: "Jun", value: 31400 },
];

const ordersData = [
  { month: "Jan", value: 186 },
  { month: "Feb", value: 305 },
  { month: "Mar", value: 237 },
  { month: "Apr", value: 273 },
  { month: "May", value: 209 },
  { month: "Jun", value: 314 },
];

const revenueConfig = {
  value: {
    label: "Revenue",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

const ordersConfig = {
  value: {
    label: "Orders",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

const ChartGroup1 = ({ className }: ChartGroup1Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Revenue</CardTitle>
          <CardDescription>Monthly revenue trends</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={revenueConfig} className="h-64 w-full">
            <AreaChart
              data={revenueData}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="revenueGradient1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--color-value)" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="var(--color-value)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tickMargin={8} fontSize={12} />
              <YAxis axisLine={false} tickLine={false} tickMargin={8} fontSize={12} tickFormatter={(v) => `$${v / 1000}k`} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area type="monotone" dataKey="value" stroke="var(--color-value)" strokeWidth={2} fill="url(#revenueGradient1)" />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Orders</CardTitle>
          <CardDescription>Monthly order volume</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={ordersConfig} className="h-64 w-full">
            <BarChart
              data={ordersData}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tickMargin={8} fontSize={12} />
              <YAxis axisLine={false} tickLine={false} tickMargin={8} fontSize={12} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="value" fill="var(--color-value)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
    </section>
  );
};

export { ChartGroup1 };
```
