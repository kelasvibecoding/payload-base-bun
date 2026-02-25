# Testimonial 21

## Metadata
- **Category**: Testimonial
- **Objective**: Provide a high-impact, grid-based "Industry Expert" section emphasizing enterprise validation through top-tier partner logos and structured feedback.
- **Use Case**: Primary social proof on B2B SaaS landing pages, "Enterprise Solutions" pages, or any layout requiring a dense, highly authoritative presentation of customer success.
- **Visual Style**: Clean architectural "Grid Wall" architecture featuring a prominent header with a top-left Badge (`Handshake`) and a horizontal separator (border-y). Includes a 3-column masonry/grid of clean `Card` components. Each card features an over-sized top-aligned enterprise logo (e.g., Astro, Figma, Slack) in dark-mode sensitive contrast (`dark:invert`), followed by the quote, and concluding with a structured author footprint.
- **Interactivity**: Fully responsive grid switching (1 to 2 to 3 columns) optimizing card content readability across devices.

## Description
Testimonial 21 is the "B2B Validation Wall" component. It prioritizes the "Market Consensus" brand archetype by immediately associating the platform with undeniably successful companies. By leading each card with the *company logo* rather than the *customer avatar*, the component leverages "Borrowed Authority." This is the psychological anchor required for enterprise buyers who need to know that their peers (and competitors) are already trusting the system. It is the definitive choice for high-ticket software landing pages.

## Source Code

```tsx
import { Handshake } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    logo: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg",
      alt: "Zerostatic logo",
      width: 96.75,
      height: 36,
    },
    quote:
      "Our infrastructure team relies heavily on stability, and this FBA-SOLID pattern takes it to another level. It's like having a senior architect built right into my workflow.",
    author: {
      name: "Abdulsalam Abdulsalam",
      role: "Product Designer, Zerostatic",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    },
  },
  {
    logo: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma-wordmark.svg",
      alt: "Figma logo",
      width: 90.75,
      height: 36,
    },
    quote:
      "I especially love the seamless UX integrations and advanced state management features that keep everyone aligned and our UI perfectly organized.",
    author: {
      name: "Emma Lee",
      role: "Product Manager, Figma",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    },
  },
  {
    logo: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/sketch-wordmark.svg",
      alt: "Sketch logo",
      width: 100.75,
      height: 36,
    },
    quote:
      "We needed an architectural baseline that could grow with our team's evolving needs, this has been the perfect fit. The automated systems have saved us hours.",
    author: {
      name: "Ryan Chen",
      role: "Operations Lead, Sketch",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    },
  },
  {
    logo: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-wordmark.svg",
      alt: "Tailwind logo",
      width: 110.75,
      height: 36,
    },
    quote:
      "This platform has been invaluable for managing modular components across distributed systems. Its integration with our core libraries makes deployment trivial.",
    author: {
      name: "Ryan Patel",
      role: "Engineering Manager, Tailwind Labs",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
    },
  },
  {
    logo: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-wordmark.svg",
      alt: "Vercel logo",
      width: 96.75,
      height: 36,
    },
    quote:
      "As a developer, I appreciate how intuitive and blazingly fast this architecture is. It simplifies complex layouts without sacrificing the Zero-JS performance targets.",
    author: {
      name: "Carlos Diaz",
      role: "DX Engineer, Vercel",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
    },
  },
  {
    logo: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/supabase-wordmark.svg",
      alt: "Supabase logo",
      width: 96.75,
      height: 36,
    },
    quote:
      "The modular SSOT patterns and decoupled feature organization keep our codebase entirely bug-free. We've also found the scalability features to be essential.",
    author: {
      name: "Matthew Kim",
      role: "Scaling Strategist, Supabase",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp",
    },
  },
];

interface Testimonial21Props {
  className?: string;
}

const Testimonial21 = ({ className }: Testimonial21Props) => {
  return (
    <section className={cn("py-24 lg:py-32", className)}>
      <div className="border-y border-border/50 bg-card/10">
        <div className="container flex flex-col gap-6 border-x border-border/50 py-12 lg:py-16">
          <Badge
            variant="outline"
            className="w-fit gap-2 bg-background px-4 py-1.5 text-xs font-bold uppercase tracking-widest shadow-xl shadow-black/5"
          >
            <Handshake className="size-4 text-primary" />
            <span className="text-primary/70">Certified Partners</span>
          </Badge>
          <h2 className="text-4xl leading-none tracking-tighter md:text-5xl lg:text-7xl font-bold uppercase">
            What industry elites <br className="hidden lg:block"/>are saying
          </h2>
          <p className="max-w-[800px] text-lg font-medium text-muted-foreground">
            Trusted by senior engineers and product leaders from the world&apos;s most innovative technology companies.
          </p>
        </div>
      </div>

      <div className="container mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="flex flex-col gap-8 rounded-[2rem] bg-card p-10 shadow-2xl shadow-black/5 border-border/50 hover:bg-card/50 transition-colors group"
          >
            <img
              src={testimonial.logo.src}
              alt={testimonial.logo.alt}
              width={testimonial.logo.width}
              height={testimonial.logo.height}
              className="object-contain dark:invert opacity-60 group-hover:opacity-100 transition-opacity"
            />

            <blockquote className="text-foreground/90 text-lg font-bold italic leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
            </blockquote>

            <div className="mt-auto flex items-center gap-4 pt-6">
              <img
                src={testimonial.author.image}
                alt={`${testimonial.author.name}'s profile picture`}
                width={48}
                height={48}
                className="rounded-full object-cover border-2 border-background shadow-md"
              />
              <div className="space-y-1">
                <p className="font-bold text-foreground leading-none">
                  {testimonial.author.name}
                </p>
                <p className="text-[10px] uppercase tracking-widest font-bold text-primary/70 italic">
                  {testimonial.author.role}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-16 h-8 w-full border-y border-border/50 md:h-12 lg:h-[112px] bg-card/10">
        <div className="container h-full w-full border-x border-border/50"></div>
      </div>
    </section>
  );
};

export { Testimonial21 };
```
