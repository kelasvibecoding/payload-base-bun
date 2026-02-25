# Hero 36

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a comprehensive marketing introduction that pairs a centered text block with a 3-column grid of detailed service/product feature cards.
- **Use Case**: Best for multi-faceted service companies (Design, Dev, Marketing) who want to categorize their core offerings immediately within the hero section.
- **Visual Style**: Service-driven professional aesthetic. Features a centered layout beginning with a "New Release" `Badge` and a high-impact centered headline. Below the text, a 3-column grid features feature cards housed in `backdrop-blur-sm` semi-transparent containers. The cards use `rounded-xl` and simple icons. The middle card is offset (`md:translate-y-4`) to create a modern staggered grid rhythm.
- **Interactivity**: Dynamic card layout. Features a custom background radial gradient overlay. Cards include "See more" primary-colored links with `ArrowRight` iconography.

## Source Code

### `hero36.tsx`
```tsx
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";

const heroCards = [
  {
    title: "Product Design",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
    description:
      "Maecenas egestas leo nec risus viverra accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
  },
  {
    title: "Development",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg",
    description:
      "Maecenas egestas leo nec risus viverra accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
  },
  {
    title: "Marketing",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg",
    description:
      "Maecenas egestas leo nec risus viverra accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
  },
];

interface Hero36Props {
  className?: string;
}

const Hero36 = ({ className }: Hero36Props) => {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-accent/40 py-24 md:py-32",
        className,
      )}
    >
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-primary-foreground),transparent_50%)]"></div>
      </div>
      <div className="relative container flex flex-col items-center text-center max-w-4xl mx-auto">
        <Badge
          variant="outline"
          className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest border-primary/20 bg-background/50"
        >
          New Release
        </Badge>
        <h1 className="my-6 text-4xl font-bold text-pretty lg:text-7xl font-sans tracking-tight leading-tight">
          Our blocks help global companies expand into new markets
        </h1>
        <p className="max-w-2xl text-muted-foreground lg:text-xl font-medium leading-relaxed">
          Discover how our powerful building blocks can transform your business
          and drive growth with scalable architecture.
        </p>
      </div>
      <div className="container mt-12 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
        {heroCards.map((item, index) => (
          <a
            key={index}
            href="#"
            className={cn(
              "group relative flex flex-col items-center rounded-2xl border bg-background/80 px-8 py-12 text-center backdrop-blur-md shadow-sm transition-all hover:shadow-xl hover:scale-[1.02]",
              index === 1 && "md:translate-y-6",
            )}
          >
            <div className="mb-8 flex aspect-square w-16 items-center justify-center md:w-20 bg-primary/5 rounded-2xl p-4 transition-colors group-hover:bg-primary/10">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-contain filter dark:invert"
              />
            </div>
            <h3 className="mb-4 text-xl font-bold tracking-tight">
              {item.title}
            </h3>
            <p className="mb-auto text-sm text-muted-foreground font-medium leading-relaxed">
              {item.description}
            </p>
            <div className="mt-10 flex items-center text-primary transition-all group-hover:gap-1">
              <span className="font-bold uppercase text-xs tracking-widest leading-none">See more</span>
              <ArrowRight className="ml-2 size-4" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export { Hero36 };
```
