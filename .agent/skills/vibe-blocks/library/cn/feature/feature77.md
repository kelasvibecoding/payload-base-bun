# Feature 77

## Metadata
- **Category**: Feature
- **Objective**: Two-column feature grid enclosed in a container with decorative primary-colored corner rivets.
- **Use Case**: Mid-page primary benefit showcase, product feature highlights, or service introduction sections.
- **Visual Style**: "Corner-Pin Feature Grid" aesthetic. Centered `text-5xl` heading. Below: large border box with a central `md:divide-x` line. Key visual: four small `size-[12px]` circular pins (`bg-primary`) at each corner of the grid container. Each feature: centered image/illustration, bold `text-2xl` heading, and description.
- **Interactivity**: Static layout. Full-card anchor links.

## Source Code

### `feature77.tsx`
```tsx
import { cn } from "@/lib/utils";

interface Feature77Props {
  className?: string;
}

const Feature77 = ({ className }: Feature77Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container flex flex-col items-center">
        <div className="text-center">
          <h3 className="text-4xl font-semibold text-pretty md:mb-4 lg:mb-6 lg:max-w-3xl lg:text-5xl">
            Key Platform Features
          </h3>
        </div>
      </div>
      <div className="container mt-16">
        <div className="relative">
          <div className="grid border md:grid-cols-2 md:divide-x">
            <a
              href="#"
              className="group relative flex flex-col items-center border-border pt-8 pb-8 text-center transition-all duration-200 md:border-t md:px-8 md:pt-12 md:pb-12 lg:px-12 lg:pt-16 lg:pb-20"
            >
              <div className="absolute top-0 h-px w-full bg-border md:hidden" />
              <div className="mb-8 flex aspect-1/1 w-16 items-center justify-center md:w-[6.25rem] lg:mb-[3.25rem]">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg"
                  alt="Real-time Analytics"
                  className="h-full w-full object-contain object-center"
                />
              </div>
              <h2 className="mb-4 text-2xl font-semibold md:mb-5">
                Real-time Analytics
              </h2>
              <p className="mb-auto text-muted-foreground">
                Track your performance with instant insights. Our powerful
                analytics engine processes data in real-time, providing
                actionable metrics and customizable dashboards for informed
                decision-making.
              </p>
            </a>
            {/* Repeated item... */}
          </div>
          <div className="absolute -top-[5px] -left-[5px]">
            <div className="size-[12px] rounded-full bg-primary"></div>
          </div>
          <div className="absolute -top-[5px] -right-[5px]">
            <div className="size-[12px] rounded-full bg-primary"></div>
          </div>
          <div className="absolute -bottom-[5px] -left-[5px]">
            <div className="size-[12px] rounded-full bg-primary"></div>
          </div>
          <div className="absolute -right-[5px] -bottom-[5px]">
            <div className="size-[12px] rounded-full bg-primary"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature77 };
```
