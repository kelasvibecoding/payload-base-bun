# Hero 151

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a cinematic, high-status introduction for developer platforms, pairing a split-column layout with a unique "Phone-in-Mosaic" visual.
- **Use Case**: Best for UI component libraries (e.g., "Blocks built with Shadcn"), development frameworks, or multi-platform ecosystems that want to emphasize "Swift delivery" and "Focused strategy."
- **Visual Style**: Industrial high-fidelity aesthetic. Features a split-column layout starting with an high-impact typography block. Includes a specialized social-proof row pairing an `AvatarGroup` with a prominent centered testimonial quote. The visual anchor is a unique "Mosaic Grid" on the right Featuring a 2x2 cluster of 4 containerized images. The grid utilizes varying aspect ratios and absolute positioning (e.g., `left-[50%]`, `top-[9%]`) to create a complex depth-of-field "Project Stack." Top-right image features a unique "Phone Frame" overlay utilizing a secondary `phone-1.png` asset to display native mobile previews.
- **Interactivity**: Static layout. Visual anchor uses specialized container roundedness (`rounded-[5.2%]`) to match mobile hardware primitives. Primary CTA is a large `rounded-lg` button.

## Source Code

### `hero151.tsx`
```tsx
import { cn } from "@/lib/utils";

import { AvatarGroup } from "@/components/avatar-group";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatars: Array<{
    image: string;
    fallback: string;
  }>;
}

interface Hero151Props {
  heading?: string;
  description?: string;
  button?: {
    text: string;
    url: string;
    className?: string;
  };
  testimonial?: Testimonial;
  images: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
  className?: string;
}

const Hero151 = ({
  heading = "Blocks built with Shadcn & Tailwind",
  description = "Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
  button = {
    text: "Get Started Now",
    url: "#",
  },
  testimonial = {
    quote: "Focused strategy, swift delivery, and world-class craftsmanship",
    author: "John Doe",
    role: "CEO",
    company: "Company",
    avatars: [
      { image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp", fallback: "AB" },
      { image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp", fallback: "CD" },
      { image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp", fallback: "EF" },
    ],
  },
  images = {
    first: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    second: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg",
    third: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-3.svg",
    fourth: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-7-tall.svg",
  },
  className,
}: Hero151Props) => {
  return (
    <section className={cn("bg-background py-20 lg:py-40 font-sans border-b", className)}>
      <div className="container relative z-10 px-6">
        <div className="flex flex-col lg:flex-row items-center gap-24 lg:gap-32">
          
          {/* Marketplace Narrative side */}
          <div className="flex-1 flex flex-col gap-10 items-start text-pretty">
            <div className="flex flex-col gap-10">
              <h1 className="text-6xl font-black lg:text-9xl tracking-tighter leading-[0.85] text-foreground drop-shadow-sm">
                {heading}
              </h1>
              <p className="text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-l-4 border-primary/20 pl-8">
                {description}
              </p>
            </div>
            
            <div className="mt-4">
              <Button asChild size="lg" className="h-fit rounded-full px-12 py-7 font-black text-xl shadow-2xl transition-transform hover:scale-105 active:scale-95 duration-300">
                <a href={button.url}>{button.text}</a>
              </Button>
            </div>
            
            {/* Social Proof Testimonial side */}
            <div className="bg-muted/30 p-8 rounded-[2.5rem] border border-border/40 shadow-inner flex flex-wrap items-center gap-6 group">
              <AvatarGroup className="h-14">
                {testimonial.avatars.map((avatar, index) => (
                  <Avatar
                    key={index}
                    className="size-14 border-4 border-background shadow-lg overflow-hidden grayscale group-hover:grayscale-0 transition-grayscale duration-500"
                  >
                    <AvatarImage src={avatar.image} alt="happy client" />
                    <AvatarFallback>{avatar.fallback}</AvatarFallback>
                  </Avatar>
                ))}
              </AvatarGroup>
              <div className="flex flex-col gap-2">
                <p className="text-lg lg:text-xl font-black text-foreground/80 leading-tight translate-x-1 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-muted-foreground/60">
                  {testimonial.author}, {testimonial.role} @ {testimonial.company}
                </p>
              </div>
            </div>
          </div>
          
          {/* Unique "Mosaic Component Grid" Visual side */}
          <div className="w-full flex-1 group isolate">
            <div className="absolute inset-20 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>
            
            <div className="w-full max-w-[50rem] relative">
              <AspectRatio ratio={1 / 1} className="h-full w-full">
                <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-8 lg:gap-12">
                  
                  {/* Grid 1: The Foundation Block (Top-Left) */}
                  <div className="overflow-hidden rounded-[3rem] border-4 border-background bg-secondary/5 shadow-2xl transition-transform duration-700 hover:-translate-y-4">
                    <img
                      src={images.first}
                      alt="component foundation"
                      className="size-full object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700 scale-110"
                    />
                  </div>
                  
                  {/* Grid 2: The Staggered App View (Top-Right) */}
                  <div className="relative overflow-hidden rounded-[3rem] border-4 border-background bg-primary/5 shadow-2xl transition-transform duration-700 hover:translate-y-4">
                    <div className="absolute top-1/2 left-[5%] w-[110%] max-w-[25rem] -translate-y-1/2 overflow-hidden rounded-2xl border-4 border-background shadow-2xl transform -rotate-2">
                      <AspectRatio ratio={1.7 / 1}>
                        <img
                          src={images.second}
                          alt="dashboard interface component"
                          className="size-full object-cover transition-all duration-1000 group-hover:scale-105"
                        />
                      </AspectRatio>
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
                    </div>
                  </div>
                  
                  {/* Grid 3: Overflow Component Block (Bottom-Left) */}
                  <div className="relative overflow-hidden rounded-[3rem] border-4 border-background bg-muted/30 shadow-2xl transition-transform duration-700 hover:translate-x-4">
                    <div className="absolute top-[9%] left-[9%] w-[200%] max-w-[37.5rem] overflow-hidden rounded-2xl border-4 border-background shadow-[0_30px_60px_-10px_rgba(0,0,0,0.5)] transform -rotate-2">
                      <AspectRatio ratio={1.6 / 1}>
                        <img
                          src={images.third}
                          alt="platform overview component"
                          className="size-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                        />
                      </AspectRatio>
                    </div>
                  </div>
                  
                  {/* Grid 4: The Mobile-First Preview (Bottom-Right) */}
                  <div className="relative overflow-hidden rounded-[3rem] border-4 border-background bg-secondary shadow-2xl transition-transform duration-700 hover:-translate-x-4">
                    <div className="relative top-[12%] left-1/2 w-[70%] max-w-[18rem] -translate-x-1/2 transform rotate-2">
                      <AspectRatio ratio={0.52 / 1}>
                        {/* High-Status Hardware Frame Overlay */}
                        <img
                          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mockups/phone-1.png"
                          alt="hardware frame"
                          className="absolute z-20 w-full drop-shadow-2xl"
                        />
                        {/* Native App UI Preview */}
                        <img
                          src={images.fourth}
                          alt="mobile app preview"
                          className="absolute z-10 w-full rounded-[14%] object-cover scale-[0.96]"
                        />
                      </AspectRatio>
                    </div>
                  </div>
                  
                </div>
              </AspectRatio>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export { Hero151 };
```
