# Feature 91

## Metadata
- **Category**: Feature
- **Objective**: Side-by-side persona comparison layout (Light vs Dark theme) with detailed capability lists.
- **Use Case**: Positioning product benefits differently for "Managers/Leads" vs "Developers", complex B2B landings, or dual-target marketing pages.
- **Visual Style**: "Persona Split (Bichromatic)" aesthetic. `lg:grid-cols-2` layout split between two large feature cards. Card 1 (Team Leads): light theme, standard border, rounded-left corners. Card 2 (Developers): dark theme (`dark` class applied), `bg-background` / `text-primary`, rounded-right corners. Each card: bold `text-4xl` heading, two primary `ArrowRight` redirect links, and a vertical list of three service points with icons and dashed horizontal dividers (`border-dashed border-primary`).
- **Interactivity**: Static layout. High-impact visual contrast.

## Source Code

### `feature91.tsx`
```tsx
import {
  ArrowRight,
  Atom,
  Box,
  GitGraph,
  Hourglass,
  Layout,
  ShieldCheck,
} from "lucide-react";

import { cn } from "@/lib/utils";

interface Feature91Props {
  className?: string;
}

const Feature91 = ({ className }: Feature91Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto grid max-w-7xl gap-y-6 lg:grid-cols-2">
          {/* Card 1: Team Leads (Light) */}
          <div className="rounded-md border p-6 md:p-10 lg:rounded-l-md lg:rounded-r-none lg:border-y lg:border-r-0 lg:border-l">
            <h2 className="mb-6 text-3xl font-semibold md:text-4xl">Team Leads</h2>
            {/* Links and list... */}
          </div>
          {/* Card 2: Developers (Dark) */}
          <div className="dark rounded-md border bg-background p-6 text-primary md:p-10 lg:rounded-l-none lg:rounded-r-md">
            <h2 className="mb-6 text-3xl font-semibold md:text-4xl">Developers</h2>
            {/* Links and list... */}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature91 };
```
