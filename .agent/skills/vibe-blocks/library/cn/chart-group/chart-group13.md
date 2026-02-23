# Chart Group 13

## Metadata
- **Category**: Chart Group
- **Objective**: Advanced analytics dashboard with bento grid layout, mini charts, and comprehensive date range controls.
- **Use Case**: Advanced analytics, executive dashboards, performance monitoring, multi-dimensional data visualization.
- **Visual Style**: Bento grid layout with mini sparkline charts, metric cards with embedded charts, and large overview charts.
- **Interactivity**: Advanced date picker with preset list and calendar, dynamic data generation, interactive charts with tooltips.

## Description
An advanced analytics dashboard featuring a sophisticated date picker with preset ranges and dual-panel calendar, four metric cards with embedded sparkline charts showing revenue, users, orders, and pageviews. The dashboard includes a large revenue trend area chart and a users vs orders correlation line chart, all arranged in a responsive bento grid layout.

## Key Features
- **Bento Grid Layout**: Modern asymmetric grid system for optimal space utilization
- **Sparkline Charts**: Embedded mini charts in metric cards showing recent trends
- **Advanced Date Picker**: Split-panel design with presets and calendar
- **Multi-Axis Charts**: Dual-axis line charts for correlation analysis
- **Responsive Design**: Adapts from single column to multi-column layouts
- **Trend Visualization**: Sparklines show 14-day trailing performance

