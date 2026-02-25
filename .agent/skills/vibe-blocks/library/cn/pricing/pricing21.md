# Pricing 21

## Metadata
- **Category**: Pricing
- **Objective**: Display a highly detailed feature comparison matrix, structurally similar to Pricing 20's design language, with a top-level plan summary followed by categorical grids.
- **Use Case**: Best for feature-dense B2B platforms where line-item comparison is necessary across tiers. Uses the same typography and spacing framework as Pricing 20.
- **Visual Style**: Broken into two main structural components: `PlanHeaders` and `FeatureSections`. The `PlanHeaders` uses a CSS grid to align three plan summaries over four columns (`grid-cols-4`, leaving the first column empty as a spacer for the row labels). The `FeatureSections` component iterates over categories and maps each specific feature row to the corresponding plan columns. Relies heavily on grid borders (`border-t`, `divide-x`) to construct the visual table rather than actual HTML `table` elements.
- **Interactivity**: Includes a dual-button toggle (Monthly/Yearly) that dynamically swaps the pricing logic shown in the `PlanHeaders` component.

## Source Code

```tsx
"use client";

import { BadgeCheck, BadgeDollarSign, Briefcase, Building } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface FeatureSection {
  category: string;
  features: {
    name: string;
    basic: string | boolean;
    business: string | boolean;
    enterprise: string | boolean;
  }[];
}

const pricingPlans = [
  {
    icon: "Rocket",
    name: "Basic plan",
    price: {
      monthly: 19,
      yearly: 199,
    },
    features: [
      "Basic task management tools",
      "Calendar sync with limited integrations",
      "Access to 1 dashboard for tracking tasks",
      "Limited AI suggestions and insights",
      "Basic support and community access",
    ],
  },
  {
    icon: Briefcase,
    name: "Business plan",
    price: {
      monthly: 29,
      yearly: 299,
    },
    features: [
      "All Free Plan features, plus:",
      "Unlimited task lists",
      "Advanced calendar sync",
      "AI-driven insights",
      "Access to custom dashboards",
      "Priority email support",
    ],
  },
  {
    icon: Building,
    name: "Enterprise plan",
    price: {
      monthly: 49,
      yearly: 499,
    },
    features: [
      "All Pro Plan features, plus:",
      "Dedicated account manager",
      "Custom integrations",
      "Real-time collaboration",
      "Role-based permissions",
      "24/7 priority support",
    ],
  },
];

const comparisonFeatures: FeatureSection[] = [
  {
    category: "Core Tools",
    features: [
      {
        name: "Task Management",
        basic: "10",
        business: "25",
        enterprise: "Unlimited",
      },
      {
        name: "Calendar Sync",
        basic: true,
        business: true,
        enterprise: true,
      },
      {
        name: "Reminders",
        basic: true,
        business: true,
        enterprise: true,
      },
      {
        name: "Collaboration",
        basic: false,
        business: true,
        enterprise: true,
      },
      {
        name: "Notifications",
        basic: false,
        business: false,
        enterprise: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "Productivity Insights",
    features: [
      {
        name: "Analytics",
        basic: "10 25 Unlimited",
        business: "10 25 Unlimited",
        enterprise: "10 25 Unlimited",
      },
      {
        name: "Reports",
        basic: true,
        business: true,
        enterprise: true,
      },
      {
        name: "Time Tracking",
        basic: true,
        business: true,
        enterprise: true,
      },
      {
        name: "Goal Tracking",
        basic: false,
        business: true,
        enterprise: true,
      },
      {
        name: "Trends",
        basic: false,
        business: false,
        enterprise: true,
      },
    ],
  },
  {
    category: "Workflow Automation",
    features: [
      {
        name: "Task Automation",
        basic: "10",
        business: "25",
        enterprise: "Unlimited",
      },
      {
        name: "Recurring Tasks",
        basic: true,
        business: true,
        enterprise: true,
      },
      {
        name: "Integrations",
        basic: true,
        business: true,
        enterprise: true,
      },
      {
        name: "API Access",
        basic: false,
        business: true,
        enterprise: true,
      },
      {
        name: "Workflow Templates",
        basic: false,
        business: false,
        enterprise: true,
      },
    ],
  },
];

interface Pricing21Props {
  className?: string;
}

const Pricing21 = ({ className }: Pricing21Props) => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section className={cn("py-32", className)}>
      <div className="border-y">
        <div className="container flex flex-col gap-6 border-x py-4 max-lg:border-x lg:py-8">
          <Badge
            variant="outline"
            className="w-fit gap-1 bg-card px-3 text-sm font-normal tracking-tight shadow-sm"
          >
            <BadgeDollarSign className="size-4" />
            <span>Spenders Lounge</span>
          </Badge>
          <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-6xl">
            Pricing for everyone
          </h2>
          <p className="max-w-[600px] tracking-[-0.32px] text-muted-foreground">
            Choose the Plan that Fits Your Productivity Need
          </p>
        </div>
      </div>

      <div className="container">
        <section className="py-14 md:py-20 lg:py-24">
          <div className="flex justify-center">
            <div className="inline-flex gap-[2px] rounded-md border p-[2px]">
              <Button
                variant={isMonthly ? "default" : "outline"}
                onClick={() => setIsMonthly(true)}
                className="transition-colors"
              >
                Monthly
              </Button>
              <Button
                variant={!isMonthly ? "default" : "outline"}
                onClick={() => setIsMonthly(false)}
                className="transition-colors"
              >
                Yearly
              </Button>
            </div>
          </div>
          <div className="mt-12 overflow-x-auto">
            <PlanHeaders isMonthly={isMonthly} />
            <FeatureSections />
          </div>
        </section>
      </div>

      <div className="mt-12 h-8 w-full border-y md:h-12 lg:h-[112px]">
        <div className="container h-full w-full border-x"></div>
      </div>
    </section>
  );
};

const PlanHeaders = ({ isMonthly }: { isMonthly: boolean }) => (
  <div className="grid grid-cols-4">
    <div className="col-span-1 max-lg:hidden max-lg:border"></div>
    <div className="col-span-4 grid gap-4 border-t max-lg:divide-y max-lg:border lg:col-span-3 lg:grid-cols-3 lg:divide-x">
      {pricingPlans.map((plan, index) => (
        <div key={index} className="flex flex-col p-6">
          <div className="space-y-2 pb-6">
            <div className="flex items-center gap-2.5 text-muted-foreground">
              <plan.icon className="size-4" />
              <h3 className="text-xl tracking-[-0.8px]">{plan.name}</h3>
            </div>
            <>
              <div className="flex items-baseline font-medium">
                <span className="text-[3.5rem] leading-[120%] tracking-[-3.92px]">
                  ${isMonthly ? plan.price.monthly : plan.price.yearly}
                </span>
                <span className="text-muted-foreground-subtle text-2xl tracking-[-0.96px]">
                  {isMonthly ? "/mo" : "/yr"}
                </span>
              </div>
              <p className="text-muted-foreground">
                {isMonthly
                  ? `or $${plan.price.yearly} yearly`
                  : `or $${plan.price.monthly}/mo monthly`}
              </p>
            </>
          </div>
          <Button className="mt-auto">Get started</Button>
        </div>
      ))}
    </div>
  </div>
);

const FeatureSections = () => (
  <>
    {comparisonFeatures.map((section, sectionIndex) => (
      <div
        key={sectionIndex}
        className={`border-b first:border-t ${sectionIndex === 0 ? "border-t" : ""}`}
      >
        <div className="py-4">
          <h3 className="text-lg tracking-[-0.36px]">{section.category}</h3>
        </div>
        {section.features.map((feature, featureIndex) => (
          <div
            key={featureIndex}
            className="grid border-t tracking-[-0.32px] text-muted-foreground max-lg:grid-rows-[auto_1fr] lg:grid-cols-4"
          >
            <span className="inline-flex items-center py-4">
              {feature.name}
            </span>
            <div className="col-span-3 grid grid-cols-3 divide-x text-center max-lg:border-t">
              {[feature.basic, feature.business, feature.enterprise].map(
                (value, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center py-4"
                  >
                    {typeof value === "boolean" ? (
                      value ? (
                        <BadgeCheck className="mx-auto size-5 text-muted-foreground" />
                      ) : null
                    ) : (
                      <span className="text-muted-foreground-subtle font-semibold">
                        {value}
                      </span>
                    )}
                  </div>
                ),
              )}
            </div>
          </div>
        ))}
      </div>
    ))}
  </>
);

export { Pricing21 };
```
