# Pricing 37

## Metadata
- **Category**: Pricing
- **Objective**: Display a single, premium pricing tier emphasizing exclusivity and high value.
- **Use Case**: Best for one-time purchase products (e.g., lifetime deals, course access, premium templates, premium UI kits) where there is only one straightforward but high-value package.
- **Visual Style**: Highly focused layout. The component centers entirely around a single `CardSpotlight` component (an Aceternity UI component, likely adding a hover gradient/glow effect). It employs a dark theme aesthetic for the card (`text-background`, which usually means it has a dark background on light mode, or uses a specific dark mode style). 
- **Interactivity**: Utilizes `CardSpotlight` which implies a mouse-tracking hover effect to draw attention specifically to the card's surface.

## Source Code

```tsx
import { BadgeCheck, Clock, Handshake, Snowflake, Star } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import { CardSpotlight } from "@/components/aceternity/card-spotlight";
import { Button } from "@/components/ui/button";

interface Pricing37Props {
  className?: string;
}

const Pricing37 = ({ className }: Pricing37Props) => {
  const PremiumPlan = {
    price: 125,
    features: [
      { icon: Snowflake, label: " All Premium components" },
      { icon: Handshake, label: "Early access" },
      { icon: Star, label: "Component Request" },
      { icon: Clock, label: "Free Lifetime updates" },
      { icon: BadgeCheck, label: "Shadcnblocks support" },
    ],
  };

  return (
    <section className={cn("overflow-hidden py-32", className)}>
      <div className="container flex w-full flex-col items-center justify-center px-4">
        <p className="rounded-full bg-muted px-2 py-1 text-xs uppercase">
          PRICING
        </p>
        <h2 className="relative py-2 text-center font-sans text-5xl font-semibold tracking-tighter lg:text-6xl">
          The Ultimate Block Toolkit
        </h2>
        <p className="text-md mx-auto max-w-xl px-5 text-center text-muted-foreground lg:text-lg">
          Perfectly balanced between performance and customization.
        </p>

        <CardSpotlight className="relative mt-14 w-full max-w-md overflow-hidden rounded-3xl text-background">
          <div className="relative z-10 flex h-full flex-col justify-between">
            <div>
              <p className="text-md font-semibold"> Super Premium </p>
              <h3 className="mt-[11px] text-4xl font-semibold tracking-tight">
                ${PremiumPlan.price}
              </h3>
              <ul className="mt-[30px] space-y-[10px]">
                {PremiumPlan.features.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <item.icon className="size-4" />
                    <p className="text-[15px] font-medium tracking-tight opacity-50">
                      {item.label}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <Button
              className="mt-20 w-full rounded-xl font-semibold"
              variant="secondary"
            >
              Get Instant Access
            </Button>
          </div>
        </CardSpotlight>
      </div>
    </section>
  );
};

export { Pricing37 };
```
