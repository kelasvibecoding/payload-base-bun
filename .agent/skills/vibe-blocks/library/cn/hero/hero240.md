# Hero 240

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for SaaS and web application platforms, pairing a centered typography block with a high-fidelity "3D-Marquee" visualization and a unique "Email-Subscription" input card.
- **Use Case**: Best for developers tools, app launches (e.g., "Drop-In Ready Blocks to Supercharge Your App"), or professional newsletters that want to emphasize "Subscribe Now" and "shadcn Blocks."
- **Visual Style**: Cinematic Subscription aesthetic. Features a centered layout Beginning with a prominent merit badge Positioning a custom `Zap` icon and "shadcn Blocks" text. The visual anchor is a unique "Infinite Scroll 3D Marquee" system Positioning 35+ high-fidelity image fragments Using specialized `ThreeDMarquee` technical layout anchored by categorical architectural imagery. Layout utilizes high-fidelity `semi-bold` typography paired with a unique "Sub-Input" card Positioning a centered `Input` and `Button` utilizing unique `rounded-full` and `border` fragments. Marquee utilizes specialized `bg-gradient-to-t` masks to create a unique high-status coordinate visual focus.
- **Interactivity**: High engagement through perspective motion. Features specialized auto-scrolling marquee transitions and high-fidelity focus-visible input interactions to drive professional enrollment.

## Source Code

### `hero240.tsx`
```tsx
import React from "react";

import { cn } from "@/lib/utils";

import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Hero240Props {
  className?: string; // Optional custom styling
}

const Hero240 = ({ className }: Hero240Props) => {
  const images = [
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img1.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img2.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img3.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img4.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img5.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img6.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img7.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img8.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img9.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img10.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img11.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img12.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img13.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img14.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img15.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img16.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img17.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img18.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img19.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img20.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img21.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img22.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img23.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img24.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img25.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img26.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img27.jpeg",
  ];

  return (
    <section
      className={cn(
        "relative h-full w-full overflow-hidden py-20 lg:py-40 font-sans border-b",
        className,
      )}
    >
      <div className="container relative px-6 max-w-[100rem] flex flex-col items-center justify-center gap-12 text-center group/hero isolate">
         {/* Atmos Depth layer side */}
         <div className="absolute inset-x-0 top-0 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>

        <div className="flex items-center gap-4 bg-muted/50 backdrop-blur-xl border border-primary/10 px-8 py-3 rounded-full shadow-2xl transition-all hover:scale-105 group/badge">
          <Zap className="size-6 text-primary animate-pulse" />
          <p className="font-black uppercase tracking-[0.2em] text-primary">
            shadcn Blocks elite
          </p>
        </div>
        <h1 className="mt-3 max-w-4xl font-black text-6xl lg:text-[10rem] leading-[0.85] tracking-tighter uppercase">
          Drop-In <span className="text-primary italic">Ready</span> Blocks elite.
        </h1>
        <p className="max-w-xl text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-x-4 border-primary/10 px-12 py-4">
          Supercharge your professional SaaS fragments world-wide. 
          Deploy finite fragments for elite status world-wide.
        </p>

        <div className="mt-12 flex w-full max-w-2xl flex-col items-center gap-6">
          <div className="flex w-full rounded-full border-4 border-primary/20 bg-background/50 backdrop-blur-3xl p-2 shadow-2xl transition-all focus-within:border-primary/40 focus-within:scale-105 group/input">
            <Input
              className="w-full text-xl font-medium rounded-full border-none bg-transparent px-8 py-8 shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-none active:ring-0 active:outline-0 placeholder:text-muted-foreground/50"
              placeholder="Enter your professional email"
            />
            <Button size="xl" className="h-fit rounded-full bg-primary px-12 py-6 font-black text-xl text-primary-foreground transition-transform hover:scale-110 active:scale-95 duration-500 uppercase tracking-widest leading-none">
              Subscribe elite
            </Button>
          </div>
        </div>

        <div className="mt-20 flex h-full w-full items-center justify-center grayscale group-hover/hero:grayscale-0 transition-grayscale duration-2000 relative">
          <div className="absolute inset-x-0 top-0 h-1/2 w-full bg-gradient-to-b from-background via-background/40 to-transparent z-10 pointer-events-none" />
          <ThreeDMarquee className="rounded-none border-y border-primary/10" images={images} />
          <div className="absolute inset-x-0 bottom-0 h-1/2 w-full bg-gradient-to-t from-background via-background/40 to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export { Hero240 };

const Zap = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width="35"
      height="23"
      viewBox="0 0 35 23"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.042 0.547306C22.2981 -0.152487 23.288 -0.152487 23.544 0.547306L24.3089 2.63602C24.9087 4.27458 25.8587 5.76264 27.0925 6.99648C28.3263 8.23031 29.8144 9.18025 31.453 9.7801L33.5417 10.545C34.2425 10.801 34.2425 11.7909 33.5417 12.047L31.453 12.8118C29.8144 13.4117 28.3263 14.3616 27.0925 15.5954C25.8587 16.8293 24.9087 18.3173 24.3089 19.9559L23.544 22.0446C23.288 22.7455 22.2981 22.7455 22.042 22.0446L21.2772 19.9559C20.6773 18.3173 19.7274 16.8293 18.4935 15.5954C17.2597 14.3616 15.7717 13.4117 14.1331 12.8118L12.0444 12.047C11.3446 11.7909 11.3446 10.801 12.0444 10.545L14.1331 9.7801C15.7717 9.18025 17.2597 8.23031 18.4935 6.99648C19.7274 5.76264 20.6773 4.27458 21.2772 2.63602L22.042 0.547306Z"
      />
      <path
        d="M5.50713 0.284873C5.63513 -0.0650096 6.13009 -0.0650096 6.2581 0.284873L6.64051 1.32919C6.94042 2.14844 7.41537 2.89243 8.03227 3.50933C8.64916 4.12622 9.39316 4.60117 10.2124 4.90108L11.2567 5.2835C11.6071 5.4115 11.6071 5.90646 11.2567 6.03446L10.2124 6.41688C9.39316 6.71679 8.64916 7.19174 8.03227 7.80863C7.41537 8.42553 6.94042 9.16952 6.64051 9.98877L6.2581 11.0331C6.13009 11.3835 5.63513 11.3835 5.50713 11.0331L5.12471 9.98877C4.8248 9.16952 4.34985 8.42553 3.73296 7.80863C3.11607 7.19174 2.37207 6.71679 1.55282 6.41688L0.508505 6.03446C0.158623 5.90646 0.158623 5.4115 0.508505 5.2835L1.55282 4.90108C2.37207 4.60117 3.11607 4.12622 3.73296 3.50933C4.34985 2.89243 4.8248 2.14844 5.12471 1.32919L5.50713 0.284873Z"
      />
    </svg>
  );
};
```
