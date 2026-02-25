# Services 18

## Metadata
- **Category**: Services
- **Objective**: Provide a linear service showcase with status/progress indicators and a supportive sidebar.
- **Use Case**: Agencies or product studios that want to emphasize a comprehensive workflow or a diverse list of project categories.
- **Visual Style**: Row-based layout featuring a benefit-driven sidebar (points with icons) and a secondary column of horizontal "Service Tiles" with image previews and dot-based status/priority trackers.
- **Interactivity**: Clean hover elevation for tiles and visual feedback via primary-colored progress dots that provide a sense of project volume or maturity.

## Description
Services 18 is designed for credibility and results. By pairing a benefit-oriented sidebar with a list of service categories, it explains not only *what* the agency does but *why* it matters (e.g., "Boost Engagement"). The unique dot-based indicator system on the service tiles adds a technical, "data-driven" aesthetic that is perfect for software development studios or performance marketing firms.

## Source Code

```tsx
"use client";

import { ArrowUpRight, Plus } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const services = [
  {
    title: "Web Design",
    category: "Design",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/tirza-van-dijk-o1SKqmgSDbg-unsplash.jpg",
  },
  {
    title: "Digital Marketing",
    category: "Marketing",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/adem-ay-Tk9m_HP4rgQ-unsplash.jpg",
  },
  {
    title: "App Development",
    category: "Development",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/marvin-meyer-SYTO3xs06fU-unsplash.jpg",
  },
  {
    title: "Content Creation",
    category: "Content",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/christin-hume-Hcfwew744z4-unsplash.jpg",
  },
];

interface Services18Props {
  className?: string;
}

const Services18 = ({ className }: Services18Props) => {
  return (
    <section className={cn("py-32 bg-background font-sans", className)}>
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="size-3 rounded-sm bg-primary" />
            <p className="tracking-tight font-medium text-foreground">Our Services</p>
          </div>
          <p className="text-sm text-muted-foreground">
            <span className="font-mono font-semibold text-foreground">+3000</span> projects completed
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-20 lg:grid-cols-3">
          <div className="flex flex-col gap-7">
            <h1 className="text-6xl font-semibold tracking-tight text-foreground leading-[1.1]">Creative Solutions</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Elevate your business with tailored digital strategies and
              impactful design.
            </p>
            <Separator className="bg-border" />
            <div className="flex flex-col gap-5 tracking-tight">
              <div className="flex items-center gap-2.5">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-muted text-foreground">
                  <Plus className="size-3.5" />
                </span>
                <p className="font-medium text-foreground">Boost Engagement & Results</p>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-muted text-foreground">
                  <Plus className="size-3.5" />
                </span>
                <p className="font-medium text-foreground">Built for Tomorrow's Growth</p>
              </div>
            </div>
            <Button className="w-fit group/btn" size="lg">
              Get Started <ArrowUpRight className="ml-1 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </Button>
          </div>
          <div className="col-span-2 space-y-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-md border border-border bg-muted py-2 pr-6 pl-2 dark:bg-card transition-all hover:bg-muted/80 hover:border-primary/20"
              >
                <div className="flex items-center gap-5">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-20 w-32 rounded-sm border border-border/50 object-cover bg-muted flex-shrink-0"
                  />
                  <div className="flex flex-col">
                    <h2 className="text-lg font-semibold tracking-tight text-foreground">
                      {service.title}
                    </h2>
                    <p className="tracking-tight text-muted-foreground text-sm uppercase font-medium">
                      {service.category}
                    </p>
                  </div>
                </div>
                <div className="hidden items-center gap-1.5 sm:flex">
                  {Array.from({ length: services.length }).map((_, i) => (
                    <span
                      key={i}
                      className={cn(
                        "size-2.5 rounded-full transition-colors duration-500",
                        i <= index ? "bg-primary" : "bg-muted-foreground/20",
                      )}
                    />
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

export { Services18 };
```
