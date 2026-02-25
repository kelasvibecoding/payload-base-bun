# Project 2

## Metadata
- **Category**: Project
- **Objective**: Establish a minimalist project overview focusing on large editorial typography with metadata integrated above a single hero image.
- **Use Case**: Simple project pages where text takes precedence over photography, such as branding case studies or brief portfolio pieces.
- **Visual Style**: A pure editorial layout without Framer Motion animations. Driven heavily by oversized serif typography (`font-serif text-6xl lg:text-9xl`), tight column-based metadata, and a standard aspect ratio hero image (`aspect-[16/10]`).
- **Interactivity**: Static, content-forward layout utilizing standard Shadcn `Button` elements. Relies on negative space rather than motion.

## Description
Project 2 provides a stripped-back, highly elegant project introduction. It avoids complex staggered animations in favor of massive, immediate typographic impact. The layout pairs a giant serif headline with an adjacent structured metadata row before transitioning into a single wide image and a constrained reading column.

## Source Code

```tsx
"use client";

import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Project2Props {
  title: string;
  title2?: string;
  year: string;
  category: string;
  client: string;
  imageSrc: string;
  imageAlt: string;
  overviewHeading: string;
  mainDescription: string;
  detailDescription: string;
  buttonText: string;
  className?: string;
}

const Project2 = ({
  title = "DIGITAL",
  title2 = "ARTISANS",
  year = "[2024]",
  category = "[BRAND IDENTITY]",
  client = "[CREATIVE STUDIO]",
  imageSrc = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/artistic-portrait-glitch-yqp6z.png",
  imageAlt = "Creative workspace with coffee and design elements",
  overviewHeading = "PROJECT OVERVIEW",
  mainDescription = "A VIBRANT PHOTOGRAPHY SHOOT CAPTURES THE ESSENCE OF MODERN BRAND IDENTITY, BLENDING ARTISTIC EXPRESSION WITH BOLD VISUAL STORYTELLING.",
  detailDescription = "This project centers on a creative portrait session designed to reflect the innovative and dynamic spirit of the brand. The shoot features ethereal lighting and glitch-inspired color overlays, evoking a sense of movement and digital artistry. The subject's confident gaze and contemporary styling embody the brand's forward-thinking identity, while the interplay of cyan and magenta tones creates a memorable, immersive visual experience. This imagery will be used across brand touchpoints to communicate a unique blend of creativity, technology, and authenticity.",
  buttonText = "Contact Us",
  className,
}: Project2Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="py-12">
          <div>
            <h1 className="font-serif text-6xl leading-none font-light tracking-tight text-foreground md:text-8xl lg:text-9xl">
              {title}
              {title2 && (
                <>
                  <br />
                  {title2}
                </>
              )}
            </h1>
          </div>

          <div className="mt-12 grid grid-cols-3 text-sm tracking-wider text-muted-foreground uppercase md:grid-cols-6">
            <div>
              <span className="block">YEAR</span>
              <span className="text-foreground">{year}</span>
            </div>
            <div>
              <span className="block">CATEGORY</span>
              <span className="text-foreground">{category}</span>
            </div>
            <div className="ml-16">
              <span className="block">CLIENT</span>
              <span className="text-foreground">{client}</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[16/10] overflow-hidden">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-6 py-16 md:px-12 lg:px-24">
          <div>
            <h2 className="mb-8 text-sm tracking-wider text-foreground uppercase">
              {overviewHeading}
            </h2>
          </div>

          <div>
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
    </section>
  );
};

export { Project2 };
```
