# Pricing 40

## Metadata
- **Category**: Pricing
- **Objective**: Display highly detailed service packages where the nuances between offerings require significant text explanation.
- **Use Case**: Best for consulting businesses, agencies, and high-ticket B2B service providers where standard checkmark lists are inadequate to explain the value of a "$15,000/mo" retainer.
- **Visual Style**: Abandons the typical card grid entirely. Uses a vertically stacked `Accordion` list. Each accordion item reveals a 3-column grid (`md:grid-cols-3`) containing detailed bullet points categorized by "What I do", "What you get", and "Ideal for".
- **Interactivity**: Fully relies on Shadcn's `Accordion` primitives to manage vertical screen estate, allowing users to drill down into specific packages without being overwhelmed by text walls on load.

## Source Code

```tsx
"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Product {
  title: string;
  price: string;
  content: {
    title: string;
    items: string[];
  }[];
}

const products: Product[] = [
  {
    title: "Startup Foundation Package",
    price: "$5,000/mo",
    content: [
      {
        title: "What I do",
        items: [
          "Quarterly and monthly goal setting including key workstreams and KPIs",
          "Creation of marketing foundations (personas, messaging, brand systems)",
          "Website refreshes and content strategy development",
          "Hiring your first marketing team members",
        ],
      },
      {
        title: "What you get",
        items: [
          "12 hours/week for Zoom meetings and synchronous reviews",
          "Slack/email support during business hours",
          "Bi-weekly strategy sessions",
          "Monthly progress reports",
        ],
      },
      {
        title: "Ideal for",
        items: [
          "Companies building marketing fundamentals",
          "Startups pre-team expansion",
          "Founders needing strategic guidance",
          "Businesses transitioning to in-house teams",
        ],
      },
    ],
  },
  {
    title: "Growth Accelerator Package",
    price: "$8,500/mo",
    content: [
      {
        title: "What I do",
        items: [
          "Advanced campaign strategy and execution",
          "Performance marketing optimization",
          "Marketing automation setup",
          "Team training and leadership development",
        ],
      },
      {
        title: "What you get",
        items: [
          "20 hours/week dedicated support",
          "Weekly performance reviews",
          "Custom analytics dashboard",
          "24/7 priority support",
        ],
      },
      {
        title: "Ideal for",
        items: [
          "Scaling startups with existing teams",
          "Companies launching new products",
          "Businesses entering new markets",
          "Organizations needing rapid growth",
        ],
      },
    ],
  },
  {
    title: "Enterprise Solution Package",
    price: "$15,000/mo",
    content: [
      {
        title: "What I do",
        items: [
          "Full-scale marketing department management",
          "Cross-functional team coordination",
          "Global campaign strategy",
          "Executive-level consulting",
        ],
      },
      {
        title: "What you get",
        items: [
          "Dedicated account team",
          "Custom SLA agreements",
          "Quarterly business reviews",
          "Enterprise-grade security",
        ],
      },
      {
        title: "Ideal for",
        items: [
          "Established enterprises",
          "Companies with 500+ employees",
          "Global organizations",
          "Complex marketing needs",
        ],
      },
    ],
  },
  {
    title: "Custom Package",
    price: "Contact Us",
    content: [
      {
        title: "What I do",
        items: [
          "Customized marketing solutions",
          "Specialized team training",
          "Unique marketing challenges",
          "Flexible pricing and services",
        ],
      },
      {
        title: "What you get",
        items: [
          "Tailored support and services",
          "Customized pricing",
          "Dedicated account team",
          "Unlimited support",
        ],
      },
      {
        title: "Ideal for",
        items: [
          "Companies with unique marketing needs",
          "Organizations with complex challenges",
          "Businesses with specific goals",
          "Teams looking for specialized support",
        ],
      },
    ],
  },
];

interface Pricing40Props {
  className?: string;
}

const Pricing40 = ({ className }: Pricing40Props) => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  return (
    <section className={cn("py-20", className)}>
      <div className="container">
        <h2 className="mb-12 text-3xl font-bold tracking-tight">Packages</h2>
        <div className="mt-12 space-y-2">
          {products.map((item, index) => (
            <Accordion
              key={index}
              type="multiple"
              value={openItems}
              onValueChange={setOpenItems}
              className="border-b border-muted"
            >
              <AccordionItem value={`item-${index}`} className="border-none">
                <AccordionTrigger className="flex items-center justify-between gap-4 py-6 transition-all duration-300 hover:no-underline [&>svg]:h-6 [&>svg]:w-6 [&>svg]:shrink-0 [&>svg]:transform [&>svg]:transition-transform [&[data-state=open]>svg]:rotate-180">
                  <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-left text-xl font-semibold sm:text-2xl">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-4">
                      <span className="text-lg text-muted-foreground sm:text-2xl">
                        {item.price}
                      </span>
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="pb-6">
                  <div className="grid gap-8 md:grid-cols-3">
                    {item.content.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="space-y-4">
                        <h4 className="text-xl font-medium text-foreground">
                          {section.title}
                        </h4>
                        <ul className="space-y-3">
                          {section.items.map((bullet, bulletIndex) => (
                            <li
                              key={bulletIndex}
                              className="flex items-start text-muted-foreground"
                            >
                              <span className="mr-2">•</span>
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Pricing40 };
```
