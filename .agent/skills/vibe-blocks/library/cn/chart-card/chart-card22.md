# Chart Card 22

## Metadata
- **Category**: Chart Card
- **Objective**: Treemap chart for displaying hierarchical data in a space-filling visualization.
- **Use Case**: Sales category analysis, hierarchical data visualization, market share breakdown, product category distribution.
- **Visual Style**: Card-based layout with nested rectangles, color-coded categories, custom content rendering, and responsive design.
- **Interactivity**: Hover effects on rectangles, custom content rendering with labels, hierarchical data structure.

## Description
A treemap chart card featuring nested rectangles that represent hierarchical data in a space-filling visualization. Each rectangle's size is proportional to its value, and colors represent different categories. Includes custom content rendering that displays labels within rectangles when space permits, a legend showing category colors, and interactive hover effects. The chart displays sales data across product categories with a clean, modern design suitable for analytics dashboards.

## Source Code
```tsx
"use client";

import { Treemap, ResponsiveContainer } from "recharts";

import { cn } from "@/lib/utils";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ChartCard22Props {
  title?: string;
  description?: string;
  className?: string;
}

const chartData = [
  {
    name: "Electronics",
    children: [
      { name: "Phones", size: 4500, color: "var(--chart-1)" },
      { name: "Laptops", size: 3200, color: "var(--chart-1)" },
      { name: "Tablets", size: 1800, color: "var(--chart-1)" },
    ],
  },
  {
    name: "Clothing",
    children: [
      { name: "Shirts", size: 2800, color: "var(--chart-2)" },
      { name: "Pants", size: 2100, color: "var(--chart-2)" },
      { name: "Shoes", size: 1600, color: "var(--chart-2)" },
    ],
  },
  {
    name: "Home",
    children: [
      { name: "Furniture", size: 2400, color: "var(--chart-3)" },
      { name: "Decor", size: 1200, color: "var(--chart-3)" },
    ],
  },
  {
    name: "Sports",
    children: [
      { name: "Equipment", size: 1800, color: "var(--chart-4)" },
      { name: "Apparel", size: 900, color: "var(--chart-4)" },
    ],
  },
];

interface TreemapContentProps {
  x: number;
  y: number;
  width: number;
  height: number;
  name: string;
  color?: string;
  depth: number;
}

const CustomContent = ({
  x,
  y,
  width,
  height,
  name,
  color,
  depth,
}: TreemapContentProps) => {
  if (depth !== 2) return null;

  const showLabel = width > 50 && height > 30;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={color || "var(--chart-1)"}
        stroke="var(--background)"
        strokeWidth={2}
        rx={4}
      />
      {showLabel && (
        <text
          x={x + width / 2}
          y={y + height / 2}
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-white text-xs font-medium"
          style={{ pointerEvents: "none" }}
        >
          {name}
        </text>
      )}
    </g>
  );
};

const ChartCard22 = ({
  title = "Sales by Category",
  description = "Revenue distribution across product categories",
  className,
}: ChartCard22Props) => {
  return (
    <Card className={cn("max-w-2xl w-full", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <Treemap
              data={chartData}
              dataKey="size"
              aspectRatio={4 / 3}
              stroke="var(--background)"
              content={<CustomContent x={0} y={0} width={0} height={0} name="" depth={0} />}
            />
          </ResponsiveContainer>
        </div>
        {/* Legend */}
        <div className="mt-4 flex flex-wrap gap-4">
          {chartData.map((category, index) => (
            <div key={category.name} className="flex items-center gap-2">
              <div
                className="size-3 rounded-sm"
                style={{
                  backgroundColor: `var(--chart-${index + 1})`,
                }}
              />
              <span className="text-sm">{category.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export { ChartCard22 };
```
