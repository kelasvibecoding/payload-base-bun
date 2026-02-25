# Hero 71

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a soft, relationship-driven introduction with a subtle two-tone background and a centered typography block.
- **Use Case**: Best for consultancy services, relationship management tools, or professional advisory firms that want to emphasize "Trust" and "Partnership."
- **Visual Style**: Soft professional aesthetic. Features a centered layout beginning with a distinctive `linear-gradient` background (`#fbf7ec` to `#e2f1ee`). The visual anchor is a medium-width (`w-[50%]`) image placeholder with a specialized shadow effect (`shadow-[rgba(50,50,105,0.15)_...]`) that gives a floating, tactile feel.
- **Interactivity**: Static layout. Dual CTAs use standardized `rounded-md` buttons to drive "Meet Us" and "Schedule a Demo" actions.

## Source Code

### `hero71.tsx`
```tsx
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero71Props {
  className?: string;
}

const Hero71 = ({ className }: Hero71Props) => {
  return (
    <section
      className={cn(
        "bg-[linear-gradient(135deg,#fbf7ec,#e2f1ee)] py-20 lg:py-32 text-center font-sans overflow-hidden",
        className,
      )}
    >
      <div className="container flex flex-col items-center gap-8">
        <h1 className="max-w-4xl text-5xl font-black text-foreground lg:text-8xl tracking-tighter leading-[0.9] text-pretty">
          Stay front and center with your clients.
        </h1>
        <p className="max-w-2xl text-lg lg:text-2xl text-muted-foreground font-medium leading-relaxed">
          We enhance client relationships by providing personalized solutions,
          fostering trust, and driving growth.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 text-lg mt-4">
          <Button className="w-full sm:w-fit rounded-full px-10 py-6 font-bold shadow-xl">Meet Us</Button>
          <Button
            variant="secondary"
            className="w-full sm:w-fit rounded-full px-10 py-6 font-bold bg-background/50 border shadow-md"
          >
            Schedule a Demo
          </Button>
        </div>
        
        {/* Floating Image Visual */}
        <div className="mt-16 relative group">
            <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-full -z-10 group-hover:bg-primary/10 transition-colors"></div>
            <img
            className="mx-auto w-[65%] rounded-2xl shadow-[0_20px_50px_-15px_rgba(50,50,105,0.15)] border border-white/40 max-lg:w-full transition-transform duration-700 hover:scale-[1.01]"
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
            alt="relationship management platform"
            />
        </div>
      </div>
    </section>
  );
};

export { Hero71 };
```
