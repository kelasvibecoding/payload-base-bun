# Chart Group 14

## Metadata
- **Category**: Chart Group
- **Objective**: Advanced analytics dashboard with bento grid layout, traffic channel analysis, and user engagement metrics.
- **Use Case**: Web analytics, user behavior tracking, traffic source analysis, engagement monitoring.
- **Visual Style**: Modern bento grid with mixed chart types, user avatars, progress indicators, and metric cards.
- **Interactivity**: Select-based date picker, custom calendar range selection, interactive charts with tooltips.

## Description
A comprehensive web analytics dashboard featuring a sophisticated bento grid layout with four key metric cards (Revenue, Sessions, Conversion Rate, Bounce Rate), each with trend indicators. The dashboard includes a large revenue trend area chart, a donut chart for traffic channel breakdown, a top pages table with view counts and change percentages, and a most active users section with avatars and session counts.

## Key Features
- **Bento Grid Layout**: Asymmetric grid system optimizing space utilization
- **Traffic Channel Analysis**: Donut chart showing traffic source distribution
- **User Engagement Metrics**: Active users section with avatars and session data
- **Top Pages Performance**: Table showing page views with trend indicators
- **Mixed Visualization Types**: Combines charts, tables, and user interface elements
- **Advanced Date Controls**: Select dropdown with custom calendar integration

