# Testimonial 30

## Metadata
- **Category**: Testimonial
- **Objective**: Provide an interactive "Accordion Spotlight" that simultaneously lists multiple clients while reserving a large, dedicated focal area for expanding the active quote and imagery.
- **Use Case**: Deep-dive product pages or feature sections where the user needs to manually explore different B2B use cases (e.g., "See how Design Teams use it" vs "See how Engineers use it").
- **Visual Style**: Complex "Split-Interaction" architecture. The left column operates as a vertical `Accordion` menu (`type="single"`), listing company logos, names, and a top-line outcome. When expanded, the right column (`AccordionContent`) dominates the layout, displaying a large portrait `img` (`aspect-square`), the company `wordmark`, a large serif quote (`font-hedvigLettersSerif`), and author metadata. Concludes with an animated `Progress` bar.
- **Interactivity**: Dual-driven progression. The user can manually click `AccordionItem` triggers to view specific stories, OR allow the custom `setInterval` ($5000ms$) to auto-advance through the list. The `Progress` bar provides visual feedback on the cycle duration.

## Description
Testimonial 30 is the "Interactive Case Study Explorer". It prioritizes the "Curated Validation" brand archetype by organizing complex, multi-point feedback into an easily digestible menu. Instead of forcing the user to wait for a carousel to arrive at the desired company, the accordion structure puts the navigational power back in the user's hands. It is an exceptional choice for B2B platforms that serve multiple distinct verticals, allowing the company to showcase diverse proof points simultaneously.

## Source Code

