# Timeline 13

## Metadata
- **Category**: Timeline
- **Objective**: Display a horizontal timeline with progress indicators and animated progress bar.
- **Use Case**: Product launch journey timeline showing ideation, development, and launch phases with progress percentages.
- **Visual Style**: Horizontal timeline with phase cards, progress bars showing completion percentage, and animated timeline indicator.
- **Interactivity**: Animated timeline indicator that reveals the progress path from left to right (desktop) or top to bottom (mobile).

## Description
A horizontal timeline for product launch journey showing three phases: Ideation (15% complete), Development (85% complete), and Launch (100% complete). Features phase cards with progress bars, completion percentages, and animated timeline indicator that reveals the progress path based on screen size.

## Source Code
```tsx
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface Timeline13Props {
  className?: string;
}

const Timeline13 = ({ className }: Timeline13Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="flex flex-col">
          <h1 className="mb-2 text-3xl font-semibold md:text-5xl">
            Journey to Product Launch
          </h1>
          <p className="max-w-2xl text-muted-foreground">
            Follow the essential steps to bring your innovative idea to market
            and ensure a successful product debut.
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-6 rounded-xl border border-border bg-card p-4 sm:p-8 lg:p-11">
          <div className="contents items-center justify-between sm:flex">
            <h2 className="text-2xl font-semibold tracking-tight">
              Guidance from industry leaders
            </h2>
            <Button className="order-last">Request a demo</Button>
          </div>
          <div className="mt-3 flex gap-4 sm:flex-col">
            <div className="relative">
              <div className="grid h-full w-4 justify-center gap-10 sm:h-4 sm:w-auto sm:grid-cols-3 sm:items-center">
                <div className="absolute inset-0 left-1/2 w-px -translate-x-1/2 bg-ring sm:inset-auto sm:left-auto sm:h-px sm:w-full sm:-translate-x-0" />
                <span className="relative top-3 size-2 rounded-full bg-ring sm:top-0" />
                <span className="relative top-3 size-2 rounded-full bg-ring sm:top-0" />
                <span className="relative top-3 size-2 rounded-full bg-ring sm:top-0" />
              </div>
              <div className="animate-timeline-reveal absolute inset-0 grid h-full w-4 justify-center gap-10 sm:h-4 sm:w-auto sm:grid-cols-3 sm:items-center">
                <div className="absolute inset-0 left-1/2 w-px -translate-x-1/2 bg-primary sm:inset-auto sm:left-auto sm:h-px sm:w-full sm:-translate-x-0" />
                <span className="relative top-3 size-2 rounded-full bg-primary sm:top-0" />
                <span className="relative top-3 size-2 rounded-full bg-primary sm:top-0" />
                <span className="relative top-3 size-2 rounded-full bg-primary sm:top-0" />
              </div>
            </div>
            <div className="grid gap-10 sm:grid-cols-3">
              <div className="flex h-full flex-col justify-between gap-4">
                <div className="flex flex-col">
                  <div className="flex h-8 w-fit items-center gap-px overflow-hidden rounded-md border border-border bg-border text-sm font-medium">
                    <span className="grid h-full place-items-center bg-background px-2">
                      01
                    </span>
                    <span className="grid h-full place-items-center bg-background px-2">
                      Ideation
                    </span>
                  </div>
                  <h3 className="mt-5 font-medium">
                    Brainstorm and validate your concept
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Gather insights from market research, customer interviews,
                    and competitor analysis to refine your product idea.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Progress value={15} className="h-1 flex-1" />
                    <span className="w-8 text-right text-xs text-muted-foreground">
                      15%
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">~2 weeks</p>
                </div>
              </div>
              <div className="flex h-full flex-col justify-between gap-4">
                <div className="flex flex-col">
                  <div className="flex h-8 w-fit items-center gap-px overflow-hidden rounded-md border border-border bg-border text-sm font-medium">
                    <span className="grid h-full place-items-center bg-background px-2">
                      02
                    </span>
                    <span className="grid h-full place-items-center bg-background px-2">
                      Development
                    </span>
                  </div>
                  <h3 className="mt-5 font-medium">Build your MVP</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Design, prototype, and develop the minimum viable product.
                    Iterate quickly based on early feedback and testing.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Progress value={85} className="h-1 flex-1" />
                    <span className="w-8 text-right text-xs text-muted-foreground">
                      85%
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">~6 weeks</p>
                </div>
              </div>
              <div className="flex h-full flex-col justify-between gap-4">
                <div className="flex flex-col">
                  <div className="flex h-8 w-fit items-center gap-px overflow-hidden rounded-md border border-border bg-border text-sm font-medium">
                    <span className="grid h-full place-items-center bg-background px-2">
                      03
                    </span>
                    <span className="grid h-full place-items-center bg-background px-2">
                      Launch
                    </span>
                  </div>
                  <h3 className="mt-5 font-medium">Go to market</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Execute your launch plan with marketing campaigns, outreach,
                    and customer support to maximize impact and adoption.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Progress value={100} className="h-1 flex-1" />
                    <span className="w-8 text-right text-xs text-muted-foreground">
                      100%
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Launch complete
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
        /* Mobile: Top to bottom animation */
        @keyframes timeline-reveal-mobile {
          from {
            clip-path: inset(0 0 100% 0);
          }
          to {
            clip-path: inset(0% 0 0 0);
          }
        }
        
        /* Desktop: Left to right animation */
        @keyframes timeline-reveal-desktop {
          from {
            clip-path: inset(0 100% 0 0);
          }
          to {
            clip-path: inset(0 0% 0 0);
          }
        }
        
        .animate-timeline-reveal {
          animation: timeline-reveal-mobile 5s linear;
        }
        
        @media (min-width: 640px) {
          .animate-timeline-reveal {
            animation: timeline-reveal-desktop 5s linear;
          }
        }
        `}
      </style>
    </section>
  );
};

export { Timeline13 };
```
