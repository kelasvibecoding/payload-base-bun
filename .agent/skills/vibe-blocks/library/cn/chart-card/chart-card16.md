# Chart Card 16

## Metadata
- **Category**: Chart Card
- **Objective**: Radial bar chart for displaying progress towards a goal with percentage completion.
- **Use Case**: Goal tracking, progress monitoring, target completion, KPI dashboards.
- **Visual Style**: Card-based layout with circular radial bar chart, center text display, and responsive design.
- **Interactivity**: Static percentage display with animated radial bar.

## Description
A radial bar chart card featuring a circular progress indicator for displaying goal completion percentage. Includes a center text display showing the percentage value and label, a background track, and a filled radial bar that animates to show progress. The chart displays goal progress data with a clean, modern design suitable for dashboards and KPI tracking.

## Source Code
```tsx
"use client";

import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

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
} from "@/components/ui/chart";

interface ChartCard16Props {
  title?: string;
  description?: string;
  value?: number;
  max?: number;
  className?: string;
}

const chartConfig = {
  value: {
    label: "Progress",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

const ChartCard16 = ({
  title = "Goal Progress",
  description = "Monthly target completion",
  value = 72,
  max = 100,
  className,
}: ChartCard16Props) => {
  const chartData = [{ value, fill: "var(--chart-1)" }];
  const percentage = Math.round((value / max) * 100);

  return (
    <Card className={cn("max-w-2xl w-full", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square h-52">
          <RadialBarChart
            data={chartData}
            startAngle={90}
            endAngle={90 - (360 * value) / max}
            innerRadius={80}
            outerRadius={110}
          >
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-4xl font-bold"
                        >
                          {percentage}%
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground text-sm"
                        >
                          of target
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="value"
              background={{ fill: "var(--muted)" }}
              cornerRadius={10}
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export { ChartCard16 };
```
