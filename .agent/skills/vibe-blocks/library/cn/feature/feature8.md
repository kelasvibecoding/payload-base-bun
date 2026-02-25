# Feature 8

## Metadata
- **Category**: Feature
- **Objective**: Two-column feature card comparison with hover-revealed "Learn more" CTA links.
- **Use Case**: SaaS training or certification platforms, tool comparison sections, or study program highlights.
- **Visual Style**: "Case Study Cards" aesthetic. A centered badge + light heading (`font-light`) header introduces two equal-width `Card` components. Each card shows: a hover-animated "Learn more" link (slides up and fades in on desktop hover), a quote-style paragraph, and a "Built/Styled with" logo footer row.
- **Interactivity**: CSS hover reveal. The CTA link uses `lg:opacity-0 lg:translate-y-2 lg:group-hover:translate-y-0 group-hover:opacity-100` for a smooth reveal effect. Mobile shows an icon-only button instead.

## Source Code

### `feature8.tsx`
```tsx
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Feature8Props {
  className?: string;
}

const Feature8 = ({ className }: Feature8Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container max-w-6xl">
        <div className="flex flex-col items-center gap-4 md:gap-6">
          <Badge variant="outline">Studies</Badge>
          <h1 className="max-w-2xl text-center text-3xl font-light md:text-5xl">
            Welcome to our innovative training platform
          </h1>
        </div>
        <div className="mt-16 flex flex-col justify-between gap-6 md:flex-row lg:mt-20 lg:gap-10">
          <Card className="group p-6">
            <a
              href="#"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "ml-auto hidden w-fit cursor-pointer transition-all duration-200 group-hover:opacity-100 md:flex lg:translate-y-2 lg:opacity-0 lg:group-hover:translate-y-0",
              )}
            >
              Learn more
              <ChevronRight className="ml-1 h-4" />
            </a>
            <div className="mt-6 flex gap-4">
              <p className="text-lg font-light lg:text-2xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta,
                deserunt.
              </p>
              <a
                href="#"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "icon",
                  }),
                  "shrink-0 cursor-pointer md:hidden",
                )}
              >
                <ChevronRight className="h-4" />
              </a>
            </div>
            <div className="mt-10 flex items-center justify-between">
              <p className="text-sm font-light lg:text-base">Built with</p>
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-wordmark.svg"
                alt="shadcn"
                className="h-6 dark:invert"
              />
            </div>
          </Card>
          <Card className="group p-6">
            <a
              href="#"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "ml-auto hidden w-fit cursor-pointer transition-all duration-200 group-hover:opacity-100 md:flex lg:translate-y-2 lg:opacity-0 lg:group-hover:translate-y-0",
              )}
            >
              Learn more
              <ChevronRight className="ml-1 h-4" />
            </a>
            <div className="mt-6 flex gap-4">
              <p className="text-lg font-light lg:text-2xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta,
                deserunt.
              </p>
              <a
                href="#"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "icon",
                  }),
                  "shrink-0 cursor-pointer md:hidden",
                )}
              >
                <ChevronRight className="h-4" />
              </a>
            </div>
            <div className="mt-10 flex items-center justify-between">
              <p className="text-sm font-light lg:text-base">Styled with</p>
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-wordmark-light.svg"
                alt="shadcn"
                className="h-4 dark:hidden"
              />
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-wordmark-dark.svg"
                alt="shadcn"
                className="hidden h-4 dark:block"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export { Feature8 };
```
