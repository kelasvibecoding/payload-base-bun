# Feature 27

## Metadata
- **Category**: Feature
- **Objective**: Two-column then full-width image showcase with text descriptions below each image.
- **Use Case**: Product feature previews, "how it works" visual overviews, or SaaS UI showcase sections.
- **Visual Style**: "Image Showcase Grid" aesthetic. Centered badge + heading + description intro. Below: `md:grid-cols-2` grid. First two images sit side by side, each with title + description underneath via `px-4 pt-10`. Third image spans `md:col-span-2` full width at `aspect-video max-h-[480px]`, also with title + description below.
- **Interactivity**: Static layout. No animations.

## Source Code

### `feature27.tsx`
```tsx
import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";

interface Feature27Props {
  className?: string;
}

const Feature27 = ({ className }: Feature27Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
          <Badge variant="outline">Overview</Badge>
          <h2 className="mb-2 text-center text-3xl font-semibold lg:text-4xl">
            Built awesome websites with our blocks
          </h2>
          <p className="text-center text-muted-foreground lg:text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
            itaque modi quos hic placeat laudantium inventore reiciendis
            cupiditate, facilis aliquam.
          </p>
        </div>
        <div className="mt-20 grid gap-10 md:grid-cols-2">
          <div>
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
              alt="placholder"
              className="rounded-lg border"
            />
            <div className="px-4 pt-10">
              <h3 className="font-medium">Fully responsive</h3>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                itaque modi quos hic placeat laudantium inventore reiciendis
                cupiditate, facilis aliquam.
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
              alt="placholder"
              className="rounded-lg border"
            />
            <div className="px-4 pt-10">
              <h3 className="font-medium">Beautiful</h3>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                itaque modi quos hic placeat laudantium inventore reiciendis
                cupiditate, facilis aliquam.
              </p>
            </div>
          </div>
          <div className="md:col-span-2">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg "
              alt="placholder"
              className="aspect-video max-h-[480px] w-full rounded-lg border bg-muted"
            />
            <div className="px-4 pt-10">
              <h3 className="font-medium">Fully customizable</h3>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                itaque modi quos hic placeat laudantium inventore reiciendis
                cupiditate, facilis aliquam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature27 };
```
