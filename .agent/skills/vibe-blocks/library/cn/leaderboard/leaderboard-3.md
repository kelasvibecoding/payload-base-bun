# Leaderboard 3

## Metadata
- **Category**: Leaderboard
- **Objective**: Display rankings alongside trend indicators showing positive, negative, or neutral changes over time.
- **Use Case**: Financial metrics tracking, social media growth comparison, or any ranked list where the delta (change) is as important as the current value.
- **Visual Style**: Trend-oriented and color-coded. Uses `lucide-react` icons (`TrendingUp`, `TrendingDown`, `Minus`) and specific text colors (green, red, gray) to instantly communicate positive or negative momentum.
- **Interactivity**: Read-only display of performance changes.

## Source Code

```tsx
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

import { cn } from "@/lib/utils";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface LeaderboardItem {
  name: string;
  value: string;
  change: "up" | "down" | "same";
  changeAmount?: string;
}

interface Leaderboard3Props {
  title?: string;
  description?: string;
  items?: LeaderboardItem[];
  className?: string;
}

const defaultItems: LeaderboardItem[] = [
  { name: "Organic Search", value: "12,450", change: "up", changeAmount: "+2,340" },
  { name: "Direct", value: "8,230", change: "up", changeAmount: "+890" },
  { name: "Social Media", value: "5,120", change: "down", changeAmount: "-320" },
  { name: "Referral", value: "3,890", change: "same" },
  { name: "Email", value: "2,150", change: "up", changeAmount: "+180" },
];

const Leaderboard3 = ({
  title = "Traffic Sources",
  description = "Top acquisition channels",
  items = defaultItems,
  className,
}: Leaderboard3Props) => {
  return (
    <Card className={cn("max-w-2xl w-full", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex size-8 items-center justify-center rounded-full bg-muted text-sm font-medium">
                  {index + 1}
                </span>
                <span className="font-medium">{item.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold">{item.value}</span>
                <div
                  className={cn(
                    "flex items-center gap-1 text-sm",
                    item.change === "up" && "text-green-500",
                    item.change === "down" && "text-red-500",
                    item.change === "same" && "text-muted-foreground"
                  )}
                >
                  {item.change === "up" && <TrendingUp className="size-4" />}
                  {item.change === "down" && <TrendingDown className="size-4" />}
                  {item.change === "same" && <Minus className="size-4" />}
                  {item.changeAmount && <span>{item.changeAmount}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export { Leaderboard3 };
```
