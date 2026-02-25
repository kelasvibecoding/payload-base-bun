# Services 4

## Metadata
- **Category**: Services
- **Objective**: Provide a bold, icon-and-description centered service grid with persistent bulleted items.
- **Use Case**: Modern tech agencies, startups, or product studios showcasing their primary capabilities with detailed context.
- **Visual Style**: Structured 2-column grid featuring cards with large, rounded icon containers, prominent headings, and clearly defined "sub-feature" bullets using solid circular indicators.
- **Interactivity**: Subtle hover elevation effect that adds depth and focuses user attention on individual service pillars.

## Description
Services 4 is designed for high-impact communication. It strikes a balance between visual iconography and textual detail, making it suitable for companies that need to explain *how* they add value (e.g., competitive analysis under Product Strategy) while maintaining a clean, professional aesthetic. The use of borders and padding creates a stable, trustworthy grid that adapts well to various screen sizes.

## Source Code

```tsx
"use client";

import { Code, Cog, PenTool, Shrub } from "lucide-react";

import { cn } from "@/lib/utils";

interface Services4Props {
  className?: string;
}

const Services4 = ({ className }: Services4Props) => {
  const services = [
    {
      icon: <Cog className="h-6 w-6" />,
      title: "Product Strategy",
      description:
        "Strategic planning and market positioning to ensure your product meets user needs and business goals.",
      items: ["Market Research", "User Personas", "Competitive Analysis"],
    },
    {
      icon: <PenTool className="h-6 w-6" />,
      title: "Design",
      description:
        "Beautiful, user-centered designs that create engaging experiences across all platforms.",
      items: ["UI/UX Design", "Prototyping", "Interaction Design"],
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Web Development",
      description:
        "Modern, scalable web applications built with the latest technologies and best practices.",
      items: ["Frontend Dev", "Backend Dev", "API Integration"],
    },
    {
      icon: <Shrub className="h-6 w-6" />,
      title: "Marketing",
      description:
        "Data-driven strategies to launch successfully and scale your product efficiently.",
      items: ["SEO Strategy", "Analytics & Data", "A/B Testing"],
    },
  ];

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-foreground">
              Services
            </h2>
            <p className="mx-auto max-w-2xl text-lg tracking-tight text-muted-foreground md:text-xl">
              We craft digital experiences that captivate and convert, bringing
              your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="space-y-6 rounded-lg border border-border bg-card p-8 transition-shadow hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-muted p-3">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                </div>
                <p className="leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-foreground" />
                      <span className="text-sm font-medium text-foreground">{item}</span>
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

export { Services4 };
```
