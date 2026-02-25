# Services 20

## Metadata
- **Category**: Services
- **Objective**: Provide a bold, high-contrast service list with unique background textures and industrial aesthetics.
- **Use Case**: Engineering firms, industrial design studios, or structured production houses wanting a "blueprint" or heavy-grid aesthetic.
- **Visual Style**: Massive high-impact typographic headings (md:text-8xl) for service names, decorative "blueprint" line-pattern backgrounds generated via CSS linear-gradients, and icon-supported sub-feature lists using the `Milestone` icon.
- **Interactivity**: Scroll-triggered entry animations (Framer Motion spring transitions) that create a rhythmic reveal as the user descends the page.

## Description
Services 20 is a statement piece for structured agencies. By utilizing a "repeating-linear-gradient" as a textured background for each list item, it creates a tactile, industrial feel that suggests precision and architectural planning. The juxtaposition of huge service titles with detailed sub-option lists makes it highly scannable while establishing a strong visual brand presence.

## Source Code

```tsx
"use client";

import { motion } from "framer-motion";
import { CornerDownLeft, Milestone } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

const services = [
  {
    id: 1,
    title: "Branding",
    options: ["Logo Design", "Brand Identity", "Style Guide", "Color Palette"],
  },
  {
    id: 2,
    title: "Development",
    options: ["Web Apps", "Mobile Apps", "APIs", "Database Design", "DevOps"],
  },
  {
    id: 3,
    title: "Marketing",
    options: ["SEO", "Social Media", "Content Strategy", "Analytics"],
  },
  {
    id: 4,
    title: "Launch",
    options: ["Testing", "Deployment", "Go-Live Support", "Bug Fixes"],
  },
  {
    id: 5,
    title: "Support",
    options: ["24/7 Support", "Maintenance", "Updates", "Training"],
  },
];

interface Services20Props {
  className?: string;
}

const Services20 = ({ className }: Services20Props) => {
  return (
    <section className={cn("py-32 bg-background", className)}>
      <div className="container">
        <div className="flex flex-col justify-between gap-[10vw] lg:flex-row lg:items-center">
          <h2 className="pt-4 tracking-widest text-foreground/30 uppercase font-semibold text-xs md:block">
            Services we provide
          </h2>
          <div className="w-full max-w-3xl px-2">
            <h1 className="text-3xl font-semibold tracking-tighter md:text-5xl lg:text-6xl text-foreground leading-[1.1]">
              Our comprehensive approach to delivering exceptional results
              through a structured methodology
            </h1>
            <Button variant="ghost" className="mt-8 lg:text-base group/btn h-fit p-0 hover:bg-transparent">
              <CornerDownLeft className="size-5 text-orange-500 mr-2 transition-transform group-hover/btn:-translate-x-1" /> 
              <span className="text-foreground">Get in touch</span>
            </Button>
          </div>
        </div>
        <ul className="mt-24 space-y-4">
          {services.map((service, index) => (
            <motion.li
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: index * 0.1,
              }}
              key={service.id}
              className="relative flex h-fit md:h-32 w-full flex-col justify-center gap-6 p-8 md:p-0 lg:flex-row lg:items-center lg:justify-between group"
            >
              <div
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, transparent, transparent 2px, var(--muted) 2px, var(--muted) 4px)",
                }}
                className={cn(
                  "absolute left-1/2 h-full w-screen -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                )}
              ></div>

              <h3 className="relative z-10 text-4xl font-semibold tracking-tighter md:text-8xl text-foreground/50 group-hover:text-foreground transition-colors duration-500">
                {service.title}
              </h3>
              <div className="relative z-10 flex w-full max-w-sm flex-wrap gap-x-6 gap-y-2">
                {service.options.map((option, optionIndex) => (
                  <div
                    key={optionIndex}
                    className="flex items-center justify-center gap-2 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors"
                  >
                    <Milestone className="size-4 text-muted-foreground/50 group-hover:text-orange-500 transition-colors" />{" "}
                    {option}
                  </div>
                ))}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { Services20 };
```
