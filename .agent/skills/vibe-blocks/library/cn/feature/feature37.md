# Feature 37

## Metadata
- **Category**: Feature
- **Objective**: Four-card asymmetric image grid with `md:grid-cols-5` column spanning.
- **Use Case**: Product feature showcases with image previews, blog article highlights, or marketing pages for platform features.
- **Visual Style**: "Asymmetric 5-Column Grid" aesthetic. `md:grid-cols-5` layout. Cards 1 and 4: `md:col-span-2`. Cards 2 and 3: `md:col-span-3`. Each card: `bg-accent` rounded container with `aspect-video max-h-72` top image, followed by a `p-6` section with title and muted description.
- **Interactivity**: Static layout. No animations or hover effects.

## Source Code

### `feature37.tsx`
```tsx
import { cn } from "@/lib/utils";

interface Feature37Props {
  className?: string;
}

const Feature37 = ({ className }: Feature37Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
          <div className="flex flex-col justify-between rounded-lg bg-accent md:col-span-2">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
              alt="placeholder"
              className="aspect-video h-full max-h-72 w-full"
            />
            <div className="p-6">
              <p className="mb-3 text-lg font-semibold">
                Lorem ipsum dolor sit.
              </p>
              <p className="text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
                laboriosam voluptatibus temporibus doloremque laudantium.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-lg bg-accent md:col-span-3">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
              alt="placeholder"
              className="aspect-video h-full max-h-72 w-full"
            />
            <div className="p-6">
              <p className="mb-3 text-lg font-semibold">
                Lorem ipsum dolor sit.
              </p>
              <p className="text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
                laboriosam voluptatibus temporibus doloremque laudantium.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-lg bg-accent md:col-span-3">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
              alt="placeholder"
              className="aspect-video h-full max-h-72 w-full"
            />
            <div className="p-6">
              <p className="mb-3 text-lg font-semibold">
                Lorem ipsum dolor sit.
              </p>
              <p className="text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
                laboriosam voluptatibus temporibus doloremque laudantium.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-lg bg-accent md:col-span-2">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg"
              alt="placeholder"
              className="aspect-video h-full max-h-72 w-full"
            />
            <div className="p-6">
              <p className="mb-3 text-lg font-semibold">
                Lorem ipsum dolor sit.
              </p>
              <p className="text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
                laboriosam voluptatibus temporibus doloremque laudantium.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature37 };
```
