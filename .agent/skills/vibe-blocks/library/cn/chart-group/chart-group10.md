# Chart Group 10

## Metadata
- **Category**: Chart Group
- **Objective**: Monitoring dashboard layout with request volume chart and service health status cards.
- **Use Case**: System monitoring, service health tracking, request volume analysis, uptime monitoring, error rate tracking.
- **Visual Style**: Two-column grid layout with main chart and service health cards, featuring area charts, progress bars, and status indicators.
- **Interactivity**: Static display with hover tooltips on charts, service status indicators with color coding.

## Description
A monitoring dashboard layout featuring a main area chart displaying request volume over time with error tracking, accompanied by service health status cards. Includes summary statistics showing total requests, errors, and error rates. The service health cards display status indicators (healthy/degraded), uptime percentages, and progress bars. The layout provides comprehensive system monitoring with visual status indicators and performance metrics.

## Source Code
```tsx
"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts";

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
import { Progress } from "@/components/ui/progress";

interface ChartGroup10Props {
  className?: string;
}

const chartData = [
  { hour: "00:00", requests: 1200, errors: 12 },
  { hour: "04:00", requests: 800, errors: 8 },
  { hour: "08:00", requests: 2400, errors: 24 },
  { hour: "12:00", requests: 3200, errors: 48 },
  { hour: "16:00", requests: 2800, errors: 28 },
  { hour: "20:00", requests: 1800, errors: 18 },
];

const chartConfig = {
  requests: { label: "Requests", color: "var(--chart-1)" },
} satisfies ChartConfig;

const services = [
  { name: "API Gateway", status: "healthy", uptime: 99.99 },
  { name: "Database", status: "healthy", uptime: 99.95 },
  { name: "Cache", status: "degraded", uptime: 98.50 },
  { name: "Storage", status: "healthy", uptime: 99.98 },
];

const ChartGroup10 = ({ className }: ChartGroup10Props) => {
  const totalRequests = chartData.reduce((sum, item) => sum + item.requests, 0);
  const totalErrors = chartData.reduce((sum, item) => sum + item.errors, 0);
  const errorRate = ((totalErrors / totalRequests) * 100).toFixed(2);

  return (
    <section className={cn("py-32", className)}>
      <div className="container grid gap-4 md:grid-cols-3">
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Request Volume</CardTitle>
          <CardDescription>Requests over the last 24 hours</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4 grid grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Total Requests</p>
              <p className="text-xl font-bold">{totalRequests.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Errors</p>
              <p className="text-xl font-bold">{totalErrors}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Error Rate</p>
              <p className="text-xl font-bold">{errorRate}%</p>
            </div>
          </div>
          <ChartContainer config={chartConfig} className="h-48 w-full">
            <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="reqGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--color-requests)" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="var(--color-requests)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="hour" axisLine={false} tickLine={false} tickMargin={8} fontSize={12} />
              <YAxis axisLine={false} tickLine={false} tickMargin={8} fontSize={12} tickFormatter={(v) => `${v / 1000}k`} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area type="monotone" dataKey="requests" stroke="var(--color-requests)" strokeWidth={2} fill="url(#reqGrad)" />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Service Health</CardTitle>
          <CardDescription>Current status of services</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {services.map((service, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className={cn(
                      "size-2 rounded-full",
                      service.status === "healthy" ? "bg-green-500" : "bg-yellow-500"
                    )}
                  />
                  <span className="text-sm font-medium">{service.name}</span>
                </div>
                <span className="text-sm text-muted-foreground">{service.uptime}%</span>
              </div>
              <Progress
                value={service.uptime}
                className={cn(
                  "h-1.5",
                  service.status === "degraded" && "[&>div]:bg-yellow-500"
                )}
              />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
    </section>
  );
};

export { ChartGroup10 };
```
