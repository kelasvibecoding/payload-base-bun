# Pricing 16

## Metadata
- **Category**: Pricing
- **Objective**: Display a standard three-tier pricing grid highlighting discounts on annual subscriptions.
- **Use Case**: Excellent for SaaS platforms with a classic "Free/Starter/Enterprise" tiered model. Designed to strongly encourage users to select the yearly billing option by visually striking through the monthly price and showing the discount percentage.
- **Visual Style**: Clean three-column grid (`lg:grid-cols-3`) set against a subtle `bg-muted/50` background to make the white cards (`bg-background`) pop. The center "Starter" tier is highlighted with a `Badge`.
- **Interactivity**: Includes a `Tabs` component used as a billing cycle toggle (`Billed Monthly` vs `Billed Yearly`). When "Yearly" is selected, the component conditionally renders the discount logic (`25% off` in red, with a strikethrough original price).

## Source Code

```tsx
"use client";

import { CheckCircle2, Zap } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Pricing16Props {
  className?: string;
}

const Pricing16 = ({ className }: Pricing16Props) => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section className={cn("bg-muted/50 py-32", className)}>
      <div className="container">
        <div className="flex flex-col items-center gap-6">
          <Badge variant="outline">Pricing</Badge>
          <h1 className="text-center text-4xl font-semibold text-balance sm:text-5xl lg:text-7xl">
            Simple pricing for everyone, start for free today
          </h1>
          <Tabs
            value={isMonthly ? "monthly" : "yearly"}
            onValueChange={(value) => setIsMonthly(value === "monthly")}
            className="w-80"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="monthly">Billed Monthly</TabsTrigger>
              <TabsTrigger value="yearly">Billed Yearly</TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="mx-auto mt-4 grid w-full max-w-5xl gap-6 lg:grid-cols-3">
            <div className="w-full rounded-lg border bg-background p-8 shadow-sm lg:max-w-96">
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold">Free</h3>
                <p className="text-sm text-muted-foreground">Free forever</p>
              </div>
              <Separator className="my-6" />
              <div className="flex items-start font-semibold">
                <p className="text-xl">$</p>
                <p className="text-5xl leading-none">0</p>
              </div>
              <p className="text-sm text-muted-foreground">
                per user/month, billed {isMonthly ? "monthly" : "yearly"}
              </p>
              <Button variant="outline" className="mt-4 mb-2 w-full">
                Start for free
              </Button>
              <p className="text-center text-sm text-muted-foreground">
                No credit card required
              </p>
              <Separator className="my-6" />
              <div>
                <p className="mb-3 text-sm font-semibold">Key features: </p>
                <ul className="flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-700" />
                    <p>Up to 5 projects</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-700" />
                    <p>Up to 5 users</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-700" />
                    <p>Up to 50 tasks</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-700" />
                    <p>Task management</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-700" />
                    <p>Analytics & reports</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full rounded-lg border bg-background p-8 shadow-sm lg:max-w-96">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-semibold">Starter</h3>
                  <Badge className="flex items-center gap-1">
                    <Zap className="size-3" />
                    Popular
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  For small teams and startups
                </p>
              </div>
              <Separator className="my-6" />
              <div className="flex items-center gap-2">
                <div className="flex items-start font-semibold">
                  <p className="text-xl">$</p>
                  <p className="text-5xl leading-none">
                    {isMonthly ? "20" : "15"}
                  </p>
                </div>
                {!isMonthly && (
                  <div className="flex flex-col text-sm">
                    <p className="font-semibold text-destructive">25% off</p>
                    <p className="text-muted-foreground line-through">$20</p>
                  </div>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                per user/month, billed {isMonthly ? "monthly" : "yearly"}
              </p>
              <Button className="mt-4 mb-2 w-full">Try for 14 days</Button>
              <p className="text-center text-sm text-muted-foreground">
                No credit card required
              </p>
              <Separator className="my-6" />
              <div>
                <p className="mb-3 text-sm font-semibold">Key features: </p>
                <ul className="flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-700" />
                    <p>Unlimited projects</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-700" />
                    <p>Unlimited users</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-700" />
                    <p>Unlimited tasks</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-700" />
                    <p>File storage</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-700" />
                    <p>Customizable workflows</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full rounded-lg border bg-background p-8 shadow-sm lg:max-w-96">
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold">Enterprise</h3>
                <p className="text-sm text-muted-foreground">
                  For large teams and enterprises
                </p>
              </div>
              <Separator className="my-6" />
              <div className="flex items-center gap-2">
                <div className="flex items-start font-semibold">
                  <p className="text-xl">$</p>
                  <p className="text-5xl leading-none">
                    {isMonthly ? "40" : "30"}
                  </p>
                </div>
                {!isMonthly && (
                  <div className="flex flex-col text-sm">
                    <p className="font-semibold text-destructive">25% off</p>
                    <p className="text-muted-foreground line-through">$40</p>
                  </div>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                per user/month, billed {isMonthly ? "monthly" : "yearly"}
              </p>
              <Button variant="outline" className="mt-4 mb-2 w-full">
                Try for 14 days
              </Button>
              <p className="text-center text-sm text-muted-foreground">
                No credit card required
              </p>
              <Separator className="my-6" />
              <div>
                <p className="mb-3 text-sm font-semibold">Key features: </p>
                <ul className="flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-700" />
                    <p>Unlimited integrations</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-700" />
                    <p>Webhooks</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-700" />
                    <p>API access</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-700" />
                    <p>SAML authentication</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-700" />
                    <p>Dedicated support</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Pricing16 };
```
