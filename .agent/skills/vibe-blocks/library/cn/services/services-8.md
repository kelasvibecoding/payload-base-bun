# Services 8

## Metadata
- **Category**: Services
- **Objective**: Provide a deep-dive service overview using an accordion for progressive disclosure.
- **Use Case**: Documentation-heavy service offerings or high-ticket consulting requiring extensive detail without overwhelming the initial view.
- **Visual Style**: Structured accordion with summary headers (icon + title + short description) and detailed content blocks containing descriptions and dual-column bulleted lists.
- **Interactivity**: Single-open accordion functionality that guides user focus through one service at a time.

## Description
Services 8 is designed for transparent and detailed value communication. By utilizing an accordion, it hides the complexity of deliverables and sub-services behind a clean high-level summary. This approach is highly effective for premium services where the client needs to understand the "why" and "what" in detail before committing, but where showing everything at once would create too much noise.

## Source Code

```tsx
"use client";

import { Code, Cog, PenTool, Shrub } from "lucide-react";

import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Services8Props {
  className?: string;
}

const Services8 = ({ className }: Services8Props) => {
  const services = [
    {
      icon: <Cog className="h-5 w-5" />,
      title: "Product Strategy",
      shortDescription: "Strategic planning and market positioning",
      description:
        "From market research to user personas, we help you build products that matter. Our strategic approach ensures your product meets real user needs.",
      items: [
        "Market Research",
        "User Personas",
        "Competitive Analysis",
        "Product Roadmaps",
      ],
      deliverables: [
        "Strategy Document",
        "User Persona Profiles",
        "Market Analysis Report",
      ],
    },
    {
      icon: <PenTool className="h-5 w-5" />,
      title: "Design",
      shortDescription: "User-centered design solutions",
      description:
        "Beautiful, functional designs that create memorable user experiences. We focus on both aesthetics and usability to create designs that convert.",
      items: [
        "UI/UX Design",
        "Prototyping",
        "Interaction Design",
        "Design Systems",
      ],
      deliverables: [
        "Design System",
        "Interactive Prototypes",
        "UI/UX Mockups",
      ],
    },
    {
      icon: <Code className="h-5 w-5" />,
      title: "Web Development",
      shortDescription: "Modern, scalable applications",
      description:
        "Robust, scalable applications built with modern technologies and frameworks. We ensure your application is fast, secure, and maintainable.",
      items: [
        "Frontend Dev",
        "Backend Dev",
        "API Integration",
        "Performance Optimization",
      ],
      deliverables: ["Source Code", "Documentation", "Deployment Guide"],
    },
    {
      icon: <Shrub className="h-5 w-5" />,
      title: "Marketing",
      shortDescription: "Growth and optimization strategies",
      description:
        "Strategic growth initiatives to scale your product and maximize impact. We use data-driven approaches to optimize your marketing efforts.",
      items: [
        "SEO Strategy",
        "Analytics & Data",
        "A/B Testing",
        "Content Marketing",
      ],
      deliverables: [
        "Marketing Plan",
        "Analytics Setup",
        "Performance Reports",
      ],
    },
  ];

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto max-w-3xl space-y-16">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-foreground">
              Services
            </h2>
            <p className="text-lg tracking-tight text-muted-foreground md:text-xl">
              Click to learn more about each service we offer.
            </p>
          </div>

          <Accordion
            type="single"
            collapsible
            defaultValue="item-0"
            className="space-y-4"
          >
            {services.map((service, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-lg border border-border last:border-b overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-6 hover:bg-muted/50 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="text-foreground">{service.icon}</div>
                    <div className="text-left">
                      <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-6 border-t border-border bg-muted/20 p-6">
                  <p className="leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h4 className="mb-3 font-medium text-foreground">Services Include:</h4>
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

                    <div>
                      <h4 className="mb-3 font-medium text-foreground">Deliverables:</h4>
                      <ul className="space-y-1">
                        {service.deliverables.map((deliverable, delivIndex) => (
                          <li
                            key={delivIndex}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <div className="h-1 w-1 rounded-full bg-foreground" />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export { Services8 };
```
