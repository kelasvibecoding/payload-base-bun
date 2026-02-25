# Live Purchase 3

## Metadata
- **Category**: Live Purchase Notification
- **Objective**: Synthesize individual purchase notifications with overarching site activity statistics (viewers and daily sales).
- **Use Case**: High-velocity product drops, limited edition releases, or flash sales where aggregate momentum is highly persuasive. 
- **Visual Style**: A unique two-tier structure. The top tier is a standard notification card focused on a recent event (using a generic success icon instead of a product image). The bottom tier is a persistent, pill-shaped "Stats Bar" that anchors the component.
- **Interactivity**: The top notification card horizontally slides in and out (`translate-x-4 opacity-0`) to rotate through events, while the bottom stats bar remains static. Both elements disappear entirely if the entire component is dismissed.

## Source Code

```tsx
"use client";

import { CheckCircle2, ShoppingBag, Users, X } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Purchase {
  customerInitial: string;
  productName: string;
  timeAgo: string;
}

interface LivePurchase3Props {
  purchases?: Purchase[];
  viewerCount?: number;
  purchasesToday?: number;
  className?: string;
}

const DEFAULT_PURCHASES: Purchase[] = [
  { customerInitial: "S", productName: "Wireless Earbuds", timeAgo: "just now" },
  {
    customerInitial: "M",
    productName: "Smart Watch Pro",
    timeAgo: "1 min ago",
  },
  {
    customerInitial: "J",
    productName: "Laptop Stand",
    timeAgo: "2 min ago",
  },
];

const LivePurchase3 = ({
  purchases = DEFAULT_PURCHASES,
  viewerCount = 47,
  purchasesToday = 156,
  className,
}: LivePurchase3Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    if (purchases.length <= 1) return;

    const timer = setInterval(() => {
      setShowNotification(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % purchases.length);
        setShowNotification(true);
      }, 300);
    }, 4000);

    return () => clearInterval(timer);
  }, [purchases.length]);

  if (!isVisible) return null;

  const current = purchases[currentIndex];

  return (
    <div className={cn("fixed bottom-6 left-6 z-50 space-y-3", className)}>
      {/* Purchase Notification */}
      <Card
        className={cn(
          "w-72 gap-0 p-0 shadow-lg transition-all duration-300",
          showNotification
            ? "translate-x-0 opacity-100"
            : "-translate-x-4 opacity-0",
        )}
      >
        <CardContent className="p-3">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-400">
              <CheckCircle2 className="size-5" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium">New purchase!</p>
              <p className="truncate text-sm text-muted-foreground">
                Someone bought {current.productName}
              </p>
              <p className="text-xs text-muted-foreground">{current.timeAgo}</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="size-6 shrink-0"
              onClick={() => setIsVisible(false)}
            >
              <X className="size-3" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Stats Bar */}
      <div className="flex items-center gap-4 rounded-full bg-background px-4 py-2 shadow-lg ring-1 ring-border">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Users className="size-4 text-muted-foreground" />
            <span className="absolute -right-1 -top-1 flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
          </div>
          <span className="text-sm">
            <span className="font-semibold">{viewerCount}</span>{" "}
            <span className="text-muted-foreground">viewing</span>
          </span>
        </div>
        <div className="h-4 w-px bg-border" />
        <div className="flex items-center gap-2">
          <ShoppingBag className="size-4 text-muted-foreground" />
          <span className="text-sm">
            <span className="font-semibold">{purchasesToday}</span>{" "}
            <span className="text-muted-foreground">sold today</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export { LivePurchase3 };
```
