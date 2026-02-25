# Hero 49

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a conversion-heavy introduction for financial tools that pairs oversized editorial typography with a prominent App Store/Google Play CTA and a large iPhone mockup.
- **Use Case**: Best for fintech startups, budgeting apps, or mobile-first financial management platforms.
- **Visual Style**: Clean fintech aesthetic. Features a centered (top) to offset (bottom) layout. The upper section contains a high-impact centered headline (`lg:text-8xl`) and descriptive text. The CTA is a specialized `rounded-full` button containing embedded SVG download icons (`download.svg`). The bottom section features a specialized iPhone mockup (`iphone.png`) with an absolute-positioned content image (`rounded-[10px]`). The visual element is significantly offset to the right (`translate-x-[14.7%]`) to create a modern, asymmetrical landing experience.
- **Interactivity**: Subtle interaction. The primary CTA uses a `hover:scale-95` transition for tactile feedback on click interaction.

## Source Code

### `hero49.tsx`
```tsx
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero49Props {
  className?: string;
}

const Hero49 = ({ className }: Hero49Props) => {
  return (
    <section className={cn("bg-background py-20 lg:py-32 font-sans overflow-hidden", className)}>
      <div className="container mx-auto flex flex-col items-center px-4">
        <div className="flex max-w-4xl flex-col items-center gap-10 text-center">
          <h1 className="text-5xl font-black text-foreground lg:text-9xl tracking-tighter leading-[0.9]">
            Master your monetary matters
          </h1>
          <p className="max-w-xl text-lg lg:text-2xl leading-relaxed tracking-tight text-muted-foreground font-medium">
            Minimize financial stress and build wealth with our intuitive,
            AI-enhanced budgeting tool. Our platform analyzes your spending and
            offers insights for smarter financial decisions.
          </p>
          <Button className="flex h-fit w-fit items-center gap-4 rounded-full px-10 py-6 text-lg font-bold transition-all hover:scale-95 shadow-2xl">
            <img
              alt="google play and app store download icons"
              loading="lazy"
              width="50"
              height="20"
              decoding="async"
              data-nimg="1"
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/hero49/download.svg"
              className="mr-1 filter invert"
            />
            <p>Get started now</p>
          </Button>
        </div>
        
        {/* Asymmetrical Device Mockup Section */}
        <div className="mt-20 relative translate-x-[14.7%] w-full max-w-[1000px] flex justify-center">
          {/* Image inside iPhone frame */}
          <div className="absolute top-[12%] left-[36.5%]! h-[67%]! w-[31%]! -translate-x-[52%] overflow-hidden rounded-[12px] bg-muted z-0">
            <img
              className="min-h-full min-w-full object-cover object-top"
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-7-tall.svg"
              alt="app interface"
            />
          </div>
          {/* Main iPhone Frame Image */}
          <img
            alt="iphone frame"
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/hero49/iphone.png"
            className="relative z-10 w-full h-auto drop-shadow-2xl"
            loading="lazy"
            width="1008.71"
            height="857"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero49 };
```
