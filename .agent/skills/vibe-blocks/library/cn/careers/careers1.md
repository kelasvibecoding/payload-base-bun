```
# Careers 1

## Metadata
- **Category**: Careers
- **Objective**: Display job openings organized by department.
- **Use Case**: Careers page, job listings, and recruitment sections.
- **Visual Style**: List layout with department sections and hover effects.
- **Interactivity**: Hover effects on job roles with animated arrows.

## Description
A careers component featuring a title and description, followed by department sections that contain job roles. Each role displays the title, location, and includes a hover effect that reveals an arrow icon. The component uses a clean list layout with dividers between items and is fully responsive.

## Source Code
```tsx
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface Role {
  title: string;
  location: string;
  href: string;
}

interface Department {
  title: string;
  roles: Role[];
  className?: string;
}

interface Careers1Props {
  title?: string;
  description?: string;
  departments?: Department[];
  className?: string;
}

const Careers1 = ({
  title = "Careers",
  description = "View our open roles.",
  departments = [
    {
      title: "Sales",
      roles: [
        {
          title: "Sales Manager",
          location: "London",
          href: "#",
        },
        {
          title: "Sales Development Representative",
          location: "London",
          href: "#",
        },
        {
          title: "Sales Manager",
          location: "London",
          href: "#",
        },
      ],
    },
    {
      title: "Customer Success",
      roles: [
        {
          title: "Customer Success Associate",
          location: "London",
          href: "#",
        },
      ],
    },
  ],
  className,
}: Careers1Props) => {
  return (
    <section className={cn("bg-background py-32", className)}>
      <div className="container">
        <h2 className="text-4xl font-medium md:text-6xl">{title}</h2>
        <p className="mt-6 whitespace-pre-wrap text-muted-foreground md:mb-20 md:text-lg">
          {description}
        </p>
        {departments.map((department) => (
          <div key={department.title} className="mt-12 md:mt-20">
            <h3 className="mb-8 text-3xl font-medium md:text-4xl">
              {department.title}
            </h3>
            <ul className="divide-y divide-border border-y border-border">
              {department.roles.map((role, index) => (
                <li key={index} className="group">
                  <a href={role.href} className="flex items-center py-6">
                    <div>
                      <div className="font-medium md:text-lg">{role.title}</div>
                      <div className="text-xs text-muted-foreground md:mt-2 md:text-sm">
                        {role.location}
                      </div>
                    </div>
                    <ArrowRight className="ml-auto size-6 -translate-x-6 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export { Careers1 };
```
