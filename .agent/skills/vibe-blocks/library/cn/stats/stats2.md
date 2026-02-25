# Stats 2

## Metadata
- **Category**: Stats
- **Objective**: Platform performance metrics with trend indicators
- **Use Case**: Display key statistics with directional arrows showing growth/decline
- **Visual Style**: Grid-based card layout with arrow icons and metrics
- **Interactivity**: Static display with visual trend indicators

## Description
A comprehensive stats section displaying six key performance metrics using card-based layout. Each stat includes directional arrows (up/down) to indicate trends, with green for positive growth and red for decline. Features numbers, percentages, and an infinity symbol with supporting descriptive text.

## Source Code
```tsx
import { ArrowDown, ArrowUp, Infinity as InfinityIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { Card } from "@/components/ui/card";

interface Stats2Props {
  className?: string;
}

const Stats2 = ({ className }: Stats2Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <h1 className="text-center text-4xl font-semibold lg:text-6xl">
          Platform Performance Insights
        </h1>
        <div className="grid gap-6 pt-9 text-center md:grid-cols-3 lg:pt-20">
          <Card className="border-none bg-accent p-8 lg:p-10">
            <p className="mb-1 flex items-center justify-center text-2xl font-semibold lg:text-3xl">
              <ArrowUp className="mr-1 h-8 text-green-400" />
              20,000
            </p>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </Card>
          <Card className="border-none bg-accent p-8 lg:p-10">
            <p className="mb-1 flex items-center justify-center text-2xl font-semibold lg:text-3xl">
              <ArrowUp className="mr-1 h-8 text-green-400" />
              20+
            </p>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </Card>
          <Card className="border-none bg-accent p-8 lg:p-10">
            <p className="mb-1 flex items-center justify-center text-2xl font-semibold lg:text-3xl">
              <ArrowDown className="mr-1 h-8 text-red-400" />
              50%
            </p>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </Card>
          <Card className="border-none bg-accent p-8 lg:p-10">
            <p className="mb-1 flex items-center justify-center text-2xl font-semibold lg:text-3xl">
              <ArrowUp className="mr-1 h-8 text-green-400" />
              100+
            </p>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </Card>
          <Card className="border-none bg-accent p-8 lg:p-10">
            <p className="mb-1 flex items-center justify-center text-2xl font-semibold lg:text-3xl">
              <ArrowUp className="mr-1 h-8 text-green-400" />
              100%
            </p>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </Card>
          <Card className="border-none bg-accent p-8 lg:p-10">
            <p className="mb-1 flex items-center justify-center text-2xl font-semibold lg:text-3xl">
              <InfinityIcon className="mr-1 h-8" />
              Forever
            </p>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export { Stats2 };
```
