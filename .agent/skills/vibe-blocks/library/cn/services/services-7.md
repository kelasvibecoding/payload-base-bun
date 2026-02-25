# Services 7

## Metadata
- **Category**: Services
- **Objective**: Provide a list-style service display with badges for sub-services.
- **Use Case**: Professional agencies highlighting complex service descriptions and specific deliverables in a vertical flow.
- **Visual Style**: Responsive horizontal list (mobile stacks) featuring square icon containers and inline badges for scannable skill attributes.
- **Interactivity**: Subtle shadow effect on hover that indicates clicking/interactive potential.

## Description
Services 7 focuses on information depth. By utilizing a horizontal layout for each service block, it provides ample space for longer descriptions and categorized badges. This component is ideal for specialized consulting or deep-tech agencies where the specific sub-deliverables (represented by badges) are as important as the primary service heading.

## Source Code

```tsx
"use client";

import { Code, Cog, PenTool, Shrub } from "lucide-react";

import { cn } from "@/lib/utils";

interface Services7Props {
  className?: string;
}

const Services7 = ({ className }: Services7Props) => {
  const services = [
    {
      icon: <Cog className="h-6 w-6" />,
      title: "Product Strategy",
      description:
        "From market research to user personas, we help you build products that matter.",
      items: ["Market Research", "User Personas"],
    },
    {
      icon: <PenTool className="h-6 w-6" />,
      title: "Design",
      description:
        "Beautiful, functional designs that create memorable user experiences.",
      items: ["UI/UX Design", "Prototyping", "Interaction Design"],
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Web Development",
      description:
        "Robust, scalable applications built with modern technologies and frameworks.",
      items: ["Frontend Dev", "Backend Dev"],
    },
    {
      icon: <Shrub className="h-6 w-6" />,
      title: "Marketing",
      description:
        "Strategic growth initiatives to scale your product and maximize impact.",
      items: ["SEO Strategy", "Analytics & Data", "A/B Testing"],
    },
  ];

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto max-w-4xl space-y-16">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-foreground">
              Services
            </h2>
            <p className="mx-auto max-w-2xl text-lg tracking-tight text-muted-foreground md:text-xl">
              Comprehensive solutions to bring your digital vision to life.
            </p>
          </div>

          <div className="space-y-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-6 rounded-lg border border-border p-6 transition-shadow bg-card hover:shadow-sm md:flex-row"
              >
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-foreground">
                    {service.icon}
                  </div>
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.items.map((item, itemIndex) => (
                      <span
                        key={itemIndex}
                        className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
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

export { Services7 };
```
