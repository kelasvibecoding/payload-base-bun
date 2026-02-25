# Pricing 7

## Metadata
- **Category**: Pricing
- **Objective**: Display a two-plan comparison with an integrated billing cycle toggle that features a prominent discount badge.
- **Use Case**: Best for startups or services offering a "Basic" and a "Pro/Premium" tier, where driving users toward an annual subscription via a clear visual discount is a priority.
- **Visual Style**: Clean, centrally aligned header block. The billing cycle toggle uses a stylized segmented control (`RadioGroup` with custom `Label` styling) and includes a green discount badge (`Badge variant="outline" className="border-green-200 bg-green-100 px-1.5 text-green-600"`). The pricing cards (`md:grid-cols-2`) are large, spacious, and feature bold pricing typography.
- **Interactivity**: The custom `RadioGroup` toggle handles state changes between `monthly` and `annually` pricing, updating the displayed prices dynamically.

## Source Code

```tsx
"use client";

import { Check } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface Pricing7Props {
  className?: string;
}

const Pricing7 = ({ className }: Pricing7Props) => {
  const [isAnnually, setIsAnnually] = useState(false);
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-semibold lg:text-5xl">Pricing</h2>
          <p className="text-muted-foreground lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            dignissimos aliquam delectus, quasi earum veniam?
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-muted-foreground">Billing cycle</span>
          <div className="flex h-12 items-center rounded-md bg-muted p-1 text-lg">
            <RadioGroup
              defaultValue="monthly"
              className="h-full grid-cols-2"
              onValueChange={(value) => {
                setIsAnnually(value === "annually");
              }}
            >
              <div className='h-full rounded-md transition-all has-[button[data-state="checked"]]:bg-background'>
                <RadioGroupItem
                  value="monthly"
                  id="monthly"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="monthly"
                  className="flex h-full cursor-pointer items-center justify-center px-7 font-semibold text-muted-foreground peer-data-[state=checked]:text-primary"
                >
                  Monthly
                </Label>
              </div>
              <div className='h-full rounded-md transition-all has-[button[data-state="checked"]]:bg-background'>
                <RadioGroupItem
                  value="annually"
                  id="annually"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="annually"
                  className="flex h-full cursor-pointer items-center justify-center gap-1 px-7 font-semibold text-muted-foreground peer-data-[state=checked]:text-primary"
                >
                  Yearly
                  <Badge
                    variant="outline"
                    className="border-green-200 bg-green-100 px-1.5 text-green-600"
                  >
                    -20%
                  </Badge>
                </Label>
              </div>
            </RadioGroup>
          </div>
          <div className="mt-10 grid max-w-3xl gap-6 md:grid-cols-2">
            <div className="rounded-lg border p-6">
              <div className="flex h-full flex-col justify-between gap-5">
                <div>
                  <h3 className="mb-4 text-xl font-semibold">Basic Plan</h3>
                  <span className="text-5xl font-semibold">
                    {isAnnually ? "$63" : "$79"}
                  </span>
                  <span className="mb-4 block font-semibold">per month</span>
                  <p className="text-muted-foreground">
                    Good for small teams, or small businesses just starting out.
                  </p>
                  <p className="mt-6 mb-3 font-semibold">Includes</p>
                  <ul className="flex flex-col gap-3">
                    <li className="flex gap-2">
                      <Check className="mt-1 size-4 shrink-0" />5 projects limit
                    </li>
                    <li className="flex gap-2">
                      <Check className="mt-1 size-4 shrink-0" />
                      5GB storage
                    </li>
                    <li className="flex gap-2">
                      <Check className="mt-1 size-4 shrink-0" />
                      Up to 3 users
                    </li>
                    <li className="flex gap-2">
                      <Check className="mt-1 size-4 shrink-0" />
                      Support by email only
                    </li>
                    <li className="flex gap-2">
                      <Check className="mt-1 size-4 shrink-0" />
                      No time tracking feature
                    </li>
                  </ul>
                </div>
                <Button>Start a free trial</Button>
              </div>
            </div>
            <div className="rounded-lg border p-6">
              <div className="flex h-full flex-col justify-between gap-5">
                <div>
                  <h3 className="mb-4 text-xl font-semibold">Pro Plan</h3>
                  <span className="text-5xl font-semibold">
                    {isAnnually ? "$239" : "$299"}
                  </span>
                  <span className="mb-4 block font-semibold">per month</span>
                  <p className="text-muted-foreground">
                    Good for medium to large businesses. Get all the features
                    you need.
                  </p>
                  <p className="mt-6 mb-3 font-semibold">
                    Everything in Basic, plus
                  </p>
                  <ul className="flex flex-col gap-3">
                    <li className="flex gap-2">
                      <Check className="mt-1 size-4 shrink-0" />
                      Unlimited projects
                    </li>
                    <li className="flex gap-2">
                      <Check className="mt-1 size-4 shrink-0" />
                      50GB storage
                    </li>
                    <li className="flex gap-2">
                      <Check className="mt-1 size-4 shrink-0" />
                      Unlimited users
                    </li>
                    <li className="flex gap-2">
                      <Check className="mt-1 size-4 shrink-0" />
                      Priority support
                    </li>
                  </ul>
                </div>
                <Button>Start a free trial</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Pricing7 };
```
