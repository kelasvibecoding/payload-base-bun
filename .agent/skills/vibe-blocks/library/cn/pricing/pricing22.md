# Pricing 22

## Metadata
- **Category**: Pricing
- **Objective**: Display a standard three-tier pricing structure emphasizing a "Startup" or middle tier via stylistic card treatments.
- **Use Case**: Best for standard SaaS products offering Free, Pro/Startup, and Enterprise plans, where guiding the user to the middle tier is the primary conversion goal.
- **Visual Style**: Clean, accessible three-column grid (`lg:grid-cols-3`). Uses Shadcn `Card` components. The highlighted "Startup" tier utilizes a stark outline (`border-4 border-primary lg:h-[110%]`) to literally break the horizontal plane, making it visually dominant. Uses checkmarks for feature lists.
- **Interactivity**: Includes a `Switch` per card to toggle between monthly and annual billing.

## Source Code

```tsx
"use client";

import { Check } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

const plans = [
  {
    name: "Free",
    monthlyPrice: "$0",
    yearlyPrice: "$0",
    description: "Free for everyone",
    features: [
      "Unlimited members",
      "2 teams",
      "500 issues",
      "Slack and Github integrations",
    ],
  },
  {
    name: "Startup",
    monthlyPrice: "$8",
    yearlyPrice: "$6",
    features: [
      "All free plan features and...",
      "Mainline AI",
      "Unlimited teams",
      "Unlimited issues and file uploads",
      "Mainline Insights",
      "Admin roles",
    ],
  },
  {
    name: "Enterprise",
    monthlyPrice: "$8",
    yearlyPrice: "$6",
    features: [
      "All free plan features and...",
      "Mainline AI",
      "Supermainline AGI",
      "Free daily catered lunch",
      "random HIPPA audits",
    ],
  },
];

interface Pricing22Props {
  className?: string;
}

const Pricing22 = ({ className }: Pricing22Props) => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="space-y-4 text-center">
          <h2 className="text-2xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            Pricing
          </h2>
          <p className="mx-auto max-w-xl leading-snug font-medium text-balance text-muted-foreground">
            Use Mainline for free with your whole team. Upgrade to enable
            unlimited issues, enhanced security controls, and additional
            features.
          </p>
        </div>

        <div className="mt-8 grid gap-6 text-start md:mt-12 lg:mt-20 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`${
                plan.name === "Startup"
                  ? "border-4 border-primary lg:h-[110%]"
                  : ""
              }`}
            >
              <CardContent className="flex h-full flex-col justify-between gap-2 p-6">
                <div className="space-y-2">
                  <h3 className="font-semibold text-primary">{plan.name}</h3>
                  <div className="space-y-1">
                    <div className="text-lg font-medium text-muted-foreground">
                      {isAnnual ? plan.yearlyPrice : plan.monthlyPrice}{" "}
                      {plan.name !== "Free" && (
                        <span className="text-muted-foreground">
                          per user/
                          {isAnnual ? "year" : "month"}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {plan.name !== "Free" ? (
                  <div className="mt-4 flex items-center gap-2">
                    <Switch
                      checked={isAnnual}
                      onCheckedChange={() => setIsAnnual(!isAnnual)}
                    />
                    <span className="text-sm font-medium">Billed annually</span>
                  </div>
                ) : (
                  <span className="text-sm text-muted-foreground">
                    {plan.description}
                  </span>
                )}

                <div className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-1.5 text-muted-foreground"
                    >
                      <Check className="size-5 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className="w-fit"
                  variant={plan.name === "Startup" ? "default" : "outline"}
                >
                  Get started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Pricing22 };
```
