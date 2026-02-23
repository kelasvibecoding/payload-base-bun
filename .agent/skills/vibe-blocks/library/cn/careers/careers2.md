# Careers 2

## Metadata
- **Category**: Careers
- **Objective**: Display job openings in a grid layout with metadata and icons.
- **Use Case**: Careers page, job listings, and recruitment sections requiring detailed job information.
- **Visual Style**: Grid layout with decorative background pattern and icon-enhanced metadata.
- **Interactivity**: Hover effects on apply buttons and interactive job listings.

## Description
A careers component featuring a header section with a badge, title, and description with a link. The main content area displays job listings in a grid layout, with each job showing the title, type, city, location, and an apply button. The component includes icons for each metadata item (Clock, MapPin, Target) and uses a decorative background pattern. The layout is fully responsive with hover effects on apply buttons.

## Source Code
```tsx
import { ArrowRight, Clock, MapPin, Target } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

const jobs = [
  {
    title: "Senior Software Engineer",
    location: "Remote",
    city: "Vancouver, BC",
    type: "Full-time",
    link: "#",
  },
  {
    title: "Product Manager",
    location: "Remote",
    city: "Vienna, Austria",
    type: "Full-time",
    link: "#",
  },
];

interface Careers2Props {
  className?: string;
}

const Careers2 = ({ className }: Careers2Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container px-1">
        <div className="border-x border-dashed">
          <div className="relative flex flex-col gap-6 border-b border-dashed px-4 pt-10 pb-10 sm:items-center md:pb-20">
            <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,hsl(var(--muted))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted))_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_50%_100%_at_50%_50%,transparent_60%,#000_100%)] bg-[size:64px_64px]"></div>
            <Badge variant="outline" className="w-fit">
              Job openings
            </Badge>
            <h1 className="text-2xl font-bold md:text-4xl">Openings at Acme</h1>
            <p className="text-muted-foreground">
              Don't see a role for you?
              <a href="#" className="ml-1 underline">
                Reach out anyways.
              </a>
            </p>
          </div>
          <div>
            {jobs.map((job) => (
              <div
                key={job.title}
                className="grid items-center gap-6 border-b border-dashed px-6 py-10 lg:grid-cols-4"
              >
                <h2 className="text-lg">{job.title}</h2>
                <div className="col-span-2 flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:gap-8 lg:justify-center">
                  <div className="flex gap-2">
                    <Clock className="h-auto w-4" />
                    {job.type}
                  </div>
                  <div className="flex gap-2">
                    <MapPin className="h-auto w-4" />
                    {job.city}
                  </div>
                  <div className="flex gap-2">
                    <Target className="h-auto w-4" />
                    {job.location}
                  </div>
                </div>
                <a
                  href={job.link}
                  className={cn(buttonVariants(), "w-fit gap-1 lg:ml-auto")}
                >
                  Apply
                  <ArrowRight className="h-auto w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Careers2 };
```
