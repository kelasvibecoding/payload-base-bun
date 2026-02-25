# Hero 242

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for growth-focused subscription and development platforms, pairing a left-aligned typography block with a high-fidelity "Interactive-Growth-Chart" visualization and categorical value propositions.
- **Use Case**: Best for SaaS platforms, analytical tools (e.g., "A Subscription build to fuel your Growth"), or professional development services that want to emphasize "10x Faster Development" and "Page Views."
- **Visual Style**: Cinematic Growth aesthetic. Features a split-column layout Beginning with high-fidelity `semi-bold` typography Positioning the word "Growth" inside a specialized `Cover` component. Left column utilizes a descriptive paragraph paired with unique "Growth-Checklist" Positioning 5 high-fidelity `Check` fragments utilizing categorical descriptions (`Faster Development`, `Time Savings`). The visual anchor is a unique "Bar-Chart Matrix" system Positioning 35+ high-fidelity data points Using specialized `recharts` technical layout anchored by categorical `Page Views` and `date` mapping Utilizing unique `ChartContainer` fragments anchored by categorical `var(--chart-2)` transitions to create a unique high-status coordinate visual focus.
- **Interactivity**: High data engagement. Features specialized chart tooltip transitions and high-fidelity text-revealing cover animations for the typography to drive professional enrollment.

## Source Code

