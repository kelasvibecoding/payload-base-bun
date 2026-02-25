# Feature 90

## Metadata
- **Category**: Feature
- **Objective**: Integration focus section featuring a prominent header and a horizontal "Bubble Stack" of various partner logos.
- **Use Case**: Ecosystem highlights, "Built With" sections, or primary integration directories on landing pages.
- **Visual Style**: "Circular Logo Stack" aesthetic. Centered `text-6xl` bold heading and primary summary with a centered outline button. Key visual: an overlapping horizontal "bubble stack" of 8 circular integration logos (`rounded-full border-2 border-background bg-muted h-28`). Logos are tightly packed with negative space-x (`-space-x-4`).
- **Interactivity**: Includes a bottom anchor link for "120+ integrations available" with a bold underline.

## Source Code

### `feature90.tsx`
```tsx
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Feature90Props {
  className?: string;
}

const Feature90 = ({ className }: Feature90Props) => {
  return (
    <section className={cn("bg-muted/10 py-32", className)}>
      <div className="container">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
          <h2 className="mb-2 text-center text-4xl font-extrabold text-balance lg:text-6xl">
            Seamless connections with all your tools
          </h2>
          <p className="text-center text-lg text-muted-foreground lg:text-xl">
            Easily integrate your platform with the services you rely on...
          </p>
          <Button variant="outline" className="mt-6">View all integrations</Button>
        </div>
        <div className="my-14">
          <div className="flex justify-center -space-x-4 sm:-space-x-5">
            {[1, 2, 3, 4, 5, 1, 2, 3].map((id, i) => (
              <span key={i} className="flex aspect-square h-[13vw] min-h-10 shrink-0 items-center justify-center rounded-full border-2 border-background bg-muted md:h-28">
                <img src={`.../block-${id}.svg`} className="h-auto w-[8vw] max-w-12 md:w-12" />
              </span>
            ))}
          </div>
        </div>
        <div className="text-center text-sm">
          and more than <a href="#" className="ml-1 font-bold underline">120+ integrations available</a>
        </div>
      </div>
    </section>
  );
};

export { Feature90 };
```
