# Project 1

## Metadata
- **Category**: Project
- **Objective**: Display a team collaboration or company culture project overview with a structured layout and animated entry.
- **Use Case**: About Us pages, project showcases, or culture deep-dives that require a mix of hero imagery and supporting galleries.
- **Visual Style**: Clean, modern image grids combined with a large hero image, accompanied by detailed text and a structured side panel for key project details.
- **Interactivity**: Scroll-triggered fade-in animations using `framer-motion` to reveal content smoothly as the user scrolls.

## Description
Project 1 provides a comprehensive and engaging layout to showcase team efforts, company culture, or a specific collaboration journey. It uses a structured grid and a large hero image to break down complex narratives into easily digestible visual sections.

## Source Code

```tsx
"use client";

import { motion, useInView } from "framer-motion";
import { MoveUpRight } from "lucide-react";
import { useRef } from "react";

import { cn } from "@/lib/utils";

const heroImage =
  "https://images.unsplash.com/photo-1530099486328-e021101a494a?q=80&w=2147&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const gridImages = [
  "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=90",
  "https://images.unsplash.com/photo-1518600506278-4e8ef466b810?auto=format&fit=crop&w=900&q=90",
];

const gridImages2 = [
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1622675363311-3e1904dc1885?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const projectDetails = [
  { label: "Team", value: "Collaboration Crew" },
  { label: "Focus", value: "Seamless Communication" },
  { label: "Year", value: "2025" },
  {
    label: "Key Strengths",
    value: "Cross-functional Skills, Open Communication, Shared Goals",
  },
] as const;

const FadeUpOnScroll = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

interface Project1Props {
  className?: string;
}

const Project1 = ({ className }: Project1Props) => {
  return (
    <section className={cn("lg:py-32", className)}>
      <div className="container space-y-6">
        <FadeUpOnScroll>
          <header className="border-b border-border pb-6 md:pb-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <h1 className="text-xl font-bold text-foreground md:text-2xl lg:text-5xl">
                Team Collaboration
              </h1>
              <p className="max-w-3xl text-base leading-relaxed font-medium text-muted-foreground md:text-lg lg:text-base">
                Discover how effective teamwork and open communication drive
                innovation and success.
              </p>
            </div>
          </header>
        </FadeUpOnScroll>

        <div className="flex justify-end text-base font-medium md:text-lg">
          Explore our collaboration journey{" "}
          <MoveUpRight className="ml-2 h-4 w-5" />
        </div>

        <FadeUpOnScroll delay={0.15}>
          <div className="overflow-hidden rounded-sm border border-border">
            <img
              src={heroImage}
              alt="Team collaborating in a modern workspace, sharing ideas and working together."
              className="aspect-[16/7] w-full object-cover"
            />
          </div>
        </FadeUpOnScroll>

        <FadeUpOnScroll delay={0.25}>
          <div className="flex flex-col items-end justify-end">
            <div className="space-y-6 lg:w-1/2">
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base lg:text-lg">
                Our team thrives on collaboration—whether brainstorming new
                ideas, solving challenges, or celebrating wins. Every member
                brings unique strengths, and together we create solutions that
                are greater than the sum of their parts.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base lg:text-lg">
                Through open dialogue, trust, and a shared vision, we turn
                challenges into opportunities. Our collaborative culture
                empowers everyone to contribute, learn, and grow, making
                teamwork our greatest asset.
              </p>
              <div className="space-y-4">
                {projectDetails.map((detail) => (
                  <div
                    key={detail.label}
                    className="flex flex-col border-b-2 border-border py-3 text-sm sm:flex-row sm:items-center sm:justify-between md:text-base"
                  >
                    <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase md:text-sm">
                      {detail.label}
                    </span>
                    <span className="font-semibold text-foreground">
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeUpOnScroll>

        <div className="grid grid-cols-1 gap-6 md:gap-6">
          {gridImages.map((src, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-sm border border-border"
            >
              <img
                src={src}
                alt={
                  i === 0
                    ? "Team brainstorming with sticky notes, generating creative ideas."
                    : "Three people sitting on a couch with laptops, collaborating in a modern workspace."
                }
                className="aspect-[4/3] w-full object-cover transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-6">
          {gridImages2.map((src, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-sm border border-border"
            >
              <img
                src={src}
                alt={
                  i === 0
                    ? "Group of people in a meeting room with laptops, discussing a project."
                    : "People collaborating at a table with laptops in a modern office."
                }
                className="aspect-[4/3] w-full object-cover transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Project1 };
```
