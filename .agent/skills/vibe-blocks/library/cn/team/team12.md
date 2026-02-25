# Team 12

## Metadata
- **Category**: Team
- **Objective**: Stylized team showcase with animated entrance effects
- **Use Case**: Creative agency or design-focused company team page
- **Visual Style**: Staggered layout with offset positioning and animated image reveals
- **Interactivity**: Animated entrance effects using framer-motion

## Description
A stylized team showcase section featuring animated entrance effects and offset positioning. Displays team members in a staggered layout with motion animations. Each member includes a large image, name, and designation. Includes a heading with decorative brackets and a call-to-action link. Perfect for creative agencies and design-focused companies that want a visually striking team presentation.

## Source Code
```tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    designation: "CEO & Founder",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img14.png",
    className: "lg:mt-0",
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "Design Director",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img4.png",
    className: "lg:mt-[5%]",
  },
  {
    id: 3,
    name: "Mike Johnson",
    designation: "Lead Developer",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img12.png",
    className: "lg:mt-[10%]",
  },
];

interface Team12Props {
  className?: string;
}

const Team12 = ({ className }: Team12Props) => {
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
          <div className="mt-10 flex justify-between gap-4 lg:gap-[10vw]">
            {teamMembers.map((member, idx) => (
              <div key={member.id} className={cn(member.className, "w-1/2")}>
                <motion.div
                  initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
                  animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 20,
                    delay: idx * 0.05,
                  }}
                  className={cn(member.className, "h-112 overflow-hidden")}
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

export { Team12 };
```