## Source Code
```tsx
"use client";

import { useState, useMemo } from "react";
import { format, subDays, startOfDay, addDays, differenceInDays, startOfWeek, endOfWeek, startOfMonth, endOfMonth, subMonths } from "date-fns";
import { Area, AreaChart, Pie, PieChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { CalendarIcon, TrendingUp, TrendingDown, Activity, Users, Zap, Globe, ChevronRight } from "lucide-react";
import type { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
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
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ChartGroup14Props {
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
      revenue: Math.floor(seededRandom(seed) * 15000) + 8000,
      sessions: Math.floor(seededRandom(seed + 1000) * 800) + 300,
      conversions: Math.floor(seededRandom(seed + 2000) * 150) + 50,
      bounceRate: Math.floor(seededRandom(seed + 3000) * 30) + 20,
    });
  }
  return data;
};

const channelData = [
  { name: "Organic Search", value: 42, fill: "var(--chart-1)" },
  { name: "Direct", value: 28, fill: "var(--chart-2)" },
  { name: "Referral", value: 18, fill: "var(--chart-3)" },
  { name: "Social", value: 8, fill: "var(--chart-4)" },
  { name: "Email", value: 4, fill: "var(--chart-5)" },
];

const channelConfig = {
  "Organic Search": { label: "Organic Search", color: "var(--chart-1)" },
  "Direct": { label: "Direct", color: "var(--chart-2)" },
  "Referral": { label: "Referral", color: "var(--chart-3)" },
  "Social": { label: "Social", color: "var(--chart-4)" },
  "Email": { label: "Email", color: "var(--chart-5)" },
} satisfies ChartConfig;

const topPages = [
  { path: "/dashboard", views: 12543, change: 12.5 },
  { path: "/products", views: 8932, change: -3.2 },
  { path: "/about", views: 6721, change: 8.7 },
  { path: "/blog/getting-started", views: 5432, change: 15.3 },
  { path: "/contact", views: 3211, change: -1.8 },
];

const topUsers = [
  { name: "Sarah Johnson", email: "sarah@example.com", sessions: 142, avatar: "/avatars/sarah.jpg" },
  { name: "Mike Chen", email: "mike@example.com", sessions: 128, avatar: "/avatars/mike.jpg" },
  { name: "Emma Davis", email: "emma@example.com", sessions: 115, avatar: "/avatars/emma.jpg" },
  { name: "Alex Rodriguez", email: "alex@example.com", sessions: 98, avatar: "/avatars/alex.jpg" },
];

const presetRanges = [
  { label: "Today", getValue: () => ({ from: new Date(), to: new Date() }) },
  { label: "Yesterday", getValue: () => ({ from: subDays(new Date(), 1), to: subDays(new Date(), 1) }) },
  { label: "Last 7 days", getValue: () => ({ from: subDays(new Date(), 6), to: new Date() }) },
  { label: "Last 30 days", getValue: () => ({ from: subDays(new Date(), 29), to: new Date() }) },
  { label: "Last 90 days", getValue: () => ({ from: subDays(new Date(), 89), to: new Date() }) },
];

const revenueConfig = { revenue: { label: "Revenue", color: "var(--chart-1)" } } satisfies ChartConfig;
const sessionsConfig = { sessions: { label: "Sessions", color: "var(--chart-2)" } } satisfies ChartConfig;
const conversionsConfig = { conversions: { label: "Conversions", color: "var(--chart-3)" } } satisfies ChartConfig;

const ChartGroup14 = ({ className }: ChartGroup14Props) => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: subDays(new Date(), 29),
    to: new Date(),
  });
  const [selectedPreset, setSelectedPreset] = useState("Last 30 days");

  const filteredData = useMemo(() => {
    const from = dateRange?.from ?? subDays(new Date(), 29);
    const to = dateRange?.to ?? new Date();
    return generateDataForRange(from, to);
  }, [dateRange]);

  const stats = useMemo(() => {
    const totalRevenue = filteredData.reduce((sum, item) => sum + item.revenue, 0);
    const totalSessions = filteredData.reduce((sum, item) => sum + item.sessions, 0);
    const totalConversions = filteredData.reduce((sum, item) => sum + item.conversions, 0);
    const avgBounceRate = filteredData.length > 0 
      ? Math.round(filteredData.reduce((sum, item) => sum + item.bounceRate, 0) / filteredData.length) 
      : 0;
    const conversionRate = totalSessions > 0 ? ((totalConversions / totalSessions) * 100).toFixed(1) : "0";
    return { totalRevenue, totalSessions, totalConversions, avgBounceRate, conversionRate };
  }, [filteredData]);

  const handlePresetChange = (value: string) => {
    const preset = presetRanges.find(p => p.label === value);
    if (preset) {
      setDateRange(preset.getValue());
      setSelectedPreset(value);
    }
  };

  return (
    <section className={cn("py-32", className)}>
      <div className="container space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Analytics Dashboard</h2>
          <p className="text-muted-foreground">Real-time insights into your business</p>
        </div>
        <div className="flex items-center gap-2">
          <Select value={selectedPreset} onValueChange={handlePresetChange}>
            <SelectTrigger className="w-[140px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {presetRanges.map((preset) => (
                <SelectItem key={preset.label} value={preset.label}>
                  {preset.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">
                <CalendarIcon className="mr-2 size-4" />
                {dateRange?.from ? (
                  dateRange.to ? (
                    <>
                      {format(dateRange.from, "MMM d")} - {format(dateRange.to, "MMM d")}
                    </>
                  ) : (
                    format(dateRange.from, "MMM d, yyyy")
                  )
                ) : (
                  "Pick dates"
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar
                mode="range"
                numberOfMonths={2}
                selected={dateRange}
                onSelect={(range) => {
                  setDateRange(range);
                  setSelectedPreset("Custom");
                }}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* Main Bento Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Stats Cards - Top Row */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="rounded-lg bg-primary/10 p-2">
                <Activity className="size-5 text-primary" />
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                <TrendingUp className="mr-1 size-3" />
                12.5%
              </Badge>
            </div>
            <div className="mt-3">
              <p className="text-sm text-muted-foreground">Total Revenue</p>
              <p className="text-2xl font-bold">${stats.totalRevenue.toLocaleString()}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="rounded-lg bg-blue-100 p-2">
                <Users className="size-5 text-blue-600" />
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                <TrendingUp className="mr-1 size-3" />
                8.2%
              </Badge>
            </div>
            <div className="mt-3">
              <p className="text-sm text-muted-foreground">Total Sessions</p>
              <p className="text-2xl font-bold">{stats.totalSessions.toLocaleString()}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="rounded-lg bg-green-100 p-2">
                <Zap className="size-5 text-green-600" />
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                <TrendingUp className="mr-1 size-3" />
                5.4%
              </Badge>
            </div>
            <div className="mt-3">
              <p className="text-sm text-muted-foreground">Conversion Rate</p>
              <p className="text-2xl font-bold">{stats.conversionRate}%</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="rounded-lg bg-orange-100 p-2">
                <Globe className="size-5 text-orange-600" />
              </div>
              <Badge variant="secondary" className="bg-red-100 text-red-700">
                <TrendingDown className="mr-1 size-3" />
                2.1%
              </Badge>
            </div>
            <div className="mt-3">
              <p className="text-sm text-muted-foreground">Bounce Rate</p>
              <p className="text-2xl font-bold">{stats.avgBounceRate}%</p>
            </div>
          </CardContent>
        </Card>

        {/* Revenue Chart - Spans 2 columns */}
        <Card className="md:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Revenue Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={revenueConfig} className="h-52 w-full">
              <AreaChart data={filteredData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="revGrad14" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-revenue)" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="var(--color-revenue)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="dateStr" axisLine={false} tickLine={false} tickMargin={8} fontSize={11" interval="preserveStartEnd" />
                <YAxis axisLine={false} tickLine={false} tickMargin={8} fontSize={11" tickFormatter={(v) => `$${v / 1000}k`} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area type="monotone" dataKey="revenue" stroke="var(--color-revenue)" strokeWidth={2} fill="url(#revGrad14)" />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Traffic Channels - Donut */}
        <Card className="md:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Traffic Channels</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-6">
              <ChartContainer config={channelConfig} className="relative size-32 shrink-0">
                  <PieChart>
                  <ChartTooltip content={<ChartTooltipContent nameKey="name" hideLabel />} cursor={false} />
                    <Pie
                      data={channelData}
                      cx="50%"
                      cy="50%"
                      innerRadius={35}
                      outerRadius={55}
                      paddingAngle={2}
                      dataKey="value"
                    nameKey="name"
                      strokeWidth={0}
                  />
                  </PieChart>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold">{stats.totalSessions.toLocaleString()}</span>
                </div>
              </ChartContainer>
              <div className="flex-1 space-y-2">
                {channelData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="size-2 rounded-full" style={{ backgroundColor: item.fill }} />
                      <span className="text-muted-foreground">{item.name}</span>
                    </div>
                    <span className="font-medium">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Top Pages */}
        <Card className="md:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-base">Top Pages</CardTitle>
            <Button variant="ghost" size="sm" className="text-xs">
              View all <ChevronRight className="ml-1 size-3" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topPages.map((page, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-5 text-center text-sm text-muted-foreground">{index + 1}</span>
                    <span className="text-sm font-medium">{page.path}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground">{page.views.toLocaleString()}</span>
                    <span className={cn("text-xs", page.change >= 0 ? "text-green-600" : "text-red-600")}>
                      {page.change >= 0 ? "+" : ""}{page.change}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Active Users */}
        <Card className="md:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-base">Most Active Users</CardTitle>
            <Button variant="ghost" size="sm" className="text-xs">
              View all <ChevronRight className="ml-1 size-3" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topUsers.map((user, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="size-8">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>{user.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{user.name}</p>
                      <p className="text-xs text-muted-foreground">{user.email}</p>
                    </div>
                  </div>
                  <Badge variant="secondary">{user.sessions} sessions</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    </section>
  );
};

export { ChartGroup14 };
```

## Usage Notes
- The bento grid automatically adjusts from 1 to 4 columns based on screen size
- Traffic channel donut chart includes a center label showing total sessions
- Top pages and active users sections include "View all" buttons for navigation
- User avatars include fallback initials when images are not available
- Trend indicators use color-coded badges with up/down arrows
- The date picker combines a select dropdown with custom calendar functionality
