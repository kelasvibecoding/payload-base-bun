# Feature 93

## Metadata
- **Category**: Feature
- **Objective**: Customer support focused section with a prominent team avatar stack and tri-column pillar grid.
- **Use Case**: Help center homepages, "About Our Support" sections, or trust-building content on sales pages.
- **Visual Style**: "Team-Centric Support" aesthetic. Centered horizontal layout. Top: an overlapping horizontal "trio" of `Avatar` components (`size-16` / `size-24` / `size-16`) to visually anchor the "human" aspect of support. Middle: large `text-5xl` customer care headline. Bottom: `lg:grid-cols-3` grid of support pillars with large centered icons (`MessagesSquare`, `Target`, `Infinity`) and descriptive text.
- **Interactivity**: Static layout.

## Source Code

### `feature93.tsx`
```tsx
import { Infinity as InfinityIcon, MessagesSquare, Target } from "lucide-react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarImage } from "@/components/ui/avatar";

const Feature93 = ({ className }: Feature93Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="text-center">
          <span className="flex items-end justify-center -space-x-4">
            <Avatar className="size-16 border">
              <AvatarImage src="..." />
            </Avatar>
            <Avatar className="size-24 border">
              <AvatarImage src="..." />
            </Avatar>
            <Avatar className="size-16 border">
              <AvatarImage src="..." />
            </Avatar>
          </span>
          <h2 className="mt-12 text-4xl font-bold lg:text-5xl">Outstanding customer care</h2>
          <div className="mt-20 grid justify-center gap-16 lg:grid-cols-3">
            <div className="max-w-md">
              <MessagesSquare className="mx-auto mb-6 size-12" strokeWidth={1.5} />
              <h3 className="mb-4 text-2xl font-medium lg:text-2xl">Dedicated support for your team</h3>
              <p className="text-muted-foreground">...</p>
            </div>
            {/* More pillars... */}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature93 };
```
