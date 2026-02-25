# Hero 21

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a conversion-optimized introduction for hardware or physical products that pairs a strong trust-link with an interface preview.
- **Use Case**: Perfect for smart-home companies, IoT startups, or physical product manufacturers who want to highlight a new release and clear paths for getting started or scheduling calls.
- **Visual Style**: Conversion-heavy marketing aesthetic. Features a centered layout with a sophisticated release badge/link at the top. Displays a large text-balanced headline and a dual button row ("Get Started" | "Watch Demo"). Includes a dedicated "Schedule a call" link with a dashed-to-solid underline transition. Incorporates a `rounded-t-lg` image placeholder that sits within a three-sided border container.
- **Interactivity**: Static layout. CTAs use clear iconography (`ChevronRight`, `Play`) and a sophisticated dashed-border hover effect for secondary links.

## Source Code

### `hero21.tsx`
```tsx
import { ChevronRight, Play } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Hero21Props {
  className?: string;
}

const Hero21 = ({ className }: Hero21Props) => {
  return (
    <section className={cn("mb-32 border-b pt-32", className)}>
      <div className="container">
        <div className="relative pb-16">
          <div className="absolute inset-x-0 top-0 -z-10 flex h-full w-full items-center justify-center opacity-100" />
          <a
            href="#"
            className="mx-auto flex w-fit items-center gap-2 rounded-lg bg-muted p-3 sm:rounded-full sm:py-1 sm:pr-3 sm:pl-1 transition-colors hover:bg-accent"
          >
            <Badge className="hidden sm:block">New Release</Badge>
            <p className="flex items-center gap-1 text-sm font-medium">
              Get started with our new product release today
              <ChevronRight className="mt-0.5 size-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
            </p>
          </a>
          <h1 className="mx-auto my-5 max-w-5xl text-center text-3xl font-bold text-balance md:text-5xl font-sans tracking-tight">
            Smart home automation and security system for you
          </h1>
          <p className="mx-auto max-w-3xl text-center text-sm text-muted-foreground md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            possimus fugit ab cumque consequuntur pariatur provident? Nulla
            consequuntur nisi eum!
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Button className="font-semibold">
              Get Started <ChevronRight className="ml-2 size-4" />
            </Button>
            <Button variant="outline" className="font-semibold">
              <Play className="mr-2 size-4 fill-primary" />
              Watch Demo
            </Button>
          </div>
          <div className="mt-5 flex justify-center">
            <a
              href="#"
              className="flex items-center gap-1 border-b border-dashed text-sm font-medium text-muted-foreground transition-all hover:border-solid hover:border-primary hover:text-primary"
            >
              Schedule a call
              <ChevronRight className="size-3.5" />
            </a>
          </div>
        </div>
        <div className="rounded-t-lg border-x border-t px-1 pt-1 bg-border/50">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
            alt="placeholder"
            className="max-h-80 w-full rounded-t-lg object-cover md:max-h-[430px] shadow-sm"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero21 };
```
