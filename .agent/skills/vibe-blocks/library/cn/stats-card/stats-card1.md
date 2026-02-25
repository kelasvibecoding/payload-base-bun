# Stats Card 1

## Metadata
- **Category**: Stats Card
- **Objective**: Revenue statistics display with trend indicators
- **Use Case**: Financial dashboard cards showing revenue metrics with percentage changes
- **Visual Style**: Card-based layout with trend icons and percentage indicators
- **Interactivity**: Static display with visual trend indicators

## Description
A clean stats card component displaying financial metrics with trend indicators. Features a card layout with title, value, and percentage change with directional arrows (up/down). Perfect for dashboards showing revenue, growth, or performance metrics with visual trend indicators.

## Source Code
```tsx
import { TrendingUp, TrendingDown } from "lucide-react";

import { cn } from "@/lib/utils";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatsCard1Props {
  title?: string;
  value?: string;
  change?: number;
  changeLabel?: string;
  className?: string;
}

const StatsCard1 = ({
  title = "Total Revenue",
  value = "$45,231.89",
  change = 20.1,
  changeLabel = "from last month",
  className,
}: StatsCard1Props) => {
  const isPositive = change >= 0;

  return (
    <Card className={cn("w-full max-w-xs", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{value}</div>
        <div className="mt-1 flex items-center gap-1 text-sm">
          {isPositive ? (
            <TrendingUp className="size-4 text-green-500" />
          ) : (
            <TrendingDown className="size-4 text-red-500" />
          )}
          <span className={isPositive ? "text-green-500" : "text-red-500"}>
            {isPositive ? "+" : ""}
            {change}%
          </span>
          <span className="text-muted-foreground">{changeLabel}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export { StatsCard1 };
```
