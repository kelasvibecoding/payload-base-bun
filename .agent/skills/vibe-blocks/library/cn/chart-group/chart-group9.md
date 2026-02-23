# Chart Group 9

## Metadata
- **Category**: Chart Group
- **Objective**: Interactive dashboard with selectable metrics and dynamic chart switching.
- **Use Case**: Multi-metric dashboards, dynamic analytics views, KPI exploration, metric comparison.
- **Visual Style**: Card-based layout with select dropdown for metric switching, summary stat cards, and dynamic chart display.
- **Interactivity**: Select dropdown for switching between metrics (Revenue, Orders, Visitors), dynamic chart updates, hover tooltips.

## Description
An interactive chart group layout featuring a select dropdown control for switching between different metrics (Revenue, Orders, Visitors). Includes summary stat cards displaying key metrics, and a dynamic chart area that updates based on the selected metric. The chart displays different visualization types (area chart for revenue, bar chart for orders, line chart for visitors) with interactive tooltips and responsive design.

## Source Code
```tsx
"use client";

import { useState } from "react";
import { Area, AreaChart, Bar, BarChart, Line, LineChart, CartesianGrid, XAxis, YAxis } from "recharts";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ChartGroup9Props {
  className?: string;
}

const revenueData = [
  { date: "Jan 1", value: 4200 },
  { date: "Jan 8", value: 5100 },
  { date: "Jan 15", value: 4800 },
  { date: "Jan 22", value: 6200 },
  { date: "Jan 29", value: 7100 },
  { date: "Feb 5", value: 5400 },
  { date: "Feb 12", value: 6800 },
  { date: "Feb 19", value: 7500 },
];

const ordersData = [
  { date: "Jan 1", value: 42 },
  { date: "Jan 8", value: 51 },
  { date: "Jan 15", value: 48 },
  { date: "Jan 22", value: 62 },
  { date: "Jan 29", value: 71 },
  { date: "Feb 5", value: 54 },
  { date: "Feb 12", value: 68 },
  { date: "Feb 19", value: 75 },
];

const visitorsData = [
  { date: "Jan 1", value: 1200 },
  { date: "Jan 8", value: 1450 },
  { date: "Jan 15", value: 1380 },
  { date: "Jan 22", value: 1720 },
  { date: "Jan 29", value: 1980 },
  { date: "Feb 5", value: 1540 },
  { date: "Feb 12", value: 1850 },
  { date: "Feb 19", value: 2100 },
];

const revenueConfig = {
  value: { label: "Revenue", color: "var(--chart-1)" },
} satisfies ChartConfig;

const ordersConfig = {
  value: { label: "Orders", color: "var(--chart-2)" },
} satisfies ChartConfig;

const visitorsConfig = {
  value: { label: "Visitors", color: "var(--chart-3)" },
} satisfies ChartConfig;

const ChartGroup9 = ({ className }: ChartGroup9Props) => {
  const [metric, setMetric] = useState("revenue");

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <div>
          <CardTitle>Metrics Overview</CardTitle>
          <CardDescription>View key metrics over time</CardDescription>
        </div>
        <Select value={metric} onValueChange={setMetric}>
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="revenue">Revenue</SelectItem>
            <SelectItem value="orders">Orders</SelectItem>
            <SelectItem value="visitors">Visitors</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div>
            <p className="text-sm text-muted-foreground">Total Revenue</p>
            <p className="text-2xl font-bold">$47,100</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Total Orders</p>
            <p className="text-2xl font-bold">471</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Avg Order Value</p>
            <p className="text-2xl font-bold">$100</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Conversion Rate</p>
            <p className="text-2xl font-bold">3.2%</p>
          </div>
        </div>

        {metric === "revenue" && (
          <ChartContainer config={revenueConfig} className="h-64 w-full">
            <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="revGrad9" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--color-value)" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="var(--color-value)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="date" axisLine={false} tickLine={false} tickMargin={8} fontSize={12} />
              <YAxis axisLine={false} tickLine={false} tickMargin={8} fontSize={12} tickFormatter={(v) => `$${v / 1000}k`} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area type="monotone" dataKey="value" stroke="var(--color-value)" strokeWidth={2} fill="url(#revGrad9)" />
            </AreaChart>
          </ChartContainer>
        )}
        {metric === "orders" && (
          <ChartContainer config={ordersConfig} className="h-64 w-full">
            <BarChart data={ordersData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="date" axisLine={false} tickLine={false} tickMargin={8} fontSize={12} />
              <YAxis axisLine={false} tickLine={false} tickMargin={8} fontSize={12} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="value" fill="var(--color-value)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ChartContainer>
        )}
        {metric === "visitors" && (
          <ChartContainer config={visitorsConfig} className="h-64 w-full">
            <LineChart data={visitorsData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="date" axisLine={false} tickLine={false} tickMargin={8} fontSize={12} />
              <YAxis axisLine={false} tickLine={false} tickMargin={8} fontSize={12} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line type="monotone" dataKey="value" stroke="var(--color-value)" strokeWidth={2} dot={false} />
            </LineChart>
          </ChartContainer>
        )}
      </CardContent>
    </Card>
      </div>
    </section>
  );
};

export { ChartGroup9 };
```
