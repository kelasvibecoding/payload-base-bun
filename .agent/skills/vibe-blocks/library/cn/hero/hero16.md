# Hero 16

## Metadata
- **Category**: Hero Section
- **Objective**: Provide a simple, high-visibility welcome section with a large, centered visual asset featuring an bottom-edge-fade effect.
- **Use Case**: General-purpose welcome pages, marketing homepages, or brand introductions that rely on a single heroic image for impact.
- **Visual Style**: Clean minimal aesthetic. Features a centered headline/subtext block with simple navigation buttons. Below the text, a large `aspect-video` image uses a `mask-image` linear gradient to fade out its bottom 20%, creating a professional "feathered" transition into the following section.
- **Interactivity**: Static layout. Primary and outline buttons for simple navigation paths.

## Source Code

### `hero16.tsx`
```tsx
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero16Props {
  className?: string;
}

const Hero16 = ({ className }: Hero16Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container flex flex-col items-center text-center">
        <h1 className="my-3 text-4xl font-bold text-pretty sm:text-5xl md:my-6 lg:text-6xl font-sans">
          Welcome to Our Website
        </h1>
        <p className="mb-6 max-w-xl text-muted-foreground lg:mb-12 lg:text-2xl font-serif italic">
          Elig doloremque mollitia fugiat omnis! Porro facilis quo animi
          consequatur.
        </p>
        <div className="mb-6 flex gap-3 lg:mb-12">
          <Button size="lg">Primary Action</Button>
          <Button variant="outline" size="lg">Secondary Action</Button>
        </div>
      </div>
      <div className="container">
        <div className="aspect-video relative overflow-hidden rounded-xl border [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)] shadow-2xl">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
            alt="placeholder hero"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero16 };
```
