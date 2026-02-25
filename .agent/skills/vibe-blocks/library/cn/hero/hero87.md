# Hero 87

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a clean, professional introduction for a customizable business product, pairing a high-impact headline with a technical SVG illustration anchor.
- **Use Case**: Best for B2B adaptable solutions, custom product platforms (e.g., "Highnote"), or consulting services that want to emphasize "Innovation" and "Adaptability."
- **Visual Style**: Technical professional aesthetic. Features a centered (top) to split-grid (bottom) layout. The visual anchor is a right-aligned SVG block (`block-2.svg`) positioned specifically within a centered "dot grid" pattern background (`bg-[linear-gradient(...)]`) with a soft radial circular mask (`[mask-image:radial-gradient(...)]`). Includes a primary CTA with a specialized `ArrowRight` icon to drive consultations.
- **Interactivity**: Static layout. Emphasizes clean information hierarchy and technical credibility through the grid-anchored visual.

## Source Code

### `hero87.tsx`
```tsx
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero87Props {
  className?: string;
}

const Hero87 = ({ className }: Hero87Props) => {
  return (
    <section className={cn("py-20 lg:py-40 font-sans overflow-hidden", className)}>
      <div className="container px-4">
        {/* Editorial Headline */}
        <h1 className="text-5xl font-black lg:text-9xl tracking-tighter leading-tight lg:leading-[0.85] text-pretty max-w-5xl">
          The Perfectly <span className="text-primary italic">Adaptable</span> Product for Your Business
        </h1>
        
        <div className="mt-20 grid gap-16 lg:grid-cols-2 items-center">
          <div className="relative z-10">
            <p className="text-xl lg:text-3xl font-medium text-muted-foreground leading-relaxed max-w-2xl">
              It delivers unique and customizable products designed for your
              business. Say farewell to rigid options, lengthy launch times, and
              branding limitations. 
            </p>
            <p className="mt-6 text-lg text-foreground font-bold">
               Embrace a product that evolves with your needs and fuels your innovation.
            </p>
            <Button size="lg" className="mt-12 px-10 py-7 font-black text-xl rounded-full shadow-2xl transition-transform hover:scale-105">
              Consult with an Expert
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>
          
          {/* Technical Anchor side */}
          <div className="relative flex items-center justify-center min-h-[400px] group">
            {/* Masked Grid Pattern Background */}
            <div className="absolute inset-x-0 -top-20 -bottom-20 -z-10 mx-auto h-[120%] w-[120%] bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_50%_100%_at_50%_50%,#000_60%,transparent_100%)] bg-[size:56px_56px] opacity-40 group-hover:opacity-60 transition-opacity"></div>
            
            {/* The Stylized SVG */}
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg"
              alt="adaptable business solution visual"
              className="max-h-[450px] drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] filter grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero87 };
```
