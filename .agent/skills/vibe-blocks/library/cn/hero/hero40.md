# Hero 40

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a comprehensive integration-focused introduction that pairs a standard marketing message with a high-impact interactive marquee of tool integrations.
- **Use Case**: Best for video editing platforms, AI tools, or production suites that rely heavily on a large ecosystem of connected third-party tools.
- **Visual Style**: Integration-validation aesthetic. Features a 2-column grid. The left column is a high-density typography block including a headline, description, dual CTAs, and a detailed "Features checklist" with custom green `Check` icons. The right column features a vertical visual stack: a top `aspect-video` placeholder and a bottom section containing a dual-row interactive `Marquee` (one row reversed) displaying tool cards with custom icons and descriptions.
- **Interactivity**: High interactive background motion. Features a dual-row auto-scrolling `Marquee` with customizable duration and horizontal gradient edge masks (`bg-gradient-to-r from-background`).

## Source Code

### `hero40.tsx`
```tsx
import {
  ArrowRight,
  ChartLine,
  Check,
  Cloud,
  CloudCog,
  Play,
  Share2,
  Sparkles,
  Video,
} from "lucide-react";

import { cn } from "@/lib/utils";

import { Marquee } from "@/components/ui/marquee";
import { Button } from "@/components/ui/button";

const integrations = [
  {
    name: "Storage",
    description: "Store your videos in your favorite storage solution.",
    icon: Cloud,
  },
  {
    name: "AI",
    description: "Use AI to generate videos, images, and more.",
    icon: Sparkles,
  },
  {
    name: "Video Editing",
    description: "Edit your videos with your favorite video editing software.",
    icon: Video,
  },
  {
    name: "Video Hosting",
    description: "Host your videos on your favorite video hosting solution.",
    icon: CloudCog,
  },
  {
    name: "Social Media",
    description: "Share your videos on your favorite social media platforms.",
    icon: Share2,
  },
  {
    name: "Analytics",
    description:
      "Track video performance with your favorite analytics solution.",
    icon: ChartLine,
  },
];

interface Hero40Props {
  className?: string;
}

const Hero40 = ({ className }: Hero40Props) => {
  return (
    <section className={cn("py-20 lg:py-32 font-sans", className)}>
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-start">
          <div className="flex flex-col gap-8">
            <h1 className="text-4xl font-bold lg:text-7xl tracking-tight leading-tight">
              Integrate with your favorite tools
            </h1>
            <p className="text-lg text-muted-foreground lg:text-xl font-medium leading-relaxed">
              Connect your favorite tools to your video production workflow.
              Streamline your creative process by integrating with the platforms
              and services you already use every day.
            </p>
            <div className="flex flex-wrap gap-4">
               <Button size="lg" className="font-bold px-8 shadow-lg">
                <span>Get Started</span>
                <ArrowRight className="ml-2 size-4" />
              </Button>
              <Button variant="outline" size="lg" className="font-bold bg-background px-8">
                <span>Watch Demo</span>
                <Play className="ml-2 size-4 fill-primary" />
              </Button>
            </div>
            
            {/* Feature Checklist */}
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex items-center gap-3">
                <div className="p-1 rounded-full bg-green-500/20">
                    <Check className="size-4 text-green-600" />
                </div>
                <p className="text-base text-muted-foreground font-medium">
                  <span className="font-bold text-foreground">100+</span> integrations available
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-1 rounded-full bg-green-500/20">
                    <Check className="size-4 text-green-600" />
                </div>
                <p className="text-base text-muted-foreground font-medium">
                  <span className="font-bold text-foreground">30-day</span> free trial
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-1 rounded-full bg-green-500/20">
                    <Check className="size-4 text-green-600" />
                </div>
                <p className="text-base text-muted-foreground font-medium">
                  <span className="font-bold text-foreground">24/7</span> support included
                </p>
              </div>
            </div>
          </div>
          
          {/* Visual integration stack */}
          <div className="flex flex-col gap-8">
            <div className="rounded-2xl overflow-hidden border border-border shadow-2xl bg-muted/30">
                <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                alt="placeholder"
                className="aspect-video w-full object-cover"
                />
            </div>
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-4">
              <Marquee className="[--duration:40s]">
                {integrations.map((integration) => (
                  <div
                    key={integration.name}
                    className="flex max-w-72 gap-4 rounded-xl border border-border p-5 bg-background shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="p-2 rounded-lg bg-primary/5 h-fit">
                        <integration.icon className="size-5 text-primary shrink-0" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-bold">{integration.name}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                        {integration.description}
                      </p>
                    </div>
                  </div>
                ))}
              </Marquee>
              <Marquee reverse className="[--duration:40s]">
                {integrations.map((integration) => (
                  <div
                    key={integration.name}
                    className="flex max-w-72 gap-4 rounded-xl border border-border p-5 bg-background shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="p-2 rounded-lg bg-primary/5 h-fit">
                        <integration.icon className="size-5 text-primary shrink-0" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-bold">{integration.name}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                        {integration.description}
                      </p>
                    </div>
                  </div>
                ))}
              </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero40 };
```
