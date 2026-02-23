# CTA 13

## Metadata
- **Category**: CTA
- **Objective**: Feature comparison call to action with pricing tiers and detailed feature lists.
- **Use Case**: Product or service comparison with multiple pricing options and comprehensive feature breakdown.
- **Visual Style**: Three-column pricing grid with detailed feature comparison and popular plan highlighting.
- **Interactivity**: Pricing tier selection with prominent action buttons and feature comparison.

## Description
A comprehensive pricing comparison call to action component featuring three distinct pricing tiers with detailed feature lists, pricing badges, and a highlighted popular plan. Designed to help users compare options and make informed purchasing decisions.

## Features
- Three-tier pricing comparison layout
- Detailed feature lists with visual indicators
- Popular plan highlighting with special badge
- Professional pricing display with currency formatting
- Comprehensive feature comparison across tiers
- Prominent action buttons for each tier
- Responsive grid layout with proper breakpoints
- Clean card-based design with proper spacing
- Visual hierarchy with typography variations

## Source Code
```tsx
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Cta13Props {
  className?: string;
}

const Cta13 = ({ className }: Cta13Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
              Compare Plans
            </h2>
            <p className="text-muted-foreground">
              Choose the perfect plan for your business needs
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="p-6">
              <div className="mb-6">
                <h3 className="mb-2 text-xl font-semibold">Basic</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">$19</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-green-500" />
                    <span>Up to 5 team members</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-green-500" />
                    <span>Basic analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-green-500" />
                    <span>Email support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-green-500" />
                    <span>5GB storage</span>
                  </li>
                </ul>
              </div>
              <Button variant="outline" className="w-full">
                Start Free Trial
              </Button>
            </Card>
            <Card className="relative border-primary p-6">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground">
                  Most Popular
                </span>
              </div>
              <div className="mb-6">
                <h3 className="mb-2 text-xl font-semibold">Professional</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">$49</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-green-500" />
                    <span>Up to 20 team members</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-green-500" />
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-green-500" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-green-500" />
                    <span>50GB storage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-green-500" />
                    <span>Custom integrations</span>
                  </li>
                </ul>
              </div>
              <Button className="w-full">
                Start Free Trial
              </Button>
            </Card>
            <Card className="p-6">
              <div className="mb-6">
                <h3 className="mb-2 text-xl font-semibold">Enterprise</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">$99</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-green-500" />
                    <span>Unlimited team members</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-green-500" />
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-green-500" />
                    <span>Dedicated support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-green-500" />
                    <span>Unlimited storage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-green-500" />
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-green-500" />
                    <span>SLA guarantee</span>
                  </li>
                </ul>
              </div>
              <Button variant="outline" className="w-full">
                Contact Sales
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta13 };
```
