# Hero 20

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a hybrid informational introduction that syncs an interactive Q&A accordion with a visual carousel.
- **Use Case**: Best for feature-heavy platforms or services with common "FAQ-style" value propositions where you want to show *and* tell simultaneously.
- **Visual Style**: Informational interactive aesthetic. Features a 2-column grid. The left column contains a sophisticated `Accordion` paired with custom icons and custom progress bars (`animate-progress`) that sync with the feature duration. The right column contains a `Carousel` that automatically fades between feature images to match the active accordion state.
- **Interactivity**: High synchronization. Features a timed transition system (`DURATION = 8000`) that automatically cycles through accordion items. Includes a visual progress bar inside active accordion items to signal the next transition. Uses the Embla `Fade` plugin for smooth visual shifts in the carousel.

## Source Code

### `hero20.tsx`
```tsx
"use client";

import Fade from "embla-carousel-fade";
import { CopyCheck, DollarSign, MessagesSquare } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const DURATION = 8000;

const accordions = [
  {
    id: "1",
    question: "Can I use this for commercial projects?",
    icon: <CopyCheck className="w-5" />,
    answer: "Yes, All blocks are yours to use.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
  },
  {
    id: "2",
    question: "Are there any hidden fees?",
    icon: <DollarSign className="w-5" />,
    answer: "No, there are no hidden fees.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
  },
  {
    id: "3",
    question: "Do you provide support?",
    icon: <MessagesSquare className="w-5" />,
    answer: "Yes, we provide support via email.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg",
  },
];

interface Hero20Props {
  className?: string;
}

const Hero20 = ({ className }: Hero20Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [currentAccordion, setCurrentAccordion] = useState("1");

  useEffect(() => {
    api?.scrollTo(+currentAccordion - 1);
    const interval = setInterval(() => {
      setCurrentAccordion((prev) => {
        const next = parseInt(prev) + 1;
        return next > 3 ? "1" : next.toString();
      });
    }, DURATION);

    return () => clearInterval(interval);
  }, [api, currentAccordion]);

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto grid max-w-5xl gap-20 lg:grid-cols-2">
          <div>
            <Badge variant="outline" className="mb-4">
              Platform
            </Badge>
            <h1 className="mb-8 text-3xl font-medium lg:text-5xl font-sans">
              Build your own platform
            </h1>
            <Accordion
              type="single"
              value={currentAccordion}
              onValueChange={(value) => {
                setCurrentAccordion(value);
                api?.scrollTo(+value - 1);
              }}
            >
              {accordions.map((accordion) => (
                <AccordionItem
                  key={accordion.id}
                  value={accordion.id}
                  className="border-b-0"
                >
                  <AccordionTrigger className="text-left data-[state=closed]:text-muted-foreground hover:no-underline">
                    <div className="flex items-center gap-3">
                      <span className="flex size-9 items-center justify-center rounded-lg bg-muted shrink-0 transition-colors group-data-[state=open]:bg-primary group-data-[state=open]:text-primary-foreground">
                        {accordion.icon}
                      </span>
                      <span className="font-semibold lg:text-lg">
                        {accordion.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground lg:text-base pl-12">
                    {accordion.answer}
                    <div className="mt-8 h-px bg-muted overflow-hidden">
                      <div
                        className="h-px animate-progress bg-primary origin-left"
                        style={{
                          animationDuration: `${DURATION}ms`,
                        }}
                      ></div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="relative group">
            <Carousel
              opts={{
                duration: 50,
              }}
              setApi={setApi}
              plugins={[Fade()]}
              className="rounded-2xl overflow-hidden shadow-2xl border"
            >
              <CarouselContent>
                {accordions.map((accordion) => (
                  <CarouselItem key={accordion.id}>
                    <div className="aspect-[4/5] lg:aspect-square">
                      <img
                        src={accordion.image}
                        alt="placeholder"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero20 };
```
