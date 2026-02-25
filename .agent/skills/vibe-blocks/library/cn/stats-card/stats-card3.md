# Stats Card 3

## Metadata
- **Category**: Stats Card
- **Objective**: Progress tracking card with goal completion metrics
- **Use Case**: Dashboard cards showing progress toward monthly or quarterly goals
- **Visual Style**: Card-based layout with progress bar and percentage completion
- **Interactivity**: Static display with visual progress indicators

## Description
A progress-focused stats card component that displays goal tracking metrics. Shows a title, current value, target value, and a progress bar with percentage completion. Perfect for dashboards showing monthly goals, fundraising targets, or any metric that needs to be tracked against a target value.

## Source Code
```tsx
import { cn } from "@/lib/utils";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface StatsCard3Props {
  title?: string;
  value?: number;
  target?: number;
  unit?: string;
  className?: string;
}

const StatsCard3 = ({
  title = "Monthly Goal",
  value = 7500,
  target = 10000,
  unit = "$",
  className,
}: StatsCard3Props) => {
  const percentage = Math.min(Math.round((value / target) * 100), 100);
  const formattedValue = value.toLocaleString();
  const formattedTarget = target.toLocaleString();

  return (
    <Card className={cn("w-full max-w-xs", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">
          {unit}
          {formattedValue}
        </div>
        <div className="mt-3 space-y-2">
          <Progress value={percentage} className="h-2" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{percentage}% complete</span>
            <span>
              Target: {unit}
              {formattedTarget}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export { StatsCard3 };
```
