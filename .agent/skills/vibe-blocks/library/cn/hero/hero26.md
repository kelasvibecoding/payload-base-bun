# Hero 26

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a modern collaboration-focused introduction that uses embedded inline iconography to emphasize key software capabilities.
- **Use Case**: Best for project management tools, messaging apps, or collaboration platforms where "Teams," "Collaboration," and "Communication" are the semantic pillars of the product.
- **Visual Style**: Narrative-heavy professional aesthetic. Features a centered layout with a sophisticated "NEW" release badge/link at the top. The description text is unique, incorporating inline `lucide-react` icons (Users, Blocks, MessagesSquare) styled with primary colors and relative positioning to flow naturally within the sentence.
- **Interactivity**: Static layout. Primary and ghost CTAs use `MoveRight` icons. Features a "No credit card required" trust micro-copy.

## Source Code

### `hero26.tsx`
```tsx
import {
  ArrowRight,
  Blocks,
  MessagesSquare,
  MoveRight,
  Users,
} from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Hero26Props {
  className?: string;
}

const Hero26 = ({ className }: Hero26Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="text-center">
          <a
            href="#"
            className="mx-auto mb-3 inline-flex items-center gap-3 rounded-full border px-2 py-1 text-sm bg-background hover:bg-accent transition-colors"
          >
            <Badge className="rounded-full">NEW</Badge>
            <span className="font-medium">Introducing Collaboration 2.0</span>
            <span className="flex size-7 items-center justify-center rounded-full bg-muted">
              <ArrowRight className="w-4" />
            </span>
          </a>
          <h1 className="mx-auto mt-4 mb-3 max-w-3xl text-4xl font-bold text-balance lg:mb-7 lg:text-7xl font-sans tracking-tight">
            Unlock the power of collaboration
          </h1>
          <p className="mx-auto max-w-3xl text-muted-foreground lg:text-xl leading-relaxed">
            Collaboration 2.0 is the ultimate platform for
            <span className="relative top-[5px] mx-2 inline-flex items-center font-bold text-primary md:top-[3px]">
              <Users className="mr-1 w-4 md:w-5" />
              Teams
            </span>
            to
            <span className="relative top-[5px] mx-2 inline-flex items-center font-bold text-primary md:top-[3px]">
              <Blocks className="mr-1 w-5" />
              Collaborate,
            </span>
            <span className="relative top-[5px] mx-2 inline-flex items-center font-bold text-primary md:top-[3px]">
              <MessagesSquare className="mr-1 w-5" />
              Communicate,
            </span>
            and achieve their goals. Get a head start with our free plan. No
            credit card required.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" className="font-bold">
              Get started for free
              <MoveRight className="ml-2" strokeWidth={1} />
            </Button>
            <Button size="lg" variant="ghost" className="font-bold">
              Learn more
              <MoveRight className="ml-2" strokeWidth={1} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero26 };
```
