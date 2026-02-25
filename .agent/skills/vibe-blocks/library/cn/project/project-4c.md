# Project 4c

## Metadata
- **Category**: Project
- **Objective**: Deliver a cinematic, high-impact case study featuring a full-bleed hero image with an overlay and a rich statistical breakdown.
- **Use Case**: Flagship case studies, award submissions, or high-value SaaS implementations where business metrics need to be showcased alongside narrative.
- **Visual Style**: Cinematic full-screen hero (`h-screen max-h-[80vh] bg-black/40`), combined with structured, metadata-rich article headers and a notable "Results & Impact" stats grid (`bg-muted rounded-lg grid-cols-3`).
- **Interactivity**: Primarily static. Designed to be highly impactful on load, encouraging immediate scrolling into the detailed qualitative and quantitative results.

## Description
Project 4c merges cinematic visual design with data-driven storytelling. It opens with an aggressive, edge-to-edge transparent overlay hero section. As the user reads through the highly structured article, they will encounter callout blockquotes and a heavily styled "Results & Impact" grid element, proving that aesthetic beauty and business metrics can coexist effectively.

## Source Code

```tsx
import React from "react";

import { cn } from "@/lib/utils";

interface Project4cProps {
  className?: string;
}

const Project4c = ({ className }: Project4cProps) => {
  return (
    <section className={cn("py-16", className)}>
      {/* Hero Section with Overlay */}
      <div className="relative mb-20">
        <div className="relative h-screen max-h-[80vh] overflow-hidden">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/pressed-juice/devin-avery-BRVqq2uak4E-unsplash.jpg"
            alt="Fresh cold-pressed juice bottles"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center text-center text-white">
            <div className="max-w-4xl px-8">
              <p className="mb-4 text-sm font-semibold tracking-widest uppercase opacity-90">
                Brand Identity Design
              </p>
              <h1 className="mb-6 text-6xl font-bold md:text-8xl lg:text-9xl">
                Pure Pressed
              </h1>
              <p className="mx-auto max-w-3xl text-xl leading-relaxed opacity-90 md:text-2xl">
                Crafting a fresh, authentic brand identity for a premium
                cold-pressed juice company that celebrates natural wellness.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Article */}
      <div className="container max-w-4xl">
        {/* Article Header */}
        <div className="mb-16 border-b pb-12">
          <div className="flex flex-wrap items-start justify-between gap-8">
            <div className="space-y-6">
              <div>
                <p className="mb-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  Creative Direction
                </p>
                <p className="text-lg font-medium">Maya Chen</p>
              </div>
              <div>
                <p className="mb-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  Industry & Category
                </p>
                <p className="text-lg font-medium">
                  Food & Beverage — Brand Identity
                </p>
              </div>
              <div>
                <p className="mb-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  Project Year
                </p>
                <p className="text-lg font-medium">2024</p>
              </div>
            </div>
            <div className="text-right">
              <p className="mb-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                Reading Time
              </p>
              <p className="text-lg font-medium">5 minutes</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <article className="prose prose-lg max-w-none prose-gray">
          <p className="lead text-2xl leading-relaxed">
            Pure Pressed approached us to create a brand identity that would
            differentiate them in the competitive wellness market. Our challenge
            was to convey authenticity, premium quality, and the raw vitality of
            fresh ingredients through every touchpoint.
          </p>

          <h2>The Challenge</h2>

          <p>
            The cold-pressed juice market is saturated with brands claiming to
            be "natural" and "healthy." Pure Pressed needed to stand out by
            communicating genuine authenticity and premium quality while
            remaining approachable to everyday consumers.
          </p>

          <blockquote>
            <p>
              "We needed to find a unique positioning that highlighted Pure
              Pressed's commitment to quality ingredients and sustainable
              practices."
            </p>
          </blockquote>

          <p>
            With numerous competitors using similar messaging around health and
            wellness, the brand needed to feel premium enough to justify higher
            price points while remaining accessible and not intimidating to
            health-conscious consumers from all backgrounds.
          </p>

          <figure className="not-prose -mx-8 my-16 sm:-mx-16">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/pressed-juice/devin-avery-3XSkkuic3Pg-unsplash.jpg"
              alt="Pure Pressed ingredients"
              className="w-full rounded-lg"
            />
            <figcaption className="mt-4 px-8 text-center text-sm text-muted-foreground italic sm:px-16">
              Fresh, vibrant ingredients form the foundation of Pure Pressed's
              authentic brand promise.
            </figcaption>
          </figure>

          <h2>Strategic Approach</h2>

          <p>
            Our process began with extensive market research and consumer
            interviews to understand the wellness landscape. We developed a
            brand strategy that positioned Pure Pressed as the intersection of
            premium quality and authentic simplicity.
          </p>

          <h3>Design Methodology</h3>

          <p>
            We followed a systematic approach to ensure every brand touchpoint
            reinforced Pure Pressed's core values and market positioning:
          </p>

          <ol>
            <li>
              <strong>Brand strategy & positioning research</strong> —
              Understanding market landscape and consumer needs
            </li>
            <li>
              <strong>Visual identity exploration & concepts</strong> —
              Developing multiple creative directions
            </li>
            <li>
              <strong>Logo design & typography selection</strong> — Crafting the
              core brand elements
            </li>
            <li>
              <strong>Color palette & packaging design</strong> — Creating
              cohesive visual system
            </li>
            <li>
              <strong>Brand guidelines & rollout strategy</strong> — Ensuring
              consistent implementation
            </li>
          </ol>

          <div className="not-prose my-16 grid gap-8 sm:-mx-8">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/pressed-juice/devin-avery-dxIzIveffLE-unsplash.jpg"
              alt="Pure Pressed design process"
              className="w-full rounded-lg"
            />
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/pressed-juice/devin-avery-gf8m6ffBG5s-unsplash.jpg"
              alt="Pure Pressed brand development"
              className="w-full rounded-lg"
            />
          </div>

          <h2>Results & Impact</h2>

          <p>
            The new brand identity successfully positioned Pure Pressed as a
            premium yet approachable wellness brand. The clean, natural
            aesthetic resonated with target consumers, resulting in measurable
            business impact.
          </p>

          <div className="not-prose my-12 grid grid-cols-3 gap-8 rounded-lg bg-muted p-8 text-center">
            <div>
              <div className="text-3xl font-bold">40%</div>
              <div className="text-sm text-muted-foreground">
                Brand recognition increase
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm text-muted-foreground">
                New retail partnerships
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold">85%</div>
              <div className="text-sm text-muted-foreground">
                Positive consumer feedback
              </div>
            </div>
          </div>

          <p>
            The packaging design became a key differentiator on shelves, with
            the minimalist approach allowing the vibrant colors of the juices to
            shine through while maintaining a premium feel.
          </p>

          <figure className="not-prose -mx-8 my-16 sm:-mx-16">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/pressed-juice/devin-avery-2tuH5dIqQEc-unsplash.jpg"
              alt="Pure Pressed brand identity showcase"
              className="w-full rounded-lg"
            />
            <figcaption className="mt-4 px-8 text-center text-sm text-muted-foreground italic sm:px-16">
              The final brand identity system emphasizes clean, minimal design
              that allows the product's natural appeal to take center stage,
              creating a cohesive and memorable brand experience.
            </figcaption>
          </figure>
        </article>
      </div>
    </section>
  );
};

export { Project4c };
```
