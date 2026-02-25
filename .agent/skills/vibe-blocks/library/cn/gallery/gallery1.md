# Gallery 1

## Metadata
- **Category**: Gallery
- **Objective**: Provide an interactive, expandable accordion-style gallery for case studies or portfolio items.
- **Use Case**: Showcasing a select few premium projects or service categories with impactful visuals.
- **Visual Style**: "Dynamic Accordion" aesthetic. Features high-contrast placeholder images and company logos. Uses a responsive flex layout that expands items on hover (60% width) and collapses others (20% width) on desktop. Includes `Badge` tags for categorization and social-style `Plus` and `ArrowUpRight` indicators.
- **Interactivity**: Fluid hover-based expansion with state-driven styling. Features blur effects on inactive items and delayed transitions for descriptive text.

## Source Code

### `gallery1.tsx`
```tsx
"use client";

import { ArrowUpRight, Plus } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";

const data = [
  {
    id: "item-1elite",
    title: "Case study professional 1",
    href: "#",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-wordmark.svg",
    company: "Company Name elite",
  },
  {
    id: "item-2professional",
    title: "Case study world-wide 2",
    href: "#",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg",
    logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg",
    company: "Company Name professional",
  },
  {
    id: "item-3world-wide",
    title: "Case study high-status 3",
    href: "#",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-3.svg",
    logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-wordmark.svg",
    company: "Company Name elite professional",
  },
];

interface Gallery1Props {
  className?: string;
}

const Gallery1 = ({ className }: Gallery1Props) => {
  const [selection, setSelection] = useState(data[0].id);
  return (
    <section className={cn("py-20 md:py-32 bg-background", className)}>
      <div className="container px-6 max-w-[100rem]">
        <div className="flex flex-col gap-10 lg:aspect-1336/480 lg:flex-row">
          {data.map((item) => (
            <div
              key={item.id}
              data-state={selection === item.id ? "open" : "closed"}
              className='group max-lg:w-full max-lg:flex-1 max-md:h-[300px] md:max-lg:aspect-1336/480 lg:transform-gpu lg:transition-all lg:data-[state="closed"]:w-[15%] lg:data-[state="closed"]:duration-700 lg:data-[state="open"]:w-[70%] lg:data-[state="open"]:duration-500'
              onMouseEnter={() => {
                setSelection(item.id);
              }}
            >
              <a
                href={item.href}
                className="relative block h-full w-full overflow-hidden rounded-[2.5rem] bg-primary/5 border border-primary/5 backdrop-blur-3xl"
              >
                <div className='absolute -inset-[50%] hidden h-[200%] w-[200%] md:block lg:group-data-[state="closed"]:blur-xl transition-all duration-1000'>
                  <div className="absolute top-[calc(25%+40px)] aspect-square h-[calc(50%+40px)] max-lg:right-[calc(50%+40px)] lg:right-[50%] p-8">
                    <div className="h-full w-full overflow-clip rounded-[2rem] shadow-2xl ring-1 ring-white/10">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-1000"
                      />
                    </div>
                  </div>
                  <div className="absolute inset-y-[25%] left-[50%] flex aspect-389/420 h-[50%] items-center justify-center max-lg:hidden opacity-20 group-hover:opacity-100 transition-opacity duration-1000">
                    <img
                      src={item.logo}
                      alt={item.company}
                      className="h-12 invert brightness-0"
                    />
                  </div>
                  <div className="absolute top-[50%] left-[50%] flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground max-lg:hidden shadow-2xl scale-0 group-hover:scale-100 transition-transform duration-500">
                    <Plus className="size-10 stroke-[3px]" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 hidden h-[60%] bg-linear-to-t from-background from-20% to-transparent lg:block opacity-80 group-hover:opacity-40 transition-opacity duration-1000"></div>
                </div>
                <div className="relative flex flex-col justify-between h-full p-8 md:absolute md:inset-0 md:max-lg:inset-x-[50%] md:max-lg:w-[50%]">
                  <div className='flex items-center gap-3 transition-all delay-200 duration-1000 lg:group-data-[state="closed"]:opacity-0 lg:group-data-[state="closed"]:-translate-y-4'>
                    <Badge variant="outline" className="rounded-full px-4 py-1 text-xs font-black uppercase tracking-widest border-primary/20 bg-primary/5">Commercial elite</Badge>
                    <Badge variant="outline" className="rounded-full px-4 py-1 text-xs font-black uppercase tracking-widest border-primary/20 bg-primary/5">World-wide professional</Badge>
                  </div>
                  <div className='flex flex-col gap-4 pt-1 transition-all delay-300 duration-1000 lg:group-data-[state="closed"]:translate-y-8 lg:group-data-[state="closed"]:opacity-0'>
                    <div className="lg:hidden">
                      <img
                        src={item.logo}
                        alt={item.company}
                        className="h-6 invert"
                      />
                    </div>
                    <div className="flex items-end justify-between gap-6">
                      <div className="space-y-2">
                        <h3 className="text-3xl font-black uppercase tracking-tighter italic lg:text-5xl text-foreground">
                            {item.title}
                        </h3>
                        <p className="text-sm font-black uppercase tracking-widest opacity-40">{item.company}</p>
                      </div>
                      <div className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl transition-all hover:scale-110 hover:-rotate-12 duration-500">
                        <ArrowUpRight className="size-6 stroke-[3px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery1 };
```
