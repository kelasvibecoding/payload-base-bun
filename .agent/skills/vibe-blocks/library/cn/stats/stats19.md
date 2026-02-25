# Stats 19

## Metadata
- **Category**: Stats
- **Objective**: Milestone achievement statistics with detailed descriptions
- **Use Case**: Professional portfolio showcasing career milestones and impact metrics
- **Visual Style**: Two-column layout with milestone indicator and detailed stat list
- **Interactivity**: Static display with professional formatting

## Description
A professional milestone stats section featuring six key achievement metrics with detailed descriptions. Displays metrics including user reach, startup support, client satisfaction, project completion, industry experience, and availability. Uses a two-column layout with a milestone indicator and comprehensive descriptions for each statistic. Perfect for professional portfolios and career achievement showcases.

## Source Code
```tsx
import React from "react";

import { cn } from "@/lib/utils";

interface Stats19Props {
  className?: string;
}

const Stats19 = ({ className }: Stats19Props) => {
  const stats = [
    {
      number: "80K+",
      description:
        "From 80K+ users reached to 20+ startups supported, these numbers reflect the scale, impact, and consistency of my work.",
    },
    {
      number: "20+",
      description:
        "Startups supported with innovative solutions and strategic guidance to help them scale and succeed in their markets.",
    },
    {
      number: "95%",
      description:
        "Client satisfaction rate achieved through dedicated support, quality deliverables, and long-term partnerships built on trust.",
    },
    {
      number: "150+",
      description:
        "Projects completed across various industries, from web applications to mobile solutions, each tailored to specific business needs.",
    },
    {
      number: "5 Years",
      description:
        "Experience in the industry, continuously learning and adapting to new technologies and market demands to deliver cutting-edge solutions.",
    },
    {
      number: "24/7",
      description:
        "Availability for critical support and maintenance, ensuring your applications run smoothly and any issues are resolved promptly.",
    },
  ];

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-6">
          <div className="top-10 col-span-2 flex h-fit w-fit items-center gap-3 py-8 lg:sticky">
            <span className="size-3 bg-orange-500" />
            <p className="text-2xl text-foreground/30 uppercase">Milestones</p>
          </div>
          <ul className="col-span-4 w-full">
            {stats.map((stat, index) => (
              <li key={index} className="grid grid-cols-5 border-b py-8">
                <h3 className="col-span-2 text-4xl font-medium">
                  {stat.number}
                </h3>
                <p className="col-span-3">{stat.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export { Stats19 };
```
