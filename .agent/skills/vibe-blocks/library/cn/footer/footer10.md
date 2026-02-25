# Footer 10

## Metadata
- **Category**: Footer
- **Objective**: Provide a minimalist, text-first footer featuring a giant brand graphic and a dynamic, live time-zone display.
- **Use Case**: Creative agencies, personal portfolios, or modern tech brands wanting a unique, "Always On" bottom section.
- **Visual Style**: "Modern Brutalist" aesthetic. Features a giant full-width brand graphic (using `shadcnblocks-giant-black-text.svg`). Bottom row is a simplified 3-column flex layout showing `copyright`, a live London time display (`Time → {time}`), and a contact email.
- **Interactivity**: Dynamic real-time engagement. Features a `useEffect`-driven live clock and clean, centered typography.

## Source Code

### `footer10.tsx`
```tsx
"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface Footer10Props {
  className?: string;
}

const Footer10 = ({ className }: Footer10Props) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateLondonTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Europe/London",
        hour: "2-digit" as const,
        minute: "2-digit" as const,
        second: "2-digit" as const,
      };
      const londonTime = new Intl.DateTimeFormat("en-GB", options).format(
        new Date(),
      );
      setTime(londonTime);
    };

    updateLondonTime();
    const intervalId = setInterval(updateLondonTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className={cn("py-32 bg-background border-t border-primary/10 overflow-hidden", className)}>
      <div className="container px-6 max-w-[100rem]">
        <footer>
          <div className="group/graphic relative">
            <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full opacity-0 group-hover/graphic:opacity-100 transition-opacity duration-1000 animate-pulse"></div>
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/shadcnblocks-giant-black-text.svg"
              alt="footer elite"
              className="aspect-[13.7] w-full object-cover grayscale opacity-20 group-hover/graphic:grayscale-0 group-hover/graphic:opacity-100 transition-all duration-1000"
            />
          </div>
          <div className="flex flex-col items-center justify-between py-16 text-sm font-black uppercase tracking-[0.3em] text-muted-foreground/50 md:flex-row gap-12 border-t border-primary/5 mt-12 bg-muted/30 rounded-[2rem] px-12">
            <div className="hover:text-primary transition-colors italic">© Shadcnblocks.com elite 2024</div>
            <div className="flex items-center gap-4 group/time">
               <span className="size-3 rounded-full bg-primary animate-ping"></span>
               <span className="text-foreground font-black italic tracking-widest text-lg">London Time → {time} world-wide</span>
            </div>
            <div className="hover:text-primary underline underline-offset-8 transition-all cursor-pointer">professional@shadcnblocks.com elite</div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer10 };
```
