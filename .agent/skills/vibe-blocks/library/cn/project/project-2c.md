# Project 2c

## Metadata
- **Category**: Project
- **Objective**: Establish a highly refined editorial layout leveraging tight kerning, severe line-height, and horizontal separators.
- **Use Case**: Magazine-style feature articles, high-end fashion or photography portfolios, luxury branding.
- **Visual Style**: Features an ultra-tight serif heading (`leading-[0.85]`), metadata blocks separated by crisp horizontal 1px borders, and a sticky sidebar for the overview heading (`sticky top-8`) juxtaposed with a scrolling text body.
- **Interactivity**: Utilizes native CSS `position: sticky` to create a dynamic reading experience without requiring heavy JS motion libraries.

## Description
Project 2c pushes the editorial aesthetic to its limit. It introduces dramatic typographic tension with tightly stacked serif headers and uses stark 1px dividing lines to organize metadata beautifully. The sticky secondary header follows the user as they read through the project description, ensuring context is never lost during scroll.

## Source Code

```tsx
"use client";

import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Project2cProps {
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

const Project2c = ({
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
}: Project2cProps) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto px-6 py-16 lg:px-8">
        <div className="mb-20">
          <div className="mb-16">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-2 w-2 bg-foreground"></div>
              <span className="text-sm font-medium text-muted-foreground">
                PROJECT SHOWCASE
              </span>
            </div>
            <h1 className="font-serif text-6xl leading-[0.85] font-light tracking-tight text-foreground md:text-8xl lg:text-9xl">
              {title}
              {title2 && (
                <>
                  <br />
                  {title2}
                </>
              )}
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="group">
              <div className="h-[1px] w-full bg-border"></div>
              <div className="mt-4 text-sm font-medium text-muted-foreground">
                YEAR
              </div>
              <div className="mt-1 text-lg text-foreground">{year}</div>
            </div>
            <div className="group">
              <div className="h-[1px] w-full bg-border"></div>
              <div className="mt-4 text-sm font-medium text-muted-foreground">
                CATEGORY
              </div>
              <div className="mt-1 text-lg text-foreground">{category}</div>
            </div>
            <div className="group">
              <div className="h-[1px] w-full bg-border"></div>
              <div className="mt-4 text-sm font-medium text-muted-foreground">
                CLIENT
              </div>
              <div className="mt-1 text-lg text-foreground">{client}</div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <div className="aspect-[16/9] overflow-hidden">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="h-full w-full object-cover"
            />
          </div>
          {imageCaption && (
            <div className="mt-6">
              <p className="text-sm font-medium text-muted-foreground">
                {imageCaption}
              </p>
            </div>
          )}
        </div>

        <div className="space-y-16">
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
            <div className="mb-8 lg:mb-0 lg:w-1/3">
              <div className="sticky top-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-3 w-3 bg-foreground"></div>
                  <h2 className="text-lg font-medium text-foreground">
                    {overviewHeading}
                  </h2>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="space-y-12">
                <div className="relative">
                  <h3 className="text-3xl leading-tight font-light text-foreground md:text-4xl">
                    {mainDescription}
                  </h3>
                </div>

                <div>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {detailDescription}
                  </p>
                </div>

                <div className="flex justify-start">
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

export { Project2c };
```
