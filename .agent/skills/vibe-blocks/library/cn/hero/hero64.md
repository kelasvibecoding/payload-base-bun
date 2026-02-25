# Hero 64

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a comprehensive trust-building introduction that pairs a left-aligned text block with a complex 3D-style testimonial and rating visual.
- **Use Case**: Best for conversion-focused landing pages, service platforms, or products where "Social Proof" (testimonials and star ratings) is the primary value proposition.
- **Visual Style**: Trust-validation aesthetic. Features a 2-column layout. The left side is a high-impact typography block with a gradient-text highlight (`bg-linear-to-tr`). The right side features a sophisticated visual stack: a primary card (`TestimonialCard`) including user image, star rating, and "skeleton" text lines, flanked by two overlapping image placeholders (`rounded-lg shadow-md`). Includes a standalone `RatingDisplay` pill (`shadow-lg`) with avatars and a star count used as a floating trust validator.
- **Interactivity**: Primarily static layout. Visual cards use sophisticated absolute positioning (`min(100%, 235.625px)`) and 3D stacking (`z-index`) to create a sense of depth and activity.

## Source Code

### `hero64.tsx`
```tsx
import { FaStar } from "react-icons/fa";

import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface TestimonialCardProps {
  name: string;
  title: string;
  imageSrc: string;
  className?: string;
  style?: React.CSSProperties;
}

interface RatingDisplayProps {
  rating?: number;
  userCount?: number;
  className?: string;
  style?: React.CSSProperties;
  showAvatars?: boolean;
}

function TestimonialCard({
  name = "Jane Doe",
  title = "Job Title",
  imageSrc = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
  className,
  style,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "flex w-[320px] flex-col gap-4 rounded-2xl bg-background border border-border/50 p-6 shadow-2xl",
        className,
      )}
      style={style}
    >
      <img
        src={imageSrc}
        alt={name}
        className="h-24 w-24 rounded-xl object-cover shadow-sm"
      />
      <div className="flex gap-1">
        {Array(5)
          .fill(null)
          .map((_, i) => (
            <FaStar key={i} className="h-4 w-4 fill-yellow-400" />
          ))}
      </div>
      <div className="space-y-2">
        <div className="h-2 w-[85%] rounded-full bg-muted/40 animate-pulse"></div>
        <div className="h-2 w-[95%] rounded-full bg-muted/40 animate-pulse delay-75"></div>
        <div className="h-2 w-[65%] rounded-full bg-muted/40 animate-pulse delay-150"></div>
      </div>
      <div className="mt-2 space-y-1">
        <p className="font-bold text-foreground text-lg tracking-tight">{name}</p>
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">{title}</p>
      </div>
    </div>
  );
}

function RatingDisplay({
  rating = 4.9,
  userCount = 500,
  className,
  style,
}: RatingDisplayProps) {
  return (
    <div className={cn("space-y-0.5", className)} style={style}>
      <div className="flex items-center gap-4">
        <div className="flex -space-x-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <Avatar key={i} className="size-11 border-2 border-background ring-2 ring-primary/5 shadow-md">
              <AvatarImage src={`https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-${i}.webp`} />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          ))}
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <FaStar key={i} className="h-3.5 w-3.5 fill-yellow-400" />
                ))}
            </div>
            <p className="text-base font-black text-foreground">
              {rating}
            </p>
          </div>
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Join {userCount}+ happy users
          </p>
        </div>
      </div>
    </div>
  );
}

const Hero64 = () => {
  return (
    <section className="py-20 lg:py-32 font-sans overflow-hidden">
      <div className="container px-4">
        <div className="flex flex-col gap-16 lg:flex-row items-center">
          <div className="mx-auto flex flex-col md:w-1/2">
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-black tracking-tighter text-foreground sm:text-6xl/tight lg:text-8xl/none text-pretty">
                Leverage the{" "}
                <span className="bg-gradient-to-tr from-primary to-primary/60 bg-clip-text text-transparent italic">
                  influence of testimonials
                </span>{" "}
                to boost your sales.
              </h1>
              <p className="mx-auto mt-8 max-w-xl text-lg text-muted-foreground lg:text-2xl font-medium leading-relaxed md:ml-0 md:max-w-xl">
                Gather and display testimonials from happy customers to build
                trust and boost your conversion rate with authenticated proof.
              </p>
              
              <div className="mt-8 flex justify-center md:hidden">
                <RatingDisplay className="p-4 rounded-2xl bg-accent/20 border border-border/40" />
              </div>
              
              <div className="mx-auto mt-12 w-fit md:ml-0">
                <Button size="lg" className="px-10 py-7 font-black text-lg rounded-full shadow-2xl transition-transform hover:scale-[1.02]">
                  Start now – completely free!
                </Button>
              </div>
            </div>
          </div>
          
          {/* Trust visual section */}
          <div className="relative mx-auto h-[480px] lg:h-[600px] w-full max-w-2xl md:w-1/2">
            <div className="relative h-full w-full group">
              {/* Overlapping Visual Stack */}
              <TestimonialCard
                name="Sarah Johnson"
                title="Marketing Director"
                imageSrc="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/fabian-centeno-njeVb6E3XB8-unsplash.jpg"
                className="absolute hidden md:flex z-30 transition-transform group-hover:-translate-x-2 duration-500"
                style={{
                  left: "0",
                  top: "35%",
                  width: "55%",
                  height: "auto",
                }}
              />
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                alt="interface 1"
                className="absolute hidden rounded-3xl md:block object-cover shadow-2xl z-10 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2 duration-700"
                style={{
                  right: "0",
                  top: "0",
                  width: "50%",
                  height: "45%",
                }}
              />
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg"
                alt="interface 2"
                className="absolute rounded-3xl shadow-2xl z-20 border border-border/50 object-cover transition-transform group-hover:scale-[1.02] duration-1000"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "min(100%, 260px)",
                  height: "min(90%, 380px)",
                }}
              />
              
              {/* Floating rating pill (Desktop and specific mobile breakpoint) */}
              <RatingDisplay className="absolute bottom-4 left-1/2 z-40 hidden w-[90%] -translate-x-1/2 rounded-2xl border border-border/50 bg-background/80 backdrop-blur-xl px-6 py-4 shadow-2xl md:top-[58%] md:right-[-40px] md:bottom-auto md:left-auto md:flex md:w-fit md:translate-x-0 transition-transform group-hover:translate-y-2 duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero64 };
```
