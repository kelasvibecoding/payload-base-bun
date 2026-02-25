# Project 2b

## Metadata
- **Category**: Project
- **Objective**: Provide a highly technical, monospace-driven project overview layout.
- **Use Case**: Dev-tools, engineering portfolios, data-heavy case studies, or tech brands that lean into a utilitarian aesthetic.
- **Visual Style**: Relies on a stark, monospace primary header (`font-mono tracking-wider text-6xl`) combined with a side-aligned, tightly bordered metadata column (`border-l border-border pl-8`).
- **Interactivity**: Static layout. The focus is purely on structure, legibility, and architectural presentation rather than motion.

## Description
Project 2b leans heavily into an "Industrial Utilitarian" aesthetic. By utilizing monospace typography for the massive hero heading and rigidly structured, vertically stacked metadata off to the side, it creates a sense of precision and technical capability. The layout is incredibly clean, dropping all animations in favor of strict alignment.

## Source Code

```tsx
"use client";

import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Project2bProps {
  title: string;
  title2?: string;
  year: string;
  category: string;
  client: string;
  imageSrc: string;
  imageAlt: string;
  imageCaption?: string;
  overviewHeading: string;
  mainDescription: string;
  detailDescription: string;
  buttonText: string;
  className?: string;
}

const Project2b = ({
  title = "DIGITAL",
  title2 = "ARTISANS",
  year = "[2024]",
  category = "[BRAND IDENTITY]",
  client = "[CREATIVE STUDIO]",
  imageSrc = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/artistic-portrait-glitch-yqp6z.png",
  imageAlt = "Creative workspace with coffee and design elements",
  imageCaption = "Artistic portrait with glitch-inspired overlays and ethereal lighting",
  overviewHeading = "PROJECT OVERVIEW",
  mainDescription = "A VIBRANT PHOTOGRAPHY SHOOT CAPTURES THE ESSENCE OF MODERN BRAND IDENTITY, BLENDING ARTISTIC EXPRESSION WITH BOLD VISUAL STORYTELLING.",
  detailDescription = "This project centers on a creative portrait session designed to reflect the innovative and dynamic spirit of the brand. The shoot features ethereal lighting and glitch-inspired color overlays, evoking a sense of movement and digital artistry. The subject's confident gaze and contemporary styling embody the brand's forward-thinking identity, while the interplay of cyan and magenta tones creates a memorable, immersive visual experience. This imagery will be used across brand touchpoints to communicate a unique blend of creativity, technology, and authenticity.",
  buttonText = "Contact Us",
  className,
}: Project2bProps) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-24 grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-8">
              <h1 className="font-mono text-4xl leading-tight font-normal tracking-wider text-foreground md:text-6xl lg:text-7xl">
                {title}
                {title2 && (
                  <>
                    <br />
                    {title2}
                  </>
                )}
              </h1>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="space-y-6 border-l border-border pl-8">
                <div className="space-y-2">
                  <div className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                    Year
                  </div>
                  <div className="text-sm font-medium text-foreground">
                    {year}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                    Category
                  </div>
                  <div className="text-sm font-medium text-foreground">
                    {category}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                    Client
                  </div>
                  <div className="text-sm font-medium text-foreground">
                    {client}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-24">
            <div className="aspect-[3/2] overflow-hidden bg-muted">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="h-full w-full object-cover"
              />
            </div>
            {imageCaption && (
              <div className="mt-4 text-xs font-medium tracking-wider text-muted-foreground uppercase">
                {imageCaption}
              </div>
            )}
          </div>

          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-3">
              <h2 className="text-xs font-medium tracking-wider text-foreground uppercase">
                {overviewHeading}
              </h2>
            </div>
            <div className="col-span-12 md:col-span-9">
              <div className="space-y-8">
                <h3 className="text-xl leading-relaxed font-light text-foreground md:text-2xl">
                  {mainDescription}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {detailDescription}
                </p>
                <div className="pt-4">
                  <Button variant="outline">
                    {buttonText}
                    <ArrowRight />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Project2b };
```