## Source Code
```tsx
"use client";

import { useState, useMemo } from "react";
import { format, subDays, startOfDay, addDays, differenceInDays } from "date-fns";
import { Area, AreaChart, Line, LineChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { CalendarIcon, ArrowUpRight, ArrowDownRight, Users, DollarSign, ShoppingCart, Eye } from "lucide-react";
import type { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ChartGroup13Props {
  className?: string;
}

// Seeded random for consistent data generation
const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

// Generate data for any date range dynamically
const generateDataForRange = (from: Date, to: Date) => {
  const data = [];
  const days = differenceInDays(to, from) + 1;
  
  for (let i = 0; i < days; i++) {
    const date = addDays(startOfDay(from), i);
    const seed = date.getTime() / 86400000;
    
    data.push({
      date: date,
      dateStr: format(date, "MMM d"),
      revenue: Math.floor(seededRandom(seed) * 12000) + 5000,
      users: Math.floor(seededRandom(seed + 1000) * 500) + 200,
      orders: Math.floor(seededRandom(seed + 2000) * 100) + 40,
      pageviews: Math.floor(seededRandom(seed + 3000) * 5000) + 2000,
    });
  }
  return data;
};

const presets = [
  { label: "Today", getValue: () => ({ from: new Date(), to: new Date() }) },
  { label: "Yesterday", getValue: () => ({ from: subDays(new Date(), 1), to: subDays(new Date(), 1) }) },
  { label: "Last 7 days", getValue: () => ({ from: subDays(new Date(), 6), to: new Date() }) },
  { label: "Last 14 days", getValue: () => ({ from: subDays(new Date(), 13), to: new Date() }) },
  { label: "Last 30 days", getValue: () => ({ from: subDays(new Date(), 29), to: new Date() }) },
  { label: "Last 90 days", getValue: () => ({ from: subDays(new Date(), 89), to: new Date() }) },
];

const revenueConfig = { revenue: { label: "Revenue", color: "var(--chart-1)" } } satisfies ChartConfig;
const usersConfig = { users: { label: "Users", color: "var(--chart-2)" } } satisfies ChartConfig;
const ordersConfig = { orders: { label: "Orders", color: "var(--chart-3)" } } satisfies ChartConfig;
const pageviewsConfig = { pageviews: { label: "Pageviews", color: "var(--chart-4)" } } satisfies ChartConfig;

const ChartGroup13 = ({ className }: ChartGroup13Props) => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: subDays(new Date(), 29),
    to: new Date(),
  });
  const [presetLabel, setPresetLabel] = useState("Last 30 days");

  const filteredData = useMemo(() => {
    const from = dateRange?.from ?? subDays(new Date(), 29);
    const to = dateRange?.to ?? new Date();
    return generateDataForRange(from, to);
  }, [dateRange]);

  const stats = useMemo(() => {
    const totalRevenue = filteredData.reduce((sum, item) => sum + item.revenue, 0);
    const totalUsers = filteredData.reduce((sum, item) => sum + item.users, 0);
    const totalOrders = filteredData.reduce((sum, item) => sum + item.orders, 0);
    const totalPageviews = filteredData.reduce((sum, item) => sum + item.pageviews, 0);
    return { totalRevenue, totalUsers, totalOrders, totalPageviews };
  }, [filteredData]);

  const handlePreset = (preset: typeof presets[0]) => {
    setDateRange(preset.getValue());
    setPresetLabel(preset.label);
  };

  const handleCustomSelect = (range: DateRange | undefined) => {
    setDateRange(range);
    setPresetLabel("Custom");
  };

  const statCards = [
    { title: "Revenue", value: `$${stats.totalRevenue.toLocaleString()}`, change: 12.5, icon: DollarSign, config: revenueConfig, dataKey: "revenue" as const, color: "var(--chart-1)" },
    { title: "Users", value: stats.totalUsers.toLocaleString(), change: 8.2, icon: Users, config: usersConfig, dataKey: "users" as const, color: "var(--chart-2)" },
    { title: "Orders", value: stats.totalOrders.toLocaleString(), change: -3.1, icon: ShoppingCart, config: ordersConfig, dataKey: "orders" as const, color: "var(--chart-3)" },
    { title: "Pageviews", value: stats.totalPageviews.toLocaleString(), change: 15.8, icon: Eye, config: pageviewsConfig, dataKey: "pageviews" as const, color: "var(--chart-4)" },
  ];

  return (
    <section className={cn("py-32", className)}>
      <div className="container space-y-6">
      {/* Header with Calendar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Analytics</h2>
          <p className="text-muted-foreground">
            {dateRange?.from && dateRange?.to
              ? `${format(dateRange.from, "MMM d, yyyy")} - ${format(dateRange.to, "MMM d, yyyy")}`
              : "Select a date range"}
          </p>
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-[280px] justify-start">
              <CalendarIcon className="mr-2 size-4" />
              {presetLabel}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="end">
            <div className="flex">
              <div className="border-r p-2">
                <ScrollArea className="h-72">
                  <div className="space-y-1">
                    {presets.map((preset) => (
                      <Button
                        key={preset.label}
                        variant={presetLabel === preset.label ? "secondary" : "ghost"}
                        size="sm"
                        className="w-full justify-start"
                        onClick={() => handlePreset(preset)}
                      >
                        {preset.label}
                      </Button>
                    ))}
                  </div>
                </ScrollArea>
              </div>
              <Calendar
                mode="range"
                numberOfMonths={2}
                selected={dateRange}
                onSelect={handleCustomSelect}
                defaultMonth={subDays(new Date(), 30)}
              />
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* Bento Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {statCards.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="size-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center gap-1 text-xs">
                {stat.change >= 0 ? (
                  <ArrowUpRight className="size-3 text-green-500" />
                ) : (
                  <ArrowDownRight className="size-3 text-red-500" />
                )}
                <span className={stat.change >= 0 ? "text-green-500" : "text-red-500"}>
                  {stat.change >= 0 ? "+" : ""}{stat.change}%
                </span>
                <span className="text-muted-foreground">vs prev period</span>
              </div>
              <ChartContainer config={stat.config} className="mt-3 h-12 w-full">
                <AreaChart data={filteredData.slice(-14)"} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id={`grad-${stat.dataKey}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={stat.color} stopOpacity={0.3} />
                      <stop offset="100%" stopColor={stat.color} stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area type="monotone" dataKey={stat.dataKey} stroke={stat.color} strokeWidth={1.5} fill={`url(#grad-${stat.dataKey})`} />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Large Charts Row */}
      <div className="grid gap-4 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Revenue Over Time</CardTitle>
            <CardDescription>Daily revenue for selected period</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={revenueConfig} className="h-80 w-full">
              <AreaChart data={filteredData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="revGradMain" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-revenue)" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="var(--color-revenue)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="dateStr" axisLine={false} tickLine={false} tickMargin={8} fontSize={12" interval="preserveStartEnd" />
                <YAxis axisLine={false} tickLine={false} tickMargin={8} fontSize={12" tickFormatter={(v) => `$${v / 1000}k`} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area type="monotone" dataKey="revenue" stroke="var(--color-revenue)" strokeWidth={2} fill="url(#revGradMain)" />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Users vs Orders</CardTitle>
            <CardDescription>Correlation between users and orders</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{ ...usersConfig, ...ordersConfig }} className="h-80 w-full">
              <LineChart data={filteredData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="dateStr" axisLine={false} tickLine={false} tickMargin={8} fontSize={12" interval="preserveStartEnd" />
                <YAxis yAxisId="left" axisLine={false} tickLine={false} tickMargin={8} fontSize={12" />
                <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tickMargin={8} fontSize={12" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line yAxisId="left" type="monotone" dataKey="users" stroke="var(--color-users)" strokeWidth={2} dot={false} />
                <Line yAxisId="right" type="monotone" dataKey="orders" stroke="var(--color-orders)" strokeWidth={2} dot={false} />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
    </section>
  );
};

export { ChartGroup13 };
```

## Usage Notes
- The bento grid automatically adjusts from 1 to 4 columns based on screen size
- Sparkline charts show the last 14 days of data for quick trend visualization
- The advanced date picker combines preset buttons with a full calendar interface
- Dual-axis charts allow for correlation analysis between different metrics
- All trend percentages are hardcoded but can be connected to real comparative data
