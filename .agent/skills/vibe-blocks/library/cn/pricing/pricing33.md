# Pricing 33

## Metadata
- **Category**: Pricing
- **Objective**: Display highly flexible modular pricing "add-ons" rather than standard base subscription packages. 
- **Use Case**: Best for platforms with a credits-based or usage-based pricing architecture (e.g., AI tools that charge for generated images, email marketing tools that charge for extra sends) where users need to clearly understand a la carte options.
- **Visual Style**: Completely avoids typical vertical pricing columns. Instead, uses a vertically stacked list of full-width horizontal rows (`xl:grid-cols-[minmax(36.25rem,48.125rem)_1fr]`). Each row clearly isolates the icon, name, and description on the left, and the specific unit price and CTA button on the right. Styled cleanly with border-muted wrappers and simple pill-shaped badges for the header.
- **Interactivity**: Purely presentational standard layout.

## Source Code

```tsx
import {
  CalendarSync,
  Globe,
  MessageCircle,
  MessagesSquare,
  PlusCircle,
  Sparkles,
} from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ADDONS = [
  {
    icon: CalendarSync,
    name: "Automatically refill your credits",
    description:
      "Set your threshold, and we'll auto-refill your credits—no expiration, no interruptions!",
    price: {
      unit: "Total per 1000 message credits",
      amount: "$14",
    },
    link: "#",
  },
  {
    icon: MessageCircle,
    name: "Bonus message credits",
    description: "$12 per 1000 credits / month",
    price: {
      unit: "Total per month",
      amount: "$12",
    },
    link: "#",
  },
  {
    icon: MessagesSquare,
    name: "Additional agents",
    description: "$7 per AI agent / month",
    price: {
      unit: "Total per month",
      amount: "$7",
    },
    link: "#",
  },
  {
    icon: Globe,
    name: "Personalized domains",
    description:
      "Use your custom domains for the AI agent’s embed script, iframe, and shareable link—fully branded and seamless!",
    price: {
      unit: "Total per month",
      amount: "$59",
    },
    link: "#",
  },
  {
    icon: Sparkles,
    name: "Remove Watermark",
    description: "Remove the branding from the iframe and widget",
    price: {
      unit: "Total per month",
      amount: "$39",
    },
    link: "#",
  },
];

interface Pricing33Props {
  className?: string;
}

const Pricing33 = ({ className }: Pricing33Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="flex w-full flex-col items-center gap-4">
          <Badge className="flex items-center gap-2 rounded-full border border-muted bg-background px-4 py-1.5">
            <PlusCircle className="size-2 text-primary" />
            <p className="text-sm leading-5 font-medium text-foreground">
              Add-ons
            </p>
          </Badge>
          <h2 className="max-w-full text-center text-3xl font-semibold md:max-w-[42.5rem] md:text-5xl">
            Enhance your plan with powerful add-ons!
          </h2>
          <div className="flex w-full flex-col items-center gap-4 pt-10">
            {ADDONS.map((addon, i) => (
              <div
                className="grid w-full rounded-2xl border border-muted shadow-xs xl:grid-cols-[minmax(36.25rem,48.125rem)_1fr]"
                key={`addon-${i}`}
              >
                <div className="flex w-full flex-col gap-4 p-6 md:flex-row">
                  <div className="relative flex size-12 after:absolute after:top-1/2 after:left-1/2 after:z-10 after:block after:size-full after:-translate-1/2 after:rounded-full after:content-['']">
                    <div className="relative z-20 m-auto flex size-11.5 shrink-0 rounded-full bg-black">
                      <addon.icon className="m-auto size-5 stroke-white" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-medium">{addon.name}</h3>
                    <p className="text-base text-muted-foreground">
                      {addon.description}
                    </p>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center gap-2 p-6 md:flex-row">
                  <div className="flex w-full flex-wrap items-center gap-4 md:flex-nowrap">
                    <div className="text-lg font-semibold">
                      {addon.price.amount}
                    </div>
                    <div className="text-xs text-foreground/60">
                      {addon.price.unit}
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="block h-12 w-full px-4 md:max-w-[10.625rem]"
                  >
                    <a href={addon.link}>Get Add-on</a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Pricing33 };
```
