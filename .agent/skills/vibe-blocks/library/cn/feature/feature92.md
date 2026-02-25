# Feature 92

## Metadata
- **Category**: Feature
- **Objective**: Mixed integration and social connectivity directory with segmented categories.
- **Use Case**: "Connect your tools" landing pages, community hubs, or partnership overviews.
- **Visual Style**: "Connectivity Hub" aesthetic. `bg-muted/50` section. Top: header with bold title and gray subtitle. Middle: `lg:grid-cols-3` row of primary tools (Figma, Tailwind, shadcn/ui) featuring small illustrative icons and descriptions. Bottom: `lg:grid-cols-6` grid of 5 secondary social icons (Discord, Reddit, Twitter, etc.) with text labels for high-density navigation.
- **Interactivity**: Static layout.

## Source Code

### `feature92.tsx`
```tsx
import {
  FaDiscord,
  FaLinkedin,
  FaRedditAlien,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";

import { cn } from "@/lib/utils";

const Feature92 = ({ className }: Feature92Props) => {
  return (
    <section className={cn("border-y bg-muted/50 py-32", className)}>
      <div className="container">
        <div>
          <h2 className="text-3xl font-bold lg:text-4xl">Versatile connections.</h2>
          <p className="text-3xl text-muted-foreground lg:text-4xl">Sync all communications and tasks...</p>
        </div>
        <div className="mt-10 mb-8 grid gap-7 lg:grid-cols-3">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xl font-semibold">
              <img src=".../figma-icon.svg" className="h-5 w-auto" />
              Figma
            </div>
            <p>...</p>
          </div>
          {/* More columns... */}
        </div>
        <ul className="grid grid-cols-2 items-center gap-7 text-muted-foreground md:grid-cols-3 lg:grid-cols-6">
          <li className="flex items-center gap-2 font-medium">
            <FaDiscord className="size-6 shrink-0" />
            Discord
          </li>
          {/* More list items... */}
        </ul>
      </div>
    </section>
  );
};

export { Feature92 };
```
