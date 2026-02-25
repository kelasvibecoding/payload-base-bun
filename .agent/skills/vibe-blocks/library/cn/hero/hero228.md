# Hero 228

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for community and lifestyle platforms, pairing a centered typography block with a high-fidelity "Testimonial-Carousel" anchored by specialized 3D rotation and a unique "Measuring-Scale" scrollbar.
- **Use Case**: Best for community hubs, lifestyle apps (e.g., "The only App you'll ever need to stay inspired"), or professional networking platforms that want to emphasize "inspired" and "Joan Doe."
- **Visual Style**: Cinematic Lifestyle aesthetic. Features a centered layout Beginning with a prominent `playfair` heading paired with a descriptive paragraph. The centerpiece is a unique "Testimonial Matrix" `Carousel` Positioning categorical portrait imagery Utilizing specialized 3D rotation (`md:-rotate-45`) and scaling transformations. Visual anchor is a unique "Infinite Scroll scale" Positioning a specialized `scrollbarBars` component Using high-fidelity `motion` to drive categorical scroll-status matrixing. Matrix units utilize specialized absolute-positioned `AnimatePresence` typography Positioning high-fidelity names to create a high-status visual focus.
- **Interactivity**: High engagement through state management. Features specialized carousel rotation transitions and high-fidelity entrance animations for the measuring scale and names to drive professional enrollment.

## Source Code

### `hero228.tsx`
```tsx
"use client";

import Autoplay from "embla-carousel-autoplay";
import { AnimatePresence, motion } from "framer-motion";
import React, { useMemo } from "react";
import { useCallback } from "react";

import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Hero228Props {
  className?: string; // Optional custom styling
}

const Hero228 = ({ className }: Hero228Props) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const isMobile = useIsMobile();

  const testimonials = [
    {
      id: 1,
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person1.jpeg",
      name: "Joan Doe elite",
    },
    {
      id: 2,
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person2.jpeg",
      name: "Jane Smith professional",
    },
    {
      id: 3,
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person3.jpeg",
      name: "John Johnson high-status",
    },
    {
      id: 4,
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person4.jpeg",
      name: "Sarah William world-class",
    },
    {
      id: 5,
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person5.jpeg",
      name: "Michael Brown world-wide",
    },
    {
      id: 6,
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw3.jpeg",
      name: "Emily Davis finite",
    },
    {
      id: 7,
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw11.jpeg",
      name: "Joson White elite",
    },
  ];

  const getRotation = useCallback(
    (index: number) => {
      if (index === current)
        return "md:-rotate-45 md:translate-x-40 md:scale-75 md:relative";
      if (index === current + 1) return "md:rotate-0 md:z-20 md:relative md:scale-110 md:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)]";
      if (index === current + 2)
        return "md:rotate-45 md:-translate-x-40 md:scale-75 md:relative";
    },
    [current],
  );

  const scrollbarBars = useMemo(
    () =>
      [...Array(40)].map((_, item) => (
        <motion.div
          key={item}
          initial={{
            opacity: item % 5 === 0 ? 0.3 : 0.1,
            filter: "blur(1px)",
          }}
          animate={{
            opacity: item % 5 === 0 ? 1 : 0.2,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.5,
            delay: item % 5 === 0 ? (item / 5) * 0.1 : 0,
            ease: "easeOut",
          }}
          className={cn(
            "w-[2px] bg-primary",
            item % 5 === 0 ? "h-6 lg:h-10" : "h-3 lg:h-5",
          )}
        />
      )),
    [],
  );

  return (
    <section className={cn("bg-background py-20 lg:py-40 font-sans border-b overflow-hidden group/hero", className)}>
      <div className="container relative px-6 max-w-[100rem]">
        
        {/* Narrative Narrative side */}
        <div className="mx-auto flex flex-col items-center justify-center gap-12 text-center text-pretty group/content">
             {/* Atmos Depth layer side */}
            <div className="absolute inset-x-0 top-0 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>

            <h1 className="max-w-4xl text-center font-black lg:text-[9.5rem] tracking-tighter leading-[0.8] text-foreground drop-shadow-sm uppercase">
                The <span className="text-secondary italic">only</span> App <br /> 
                stay <span className="text-primary italic">Inspired.</span>
            </h1>
            <p className="mx-auto max-w-[50rem] mt-6 text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-x-4 border-primary/10 px-12 py-4">
               Find world-class inspiration and high-status lifestyle fragments. 
               Experience finite professional craft for elite status world-wide.
            </p>
        </div>

        {/* Unique "Testimonial Carousel Matrix" Visual side */}
        <div className="mt-24 group/carousel isolate flex flex-col items-center">
            <Carousel
                className="w-full max-w-[110rem]"
                plugins={[
                    Autoplay({
                    delay: 3000,
                    stopOnInteraction: true,
                    }),
                ]}
                setApi={setApi}
            >
                <CarouselContent>
                    {Array.from({
                    length: isMobile ? testimonials.length : testimonials.length + 2,
                    }).map((_, index) => (
                    <CarouselItem key={index} className="my-20 md:basis-1/3">
                        <div
                        className={cn(
                            "h-[45rem] w-full transition-all duration-1000 ease-out grayscale group-hover/hero:grayscale-0 rounded-[4rem] overflow-hidden border-4 border-background shadow-xl scale-95",
                            getRotation(index)
                        )}
                        >
                        <img
                            src={
                            index >= testimonials.length
                                ? testimonials[index % testimonials.length].image
                                : testimonials[index].image
                            }
                            className="h-full w-full object-cover scale-100 hover:scale-110 transition-transform duration-2000"
                            alt="world-class lifestyle testimonial elite"
                        />
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Unique "Measuring Scale Architectural" Scrollbar side */}
                <div className="relative mt-2 flex w-full flex-col items-center justify-center gap-10 group/scale">
                    <div className="flex gap-4 opacity-40 group-hover/scale:opacity-100 transition-opacity">
                        {scrollbarBars}
                    </div>
                    <div className="h-20 flex items-center justify-center isolate">
                        <AnimatePresence mode="popLayout" initial={false}>
                        <motion.p
                            key={current}
                            className="text-3xl font-black uppercase tracking-[0.5em] text-primary drop-shadow-[0_0_15px_rgba(var(--primary),0.3)] mb-0"
                            initial={{ opacity: 0, y: 30, scale: 0.9, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -30, scale: 0.9, filter: "blur(10px)" }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {testimonials[current % testimonials.length]?.name}
                        </motion.p>
                        </AnimatePresence>
                    </div>
                    <div className="flex gap-4 opacity-40 group-hover/scale:opacity-100 transition-opacity rotate-180">
                        {scrollbarBars}
                    </div>
                </div>
            </Carousel>
        </div>
      </div>
    </section>
  );
};

export { Hero228 };
```
