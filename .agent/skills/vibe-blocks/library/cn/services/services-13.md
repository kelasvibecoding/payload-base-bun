# Services 13

## Metadata
- **Category**: Services
- **Objective**: Provide a high-impact, flagship-driven service showcase with a dominant hero element.
- **Use Case**: Specialized agencies or product teams that want to lead with a single primary flagship service followed by a supporting cast of expert categories.
- **Visual Style**: Layout-shifting grid featuring a wide 16:9 aspect ratio "Hero Card" that spans multiple columns, followed by a series of portrait 4:5 cards with overlaid bold typography and persistent action indicators.
- **Interactivity**: Dynamic Framer Motion hover states including gentle scaling (1.02) and opacity modulation that creates a "breathing" effect across the interface.

## Description
Services 13 is designed for focal intensity. By utilizing a landscape-oriented hero card as the entry point, it establishes the agency's primary superpower. The subsequent portrait cards provide a sophisticated grid for exploring other areas of expertise without diminishing the hero's impact. This component is particularly effective for agencies that have one high-conversion flagship offering they want everyone to see first.

## Source Code

```tsx
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type ServiceProps = {
  title: string;
  image: string;
  url: string;
  size?: "large" | "medium" | "small";
};

const services: ServiceProps[] = [
  {
    title: "Web Development",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-6jEVl7xPH3E-unsplash.jpg",
    url: "",
    size: "large",
  },
  {
    title: "Mobile App Development",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-gDmVqxZt1hg-unsplash.jpg",
    url: "",
    size: "medium",
  },
  {
    title: "UI/UX Design",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-9__Q24sJqKg-unsplash.jpg",
    url: "",
    size: "small",
  },
  {
    title: "Digital Marketing",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-duxeKbu9FDE-unsplash.jpg",
    url: "",
    size: "medium",
  },
  {
    title: "Cloud Solutions",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-5oYbG-sEImY-unsplash.jpg",
    url: "",
    size: "small",
  },
];

interface Services13Props {
  className?: string;
}

const Services13 = ({ className }: Services13Props) => {
  return (
    <section className={cn("py-32 bg-background", className)}>
      <div className="container grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="flex flex-col justify-between lg:col-span-1">
          <div>
            <h2 className="mb-4 text-4xl font-medium text-foreground md:text-6xl tracking-tight leading-tight">
              Featured Services
            </h2>
            <p className="w-full lg:w-72 text-base tracking-tight text-muted-foreground">
              We offer comprehensive digital solutions to help your business
              grow. From web development to mobile apps, we deliver quality
              results that exceed expectations.
            </p>
          </div>
          <Button variant="outline" className="mt-8 w-fit gap-2">
            View all services <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2">
          {/* Web Development - Hero card */}
          <motion.a
            href={services[0].url}
            whileHover={{ opacity: 0.9, scale: 1.02 }}
            className="group col-span-1 block overflow-hidden rounded-xl border border-border sm:col-span-2"
          >
            <Card className="relative aspect-[16/9] overflow-hidden p-0 border-none rounded-none transition-transform duration-500">
              <img
                src={services[0].image}
                alt={services[0].title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />
              <CardContent className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="pr-4 text-3xl font-bold text-white tracking-tight">
                  {services[0].title}
                </div>
              </CardContent>
              <ArrowUpRight className="absolute top-8 right-8 h-8 w-8 text-white transition-all group-hover:scale-125 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Card>
          </motion.a>

          {/* Grid of expert categories */}
          {services.slice(1).map((service, idx) => (
            <motion.a
              key={idx}
              href={service.url}
              whileHover={{ opacity: 0.9, scale: 1.02 }}
              className="group block overflow-hidden rounded-xl border border-border"
            >
              <Card className="relative aspect-[4/5] overflow-hidden p-0 border-none rounded-none">
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
                <CardContent className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="pr-4 text-xl font-semibold text-white tracking-tight leading-tight">
                    {service.title}
                  </div>
                </CardContent>
                <ArrowUpRight className="absolute top-6 right-6 h-6 w-6 text-white transition-all group-hover:scale-125 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Card>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Services13 };
```
