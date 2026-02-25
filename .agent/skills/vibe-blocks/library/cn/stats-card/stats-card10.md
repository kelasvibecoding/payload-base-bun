# Stats Card 10

## Metadata
- **Category**: Stats Card
- **Objective**: Sales performance card with trend indicator and colored border
- **Use Case**: Dashboard cards showing sales metrics with directional indicators
- **Visual Style**: Card-based layout with colored left border and trend badge
- **Interactivity**: Static display with visual trend indicators

## Description
A sales-focused stats card component featuring a colored left border and trend badge. Displays a title, main value, and percentage change with directional arrows and color coding (green for positive, red for negative). The card includes a colored left border and a rounded badge showing the trend. Perfect for sales dashboards and performance tracking with clear visual indicators.

## Source Code
```tsx
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Card, CardContent } from "@/components/ui/card";

interface StatsCard10Props {
  title?: string;
  value?: string;
  change?: number;
  period?: string;
  className?: string;
}

const StatsCard10 = ({
  title = "Total Sales",
  value = "$23,456",
  change = 12.5,
  period = "vs last week",
  className,
}: StatsCard10Props) => {
  const isPositive = change >= 0;

  return (
    <Card
      className={cn(
        "w-full max-w-xs border-l-4",
        isPositive ? "border-l-green-500" : "border-l-red-500",
        className
      )}
    >
      <CardContent className="pt-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="mt-1 text-3xl font-bold">{value}</p>
          </div>
          <div
            className={cn(
              "flex items-center gap-1 rounded-full px-2 py-1 text-sm font-medium",
              isPositive
                ? "bg-green-500/10 text-green-600"
                : "bg-red-500/10 text-red-600"
            )}
          >
            {isPositive ? (
              <ArrowUpRight className="size-4" />
            ) : (
              <ArrowDownRight className="size-4" />
            )}
            {Math.abs(change)}%
          </div>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{period}</p>
      </CardContent>
    </Card>
  );
};

export { StatsCard10 };
```
