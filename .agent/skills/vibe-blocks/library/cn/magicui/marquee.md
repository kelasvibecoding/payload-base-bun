# Marquee

## Metadata
- **Category**: Flow / Control
- **Objective**: Provide a highly configurable, CSS-driven looping marquee wrapper for arbitrary child components.
- **Use Case**: Used to animate streams of abstract data; extremely common for user testimonials, dense logo clouds, or high-volume lists that should self-scroll.
- **Visual Style**: Structurally invisible on its own. Operates by mapping an array from a generic `repeat` count and rendering exact duplicates of `children`. By applying flex-direction swaps (`flex-row` or `flex-col`), it dictates the direction of the underlying Tailwind keyframes (`animate-marquee` or `animate-marquee-vertical`).
- **Interactivity**: Pure CSS. Exposes logical flags such as `pauseOnHover` triggering a `[animation-play-state:paused]` class application, and `reverse` applying `[animation-direction:reverse]`. Control variables (`--duration`, `--gap`) are seamlessly exposed to the DOM format.

## Source Code

```tsx
import { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * Optional CSS class name to apply custom styles
   */
  className?: string;
  /**
   * Whether to reverse the animation direction
   * @default false
   */
  reverse?: boolean;
  /**
   * Whether to pause the animation on hover
   * @default false
   */
  pauseOnHover?: boolean;
  /**
   * Content to be displayed in the marquee
   */
  children: React.ReactNode;
  /**
   * Whether to animate vertically instead of horizontally
   * @default false
   */
  vertical?: boolean;
  /**
   * Number of times to repeat the content
   * @default 4
   */
  repeat?: number;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
```
