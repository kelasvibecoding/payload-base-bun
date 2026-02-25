# Stats Card 8

## Metadata
- **Category**: Stats Card
- **Objective**: System status monitoring with health indicators
- **Use Case**: Dashboard cards showing system health, uptime, or status metrics
- **Visual Style**: Card-based layout with status icons and color-coded indicators
- **Interactivity**: Static display with visual status indicators

## Description
A system status monitoring card component featuring health indicators with color-coded status levels. Displays system metrics with visual status indicators (healthy, warning, critical) using appropriate icons and colors. Perfect for monitoring system health, uptime status, or any metric that needs to show operational status.

## Source Code
```tsx
import { CheckCircle, AlertCircle, XCircle } from "lucide-react";

import { cn } from "@/lib/utils";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type StatusType = "healthy" | "warning" | "critical";

interface StatsCard8Props {
  title?: string;
  value?: string;
  status?: StatusType;
  statusLabel?: string;
  className?: string;
}

const statusConfig = {
  healthy: {
    icon: CheckCircle,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    label: "Healthy",
  },
  warning: {
    icon: AlertCircle,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    label: "Warning",
  },
  critical: {
    icon: XCircle,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    label: "Critical",
  },
};

const StatsCard8 = ({
  title = "System Status",
  value = "99.9%",
  status = "healthy",
  statusLabel,
  className,
}: StatsCard8Props) => {
  const config = statusConfig[status];
  const Icon = config.icon;
  const displayLabel = statusLabel || config.label;

  return (
    <Card className={cn("w-full max-w-xs", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{value}</div>
        <div className="mt-3 flex items-center gap-2">
          <div className={cn("rounded-full p-1", config.bgColor)}>
            <Icon className={cn("size-4", config.color)} />
          </div>
          <span className={cn("text-sm font-medium", config.color)}>
            {displayLabel}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export { StatsCard8 };
```
