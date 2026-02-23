# Chart Group 8

## Metadata
- **Category**: Chart Group
- **Objective**: Multi-section dashboard layout with KPI cards, progress charts, and performance metrics.
- **Use Case**: Executive dashboards, comprehensive analytics, KPI monitoring, performance tracking, goal progress visualization.
- **Visual Style**: Multi-section layout with stat cards, comparison charts, progress indicators, and performance metrics grid.
- **Interactivity**: Static display with hover tooltips on charts, progress indicators, and calculated metrics.

## Description
A comprehensive chart group layout featuring multiple sections: a weekly comparison chart spanning two columns, a monthly goal progress chart with circular progress indicator, a quick stats card, and a full-width performance metrics section with progress bars. Includes KPI cards with trend indicators, comparison charts showing current vs previous week data, goal progress visualization, and performance metrics with progress bars toward targets.

## Source Code
```tsx
"use client";

import { Line, LineChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { TrendingUp, TrendingDown } from "lucide-react";

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

interface ChartGroup8Props {
  className?: string;
}

const weeklyData = [
  { day: "Mon", current: 420, previous: 380 },
  { day: "Tue", current: 510, previous: 450 },
  { day: "Wed", current: 480, previous: 420 },
  { day: "Thu", current: 620, previous: 550 },
  { day: "Fri", current: 710, previous: 620 },
  { day: "Sat", current: 540, previous: 480 },
  { day: "Sun", current: 410, previous: 390 },
];

const performanceData = [
  { metric: "Sales", value: 87, target: 100, fill: "var(--chart-1)" },
  { metric: "Leads", value: 65, target: 100, fill: "var(--chart-2)" },
  { metric: "Conversion", value: 42, target: 100, fill: "var(--chart-3)" },
  { metric: "Retention", value: 91, target: 100, fill: "var(--chart-4)" },
];

const weeklyConfig = {
  current: { label: "This Week", color: "var(--chart-1)" },
  previous: { label: "Last Week", color: "var(--chart-4)" },
} satisfies ChartConfig;

const ChartGroup8 = ({ className }: ChartGroup8Props) => {
  const currentTotal = weeklyData.reduce((sum, d) => sum + d.current, 0);
  const previousTotal = weeklyData.reduce((sum, d) => sum + d.previous, 0);
  const change = ((currentTotal - previousTotal) / previousTotal * 100).toFixed(1);
  const isPositive = Number(change) >= 0;

  return (
    <section className={cn("py-32", className)}>
      <div className="container grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Weekly Comparison - spans 2 cols */}
      <Card className="lg:col-span-2">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base">Weekly Comparison</CardTitle>
                <CardDescription>This week vs last week</CardDescription>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">{currentTotal.toLocaleString()}</p>
                <div className="flex items-center justify-end gap-1 text-sm">
                  {isPositive ? (
                    <TrendingUp className="size-4 text-green-500" />
                  ) : (
                    <TrendingDown className="size-4 text-red-500" />
                  )}
                  <span className={isPositive ? "text-green-500" : "text-red-500"}>
                    {isPositive ? "+" : ""}{change}%
                  </span>
                </div>
              </div>
            </div>
        </CardHeader>
          <CardContent>
            <ChartContainer config={weeklyConfig} className="h-52 w-full">
              <LineChart data={weeklyData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tickMargin={8} fontSize={12} />
                <YAxis axisLine={false} tickLine={false} tickMargin={8} fontSize={12} />
              <ChartTooltip content={<ChartTooltipContent />} />
                <Line type="monotone" dataKey="current" stroke="var(--color-current)" strokeWidth={2} dot={{ fill: "var(--color-current)", r: 4 }} />
                <Line type="monotone" dataKey="previous" stroke="var(--color-previous)" strokeWidth={2} strokeDasharray="4 4" dot={{ fill: "var(--color-previous)", r: 3 }} />
              </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>

        {/* Monthly Goal Progress */}
      <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Monthly Goal</CardTitle>
            <CardDescription>Revenue target progress</CardDescription>
        </CardHeader>
          <CardContent className="flex flex-col items-center justify-center">
            <div className="relative flex size-36 items-center justify-center">
              <svg className="size-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  className="stroke-muted"
                  strokeWidth="8"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  className="stroke-chart-1"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${73 * 2.51} ${100 * 2.51}`}
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-2xl font-bold">73%</span>
                <span className="text-xs text-muted-foreground">of goal</span>
                </div>
            </div>
            <p className="mt-2 text-center text-sm text-muted-foreground">
              $36,500 / $50,000
            </p>
        </CardContent>
      </Card>

        {/* Quick Stats */}
      <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Quick Stats</CardTitle>
            <CardDescription>Key metrics overview</CardDescription>
        </CardHeader>
          <CardContent className="space-y-4">
            {[
              { label: "Avg. Order", value: "$142", change: 8.5 },
              { label: "New Customers", value: "284", change: 12.3 },
              { label: "Repeat Rate", value: "34%", change: -2.1 },
            ].map((stat, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{stat.label}</span>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{stat.value}</span>
                  <span className={cn("text-xs", stat.change >= 0 ? "text-green-500" : "text-red-500")}>
                    {stat.change >= 0 ? "+" : ""}{stat.change}%
                  </span>
                </div>
              </div>
            ))}
        </CardContent>
      </Card>

        {/* Performance Metrics - spans full width */}
        <Card className="lg:col-span-4">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Performance Metrics</CardTitle>
            <CardDescription>Progress towards quarterly targets</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {performanceData.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{item.metric}</span>
                    <span className="text-sm text-muted-foreground">{item.value}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${item.value}%`, backgroundColor: item.fill }}
                    />
                  </div>
                </div>
              ))}
            </div>
        </CardContent>
      </Card>
    </div>
    </section>
  );
};

export { ChartGroup8 };
```
