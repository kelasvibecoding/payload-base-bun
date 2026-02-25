# Services 11

## Metadata
- **Category**: Services
- **Objective**: Provide a visually-dominant, card-based service showcase driven by high-quality imagery.
- **Use Case**: Creative studios, architectural firms, or digital agencies where photography is the primary medium for conveying value and aesthetic.
- **Visual Style**: Asymmetric 3-column container featuring a prominent header/description column and a 2-up grid of vertical image cards (3:4 aspect ratio) with overlaid text.
- **Interactivity**: Fluid Framer Motion hover states (opacity reduction on backgrounds) and scale transitions on the `ArrowUpRight` call-to-action icons.

## Description
Services 11 is built for visual storytelling. By dedicating the majority of the component's real estate to high-impact imagery, it creates an emotional connection before the user even reads the heading. The layout's asymmetry—pairing large vertical typography with portrait cards—gives it an editorial feel that stands out from standard horizontal grids.

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
];

interface Services11Props {
  className?: string;
}

const Services11 = ({ className }: Services11Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="flex flex-col justify-between lg:col-span-1">
          <div>
            <h2 className="mb-4 text-4xl font-medium text-foreground md:text-6xl tracking-tight">
              Our Services
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
          {services.map((service, idx) => (
            <motion.a
              key={idx}
              href={service.url}
              whileHover={{ opacity: 0.9 }}
              className="group block overflow-hidden rounded-xl border border-border"
            >
              <Card className="relative aspect-[3/4] overflow-hidden border-none bg-muted p-0 rounded-none transform transition-transform group-hover:scale-105 duration-500">
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
        </div>
      </div>
    </section>
  );
};

export { Services11 };
```
