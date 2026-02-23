# Chart Group 11

## Metadata
- **Category**: Chart Group
- **Objective**: Interactive date range picker with dynamic chart data generation and summary statistics.
- **Use Case**: Date-range analytics, dynamic data visualization, interactive dashboards, time-series analysis.
- **Visual Style**: Card-based layout with date range picker, summary stat cards, and full-width chart area.
- **Interactivity**: Date range picker with calendar popover, dynamic data generation based on selected range, interactive chart with tooltips.

## Description
An interactive chart group layout featuring a date range picker with calendar popover for selecting date ranges, dynamic data generation based on the selected range, summary statistics cards showing total revenue, orders, and average order value, and a full-width area chart displaying revenue over time. The chart updates dynamically based on the selected date range, providing an interactive analytics experience.

## Source Code
```tsx
"use client";

import { useState, useMemo } from "react";
import { format, subDays, startOfDay, addDays, differenceInDays } from "date-fns";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { CalendarIcon } from "lucide-react";
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

interface ChartGroup11Props {
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
    const seed = date.getTime() / 86400000; // Days since epoch for consistent seed
    
    data.push({
      date: date,
      dateStr: format(date, "MMM d"),
      revenue: Math.floor(seededRandom(seed) * 5000) + 2000,
      orders: Math.floor(seededRandom(seed + 1000) * 50) + 20,
    });
  }
  return data;
};

const chartConfig = {
  revenue: { label: "Revenue", color: "var(--chart-1)" },
} satisfies ChartConfig;

const ChartGroup11 = ({ className }: ChartGroup11Props) => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: subDays(new Date(), 30),
    to: new Date(),
  });

  const filteredData = useMemo(() => {
    const from = dateRange?.from ?? subDays(new Date(), 30);
    const to = dateRange?.to ?? new Date();
    return generateDataForRange(from, to);
  }, [dateRange]);

  const totalRevenue = filteredData.reduce((sum, item) => sum + item.revenue, 0);
  const totalOrders = filteredData.reduce((sum, item) => sum + item.orders, 0);
  const avgOrderValue = totalOrders > 0 ? Math.round(totalRevenue / totalOrders) : 0;

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <div>
              <CardTitle>Revenue Analytics</CardTitle>
              <CardDescription>Track revenue performance over time</CardDescription>
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-[260px] justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 size-4" />
                  {dateRange?.from ? (
                    dateRange.to ? (
                      <>
                        {format(dateRange.from, "LLL dd, y")} - {format(dateRange.to, "LLL dd, y")}
                      </>
                    ) : (
                      format(dateRange.from, "LLL dd, y")
                    )
                  ) : (
                    <span>Pick a date range</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="end">
                <Calendar
                  mode="range"
                  numberOfMonths={2}
                  selected={dateRange}
                  onSelect={setDateRange}
                  defaultMonth={subDays(new Date(), 30)}
                />
              </PopoverContent>
            </Popover>
          </CardHeader>
          <CardContent>
            <div className="mb-6 grid grid-cols-3 gap-4">
              <div className="rounded-lg border p-4">
                <p className="text-sm text-muted-foreground">Total Revenue</p>
                <p className="text-2xl font-bold">${totalRevenue.toLocaleString()}</p>
              </div>
              <div className="rounded-lg border p-4">
                <p className="text-sm text-muted-foreground">Total Orders</p>
                <p className="text-2xl font-bold">{totalOrders.toLocaleString()}</p>
              </div>
              <div className="rounded-lg border p-4">
                <p className="text-sm text-muted-foreground">Avg Order Value</p>
                <p className="text-2xl font-bold">${avgOrderValue}</p>
              </div>
            </div>

            <ChartContainer config={chartConfig} className="h-72 w-full">
              <AreaChart data={filteredData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="revGrad11" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-revenue)" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="var(--color-revenue)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis 
                  dataKey="dateStr" 
                  axisLine={false} 
                  tickLine={false} 
                  tickMargin={8} 
                  fontSize={12}
                  interval="preserveStartEnd"
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tickMargin={8} 
                  fontSize={12} 
                  tickFormatter={(v) => `$${v / 1000}k`} 
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="var(--color-revenue)" 
                  strokeWidth={2} 
                  fill="url(#revGrad11)" 
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export { ChartGroup11 };
```
