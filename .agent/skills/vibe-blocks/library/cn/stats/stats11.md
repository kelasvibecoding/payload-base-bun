# Stats 11

## Metadata
- **Category**: Stats
- **Objective**: Healthcare AI platform performance metrics
- **Use Case**: Medical diagnostic platform showcasing key performance indicators
- **Visual Style**: Advanced layout with gradient background, decorative elements, and grid-based metrics
- **Interactivity**: Static display with sophisticated visual design

## Description
A sophisticated healthcare-focused stats section featuring AI diagnostic platform metrics. Includes a gradient background with decorative linear gradient patterns, circular background element, and four key performance indicators: diagnoses made, diagnostic accuracy, healthcare providers, and latency. Perfect for medical technology and healthcare SaaS applications.

## Source Code
```tsx
import { cn } from "@/lib/utils";

interface Stats11Props {
  className?: string;
}

const Stats11 = ({ className }: Stats11Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="relative isolate overflow-hidden bg-linear-to-b from-primary/10 to-transparent md:border-x md:border-border">
          <div className="absolute right-0 -left-px -z-20 h-full w-full bg-[linear-gradient(90deg,var(--muted-foreground)_1px,transparent_1px)] [mask-image:linear-gradient(transparent_25%,black_25%,black_75%,transparent_75%)] [background-size:calc(100%/16)_100%] [mask-size:100%_16px] opacity-20 [-webkit-mask-image:linear-gradient(transparent_25%,black_25%,black_75%,transparent_75%)] [-webkit-mask-size:100%_16px]" />

          <div>
            <h2 className="mb-16 max-w-3xl text-3xl leading-10 font-semibold sm:mb-24 md:mx-10">
              Revolutionizing healthcare with AI technology.
              <span className="font-medium text-primary/50">
                {" "}
                Our advanced diagnostic platform helps doctors make accurate
                diagnoses in seconds.
              </span>
            </h2>
            <div className="relative grid max-w-2xl gap-4 border-x border-border pb-32 sm:grid-cols-2 sm:gap-10 sm:pb-44 md:ml-10 md:border-0">
              <div className="absolute inset-0 -top-[1100px] -left-[calc(1000px-22vw)] -z-10 size-[1500px] rounded-full border border-primary bg-background sm:-top-[480%] sm:-left-[185%] sm:size-[2000px] md:-top-[906%] md:-left-[294%] md:size-[3500px] lg:-top-[1186%] lg:-left-[380%] lg:size-[4500px] xl:-top-[1200%] xl:-left-[350%] 2xl:-top-[1196%] 2xl:-left-[345%]"></div>
              <div className="flex flex-col gap-2">
                <span className="flex gap-5 text-3xl font-semibold">
                  <span className="relative -left-px w-px bg-primary/50"></span>
                  1,000,000+
                </span>
                <p className="pl-5 font-medium text-muted-foreground/80">
                  Diagnoses Made
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <span className="flex gap-5 text-3xl font-semibold">
                  <span className="relative -left-px w-px bg-primary/50"></span>
                  95%
                </span>
                <p className="pl-5 font-medium text-muted-foreground/80">
                  Diagnostic Accuracy
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <span className="flex gap-5 text-3xl font-semibold">
                  <span className="relative -left-px w-px bg-primary/50"></span>
                  3,000+
                </span>
                <p className="pl-5 font-medium text-muted-foreground/80">
                  Healthcare Providers
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <span className="flex gap-5 text-3xl font-semibold">
                  <span className="relative -left-px w-px bg-primary/50"></span>
                  2.5s
                </span>
                <p className="pl-5 font-medium text-muted-foreground/80">
                  Latency
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Stats11 };
```