```tsx
"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const testimonials = [
  {
    company: "Descript",
    logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/icons/descript.svg",
    wordmark: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg",
    author: "Samantha Lee",
    role: "Productivity Coach",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/portraits/alexander-hipp-iEEBWgY_6lA-unsplash.jpg",
    quote:
      "“This architecture transformed my daily deployments. The intuitive file routing and built-in CLI commands keep our momentum going.”",
    outcome: (
      <p className="text-muted-foreground/80 font-medium">
        Completed{" "}
        <span className="font-bold text-foreground">
          12 major migrations in 30 days
        </span>
      </p>
    ),
  },
  {
    company: "Ramp",
    logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/icons/ramp.svg",
    wordmark: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg",
    author: "Carlos Rivera",
    role: "Freelance Designer",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/portraits/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg",
    quote:
      "“With this toolset, I finally have a clear overview of my design system. The absolute consistency across Shadcn components is a game changer for UI scaling.”",
    outcome: (
      <p className="text-muted-foreground/80 font-medium">
        Increased sprint delivery by{" "}
        <span className="font-bold text-foreground">40% in one quarter</span>
      </p>
    ),
  },
  {
    company: "Watershed",
    logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/icons/watershed.svg",
    wordmark: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-6.svg",
    author: "Priya Patel",
    role: "Operations Lead",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/portraits/nima-motaghian-nejad-_omdf_EgRUo-unsplash.jpg",
    quote:
      "“The Payload CMS integration saves me hours every week. I can focus on scaling features instead of fighting brittle type definitions, thanks to this product.”",
    outcome: (
      <p className="text-muted-foreground/80 font-medium">
        Saved over 30 hours,{" "}
        <span className="font-bold text-foreground">
          reduced admin overhead by 60%
        </span>
      </p>
    ),
  },
];

interface Testimonial30Props {
  className?: string;
}

const Testimonial30 = ({ className }: Testimonial30Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setProgress(0);
    }, 6000);
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) return 0;
        return prevProgress + 1.66; // Matches the ~6000ms duration
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [currentIndex]);

  return (
    <section className={cn("py-24 lg:py-32", className)}>
      <div className="container px-4 md:px-6">
        
        {/* Header Content */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tighter md:text-6xl text-foreground uppercase leading-none">
              Vertical Proof
            </h2>
            <p className="text-lg font-medium text-muted-foreground leading-relaxed max-w-xl">
              See how different departments utilize our standard primitives to exponentially increase their shipping velocity.
            </p>
          </div>
          <Button variant="outline" size="lg" className="rounded-full font-bold border-border/50 bg-background/50 hover:bg-card shadow-sm h-12 px-8">
            Read Comprehensive Reviews
          </Button>
        </div>

        {/* Dynamic Accordion Explorer */}
        <div className="rounded-[2.5rem] border border-border/50 bg-card/40 p-4 md:p-8 shadow-2xl shadow-black/5">
          <Accordion
            type="single"
            collapsible
            value={currentIndex.toString()}
            onValueChange={(value) => {
              if (value) {
                const index = parseInt(value);
                setCurrentIndex(index);
                setProgress(0);
                startTimer();
              }
            }}
            className="w-full space-y-4"
          >
            {testimonials.map((testimonial, index) => (
              <AccordionItem
                key={index}
                value={index.toString()}
                className={cn(
                  "items-center rounded-2xl border px-6 transition-all duration-300",
                  currentIndex === index
                    ? "border-primary/20 bg-card shadow-lg shadow-black/5"
                    : "border-border/50 bg-background/50 hover:bg-card/80"
                )}
              >
                <AccordionTrigger className="hover:no-underline py-6 [&[data-state=open]>div>div>span]:bg-primary [&[data-state=open]>div>div>span>img]:invert-0 [&[data-state=open]>div>p]:text-foreground [&[data-state=open]]:cursor-default">
                  <div className="flex flex-1 items-center gap-6">
                    <div className="flex w-fit md:w-1/3 items-center gap-5">
                      <span className="flex size-14 items-center justify-center rounded-2xl bg-muted transition-colors duration-300 shadow-inner">
                        <img
                          src={testimonial.logo}
                          alt={testimonial.company}
                          className="h-6 transition-all duration-300 opacity-60 dark:opacity-100 dark:invert"
                        />
                      </span>
                      <p className="text-xl font-bold tracking-tight text-muted-foreground transition-colors duration-300">
                        {testimonial.company}
                      </p>
                    </div>
                    <div className="hidden text-sm uppercase tracking-widest font-bold md:block text-muted-foreground/80">
                      {testimonial.outcome}
                    </div>
                  </div>
                </AccordionTrigger>
                
                <AccordionContent className="flex flex-col gap-10 px-0 py-6 md:flex-row md:items-start lg:gap-16 lg:px-6">
                  <div className="shrink-0">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      width={240}
                      height={240}
                      className="aspect-square w-full max-w-[240px] rounded-3xl object-cover shadow-xl grayscale contrast-125 hover:grayscale-0 transition-all duration-500 border-4 border-background"
                    />
                  </div>
                  
                  <div className="flex flex-1 flex-col items-start pt-2">
                    <img
                      src={testimonial.wordmark}
                      alt={testimonial.company}
                      className="h-8 dark:invert opacity-80"
                    />
                    
                    <p className="mt-8 mb-12 max-w-2xl text-2xl md:text-3xl lg:text-4xl text-foreground font-bold leading-tight italic tracking-tight">
                      {testimonial.quote}
                    </p>
                    
                    <div className="flex w-full items-end justify-between mt-auto">
                      <div className="space-y-1">
                        <p className="text-lg font-bold leading-none text-foreground">
                          {testimonial.author}
                        </p>
                        <p className="text-[10px] uppercase font-bold tracking-widest text-primary/70">
                          {testimonial.role} @ {testimonial.company}
                        </p>
                      </div>
                      
                      {/* Active Progress Bar indicator */}
                      {currentIndex === index && (
                        <div className="w-32 bg-muted/50 rounded-full h-1.5 overflow-hidden">
                          <Progress value={progress} className="h-full bg-primary" />
                        </div>
                      )}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export { Testimonial30 };
```
