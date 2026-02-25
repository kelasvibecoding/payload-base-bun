# Hero 24

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a comprehensive platform introduction that pairs a centered hero message with a 4-column feature highlights grid.
- **Use Case**: Best for developer platforms, cloud providers, or infrastructure services where communicating technical core competencies (infrastructure, scaling, maintenance) is the secondary priority.
- **Visual Style**: Clean professional aesthetic. Features a centered layout beginning with a prominent decorative logo and a tracked-widest "PLATFORM" badge. Below the headline and "Start now" CTA, a distinctive 4-column grid uses `bg-input` with a `gap-px` to create high-contrast divider lines between feature cards.
- **Interactivity**: Static layout. Primary CTA uses `MoveRight` with a custom `strokeWidth={1}` for a refined, modern arrow appearance.

## Source Code

### `hero24.tsx`
```tsx
import { Expand, Globe, MoveRight, Rocket, Wrench } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero24Props {
  className?: string;
}

const Hero24 = ({ className }: Hero24Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="text-center max-w-4xl mx-auto">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
            alt="placeholder"
            className="mx-auto mb-5 w-16 md:mb-6 md:w-24 lg:mb-7 lg:w-28"
          />
          <span className="mb-3 text-sm font-bold tracking-[0.2em] text-muted-foreground md:text-base uppercase">
            PLATFORM
          </span>
          <h1 className="mt-4 text-4xl font-semibold text-balance lg:text-6xl font-sans tracking-tight">
            Develop, launch, and grow your service with our platform
          </h1>
          <Button className="mt-8 font-semibold" size="lg">
            Start now for free
            <MoveRight className="ml-2 transition-transform group-hover:translate-x-1" strokeWidth={1} />
          </Button>
        </div>
        <div className="mt-16 grid gap-px overflow-hidden rounded-xl border bg-muted shadow-lg md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-3 bg-background p-6 md:gap-7 hover:bg-accent/50 transition-colors">
            <div className="p-2 rounded-lg bg-primary/5 w-fit">
              <Globe className="size-6 shrink-0 text-primary" />
            </div>
            <div>
              <h2 className="text-sm font-bold md:text-base">
                Robust Infrastructure
              </h2>
              <p className="text-sm text-muted-foreground md:text-base leading-relaxed">
                Reliable and scalable infrastructure, easy to manage.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 bg-background p-6 md:gap-7 hover:bg-accent/50 transition-colors">
            <div className="p-2 rounded-lg bg-primary/5 w-fit">
              <Rocket className="size-6 shrink-0 text-primary" />
            </div>
            <div>
              <h2 className="text-sm font-bold md:text-base">Easy Setup</h2>
              <p className="text-sm text-muted-foreground md:text-base leading-relaxed">
                Quick and simple configuration for any use case.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 bg-background p-6 md:gap-7 hover:bg-accent/50 transition-colors">
            <div className="p-2 rounded-lg bg-primary/5 w-fit">
              <Expand className="size-6 shrink-0 text-primary" />
            </div>
            <div>
              <h2 className="text-sm font-bold md:text-base">
                Effortless Scaling
              </h2>
              <p className="text-sm text-muted-foreground md:text-base leading-relaxed">
                Built to handle increased demand with ease.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 bg-background p-6 md:gap-7 hover:bg-accent/50 transition-colors">
            <div className="p-2 rounded-lg bg-primary/5 w-fit">
              <Wrench className="size-6 shrink-0 text-primary" />
            </div>
            <div>
              <h2 className="text-sm font-bold md:text-base">
                Low Maintenance
              </h2>
              <p className="text-sm text-muted-foreground md:text-base leading-relaxed">
                Focus on building, not on maintenance tasks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero24 };
```
