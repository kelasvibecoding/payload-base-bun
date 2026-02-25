# Hero 246

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for analytical subscription and growth platforms, pairing a centered typography block with a high-fidelity "Bar-Chart" visualization and unique "Blueprint-Grid" decorative fragments.
- **Use Case**: Best for SaaS platforms, data-driven tools (e.g., "A Subscription build to fuel your Growth"), or professional analytical services that want to emphasize "Page Views" and "new Block in 10 days."
- **Visual Style**: Cinematic Analytical aesthetic. Features a centered layout Beginning with a prominent merit badge Positioning a high-fidelity `bg-green-500` status dot and "new Block in 10 days" text. The visual anchor is a unique "Growth-Chart Matrix" Positioning 35+ high-fidelity data points Using specialized `BarChart` technical layout anchored by categorical `Page Views` and `date` mapping Utilizing unique `BgPattern` fragments Positioning specialized `linear-gradient` boxes with high-fidelity `size-2` corner markers anchored by categorical `h-[200vh]` vertical dividers. Layout utilizes unique "Action-Strip" Positioning high-fidelity `PlayIcon` and `Button` fragments to drive professional enrollment.
- **Interactivity**: High engagement through data motion. Features specialized chart tooltip transitions and high-fidelity entrance animations for the blueprint patterns to drive professional enrollment.

## Source Code

### `hero246.tsx`
```tsx
"use client";

import React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const bgPattern = {
  backgroundImage:
    "linear-gradient(135deg, var(--primary) 25%, transparent 25.5%, transparent 50%, var(--primary) 50.5%, var(--primary) 75%, transparent 75.5%, transparent)",
  backgroundSize: "10px 10px",
  opacity: 0.1
};

interface Hero246Props {
  className?: string; // Optional custom styling
}

const Hero246 = ({ className }: Hero246Props) => {
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
    <section
      className={cn("relative w-full overflow-hidden py-20 lg:py-40 font-sans border-b", className)}
    >
      <div className="relative z-10 container px-6 max-w-[100rem] flex flex-col items-center justify-center gap-12 group/hero isolate">
         {/* Atmos Depth layer side */}
         <div className="absolute inset-x-0 top-0 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>

        <div className="flex flex-col items-center justify-center text-center group/content relative z-30">
          <div className="flex items-center justify-center gap-4 bg-muted/50 backdrop-blur-xl border border-primary/10 px-8 py-3 rounded-full shadow-2xl transition-all hover:scale-105 group/badge">
            <span className="inline-block size-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.8)]" />
            <span className="font-black uppercase tracking-[0.2em] text-primary">NEW ELITE BLOCK IN 10 DAYS</span>
          </div>
          <h1 className="mt-8 max-w-4xl font-black text-6xl lg:text-[10rem] leading-[0.85] tracking-tighter uppercase italic">
            A Subscription <span className="text-primary not-italic">Build</span> to fuel your Growth elite.
          </h1>
          <p className="mt-12 max-w-xl text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-x-4 border-primary/10 px-12 py-4">
            Professional analytics world-wide for high-status brands. 
            Experience world-class professional craft world-wide.
          </p>
        </div>

        <div className="relative mt-20 flex flex-col sm:flex-row items-center justify-center w-full max-w-4xl border-4 border-primary/10 bg-background/50 backdrop-blur-3xl shadow-2xl overflow-visible">
          <Button size="xl" className="h-fit rounded-none bg-primary px-16 py-8 font-black text-2xl text-primary-foreground shadow-2xl transition-all hover:scale-105 active:scale-95 duration-500 uppercase tracking-widest leading-none flex-1">
            Get Your Now elite
          </Button>
          <Button
            variant="ghost"
            size="xl"
            className="flex h-fit flex-1 items-center justify-center gap-6 rounded-none px-16 py-8 font-black text-2xl text-muted-foreground uppercase tracking-widest group/how"
          >
            <PlayIcon className="size-8 transition-transform group-hover/how:scale-125" />
            How it works elite
          </Button>
          <BgPattern />
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
                <Bar dataKey="views" fill="#2B7FFF" radius={[10, 10, 4, 4]} />
              </BarChart>
            </ChartContainer>
          </div>
        </div>

        <div className="relative h-32 w-full max-w-5xl border-x-4 border-dashed border-primary/10">
          <BgPattern sideLines={false} />
        </div>
      </div>
    </section>
  );
};

export { Hero246 };

const PlayIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="15"
      height="18"
      viewBox="0 0 15 18"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1.11523 3.94458C1.11523 2.36225 2.86573 1.40657 4.19675 2.26222L12.4982 7.59889C13.7229 8.38617 13.7229 10.1763 12.4982 10.9636L4.19675 16.3003C2.86573 17.1559 1.11523 16.2003 1.11523 14.6179V3.94458Z"
      />
    </svg>
  );
};

const BgPattern = ({ sideLines = true }: { sideLines?: boolean }) => {
  return (
    <>
      <div
        className="absolute top-1/2 left-0 z-20 size-24 -translate-x-full -translate-y-1/2 border-y border-l border-primary/20 bg-background/50 backdrop-blur-xl"
        style={bgPattern}
      >
        <span className="absolute -top-1 -right-1 z-20 size-3 bg-primary shadow-[0_0_10px_rgba(var(--primary),0.8)]" />
        <span className="absolute -right-1 -bottom-1 z-20 size-3 bg-primary shadow-[0_0_10px_rgba(var(--primary),0.8)]" />
        <span className="absolute -bottom-1 -left-1 z-20 size-3 bg-primary shadow-[0_0_10px_rgba(var(--primary),0.8)]" />
        <span className="absolute -top-1 -left-1 z-20 size-3 bg-primary shadow-[0_0_10px_rgba(var(--primary),0.8)]" />
      </div>

      <div
        className="absolute top-1/2 right-0 z-20 size-24 translate-x-full -translate-y-1/2 border-y border-r border-primary/20 bg-background/50 backdrop-blur-xl"
        style={bgPattern}
      >
        <span className="absolute -top-1 -right-1 z-20 size-3 bg-primary shadow-[0_0_10px_rgba(var(--primary),0.8)]" />
        <span className="absolute -right-1 -bottom-1 z-20 size-3 bg-primary shadow-[0_0_10px_rgba(var(--primary),0.8)]" />
        <span className="absolute -bottom-1 -left-1 z-20 size-3 bg-primary shadow-[0_0_10px_rgba(var(--primary),0.8)]" />
        <span className="absolute -top-1 -left-1 z-20 size-3 bg-primary shadow-[0_0_10px_rgba(var(--primary),0.8)]" />
      </div>

      {sideLines && (
        <>
          <div className="absolute left-0 z-10 h-[200vh] w-px bg-primary/20 shadow-[0_0_15px_rgba(var(--primary),0.1)]" />
          <div className="absolute -left-20 z-10 h-[200vh] w-px bg-primary/20 shadow-[0_0_15px_rgba(var(--primary),0.1)] opacity-50" />
          <div className="absolute right-0 z-10 h-[200vh] w-px bg-primary/20 shadow-[0_0_15px_rgba(var(--primary),0.1)]" />
          <div className="absolute -right-20 z-10 h-[200vh] w-px bg-primary/20 shadow-[0_0_15px_rgba(var(--primary),0.1)] opacity-50" />
        </>
      )}
    </>
  );
};
```
