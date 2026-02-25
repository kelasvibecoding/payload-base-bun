# Hero 50

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a trust-heavy marketing introduction centered on community value, pairing a centered text block with a multi-layered image stack.
- **Use Case**: Best for community management platforms, social hubs, or corporate collaboration tools that want to highlight user engagement and data centralization.
- **Visual Style**: Trust-driven professional aesthetic. Features a centered layout beginning with a sophisticated community-survey `Badge`/Link (`rounded-full border`). Below the text content, a layered visual stack features a primary large image placeholder backed by a `bg-linear-to-b` gradient and flanked by two smaller absolute-positioned image cards (`placeholder-dark-2.svg` and `placeholder-dark-3.svg`) that add visual complexity on desktop screens.
- **Interactivity**: Engagement micro-copy. The top badge/link uses a `group-hover:underline` on "Take a tour" to encourage exploratory clicks.

## Source Code

### `hero50.tsx`
```tsx
import { Minus } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero50Props {
  className?: string;
}

const Hero50 = ({ className }: Hero50Props) => {
  return (
    <section className={cn("py-20 lg:py-32 font-sans", className)}>
      <div className="container flex flex-col gap-10 text-center items-center">
        {/* Engagement CTA Pill */}
        <a
          href="#"
          className="group mx-auto mb-3 w-fit gap-3 rounded-full border border-primary/20 bg-primary/5 px-6 py-2.5 text-sm transition-colors hover:bg-primary/10"
        >
          <span className="mr-1 font-bold">
            Join our Community Collaboration Survey!
          </span>
          <span className="text-muted-foreground">We’ll donate $20 for each response.</span>
          <Minus className="mx-2 inline-block w-4 text-muted-foreground" />
          <span className="font-black text-primary group-hover:underline underline-offset-4">
            Take a tour
          </span>
        </a>
        <h1 className="mx-auto max-w-4xl text-4xl font-black text-pretty lg:text-7xl tracking-tighter leading-tight text-balance">
          Community & business data, centralized
        </h1>
        <p className="mx-auto max-w-3xl text-muted-foreground lg:text-xl font-medium leading-relaxed">
          Showcase the value of your community to the business. Talkbase sets
          the stage for successful cross-collaboration among community teams
          working with customer, marketing, sales, and product development.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row w-full max-w-sm sm:max-w-none">
          <Button size="lg" className="font-bold px-8 shadow-xl">Get started for free</Button>
          <Button size="lg" variant="outline" className="font-bold bg-background px-8">
            Book a demo
          </Button>
        </div>
      </div>
      
      {/* Multi-layered Visual Section */}
      <div className="relative px-8 mt-20">
        <div className="absolute inset-0 top-1/2 h-full w-full bg-gradient-to-b from-muted/50 to-transparent to-50% -z-10"></div>
        <div className="relative mx-auto max-w-5xl group">
          {/* Main Visual Anchor */}
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
            alt="main interface preview"
            className="w-full rounded-2xl object-cover shadow-2xl border border-border/50 transition-transform group-hover:scale-[1.01] duration-700"
          />
          
          {/* Secondary Floating Elements (Desktop only) */}
          <div className="absolute top-1/2 -left-3 hidden max-h-56 -translate-y-1/2 rounded-2xl border border-border/50 bg-background/80 backdrop-blur-md object-cover shadow-2xl md:block xl:-left-20 overflow-hidden aspect-video w-64 transition-transform hover:-translate-x-4 duration-500">
             <img src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg" alt="secondary preview" className="size-full object-cover" />
          </div>
          
          <div className="absolute top-1/4 -right-3 hidden h-32 w-32 -translate-y-1/2 rounded-2xl border border-border/50 bg-background/80 backdrop-blur-md shadow-2xl md:block xl:-right-10 flex items-center justify-center p-4 transition-transform hover:translate-x-4 duration-500">
             <img src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-3.svg" alt="icon preview" className="size-16 object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero50 };
```
