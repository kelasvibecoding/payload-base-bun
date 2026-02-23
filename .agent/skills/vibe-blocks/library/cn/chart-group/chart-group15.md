# Chart Group 15

## Metadata
- **Category**: Chart Group
- **Objective**: Advanced business analytics dashboard with tabbed chart views, hourly traffic analysis, and comprehensive date navigation.
- **Use Case**: Business intelligence, revenue analysis, customer behavior tracking, hourly performance monitoring.
- **Visual Style**: Professional dashboard with tabbed interfaces, device breakdown charts, customer segmentation, and hourly traffic patterns.
- **Interactivity**: Advanced date navigation with previous/next buttons, tabbed chart views, dropdown menus for export/refresh/settings, and interactive charts.

## Description
A sophisticated business analytics dashboard featuring advanced date navigation with previous/next range controls, five key business metrics (Revenue, Cost, Profit, Orders, Profit Margin), and a main chart area with three tabbed views (Revenue, Profit, Orders). The dashboard includes device breakdown analysis, customer type segmentation (new vs returning), and hourly traffic patterns showing visitor and conversion data throughout the day.

## Key Features
- **Tabbed Chart Views**: Switch between revenue, profit, and orders visualizations
- **Advanced Date Navigation**: Previous/next buttons for quick range navigation
- **Multi-Metric Overview**: Five key business indicators with trend percentages
- **Device Analytics**: Pie chart showing desktop, mobile, and tablet usage
- **Customer Segmentation**: Stacked bar chart comparing new vs returning customers
- **Hourly Traffic Analysis**: Combined bar and line chart showing visitors and conversions by hour
- **Professional Controls**: Export, refresh, and settings dropdown menu

