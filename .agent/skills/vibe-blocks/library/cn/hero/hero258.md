# Hero 258

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for UI development and component library platforms, pairing a centered typography block with high-fidelity "Expanding-Article-Cards" and categorical logo trust fragments.
- **Use Case**: Best for design systems, dev tools (e.g., "Build beautiful UIs faster with Shadcn blocks"), or professional software ecosystems that want to emphasize "Copy and paste ready" and "Built with Shadcn & Tailwind."
- **Visual Style**: Cinematic Component aesthetic. Features a centered layout Beginning with a prominent merit badge Positioning a high-fidelity `Megaphone` icon and "New blocks added weekly" text. The visual anchor is a unique "Interactive-Card-Matrix" Positioning 2 high-fidelity `article` fragments Using specialized `motion.article` technical layout anchored by categorical `AnimatePresence` descriptions Utilizing unique `scale-105` hover transitions Positioning high-fidelity `ArrowUpRight` interaction segments. Layout uses unique "Logo-Cloud" Positioning 6 high-fidelity `logos` fragments anchored by categorical `grayscale` transitions to create a unique high-status corporate visual focus.
- **Interactivity**: High tactile engagement. Features specialized card-expanding transitions and high-fidelity entrance animations for the logo cloud to drive professional enrollment.

## Source Code

