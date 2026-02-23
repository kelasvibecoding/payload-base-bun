# Chart Group 7

## Metadata
- **Category**: Chart Group
- **Objective**: Dashboard layout with KPI stat cards and main revenue chart.
- **Use Case**: Executive dashboards, KPI monitoring, revenue tracking, performance analytics.
- **Visual Style**: Grid of stat cards at top with icons and trend indicators, followed by full-width main chart.
- **Interactivity**: Static display with hover tooltips on charts, trend indicators showing positive/negative changes.

## Description
A chart group layout featuring a grid of four KPI stat cards at the top, each displaying a metric with an icon, current value, and percentage change indicator with trending icon. Below the stat cards is a full-width main chart showing weekly revenue data with gradient fill. Each stat card includes a different metric (Revenue, Orders, Visitors, Customers) with appropriate icons from lucide-react.

## Source Code
```tsx
"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { TrendingUp, TrendingDown, DollarSign, Users, ShoppingCart, Eye } from "lucide-react";

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

interface ChartGroup7Props {
  className?: string;
}

const chartData = [
  { day: "Mon", revenue: 4200, orders: 42, visitors: 1200 },
  { day: "Tue", revenue: 5100, orders: 51, visitors: 1450 },
  { day: "Wed", revenue: 4800, orders: 48, visitors: 1380 },
  { day: "Thu", revenue: 6200, orders: 62, visitors: 1720 },
  { day: "Fri", revenue: 7100, orders: 71, visitors: 1980 },
  { day: "Sat", revenue: 5400, orders: 54, visitors: 1540 },
  { day: "Sun", revenue: 4100, orders: 41, visitors: 1180 },
];

const chartConfig = {
  revenue: { label: "Revenue", color: "var(--chart-1)" },
} satisfies ChartConfig;

const stats = [
  { title: "Revenue", value: "$36,900", change: 12.5, icon: DollarSign },
  { title: "Orders", value: "369", change: 8.2, icon: ShoppingCart },
  { title: "Visitors", value: "10,450", change: -2.1, icon: Eye },
  { title: "Customers", value: "284", change: 15.3, icon: Users },
];

const ChartGroup7 = ({ className }: ChartGroup7Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container space-y-4">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const isPositive = stat.change >= 0;
          return (
            <Card key={index} className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon className="size-4 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    {isPositive ? (
                      <TrendingUp className="size-4 text-green-500" />
                    ) : (
                      <TrendingDown className="size-4 text-red-500" />
                    )}
                    <span className={isPositive ? "text-green-500" : "text-red-500"}>
                      {isPositive ? "+" : ""}{stat.change}%
                    </span>
                  </div>
                </div>
                <p className="mt-1 text-2xl font-bold">{stat.value}</p>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Weekly Revenue</CardTitle>
          <CardDescription>Daily revenue for the past week</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-64 w-full">
            <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="weeklyGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--color-revenue)" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="var(--color-revenue)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="day" axisLine={false} tickLine={false} tickMargin={8} fontSize={12} />
              <YAxis axisLine={false} tickLine={false} tickMargin={8} fontSize={12} tickFormatter={(v) => `$${v / 1000}k`} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area type="monotone" dataKey="revenue" stroke="var(--color-revenue)" strokeWidth={2} fill="url(#weeklyGradient)" />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
    </section>
  );
};

export { ChartGroup7 };
```
