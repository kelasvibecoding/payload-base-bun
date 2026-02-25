# Pricing 26

## Metadata
- **Category**: Pricing
- **Objective**: Display heavily stylized, badge-driven service packages rather than a standard software subscription pricing tier.
- **Use Case**: Best for marketing agencies, freelancers, or service-based businesses offering packaged solutions (e.g., "SEO Starter Pack", "Enterprise Marketing Strategy") with estimated timeframes and flat-rate costs instead of recurring MRR.
- **Visual Style**: Distinctive, slightly brutalist or retro agency aesthetic. The featured tier is highlighted using a bold color block (`bg-amber-200`). At the top of each card, a staggered array of specific capability `Badges` (e.g., SEO, PPC) visually replace traditional generic feature checks. The core package details (Perfect for, Time, Price) are displayed in a clean, dashed-border list (`border-y border-dashed border-muted-foreground`).
- **Interactivity**: Purely presentational structure.

## Source Code

```tsx
"use client";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface DataItem {
  title: string;
  description: string;
  badges: string[];
  features: { text: string; description: string }[];
  timeEstimate: string;
  priceEstimate: string;
  isHighlighted?: boolean;
}

interface Pricing26Props {
  className?: string;
}

const Pricing26 = ({ className }: Pricing26Props) => {
  const DATA: DataItem[] = [
    {
      title: "Starter Plan",
      description:
        "Kickstart your digital presence with essential marketing tools and strategies tailored for small businesses.",
      badges: ["SEO", "Social Media"],
      features: [
        { text: "Perfect for", description: "Startups, Small Businesses" },
        { text: "Time estimate", description: "2 - 4 weeks" },
        { text: "Price estimate", description: "$500" },
      ],
      timeEstimate: "2 - 4 weeks",
      priceEstimate: "$500",
    },
    {
      title: "Growth Plan",
      description:
        "Scale your business with advanced marketing strategies, including PPC campaigns and content marketing.",
      badges: ["SEO", "PPC", "Content Marketing"],
      features: [
        { text: "Perfect for", description: "Growing Businesses" },
        { text: "Time estimate", description: "4 - 6 weeks" },
        { text: "Price estimate", description: "$1,500" },
      ],
      timeEstimate: "4 - 6 weeks",
      priceEstimate: "$1,500",
      isHighlighted: true, // Highlight this plan
    },
    {
      title: "Enterprise Plan",
      description:
        "Comprehensive marketing solutions for large businesses, including advanced analytics and custom campaigns.",
      badges: ["SEO", "PPC", "Content Marketing"],
      features: [
        { text: "Perfect for", description: "Large Enterprises" },
        { text: "Time estimate", description: "6 - 8 weeks" },
        { text: "Price estimate", description: "$5,000" },
      ],
      timeEstimate: "6 - 8 weeks",
      priceEstimate: "$5,000",
    },
  ];

  return (
    <section className={cn("bg-muted py-32", className)}>
      <div className="container">
        <h1 className="mb-4 text-2xl md:text-3xl lg:mb-8 lg:text-4xl">
          Pricing Plans
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {DATA.map((pkg, idx) => (
            <div
               key={idx}
              className={cn(
                "flex flex-1 flex-col rounded-3xl p-6 lg:py-8",
                pkg.isHighlighted ? "bg-amber-200" : "bg-background",
              )}
            >
              {/* Badges */}
              <div className="mb-4 flex flex-wrap gap-2">
                {pkg.badges.map((badgeText, i) => (
                  <Badge
                    key={i}
                    variant="outline"
                    className={cn(
                      "rounded-sm border bg-transparent px-4 py-2 text-black",
                      pkg.isHighlighted ? "border-black" : "border-secondary",
                    )}
                  >
                    {badgeText}
                  </Badge>
                ))}
              </div>

               {/* Title */}
              <h2 className="mt-24 mb-2 text-base font-medium lg:text-2xl">
                {pkg.title}
              </h2>

              {/* Description */}
              <p className="mb-6 text-sm text-muted-foreground">
                {pkg.description}
              </p>

               {/* Features */}
              <div className="mb-6 flex-1">
                {pkg.features.map((feature, i) => (
                  <div
                    key={i}
                    className={cn(
                      "py-4",
                      i === 0 &&
                        "border-t border-dashed border-muted-foreground",
                      i !== pkg.features.length - 1 &&
                        "border-b border-dashed border-muted-foreground",
                    )}
                  >
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">
                        {feature.text}
                      </span>
                      <span className="text-sm">{feature.description}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Button */}
              <Button className="mt-auto w-full py-6">Get Started</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Pricing26 };
```
