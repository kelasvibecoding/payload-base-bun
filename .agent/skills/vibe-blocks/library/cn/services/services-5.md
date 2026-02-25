# Services 5

## Metadata
- **Category**: Services
- **Objective**: Provide a structured, feature-dense service grid with secondary "What's Included" lists.
- **Use Case**: Comprehensive service providers or B2B platforms offering end-to-end digital solutions requiring extensive feature disclosure.
- **Visual Style**: Large, grounded `bg-muted` cards with recessed icon containers, detailed descriptions, and a 2-column list of sub-features utilizing a clean "What's Included" heading.
- **Interactivity**: Static informative layout designed for transparent and detailed explanation of service packages and deliverables.

## Description
Services 5 is optimized for B2B layouts where clarity on deliverables is paramount. By including a dedicated "What's Included" section within each service block, it eliminates ambiguity about the package scope. The 2-column grid for sub-items ensures that even dense lists (like frontend, backend, and API integration) stay organized and scannable. This component is ideal for agencies focusing on "Product-as-a-Service" or complex consulting models.

## Source Code

```tsx
"use client";

import { Code, Cog, PenTool, Shrub } from "lucide-react";

import { cn } from "@/lib/utils";

interface Services5Props {
  className?: string;
}

const Services5 = ({ className }: Services5Props) => {
  const services = [
    {
      icon: <Cog className="h-6 w-6" />,
      title: "Product Strategy",
      description:
        "Comprehensive market analysis and strategic planning to position your product for success in competitive markets.",
      items: [
        "Market Research",
        "User Personas",
        "Competitive Analysis",
        "Product Roadmaps",
      ],
    },
    {
      icon: <PenTool className="h-6 w-6" />,
      title: "Design",
      description:
        "User-centered design solutions that create intuitive and engaging experiences across all digital touchpoints.",
      items: ["UI/UX Design", "Prototyping", "Design Systems", "User Testing"],
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Web Development",
      description:
        "Modern, scalable web applications built with cutting-edge technologies and development best practices.",
      items: [
        "Frontend Development",
        "Backend Development",
        "API Integration",
        "Performance Optimization",
      ],
    },
    {
      icon: <Shrub className="h-6 w-6" />,
      title: "Marketing",
      description:
        "Strategic marketing and optimization services to successfully launch and scale your digital products.",
      items: [
        "SEO Strategy",
        "Analytics Setup",
        "A/B Testing",
        "Growth Marketing",
      ],
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
              End-to-end digital solutions designed to help your business thrive
              in the modern marketplace.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <div key={index} className="space-y-6 rounded-xl bg-muted p-8">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg border border-border bg-background p-2">
                    {service.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                    What's Included
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-2">
                        <div className="h-1 w-1 rounded-full bg-foreground" />
                        <span className="text-sm text-foreground">{item}</span>
                      </div>
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

export { Services5 };
```
