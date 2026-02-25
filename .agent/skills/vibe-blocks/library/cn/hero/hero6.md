# Hero 6

## Metadata
- **Category**: Hero Section
- **Objective**: Introduce a project with a centered text showcase followed by a multi-part visual grid and partner logos.
- **Use Case**: Comprehensive product landing pages that need to showcase the UI (via the grid) and social proof (via logos) immediately in the hero area.
- **Visual Style**: Professional multi-component aesthetic. Features a centered headline/description followed by an asymmetrical image grid (`md:grid-cols-5`). The grid uses a `bg-border` with `gap-px` to create clean dividing lines. Includes a dedicated logo row at the bottom for brand validation.
- **Interactivity**: Static layout with secondary "Learn more" CTA overlaid on the smaller grid image. 

## Source Code

### `hero6.tsx`
```tsx
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero6Props {
  className?: string;
}

const Hero6 = ({ className }: Hero6Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div className="z-10 flex flex-col items-center gap-8 text-center">
            <div className="max-w-3xl">
              <h1 className="mb-4 text-4xl font-semibold text-pretty lg:text-6xl">
                Build your next project with Blocks
              </h1>
              <p className="text-muted-foreground lg:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
                doloremque mollitia fugiat omnis! Porro facilis quo animi
                consequatur. Explicabo.
              </p>
            </div>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
              <Button>
                Get started now
                <ChevronRight className="h-4" />
              </Button>
              <Button variant="ghost">
                Learn more
                <ChevronRight className="h-4" />
              </Button>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-20 grid max-w-7xl gap-px bg-border p-px md:grid-cols-5">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
            alt="placeholder"
            className="h-full max-h-[500px] w-full object-cover md:col-span-3 dark:invert"
          />
          <div className="relative md:col-span-2">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
              alt="placeholder"
              className="h-full max-h-[500px] w-full object-cover dark:invert"
            />
            <Button variant="outline" className="absolute right-5 bottom-5">
              Learn more
              <ChevronRight className="h-4" />
            </Button>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-7xl grid-cols-2 place-items-center gap-6 md:grid-cols-4">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-wordmark.svg"
            alt="logo"
            className="h-5 sm:h-7 dark:invert"
          />
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nextjs-wordmark.svg"
            alt="logo"
            className="h-9 sm:h-11 dark:invert"
          />
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-wordmark-light.svg"
            alt="logo"
            className="h-4 sm:h-6 dark:hidden"
          />
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-wordmark-dark.svg"
            alt="logo"
            className="hidden h-4 sm:h-6 dark:block"
          />
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-wordmark.svg"
            alt="logo"
            className="h-6 sm:h-7 dark:invert"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero6 };
```
