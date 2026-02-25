# Stats Card 7

## Metadata
- **Category**: Stats Card
- **Objective**: Storage usage statistics with pie chart visualization
- **Use Case**: Dashboard cards showing storage usage, disk space, or capacity metrics
- **Visual Style**: Card-based layout with circular pie chart and percentage display
- **Interactivity**: Static display with visual pie chart representation

## Description
A storage-focused stats card component featuring a circular pie chart with percentage display. Shows storage usage with a donut-style pie chart, current usage value, and total capacity. Perfect for displaying disk space, memory usage, bandwidth consumption, or any metric that shows usage against a total capacity.

## Source Code
```tsx
"use client";

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

import { cn } from "@/lib/utils";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatsCard7Props {
  title?: string;
  value?: string;
  percentage?: number;
  label?: string;
  className?: string;
}

const StatsCard7 = ({
  title = "Storage Used",
  value = "75 GB",
  percentage = 75,
  label = "of 100 GB",
  className,
}: StatsCard7Props) => {
  const data = [
    { name: "used", value: percentage },
    { name: "remaining", value: 100 - percentage },
  ];

  return (
    <Card className={cn("w-full max-w-xs", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4">
          <div className="relative size-20">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={28}
                  outerRadius={38}
                  paddingAngle={0}
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                  strokeWidth={0}
                >
                  <Cell fill="var(--chart-1)" />
                  <Cell fill="var(--muted)" />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-semibold">{percentage}%</span>
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold">{value}</div>
            <div className="text-sm text-muted-foreground">{label}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export { StatsCard7 };
```
