# Hero 74

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a feature-dense introduction for an "All-in-one OS" product, pairing a waitlist CTA with a 6-item technical feature grid and a complex asymmetrical image layout.
- **Use Case**: Best for productivity OS tools, comprehensive business management platforms, or ERP systems that want to highlight a wide range of integrated capabilities.
- **Visual Style**: High-density technical aesthetic. Features a centered (top) typography block including an `Input`-based waitlist CTA. Below the text, a 6-column grid (`md:grid-cols-3 lg:grid-cols-6`) displays 6 technical feature blocks (`Package`, `AlignCenter`, `Vault`, `ReceiptText`, `Timer`, `Brain`) each styled with a `rounded-md border` icon container. The bottom section (desktop only) features an asymmetrical 3-image "sandwich" layout: two wide flanking images and a central absolute-positioned "floating" card image (`placeholder-3.svg`) with a shadow.
- **Interactivity**: Primarily static layout. Focuses on information architecture and feature density to convey the "Power" of the OS.

## Source Code

### `hero74.tsx`
```tsx
import {
  AlignCenter,
  Brain,
  Package,
  ReceiptText,
  Timer,
  Vault,
} from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Hero74Props {
  className?: string;
}

const Hero74 = ({ className }: Hero74Props) => {
  return (
    <section className={cn("py-20 lg:py-32 font-sans overflow-hidden", className)}>
      <div>
        <div className="container text-center px-4">
          <h1 className="mb-6 text-5xl font-black lg:text-8xl tracking-tighter leading-tight lg:leading-[0.9] text-pretty">
            The ultimate OS to <span className="text-primary italic">supercharge</span> your business.
          </h1>
          <p className="mx-auto max-w-3xl text-muted-foreground lg:text-2xl font-medium leading-relaxed">
            Simplified file management, live profit/loss insights, and
            effortless financial prep—all enhanced by intelligent filters and
            search.
          </p>
          
          {/* Waitlist CTA */}
          <div className="mx-auto mt-12 flex w-full max-w-lg items-center space-x-3 p-1 rounded-full border border-border/60 bg-muted/30 focus-within:ring-2 ring-primary/20 transition-all">
            <Input type="email" placeholder="Enter your email" className="bg-transparent border-none focus-visible:ring-0 shadow-none px-6 py-6 text-lg" />
            <Button size="lg" className="rounded-full px-8 py-6 font-bold shadow-xl">Join waitlist</Button>
          </div>
          
          {/* 6-Column Feature Icon Grid */}
          <div className="mx-auto mt-20 grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {[
                { icon: <Package />, label: "Fully customizable" },
                { icon: <AlignCenter />, label: "Real-time insights" },
                { icon: <Vault />, label: "Secure vault" },
                { icon: <ReceiptText />, label: "Smart receipts" },
                { icon: <Timer />, label: "Effortless tracking" },
                { icon: <Brain />, label: "AI-driven search" }
            ].map((feature, i) => (
                <div key={i} className="flex flex-col items-center gap-3 transition-transform hover:scale-105 duration-300">
                    <div className="flex h-16 w-24 items-center justify-center rounded-2xl border border-border/60 bg-background shadow-md text-primary">
                        {feature.icon}
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest text-muted-foreground/80 text-center leading-tight">
                        {feature.label}
                    </span>
                </div>
            ))}
          </div>
        </div>
        
        {/* Asymmetrical 3-Image Sandwich (Desktop Only) */}
        <div className="relative mt-24 hidden lg:flex justify-between gap-10 opacity-90 transition-opacity hover:opacity-100 duration-1000">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
            alt="platform preview left"
            className="max-h-[500px] w-full rounded-tr-3xl rounded-br-lg object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
          />
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
            alt="platform preview right"
            className="max-h-[500px] w-full rounded-tl-3xl rounded-bl-lg object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
          />
          {/* Centered Floating Card */}
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
            alt="hero feature card"
            className="absolute top-1/2 left-1/2 max-h-96 -translate-x-1/2 -translate-y-1/2 rounded-3xl object-cover shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border-4 border-background z-20 transition-transform duration-500 hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero74 };
```
