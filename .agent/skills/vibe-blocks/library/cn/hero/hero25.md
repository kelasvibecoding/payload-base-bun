# Hero 25

## Metadata
- **Category**: Hero Section
- **Objective**: Provide an oversized, high-impact introduction for organizational systems that highlights core values through a featured icons list.
- **Use Case**: Best for team management tools, HR platforms, or performance systems that want a striking visual entrance.
- **Visual Style**: Oversized bold aesthetic. Features a centered layout with an extremely large decorative logo used as a graphic separator. Displays a massive headline (`lg:text-7xl`) and oversized buttons (`py-6`). Below the CTAs, a dedicated row of icon-prefixed value points (Zap, Blocks, Wrench) provides immediate functional context.
- **Interactivity**: Static layout. Emphasizes visual scale and utilizes `MoveRight` icons with refined `strokeWidth` for CTAs.

## Source Code

### `hero25.tsx`
```tsx
import { Blocks, MoveRight, Wrench, Zap } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero25Props {
  className?: string;
}

const Hero25 = ({ className }: Hero25Props) => {
  return (
    <section className={cn("py-20 md:py-28 lg:py-36 bg-background/50", className)}>
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center flex flex-col items-center">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-4.svg"
            alt="placeholder"
            className="mx-auto mb-6 w-14 md:mb-8 md:w-20 lg:mb-10 lg:w-24 drop-shadow-sm"
          />
          <span className="mb-2 inline-block text-sm font-black tracking-[0.3em] text-muted-foreground uppercase md:text-base">
            SYSTEMS
          </span>
          <h1 className="mt-4 text-4xl leading-tight font-bold text-balance md:text-5xl lg:text-7xl lg:leading-[1.1] font-sans tracking-tight">
            A system crafted for team success and growth
          </h1>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row w-full max-w-md">
            <Button size="lg" className="px-8 py-7 text-base font-bold flex-1 shadow-lg transition-all hover:scale-[1.02]">
              Get started
              <MoveRight className="ml-2 size-5" strokeWidth={1.5} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-7 text-base font-bold flex-1 bg-background shadow-md transition-all hover:scale-[1.02]"
            >
              Read the docs
              <MoveRight className="ml-2 size-5" strokeWidth={1.5} />
            </Button>
          </div>
          <div className="mt-12 lg:mt-16">
            <ul className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground lg:text-base font-medium">
              <li className="flex items-center gap-3 whitespace-nowrap group">
                <div className="p-2 rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Zap className="size-5 text-primary" />
                </div>
                Quick setup guide
              </li>
              <li className="flex items-center gap-3 whitespace-nowrap group">
                <div className="p-2 rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Blocks className="size-5 text-primary" />
                </div>
                Fully customizable
              </li>
              <li className="flex items-center gap-3 whitespace-nowrap group">
                <div className="p-2 rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Wrench className="size-5 text-primary" />
                </div>
                Easy to use components
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero25 };
```
