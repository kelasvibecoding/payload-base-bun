# Pricing 35

## Metadata
- **Category**: Pricing
- **Objective**: Display highly contrasting, ultra-focused dual pricing options using a very rounded, friendly aesthetic. Avoids large repetitive feature lists to simplify the conversion pathway.
- **Use Case**: Best for consumer apps, digital communities, or creators selling basic digital subscriptions. Perfect when the goal isn't mapping features but strongly distinguishing between a standard and VIP/Custom tier.
- **Visual Style**: The style creates extreme visual contrast. Uses dramatic fully-rounded corners (`rounded-4xl`), where the two options act as a binary choice. One option is inverted logic (`bg-foreground text-background`). Uses elegant internal divider lines (`h-px flex-1 bg-muted`) rather than raw borders to section the cards.
- **Interactivity**: Includes a per-card billing toggle (`ToggleGroup`) embedded directly into the price display to seamlessly shift the price rendering string text from quarterly to yearly.

## Source Code

```tsx
"use client";

import React, { useState } from "react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface Pricing35Props {
  className?: string;
}

const Pricing35 = ({ className }: Pricing35Props) => {
  const pricingPlans = [
    {
      id: "standard",
      type: "standard",
      prices: {
        quarterly: "$15/mo",
        yearly: "$12/mo",
      },

      isDark: false,
      hasToggle: true,
      badge: "nulldfs",
      ctaText: "Start with standard",
      Description:
        "Ideal for individuals Or Freelancers getting started with our service. No credit card required.",
    },
    {
      id: "premium",
      type: "premium",
      prices: {
        quarterly: "Custom",
        yearly: "Custom",
      },
      isDark: true,
      hasToggle: false,
      badge: "10/300 Spots Availble",
      ctaText: "Become a Vip Member",
      Description:
        "Ideal for individuals Or Freelancers getting started with our service. No credit card required.",
    },
  ];

  const [billingPeriods, setBillingPeriods] = useState({
    standard: "quarterly",
    premium: "quarterly",
  });

  const updateBillingPeriod = (
    planId: string,
    period: "quarterly" | "yearly",
  ) => {
    setBillingPeriods((prev) => ({
      ...prev,
      [planId]: period,
    }));
  };

  return (
    <section className={cn("bg-background", className)}>
      <div className="container py-32">
        <header className="mb-10 flex flex-col items-center gap-6 md:mb-20">
          <h1 className="text-center text-5xl font-bold tracking-tighter text-foreground md:text-7xl">
            Flexible Pricing Plans
          </h1>
          <p className="w-full max-w-lg px-4 text-center text-base font-normal tracking-tight text-muted-foreground opacity-70 md:px-0 md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipiasicing elit.Lorem ipsum
            dolor sit amet consectetur
          </p>
        </header>

        {/* Pricing Cards */}
        <div className="flex flex-col justify-center gap-8 px-4 md:flex-row">
          {pricingPlans.map((plan) => {
            const currentPeriod = billingPeriods[
              plan.id as keyof typeof billingPeriods
            ] as "quarterly" | "yearly";

            return (
              <Card
                key={plan.id}
                className={`h-auto w-full overflow-hidden rounded-4xl border border-border shadow-sm ${plan.isDark ? "bg-foreground text-background" : "bg-background text-foreground"} md:max-w-md`}
              >
                <CardContent className="p-6">
                  {/* Price Section */}
                  <div className="mt-8 mb-8 md:mt-10 md:mb-10">
                    <div className="flex items-end">
                      <span className="w-full text-center text-5xl font-semibold tracking-tighter md:text-7xl">
                        {plan.prices[currentPeriod]}
                      </span>
                    </div>
                  </div>

                  {/* Divider with text */}
                  <div className="mb-8 flex items-center gap-4 md:mb-10">
                    <div className="h-px flex-1 bg-muted" />
                    <span className="text-center text-xs font-normal whitespace-nowrap uppercase opacity-50">
                      {plan.prices.yearly !== "Custom" &&
                      currentPeriod === "quarterly"
                        ? "BILLED QUARTERLY"
                        : plan.prices.yearly !== "Custom" &&
                            currentPeriod === "yearly"
                          ? "BILLED YEARLY"
                          : "Flexible billing"}
                    </span>
                    <div className="h-px flex-1 bg-muted" />
                  </div>

                  {/* Toggle or Badge */}
                  <div className="mb-8 flex justify-center md:mb-10">
                    {plan.hasToggle ? (
                      <ToggleGroup
                        type="single"
                        value={currentPeriod}
                        onValueChange={(value) => {
                          if (value)
                            updateBillingPeriod(
                              plan.id,
                              value as "quarterly" | "yearly",
                            );
                        }}
                        className="rounded-xl bg-muted p-1"
                      >
                        <ToggleGroupItem
                          value="quarterly"
                          className="h-8 w-20 rounded-lg data-[state=on]:bg-background"
                        >
                          <span className="text-center text-xs font-semibold text-foreground">
                            Quarterly
                          </span>
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          value="yearly"
                          className="h-8 w-20 rounded-lg data-[state=on]:bg-background"
                        >
                          <span className="text-center text-xs font-semibold text-foreground">
                            Yearly
                          </span>
                        </ToggleGroupItem>
                      </ToggleGroup>
                    ) : plan.badge ? (
                      <Badge
                        className={`rounded-xl border bg-muted/20 ${plan.isDark ? "text-background" : "text-foreground"} px-3 py-2 text-xs font-semibold`}
                      >
                        {plan.badge}
                      </Badge>
                    ) : null}
                  </div>

                  {/* Annual Plan Text */}
                  <div className="mb-8 flex justify-center md:mb-10">
                    <span className="text-center text-xs font-normal whitespace-nowrap opacity-50">
                      {currentPeriod === "yearly"
                        ? "YOU'RE SAVING 20% WITH ANNUAL BILLING"
                        : "SAVE 20% ON AN ANNUAL PLAN"}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mb-8 w-full text-center text-sm font-normal tracking-tight md:mb-10 md:text-base">
                    Ideal for individuals Or Freelancers getting started with
                    our service. No credit card required.
                  </p>

                  {/* CTA Button */}
                  <Button
                    variant={plan.isDark ? "secondary" : "default"}
                    className="h-10 w-full"
                  >
                    <span className="text-center text-sm font-normal md:text-base">
                      {plan.ctaText}
                    </span>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { Pricing35 };
```
