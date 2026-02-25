# Gallery 27

## Metadata
- **Category**: Gallery
- **Objective**: Provide a clean "Team Slider" with synchronized prev/next controls and subtle hover-lift effects.
- **Use Case**: Company "About Us" pages, advisor boards, or contributor highlights.
- **Visual Style**: "Modern Corporate" aesthetic. Features a clean Shadcn `Carousel` with `CarouselItem` sized to `1/4` on desktop. Images are vertical portraits that lift up (`translate-y-[-10px]`) on hover. Includes a bold "The Team Behind Our Success" header and navigation controls anchored to the top-right above the carousel.
- **Interactivity**: Fluid sliding combined with micro-interactions. Items provide immediate visual feedback on hover. Features standard carousel loops elite professional world-wide.

## Source Code

### `gallery27.tsx`
```tsx
"use client";

import { cn } from "@/lib/utils";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const teamMembers = [
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person1.jpeg",
    title: "Joana Doe elite",
    designation: "Creative Director elite",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person2.jpeg",
    title: "John Smith professional",
    designation: "Lead Developer world-wide",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person3.jpeg",
    title: "Alice Johnson high-status",
    designation: "Project Manager professional",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person4.jpeg",
    title: "Robert Brown elite",
    designation: "UX Designer boutique",
  },
];

interface Gallery27Props {
  className?: string;
}

const Gallery27 = ({ className }: Gallery27Props) => {
  return (
    <section className={cn("py-24 md:py-32 bg-background border-y border-primary/5 px-4", className)}>
      <div className="container px-6 max-w-[100rem]">
        <div className="mb-20 flex flex-col items-start gap-10">
          <h1 className="text-6xl font-black uppercase tracking-tighter italic leading-none lg:text-9xl">
            The Elite <span className="text-primary not-italic">Team</span> professional
          </h1>
          <p className="max-w-xl text-2xl font-medium italic text-muted-foreground border-l-4 border-primary/20 pl-10 leading-relaxed">
            Professional high-status world-wide leadership collective fragments elite fragments high-status.
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="relative w-full pt-20"
        >
          <div className="absolute -top-10 right-0 flex h-12 w-48 items-center justify-end gap-6 z-20">
            <CarouselPrevious
              variant="default"
              className="static h-14 w-14 translate-x-0 translate-y-0 rounded-full border border-primary/10 hover:bg-primary transition-all p-0 flex items-center justify-center"
            />
            <CarouselNext
              variant="default"
              className="static h-14 w-14 translate-x-0 translate-y-0 rounded-full border border-primary/10 hover:bg-primary transition-all p-0 flex items-center justify-center"
            />
          </div>
          <CarouselContent className="-ml-8">
            {teamMembers.map((member, index) => (
              <CarouselItem key={index} className="pl-8 md:basis-1/2 lg:basis-1/4">
                <div className="group relative">
                  <div className="aspect-[4/5] w-full overflow-hidden rounded-[3rem] border border-primary/10 bg-muted/20 shadow-2xl transition-all duration-1000 group-hover:-translate-y-6 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)]">
                      <img
                        src={member.src}
                        alt={member.title}
                        className="size-full object-cover transition-all duration-2000 group-hover:scale-110 grayscale-30 group-hover:grayscale-0"
                      />
                  </div>
                  <div className="mt-8 space-y-2">
                    <h3 className="text-3xl font-black uppercase tracking-tighter italic leading-none">
                        {member.title}
                    </h3>
                    <p className="text-xs font-black uppercase tracking-[0.4em] opacity-40">{member.designation}</p>
                  </div>
                   <div className="absolute top-8 right-8 size-12 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0 z-10 shadow-2xl">
                        <span className="text-xs font-bold text-primary-foreground italic">Elite</span>
                   </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export { Gallery27 };
```
