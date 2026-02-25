# Services 12

## Metadata
- **Category**: Services
- **Objective**: Provide a hierarchical bento-style service showcase with tiered visual weight.
- **Use Case**: Agencies or product platforms that need to prioritize signature services (Featured) while quickly listing supplementary areas of expertise (Secondary).
- **Visual Style**: Complex bento grid arrangement with two 3:4 aspect ratio "Hero" cards followed by a full-width row of three 4:3 "Support" cards, all utilizing high-impact overlay typography.
- **Interactivity**: Consistent Framer Motion hover transitions (opacity modulation) and scale-responsive call-to-action indicators across different card sizes.

## Description
Services 12 is an advanced layout designed for comprehensive service ecosystems. It leverages the "bento box" pattern to create a clear visual hierarchy. By giving primary services more vertical space and secondary services a horizontal row, it allows for a diverse number of offerings to be displayed on a single screen without sacrificing visual impact. It's the ideal choice for "Full Service" agencies.

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
  {
    title: "Cloud Solutions",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-5oYbG-sEImY-unsplash.jpg",
    url: "",
  },
];

interface Services12Props {
  className?: string;
}

const Services12 = ({ className }: Services12Props) => {
  return (
    <section className={cn("py-32", className)}>
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
          {/* Featured Services - First 2 */}
          {services.slice(0, 2).map((service, idx) => (
            <motion.a
              key={idx}
              href={service.url}
              whileHover={{ opacity: 0.9 }}
              className="group block overflow-hidden rounded-xl border border-border"
            >
              <Card className="relative aspect-[3/4] overflow-hidden p-0 border-none rounded-none transition-transform duration-500 group-hover:scale-105">
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                <CardContent className="absolute inset-0 flex flex-col justify-start p-6">
                  <div className="pr-4 font-semibold text-white text-xl">
                    {service.title}
                  </div>
                </CardContent>
                <ArrowUpRight className="absolute top-6 right-6 h-6 w-6 text-white transition-all group-hover:scale-125 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Card>
            </motion.a>
          ))}

          {/* Secondary Services - Remaining 3 */}
          <div className="col-span-full grid grid-cols-1 gap-4 sm:grid-cols-3">
            {services.slice(2).map((service, idx) => (
              <motion.a
                key={idx + 2}
                href={service.url}
                whileHover={{ opacity: 0.9 }}
                className="group block overflow-hidden rounded-xl border border-border"
              >
                <Card className="relative aspect-[4/3] overflow-hidden p-0 border-none rounded-none">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />
                  <CardContent className="absolute inset-0 flex flex-col justify-start p-4">
                    <div className="pr-4 text-sm font-semibold text-white">
                      {service.title}
                    </div>
                  </CardContent>
                  <ArrowUpRight className="absolute top-4 right-4 h-5 w-5 text-white transition-all group-hover:scale-125 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Card>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Services12 };
```
