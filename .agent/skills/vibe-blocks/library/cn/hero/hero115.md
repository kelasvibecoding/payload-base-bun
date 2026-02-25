# Hero 115

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a centered, tech-focused marketing introduction pairing a unique radial-mask background texture with a prominent wide-format project image.
- **Use Case**: Best for developer tools, UI component libraries (e.g., "Blocks built with Shadcn"), or engineering platforms that want to emphasize "Atomic craftsmanship" and "Quality."
- **Visual Style**: High-Status Developer aesthetic. Features a centered layout beginning with a prominent circular `icon` avatar. The typography section is anchored by a complex absolute-positioned "Radial Circle" background utilizing multiple concentric `rounded-full` borders and a specialized `mask-image` linear gradient to create a soft, "radar-pulse" atmosphere. The visual anchor is a wide-format product preview (`max-w-5xl rounded-2xl`) at the bottom.
- **Interactivity**: Static layout with high interactive visual depth. Primary CTA uses a specialized `Zap` icon to drive feature discovery. Emphasizes clean technical documentation and professional trust through the `trustText` micro-copy.

## Source Code

### `hero115.tsx`
```tsx
import { Wifi, Zap } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero115Props {
  icon?: React.ReactNode;
  heading: string;
  description: string;
  button: {
    text: string;
    icon?: React.ReactNode;
    url: string;
    className?: string;
  };
  trustText?: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

const Hero115 = ({
  icon = <Wifi className="size-8 text-primary" />,
  heading = "Blocks built with Shadcn & Tailwind",
  description = "Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
  button = {
    text: "Discover Features",
    icon: <Zap className="ml-3 size-5 text-primary" />,
    url: "https://www.shadcnblocks.com",
  },
  trustText = "Trusted by 25.000+ Businesses Worldwide",
  imageSrc = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  imageAlt = "UI Library Preview",
  className,
}: Hero115Props) => {
  return (
    <section className={cn("overflow-hidden py-20 lg:py-40 font-sans border-b", className)}>
      <div className="container relative">
        <div className="flex flex-col gap-10">
          
          {/* Technical Narrative side */}
          <div className="relative flex flex-col gap-12 items-center text-center">
            
            {/* Unique Concentric Radial Mask Background Texture */}
            <div
              style={{
                transform: "translate(-50%, -50%)",
              }}
              className="absolute top-1/2 left-1/2 -z-10 mx-auto size-[800px] lg:size-[1400px] rounded-full border-4 border-dashed border-primary/5 [mask-image:linear-gradient(to_top,transparent,transparent,white,white,white,transparent,transparent)] p-20 lg:p-48 animate-[spin_120s_linear_infinite]"
            >
              <div className="size-full rounded-full border-2 border-primary/10 p-20 lg:p-40">
                <div className="size-full rounded-full border border-primary/20"></div>
              </div>
            </div>
            
            {/* Craftsmanship Icon */}
            <div className="mx-auto flex size-20 lg:size-32 items-center justify-center rounded-[2.5rem] bg-background border-4 border-border/50 shadow-2xl rotate-3 transform group-hover:rotate-6 transition-transform">
              {icon}
            </div>
            
            <h1 className="mx-auto max-w-6xl text-5xl font-black lg:text-[8rem] tracking-tighter leading-[0.85] text-pretty text-foreground drop-shadow-sm">
              {heading}
            </h1>
            
            <p className="mx-auto max-w-3xl text-xl lg:text-3xl font-medium text-muted-foreground leading-relaxed italic border-x-4 border-primary/10 px-8">
              {description}
            </p>
            
            <div className="flex flex-col items-center justify-center gap-8 pt-6 pb-20">
              <Button size="lg" asChild className="h-fit rounded-full px-12 py-7 font-black text-xl shadow-2xl transition-transform hover:scale-105 active:scale-95 duration-300">
                <a href={button.url}>
                  {button.text} {button.icon}
                </a>
              </Button>
              {trustText && (
                <div className="text-sm font-black uppercase tracking-[0.4em] text-muted-foreground/60">{trustText}</div>
              )}
            </div>
          </div>
          
          {/* Main Context Visual Anchor */}
          <div className="relative group mx-auto w-full max-w-7xl">
            <div className="absolute -inset-4 bg-primary/5 blur-2xl opacity-60 rounded-[3rem]"></div>
            <img
                src={imageSrc}
                alt={imageAlt}
                className="relative z-10 mx-auto h-full max-h-[650px] w-full rounded-[3rem] border-8 border-background bg-muted object-cover shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] transition-transform duration-1000 group-hover:-translate-y-4"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export { Hero115 };
```
