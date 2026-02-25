# Services 16

## Metadata
- **Category**: Services
- **Objective**: Provide a premium, typographic-heavy service directory with hierarchical accordions.
- **Use Case**: Elite consulting firms, high-end strategy agencies, or technology studios wanting a bold "Swiss-style" or editorial design.
- **Visual Style**: Massive high-contrast typographic headline ("Services.") paired with a numbered accordion system. Open items feature asymmetric horizontal layouts with image containers, deep descriptions, and badge-driven category tags.
- **Interactivity**: Multi-open accordion functionality with clean, minimalist trigger markers and fluid content expansion.

## Description
Services 16 is designed for sophisticated authority. By utilizing extreme typographic scale and a minimalist numbering system, it establishes an immediate architectural and "designed" feel. The accordion content doesn't just list services; it provides a mini-portfolio view for each discipline, complete with representative imagery and categorized badges. This component is ideal for agencies that value precision and high-density information disclosure.

## Source Code

```tsx
"use client";

import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    title: "Product strategy",
    description:
      "Define clear objectives, align stakeholders, and prioritize initiatives that drive measurable impact.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/daria-nepriakhina-zoCDWPuiRuA-unsplash.jpg",
    categories: [
      "Vision & goals",
      "Stakeholder alignment",
      "Prioritization",
      "Roadmapping",
      "Delivery planning",
      "Metrics",
    ],
  },
  {
    title: "Growth marketing & lifecycle",
    description:
      "Full-funnel experimentation and lifecycle programs that acquire, activate, and retain customers.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/diggity-marketing-SB0WARG16HI-unsplash.jpg",
    categories: [
      "Acquisition",
      "Activation",
      "Retention",
      "Attribution",
      "Experimentation",
    ],
  },
  {
    title: "Content operations & SEO",
    description:
      "Operationalized content systems and search strategies that compound organic growth over time.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/stephen-dawson-qwtCeJ5cLYs-unsplash.jpg",
    categories: [
      "Topic mapping",
      "Technical SEO",
      "Editorial process",
      "Distribution",
    ],
  },
  {
    title: "AI Integration & Automation",
    description:
      "Leverage artificial intelligence and automation to streamline workflows, enhance decision-making, and unlock new business opportunities.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/marvin-meyer-SYTO3xs06fU-unsplash.jpg",
    categories: [
      "Process automation",
      "Machine learning",
      "Data analysis",
      "Chatbots",
      "Predictive analytics",
      "Custom AI solutions",
    ],
  },
];

interface Services16Props {
  className?: string;
}

const Services16 = ({ className }: Services16Props) => {
  return (
    <section className={cn("py-32 bg-background", className)}>
      <div className="container">
        <div className="grid items-start gap-4 md:grid-cols-4">
          <div className="hidden md:block"></div>
          <h1 className="col-span-3 text-6xl font-semibold sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter text-foreground">
            Services.
          </h1>
        </div>
        <div className="mt-20">
          <Accordion type="multiple" defaultValue={["item-0"]}>
            {services.map((service, index) => (
              <AccordionItem value={`item-${index}`} key={index} className="border-t border-border last:border-b-0">
                <AccordionTrigger className="hover:no-underline py-8 group">
                  <div className="flex w-full grid-cols-4 items-center gap-4 sm:grid text-left">
                    <span className="text-base text-muted-foreground font-mono">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="col-span-3 text-xl sm:text-2xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
                      {service.title}
                    </h2>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="flex grid-cols-4 pt-6 pb-12 sm:grid sm:gap-4">
                  <div className="hidden sm:block" />
                  <div className="col-span-3 grid gap-10 lg:grid-cols-5">
                    <div className="flex flex-col gap-6 md:flex-row md:gap-8 lg:col-span-3">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="aspect-[1.4] w-full md:w-52 rounded-xl object-cover shadow-sm bg-muted"
                      />
                      <div className="flex flex-col gap-3 sm:gap-4">
                        <h4 className="text-2xl font-medium tracking-tight sm:text-3xl text-foreground">
                          {service.title}
                        </h4>
                        <p className="text-muted-foreground sm:text-base leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 lg:col-span-2">
                      <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                        Expertise
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.categories.map((category, catIndex) => (
                          <Badge key={catIndex} variant="secondary" className="bg-muted/50 hover:bg-muted font-normal text-foreground border-none">
                            {category}
                          </Badge>
                        ))}
                      </div>
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

export { Services16 };
```
