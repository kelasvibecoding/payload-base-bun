# Testimonial 11

## Metadata
- **Category**: Testimonial
- **Objective**: Provide a premium, background-gradient section that combines large-scale rating metrics with a comprehensive social proof masonry grid.
- **Use Case**: Master landing pages, "Platform Trust" sections, or any viewport requiring simultaneous display of quantitative (4.8/5) and qualitative (quotes) validation.
- **Visual Style**: Sophisticated "Gradient-Horizon" architecture featuring a layered background (Accent to Background). Includes a 2-column header (Left: Typographic summary, Right: High-fidelity rating blocks with corporate logos and amber stars). Features a high-density masonry grid for individual testimonials with integrated bottom-fade protectors.
- **Interactivity**: Selective child-hiding logic (`[&>div:nth-child(n+5)]:hidden`) to maintain vertical balance across varying breakpoints (Mobile/Tablet/Desktop).

## Description
Testimonial 11 is the "Trust Authority" component. It prioritizes the "Market Leadership" brand archetype by providing a massive, data-rich validation section that leaves no room for doubt. The combination of industry-standard logos (e.g., Supabase, Astro) with high star ratings and a literal "Wall of Love" (masonry grid) creates an overwhelming sense of institutional and community approval. It is the most comprehensive choice for anchor sections on enterprise-scale architectural sites.

## Source Code

```tsx
"use client";

import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    id: "testimonial-1",
    text: "The architectural integrity of this system has transformed our throughput. Modular, performant, and elite.",
    name: "Sarah Montgomery",
    company: "Infrastructure Lab",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
  },
  {
    id: "testimonial-2",
    text: "Zero hydration errors. Perfectly optimized.",
    name: "Alex Morgan",
    company: "Systems Inc.",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-8.jpg",
  },
  {
    id: "testimonial-3",
    text: "Finally, a framework that respects the nuance of typography and spacing at scale.",
    name: "John Doe",
    company: "Design Core",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
  },
  {
    id: "testimonial-4",
    text: "DX is unmatched in the Payload ecosystem.",
    name: "Jane Smith",
    company: "Vibe Systems",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
  },
  {
    id: "testimonial-5",
    text: "A masterclass in modular UI design.",
    name: "Richard Doe",
    company: "Component Lab",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
  },
];

interface Testimonial11Props {
  className?: string;
}

const Testimonial11 = ({ className }: Testimonial11Props) => {
  return (
    <section
      className={cn(
        "relative bg-accent bg-gradient-to-b from-accent to-background py-24 lg:py-32",
        className,
      )}
    >
      <div className="container pb-16 px-4 md:px-6">
        <div className="flex flex-col items-start gap-12 sm:flex-row sm:items-center sm:justify-between lg:gap-32">
          <div className="flex flex-1 flex-col items-start text-left space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-5xl uppercase">
                Industry Standard
            </h2>
            <p className="max-w-xl text-lg font-medium leading-relaxed text-muted-foreground">
                Join 500+ production teams who have fundamentally upgraded their architectural baseline.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12 lg:gap-24 shrink-0">
            {/* Rating Hub 1 */}
            <div className="inline-block">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg"
                alt="Partner Logo"
                className="mb-6 h-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all dark:invert"
              />
              <div className="flex items-center gap-4">
                <div className="text-sm font-bold tracking-widest text-primary">4.9 / 5.0</div>
                <div className="flex items-center gap-0.5">
                  {[1,2,3,4,5].map(i => <Star key={i} className="size-4 fill-primary stroke-none" />)}
                </div>
              </div>
            </div>
            {/* Rating Hub 2 */}
            <div className="inline-block">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/supabase-wordmark.svg"
                alt="Partner Logo"
                className="mb-6 h-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all dark:invert"
              />
              <div className="flex items-center gap-4">
                <div className="text-sm font-bold tracking-widest text-primary">4.8 / 5.0</div>
                <div className="flex items-center gap-0.5">
                    {[1,2,3,4,5].map(i => <Star key={i} className="size-4 fill-primary stroke-none" />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-16 sm:mt-0 px-4 md:px-6">
        <div className="w-full columns-1 gap-6 sm:columns-2 lg:columns-3 [&>div:nth-child(n+5)]:hidden sm:[&>div:nth-child(n+5)]:inline-block sm:[&>div:nth-child(n+7)]:hidden lg:[&>div:nth-child(n+7)]:inline-block lg:[&>div:nth-child(n+10)]:hidden">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="mb-6 inline-block w-full rounded-[2rem] border border-border/50 bg-card/50 p-8 shadow-xl shadow-black/5 hover:bg-card hover:border-primary/20 transition-all group"
            >
              <div className="flex flex-col gap-6">
                <q className="text-sm font-medium leading-relaxed text-muted-foreground italic group-hover:text-foreground transition-colors">&ldquo;{testimonial.text}&rdquo;</q>
                <div className="flex items-center gap-4">
                  <Avatar className="size-10 border-2 border-background shadow-lg transition-transform group-hover:scale-110">
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback className="font-bold bg-muted">{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="text-left leading-none space-y-1">
                    <p className="text-sm font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-primary/70">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom Cinematic Protector */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-full bg-linear-to-t from-background to-transparent z-20" />
    </section>
  );
};

export { Testimonial11 };
```
