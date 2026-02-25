# Stats Card 9

## Metadata
- **Category**: Stats Card
- **Objective**: Toggleable revenue statistics with period selection
- **Use Case**: Monthly recurring revenue (MRR) vs annual recurring revenue (ARR) display
- **Visual Style**: Card-based layout with tab-based period toggle
- **Interactivity**: Interactive tabs for switching between monthly and annual views

## Description
An interactive stats card component featuring toggleable revenue statistics. Displays MRR (Monthly Recurring Revenue) and ARR (Annual Recurring Revenue) with tab-based period selection. Users can switch between monthly and annual views to see different revenue metrics. Perfect for SaaS dashboards and subscription-based business metrics.

## Source Code
```tsx
"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface StatsCard9Props {
  title?: string;
  monthlyValue?: string;
  annualValue?: string;
  monthlyLabel?: string;
  annualLabel?: string;
  className?: string;
}

const StatsCard9 = ({
  title = "MRR",
  monthlyValue = "$12,450",
  annualValue = "$149,400",
  monthlyLabel = "Monthly recurring",
  annualLabel = "Annual recurring",
  className,
}: StatsCard9Props) => {
  const [period, setPeriod] = useState<"monthly" | "annual">("monthly");

  return (
    <Card className={cn("w-full max-w-xs", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Tabs
          value={period}
          onValueChange={(v) => setPeriod(v as "monthly" | "annual")}
        >
          <TabsList className="h-7">
            <TabsTrigger value="monthly" className="px-2 text-xs">
              MRR
            </TabsTrigger>
            <TabsTrigger value="annual" className="px-2 text-xs">
              ARR
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">
          {period === "monthly" ? monthlyValue : annualValue}
        </div>
        <p className="mt-1 text-sm text-muted-foreground">
          {period === "monthly" ? monthlyLabel : annualLabel}
        </p>
      </CardContent>
    </Card>
  );
};

export { StatsCard9 };
```
