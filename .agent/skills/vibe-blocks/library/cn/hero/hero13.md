# Hero 13

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a punchy, high-impact introduction with dynamic, viewport-scaled typography for extreme visual presence.
- **Use Case**: Best for disruptive SaaS products or high-growth tech startups that want their core message to dominate the mobile and desktop viewport equally.
- **Visual Style**: High-impact disruptive aesthetic. Features oversized typography that uses viewport units (`7vw`, `2vw`) alongside static tailwind classes (`lg:text-8xl`) for a responsive fluid feel. Includes a wide, informative `Badge` with an embedded notification icon. Uses a 2-button row for "Demo" and "Video" CTAs.
- **Interactivity**: Static layout. Emphasizes visual scale and clear primary/secondary navigation paths.

## Source Code

### `hero13.tsx`
```tsx
import { Bell, PlayCircle } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Hero13Props {
  className?: string;
}

const Hero13 = ({ className }: Hero13Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <Badge
          variant="outline"
          className="mb-4 max-w-full text-sm font-normal lg:mb-10 lg:py-2 lg:pr-5 lg:pl-2"
        >
          <span className="mr-2 flex size-8 shrink-0 items-center justify-center rounded-full bg-accent">
            <Bell className="size-4" />
          </span>
          <p className="truncate whitespace-nowrap">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            eaque distinctio iusto voluptas voluptatum sed!
          </p>
        </Badge>
        <h1 className="mb-6 text-4xl leading-none font-bold tracking-tighter md:text-[7vw] lg:text-8xl font-sans">
          Streamline your workflow experience.
        </h1>
        <p className="max-w-2xl text-muted-foreground md:text-[2vw] lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolor
          assumenda voluptatem nemo magni a maiores aspernatur.
        </p>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row lg:mt-10">
          <Button size="lg" className="w-full md:w-auto">
            Get a demo
          </Button>
          <Button size="lg" variant="outline" className="w-full md:w-auto">
            <PlayCircle className="mr-2 size-4" />
            Watch video
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Hero13 };
```
