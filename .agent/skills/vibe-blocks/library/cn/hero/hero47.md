# Hero 47

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a high-contrast marketing introduction that pairs oversized editorial typography with a detailed physical device mockup (iPhone).
- **Use Case**: Best for mobile apps, consumer hardware, or SaaS platforms that want to emphasize their mobile-first experience.
- **Visual Style**: Editorial mobile aesthetic. Features a 2-column layout. The left column is dominated by extremely oversized headline typography (`lg:text-8xl`), pairing a primary-colored `heading` with a `muted-foreground` subheading. The right column features a high-fidelity iPhone mockup (`mockups/phone-2.png`) with a precisely absolute-positioned content image (`rounded-[35px]`).
- **Interactivity**: Static layout. Primary CTA uses a `ArrowUpRight` icon to emphasize "Forward motion" and external linking.

## Source Code

### `hero47.tsx`
```tsx
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero47Props {
  heading?: string;
  subheading?: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
  };
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  className?: string;
}

const Hero47 = ({
  heading = "Epic Blocks",
  subheading = " built with shadcn/ui & Tailwind",
  description = "Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
  buttons = {
    primary: {
      text: "Get Started",
      url: "#",
    },
    secondary: {
      text: "Read the docs",
      url: "#",
    },
  },
  image = {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-7-tall.svg",
    alt: "Placeholder",
  },
  className,
}: Hero47Props) => {
  return (
    <section className={cn("bg-background py-20 lg:py-32 font-sans", className)}>
      <div className="container flex flex-col items-center gap-16 lg:my-0 lg:flex-row">
        <div className="flex flex-col gap-8 lg:w-2/3">
          <h2 className="text-5xl font-black md:text-5xl lg:text-9xl tracking-tighter leading-[0.9]">
            <span className="text-foreground block">{heading}</span>
            <span className="text-muted-foreground block opacity-60">{subheading}</span>
          </h2>
          <p className="max-w-xl text-base text-muted-foreground md:text-lg lg:text-2xl font-medium leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap items-center gap-6 lg:gap-8 mt-4">
            <Button asChild size="lg" className="rounded-full shadow-xl">
              <a href={buttons.primary?.url} className="flex items-center">
                <div className="flex items-center justify-center bg-background/20 rounded-full p-1 ml-1">
                  <ArrowUpRight className="size-4" />
                </div>
                <span className="pr-10 pl-4 text-base font-bold whitespace-nowrap">
                  {buttons.primary?.text}
                </span>
              </a>
            </Button>
            <Button asChild variant="link" className="underline decoration-2 underline-offset-8 text-lg font-bold">
              <a href={buttons.secondary?.url}>{buttons.secondary?.text}</a>
            </Button>
          </div>
        </div>
        
        {/* Device Mockup Section */}
        <div className="relative z-10 lg:w-1/3 flex justify-center">
          <div className="absolute top-[2%] left-[1.5%] h-[96%] w-[97%] overflow-hidden rounded-[40px] z-0">
            <img
              src={image.src}
              alt={image.alt}
              className="size-full object-cover object-[50%_0%] scale-[1.02]"
            />
          </div>
          <img
            className="relative z-10 w-full max-w-[400px] drop-shadow-2xl"
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mockups/phone-2.png"
            width={450}
            height={889}
            alt="iphone"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero47 };
```
