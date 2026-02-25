# Hero 30

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a sophisticated marketing introduction using a high-contrast text block paired with an asymmetrical multi-image visual stack and a mesh background.
- **Use Case**: Best for design tools, creative platforms, or SaaS startups that want to emphasize both narrative and visual output.
- **Visual Style**: Dynamic visual stack aesthetic. Features a 2-column grid. The left column contains a centered (mobile) to left-aligned (desktop) typography block. The right column features a complex visual stack: an absolute-positioned mesh background with 3-color gradient (`amber-100`, `red-200`, `teal-100`) and a multi-image layout that hides/shows elements based on screen scale.
- **Interactivity**: Static layout. Employs `vibe-blocks` responsive patterns to stack and hide visual elements for optimal mobile performance.

## Source Code

### `hero30.tsx`
```tsx
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero30Props {
  className?: string;
}

const Hero30 = ({ className }: Hero30Props) => {
  return (
    <section className={cn("relative overflow-hidden py-32", className)}>
      <div className="relative container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-1">
            <h1 className="my-6 text-4xl font-bold text-pretty lg:text-7xl font-sans tracking-tight">
              Welcome to Our Website
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl font-medium leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
              doloremque mollitia fugiat omnis! Porro facilis quo animi
              consequatur. Explicabo.
            </p>
            <div className="flex w-full flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Button className="w-full sm:w-auto font-bold" size="lg">Primary Action</Button>
              <Button variant="outline" className="w-full sm:w-auto font-bold bg-background" size="lg">
                Secondary Action
              </Button>
            </div>
          </div>
          <div className="relative mt-16 -mb-16 flex justify-center gap-4 lg:mt-0 lg:mb-0 lg:justify-end order-1 lg:order-2">
            {/* Mesh background gradient glow */}
            <div className="absolute -inset-8 z-0 rounded-2xl bg-gradient-to-r from-amber-100/60 via-red-200/50 to-teal-100/60 opacity-70 blur-3xl"></div>

            {/* Main Visual Image */}
            <div className="relative z-10 drop-shadow-2xl">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                alt="placeholder hero"
                className="h-[400px] rounded-2xl border border-border object-cover object-center sm:max-w-[320px] shadow-sm"
              />
            </div>
            {/* Secondary Visual Stack (responsive) */}
            <div className="relative z-10 hidden flex-col gap-4 sm:flex md:hidden 2xl:flex">
              <div className="w-[256px] flex-1 overflow-clip rounded-2xl border border-border bg-background shadow-md"></div>
              <div className="aspect-2/1 w-[256px] overflow-clip rounded-2xl border border-border bg-background shadow-md"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero30 };
```
