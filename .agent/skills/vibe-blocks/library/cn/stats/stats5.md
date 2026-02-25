# Stats 5

## Metadata
- **Category**: Stats
- **Objective**: Platform performance metrics with trend indicators
- **Use Case**: Business dashboard showing performance statistics with visual indicators
- **Visual Style**: Multi-column layout with large percentages and trend icons
- **Interactivity**: Hover effects with scale transitions and visual indicators

## Description
A modern stats section featuring platform performance insights with visual trend indicators. Displays three key metrics with large percentage values, each accompanied by trend icons (up/down arrows, chart icon) and descriptive labels. Includes hover effects with smooth scale transitions and decorative underline elements. Perfect for business dashboards and performance reporting with engaging visual feedback.

## Source Code
```tsx
import { BarChart3, TrendingDown, TrendingUp } from "lucide-react";

import { cn } from "@/lib/utils";

interface Stats5Props {
  className?: string;
}

const Stats5 = ({ className }: Stats5Props) => {
  return (
    <section className={cn("bg-background/50 py-20 md:py-32", className)}>
      <div className="container flex flex-col items-start text-left">
        <h2 className="mb-12 w-full max-w-[24rem] text-3xl font-bold text-pretty sm:text-4xl md:mb-20 md:max-w-[30rem] lg:max-w-[40rem] lg:text-5xl lg:leading-[4rem]">
          Platform Performance Insights
        </h2>
        <div className="flex w-full flex-col gap-x-8 gap-y-12 border-border md:flex-row md:border-b md:pb-10">
          <div className="group w-full">
            <div className="relative mb-4 text-6xl font-bold text-primary transition-transform duration-300 group-hover:scale-105 md:mb-6 lg:text-7xl">
              <span>95</span>
              <span className="text-4xl lg:text-5xl">%</span>
              <div className="absolute -bottom-2 left-0 h-1 w-12 rounded-full bg-primary"></div>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground md:text-lg">
              <TrendingUp className="h-5 w-5 text-green-500" />
              <span className="leading-7">Metric 1</span>
            </div>
          </div>

          <div className="group w-full">
            <div className="relative mb-4 text-6xl font-bold text-primary transition-transform duration-300 group-hover:scale-105 md:mb-6 lg:text-7xl">
              <span>95</span>
              <span className="text-4xl lg:text-5xl">%</span>
              <div className="absolute -bottom-2 left-0 h-1 w-12 rounded-full bg-primary"></div>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground md:text-lg">
              <TrendingDown className="h-5 w-5 text-red-500" />
              <span className="leading-7">Metric 2</span>
            </div>
          </div>

          <div className="group w-full">
            <div className="relative mb-4 text-6xl font-bold text-primary transition-transform duration-300 group-hover:scale-105 md:mb-6 lg:text-7xl">
              <span>95</span>
              <span className="text-4xl lg:text-5xl">%</span>
              <div className="absolute -bottom-2 left-0 h-1 w-12 rounded-full bg-primary"></div>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground md:text-lg">
              <BarChart3 className="h-5 w-5 text-blue-500" />
              <span className="leading-7">Metric 3</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Stats5 };
```
