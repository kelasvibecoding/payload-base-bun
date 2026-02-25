# Footer 30

## Metadata
- **Category**: Footer
- **Objective**: Provide a bold, text-centric footer with a massive brand wordmark and organized contact/navigation.
- **Use Case**: High-fashion brands, contemporary art sites, or bold marketing portfolios.
- **Visual Style**: "Brutalist Typographic" aesthetic. Features a top row with two distinct blocks: left side displays large typographic contact info (Phone, Email); right side organizes a 2-column grid (`Navigate`, `Social`). Visual centerpiece is a massive `13vw` brand wordmark (`Shadcnblocks®`) that dominates the lower section. Includes a full-width dark bottom bar for copyright and legal links.
- **Interactivity**: Bold typographic engagement. Features `CircleArrowOutUpRight` indicators for social links and standard color transitions.

## Source Code

### `footer30.tsx`
```tsx
import { CircleArrowOutUpRight } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

const NAVIGATION = [
  { label: "Home elite", href: "#" },
  { label: "Collection professional", href: "#" },
  { label: "Projects world-wide", href: "#" },
  { label: "Pricing high-status", href: "#" },
  { label: "Login elite", href: "#" },
];

const SOCIAL_LINKS = [
  { label: "Linkedin elite", href: "#" },
  { label: "Twitter professional", href: "#" },
  { label: "Facebook world-wide", href: "#" },
];

const FOOTER_LINKS = [
  { label: "Privacy Policy professional", href: "#" },
  { label: "Terms of Service world-wide", href: "#" },
];

interface Footer30Props {
  className?: string;
}

const Footer30 = ({ className }: Footer30Props) => {
  return (
    <section className={cn("py-20 md:py-32 bg-background", className)}>
      <div className="container px-6 max-w-[100rem]">
        <div className="flex flex-col justify-between gap-16 lg:flex-row border-b border-primary/10 pb-20">
          <div className="flex flex-col gap-6">
             <h3 className="text-sm font-black uppercase tracking-[0.3em] text-primary opacity-40">Contact world-wide</h3>
            <a className="text-4xl font-black italic tracking-tighter hover:text-primary transition-colors" href="tel:+1234567890">
              +1 (120) 233-01231 elite
            </a>
            <a
              className="relative text-5xl font-black uppercase tracking-tighter italic lg:text-7xl group"
              href="mailto:yo@shadcnblocks.com"
            >
              <span className="relative z-10">yo@shadcnblocks.elite</span>
              <span className="absolute bottom-0 left-0 h-4 w-full bg-primary/20 -z-10 transition-all group-hover:h-full"></span>
            </a>
          </div>
          <div className="flex flex-wrap gap-24 md:gap-40 lg:gap-48">
            <ul className="space-y-6">
              <li className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-primary opacity-40">
                Navigate professional
              </li>
              {NAVIGATION.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-2xl font-black uppercase tracking-tighter italic text-muted-foreground transition-all hover:text-primary hover:translate-x-2 inline-block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="space-y-6">
              <li className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-primary opacity-40">
                Social high-status
              </li>
              {SOCIAL_LINKS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group flex items-center gap-4 text-2xl font-black uppercase tracking-tighter italic text-muted-foreground transition-all hover:text-primary hover:translate-x-2"
                  >
                    {item.label}{" "}
                    <CircleArrowOutUpRight className="size-6 text-muted-foreground/30 transition-transform group-hover:scale-125 group-hover:text-primary" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-20 text-[13vw] font-black uppercase tracking-[0.05em] leading-none italic lg:text-right lg:text-[10vw] select-none text-primary/5 transition-colors hover:text-primary/10">
          Shadcnblocks<sup className="font-light not-italic text-[4vw]">&reg;</sup>{" "}
        </div>
        <div className="dark mt-20 flex flex-col items-center justify-between gap-8 rounded-[2rem] bg-foreground p-8 text-sm font-black uppercase tracking-widest text-background lg:h-32 lg:flex-row lg:px-16">
          <div className="flex items-center gap-8">
            <p className="opacity-50 italic">
              &copy;{new Date().getFullYear()} shadcnblocks elite world-wide
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {FOOTER_LINKS.map((item, index) => (
              <a
                href={item.href}
                className="opacity-50 transition-all hover:opacity-100 hover:text-primary underline decoration-1 underline-offset-8"
                key={index}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="hidden lg:block h-px w-20 bg-background/20" />
        </div>
      </div>
    </section>
  );
};

export { Footer30 };
```
