# Services 1

## Metadata
- **Category**: Services
- **Objective**: Provide a simple, 2-column grid of service cards with bulleted lists.
- **Use Case**: Professional services or consulting firms highlighting their core offerings in a clear, scannable format.
- **Visual Style**: Clean layout featuring `bg-muted` rounded cards, each containing a title, description, and a checklist of sub-services.
- **Interactivity**: Static informational grid designed for clear communication of service range and specifics.

## Description
Services 1 is optimized for readability and clarity. By utilizing distinct cards with grounded backgrounds and functional checklist items, it ensures that potential clients can quickly understand the scope of each service pillar. This layout works best for consulting, strategy, or monitoring businesses that offer structured, multi-faceted solutions.

## Source Code

```tsx
"use client";

import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

interface Services1Props {
  className?: string;
}

const Services1 = ({ className }: Services1Props) => {
  const services = [
    {
      title: "Strategy",
      description:
        "We craft a roadmap that aligns with your vision, ensuring every move is purposeful and impactful.",
      subHeading: "STRATEGY SERVICES",
      items: [
        "Market Analysis and Insights",
        "Goal Setting and Roadmapping",
        "Innovation Integration",
      ],
    },
    {
      title: "Consulting",
      description:
        "We collaborate with you to understand your unique needs, offering insights, and practical solutions.",
      items: [
        "Organizational Restructuring",
        "Process Optimization",
        "Performance Analysis and Improvement",
      ],
    },
    {
      title: "Development",
      description:
        "From market entry strategies to partnership development, we act as catalysts for your growth journey.",
      items: [
        "Market Entry Strategies",
        "Partnership Development",
        "Mergers and Acquisitions",
      ],
    },
    {
      title: "Monitoring",
      description:
        "We provide the tools and insights needed to monitor and enhance every facet of your business operations.",
      items: [
        "Real-time Analytics",
        "Performance Metrics Tracking",
        "Risk Management Solutions",
      ],
    },
  ];

  return (
    <section className={cn("bg-background py-32", className)}>
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-xl font-semibold text-foreground">
            Services
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <div key={index} className="rounded-lg bg-muted p-8">
                <h3 className="mb-4 text-base font-medium text-foreground">
                  {service.title}
                </h3>

                <p className="mb-6 text-xs leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-3">
                      <div className="flex h-4 w-4 items-center justify-center rounded-full bg-muted-foreground/20">
                        <Check className="h-2.5 w-2.5 text-muted-foreground" />
                      </div>
                      <span className="text-xs text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Services1 };
```
