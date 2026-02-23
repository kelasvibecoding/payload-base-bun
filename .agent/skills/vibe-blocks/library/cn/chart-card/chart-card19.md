# Chart Card 19

## Metadata
- **Category**: Chart Card
- **Objective**: Radial bar chart for displaying proportional distributions in a circular layout.
- **Use Case**: Browser share visualization, market share analysis, percentage distributions, categorical proportion display.
- **Visual Style**: Card-based layout with radial bar chart, color-coded segments, legend, and responsive design.
- **Interactivity**: Hover tooltips displaying percentage values, static legend.

## Description
A radial bar chart card featuring a circular layout with bars extending from the center to display proportional distributions. Includes color-coded segments for each category, interactive tooltips that display percentage values, and a legend to identify each data series. The chart displays browser share data with color-coded radial bars and a clean, modern design suitable for analytics dashboards.

## Source Code
```tsx
"use client";

import { RadialBar, RadialBarChart, PolarAngleAxis } from "recharts";

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

interface ChartCard19Props {
  title?: string;
  description?: string;
  className?: string;
}

const chartData = [
  { name: "Chrome", value: 45, fill: "var(--chart-1)" },
  { name: "Safari", value: 28, fill: "var(--chart-2)" },
  { name: "Firefox", value: 15, fill: "var(--chart-3)" },
  { name: "Edge", value: 8, fill: "var(--chart-4)" },
  { name: "Other", value: 4, fill: "var(--chart-5)" },
];

const chartConfig = {
  Chrome: { label: "Chrome", color: "var(--chart-1)" },
  Safari: { label: "Safari", color: "var(--chart-2)" },
  Firefox: { label: "Firefox", color: "var(--chart-3)" },
  Edge: { label: "Edge", color: "var(--chart-4)" },
  Other: { label: "Other", color: "var(--chart-5)" },
} satisfies ChartConfig;

const ChartCard19 = ({
  title = "Browser Share",
  description = "Traffic by browser type",
  className,
}: ChartCard19Props) => {
  return (
    <Card className={cn("max-w-2xl w-full", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center gap-6">
          <ChartContainer config={chartConfig} className="aspect-square h-48">
            <RadialBarChart
              data={chartData}
              innerRadius={30}
              outerRadius={90}
              startAngle={90}
              endAngle={-270}
            >
              <PolarAngleAxis
                type="number"
                domain={[0, 100]}
                angleAxisId={0}
                tick={false}
              />
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent
                    hideLabel
                    formatter={(value, name) => (
                      <span>
                        {name}: {value}%
                      </span>
                    )}
                  />
                }
              />
              <RadialBar
                dataKey="value"
                background={{ fill: "var(--muted)" }}
                cornerRadius={4}
              />
            </RadialBarChart>
          </ChartContainer>

          {/* Legend */}
          <div className="flex flex-col gap-2">
            {chartData.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div
                  className="size-3 rounded-sm"
                  style={{ backgroundColor: item.fill }}
                />
                <span className="text-sm">{item.name}</span>
                <span className="ml-auto text-sm font-medium">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export { ChartCard19 };
```
