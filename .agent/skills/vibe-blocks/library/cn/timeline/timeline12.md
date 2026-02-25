# Timeline 12

## Metadata
- **Category**: Timeline
- **Objective**: Display a tabbed timeline with content sections that update when tabs are clicked.
- **Use Case**: Project timeline showing detailed content for each phase in tabbed format.
- **Visual Style**: Tabbed timeline with horizontal tab navigation, content sections with text and image, and animated image transitions.
- **Interactivity**: Tab navigation to switch between phases, animated image transitions when switching tabs.

## Description
A tabbed timeline with horizontal tab navigation and content sections that update when tabs are clicked. Features four phases: Initialize, Build, Test, and Launch, each with detailed text content and animated image. Includes download button in each phase content section.

## Source Code
```tsx
"use client";

import { motion } from "framer-motion";
import { DownloadIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Timeline12Props {
  className?: string;
}

const Timeline12 = ({ className }: Timeline12Props) => {
  const PHASES__DATA = [
    {
      id: "phase1",
      phase: "1",
      title: "Initialize",
      date: "02/03/2025",
      heading: "How to Initialize",
      description:
        "This phase covers the basics of getting started. Learn how to set up, configure, and prepare for the next steps.This phase covers the basics of getting started. Learn how to set up, configure, and prepare for the next steps.",
      imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
      imageAlt: "Phase 1 illustration",
    },
    {
      id: "phase2",
      phase: "2",
      title: "Build",
      date: "21/03/2025",
      heading: "How to Build",
      description:
        "In this phase, focus on structuring and building the core components. Understand best practices for development.In this phase, focus on structuring and building the core components. Understand best practices for development.",
      imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
      imageAlt: "Phase 2 illustration",
    },
    {
      id: "phase3",
      phase: "3",
      title: "Test",
      date: "06/04/2025",
      heading: "How to Test",
      description:
        "Testing ensures quality and reliability. Learn about debugging, fixing issues, and refining the project.Testing ensures quality and reliability. Learn about debugging, fixing issues, and refining the project.",
      imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
      imageAlt: "Phase 3 illustration",
    },
    {
      id: "phase4",
      phase: "4",
      title: "Launch",
      date: "14/04/2025",
      heading: "How to Launch",
      description:
        "The final phase focuses on optimization, deployment, and ensuring everything runs smoothly for release.The final phase focuses on optimization, deployment, and ensuring everything runs smoothly for release.",
      imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
      imageAlt: "Phase 4 illustration",
    },
  ];

  return (
    <section className={cn("bg-background", className)}>
      <div className="container flex flex-col items-center justify-center py-32">
        <h1 className="mb-12 text-5xl font-semibold tracking-tighter lg:mb-25 lg:text-7xl">
          Just Four Phases
        </h1>
        <Tabs defaultValue="phase1" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-transparent p-0">
            {PHASES__DATA.map((phase) => (
              <TabsTrigger
                key={phase.id}
                className="text-md rounded-none border-b-2 pb-6 shadow-none! data-[state=active]:border-b-foreground"
                value={phase.id}
              >
                <span className="hidden font-mono text-foreground/40 md:inline">
                  {phase.phase}
                </span>
                {phase.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {PHASES__DATA.map((phase) => (
            <TabsContent
              key={phase.id}
              value={phase.id}
              className="mt-12 grid items-start gap-12 lg:grid-cols-2"
            >
              <div className="col-span-1 flex flex-col gap-2 lg:max-w-lg lg:gap-4">
                <p className="font-mono text-sm font-semibold tracking-tight text-muted-foreground">
                  {phase.date}
                </p>
                <h2 className="text-3xl font-medium tracking-tighter text-foreground md:text-5xl">
                  {phase.heading}
                </h2>
                <p className="text-lg font-normal tracking-tighter text-muted-foreground">
                  {phase.description}
                </p>
                <Button
                  variant="outline"
                  className="mt-8 flex w-fit items-center gap-2 rounded-full border border-border px-4! py-2"
                >
                  <DownloadIcon className="size-4" />
                  <p className="text-md font-medium text-foreground">
                    Click to{" "}
                    <span className="text-foreground/80">Download the app</span>
                  </p>
                </Button>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 100, y: 0 }}
                transition={{ ease: [0, 0.71, 0.2, 1.01], duration: 0.8 }}
                className="relative z-20 col-span-1"
              >
                <Card className="group h-110 w-full rounded-3xl border border-border bg-background p-2 shadow-none">
                  <CardContent className="size-full rounded-2xl border-2 border-background bg-muted">
                    <img
                      src={phase.imageSrc}
                      className="size-full transition-all ease-in-out group-hover:scale-95"
                      alt={phase.imageAlt}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export { Timeline12 };
```