## Source Code
```tsx
"use client";

import { useState, useMemo } from "react";
import { format, subDays, startOfDay, addDays, differenceInDays } from "date-fns";
import { Area, AreaChart, Bar, BarChart, Line, LineChart, CartesianGrid, XAxis, YAxis, Legend, Cell, Pie, PieChart, ResponsiveContainer, ReferenceLine, ComposedChart, Tooltip } from "recharts";
import { CalendarIcon, TrendingUp, TrendingDown, ArrowRight, MoreHorizontal, Download, RefreshCw, Settings, ChevronLeft, ChevronRight as ChevronRightIcon } from "lucide-react";
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
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface ChartGroup15Props {
  className?: string;
}

// Seeded random number generator for consistent data
const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

// Generate sample data for a specific date range
const generateDataForRange = (from: Date, to: Date) => {
  const data = [];
  let currentDate = new Date(from);
  let dayIndex = 0;
  
  while (currentDate <= to) {
    // Use date as seed for consistent data per date
    const seed = currentDate.getTime() / 86400000; // days since epoch
    const baseRevenue = 10000 + Math.sin(seed / 7) * 3000;
    const baseCost = 6000 + Math.sin(seed / 7) * 1500;
    
    data.push({
      date: new Date(currentDate),
      dateStr: format(currentDate, "MMM d"),
      revenue: Math.floor(baseRevenue + seededRandom(seed * 1) * 2000),
      cost: Math.floor(baseCost + seededRandom(seed * 2) * 1000),
      profit: Math.floor((baseRevenue - baseCost) + seededRandom(seed * 3) * 1000),
      orders: Math.floor(seededRandom(seed * 4) * 80) + 40,
      aov: Math.floor(seededRandom(seed * 5) * 50) + 100,
      newCustomers: Math.floor(seededRandom(seed * 6) * 30) + 10,
      returning: Math.floor(seededRandom(seed * 7) * 50) + 30,
    });
    
    currentDate = addDays(currentDate, 1);
    dayIndex++;
  }
  return data;
};

// Generate hourly data (static - represents "today")
const hourlyData = Array.from({ length: 24 }, (_, i) => {
  const seed = i * 1000;
  return {
  hour: `${i.toString().padStart(2, "0")}:00`,
    visitors: Math.floor(seededRandom(seed) * 500) + (i >= 9 && i <= 17 ? 300 : 50),
    conversions: Math.floor(seededRandom(seed + 1) * 30) + (i >= 9 && i <= 17 ? 15 : 2),
  };
});

const deviceData = [
  { name: "Desktop", value: 58, fill: "var(--chart-1)" },
  { name: "Mobile", value: 32, fill: "var(--chart-2)" },
  { name: "Tablet", value: 10, fill: "var(--chart-3)" },
];

const deviceConfig = {
  Desktop: { label: "Desktop", color: "var(--chart-1)" },
  Mobile: { label: "Mobile", color: "var(--chart-2)" },
  Tablet: { label: "Tablet", color: "var(--chart-3)" },
} satisfies ChartConfig;

const revenueConfig = {
  revenue: { label: "Revenue", color: "var(--chart-1)" },
  cost: { label: "Cost", color: "var(--chart-2)" },
  profit: { label: "Profit", color: "var(--chart-3)" },
} satisfies ChartConfig;

const customerConfig = {
  newCustomers: { label: "New", color: "var(--chart-1)" },
  returning: { label: "Returning", color: "var(--chart-2)" },
} satisfies ChartConfig;

const hourlyConfig = {
  visitors: { label: "Visitors", color: "var(--chart-1)" },
  conversions: { label: "Conversions", color: "var(--chart-3)" },
} satisfies ChartConfig;

const ChartGroup15 = ({ className }: ChartGroup15Props) => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: subDays(new Date(), 29),
    to: new Date(),
  });
  const [chartView, setChartView] = useState<"revenue" | "profit" | "orders">("revenue");

  // Generate data dynamically based on selected date range
  const filteredData = useMemo(() => {
    if (!dateRange?.from) {
      return generateDataForRange(subDays(new Date(), 29), new Date());
    }
    const from = startOfDay(dateRange.from);
    const to = dateRange.to ? startOfDay(dateRange.to) : from;
    return generateDataForRange(from, to);
  }, [dateRange]);

  const stats = useMemo(() => {
    const totalRevenue = filteredData.reduce((sum, item) => sum + item.revenue, 0);
    const totalCost = filteredData.reduce((sum, item) => sum + item.cost, 0);
    const totalProfit = filteredData.reduce((sum, item) => sum + item.profit, 0);
    const totalOrders = filteredData.reduce((sum, item) => sum + item.orders, 0);
    const avgAov = filteredData.length > 0 
      ? Math.round(filteredData.reduce((sum, item) => sum + item.aov, 0) / filteredData.length) 
      : 0;
    const profitMargin = totalRevenue > 0 ? ((totalProfit / totalRevenue) * 100).toFixed(1) : "0";
    return { totalRevenue, totalCost, totalProfit, totalOrders, avgAov, profitMargin };
  }, [filteredData]);

  const daysDiff = dateRange?.from && dateRange?.to 
    ? differenceInDays(dateRange.to, dateRange.from) + 1 
    : 30;

  const navigateRange = (direction: "prev" | "next") => {
    if (!dateRange?.from || !dateRange?.to) return;
    const shift = direction === "prev" ? -daysDiff : daysDiff;
    setDateRange({
      from: addDays(dateRange.from, shift),
      to: addDays(dateRange.to, shift),
    });
  };

  return (
    <section className={cn("py-32", className)}>
      <div className="container space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Business Analytics</h2>
          <p className="text-muted-foreground">
            {daysDiff} day{daysDiff !== 1 ? "s" : ""} selected
            {dateRange?.from && ` · ${format(dateRange.from, "MMM d")} - ${format(dateRange.to || dateRange.from, "MMM d, yyyy")}`}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center rounded-lg border">
            <Button variant="ghost" size="icon" className="rounded-r-none" onClick={() => navigateRange("prev")}>
              <ChevronLeft className="size-4" />
            </Button>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" className="rounded-none border-x px-3">
                  <CalendarIcon className="mr-2 size-4" />
                  {dateRange?.from ? format(dateRange.from, "MMM d") : "Start"} - {dateRange?.to ? format(dateRange.to, "MMM d") : "End"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="center">
                <Calendar
                  mode="range"
                  numberOfMonths={2}
                  selected={dateRange}
                  onSelect={setDateRange}
                />
              </PopoverContent>
            </Popover>
            <Button variant="ghost" size="icon" className="rounded-l-none" onClick={() => navigateRange("next")}>
              <ChevronRightIcon className="size-4" />
            </Button>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <MoreHorizontal className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem><Download className="mr-2 size-4" /> Export CSV</DropdownMenuItem>
              <DropdownMenuItem><RefreshCw className="mr-2 size-4" /> Refresh</DropdownMenuItem>
              <DropdownMenuItem><Settings className="mr-2 size-4" /> Settings</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {[
          { label: "Revenue", value: `$${stats.totalRevenue.toLocaleString()}`, change: 12.5 },
          { label: "Cost", value: `$${stats.totalCost.toLocaleString()}`, change: 8.2 },
          { label: "Profit", value: `$${stats.totalProfit.toLocaleString()}`, change: 18.3 },
          { label: "Orders", value: stats.totalOrders.toLocaleString(), change: 5.7 },
          { label: "Profit Margin", value: `${stats.profitMargin}%`, change: 2.1 },
        ].map((stat, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <div className="flex items-baseline justify-between">
                <p className="text-2xl font-bold">{stat.value}</p>
                <span className={cn("flex items-center text-sm", stat.change >= 0 ? "text-green-600" : "text-red-600")}>
                  {stat.change >= 0 ? <TrendingUp className="mr-1 size-3" /> : <TrendingDown className="mr-1 size-3" />}
                  {stat.change >= 0 ? "+" : ""}{stat.change}%
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Charts Bento */}
      <div className="grid gap-4 lg:grid-cols-3">
        {/* Revenue/Profit/Orders Chart - Large */}
        <Card className="lg:col-span-2">
          <Tabs value={chartView} onValueChange={(v) => setChartView(v as typeof chartView)}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="text-base">Performance Overview</CardTitle>
              <CardDescription>Revenue, cost, and profit trends</CardDescription>
            </div>
              <TabsList className="h-8">
                <TabsTrigger value="revenue" className="text-xs">Revenue</TabsTrigger>
                <TabsTrigger value="profit" className="text-xs">Profit</TabsTrigger>
                <TabsTrigger value="orders" className="text-xs">Orders</TabsTrigger>
              </TabsList>
          </CardHeader>
          <CardContent>
              <TabsContent value="revenue" className="mt-0">
            <ChartContainer config={revenueConfig} className="h-72 w-full">
                  <AreaChart data={filteredData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="revGrad15" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-revenue)" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="var(--color-revenue)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="dateStr" axisLine={false} tickLine={false} tickMargin={8} fontSize={11} interval="preserveStartEnd" />
                <YAxis axisLine={false} tickLine={false} tickMargin={8} fontSize={11} tickFormatter={(v) => `$${v / 1000}k`} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                    <Area type="monotone" dataKey="revenue" stroke="var(--color-revenue)" strokeWidth={2} fill="url(#revGrad15)" />
                    <Line type="monotone" dataKey="cost" stroke="var(--color-cost)" strokeWidth={2} dot={false} strokeDasharray="4 4" />
                  </AreaChart>
                </ChartContainer>
              </TabsContent>
              <TabsContent value="profit" className="mt-0">
                <ChartContainer config={revenueConfig} className="h-72 w-full">
                  <BarChart data={filteredData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="dateStr" axisLine={false} tickLine={false} tickMargin={8} fontSize={11} interval="preserveStartEnd" />
                    <YAxis axisLine={false} tickLine={false} tickMargin={8} fontSize={11} tickFormatter={(v) => `$${v / 1000}k`} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="profit" fill="var(--color-profit)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ChartContainer>
              </TabsContent>
              <TabsContent value="orders" className="mt-0">
                <ChartContainer config={revenueConfig} className="h-72 w-full">
                  <LineChart data={filteredData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="dateStr" axisLine={false} tickLine={false} tickMargin={8} fontSize={11} interval="preserveStartEnd" />
                    <YAxis axisLine={false} tickLine={false} tickMargin={8} fontSize={11} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="orders" stroke="var(--color-revenue)" strokeWidth={2} dot={false} />
                  </LineChart>
            </ChartContainer>
              </TabsContent>
          </CardContent>
          </Tabs>
        </Card>

        {/* Device Breakdown */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Device Breakdown</CardTitle>
            <CardDescription>Traffic by device type</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <ChartContainer config={deviceConfig} className="mx-auto aspect-square h-40">
                <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel nameKey="name" />}
                />
                  <Pie
                    data={deviceData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={70}
                    paddingAngle={3}
                    dataKey="value"
                  nameKey="name"
                    strokeWidth={0}
                />
                </PieChart>
            </ChartContainer>
            <div className="w-full space-y-2">
              {deviceData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="size-3 rounded-sm" style={{ backgroundColor: item.fill }} />
                    <span className="text-sm">{item.name}</span>
                  </div>
                  <span className="text-sm font-medium">{item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Customer Types */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Customer Types</CardTitle>
            <CardDescription>New vs returning customers</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={customerConfig} className="h-48 w-full">
              <BarChart data={filteredData.slice(-14)} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="dateStr" axisLine={false} tickLine={false} tickMargin={8} fontSize={10} />
                <YAxis axisLine={false} tickLine={false} tickMargin={8} fontSize={10} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="newCustomers" stackId="a" fill="var(--color-newCustomers)" radius={[0, 0, 0, 0]} />
                <Bar dataKey="returning" stackId="a" fill="var(--color-returning)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Hourly Traffic */}
        <Card className="lg:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Hourly Traffic</CardTitle>
            <CardDescription>Visitors and conversions by hour (today)</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={hourlyConfig} className="h-48 w-full">
              <ComposedChart data={hourlyData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="hour" axisLine={false} tickLine={false} tickMargin={8} fontSize={10} interval={2} />
                <YAxis yAxisId="left" axisLine={false} tickLine={false} tickMargin={8} fontSize={10} />
                <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tickMargin={8} fontSize={10} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar yAxisId="left" dataKey="visitors" fill="var(--color-visitors)" radius={[2, 2, 0, 0]} opacity={0.8} />
                <Line yAxisId="right" type="monotone" dataKey="conversions" stroke="var(--color-conversions)" strokeWidth={2} dot={false} />
              </ComposedChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
    </section>
  );
};

export { ChartGroup15 };
```

## Usage Notes
- The dashboard features three distinct chart views accessible via tabs: Revenue (area chart with cost overlay), Profit (bar chart), and Orders (line chart)
- Advanced date navigation allows users to move forward/backward by the selected range duration
- Hourly traffic data represents a static "today" dataset showing business hours patterns
- Device breakdown and customer type charts provide segmentation insights
- The composed chart in hourly traffic combines bar charts for visitors with line charts for conversions
- All trend percentages are hardcoded but can be connected to real comparative data
- The dropdown menu provides access to export, refresh, and settings functionality
