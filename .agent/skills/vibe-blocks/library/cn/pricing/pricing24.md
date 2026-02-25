# Pricing 24

## Metadata
- **Category**: Pricing
- **Objective**: Display a refined, three-card pricing structure with a strongly emphasized center tier. Designed specifically for highlighting a "popular" plan.
- **Use Case**: Best for standard B2B/B2C SaaS models offering three logical tiers (e.g., Free, Startup, Enterprise) where the provider wants to funnel the majority of users into the middle plan.
- **Visual Style**: Uses Shadcn `Card` inside a clean layout (`bg-zinc-100 dark:bg-zinc-900`). The focal point is the center plan (flagged by `popular: true`), which uses CSS scaling (`scale-[1.075]`) to physically protrude from the grid, coupled with heavier borders (`ring-2 ring-black`) and rounded corners (`rounded-3xl` vs default `lg`). 
- **Interactivity**: Includes a simple `Switch` for toggling between annual and monthly billing, which conditionally renders the relevant `annualPrice` or `monthlyPrice`.

## Source Code

```tsx
"use client";

import { Check } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

const plans = [
  {
    name: "Free",
    monthlyPrice: "$0",
    annualPrice: "$0",
    features: [
      "Unlimited members",
      "2 teams",
      "500 issues",
      "Slack and Github integrations",
    ],
    cta: "Get started",
  },
  {
    name: "Startup",
    monthlyPrice: "$8",
    annualPrice: "$60",
    monthlyPerUnit: "per user/month",
    annualPerUnit: "per user/annum",
    features: [
      "All free plan features and...",
      "Streamline AI",
      "Unlimited teams",
      "Unlimited issues and file uploads",
      "Streamline Insights",
      "Admin roles",
    ],
    cta: "7 day free trial",
    popular: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: "$15",
    annualPrice: "$120",
    monthlyPerUnit: "per user/month",
    annualPerUnit: "per user/annum",
    features: [
      "All free plan features and...",
      "Streamline AI",
      "Unlimited teams",
      "Unlimited issues and file uploads",
      "Streamline Insights",
      "Admin roles",
    ],
    cta: "Get started",
  },
];

interface Pricing24Props {
  className?: string;
}

const Pricing24 = ({ className }: Pricing24Props) => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Pricing
          </h2>
          <p className="text-lg text-balance text-muted-foreground">
            Use Streamline for free with your whole team. Upgrade to enable
            unlimited issues, enhanced security controls, and additional
            features.
          </p>
          <div className="inline-flex items-center gap-2">
            <Switch
               checked={isAnnual}
              onCheckedChange={setIsAnnual}
              aria-label="Toggle annual billing"
            />
            <span className="text-sm font-medium">Billed annually</span>
          </div>
        </div>

        <div className="mt-8 grid gap-8 sm:grid-cols-2 md:mt-12 lg:mt-20 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(plan.popular && "scale-[1.075] rounded-3xl")}
            >
              <Card
                className={cn(
                  "h-full border-none bg-zinc-100 dark:bg-zinc-900",
                  plan.popular && "relative ring-2 ring-black",
                )}
              >
                <CardHeader>
                  <h3 className="text-2xl font-semibold">{plan.name}</h3>
                  <div className="mt-2">
                    <p className="text-lg font-medium text-muted-foreground">
                      {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      {(plan.monthlyPerUnit || plan.annualPerUnit) &&
                        " " +
                          (isAnnual ? plan.annualPerUnit : plan.monthlyPerUnit)}
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col space-y-6">
                  <Button
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>

                  <div className="space-y-4">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <Check className="size-4 shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Pricing24 };
```
