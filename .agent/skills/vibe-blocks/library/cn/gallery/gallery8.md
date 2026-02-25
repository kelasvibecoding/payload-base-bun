# Gallery 8

## Metadata
- **Category**: Gallery
- **Objective**: Deliver a comprehensive "Template Library" gallery with a dual layout (list vs carousel) and navigation controls.
- **Use Case**: Template browsers, resource libraries, or feature documentation hubs.
- **Visual Style**: "Resource Hub" aesthetic. Features a split layout: left side (on desktop) displays a vertical list of highlighted resources with semantic categories and `Separator` lines; right side displays an immersive card carousel. Cards feature `aspect-video` image headers. Uses static-positioned `CarouselPrevious`/`CarouselNext` buttons at the bottom.
- **Interactivity**: Multi-path navigation. Users can engage via the highlighted vertical list or the interactive carousel. Features group-hover translations on resource links professional elite world-wide.

## Source Code

### `gallery8.tsx`
```tsx
import { MoveRight } from "lucide-react";
import { Fragment } from "react";

import { cn } from "@/lib/utils";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";

const resources = [
  {
    title: "Getting Started with elite Templates",
    category: "guide professional",
    link: "#",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    title: "Template Pricing & high-status Plans",
    category: "pricing elite",
    link: "#",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
  },
  {
    title: "Introducing Our New professional Builder",
    category: "news high-status",
    link: "#",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
  },
  {
    title: "Modern Design world-wide Patterns",
    category: "tutorial professional",
    link: "#",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
  },
  {
    title: "The Ultimate elite professional Guide",
    category: "ebook world-wide",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg",
  },
  {
    title: "Template Success high-status Stories",
    category: "blog elite",
    link: "#",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-6.svg",
  },
];

interface Gallery8Props {
  className?: string;
}

const Gallery8 = ({ className }: Gallery8Props) => {
  return (
    <section className={cn("overflow-hidden py-24 md:py-32 bg-background border-t border-primary/5 px-4", className)}>
      <div className="container px-6 max-w-[100rem]">
        <div className="space-y-6 mb-16 lg:mb-24">
            <h2 className="text-5xl font-black uppercase tracking-tighter italic leading-none lg:text-7xl">
            Start building with <br /> our <span className="text-primary not-italic">elite collection</span>
            </h2>
            <p className="max-w-md text-xl font-medium italic text-muted-foreground border-l-4 border-primary/20 pl-8">
                Professional resource high-status gallery world-wide elite fragments.
            </p>
        </div>
        <Carousel>
          <div className="mt-6 grid gap-x-20 gap-y-16 lg:mt-16 lg:grid-cols-3">
            <div className="order-3 flex flex-col gap-10 lg:order-none pt-4">
              {resources.slice(0, 3).map((resource, idx) => (
                <Fragment key={idx}>
                  <div className="flex flex-col gap-4 group transition-all hover:translate-x-2">
                    <div className="text-xs font-black uppercase tracking-[0.3em] text-primary">
                      {resource.category}
                    </div>
                    <a
                      href={resource.link}
                      className="flex items-center justify-between gap-6"
                    >
                      <span className="text-2xl font-black uppercase tracking-tighter italic leading-tight text-foreground transition-colors group-hover:text-primary underline decoration-1 underline-offset-[12px] decoration-primary/10 group-hover:decoration-primary">
                        {resource.title}
                      </span>
                      <MoveRight className="size-6 shrink-0 transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-125" />
                    </a>
                  </div>
                  <Separator className="border-primary/5" />
                </Fragment>
              ))}
              <a
                href="#"
                className="group flex items-center gap-4 text-xs font-black uppercase tracking-[0.4em] text-primary pt-4"
              >
                View all elite resources
                <MoveRight className="size-5 transition-transform duration-300 group-hover:translate-x-4" />
              </a>
            </div>
            <div className="order-1 lg:order-none lg:col-span-2 [&>div[data-slot=carousel-content]]:overflow-visible [&>div[data-slot=carousel-content]]:[clip-path:inset(-100vw_-100vw_-100vw_0)] px-4">
              <CarouselContent className="ml-0 max-w-full select-none">
                {resources.map((item, idx) => (
                  <CarouselItem
                    className={cn(
                      "w-fit border-y border-l border-primary/10 pl-0 transition-all duration-500 hover:bg-muted/30 first:rounded-l-[3rem] last:rounded-r-[3rem]",
                      idx === resources.length - 1 && "border-r",
                    )}
                    key={idx}
                  >
                    <a href={item.link} className="block h-full w-[320px] md:w-[480px]">
                      <div className="overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="aspect-video object-cover transition-all duration-1000 grayscale-50 hover:grayscale-0 hover:scale-105"
                        />
                      </div>
                      <div className="px-8 py-10 space-y-6">
                        <div className="text-xs font-black uppercase tracking-[0.3em] text-primary opacity-50">
                          {item.category}
                        </div>
                        <h3 className="text-3xl font-black uppercase tracking-tighter italic text-foreground leading-[1.1]">
                          {item.title}
                        </h3>
                         <div className="h-1 w-20 bg-primary/20 rounded-full group-hover:w-full transition-all duration-700" />
                      </div>
                    </a>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </div>
            <div className="order-2 flex items-center gap-6 lg:order-none lg:col-start-2 pt-12">
              <CarouselPrevious className="static h-16 w-16 translate-x-0 translate-y-0 rounded-full border-primary/20 hover:bg-primary transition-all disabled:opacity-20" />
              <CarouselNext className="static h-16 w-16 translate-x-0 translate-y-0 rounded-full border-primary/20 hover:bg-primary transition-all disabled:opacity-20" />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export { Gallery8 };
```
