# Feature 59

## Metadata
- **Category**: Feature
- **Objective**: Asymmetric grid of four feature cards with varying aspect ratios (wide, tall, square).
- **Use Case**: Content-driven landing pages, platform capability showcases, or editorial-style product features.
- **Visual Style**: "Asymmetric Card Bento" aesthetic. `grid gap-6 lg:grid-cols-2` container. Card 1: full width (`lg:col-span-2`), wide aspect ratio image. Card 2: tall aspect ratio image (`lg:row-span-2`). Cards 3 and 4: standard square/video aspect image cards. All cards use `bg-accent` and `border`.
- **Interactivity**: Static layout.

## Source Code

### `feature59.tsx`
```tsx
import { cn } from "@/lib/utils";

interface Feature59Props {
  className?: string;
}

const Feature59 = ({ className }: Feature59Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container flex flex-col gap-6 lg:px-64">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col rounded-lg border border-border bg-accent p-8 lg:col-span-2">
            <p className="mb-2 text-sm font-semibold md:text-base">
              Feature description
            </p>
            <p className="mb-8 text-sm text-muted-foreground md:text-base">
              Nam vitae molestie arcu. Quisque eu libero orci. Aliquam imperdiet
              magna nec massa consectetur, id interdum ante congue. Nam leo
              elit, convallis luctus tincidunt et, ullamcorper sed justo.
            </p>
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-8-wide.svg"
              alt="placeholder"
              className="rounded-md lg:mt-auto lg:w-full"
            />
          </div>
          <div className="grid-cols-2 gap-x-20 rounded-lg border border-border bg-accent p-6 md:grid md:p-8 lg:row-span-2 lg:flex lg:flex-col">
            <div className="flex flex-col items-start">
              <p className="mb-2 text-sm font-semibold md:text-base">
                Feature description
              </p>
              <p className="mb-8 text-sm text-muted-foreground md:text-base">
                Nam vitae molestie arcu. Quisque eu libero orci.
              </p>
            </div>
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-7-tall.svg"
              alt="placeholder"
              className="rounded-md lg:mt-auto lg:w-full"
            />
          </div>
          <div className="grid-cols-2 gap-x-20 rounded-lg border border-border bg-accent p-6 md:grid md:p-8 lg:flex lg:flex-col">
            <div className="flex flex-col">
              <p className="mb-2 text-sm font-semibold md:text-base">
                Feature description
              </p>
              <p className="mb-8 text-sm text-muted-foreground md:text-base">
                Nam vitae molestie arcu. Quisque eu libero orci.
              </p>
            </div>
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
              alt="placeholder"
              className="rounded-md lg:mt-auto lg:w-full"
            />
          </div>
          <div className="grid-cols-2 gap-x-20 rounded-lg border border-border bg-accent p-6 md:grid md:p-8 lg:flex lg:flex-col">
            <div className="flex flex-col">
              <p className="mb-2 text-sm font-semibold md:text-base">
                Feature description
              </p>
              <p className="mb-8 text-sm text-muted-foreground md:text-base">
                Nam vitae molestie arcu. Quisque eu libero orci.
              </p>
            </div>
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
              alt="placeholder"
              className="rounded-md lg:mt-auto lg:w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature59 };
```
