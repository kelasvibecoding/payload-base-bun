# Hero 205

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for app architecture platforms, pairing a centered typography block with high-fidelity "Merit-Badges" and a prominent project preview card.
- **Use Case**: Best for frontend developer tools, app design platforms (e.g., "Architecting UserFriendly Apps"), or professional service hubs that want to emphasize "Architecting" and "View all Blocks."
- **Visual Style**: Cinematic Dev-Tool aesthetic. Features a centered layout Beginning with a prominent headline Utilizing specialized `playfair italic` typography anchored by a functional social-proof merit list. Typography section is pairing specialized absolute-positioned functional icons (`Flash`) with categorical role metadata ("Frontend Developer") positioning high-fidelity trust social-proof. Visual anchor is a unique wide-format project preview Positioning an high-fidelity `Card` container Utilizing specialized `rounded-4xl` border context and `motion` to drive categorical entrance animations. Layout uses specialized `Line` decorative fragments to create a unique world-class blueprint visual structure.
- **Interactivity**: High atmospheric engagement. Features specialized `framer-motion` entrance animations for the project preview and high-fidelity social-proof transitions to drive professional enrollment.

## Source Code

### `hero205.tsx`
```tsx
"use client";

import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Hero205Props {
  className?: string; // Optional custom styling
}

const Hero201 = ({ className }: Hero205Props) => {
  return (
    <section className={cn("bg-background py-20 lg:py-40 font-sans border-b overflow-hidden group/hero", className)}>
      <div className="container px-6 max-w-[100rem]">
        <div className="flex flex-col gap-12 text-pretty relative">
          
          {/* Atmos Depth layer side */}
          <div className="absolute top-0 right-0 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse size-1/3"></div>

          {/* Narrative Narrative side */}
          <div className="flex flex-col gap-10 group/content">
            <h1 className="text-6xl font-black lg:text-[9.5rem] tracking-tighter leading-[0.8] text-foreground drop-shadow-sm uppercase">
                <span className="text-foreground">Architecting </span> <br />
                <span className="text-primary italic">user-friendly</span> <br />
                <span className="text-foreground">apps (elite).</span>
            </h1>

            {/* Professional Social Merit list side */}
            <div className="mt-8 flex flex-wrap items-center gap-6 tracking-tight text-xl lg:text-3xl font-medium italic text-muted-foreground">
                <span className="text-foreground font-black uppercase tracking-widest not-italic">Elite developer</span>
                <div className="flex size-10 lg:size-14 rotate-12 items-center justify-center rounded-xl bg-primary shadow-xl border-2 border-primary/20 transition-transform group-hover/hero:rotate-0 duration-700">
                    <Flash className="size-5 lg:size-7" />
                </div>
                <span className="text-foreground font-black uppercase tracking-widest not-italic">world-class blocks</span>
                <div className="size-3 rounded-full bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
                <span className="border-l-4 border-primary/20 pl-6">
                    Previously high-status Procuduct Designer Freelancer world-wide.
                </span>
            </div>

            {/* Action Buttons side */}
            <div className="mt-12 flex flex-col items-start gap-8 md:flex-row group/buttons">
                <Button size="lg" className="h-fit rounded-full bg-primary px-12 py-7 font-black text-xl text-primary-foreground shadow-2xl transition-transform hover:scale-105 active:scale-95 duration-500 uppercase tracking-widest leading-none">
                    <span className="flex items-center gap-6">
                        Get in touch
                        <ChevronRightIcon className="h-5 w-5 transition-transform group-hover/buttons:translate-x-2" strokeWidth={3} />
                    </span>
                </Button>
                <div className="flex items-center gap-8 relative">
                    <Button
                        variant="outline"
                        size="lg"
                        className="h-fit rounded-full border-2 border-foreground/10 bg-background px-12 py-7 font-black text-xl shadow-xl transition-all hover:bg-muted duration-500 uppercase tracking-widest leading-none"
                    >
                        View all world-class
                    </Button>
                    <div className="relative flex flex-col items-center">
                        <Line className="w-24 lg:w-32 text-primary" />
                        <p className="text-sm font-black uppercase tracking-widest text-primary italic mt-4 absolute top-full">Tap it&apos;s free elite</p>
                    </div>
                </div>
            </div>
          </div>

          {/* Unique "Architectural Focus Anchor" Visual side */}
          <motion.div
            initial={{ opacity: 0, y: 300, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ ease: [0.16, 1, 0.3, 1], duration: 1.5 }}
            className="group/card relative mt-32 h-[45rem] lg:h-[60rem] w-full"
          >
            <Card className="size-full rounded-[4rem] border-2 border-border/20 bg-muted/40 p-4 shadow-2xl transition-all duration-1000 hover:shadow-primary/5 isolate">
              <CardContent className="size-full rounded-[3rem] border-4 border-background bg-muted p-0 overflow-hidden relative group/display grayscale hover:grayscale-0 transition-grayscale duration-1000">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                  className="size-full object-cover scale-105"
                  alt="high-status app architecture preview focus"
                />
                <div className="absolute inset-0 bg-linear-to-tr from-primary/5 to-transparent pointer-events-none"></div>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export { Hero201 };

const Flash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="13"
    height="15"
    viewBox="0 0 13 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.55191 6.02443L11.7837 7.65512C12.3525 7.87431 12.4411 8.64213 11.9371 8.98504L4.63357 13.9543C3.81688 14.51 2.7714 13.6807 3.12658 12.759L4.73014 8.59757L0.498337 6.96688C-0.0704765 6.74769 -0.159028 5.97986 0.34496 5.63695L7.64848 0.667678C8.46517 0.112006 9.51065 0.941277 9.15547 1.86301L7.55191 6.02443Z"
      fill="white"
    />
  </svg>
);

const Line = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="83"
    height="36"
    viewBox="0 0 83 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M40.54 19.8917L41.3058 20.5348L40.54 19.8917ZM1.63581 24.9844C1.0855 25.0311 0.677219 25.515 0.723883 26.0653L1.48433 35.0331C1.53099 35.5834 2.01493 35.9917 2.56524 35.9451C3.11555 35.8984 3.52384 35.4144 3.47717 34.8641L2.80123 26.8927L10.7726 26.2168C11.3229 26.1701 11.7312 25.6862 11.6845 25.1359C11.6379 24.5856 11.1539 24.1773 10.6036 24.2239L1.63581 24.9844ZM82.2736 5.64287C76.5724 3.44962 72.1116 1.90993 68.3792 1.17068C64.6243 0.426972 61.5404 0.479043 58.619 1.52454C55.7174 2.56298 53.0827 4.54437 50.1573 7.45564C47.236 10.3628 43.9495 14.2763 39.7742 19.2487L41.3058 20.5348C45.5032 15.5361 48.7246 11.703 51.5681 8.87328C54.4074 6.04765 56.7943 4.30177 59.2929 3.40759C61.7717 2.52047 64.4665 2.43457 67.9906 3.13257C71.5372 3.83502 75.8555 5.3167 81.5555 7.50951L82.2736 5.64287ZM39.7742 19.2487C31.6752 28.8938 24.4557 32.0798 18.3123 32.0962C12.1277 32.1127 6.75778 28.9224 2.36514 25.2165L1.07548 26.7451C5.60504 30.5666 11.4303 34.1146 18.3177 34.0962C25.2462 34.0777 32.9755 30.4554 41.3058 20.5348L39.7742 19.2487Z"
111:       fill="currentColor"
112:     />
113:   </svg>
114: );
115: 
```
