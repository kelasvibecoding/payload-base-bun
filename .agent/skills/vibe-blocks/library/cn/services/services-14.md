# Services 14

## Metadata
- **Category**: Services
- **Objective**: Provide a balanced, split-layout service showcase with a categorized 4-up square grid.
- **Use Case**: Agencies or platforms that want to introduce their philosophy in text before providing a visual menu of core service offerings.
- **Visual Style**: Clean split layout (50/50 vertical division) featuring a large typographic header and a 2x2 grid of square image cards with bottom-weighted labels.
- **Interactivity**: Consistent Framer Motion hover states (opacity reduction) and persistent action icons that provide visual affordance for navigation.

## Description
Services 14 is a modern classic. It balances the persuasive power of a large heading and descriptive body text with the visual clarity of a square grid. By using 1:1 aspect ratio cards, it ensures that categories like "UI/UX Design" or "Web Development" are given equal visual importance. This component is highly effective as the primary "What We Do" section on established agency websites.

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
};

const services: ServiceProps[] = [
  {
    title: "Web Development",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-6jEVl7xPH3E-unsplash.jpg",
    url: "",
  },
  {
    title: "Mobile App Development",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-gDmVqxZt1hg-unsplash.jpg",
    url: "",
  },
  {
    title: "UI/UX Design",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-9__Q24sJqKg-unsplash.jpg",
    url: "",
  },
  {
    title: "Digital Marketing",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-duxeKbu9FDE-unsplash.jpg",
    url: "",
  },
];

interface Services14Props {
  className?: string;
}

const Services14 = ({ className }: Services14Props) => {
  return (
    <section className={cn("py-32 bg-background", className)}>
      <div className="container grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="mb-4 text-4xl font-medium text-foreground md:text-6xl tracking-tight leading-tight">
              Our Services
            </h2>
            <p className="w-full lg:w-80 text-base tracking-tight text-muted-foreground">
              We provide end-to-end digital solutions that transform your
              business. From concept to deployment, we ensure every project
              delivers exceptional results.
            </p>
          </div>
          <Button variant="outline" className="mt-8 w-fit gap-2">
            Explore services <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {services.map((service, idx) => (
            <motion.a
              key={idx}
              href={service.url}
              whileHover={{ opacity: 0.9 }}
              className="group block overflow-hidden rounded-lg border border-border"
            >
              <Card className="relative aspect-square overflow-hidden p-0 border-none rounded-none transition-transform duration-500 group-hover:scale-105">
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                <CardContent className="absolute inset-0 flex flex-col justify-end p-4">
                  <div className="font-semibold text-white tracking-tight">
                    {service.title}
                  </div>
                </CardContent>
                <ArrowUpRight className="absolute top-4 right-4 h-5 w-5 text-white transition-all group-hover:scale-125 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Card>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Services14 };
```
