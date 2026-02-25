# Services 19

## Metadata
- **Category**: Services
- **Objective**: Provide an interactive, list-based service showcase with cursor-following previews.
- **Use Case**: Avant-garde design agencies or creative studios looking for a highly interactive "wow factor" that transforms a standard list into a dynamic experience.
- **Visual Style**: Minimalist table-inspired list layout featuring large, tracking-tight typographic headings and a unique floating image preview that follows the user's cursor.
- **Interactivity**: Sophisticated cursor-following motion logic (using Framer Motion springs), dynamic image switching on row hover, and fluid spring-based scaling and opacity transitions.

## Description
Services 19 is an experimental layout that prioritizes user engagement through motion. By delegating the visual imagery to a cursor-following container, it allows the service list itself to remain clean and typographic while still providing rich visual context. The use of "Instrument Serif" for certain typographic accents gives the component a sophisticated, editorial edge. This is a high-impact piece for "About" or "Services" pages transition.

## Source Code

```tsx
"use client";

import { motion, useSpring } from "framer-motion";
import React, { useState } from "react";

import { cn } from "@/lib/utils";

interface Services19Props {
  className?: string;
}

const Services19 = ({ className }: Services19Props) => {
  const SPRING = {
    mass: 0.1,
    stiffness: 100,
    damping: 10,
  };

  const xSpring = useSpring(0, SPRING);
  const ySpring = useSpring(0, SPRING);
  const scaleSpring = useSpring(0, SPRING);
  const opacity = useSpring(0, SPRING);

  const services = [
    {
      title: "Brand Identity",
      categories: ["Logo Design", "Brand Guidelines"],
      subcategories: ["Visual Identity", "Brand Strategy"],
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img1.png",
    },
    {
      title: "UI/UX Design",
      categories: ["User Interface", "User Experience"],
      subcategories: ["Wireframing", "Prototyping"],
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img2.png",
    },
    {
      title: "Web Development",
      categories: ["Frontend", "Backend"],
      subcategories: ["Responsive Design", "API Integration"],
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img3.png",
    },
    {
      title: "Digital Marketing",
      categories: ["SEO Optimization", "Content Strategy"],
      subcategories: ["Social Media", "Analytics"],
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img4.png",
    },
    {
      title: "Graphic Design",
      categories: ["Print Design", "Digital Assets"],
      subcategories: ["Brochures", "Social Graphics"],
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img5.png",
    },
    {
      title: "Consulting",
      categories: ["Strategy Planning", "Business Analysis"],
      subcategories: ["Market Research", "Competitive Analysis"],
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img6.png",
    },
  ];

  const handlePointerMove = (e: React.PointerEvent<HTMLTableElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    xSpring.set(e.clientX - bounds.left + 20);
    ySpring.set(e.clientY - bounds.top + 20);
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className={cn("py-32 bg-background font-sans", className)}>
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-15">
          <h1 className="text-4xl font-medium tracking-tighter lg:text-5xl text-foreground">
            Services we{" "}
            <span className="font-serif italic text-5xl font-normal lg:text-6xl text-foreground">
              offer
            </span>
            <sup className="pl-2 align-top text-sm font-normal tracking-normal text-muted-foreground/60">
              [04]
            sup>
          </h1>
          <div className="relative w-full">
            <table
              onPointerMove={handlePointerMove}
              onPointerEnter={() => {
                opacity.set(1);
                scaleSpring.set(1);
              }}
              onPointerLeave={() => {
                opacity.set(0);
                scaleSpring.set(0);
              }}
              className="w-full"
            >
              <tbody>
                {services.map((service, index) => (
                  <tr
                    key={index}
                    onPointerEnter={() => {
                      setCurrentIndex(index);
                    }}
                    className="group relative cursor-pointer border-b border-border"
                  >
                    <td className="py-8">
                      <h3 className="text-xl font-medium tracking-tight lg:text-3xl text-foreground group-hover:pl-4 transition-all duration-300">
                        {service.title}
                      </h3>
                    </td>
                    <td className="hidden lg:table-cell">
                      <div className="w-full max-w-2xs pr-5 text-center text-sm tracking-tighter text-foreground/30 group-hover:text-foreground lg:text-base transition-colors duration-300">
                        <p>{service.categories[0]}</p>
                        <p>{service.categories[1]}</p>
                      </div>
                    </td>
                    <td className="text-right text-sm tracking-tighter text-foreground/30 group-hover:text-foreground lg:text-base transition-colors duration-300">
                      <div>
                        <p>{service.subcategories[0]}</p>
                        <p>{service.subcategories[1]}</p>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Cursor-following image */}
            <motion.div
              className="pointer-events-none absolute top-0 left-0 hidden size-48 border border-border shadow-2xl sm:block overflow-hidden rounded-xl z-50 bg-muted"
              style={{
                x: xSpring,
                y: ySpring,
                opacity: opacity,
                scale: scaleSpring,
              }}
            >
              <img
                src={services[currentIndex].image}
                alt=""
                className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Services19 };
```
