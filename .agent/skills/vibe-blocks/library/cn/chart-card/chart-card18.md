# Chart Card 18

## Metadata
- **Category**: Chart Card
- **Objective**: Multi-ring activity chart for displaying progress across multiple goals with interactive legend.
- **Use Case**: Activity tracking, fitness goals, multi-metric progress monitoring, health dashboards.
- **Visual Style**: Card-based layout with concentric activity rings, interactive legend, and responsive design.
- **Interactivity**: Hover effects that highlight individual rings and sync with legend items, clickable legend items.

## Description
An activity rings chart card featuring multiple concentric rings for displaying progress across different goals (e.g., Move, Exercise, Stand). Includes interactive hover effects that highlight individual rings and sync with the legend, a legend showing each activity with current/max values and percentages, and smooth transitions. The chart displays activity data with color-coded rings and a clean, modern design suitable for fitness and health dashboards.

## Source Code
```tsx
"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface RingData {
  label: string;
  value: number;
  max: number;
  color: string;
}

interface ChartCard18Props {
  title?: string;
  description?: string;
  rings?: RingData[];
  className?: string;
}

const defaultRings: RingData[] = [
  { label: "Move", value: 420, max: 500, color: "var(--chart-5)" },
  { label: "Exercise", value: 28, max: 30, color: "var(--chart-1)" },
  { label: "Stand", value: 10, max: 12, color: "var(--chart-2)" },
];

const ChartCard18 = ({
  title = "Activity Rings",
  description = "Daily activity progress",
  rings = defaultRings,
  className,
}: ChartCard18Props) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const size = 180;
  const strokeWidth = 16;
  const gap = 6;

  return (
    <Card className={cn("max-w-2xl w-full", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center gap-8">
          {/* Rings */}
          <div className="relative" style={{ width: size, height: size }}>
            <svg width={size} height={size} className="-rotate-90">
              {rings.map((ring, index) => {
                const radius = (size - strokeWidth) / 2 - index * (strokeWidth + gap);
                const circumference = 2 * Math.PI * radius;
                const percentage = Math.min(ring.value / ring.max, 1);
                const strokeDashoffset = circumference * (1 - percentage);
                const isActive = activeIndex === index;
                const isInactive = activeIndex !== null && activeIndex !== index;

                return (
                  <g
                    key={ring.label}
                    style={{ cursor: "pointer" }}
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                  >
                    {/* Background track */}
                    <circle
                      cx={size / 2}
                      cy={size / 2}
                      r={radius}
                      fill="none"
                      stroke="var(--muted)"
                      strokeWidth={strokeWidth}
                      style={{
                        transition: "opacity 0.15s ease-out",
                        opacity: isInactive ? 0.3 : 1,
                      }}
                    />
                    {/* Progress */}
                    <circle
                      cx={size / 2}
                      cy={size / 2}
                      r={radius}
                      fill="none"
                      stroke={ring.color}
                      strokeWidth={strokeWidth}
                      strokeLinecap="round"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      style={{
                        transition: "stroke-dashoffset 0.5s ease-in-out, opacity 0.15s ease-out",
                        opacity: isInactive ? 0.3 : 1,
                      }}
                    />
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Legend */}
          <div className="flex flex-col gap-4">
            {rings.map((ring, index) => {
              const percentage = Math.round((ring.value / ring.max) * 100);
              const isActive = activeIndex === index;
              const isInactive = activeIndex !== null && activeIndex !== index;

              return (
                <div
                  key={ring.label}
                  className={cn(
                    "flex cursor-pointer items-center gap-3 rounded-md px-2 py-1.5 transition-all duration-150 ease-out",
                    isActive && "bg-muted",
                    !isActive && "hover:bg-muted/50",
                    isInactive && "opacity-40"
                  )}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  <div
                    className={cn(
                      "size-3 rounded-full transition-transform duration-150 ease-out",
                      isActive && "scale-125"
                    )}
                    style={{ backgroundColor: ring.color }}
                  />
                  <div>
                    <div className="text-sm font-medium">{ring.label}</div>
                    <div className="text-xs text-muted-foreground">
                      {ring.value}/{ring.max} ({percentage}%)
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export { ChartCard18 };
```
```