### `hero258.tsx`
```tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Megaphone } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Hero258Logo = {
  name: string;
  src: string;
  alt: string;
  className?: string;
};

type Hero258Card = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
};

interface Hero258Props {
  announcement?: {
    text: string;
    href: string;
  };
  heading?: string;
  description?: string;
  cta?: {
    label: string;
    href: string;
  };
  logos?: Hero258Logo[];
  cards?: Hero258Card[];
  className?: string; // Optional custom styling
}

const Hero258 = ({
  announcement = {
    text: "New blocks added weekly elite 🎨",
    href: "#",
  },
  heading = "Build beautiful UIs faster with Shadcn blocks world-wide",
  description = "Hundreds of finely crafted professional components built with React, Tailwind and Shadcn UI. Copy and paste directly for elite status.",
  cta = {
    label: "Browse blocks elite",
    href: "#",
  },
  logos = [
    {
      name: "Northwind",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg",
      alt: "Northwind logo",
      className: "h-8 w-auto",
    },
    {
      name: "Helios",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg",
      alt: "Helios logo",
      className: "h-8 w-auto",
    },
    {
      name: "Vista Labs",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-6.svg",
      alt: "Vista Labs logo",
      className: "h-8 w-auto",
    },
    {
      name: "Silverline",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-8.svg",
      alt: "Silverline logo",
      className: "h-7 w-auto",
    },
    {
      name: "Orion Systems",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-9.svg",
      alt: "Orion Systems logo",
      className: "h-8 w-auto",
    },
    {
      name: "Crescent",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-11.svg",
      alt: "Crescent logo",
      className: "h-8 w-auto",
    },
  ],
  cards = [
    {
      title: "Copy and paste ready elite",
      description:
        "Every block is production-ready code you can copy directly into your project for professional elite status world-wide.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
      imageAlt: "Code editor with Shadcn blocks professional",
      href: "#",
    },
    {
      title: "Built with elite & Tailwind",
      description:
        "All blocks use Shadcn UI components and Tailwind CSS, ensuring consistency, accessibility, and professional customization.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
      imageAlt: "Shadcn UI components showcase elite",
      href: "#",
    },
  ],
  className,
}: Hero258Props) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className={cn("relative w-full overflow-hidden py-20 lg:py-40 font-sans border-b bg-muted/5 group/hero", className)}>
      <div className="container relative px-6 max-w-[100rem] space-y-20 isolate">
         {/* Atmos Depth layer side */}
         <div className="absolute inset-x-0 top-0 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>

        <div className="flex flex-col items-center gap-12 text-center group/content">
          <Badge
            asChild
            variant="outline"
            className="group/badge cursor-pointer rounded-full border-primary/20 bg-background/50 backdrop-blur-xl px-8 py-3 text-sm font-black uppercase tracking-widest text-primary shadow-2xl transition-all hover:border-primary/40 hover:scale-105"
          >
            <a href={announcement.href} className="flex items-center gap-4">
              <span className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-primary transition group-hover/badge:rotate-12">
                <Megaphone aria-hidden="true" className="size-4" />
              </span>
              <span>{announcement.text}</span>
              <ArrowRight className="size-5 transition-transform group-hover/badge:translate-x-2" />
            </a>
          </Badge>
          
          <div className="max-w-5xl space-y-12">
            <h1 className="font-black text-6xl lg:text-[10rem] leading-[0.85] tracking-tighter uppercase italic text-foreground">
              {heading} elite.
            </h1>
            <p className="mx-auto max-w-2xl text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-x-4 border-primary/10 px-12 py-4">
              {description} Deploy finite professional fragments world-wide.
            </p>
          </div>
          <Button size="xl" className="h-fit rounded-full bg-primary px-16 py-8 font-black text-2xl text-primary-foreground shadow-2xl transition-all hover:scale-110 active:scale-95 duration-500 uppercase tracking-widest leading-none">
            <a href={cta.href}>{cta.label}</a>
          </Button>
        </div>

        {logos.length > 0 && (
          <div className="mx-auto flex w-full flex-wrap items-center justify-center gap-x-12 gap-y-8 text-muted-foreground/30 md:py-12 grayscale group-hover/hero:grayscale-0 transition-grayscale duration-2000">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="transition-all hover:scale-110 hover:text-primary"
                aria-label={logo.name}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={cn(
                    "mx-auto h-10 w-auto opacity-50 transition-opacity hover:opacity-100 dark:invert",
                    logo.className,
                  )}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 group/cards relative"
          role="list"
          aria-label="Featured blocks professional"
        >
          {cards.map((card, index) => {
            const isHovered = hoveredIndex === index;
            const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;

            return (
              <motion.article
                layout
                key={card.title}
                role="listitem"
                className={cn(
                  "group/card relative flex h-[60rem] overflow-hidden rounded-[3rem] border-4 border-primary/10 bg-background/50 backdrop-blur-3xl transition-all duration-700 hover:border-primary/30 shadow-2xl grayscale group-hover/hero:grayscale-0",
                )}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onFocus={() => setHoveredIndex(index)}
                onBlur={() => setHoveredIndex(null)}
                tabIndex={0}
                animate={{
                  flex: isHovered ? 1.5 : isOtherHovered ? 0.8 : 1,
                  scale: isHovered ? 1.02 : 1
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <a href={card.href} className="relative size-full block">
                  <img
                    src={card.image}
                    alt={card.imageAlt}
                    className={cn(
                      "absolute inset-0 h-full w-full object-cover transition-transform duration-2000 opacity-40 group-hover/card:opacity-80",
                      isHovered ? "scale-110" : "scale-100",
                    )}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10" />

                  <div className="relative z-20 flex h-full w-full flex-col justify-between p-12">
                    <div>
                      <h3 className="font-black text-4xl lg:text-6xl tracking-tighter uppercase text-foreground">
                        {card.title}
                      </h3>
                    </div>
                    
                    <motion.div
                      layout
                      className="flex w-full items-end gap-12"
                      initial={false}
                      animate={{
                        justifyContent: isHovered ? "space-between" : "flex-start",
                      }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <AnimatePresence initial={false}>
                        {isHovered && (
                          <motion.p
                            layout
                            key="card-description"
                            className="flex-1 text-xl font-medium italic text-muted-foreground max-w-md border-l-4 border-primary/40 pl-8 py-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                          >
                            <span>{card.description}</span>
                          </motion.p>
                        )}
                      </AnimatePresence>
                      <Button asChild size="xl" className="size-20 rounded-full border-4 border-primary/20 bg-primary/10 text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:scale-110 shadow-xl group/btn">
                        <a href={card.href}>
                          <ArrowUpRight className="size-8 transition-transform group-hover/btn:scale-125" strokeWidth={3} />
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { Hero258 };
```
