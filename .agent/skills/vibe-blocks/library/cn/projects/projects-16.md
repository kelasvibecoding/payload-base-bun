# Projects 16

## Metadata
- **Category**: Projects
- **Objective**: Display a minimalist, static photo essay or small curated collection.
- **Use Case**: Photography portfolios, artist showcases, or about-us pages highlighting company culture.
- **Visual Style**: Clean, static, two-column grid. Employs offset image aspect ratios (`aspect-[4/3]` vs `aspect-[4/5]`) within each column to create a subtle, "scrapbook" or editorial flow.
- **Interactivity**: Strictly static. Avoids all hover animations or motion, allowing the imagery itself to take center stage without distraction. 

## Description
Projects 16 is an exercise in restraint. Rather than utilizing complex Javascript animations or interactive grids, it relies entirely on negative space, elegant typography, and carefully chosen aspect ratios to create a compelling narrative. The asymmetrical image sizing mimics premium print editorial layouts.

## Source Code

```tsx
"use client";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

const imgPaths = [
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/vasilis-karkalas-qOaeVSKyhhE-unsplash.jpg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/vasilis-karkalas-LadCWrSL7X8-unsplash.jpg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/vanessa-werder-LjFEoGuj5eY-unsplash.jpg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/vanessa-werder-4G228Duzmn8-unsplash.jpg",
];

interface Projects16Props {
  className?: string;
}

const Projects16 = ({ className }: Projects16Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <h1 className="mb-12 text-xl leading-tight font-medium md:text-3xl">
          Exploring the wonders of nature,
          <br />
          capturing moments of serenity and
          <br />
          beauty from forests to mountains.
        </h1>

        <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-4">
            <img
              src={imgPaths[0]}
              alt="Sunlight streaming through forest trees"
              className="aspect-[4/3] w-full rounded-lg object-cover"
            />
            <img
              src={imgPaths[2]}
              alt="Majestic mountain peak at sunrise"
              className="aspect-[4/5] w-full rounded-lg object-cover"
            />
          </div>

          <div className="space-y-4">
            <img
              src={imgPaths[1]}
              alt="Crystal clear lake surrounded by pines"
              className="aspect-[4/5] w-full rounded-lg object-cover"
            />
            <img
              src={imgPaths[3]}
              alt="Wildflowers blooming in a green meadow"
              className="aspect-[4/3] w-full rounded-lg object-cover"
            />
          </div>
        </div>

        <div className="max-w-md">
          <p className="mb-4 text-muted-foreground">
            Nature's beauty is ever-changing and endlessly inspiring. From the
            gentle rustle of leaves to the grandeur of mountain vistas, each day
            brings a new story to capture and cherish.
          </p>
          <Button variant="link" className="h-auto px-0 text-sm font-medium">
            Discover More →
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Projects16 };
```
