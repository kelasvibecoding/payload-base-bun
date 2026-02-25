# Hero 5

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a bold, high-contrast introduction with oversized typography for maximum attention.
- **Use Case**: Best for editorial-style landing pages, fashion brands, or apps that want a striking, opinionated visual presence.
- **Visual Style**: High-impact bold aesthetic. Features extremely large headline typography (`lg:text-7xl`) and medium-scale description text. Uses a 2-column layout with an `aspect-video` image on the right. 
- **Interactivity**: Static layout. Centers on a primary CTA button with a prominent `Download` icon.

## Source Code

### `hero5.tsx`
```tsx
import { Download } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero5Props {
  className?: string;
}

const Hero5 = ({ className }: Hero5Props) => {
  return (
    <section className={cn("overflow-hidden py-32", className)}>
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-20 lg:flex-row">
          <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
            <h1 className="text-4xl font-bold text-pretty lg:max-w-md lg:text-7xl">
              Bold Features demand attention
            </h1>
            <p className="max-w-xl text-xl font-medium lg:text-2xl">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <div className="flex w-full justify-center lg:justify-start">
              <Button className="w-full sm:w-auto" size="lg">
                <Download className="mr-2 size-5" />
                Primary Button
              </Button>
            </div>
          </div>
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-aspect-video-1.svg"
            alt="placeholder hero"
            className="aspect-video rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero5 };
```
