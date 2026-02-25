# Hero 55

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a high-contrast marketing introduction with a very large scale headline and a prominent "Release" announcement badge.
- **Use Case**: Best for design products, creative tools, or platforms that want to announce a major new integration (e.g., "Slack integration is here") and provide immediate "Get started" value.
- **Visual Style**: High-scale minimal aesthetic. Features a centered layout beginning with a sophisticated transition-hover `Badge`/Link (`rounded-full px-2 py-1`). The headline uses extremely oversized numeric typography (`lg:text-8xl`). The background is a specialized "shadow overlay" image (`shadow-overlay.png`) that adds a subtle vignette/depth effect to the centered content.
- **Interactivity**: High interactive hover on announcement. The top badge/link uses a `hover:bg-muted` transition and features a `ArrowRight` icon to drive click-through for new features.

## Source Code

### `hero55.tsx`
```tsx
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Hero55Props {
  className?: string;
}

const Hero55 = ({ className }: Hero55Props) => {
  return (
    <section className={cn("relative py-20 lg:py-40 font-sans overflow-hidden", className)}>
      <div className="container relative z-10 px-4">
        <div className="flex flex-col items-center gap-12 text-center">
          {/* Announcement Pill */}
          <a
            href="#"
            className="flex items-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-bold tracking-tight transition-all hover:bg-primary/10 hover:border-primary/40 group shadow-sm"
          >
            <Badge className="rounded-full shadow-none px-3 font-black bg-primary">NEW</Badge>
            <span className="text-foreground">Slack integration is here!</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          
          <h1 className="max-w-5xl text-5xl font-black lg:text-9xl tracking-tighter leading-[0.9] text-pretty">
            Manage design work right from the canvas
          </h1>
          
          <div className="flex w-full flex-col justify-center gap-3 sm:flex-row mt-4">
            <Button size="lg" className="px-10 font-bold rounded-full shadow-2xl">
              Get started — it&apos;s free
            </Button>
            <Button size="lg" variant="outline" className="px-10 font-bold bg-background rounded-full transition-transform hover:scale-105 shadow-xl">
              Book a demo
            </Button>
          </div>
        </div>
      </div>
      
      {/* Visual background anchor */}
      <div className="absolute inset-0 -z-10 bg-[50%_0] bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/shadow-overlay.png')] bg-no-repeat bg-cover opacity-60"></div>
    </section>
  );
};

export { Hero55 };
```
