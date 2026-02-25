# Project 4

## Metadata
- **Category**: Project
- **Objective**: Provide a standard, deeply narrative article/case study layout.
- **Use Case**: Detailed portfolio case studies, long-form blog posts, or client success stories.
- **Visual Style**: Clean, typography-focused "Prose" format running straight down the page. Combines a clear header and metadata cluster with interspersed, edge-breaking images to keep the reading experience engaging.
- **Interactivity**: Static, content-forward layout relying on semantic HTML and Tailwind's `@tailwindcss/typography` plugin (`prose`) for elegant readability.

## Description
Project 4 provides a classic editorial case study format. It is designed for projects that require significant written explanation (like branding projects or UX processes). By utilizing the `prose` class, it guarantees perfect reading width, line-height, and typographic rhythm, punctuated by large, high-quality imagery.

## Source Code

```tsx
import React from "react";

import { cn } from "@/lib/utils";

interface Project4Props {
  className?: string;
}

const Project4 = ({ className }: Project4Props) => {
  return (
    <section className={cn("py-16", className)}>
      <div className="container max-w-4xl">
        {/* Header Section */}
        <div className="mb-20">
          <div className="mb-12">
            <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
              Brand Identity Design
            </p>
            <h1 className="mt-4 text-6xl font-bold tracking-tight md:text-7xl lg:text-8xl">
              Pure Pressed
            </h1>
            <p className="mt-6 text-2xl text-muted-foreground md:text-3xl">
              Crafting a fresh, authentic brand identity for a premium
              cold-pressed juice company that celebrates natural wellness.
            </p>
          </div>

          <div className="flex flex-wrap gap-12 text-sm">
            <div>
              <p className="font-semibold tracking-wider text-muted-foreground uppercase">
                Creative Director
              </p>
              <p className="mt-2 text-lg font-medium">Maya Chen</p>
            </div>
            <div>
              <p className="font-semibold tracking-wider text-muted-foreground uppercase">
                Industry
              </p>
              <p className="mt-2 text-lg font-medium">Food & Beverage</p>
            </div>
            <div>
              <p className="font-semibold tracking-wider text-muted-foreground uppercase">
                Year
              </p>
              <p className="mt-2 text-lg font-medium">2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image - Full Width */}
      <div className="mb-20">
        <div className="container max-w-7xl">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/pressed-juice/devin-avery-BRVqq2uak4E-unsplash.jpg"
            alt="Fresh cold-pressed juice bottles"
            className="w-full rounded-lg"
          />
        </div>
      </div>

      {/* Content */}
      <div className="container max-w-4xl">
        <div className="prose prose-lg mb-16 max-w-none">
          <p className="lead">
            Pure Pressed approached us to create a brand identity that would
            differentiate them in the competitive wellness market. Our challenge
            was to convey authenticity, premium quality, and the raw vitality of
            fresh ingredients through every touchpoint.
          </p>
        </div>

        <div className="mb-16">
          <div className="prose prose-lg max-w-none">
            <h2>The Challenge</h2>

            <p>
              The cold-pressed juice market is saturated with brands claiming to
              be "natural" and "healthy." Pure Pressed needed to stand out by
              communicating genuine authenticity and premium quality while
              remaining approachable to everyday consumers.
            </p>

            <h3>Market differentiation</h3>
            <p>
              With numerous competitors using similar messaging around health
              and wellness, we needed to find a unique positioning that
              highlighted Pure Pressed's commitment to quality ingredients and
              sustainable practices.
            </p>

            <h3>Premium accessibility</h3>
            <p>
              The brand needed to feel premium enough to justify higher price
              points while remaining accessible and not intimidating to
              health-conscious consumers from all backgrounds.
            </p>

            <div className="not-prose -mx-8 my-12 sm:-mx-16 lg:-mx-32">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/pressed-juice/devin-avery-jcHO600npH8-unsplash.jpg"
                alt="Colorful array of fresh pressed juices"
                className="w-full rounded-lg"
              />
              <p className="mt-4 text-center text-sm text-muted-foreground italic">
                The vibrant color palette of Pure Pressed juices became a key
                brand differentiator, showcasing the natural beauty of fresh
                ingredients.
              </p>
            </div>

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

            <h2>Outcome</h2>

            <p>
              The new brand identity successfully positioned Pure Pressed as a
              premium yet approachable wellness brand. The clean, natural
              aesthetic resonated with target consumers, resulting in a 40%
              increase in brand recognition and strong retail partnerships.
            </p>

            <p>
              The packaging design became a key differentiator on shelves, with
              the minimalist approach allowing the vibrant colors of the juices
              to shine through while maintaining a premium feel.
            </p>

            <p>
              Through thoughtful brand development and strategic visual
              storytelling, Pure Pressed now stands as a authentic leader in the
              wellness space, building lasting connections with health-conscious
              consumers.
            </p>

            <div className="not-prose -mx-8 my-12 sm:-mx-16 lg:-mx-32">
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
        </div>
      </div>
    </section>
  );
};

export { Project4 };
```
