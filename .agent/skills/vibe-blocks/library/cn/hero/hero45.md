# Hero 45

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a comprehensive marketing introduction that pairs a centered text block with a wide-format product preview and a 3-column value proposition grid.
- **Use Case**: Best for feature highlights, product overviews, or "Why us?" sections where visual evidence and categorized benefits are needed.
- **Visual Style**: Value-driven professional aesthetic. Features a centered layout beginning with a "shadcnblocks.com" `Badge`. Below the headline, a wide-format `aspect-video` image placeholder is anchored with absolute-positioned "dot grid" overlays (`radial-gradient`) in the top-left and top-right corners. The section concludes with a 3-column feature grid separated by vertical linear-gradient `Separator` lines on desktop.
- **Interactivity**: Static layout. Feature cards use a `drop-shadow-lg` on the icon container for a lifted, professional feel.

## Source Code

### `hero45.tsx`
```tsx
import { HandHelping, Users, Zap } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Hero45Props {
  badge?: string;
  heading: string;
  imageSrc?: string;
  imageAlt?: string;
  features?: Feature[];
  className?: string;
}

const Hero45 = ({
  badge = "shadcnblocks.com",
  heading = "Blocks built with Shadcn & Tailwind",
  imageSrc = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  imageAlt = "placeholder",
  features = [
    {
      icon: <HandHelping className="h-auto w-5" />,
      title: "Flexible Support",
      description:
        "Benefit from around-the-clock assistance to keep your business running smoothly.",
    },
    {
      icon: <Users className="h-auto w-5" />,
      title: "Collaborative Tools",
      description:
        "Enhance teamwork with tools designed to simplify project management and communication.",
    },
    {
      icon: <Zap className="h-auto w-5" />,
      title: "Lightning Fast Speed",
      description:
        "Experience the fastest load times with our high performance servers.",
    },
  ],
  className,
}: Hero45Props) => {
  return (
    <section className={cn("py-20 lg:py-32", className)}>
      <div className="container overflow-hidden">
        <div className="mb-20 flex flex-col items-center gap-6 text-center max-w-4xl mx-auto">
          <Badge variant="outline" className="px-4 py-1 font-bold uppercase tracking-widest border-primary/20">{badge}</Badge>
          <h1 className="text-4xl font-bold lg:text-7xl tracking-tight leading-tight">{heading}</h1>
        </div>
        <div className="relative mx-auto max-w-5xl">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="aspect-video max-h-[560px] w-full rounded-2xl object-cover shadow-2xl border border-border/50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-20"></div>
          
          {/* Decorative Dot Grid Backgrounds */}
          <div className="absolute -top-28 -right-28 -z-10 aspect-video h-72 w-96 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] [background-size:12px_12px] opacity-40 sm:bg-[radial-gradient(hsl(var(--primary))_1px,transparent_1px)]"></div>
          <div className="absolute -top-28 -left-28 -z-10 aspect-video h-72 w-96 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] [background-size:12px_12px] opacity-40 sm:bg-[radial-gradient(hsl(var(--primary))_1px,transparent_1px)]"></div>
        </div>
        
        {/* Value Prop Grid */}
        <div className="mx-auto mt-16 lg:mt-24 flex max-w-5xl flex-col md:flex-row gap-8 md:gap-0">
          {features.map((feature, index) => (
            <React.Fragment key={feature.title}>
              {index > 0 && (
                <Separator
                  orientation="vertical"
                  className="mx-8 hidden h-auto w-[1px] bg-gradient-to-b from-border via-transparent to-border md:block opacity-30"
                />
              )}
              <div
                className="flex grow basis-0 flex-col rounded-2xl bg-background/50 p-6 transition-all hover:bg-background border border-transparent hover:border-border/50 shadow-sm hover:shadow-md"
              >
                <div className="mb-8 flex size-12 items-center justify-center rounded-2xl bg-background shadow-xl text-primary">
                  {feature.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold tracking-tight">{feature.title}</h3>
                <p className="text-muted-foreground font-medium leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Hero45 };
```
