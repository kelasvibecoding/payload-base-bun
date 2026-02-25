# Services 9

## Metadata
- **Category**: Services
- **Objective**: Provide a transparent, pricing-focused service grid with action triggers.
- **Use Case**: Productized service agencies, software studios, or freelancers offering fixed-price packages with defined durations.
- **Visual Style**: Structured 2-column grid featuring detailed cards with top-level metrics (duration), centered descriptions, and bottom-anchored pricing with CTA buttons.
- **Interactivity**: Hover shadow and border enhancement that guides user intent toward the "Get Started" call to action.

## Description
Services 9 is designed for conversion-driven service catalogs. By placing the duration and price at the forefront, it addresses common client questions immediately. The layout separates general value (description) from specific deliverables (bulleted list), creating a logical flow from interest to evaluation. This component is perfect for agencies that have standardized their offerings and want to reduce sales friction.

## Source Code

```tsx
"use client";

import { ArrowRight, Code, Cog, PenTool, Shrub } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Services9Props {
  className?: string;
}

const Services9 = ({ className }: Services9Props) => {
  const services = [
    {
      icon: <Cog className="h-6 w-6" />,
      title: "Product Strategy",
      description:
        "From market research to user personas, we help you build products that matter.",
      items: ["Market Research", "User Personas"],
      duration: "2-4 weeks",
      price: "Starting at $5,000",
    },
    {
      icon: <PenTool className="h-6 w-6" />,
      title: "Design",
      description:
        "Beautiful, functional designs that create memorable user experiences.",
      items: ["UI/UX Design", "Prototyping", "Interaction Design"],
      duration: "3-6 weeks",
      price: "Starting at $8,000",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Web Development",
      description:
        "Robust, scalable applications built with modern technologies and frameworks.",
      items: ["Frontend Dev", "Backend Dev"],
      duration: "6-12 weeks",
      price: "Starting at $15,000",
    },
    {
      icon: <Shrub className="h-6 w-6" />,
      title: "Marketing",
      description:
        "Strategic growth initiatives to scale your product and maximize impact.",
      items: ["SEO Strategy", "Analytics & Data", "A/B Testing"],
      duration: "Ongoing",
      price: "Starting at $3,000/mo",
    },
  ];

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto max-w-6xl space-y-16">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-foreground">
              Services
            </h2>
            <p className="mx-auto max-w-2xl text-lg tracking-tight text-muted-foreground md:text-xl">
              Transparent pricing for world-class digital solutions tailored to
              your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col rounded-xl border border-border bg-card p-8 transition-shadow hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-muted p-2 text-foreground">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">
                      Duration
                    </div>
                    <div className="text-sm font-medium text-foreground">
                      {service.duration}
                    </div>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <div className="mt-6 flex-1 space-y-2">
                  <div className="text-sm font-medium text-muted-foreground">
                    What's included:
                  </div>
                  <ul className="space-y-1">
                    {service.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <div className="h-1 w-1 rounded-full bg-foreground" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-border pt-6">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-semibold text-foreground">{service.price}</div>
                    <Button size="sm" variant="outline" className="group/btn">
                      Get Started
                      <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-0.5" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Services9 };
```
