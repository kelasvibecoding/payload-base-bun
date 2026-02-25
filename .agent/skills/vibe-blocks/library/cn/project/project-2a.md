# Project 2a

## Metadata
- **Category**: Project
- **Objective**: Establish a centered, symmetrical project overview utilizing massive editorial typography.
- **Use Case**: Similar to Project 2 (simple case studies, branding features), but optimized for layouts requiring centralized alignment and a more pronounced divider system.
- **Visual Style**: Pure editorial layout. Centers the massive serif header (`text-center font-serif text-7xl`) and implements a subtle central horizontal divider. The metadata grid is also shifted to `justify-items-center` for perfect vertical symmetry.
- **Interactivity**: Static, highly structured textual presentation. No motion or complex visual triggers.

## Description
Project 2a is a centered variant of the editorial project layout. By aligning all primary elements to the center, it forces the user's eye straight down the middle of the viewport, creating a highly anchored and stable reading experience before releasing them into the hero image.

## Source Code

```tsx
"use client";

import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface Project2aProps {
  title: string;
  title2?: string;
  year: string;
  category: string;
  client: string;
  imageSrc: string;
  imageAlt: string;
  imageCaption: string;
  mainDescription: string;
  detailDescription: string;
  buttonText: string;
  className?: string;
}

const Project2a = ({
  title = "DIGITAL",
  title2 = "ARTISANS",
  year = "[2024]",
  category = "[BRAND IDENTITY]",
  client = "[CREATIVE STUDIO]",
  imageSrc = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/artistic-portrait-glitch-yqp6z.png",
  imageAlt = "Creative workspace with coffee and design elements",
  imageCaption = "Artistic portrait with glitch-inspired overlays and ethereal lighting",
  mainDescription = "A VIBRANT PHOTOGRAPHY SHOOT CAPTURES THE ESSENCE OF MODERN BRAND IDENTITY, BLENDING ARTISTIC EXPRESSION WITH BOLD VISUAL STORYTELLING.",
  detailDescription = "This project centers on a creative portrait session designed to reflect the innovative and dynamic spirit of the brand. The shoot features ethereal lighting and glitch-inspired color overlays, evoking a sense of movement and digital artistry. The subject's confident gaze and contemporary styling embody the brand's forward-thinking identity, while the interplay of cyan and magenta tones creates a memorable, immersive visual experience. This imagery will be used across brand touchpoints to communicate a unique blend of creativity, technology, and authenticity.",
  buttonText = "Contact Us",
  className,
}: Project2aProps) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto px-8 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-20 flex flex-col items-center justify-center gap-6">
            <Label className="text-sm tracking-wider text-foreground uppercase">
              Project
            </Label>
            <h1 className="text-center font-serif text-7xl leading-none font-light tracking-tight text-foreground md:text-8xl lg:text-9xl">
              {title}
              {title2 && (
                <>
                  <br />
                  {title2}
                </>
              )}
            </h1>
            <div className="mx-auto mt-12 h-px w-24 bg-border"></div>
          </div>

          <div className="mb-24 grid grid-cols-3 justify-items-center text-sm tracking-wider text-muted-foreground uppercase">
            <div>
              <span className="block">YEAR</span>
              <span className="text-foreground">{year}</span>
            </div>
            <div>
              <span className="block">CATEGORY</span>
              <span className="text-foreground">{category}</span>
            </div>
            <div>
              <span className="block">CLIENT</span>
              <span className="text-foreground">{client}</span>
            </div>
          </div>

          <div className="mb-24">
            <div className="aspect-[16/10] overflow-hidden bg-muted">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-6 text-center text-xs tracking-widest text-muted-foreground">
              <em>{imageCaption}</em>
            </div>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="space-y-8">
              <h2 className="mb-8 text-xl leading-relaxed font-light text-foreground md:text-2xl">
                {mainDescription}
              </h2>

              <p className="mb-12 text-base leading-relaxed text-muted-foreground">
                {detailDescription}
              </p>

              <div>
                <Button variant="outline">
                  {buttonText}
                  <ArrowRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Project2a };
```
