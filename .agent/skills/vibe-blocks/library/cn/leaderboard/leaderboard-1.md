# Leaderboard 1

## Metadata
- **Category**: Leaderboard
- **Objective**: Display a simple ranking of items with a visual progress bar indicating relative value.
- **Use Case**: Best for showing top referring countries, traffic sources, or any metric where seeing the relative scale alongside the value is important.
- **Visual Style**: Clean and analytical. Utilizes the Shadcn `Card` component for structure and the `Progress` component to act as a horizontal bar chart behind or below each item. 
- **Interactivity**: Read-only data presentation. Calculates percentage based on the maximum value in the items list to properly scale the progress bars.

## Source Code

```tsx
import { cn } from "@/lib/utils";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface LeaderboardItem {
  name: string;
  value: number;
  maxValue?: number;
}

interface Leaderboard1Props {
  title?: string;
  description?: string;
  items?: LeaderboardItem[];
  valuePrefix?: string;
  className?: string;
}

const defaultItems: LeaderboardItem[] = [
  { name: "United States", value: 4520 },
  { name: "United Kingdom", value: 3210 },
  { name: "Germany", value: 2890 },
  { name: "France", value: 1890 },
  { name: "Canada", value: 1240 },
];

const Leaderboard1 = ({
  title = "Top Countries",
  description = "Visitors by country",
  items = defaultItems,
  valuePrefix = "",
  className,
}: Leaderboard1Props) => {
  const maxValue = items[0]?.value || 1;

  return (
    <Card className={cn("max-w-2xl w-full", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">{item.name}</span>
              <span className="text-muted-foreground">
                {valuePrefix}
                {item.value.toLocaleString()}
              </span>
            </div>
            <Progress
              value={(item.value / maxValue) * 100}
              className="h-2"
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export { Leaderboard1 };
```
