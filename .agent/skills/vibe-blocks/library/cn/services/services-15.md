# Services 15

## Metadata
- **Category**: Services
- **Objective**: Provide a dynamic, masonry-style service showcase with variable-height image cards.
- **Use Case**: Portfolio-driven agencies or creative studios that want a modern "discovery" experience for their diverse offerings.
- **Visual Style**: CSS column-based masonry grid featuring cards of varying heights (tall/medium/short), sophisticated bottom-gradient overlays that trigger on hover, and rotating action icons.
- **Interactivity**: Dynamic Framer Motion animations (Y-axis lift), gradient opacity transitions, and 45-degree rotation on navigation icons to signify interactivity.

## Description
Services 15 is designed for the "Pinterest Generation." By breaking away from rigid grids and using a masonry-style columns layout, it creates a sense of exploration and artistic flair. The variable heights of the service cards naturally guide the eye across the page, making it excellent for brands that want to appear creative, modern, and unconventional.

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
  height: "tall" | "medium" | "short";
};

const services: ServiceProps[] = [
  {
    title: "Web Development",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-6jEVl7xPH3E-unsplash.jpg",
    url: "",
    height: "tall",
  },
  {
    title: "Mobile App Development",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-gDmVqxZt1hg-unsplash.jpg",
    url: "",
    height: "medium",
  },
  {
    title: "UI/UX Design",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-9__Q24sJqKg-unsplash.jpg",
    url: "",
    height: "short",
  },
  {
    title: "Digital Marketing",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-duxeKbu9FDE-unsplash.jpg",
    url: "",
    height: "tall",
  },
  {
    title: "Cloud Solutions",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-5oYbG-sEImY-unsplash.jpg",
    url: "",
    height: "tall",
  },
  {
    title: "Data Analytics",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-h4H-6HQ2zog-unsplash.jpg",
    url: "",
    height: "medium",
  },
];

interface Services15Props {
  className?: string;
}

const Services15 = ({ className }: Services15Props) => {
  const getHeightClass = (height: ServiceProps["height"]) => {
    switch (height) {
      case "tall":
        return "h-96";
      case "medium":
        return "h-72";
      case "short":
        return "h-56";
      default:
        return "h-56";
    }
  };

  return (
    <section className={cn("py-32 bg-background", className)}>
      <div className="container">
        <div className="mb-16 max-w-2xl">
          <h2 className="mb-4 text-4xl font-medium text-foreground md:text-6xl tracking-tight leading-tight">
            Digital Solutions
          </h2>
          <p className="text-base tracking-tight text-muted-foreground">
            Transform your business with our comprehensive digital services. We
            combine creativity with technical expertise to deliver solutions
            that drive growth.
          </p>
        </div>

        {/* Masonry Layout using CSS Columns */}
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          {services.map((service, idx) => (
            <motion.a
              key={idx}
              href={service.url}
              whileHover={{ y: -4 }}
              className="group mb-6 block break-inside-avoid overflow-hidden rounded-xl border border-border"
            >
              <Card
                className={`relative ${getHeightClass(service.height)} overflow-hidden p-0 border-none rounded-none transition-transform duration-500 group-hover:scale-[1.02]`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                {/* Color overlay on hover with sophisticated gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-40 transition-opacity duration-300 group-hover:opacity-100" />
                <CardContent className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="font-semibold text-white tracking-tight text-lg">
                    {service.title}
                  </div>
                </CardContent>
                <ArrowUpRight className="absolute top-6 right-6 h-6 w-6 text-white transition-all duration-300 group-hover:rotate-45" />
              </Card>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="mx-auto gap-2">
            View all services <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Services15 };
```
