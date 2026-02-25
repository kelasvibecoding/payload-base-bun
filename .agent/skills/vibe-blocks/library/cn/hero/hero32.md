# Hero 32

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a comprehensive technology showcase that pairs a left-aligned text block with a large, staggered 3-row mosaic of integration logos.
- **Use Case**: Best for integration hubs, developer toolchains, or SaaS platforms that want to emphasize their connectivity and "Built with X" status.
- **Visual Style**: Integration-heavy professional aesthetic. Features a 2-column layout. The left column is a static background container (`bg-background`) on mobile that becomes transparent on desktop to reveal an underlying background SVG pattern (`square-alt-grid.svg`). The right column features a staggered 3-row mosaic of 88px square integration badges (`size-22`), with the second row offset (`even:translate-x-22`) for a modern dynamic feel.
- **Interactivity**: Primarily static layout. Integration badges use `rounded-xl` and `shadow-xl` for a high-quality tactile appearance.

## Source Code

### `hero32.tsx`
```tsx
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Integration {
  id: string;
  icon: string;
}

interface Hero32Props {
  className?: string;
  heading?: string;
  description?: string;
  button?: {
    text: string;
    url: string;
  };
  integrations?: Integration[][];
}

const Hero32 = ({
  heading = "Blocks Built With Shadcn & Tailwind",
  description = "Fully decomposable components, all the images and background patterns are individual images or svgs that can be replaced.",
  button = {
    text: "Discover all components",
    url: "#",
  },
  integrations = [
    [
      {
        id: "integration-1",
        icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
      },
      {
        id: "integration-2",
        icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg",
      },
      {
        id: "integration-3",
        icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg",
      },
      {
        id: "integration-4",
        icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-4.svg",
      },
      {
        id: "integration-5",
        icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-5.svg",
      },
    ],
    [
      {
        id: "integration-6",
        icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-6.svg",
      },
      {
        id: "integration-7",
        icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
      },
      {
        id: "integration-8",
        icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg",
      },
      {
        id: "integration-9",
        icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg",
      },
      {
        id: "integration-10",
        icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-4.svg",
      },
    ],
    [
      {
        id: "integration-11",
        icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-5.svg",
      },
      {
        id: "integration-12",
        icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-6.svg",
      },
      {
        id: "integration-13",
        icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
      },
      {
        id: "integration-14",
        icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg",
      },
      {
        id: "integration-15",
        icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg",
      },
    ],
  ],
  className,
}: Hero32Props) => {
  return (
    <section className={cn("relative overflow-hidden py-24", className)}>
      <div className="absolute inset-x-0 top-0 flex h-full w-full items-center justify-center opacity-100 -z-10">
        <img
          alt="background"
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/square-alt-grid.svg"
          className="[mask-image:radial-gradient(75%_75%_at_center,white,transparent)] opacity-40"
        />
      </div>
      <div className="relative">
        <div className="relative container flex flex-col items-start md:flex-row md:items-center md:-space-x-24">
          <div className="z-20 w-full shrink-0 bg-background py-16 md:-mx-4 md:w-1/2 md:bg-transparent md:px-4 md:py-32">
            <div className="flex flex-col items-start text-left max-w-lg">
              <h1 className="my-6 text-4xl font-bold text-pretty lg:text-7xl font-sans tracking-tight">
                {heading}
              </h1>
              <p className="text-muted-foreground lg:text-xl font-medium leading-relaxed">{description}</p>
              <Button asChild size="lg" className="mt-10 font-bold px-8 shadow-lg">
                <a href={button.url}>{button.text}</a>
              </Button>
            </div>
          </div>
          <div className="w-full">
            <div className="flex -translate-x-12 flex-col gap-6 pt-12 pb-8 sm:-translate-x-0 md:gap-10 md:py-32">
              {integrations.map((line, i) => (
                <div key={i} className="flex gap-x-6 lg:gap-x-10 even:translate-x-12 lg:even:translate-x-20">
                  {line.map((integration) => (
                    <div
                      key={integration.id}
                      className="size-16 lg:size-24 rounded-2xl border border-background bg-background shadow-2xl p-0.5"
                    >
                      <div className="h-full w-full bg-muted/20 rounded-xl p-3 lg:p-5 flex items-center justify-center">
                        <img
                          alt="Integration"
                          src={integration.icon}
                          className="size-full dark:invert object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero32 };
```
