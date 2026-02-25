# Testimonial 3

## Metadata
- **Category**: Testimonial
- **Objective**: Provide a minimalist, "Corporate Endorsement" block featuring a primary large-scale quote with enterprise logo verification.
- **Use Case**: Mid-page validation sections on B2B SaaS sites, landing pages for core platform features, or "Founder-led" trust sections.
- **Visual Style**: Ultra-clean "Minimalist Pro" architecture featuring a large-scale font (2xl-3xl) framed by horizontal separators (border-y). Focuses on "Brand Association" by placing a corporate wordmark logo immediately underneath the central quote. Includes author identity (Name, Role, Company) in a high-density metadata line.
- **Interactivity**: Clean responsive typography scaling and a dark-mode sensitive logo filter (`dark:invert`).

## Description
Testimonial 3 is the "Corporate Seal" component. It prioritizes the "Institutional Trust" brand archetype by removing all visual distractions (like avatars or cards) to focus entirely on the *Word of the Expert* and the *Authority of the Logo*. The surrounding whitespace and horizontal borders elevate the quote, giving it the gravity of an official endorsement. It is the most effective choice for the "Quality-First" brand that wants to showcase a single, powerful testimonial from a recognized marketplace leader.

## Source Code

```tsx
import { cn } from "@/lib/utils";

interface Testimonial3Props {
  className?: string;
}

const Testimonial3 = ({ className }: Testimonial3Props) => {
  return (
    <section className={cn("py-24 md:py-32", className)}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-10 border-y border-border/50 py-16 text-center md:py-24">
          <q className="block max-w-4xl text-2xl font-bold italic tracking-tight text-foreground lg:text-4xl leading-snug">
            &ldquo;The architectural integrity of these Vibe blocks has reduced our system complexity by orders of magnitude. It is the most stable UI primitive library we have integrated.&rdquo;
          </q>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-wordmark.svg"
              alt="Verification Logo"
              className="h-6 opacity-80 transition-opacity hover:opacity-100 dark:invert"
            />
            <div className="h-6 w-px bg-border/50 hidden sm:block" />
            <p className="font-bold text-sm uppercase tracking-[0.2em] text-muted-foreground/60">
                Sarah Montgomery, <span className="text-primary/70">Principal Architect</span> @ Lab-Systems
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Testimonial3 };
```
