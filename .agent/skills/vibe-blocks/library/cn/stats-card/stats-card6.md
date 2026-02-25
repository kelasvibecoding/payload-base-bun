# Stats Card 6

## Metadata
- **Category**: Stats Card
- **Objective**: Device breakdown statistics with color-coded segments
- **Use Case**: Analytics dashboard showing revenue or usage by device type
- **Visual Style**: Card-based layout with color-coded breakdown list
- **Interactivity**: Static display with visual color indicators

## Description
A comprehensive stats card component that displays device breakdown statistics with color-coded segments. Shows a total value and breaks down the data by device type (Desktop, Mobile, Tablet) with individual values and percentages. Perfect for analytics dashboards showing device usage, revenue breakdown, or traffic distribution across different device types.

## Source Code
```tsx
import { cn } from "@/lib/utils";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface BreakdownItem {
  label: string;
  value: string;
  percentage?: number;
}

interface StatsCard6Props {
  title?: string;
  totalValue?: string;
  breakdown?: BreakdownItem[];
  className?: string;
}

const defaultBreakdown: BreakdownItem[] = [
  { label: "Desktop", value: "$32,450", percentage: 65 },
  { label: "Mobile", value: "$12,300", percentage: 25 },
  { label: "Tablet", value: "$5,250", percentage: 10 },
];

const StatsCard6 = ({
  title = "Revenue by Device",
  totalValue = "$50,000",
  breakdown = defaultBreakdown,
  className,
}: StatsCard6Props) => {
  return (
    <Card className={cn("w-full max-w-xs", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{totalValue}</div>
        <div className="mt-4 space-y-3">
          {breakdown.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className="size-2 rounded-full"
                  style={{
                    backgroundColor: `var(--chart-${(index % 5) + 1})`,
                  }}
                />
                <span className="text-sm">{item.label}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-medium">{item.value}</span>
                {item.percentage !== undefined && (
                  <span className="text-muted-foreground">
                    {item.percentage}%
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export { StatsCard6 };
```
