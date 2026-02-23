# Chart Group 4

## Metadata
- **Category**: Chart Group
- **Objective**: Interactive tabbed chart layout for switching between different metrics.
- **Use Case**: Multi-metric dashboards, tabbed analytics views, performance comparison across different KPIs.
- **Visual Style**: Card-based layout with tab controls, full-width chart area, and responsive design.
- **Interactivity**: Tab-based navigation for switching between revenue, orders, and customers charts with smooth transitions.

## Description
An interactive chart group layout featuring tab controls for switching between different metrics (Revenue, Orders, Customers). Each tab displays a different chart type: an area chart for revenue, a bar chart for orders, and a line chart for customers. Includes a card-based layout with tab navigation at the top, full-width chart area below, and interactive tooltips on all charts. The layout provides a clean, organized way to view multiple metrics without cluttering the interface.

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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ChartGroup4Props {
  className?: string;
}

const chartData = [
  { month: "Jan", revenue: 18600, orders: 186, customers: 145 },
  { month: "Feb", revenue: 30500, orders: 305, customers: 220 },
  { month: "Mar", revenue: 23700, orders: 237, customers: 180 },
  { month: "Apr", revenue: 27300, orders: 273, customers: 195 },
  { month: "May", revenue: 20900, orders: 209, customers: 165 },
  { month: "Jun", revenue: 31400, orders: 314, customers: 240 },
];

const revenueConfig = {
  revenue: { label: "Revenue", color: "var(--chart-1)" },
} satisfies ChartConfig;

const ordersConfig = {
  orders: { label: "Orders", color: "var(--chart-2)" },
} satisfies ChartConfig;

const customersConfig = {
  customers: { label: "Customers", color: "var(--chart-3)" },
} satisfies ChartConfig;

const ChartGroup4 = ({ className }: ChartGroup4Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <Card className="w-full">
      <CardHeader>
        <CardTitle>Performance Metrics</CardTitle>
        <CardDescription>View different metrics over time</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="revenue">
          <TabsList className="mb-4">
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
          </TabsList>

          <TabsContent value="revenue">
            <ChartContainer config={revenueConfig} className="h-64 w-full">
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-revenue)" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="var(--color-revenue)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tickMargin={8} fontSize={12} />
                <YAxis axisLine={false} tickLine={false} tickMargin={8} fontSize={12} tickFormatter={(v) => `$${v / 1000}k`} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area type="monotone" dataKey="revenue" stroke="var(--color-revenue)" strokeWidth={2} fill="url(#revenueGrad)" />
              </AreaChart>
            </ChartContainer>
          </TabsContent>

          <TabsContent value="orders">
            <ChartContainer config={ordersConfig} className="h-64 w-full">
              <BarChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tickMargin={8} fontSize={12} />
                <YAxis axisLine={false} tickLine={false} tickMargin={8} fontSize={12} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="orders" fill="var(--color-orders)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </TabsContent>

          <TabsContent value="customers">
            <ChartContainer config={customersConfig} className="h-64 w-full">
              <LineChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tickMargin={8} fontSize={12} />
                <YAxis axisLine={false} tickLine={false} tickMargin={8} fontSize={12} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line type="monotone" dataKey="customers" stroke="var(--color-customers)" strokeWidth={2} dot={{ fill: "var(--color-customers)", r: 4 }} />
              </LineChart>
            </ChartContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
      </div>
    </section>
  );
};

export { ChartGroup4 };
```
