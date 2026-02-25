# Hero 58

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a clean, professional introduction for a hybrid workspace solution, pairing a left-aligned text block with a high-fidelity vector illustration.
- **Use Case**: Best for remote work tools, workspace management platforms, or project hub software.
- **Visual Style**: Industrial-Professional aesthetic. Features a 2-column layout. The left column is a high-density typography block including a large headline and description. The right column features a specialized "Tokyo" vector illustration anchored against a complex absolute-positioned grid background pattern (`bg-[linear-gradient(...)]`) with a circular mask to create a soft focal point.
- **Interactivity**: Static layout. Primary CTA uses a `ArrowRight` icon to define immediate "Get Started" progression.

## Source Code

### `hero58.tsx`
```tsx
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero58Props {
  className?: string;
}

const Hero58 = ({ className }: Hero58Props) => {
  return (
    <section className={cn("py-20 lg:py-32 font-sans overflow-hidden", className)}>
      <div className="container relative z-10 px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Typography block */}
          <div className="flex flex-col gap-10 lg:gap-12 text-center lg:items-start lg:text-left">
            <h1 className="text-5xl font-black lg:text-8xl tracking-tighter leading-[0.9] text-pretty">
              Your workspace <br />
              <span className="text-primary italic">anywhere.</span>
            </h1>
            <p className="text-muted-foreground lg:text-2xl font-medium leading-relaxed max-w-xl">
              Set up your environment with everything you need and share it
              effortlessly. Stay productive throughout your workflow, no matter
              where you are.
            </p>
            <div className="flex justify-center lg:justify-start">
                <Button size="lg" className="w-fit font-bold px-10 py-7 rounded-full shadow-2xl transition-transform hover:scale-105">
                Get Started
                <ArrowRight className="ml-2 size-5" />
                </Button>
            </div>
          </div>
          
          {/* Illustration Section */}
          <div className="relative group">
            {/* Focal grid background */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,hsl(var(--muted))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted))_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_50%_100%_at_50%_50%,#000_60%,transparent_100%)] bg-[size:64px_64px] opacity-40"></div>
            
            {/* Professional Vector Illustration */}
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/illustrations/tokyo-selecting-the-elements-of-the-horizontal-graph-chart.svg"
              alt="modern workspace illustration"
              className="mx-auto max-h-[500px] lg:max-h-[600px] w-full object-contain filter drop-shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero58 };
```
