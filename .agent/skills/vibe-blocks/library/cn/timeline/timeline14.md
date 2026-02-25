# Timeline 14

## Metadata
- **Category**: Timeline
- **Objective**: Display a vertical timeline with scroll-activated active section highlighting.
- **Use Case**: Company journey timeline showing foundation, product launch, funding, and global expansion phases.
- **Visual Style**: Vertical timeline with sticky date indicator, scroll-activated active section highlighting, and image-text pairs for each phase.
- **Interactivity**: Scroll-activated active section highlighting that updates as users scroll through the timeline.

## Description
A vertical timeline for company journey showing four phases: Company Foundation (2020), First Product Launch (2021), Series A Funding (2022), and Global Expansion (2023). Features sticky date indicator at the top, scroll-activated active section highlighting, and image-text pairs for each phase that become fully opaque when in view.

## Source Code
```tsx
"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const data = [
  {
    title: "Company Foundation",
    description:
      "Started our journey with a simple idea: make technology accessible to everyone. What began as a small team of three developers in a garage has now become the foundation of our mission to democratize software development.",
    date: "2020",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    title: "First Product Launch",
    description:
      "After months of development, we launched our first product to the public. The response was overwhelming - 10,000 users signed up in the first week, validating our vision and giving us the confidence to scale further.",
    date: "2021",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
  },
  {
    title: "Series A Funding",
    description:
      "Secured our Series A round led by prominent VCs who believed in our mission. This funding allowed us to expand our team, invest in R&D, and prepare for international expansion.",
    date: "2022",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
  },
  {
    title: "Global Expansion",
    description:
      "Opened offices in London, Tokyo, and São Paulo, marking our transition from a local startup to a global technology company. Our platform now serves over 500,000 users across 50 countries.",
    date: "2023",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
  },
];

interface Timeline14Props {
  className?: string;
}

const Timeline14 = ({ className }: Timeline14Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = itemRefs.current.findIndex(
            (ref) => ref === entry.target,
          );
          if (index !== -1) {
            setActiveIndex(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    itemRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <h1 className="max-w-4xl text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
          <span className="font-medium">From Startup to Global Platform</span>
          <br />
          <span className="text-muted-foreground"> Our Journey</span>
        </h1>
      </div>
      <div className="relative mt-16 lg:mt-28">
        <div className="sticky top-0 z-10 border-y bg-background py-3.5">
          <div className="container">
            <div className="flex justify-between gap-4 text-2xl md:text-4xl">
              <p className="font-mono text-muted-foreground">
                {String(activeIndex + 1).padStart(2, "0")}
              </p>
              <p className="font-mono">{data[activeIndex]?.date}</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="flex flex-col">
            {data.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className={cn(
                  "flex flex-col items-center gap-7 py-14 opacity-50 transition-opacity duration-300 md:flex-row md:gap-10 md:py-20",
                  index === activeIndex && "opacity-100",
                )}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="aspect-[16/12] rounded-lg border object-cover md:w-1/3 md:max-w-[440px]"
                />
                <div>
                  <h2 className="mb-3 text-2xl font-medium md:mb-4 md:text-4xl">
                    {item.title}
                  </h2>
                  <p className="text-muted-foreground md:text-balance">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Timeline14 };
```
