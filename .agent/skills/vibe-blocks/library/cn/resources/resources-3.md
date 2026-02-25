# Resources 3

## Metadata
- **Category**: Resources
- **Objective**: Provide a minimalist, text-heavy professional directory for articles and service-based resources.
- **Use Case**: Legal, professional documentation, or academic catalogs where visual clarity and typographic hierarchy take precedence over high-impact imagery.
- **Visual Style**: Structured professional layout featuring a rounded "Featured Action" banner with a high-contrast button and a secondary image block. Followed by a wide-format text feed where horizontal entries are segmented into distinct columns for Date, Category, and Title.
- **Interactivity**: Primary-action "Read more" hover transitions with sliding icon animations, alongside clean horizontal list item hover highlight effects.

## Description
Resources 3 is the "Documentation Index" template. It prioritizes information density and predictable structure. The featured banner acts as a strong "Call to Value" for a primary whitepaper, while the article feed below uses a tabular typographic style to help users scan through dates and categories quickly. It is ideal for repositories of technical standards, law updates, or architectural patterns.

## Source Code

```tsx
"use client";

import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface FeaturedPostData {
  title: string;
  imageUrl: string;
  link: string;
}

const FEATURED_POST: FeaturedPostData = {
  title: "Professional Standards for UI Component Architecture in 2025",
  imageUrl: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
  link: "#",
};

const ARTICLES = [
  {
    date: "Jan 02, 2025",
    category: "Design Systems",
    link: "#",
    title: "Mastering Reusable UI Block Patterns in React Applications",
  },
  {
    date: "Jan 04, 2025",
    category: "Best Practices",
    link: "#",
    title: "10 Common Mistakes to Avoid When Building UI Components",
  },
  {
    date: "Jan 06, 2025",
    category: "Components",
    link: "#",
    title: "A Step-by-Step Guide to Creating Flexible Card Blocks",
  },
  {
    date: "Jan 08, 2025",
    category: "Accessibility",
    link: "#",
    title: "Ensuring Accessibility in Custom UI Block Components",
  },
];

interface Resources3Props {
  className?: string;
}

const Resources3 = ({ className }: Resources3Props) => {
  return (
    <section className={cn("py-32 bg-background font-sans", className)}>
      <div className="container max-w-6xl">
        <FeaturedPost {...FEATURED_POST} />
        
        <div className="flex w-full flex-col gap-6">
          <h2 className="mt-20 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Resource Directory
          </h2>
          <div className="border-t border-border">
            {ARTICLES.map((article, index) => (
              <a
                href={article.link}
                key={index}
                className="group block w-full border-b border-border transition-colors hover:bg-muted/30"
              >
                <div className="flex flex-col items-baseline justify-between gap-4 py-8 text-foreground md:flex-row md:gap-12 px-2">
                  <div className="basis-1/5 text-sm font-bold text-muted-foreground tabular-nums">
                    {article.date}
                  </div>
                  <div className="basis-1/5">
                    <Badge variant="outline" className="font-bold border-primary/20 text-primary uppercase text-[10px] tracking-widest">
                      {article.category}
                    </Badge>
                  </div>
                  <div className="basis-3/5 text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {article.title}
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
             <Button variant="ghost" className="font-bold text-muted-foreground hover:text-primary">
                View Archive <ArrowRight className="ml-2 size-4" />
             </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturedPost = ({ title, imageUrl, link }: FeaturedPostData) => {
  return (
    <div className="flex flex-col justify-between overflow-hidden gap-10 rounded-3xl bg-muted/30 border border-border p-10 xl:flex-row hover:border-primary/20 transition-all shadow-sm">
      <div className="basis-full flex flex-col justify-center lg:basis-1/2">
        <div className="flex flex-col gap-8">
          <Badge className="w-fit bg-primary/10 text-primary border-primary/20 font-bold px-4 py-1.5 rounded-full">
            Featured Document
          </Badge>
          <h2 className="text-3xl leading-[1.1] font-bold text-foreground md:text-5xl lg:text-6xl tracking-tight">
            {title}
          </h2>
          <div>
            <Button
              asChild
              className="group relative h-14 !px-8 rounded-2xl font-bold shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95"
            >
              <a href={link}>
                Access Document
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="basis-full lg:basis-1/2">
        <div className="mx-auto aspect-[1.5] w-full max-w-[42rem] overflow-hidden rounded-2xl shadow-2xl border border-white/10">
          <img
            src={imageUrl}
            alt={title}
            className="block size-full object-cover transition-transform duration-700 hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export { Resources3 };
```