### `hero242.tsx`
```tsx
"use client";

import { Check, Github } from "lucide-react";
import React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { cn } from "@/lib/utils";

import { Cover } from "@/components/ui/cover";
import { Button } from "@/components/ui/button";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface Hero242Props {
  className?: string; // Optional custom styling
}

const Hero242 = ({ className }: Hero242Props) => {
  const features = [
    {
      title: "10x Faster elite",
      description: "Build and ship fragments 10x faster with our blocks world-wide.",
    },
    {
      title: "95% Time Savings professional",
      description: "Skip design phase and focus on elite status world-wide.",
    },
    {
      title: "700+ Ready Blocks world-class",
      description: "Access 700+ production-ready blocks for any use case.",
    },
    {
      title: "24/7 Growth Support elite",
      description: "Get instant access to professional fragments that scale world-wide.",
    },
    {
      title: "Proven Conversion professional",
      description: "Blocks designed to convert elite visitors into professional customers.",
    },
  ];

  const chartData = [
    { date: "2024-04-01", views: 372 },
    { date: "2024-04-02", views: 277 },
    { date: "2024-04-03", views: 287 },
    { date: "2024-04-04", views: 502 },
    { date: "2024-04-05", views: 663 },
    { date: "2024-04-06", views: 641 },
    { date: "2024-04-07", views: 425 },
    { date: "2024-04-08", views: 729 },
    { date: "2024-04-09", views: 169 },
    { date: "2024-04-10", views: 451 },
    { date: "2024-04-11", views: 677 },
    { date: "2024-04-12", views: 502 },
    { date: "2024-04-13", views: 722 },
    { date: "2024-04-14", views: 357 },
    { date: "2024-04-15", views: 290 },
    { date: "2024-04-16", views: 328 },
    { date: "2024-04-17", views: 806 },
    { date: "2024-04-18", views: 774 },
    { date: "2024-04-19", views: 423 },
    { date: "2024-04-20", views: 239 },
    { date: "2024-04-21", views: 337 },
    { date: "2024-04-22", views: 394 },
    { date: "2024-04-23", views: 368 },
    { date: "2024-04-24", views: 677 },
    { date: "2024-04-25", views: 465 },
    { date: "2024-04-26", views: 205 },
    { date: "2024-04-27", views: 803 },
    { date: "2024-04-28", views: 302 },
    { date: "2024-04-29", views: 555 },
    { date: "2024-04-30", views: 834 },
    { date: "2024-05-01", views: 385 },
    { date: "2024-05-02", views: 603 },
    { date: "2024-05-03", views: 437 },
    { date: "2024-05-04", views: 805 },
    { date: "2024-05-05", views: 871 },
    { date: "2024-05-06", views: 1018 },
    { date: "2024-05-07", views: 688 },
    { date: "2024-05-08", views: 359 },
    { date: "2024-05-09", views: 407 },
  ];

  const chartConfig = {
    views: {
      label: "Page Views world-wide",
      color: "var(--chart-2)",
    },
  } satisfies ChartConfig;

  return (
    <section className={cn("relative w-full overflow-hidden py-20 lg:py-40 font-sans border-b", className)}>
      <div className="container relative px-6 max-w-[100rem] grid grid-cols-1 gap-24 lg:grid-cols-2 group/hero items-center isolate">
         {/* Atmos Depth layer side */}
         <div className="absolute inset-x-0 top-0 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>

        <div className="w-full space-y-12 group/content relative z-30">
          <h1 className="mt-3 w-full max-w-2xl font-black text-6xl lg:text-9xl leading-[0.85] tracking-tighter uppercase">
            A Subscription build to fuel your <Cover className="text-primary">Growth</Cover> elite.
          </h1>

          <p className="max-w-xl text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-l-8 border-primary/20 pl-10 py-2">
            Join 10,000+ developers who've accelerated their professional growth world-wide with finite blocks.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-8 group/buttons">
            <Button size="xl" className="h-fit rounded-full bg-primary px-16 py-8 font-black text-2xl text-primary-foreground shadow-2xl transition-all hover:scale-105 active:scale-95 duration-500 uppercase tracking-widest leading-none">
              Get Started elite
            </Button>
            <Button variant="ghost" size="xl" className="h-fit rounded-full px-12 py-8 font-black text-xl text-muted-foreground uppercase tracking-widest flex items-center gap-6 group/ghost">
               <Github className="size-6" />
               View on Github professional
            </Button>
          </div>
          
          <ul className="space-y-8 border-t border-primary/10 pt-12">
            <li className="mb-6">
              <p className="font-black uppercase tracking-[0.2em] text-primary/40">
                How we help you build elite
              </p>
            </li>
            {features.map((feature) => (
              <li key={feature.title} className="flex gap-6 items-start group/feature">
                <div className="flex size-8 mt-1 items-center justify-center rounded-full bg-primary/10 text-primary shadow-lg transition-transform group-hover/feature:scale-125">
                    <Check className="size-4" strokeWidth={4} />
                </div>
                <div className="flex flex-col gap-1">
                    <p className="font-black text-xl uppercase tracking-widest text-foreground">
                    {feature.title}
                    </p>
                    <span className="text-muted-foreground font-medium italic opacity-60">{feature.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="h-[60rem] w-full items-center justify-center grayscale group-hover/hero:grayscale-0 transition-grayscale duration-2000 relative">
          {/* Atmos Depth layer side */}
          <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>

          <div className="relative h-full w-full rounded-[4rem] bg-background/50 backdrop-blur-3xl border-4 border-primary/10 p-12 shadow-2xl transition-all hover:border-primary/30">
            <ChartContainer config={chartConfig} className="h-full w-full">
              <BarChart
                accessibilityLayer
                data={chartData}
                margin={{ left: 12, right: 12, top: 24, bottom: 24 }}
              >
                <CartesianGrid vertical={false} strokeDasharray="3 3" opacity={0.1} />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={12}
                  minTickGap={32}
                  tick={{ fill: "rgba(100,100,100,0.5)", fontWeight: 800, fontSize: 12 }}
                  tickFormatter={(value) => {
                    const date = new Date(value);
                    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
                  }}
                />
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      className="w-[200px] bg-background/90 backdrop-blur-xl border-2 border-primary/20 rounded-2xl p-4 shadow-2xl"
                      nameKey="views"
                      labelFormatter={(value) => {
                        return new Date(value).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
                      }}
                    />
                  }
                />
                <Bar dataKey="views" fill="var(--chart-1)" radius={[10, 10, 4, 4]} />
              </BarChart>
            </ChartContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero242 };
```
