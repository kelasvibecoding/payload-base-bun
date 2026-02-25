# Pricing 6

## Metadata
- **Category**: Pricing
- **Objective**: Present a single, focused pricing tier with grouped feature lists.
- **Use Case**: Ideal for single-product offerings, micro-SaaS, or standard subscription services where there is only a single "Pro" tier available to upgrade to.
- **Visual Style**: Extremely minimalist, centered design. Uses a single central card (`w-full sm:w-fit sm:min-w-80`) with heavily emphasized pricing (`text-6xl font-semibold`). Features are logically grouped together and separated by horizontal `Separator` lines, creating digestible clusters of value propositions. Check icons are aligned to the right.
- **Interactivity**: Primarily static presentation. Exposes props to customize heading, description, price, and feature arrays.

## Source Code

```tsx
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface Pricing6Props {
  heading: string;
  description?: string;
  price?: string | number;
  priceSuffix?: string;
  features?: string[][];
  buttonText?: string;
  className?: string;
}

const defaultFeatures = [
  ["Unlimited", "Integrations", "24/7 support"],
  ["Live collaborations", "Unlimited storage", "30-day money back"],
  ["Unlimited members", "Customization", "Unlimited users"],
];

const Pricing6 = ({
  heading = "Pricing",
  description = "Simple pricing with a free 7 day trial.",
  price = 29,
  priceSuffix = "/mo",
  features = defaultFeatures,
  buttonText = "Start free trial",
  className,
}: Pricing6Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
          <h2 className="text-4xl font-semibold text-pretty lg:text-6xl">
            {heading}
          </h2>
          <p className="max-w-md text-muted-foreground lg:text-xl">
            {description}
          </p>
          <div className="mx-auto flex w-full flex-col rounded-lg border p-6 sm:w-fit sm:min-w-80">
            <div className="flex justify-center">
              <span className="text-lg font-semibold">$</span>
              <span className="text-6xl font-semibold">{price}</span>
              <span className="self-end text-muted-foreground">
                {priceSuffix}
              </span>
            </div>
            <div className="my-6">
              {features.map((featureGroup, idx) => (
                <div key={idx}>
                  <ul className="flex flex-col gap-3">
                    {featureGroup.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center justify-between gap-2 text-sm font-medium"
                      >
                        {feature} <Check className="inline size-4 shrink-0" />
                      </li>
                    ))}
                  </ul>
                  {idx < features.length - 1 && <Separator className="my-6" />}
                </div>
              ))}
            </div>
            <Button>{buttonText}</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Pricing6 };
```
