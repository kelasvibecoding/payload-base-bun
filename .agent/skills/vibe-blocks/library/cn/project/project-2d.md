# Project 2d

## Metadata
- **Category**: Project
- **Objective**: Create a modular, card-based project overview layout with overlapping elements for added depth.
- **Use Case**: Tech startups, SaaS product pages, or modern case studies that prefer encapsulated "floating" UI elements over traditional flat text grids.
- **Visual Style**: Incorporates rounded corners, overlapping absolute positioning (the image caption breaks the bounds of the image container), and a soft, muted background box for the metadata (`bg-muted/50 p-8`).
- **Interactivity**: Primarily static, using the layout hierarchy and `position: sticky` on the overview sidebar to guide the user's attention down the page.

## Description
Project 2d steps away from a purely flat editorial look by introducing soft encapsulated cards and overlapping elements. The metadata is housed inside a subtle, rounded container, while the hero image features an overlapping, offset caption box. This creates a more dynamic, modern depth-of-field effect in the layout.

## Source Code

```tsx
"use client";

import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Project2dProps {
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

const Project2d = ({
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
}: Project2dProps) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto px-6 py-20 lg:px-12">
        <div className="mb-40">
          <div className="grid grid-cols-12 gap-8 lg:gap-16">
            <div className="col-span-12 lg:col-span-7">
              <div className="mb-12">
                <div className="mb-6 inline-flex items-center space-x-4">
                  <div className="h-px w-16 bg-foreground"></div>
                  <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
                    Project
                  </span>
                </div>
                <h1 className="font-serif text-5xl leading-[0.95] font-light tracking-tight text-foreground md:text-7xl lg:text-8xl xl:text-9xl">
                  {title}
                  {title2 && (
                    <>
                      <br />
                      {title2}
                    </>
                  )}
                </h1>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-5">
              <div className="h-full lg:pt-32">
                <div className="space-y-8">
                  <div className="rounded-lg bg-muted/50 p-8">
                    <div className="grid grid-cols-1 gap-6">
                      <div className="flex items-center justify-between border-b border-border pb-4">
                        <span className="text-sm font-medium text-muted-foreground">
                          Year
                        </span>
                        <span className="font-medium text-foreground">
                          {year}
                        </span>
                      </div>
                      <div className="flex items-center justify-between border-b border-border pb-4">
                        <span className="text-sm font-medium text-muted-foreground">
                          Category
                        </span>
                        <span className="font-medium text-foreground">
                          {category}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-muted-foreground">
                          Client
                        </span>
                        <span className="font-medium text-foreground">
                          {client}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-32">
          <div className="relative">
            <div className="aspect-[5/3] overflow-hidden rounded-2xl">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="h-full w-full object-cover"
              />
            </div>
            {imageCaption && (
              <div className="absolute -right-4 bottom-8 max-w-xs rounded-lg bg-background/95 p-4 lg:-right-8">
                <p className="text-sm font-medium text-muted-foreground">
                  {imageCaption}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 lg:gap-16">
          <div className="col-span-12 lg:col-span-4">
            <div className="sticky top-8">
              <h2 className="mb-6 text-sm font-medium tracking-widest text-muted-foreground uppercase">
                {overviewHeading}
              </h2>
              <div className="h-px w-12 bg-foreground"></div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-8">
            <div className="space-y-12">
              <h3 className="text-3xl leading-relaxed font-light text-foreground md:text-4xl">
                {mainDescription}
              </h3>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {detailDescription}
                </p>
              </div>

              <div className="pt-8">
                <Button variant="outline" size="lg">
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

export { Project2d };
```
