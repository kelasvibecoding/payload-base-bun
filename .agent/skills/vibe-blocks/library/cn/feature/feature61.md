# Feature 61

## Metadata
- **Category**: Feature
- **Objective**: Standard horizontal split section with an image on the right and text on the left.
- **Use Case**: Alternating feature sections to maintain visual interest, team member highlights, or product detail sections.
- **Visual Style**: "Classic Right-Image Split" aesthetic. `flex-row-reverse lg:flex` container. Right side: `lg:w-1/2` with an `aspect-4/3` rounded and bordered image. Left side: `lg:w-1/2` flex container with vertical centering and `lg:pr-24` padding.
- **Interactivity**: Static layout.

## Source Code

### `feature61.tsx`
```tsx
import { cn } from "@/lib/utils";

interface Feature61Props {
  className?: string;
}

const Feature61 = ({ className }: Feature61Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="flex-row-reverse lg:flex">
          <div className="lg:w-1/2">
            <div className="mb-6 md:mb-8 lg:mb-0">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                alt="placeholder hero"
                className="aspect-4/3 w-full rounded-md border border-border object-cover"
              />
            </div>
          </div>
          <div className="lg:flex lg:w-1/2 lg:items-center lg:pr-24 2xl:pr-32">
            <div>
              <h3 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                Feature name
              </h3>
              <p className="text-muted-foreground lg:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
                doloremque mollitia fugiat omnis! Porro facilis quo animi
                consequatur. Explicabo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature61 };
```
