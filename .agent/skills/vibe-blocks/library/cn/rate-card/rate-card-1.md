# Rate Card 1

## Metadata
- **Category**: Rate Card
- **Objective**: Display a single, high-ticket pricing package alongside a detailed timeline of value delivery.
- **Use Case**: B2B consulting, creative agencies, or productized service businesses offering a single comprehensive "kitchen sink" monthly retainer.
- **Visual Style**: Asymmetric split layout. The left column uses `lg:sticky` to lock a massive `$3,499 /Month` price tag and red accent SVGs in place. The right column scrolls through a numbered, border-separated list of process steps.
- **Interactivity**: Primarily layout-driven interactivity. The `sticky` positioning on the pricing block ensures the price and terms remain visible while the user reads through the extensive process outline.

## Description
Rate Card 1 abandons the standard "three-tier" pricing model in favor of a single, highly detailed value proposition. It is designed to justify high-ticket consulting or retainer fees by transparently breaking down exactly what happens (e.g., "First Revision - 42 Hours") after the transaction occurs.

## Source Code

```tsx
import { Ticket } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

interface RateCard1Props {
  className?: string;
}

const RateCard1 = ({ className }: RateCard1Props) => {
  const BOOKING_CONDITIONS = [
    "Minimal booking period - 2 months",
    "Schedule a call if you need more clarification",
    "Pause or cancel whenever you wish",
  ];

  const process = [
    {
      step: "01",
      title: "First Revision - 42 Hours",
      description:
        "Initial pricing analysis and market research completed within 42 hours. We deliver comprehensive pricing strategy recommendations based on competitor analysis and market positioning.",
    },
    {
      step: "02",
      title: "Strategy Refinement - 72 Hours",
      description:
        "Detailed pricing model development with tier structures and value propositions. All pricing scenarios are tested and validated against your business objectives and target margins.",
    },
    {
      step: "03",
      title: "Implementation Plan - 5 Days",
      description:
        "Complete pricing implementation roadmap with timeline and resource allocation. We provide step-by-step guidance for rolling out new pricing across all channels and customer segments.",
    },
    {
      step: "04",
      title: "Testing & Optimization - 1 Week",
      description:
        "A/B testing setup and pricing performance monitoring tools implementation. We track key metrics and provide real-time adjustments to maximize revenue and customer satisfaction.",
    },
    {
      step: "05",
      title: "Final Review - 10 Days",
      description:
        "Comprehensive pricing audit with performance analytics and future recommendations. Complete documentation and training materials delivered for your team's ongoing pricing management.",
    },
  ];

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mt-20 flex grid w-full grid-cols-1 flex-col justify-between gap-15 md:gap-10 lg:grid-cols-7">
          <div className="top-1/5 flex h-fit w-full max-w-lg flex-col gap-15 gap-40 lg:sticky lg:col-span-3">
            <div className="relative flex h-fit w-fit justify-between text-5xl font-semibold tracking-tight lg:text-7xl">
              {" "}
              <h1 className="w-fit text-foreground/20">
                Simple <br />
                Pricing
              </h1>
              <Illustration className="absolute top-0 -right-4" />
              <Illustration className="absolute -bottom-2 -left-4 rotate-180" />
            </div>

            <div className="flex w-full flex-col gap-4">
              <h1 className="text-4xl font-medium tracking-tighter lg:text-7xl">
                $3,499{" "}
                <sup className="align-top text-base font-normal tracking-normal text-foreground/50 lg:text-lg">
                  /Month
                </sup>{" "}
              </h1>
              <ul className="my-3 space-y-1">
                {BOOKING_CONDITIONS.map((condition, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 text-lg tracking-tight text-foreground/50"
                  >
                    <span className="size-2 bg-orange-500" />
                    {condition}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ul className="relative col-span-1 w-full lg:col-span-4 lg:pl-22">
            {process.map((step, index) => (
              <li
                key={index}
                className="relative flex flex-col justify-between gap-10 border-b py-8 md:flex-row lg:py-10"
              >
                <div className="flex size-8 items-center justify-center rounded-lg border border-orange-500 tracking-tighter">
                  <Ticket className="storke-1 size-4 text-orange-500" />
                </div>
                <div className="w-fit">
                  <h3 className="mb-4 text-xl font-semibold tracking-tighter lg:text-2xl">
                    {step.title}
                  </h3>
                  <p className="line-clamp-2 text-foreground/50">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export { RateCard1 };

const Illustration = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        x1="0.607422"
        y1="2.57422"
        x2="21.5762"
        y2="2.57422"
        stroke="#FF0000"
        strokeWidth="4"
      />
      <line
        x1="19.5762"
        y1="19.624"
        x2="19.5762"
        y2="4.57422"
        stroke="#FF0000"
        strokeWidth="4"
      />
    </svg>
  );
};
```
