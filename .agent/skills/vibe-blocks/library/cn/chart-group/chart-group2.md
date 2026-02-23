# Chart Group 2

## Metadata
- **Category**: Chart Group
- **Objective**: Multi-chart dashboard layout with main overview and supporting metrics.
- **Use Case**: Executive dashboards, analytics overview pages, KPI monitoring with detailed breakdowns.
- **Visual Style**: Three-chart layout with main chart spanning full width and two supporting charts side-by-side, responsive grid design.
- **Interactivity**: Static display with hover tooltips on all charts.

## Description
A chart group layout featuring a main revenue overview chart that spans the full width, accompanied by two supporting charts displayed side-by-side below. The main chart is an area chart showing revenue trends over time, while the supporting charts include a horizontal bar chart for sales by category and another horizontal bar chart for traffic sources. All charts include interactive tooltips and responsive design that adapts from a three-chart layout to stacked columns on mobile.

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

interface ChartGroup2Props {
  className?: string;
}

const mainChartData = [
  { month: "Jan", revenue: 18600, orders: 186 },
  { month: "Feb", revenue: 30500, orders: 305 },
  { month: "Mar", revenue: 23700, orders: 237 },
  { month: "Apr", revenue: 27300, orders: 273 },
  { month: "May", revenue: 20900, orders: 209 },
  { month: "Jun", revenue: 31400, orders: 314 },
];

const categoryData = [
  { name: "Electronics", value: 12400 },
  { name: "Clothing", value: 8900 },
  { name: "Home", value: 6200 },
  { name: "Sports", value: 3900 },
];

const sourceData = [
  { name: "Organic", value: 4520 },
  { name: "Paid", value: 3210 },
  { name: "Social", value: 2100 },
  { name: "Referral", value: 1570 },
];

const mainConfig = {
  revenue: { label: "Revenue", color: "var(--chart-1)" },
} satisfies ChartConfig;

const categoryConfig = {
  value: { label: "Sales", color: "var(--chart-2)" },
} satisfies ChartConfig;

const sourceConfig = {
  value: { label: "Visitors", color: "var(--chart-3)" },
} satisfies ChartConfig;

const ChartGroup2 = ({ className }: ChartGroup2Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container grid gap-4 md:grid-cols-2">
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Revenue Overview</CardTitle>
          <CardDescription>Monthly revenue performance</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={mainConfig} className="h-64 w-full">
            <AreaChart data={mainChartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="mainGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--color-revenue)" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="var(--color-revenue)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tickMargin={8} fontSize={12} />
              <YAxis axisLine={false} tickLine={false} tickMargin={8} fontSize={12} tickFormatter={(v) => `$${v / 1000}k`} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area type="monotone" dataKey="revenue" stroke="var(--color-revenue)" strokeWidth={2} fill="url(#mainGradient)" />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sales by Category</CardTitle>
          <CardDescription>Top product categories</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={categoryConfig} className="h-48 w-full">
            <BarChart data={categoryData} layout="vertical" margin={{ top: 0, right: 10, left: 0, bottom: 0 }}>
              <XAxis type="number" axisLine={false} tickLine={false} fontSize={12} tickFormatter={(v) => `$${v / 1000}k`} />
              <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} fontSize={12} width={80} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="value" fill="var(--color-value)" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Traffic Sources</CardTitle>
          <CardDescription>Visitor acquisition channels</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={sourceConfig} className="h-48 w-full">
            <BarChart data={sourceData} layout="vertical" margin={{ top: 0, right: 10, left: 0, bottom: 0 }}>
              <XAxis type="number" axisLine={false} tickLine={false} fontSize={12} />
              <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} fontSize={12} width={80} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="value" fill="var(--color-value)" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
    </section>
  );
};

export { ChartGroup2 };
```
