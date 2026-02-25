# Industries 3

## Metadata
- **Category**: Editorial List
- **Objective**: Display deep project or industry archives using a sophisticated list-based approach with dynamic image reveals.
- **Use Case**: Best for portfolio sites, high-end agency archives, or case study landing pages that prioritize creative minimalism.
- **Visual Style**: Editorial "Index" aesthetic. Clean sans-serif headings, thin dividers, and a heavy utilization of whitespace. Incorporates "glitch" or high-res artistic imagery that is hidden by default and becomes visible as a full-row background on hover.
- **Interactivity**: Pure CSS/Tailwind-driven hover states. When a row is hovered, its `z-index` increases, its opacity-0 background image snaps to opacity-100, and a circular `ArrowUpRight` action button slides into view from the right (`translate-x-0`).

## Source Code

### `industries3.tsx`
```tsx
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface Project {
  year: string;
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  url: string;
}

interface Industries3Props {
  labels: string[];
  projects: Project[];
  className?: string;
}

const Industries3 = ({
  className,
  labels = ["Year", "Industry", "Description"],
  projects = [
    {
      year: "/2024",
      name: "/Consumer Tech",
      description: "Innovative consumer electronics and smart device solutions",
      imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/artistic-portrait-glitch-yqp6z.png",
      imageAlt: "TechFlow automation platform",
      url: "http://shadcnblocks.com/blocks",
    },
    {
      year: "/2023",
      name: "/Biotech",
      description:
        "Cutting-edge biotechnology research and pharmaceutical development",
      imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/alvin-engler-bIhpiQA009k-unsplash.jpg",
      imageAlt: "DataViz Pro analytics dashboard",
      url: "http://shadcnblocks.com/blocks",
    },
    {
      year: "/2023",
      name: "/Cybersecurity",
      description: "Enterprise-grade security solution for data protection",
      imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/futuristic-device-design-qcufu.png",
      imageAlt: "SecureVault security platform",
      url: "http://shadcnblocks.com/blocks",
    },
    {
      year: "/2022",
      name: "/Healthtech",
      description: "Integrated healthcare management system with telemedicine",
      imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/israel-andrade-YI_9SivVt_s-unsplash.jpg",
      imageAlt: "HealthConnect medical platform",
      url: "http://shadcnblocks.com/blocks",
    },
  ],
}: Industries3Props) => {
  return (
    <section className={cn("min-h-screen bg-muted py-16", className)}>
      <div className="container mx-auto flex flex-col gap-8 px-8">
        {/* Header Row */}
        <div className="grid grid-cols-2 gap-8 font-medium text-muted-foreground md:grid-cols-3">
          <div className="order-2 pl-10 text-sm md:order-1 lg:pl-10">
            {labels[0]}
          </div>
          <div className="order-1 pl-5 text-sm md:order-2 md:pl-0">
            {labels[1]}
          </div>
          <div className="hidden text-sm md:order-3 lg:block">{labels[2]}</div>
        </div>

        {/* Project Rows */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <a href={project.url} key={index}>
              <div className="group relative mb-2 flex min-h-[100px] flex-col justify-center md:min-h-0 lg:mb-0">
                <div className="relative z-3 grid grid-cols-2 gap-8 transition-all duration-300 md:grid-cols-3 lg:hover:rounded-lg lg:hover:font-medium lg:hover:text-secondary lg:hover:shadow-lg">
                  {/* Year Column */}
                  <div className="order-2 flex items-center md:order-1">
                    <span className="pl-10 text-xs font-medium text-secondary opacity-100 lg:opacity-0 lg:group-hover:opacity-100">
                      {project.year}
                    </span>
                  </div>

                  {/* Project Name and Description Column */}
                  <div className="order-1 col-span-1 grid grid-cols-2 gap-8 border-b border-muted-foreground/20 p-5 transition-all duration-300 md:order-2 md:col-span-2 md:p-10 md:pr-0 md:pl-0 lg:group-hover:border-transparent">
                    {/* Project Name */}
                    <div className="flex items-center">
                      <span className="ml-0 pl-0 text-xl font-medium text-secondary transition-all duration-300 md:text-2xl lg:text-foreground lg:group-hover:pl-2 lg:group-hover:text-secondary">
                        {project.name}
                      </span>
                    </div>

                    {/* Description and Button */}
                    <div className="hidden items-center justify-between gap-4 lg:flex lg:pr-10">
                      <span className="text-sm text-secondary/80 opacity-100 lg:opacity-0 lg:group-hover:opacity-100">
                        {project.description}
                      </span>

                      {/* Action Button */}
                      <button className="flex translate-x-full items-center justify-center rounded-full bg-primary p-1 text-secondary opacity-100 shadow-md transition-all duration-300 ease-out lg:opacity-0 lg:group-hover:translate-x-0 lg:group-hover:opacity-100">
                        <ArrowUpRight />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Background Image */}
                <img
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  className="absolute inset-0 z-1 h-full w-full object-cover opacity-100 transition-all duration-300 lg:opacity-0 lg:group-hover:opacity-100"
                />

                {/* Overlay */}
                <div className="absolute inset-0 z-2 bg-black/20 opacity-100 transition-all duration-300 lg:opacity-0 lg:group-hover:opacity-100" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Industries3 };
```
