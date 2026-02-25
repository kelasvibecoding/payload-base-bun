# Project 4b

## Metadata
- **Category**: Project
- **Objective**: Create a highly symmetrical, completely centered case study format for a balanced aesthetic.
- **Use Case**: Photography-first portfolios, luxury goods storytelling, or any project that benefits from strict symmetry and white space.
- **Visual Style**: All alignment is centered (`text-center`, `justify-center`), providing a classic, column-based look perfectly bisecting the screen. Utilizes Tailwind's `prose` but constraints the width (`max-w-4xl`) sharply to force readability.
- **Interactivity**: Static layout. The primary "interaction" is the steady, rhythmic pacing between dense prose sections and large, width-breaking imagery.

## Description
Project 4b modifies the classic article format by forcibly centering all text boundaries and headings. This alignment creates a more formal, confident presentation style. The design deliberately breaks the centralized rhythm by inserting wide, `max-w-5xl` images between the centered `max-w-4xl` prose blocks, establishing a very satisfying scale contrast.

## Source Code

```tsx
import React from "react";

import { cn } from "@/lib/utils";

interface Project4bProps {
  className?: string;
}

const Project4b = ({ className }: Project4bProps) => {
  return (
    <section className={cn("py-16", className)}>
      {/* Header */}
      <div className="container mb-20 max-w-6xl">
        <div className="text-center">
          <p className="mb-4 text-sm font-semibold tracking-widest text-muted-foreground uppercase">
            Brand Identity Design
          </p>
          <h1 className="mb-6 text-5xl font-bold md:text-6xl lg:text-7xl">
            Pure Pressed
          </h1>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
            Crafting a fresh, authentic brand identity for a premium
            cold-pressed juice company that celebrates natural wellness.
          </p>

          <div className="mt-12 flex justify-center gap-12 text-sm">
            <div>
              <p className="mb-1 font-semibold tracking-wider text-muted-foreground uppercase">
                Creative Director
              </p>
              <p className="font-medium">Maya Chen</p>
            </div>
            <div>
              <p className="mb-1 font-semibold tracking-wider text-muted-foreground uppercase">
                Industry
              </p>
              <p className="font-medium">Food & Beverage</p>
            </div>
            <div>
              <p className="mb-1 font-semibold tracking-wider text-muted-foreground uppercase">
                Year
              </p>
              <p className="font-medium">2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="mb-20">
        <div className="container max-w-7xl">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/pressed-juice/devin-avery-BRVqq2uak4E-unsplash.jpg"
            alt="Fresh cold-pressed juice bottles"
            className="w-full rounded-lg"
          />
        </div>
      </div>

      {/* Introduction */}
      <div className="container mb-20 max-w-4xl">
        <div className="prose prose-lg mb-16 max-w-none text-center">
          <p className="lead">
            Pure Pressed approached us to create a brand identity that would
            differentiate them in the competitive wellness market. Our challenge
            was to convey authenticity, premium quality, and the raw vitality of
            fresh ingredients through every touchpoint.
          </p>
        </div>
        <div className="container max-w-5xl">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/pressed-juice/devin-avery-3XSkkuic3Pg-unsplash.jpg"
            alt="Pure Pressed ingredients"
            className="w-full rounded-lg"
          />
        </div>
      </div>

      {/* Challenge Section */}
      <div className="container mb-20 max-w-4xl">
        <div className="prose prose-lg mb-16 max-w-none">
          <h2>The Challenge</h2>

          <p>
            The cold-pressed juice market is saturated with brands claiming to
            be "natural" and "healthy." Pure Pressed needed to stand out by
            communicating genuine authenticity and premium quality while
            remaining approachable to everyday consumers.
          </p>

          <h3>Market differentiation</h3>
          <p>
            With numerous competitors using similar messaging around health and
            wellness, we needed to find a unique positioning that highlighted
            Pure Pressed's commitment to quality ingredients and sustainable
            practices.
          </p>

          <h3>Premium accessibility</h3>
          <p>
            The brand needed to feel premium enough to justify higher price
            points while remaining accessible and not intimidating to
            health-conscious consumers from all backgrounds.
          </p>
        </div>

        <div className="container max-w-5xl">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/pressed-juice/devin-avery-jcHO600npH8-unsplash.jpg"
            alt="Colorful array of fresh pressed juices"
            className="w-full rounded-lg"
          />
          <p className="mt-4 text-center text-sm text-muted-foreground italic">
            The vibrant color palette of Pure Pressed juices became a key brand
            differentiator, showcasing the natural beauty of fresh ingredients.
          </p>
        </div>
      </div>

      {/* Process Section */}
      <div className="container mb-20 max-w-4xl">
        <div className="prose prose-lg mb-16 max-w-none">
          <h2>Process</h2>

          <p>
            Our approach began with extensive market research and consumer
            interviews to understand the wellness landscape. We developed a
            brand strategy that positioned Pure Pressed as the intersection of
            premium quality and authentic simplicity.
          </p>

          <h3>Our design methodology</h3>
          <ol>
            <li>Brand strategy & positioning research</li>
            <li>Visual identity exploration & concepts</li>
            <li>Logo design & typography selection</li>
            <li>Color palette & packaging design</li>
            <li>Brand guidelines & rollout strategy</li>
          </ol>
        </div>

        <div className="container max-w-5xl">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/pressed-juice/devin-avery-dxIzIveffLE-unsplash.jpg"
            alt="Pure Pressed design process"
            className="w-full rounded-lg"
          />
        </div>
      </div>

      {/* Outcome Section */}
      <div className="container mb-20 max-w-4xl">
        <div className="prose prose-lg mb-16 max-w-none">
          <h2>Outcome</h2>

          <p>
            The new brand identity successfully positioned Pure Pressed as a
            premium yet approachable wellness brand. The clean, natural
            aesthetic resonated with target consumers, resulting in a 40%
            increase in brand recognition and strong retail partnerships.
          </p>

          <p>
            The packaging design became a key differentiator on shelves, with
            the minimalist approach allowing the vibrant colors of the juices to
            shine through while maintaining a premium feel.
          </p>

          <p>
            Through thoughtful brand development and strategic visual
            storytelling, Pure Pressed now stands as a authentic leader in the
            wellness space, building lasting connections with health-conscious
            consumers.
          </p>
        </div>

        <div className="container max-w-5xl">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/pressed-juice/devin-avery-2tuH5dIqQEc-unsplash.jpg"
            alt="Pure Pressed brand identity showcase"
            className="w-full rounded-lg"
          />
          <p className="mt-4 text-center text-sm text-muted-foreground italic">
            The final brand identity system emphasizes clean, minimal design
            that allows the product's natural appeal to take center stage.
          </p>
        </div>
      </div>
    </section>
  );
};

export { Project4b };
```
