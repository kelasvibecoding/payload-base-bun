# Promo Banner 4

## Metadata
- **Category**: Promo Banner
- **Objective**: Display a row of trust signals or core value propositions at the top of the viewport.
- **Use Case**: Storefronts that want to establish trust immediately (e.g., "Free Shipping", "30-day Returns", "Secure Checkout").
- **Visual Style**: A flex-wrapped row of small items, each combining a Lucide icon with a short string of text. Uses a `border-b` to cleanly separate it from the main nav below.
- **Interactivity**: Static layout.

## Description
Promo Banner 4 is designed to overcome buyer hesitation. Unlike aggressive urgency banners, this banner provides reassurance. By mapping over an array of `TrustItem` objects, it gracefully wraps on mobile devices while spreading out horizontally on desktop views.

## Source Code

```tsx
import { RotateCcw, Shield, Truck } from "lucide-react";

import { cn } from "@/lib/utils";

interface TrustItem {
  icon: React.ReactNode;
  text: string;
}

interface PromoBanner4Props {
  items?: TrustItem[];
  className?: string;
}

const DEFAULT_ITEMS: TrustItem[] = [
  { icon: <Truck className="size-4" />, text: "Free shipping over $50" },
  { icon: <RotateCcw className="size-4" />, text: "30-day returns" },
  { icon: <Shield className="size-4" />, text: "Secure checkout" },
];

const PromoBanner4 = ({
  items = DEFAULT_ITEMS,
  className,
}: PromoBanner4Props) => {
  return (
    <div className={cn("w-full border-b bg-primary text-primary-foreground", className)}>
      <div className="container py-2">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-sm"
            >
              {item.icon}
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { PromoBanner4 };
```
