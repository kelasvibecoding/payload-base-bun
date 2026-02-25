# Grid Pattern

## Metadata
- **Category**: Background / Pattern
- **Objective**: Generate a scalable, high-performance SVG background grid that can be selectively filled.
- **Use Case**: Used as a prominent visual texture behind hero sections, feature grids, or anywhere a "technical", "blueprint", or "developer-oriented" aesthetic is required.
- **Visual Style**: Renders an infinite SVG pattern composed of repeating `<path>` squares (`fill-gray-400/30 stroke-gray-400/30`). Extremely lightweight. It accepts an optional array of `[x, y]` coordinate pairs which it then maps and injects individual `<rect>` SVG elements to explicitly fill in specific grid quadrants, giving a scattered, dynamic "data" look.
- **Interactivity**: Purely presentational and structural. The SVG sets `pointer-events-none` to ensure it doesn't obstruct click targets below or above it.

## Source Code

```tsx
import { useId } from "react";

import { cn } from "@/lib/utils";

interface GridPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  squares?: Array<[x: number, y: number]>;
  strokeDasharray?: string;
  className?: string;
  [key: string]: unknown;
}

export function GridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = "0",
  squares,
  className,
  ...props
}: GridPatternProps) {
  const id = useId();

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30",
        className,
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width - 1}
              height={height - 1}
              x={x * width + 1}
              y={y * height + 1}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
```
