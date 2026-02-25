# Projects 13

## Metadata
- **Category**: Projects
- **Objective**: Provide a text-centric index list of projects, de-emphasizing images.
- **Use Case**: Agencies, B2B companies, or architectural firms that want to describe complex case studies via a readable table or list rather than a thumbnail grid.
- **Visual Style**: A minimalist, `ul` based list. Items are separated by thin `border-b` borders. The layout splits cleanly via fractional widths (`w-1/4`, `w-2/4`, `w-1/4`) ensuring perfect vertical alignment of content categories across items.
- **Interactivity**: Static layout. Exists to be read efficiently and navigated linearly without distracting hover effects or pop-ups. 

## Description
Projects 13 completely flips the standard portfolio paradigm. Instead of overwhelming the user with massive imagery, it presents an indexed, highly descriptive list of projects. The imagery is relegated to a small thumbnail on the far right, prioritizing the title, date, and descriptions of the problems solved. This is highly effective for technical agencies or enterprise software shops where the visual element is secondary to the business logic applied.

## Source Code

```tsx
import React from "react";

import { cn } from "@/lib/utils";

interface Projects13Props {
  className?: string;
}

const Projects13 = ({ className }: Projects13Props) => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "Designed and developed a fully scalable e-commerce platform from scratch, focusing on simplicity and performance, which transformed workflows for over 10,000 users across multiple industries.",
      launchDate: "04.17.2025",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img1.png",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description:
        "Built a secure and intuitive mobile banking application with real-time transaction processing, biometric authentication, and seamless user experience for financial institutions.",
      launchDate: "03.15.2025",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img2.png",
    },
    {
      id: 3,
      title: "AI Content Generator",
      description:
        "Developed an AI-powered content generation platform that helps marketers create engaging content, with advanced NLP capabilities and customizable templates.",
      launchDate: "02.28.2025",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img3.png",
    },
    {
      id: 4,
      title: "Project Management Tool",
      description:
        "Created a comprehensive project management solution with real-time collaboration, task tracking, and analytics dashboard for remote teams and enterprises.",
      launchDate: "01.20.2025",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img10.png",
    },
  ];

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <ul className="relative w-full">
          <li className="hidden justify-between gap-10 border-b pt-15 pb-2 text-sm tracking-tight text-foreground/40 uppercase lg:flex lg:text-base">
            <p className="w-1/4">PROJECTS</p>
            <p className="w-2/4">DESCRIPTION</p>
            <p className="w-1/4 text-right">GALLERY</p>
          </li>
          {projects.map((project, index) => (
            <li
              key={project.id}
              className="flex w-full flex-col justify-between gap-10 border-b py-10 lg:flex-row lg:py-15"
            >
              <div className="flex gap-4 text-xl font-medium tracking-tighter uppercase lg:w-1/4">
                <p className="">0{index + 1}</p>
                <div className="flex flex-col gap-1">
                  <p>{project.title}</p>
                  <p>({project.launchDate})</p>
                </div>
              </div>
              <div className="text-2xl lg:w-2/4 lg:text-3xl">
                {project.description}
              </div>
              <div className="w-full text-right text-sm text-foreground/50 uppercase lg:h-30 lg:w-1/4 lg:pl-20 lg:text-base">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { Projects13 };
```
