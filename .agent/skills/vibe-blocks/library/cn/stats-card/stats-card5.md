# Stats Card 5

## Metadata
- **Category**: Stats Card
- **Objective**: Icon-based statistics display with trend indicators
- **Use Case**: Dashboard cards showing metrics with visual icons and trend information
- **Visual Style**: Card-based layout with prominent icons and value display
- **Interactivity**: Static display with customizable icons and metrics

## Description
A versatile stats card component featuring prominent icons alongside key metrics. Displays a title, main value, and subtitle with trend information, plus a customizable icon (dollar, users, cart, or trending). Perfect for dashboards showing revenue, user counts, sales, or growth metrics with visual icon indicators.

## Source Code
```tsx
import { DollarSign, Users, ShoppingCart, TrendingUp } from "lucide-react";

import { cn } from "@/lib/utils";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type IconType = "dollar" | "users" | "cart" | "trending";

interface StatsCard5Props {
  title?: string;
  value?: string;
  subtitle?: string;
  icon?: IconType;
  className?: string;
}

const iconMap = {
  dollar: DollarSign,
  users: Users,
  cart: ShoppingCart,
  trending: TrendingUp,
};

const StatsCard5 = ({
  title = "Total Revenue",
  value = "$45,231",
  subtitle = "+20.1% from last month",
  icon = "dollar",
  className,
}: StatsCard5Props) => {
  const Icon = iconMap[icon];

  return (
    <Card className={cn("w-full max-w-xs", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="rounded-md bg-primary/10 p-2">
          <Icon className="size-4 text-primary" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{value}</div>
        <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
      </CardContent>
    </Card>
  );
};

export { StatsCard5 };
```
