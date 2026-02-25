# Pricing 10

## Metadata
- **Category**: Pricing
- **Objective**: Display highly visual pricing tiers with custom illustrations, grouped feature lists, and a "Recommended" highlight.
- **Use Case**: Best for software products or agencies whose brand relies on custom illustration or distinctive iconography to differentiate tiers.
- **Visual Style**: A four-column grid (`xl:grid-cols-4`). Each tier card contains a prominent illustrative spot image (`size-16 sm:size-20`) alongside the tier title. Feature lists are divided into distinct contextual groups ("Overview", "Highlights") with varying icons for included (`Check`) and excluded (`X`) features. The `Recommended` tier receives a solid top banner and a primary-colored border.
- **Interactivity**: Includes a `Switch` in the top left header area for toggling between annual and monthly pricing. The annual prices dynamically display an inline `-10%` or `-20%` `Badge`.

## Source Code

```tsx
"use client";

import { Check, X } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const plans = [
  {
    title: "Free",
    description: "For open source projects",
    price: { monthly: "$9", annually: "$9" },
    href: "#",
    recommended: false,
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
    featureGroups: [
      {
        title: "Overview",
        features: [
          {
            title: "3 users",
            icon: Check,
          },
        ],
      },
      {
        title: "Highlights",
        features: [
          {
            title: "Included feature",
            icon: Check,
          },
          {
            title: "Not included feature",
            icon: X,
          },
        ],
      },
    ],
  },
  {
    title: "Basic",
    description: "For open source projects",
    price: {
      monthly: "$50",
      annually: (
        <span className="flex items-center">
          $45<Badge className="ml-1">-10%</Badge>
        </span>
      ),
    },
    href: "#",
    recommended: false,
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg",
    featureGroups: [
      {
        title: "Overview",
        features: [
          {
            title: "10 users",
            icon: Check,
          },
        ],
      },
      {
        title: "Highlights",
        features: [
          {
            title: "Included feature",
            icon: Check,
          },
          {
            title: "Not included feature",
            icon: X,
          },
        ],
      },
    ],
  },
  {
    title: "Team",
    description: "For open source projects",
    price: {
      monthly: "$100",
      annually: (
        <span className="flex items-center">
          $90<Badge className="ml-1">-10%</Badge>
        </span>
      ),
    },
    href: "#",
    recommended: true,
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg",
    featureGroups: [
      {
        title: "Overview",
        features: [
          {
            title: "50 users",
            icon: Check,
          },
        ],
      },
      {
        title: "Highlights",
        features: [
          {
            title: "Included feature",
            icon: Check,
          },
          {
            title: "Not included feature",
            icon: X,
          },
        ],
      },
    ],
  },
  {
    title: "Enterprise",
    description: "For open source projects",
    price: {
      monthly: "$200",
      annually: (
        <span className="flex items-center">
          $160<Badge className="ml-1">-20%</Badge>
        </span>
      ),
    },
    href: "#",
    recommended: false,
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-4.svg",
    featureGroups: [
      {
        title: "Overview",
        features: [
          {
            title: "Unlimited users",
            icon: Check,
          },
        ],
      },
      {
        title: "Highlights",
        features: [
          {
            title: "Included feature",
            icon: Check,
          },
          {
            title: "Not included feature",
            icon: X,
          },
        ],
      },
    ],
  },
];

interface Pricing10Props {
  className?: string;
}

const Pricing10 = ({ className }: Pricing10Props) => {
  const [annualBilling, setAnnualBilling] = useState(false);
  return (
    <section className={cn("py-32", className)}>
      <div className="container mb-8 lg:mb-0">
        <div className="flex flex-col gap-y-12 md:gap-y-16">
          <div className="flex flex-col">
            <h1 className="my-6 text-3xl font-bold text-pretty md:text-4xl xl:text-5xl">
              Pricing Plans
            </h1>
            <p className="text-muted-foreground lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="lg:mb-8">
            <div className="flex h-full flex-col justify-end">
              <div className="flex items-center space-x-2">
                <Switch
                  id="annual-billing"
                  checked={annualBilling}
                  onCheckedChange={setAnnualBilling}
                />
                <Label htmlFor="annual-billing">Annual billing</Label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex flex-col gap-6 gap-y-8 xl:grid xl:grid-cols-4">
        {plans.map((plan) => (
          <article
            key={plan.title}
            className={`rounded-xl border ${plan.recommended ? "border-primary" : "border-border lg:mt-7"} overflow-clip`}
          >
            {plan.recommended && (
              <div className="flex h-7 items-center justify-center bg-primary text-center text-xs font-semibold text-primary-foreground">
                Recommended
              </div>
            )}
            <header className="p-4 sm:p-6 xl:pt-12">
              <div className="mb-6 md:flex md:items-center xl:block">
                <div className="mb-1 flex md:flex-1 md:flex-row-reverse md:items-center xl:mb-6 xl:flex-col-reverse xl:items-start xl:gap-y-4">
                  <div className="flex-1 md:ml-6 xl:ml-0">
                    <p className="mb-1 text-xl font-medium sm:text-2xl">
                      {plan.title}
                    </p>
                    <p className="text-xs text-muted-foreground sm:text-sm 2xl:min-h-10">
                      {plan.description}
                    </p>
                  </div>
                  <img
                    src={plan.image}
                    alt={plan.title}
                    className="size-16 sm:size-20"
                  />
                </div>
                <div>
                  <h2 className="mb-1 flex items-start text-2xl font-medium md:text-3xl 2xl:text-4xl">
                    {annualBilling ? plan.price.annually : plan.price.monthly}
                  </h2>
                  <p className="text-xs font-medium text-muted-foreground">
                    / monthly
                  </p>
                </div>
              </div>
              <div>
                <Button
                  variant={plan.recommended ? "default" : "outline"}
                  className="w-full"
                >
                  Get started for free
                </Button>
              </div>
            </header>
            <main className="space-y-6 border-t border-border p-4 sm:p-6 md:grid md:grid-cols-2 md:space-y-0 xl:block xl:space-y-6">
              {plan.featureGroups.map((group) => (
                <div key={group.title}>
                  <h2 className="mb-3 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                    {group.title}
                  </h2>
                  <ul className="space-y-3">
                    {group.features.map((feature) => (
                      <li
                        key={feature.title}
                        className="flex items-center gap-x-2 text-xs font-medium text-muted-foreground"
                      >
                        <feature.icon className="size-4" />
                        {feature.title}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </main>
          </article>
        ))}
      </div>
    </section>
  );
};

export { Pricing10 };
```
