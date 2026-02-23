# Experience Component 1

## Metadata
- **Category**: Experience Timeline
- **Objective**: Vertical professional experience timeline for resumes and portfolios
- **Use Case**: Display work history on a personal portfolio website or resume page
- **Visual Style**: Clean, modern vertical layout with proper spacing and separation between entries
- **Interactivity**: Optional download CV button, static timeline with no additional interactivity

## Description
A clean, modern vertical experience timeline component designed for professional resumes and developer portfolios. It displays work history in a structured, easy-to-read format with each entry showing the employment period, job title, job description, and company name. It also includes an optional download CV button at the top of the section.

## Features
- Responsive vertical timeline layout that adapts to mobile and desktop screens
- Structured experience data with clear separation between each role
- Optional download CV button with Lucide download icon
- Clean, minimal styling following shadcn/ui design system
- Type-safe TypeScript interfaces for full type support
- Easily customizable experience data, button text, and styling

## Source Code
```tsx
import { Download } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Experience1Props {
  className?: string;
}

const Experience1 = ({ className }: Experience1Props) => {
  const experience = [
    {
      period: "Sep 2025 - Now",
      title: "Sr. Software Engineer",
      description:
        "Leading development of scalable web applications using React, TypeScript, and Node.js. Mentoring junior developers and implementing best practices.",
      company: "Google",
    },
    {
      period: "Mar 2023 - Aug 2025",
      title: "Full Stack Developer",
      description:
        "Built and maintained multiple client websites and e-commerce platforms. Collaborated with design teams to implement pixel-perfect UI/UX designs.",
      company: "Microsoft",
    },
    {
      period: "Jan 2021 - Feb 2023",
      title: "Frontend Developer",
      description:
        "Developed responsive web applications using modern JavaScript frameworks. Optimized performance and accessibility across multiple projects.",
      company: "Apple",
    },
    {
      period: "Jun 2019 - Dec 2020",
      title: "Junior Developer",
      description:
        "Assisted in building web applications and learning modern development practices. Contributed to team projects and code reviews.",
      company: "Netflix",
    },
  ];

  return (
    <section className={cn("py-32", className)}>
      <div className="container space-y-10 lg:space-y-20">
        <div className="flex w-full items-end justify-between">
          <h1 className="text-5xl font-semibold tracking-tighter lg:text-6xl">
            Experience
          </h1>
          <Button variant="ghost" size="lg" className="font-semibold">
            Download CV <Download className="size-4" />
          </Button>
        </div>

        <ul>
          {experience.map((exp, index) => (
            <li
              key={index}
              className="flex flex-col justify-between border-b py-10 md:flex-row"
            >
              <div className="max-w-lg text-xl font-semibold tracking-tighter lg:w-1/3">
                {exp.period}
              </div>
              <div className="lg:w-1/3">
                <h2 className="mb-4 text-2xl font-semibold tracking-tighter">
                  {exp.title}
                </h2>
                <p className="text-foreground/50">{exp.description}</p>
              </div>
              <div className="text-right lg:w-1/4">{exp.company}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { Experience1 };
```
