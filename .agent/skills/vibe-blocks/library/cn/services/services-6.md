# Services 6

## Metadata
- **Category**: Services
- **Objective**: Provide a clean, icon-focused 4-column service grid.
- **Use Case**: Tech-focused landing pages where multiple diverse services need to be presented compactly and professionally.
- **Visual Style**: Centered 4-column grid layout featuring circular icon containers that provide a strong visual anchor.
- **Interactivity**: Hover color inversion on icons (bg-muted to bg-foreground) that provides immediate visual feedback.

## Description
Services 6 is designed for high-density service communication. By placing icons in circular containers that respond to user interaction, it creates a dynamic and modern feel. This layout is particularly effective for broad technical agencies that offer diverse but related services (like coding, design, and marketing) and want to show all of them above the fold or in a single scannable row.

## Source Code

```tsx
"use client";

import { Code, Cog, PenTool, Shrub } from "lucide-react";

import { cn } from "@/lib/utils";

interface Services6Props {
  className?: string;
}

const Services6 = ({ className }: Services6Props) => {
  const services = [
    {
      icon: <Cog className="h-8 w-8" />,
      title: "Product Strategy",
      description:
        "From market research to user personas, we help you build products that matter.",
      items: ["Market Research", "User Personas"],
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: "Design",
      description:
        "Beautiful, functional designs that create memorable user experiences.",
      items: ["UI/UX Design", "Prototyping", "Interaction Design"],
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description:
        "Robust, scalable applications built with modern technologies and frameworks.",
      items: ["Frontend Dev", "Backend Dev"],
    },
    {
      icon: <Shrub className="h-8 w-8" />,
      title: "Marketing",
      description:
        "Strategic growth initiatives to scale your product and maximize impact.",
      items: ["SEO Strategy", "Analytics & Data", "A/B Testing"],
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
              We deliver end-to-end digital solutions that drive results and
              exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div key={index} className="group space-y-6 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-muted transition-colors group-hover:bg-foreground group-hover:text-background text-foreground group-hover:text-background">
                  {service.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
                <div className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="text-xs font-medium text-muted-foreground"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Services6 };
```
