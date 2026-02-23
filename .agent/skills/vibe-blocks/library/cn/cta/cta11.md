# CTA 11

## Metadata
- **Category**: CTA
- **Objective**: Centered call to action with pricing tiers and feature comparison.
- **Use Case**: Pricing section with multiple subscription tiers and feature lists.
- **Visual Style**: Three-column pricing grid with cards and feature badges.
- **Interactivity**: Pricing tier selection with button actions and hover effects.

## Description
A comprehensive pricing-focused call to action component featuring three pricing tiers with feature comparison, pricing badges, and prominent action buttons. Designed for subscription or service offerings with clear value propositions.

## Features
- Three-column pricing grid layout
- Pricing tier cards with distinct styling
- Feature lists with checkmark indicators
- Prominent action buttons per tier
- Pricing badges and currency display
- Professional card styling with borders
- Responsive design with proper breakpoints
- Clear value proposition hierarchy
- Hover effects on cards and buttons

## Source Code
```tsx
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Cta11Props {
  className?: string;
}

const Cta11 = ({ className }: Cta11Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
              Choose Your Plan
            </h2>
            <p className="text-muted-foreground">
              Select the perfect plan for your needs. Upgrade or downgrade at any time.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="p-6">
              <div className="mb-6">
                <h3 className="mb-2 text-xl font-semibold">Starter</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">$9</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-green-500" />
                    <span className="text-sm">Up to 3 projects</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-green-500" />
                    <span className="text-sm">Basic analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-green-500" />
                    <span className="text-sm">Email support</span>
                  </li>
                </ul>
              </div>
              <Button variant="outline" className="w-full">
                Get Started
              </Button>
            </Card>
            <Card className="relative border-primary p-6">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground">
                  Popular
                </span>
              </div>
              <div className="mb-6">
                <h3 className="mb-2 text-xl font-semibold">Professional</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">$29</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-green-500" />
                    <span className="text-sm">Unlimited projects</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-green-500" />
                    <span className="text-sm">Advanced analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-green-500" />
                    <span className="text-sm">Priority support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-green-500" />
                    <span className="text-sm">Team collaboration</span>
                  </li>
                </ul>
              </div>
              <Button className="w-full">
                Get Started
              </Button>
            </Card>
            <Card className="p-6">
              <div className="mb-6">
                <h3 className="mb-2 text-xl font-semibold">Enterprise</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">$99</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-green-500" />
                    <span className="text-sm">Everything in Pro</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-green-500" />
                    <span className="text-sm">Custom integrations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-green-500" />
                    <span className="text-sm">Dedicated support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-green-500" />
                    <span className="text-sm">SLA guarantee</span>
                  </li>
                </ul>
              </div>
              <Button variant="outline" className="w-full">
                Get Started
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta11 };
```
