# Team 13

## Metadata
- **Category**: Team
- **Objective**: Team showcase with carousel for mobile and animated grid for desktop
- **Use Case**: Creative portfolio or agency team page with responsive layout
- **Visual Style**: Staggered image heights with animated reveal effects and decorative header
- **Interactivity**: Animated image reveals using framer-motion, mobile carousel, desktop grid layout

## Description
A responsive team showcase section featuring a mobile carousel and desktop grid layout with animated image reveals. Displays team members with varying image heights and motion animations. Includes a stylized header with decorative brackets and a "BE A PART" call-to-action link. Each member includes a large image, name, and designation. The component adapts between a carousel on mobile and a grid on desktop, with smooth animated transitions for image reveals.

## Source Code
```tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    designation: "CEO & Founder",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img14.png",
    className: "h-105",
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "Design Director",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img4.png",
    className: "h-80",
  },
  {
    id: 3,
    name: "Mike Johnson",
    designation: "Lead Developer",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img5.png",
    className: "h-120",
  },
  {
    id: 4,
    name: "Mike Johnson",
    designation: "Lead Developer",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img12.png",
    className: "h-82",
  },
];

interface Team13Props {
  className?: string;
}

const Team13 = ({ className }: Team13Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="relative w-full">
          <div className="flex justify-between text-sm font-medium tracking-tight lg:text-xl">
            <p>[ MEET THE AWESOME TEAM ]</p>
            <a
              href="#"
              className="group flex cursor-pointer items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              [ BE A PART
              <ArrowRight className="size-[1em] transition-transform duration-300 group-hover:rotate-45" />
              ]
            </a>
          </div>

          {/* Mobile Carousel */}
          <div className="mt-12 lg:hidden">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {teamMembers.map((member) => (
                  <CarouselItem className="basis-1/2" key={member.id}>
                    <div className="w-full">
                      <motion.div
                        initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
                        whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
                        transition={{
                          type: "spring",
                          stiffness: 150,
                          damping: 20,
                        }}
                        className={cn(member.className, "overflow-hidden")}
                      >
                        <img
                          src={member.image}
                          alt={member.name}
                          className="pointer-events-none h-full w-full object-cover object-top"
                        />
                      </motion.div>
                    </div>
                    <div className="pt-4 pb-1">
                      <p className="text-lg font-medium tracking-tight text-foreground">
                        {member.name}
                      </p>
                      <p className="text-sm text-foreground/50">
                        {member.designation}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>

          {/* Desktop Grid Layout */}
          <div className="mt-12 hidden justify-between gap-4 lg:flex">
            {teamMembers.map((member, idx) => (
              <div key={member.id} className={cn("w-1/2")}>
                <motion.div
                  initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
                  animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 20,
                    delay: idx * 0.05,
                  }}
                  className={cn(member.className, "overflow-hidden")}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="pointer-events-none h-full w-full object-cover object-top"
                  />
                </motion.div>
                <div className="pt-4 pb-1">
                  <p className="font-medium tracking-tight text-foreground lg:text-2xl lg:text-lg">
                    {member.name}
                  </p>
                  <p className="text-sm text-foreground/50">
                    {member.designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Team13 };
```
