# CTA 3

## Metadata
- **Category**: CTA
- **Objective**: Two-column call to action with additional resource cards.
- **Use Case**: Promotional section with primary CTA and secondary resource links.
- **Visual Style**: Grid layout with main CTA on left and resource cards on right.
- **Interactivity**: Multiple action buttons and clickable resource cards with hover effects.

## Description
A comprehensive call to action component featuring a two-column layout with a primary CTA section on the left and resource cards on the right. Includes multiple action buttons and interactive resource links with hover states.

## Features
- Two-column grid layout (responsive to single column on mobile)
- Primary CTA section with headline and dual buttons
- Resource cards with icons and descriptions
- Interactive cards with hover background effects
- Multiple action buttons (Get Started, Contact Sales)
- Chevron icons for navigation indication
- Professional card styling with shadow effects
- Responsive design with proper breakpoints

## Source Code
```tsx
import { ArrowRight, Book, ChevronRight, File } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Cta3Props {
  className?: string;
}

const Cta3 = ({ className }: Cta3Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="grid grid-cols-1 flex-col gap-10 rounded-lg border p-6 shadow-sm lg:grid-cols-2 lg:px-20 lg:py-16">
          <div>
            <h4 className="mb-2 text-2xl font-bold lg:text-4xl">
              Call To Action
            </h4>
            <p className="text-muted-foreground">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto illo praesentium nisi, accusantium quae.
            </p>
            <div className="mt-8 flex flex-col items-center gap-2 sm:flex-row">
              <Button className="w-full sm:w-auto">
                Get Started
                <ArrowRight className="ml-2 size-4" />
              </Button>
              <Button variant="outline" className="w-full sm:w-auto">
                Contact Sales
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a href="#">
              <Card className="flex flex-row items-center justify-between gap-2 px-6 py-4 shadow-none hover:bg-accent">
                <div className="flex items-start gap-2">
                  <File className="size-4" />
                  <div>
                    <h5 className="mb-2 leading-4 font-medium">
                      Documentation
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor, sit amet consectetur.
                    </p>
                  </div>
                </div>
                <ChevronRight className="size-6" />
              </Card>
            </a>
            <a href="#">
              <Card className="flex flex-row items-center justify-between gap-2 px-6 py-4 shadow-none hover:bg-accent">
                <div className="flex items-start gap-2">
                  <Book className="size-4" />
                  <div>
                    <h5 className="mb-2 leading-4 font-medium">
                      Getting Started
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor, sit amet consectetur.
                    </p>
                  </div>
                </div>
                <ChevronRight className="size-6" />
              </Card>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta3 };
```
