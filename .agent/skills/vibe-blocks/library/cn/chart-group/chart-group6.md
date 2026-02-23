# Chart Group 6

## Metadata
- **Category**: Chart Group
- **Objective**: Dual-chart layout displaying device distribution and browser usage.
- **Use Case**: Traffic analytics, device/browser breakdowns, user behavior analysis, platform insights.
- **Visual Style**: Two-column grid layout with pie chart and bar chart, side-by-side cards with legends.
- **Interactivity**: Static display with hover tooltips on charts.

## Description
A chart group layout featuring two charts displayed side-by-side: a pie chart showing traffic by device type (Desktop, Mobile, Tablet) with a center total display, and a horizontal bar chart showing browser usage. Both charts include interactive tooltips, color-coded data, and summary statistics. The layout provides a comprehensive view of user traffic sources and device preferences.

## Source Code
```tsx
"use client";

import { Pie, PieChart, Bar, BarChart, XAxis, YAxis } from "recharts";

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

interface ChartGroup6Props {
  className?: string;
}

const pieData = [
  { name: "Desktop", value: 4520, fill: "var(--chart-1)" },
  { name: "Mobile", value: 3210, fill: "var(--chart-2)" },
  { name: "Tablet", value: 1270, fill: "var(--chart-3)" },
];

const pieConfig = {
  Desktop: { label: "Desktop", color: "var(--chart-1)" },
  Mobile: { label: "Mobile", color: "var(--chart-2)" },
  Tablet: { label: "Tablet", color: "var(--chart-3)" },
} satisfies ChartConfig;

const barData = [
  { name: "Chrome", value: 4200 },
  { name: "Safari", value: 2800 },
  { name: "Firefox", value: 1400 },
  { name: "Edge", value: 980 },
  { name: "Other", value: 620 },
];

const barConfig = {
  value: { label: "Users", color: "var(--chart-4)" },
} satisfies ChartConfig;

const ChartGroup6 = ({ className }: ChartGroup6Props) => {
  const total = pieData.reduce((sum, item) => sum + item.value, 0);

  return (
    <section className={cn("py-32", className)}>
      <div className="container grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Traffic by Device</CardTitle>
          <CardDescription>User sessions breakdown</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-8">
            <div className="relative size-40">
              <ChartContainer config={pieConfig} className="size-full">
                <PieChart>
                  <ChartTooltip content={<ChartTooltipContent nameKey="name" hideLabel />} cursor={false} />
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={70}
                    paddingAngle={2}
                    dataKey="value"
                    nameKey="name"
                    strokeWidth={0}
                  />
                </PieChart>
              </ChartContainer>
              <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold">{total.toLocaleString()}</span>
                <span className="text-xs text-muted-foreground">Total</span>
              </div>
            </div>
            <div className="flex-1 space-y-3">
              {pieData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="size-3 rounded-full" style={{ backgroundColor: item.fill }} />
                    <span className="text-sm">{item.name}</span>
                  </div>
                  <span className="text-sm font-medium">{item.value.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Browser Usage</CardTitle>
          <CardDescription>Top browsers by users</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={barConfig} className="h-48 w-full">
            <BarChart data={barData} layout="vertical" margin={{ top: 0, right: 10, left: 0, bottom: 0 }}>
              <XAxis type="number" axisLine={false} tickLine={false} fontSize={12} />
              <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} fontSize={12} width={70} />
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

export { ChartGroup6 };
```
