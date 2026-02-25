# Hero 204

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for UI component platforms, pairing a centered typography block with a high-fidelity "Email-Signup" form and unique dual-device interactive mockups.
- **Use Case**: Best for UI component libraries, mobile app showcases (e.g., "The Shadcn Blocks Just Copy Paste"), or professional design tools that want to emphasize "Just Copy Paste" and "Sign Up."
- **Visual Style**: Cinematic Device-Showcase aesthetic. Features a centered layout Beginning with a prominent "Shadcn Blocks" credit paired with an high-status `Sparkle` icon and high-impact `playfair` heading. The centerpiece is a unique "High-Fidelity" Email `Form` Positioning an integrated "Sign Up" button anchored by unique `focus-visible` ring effects. Visual anchor is a unique "Dual-Device Mosaic" at the bottom Positioning 2 absolute-positioned iPhone mockups positioning high-fidelity status-calendar fragments Utilizing `motion`, `rotate`, and world-class `box-shadow` to create high-status visual focus.
- **Interactivity**: High engagement through state management and motion. Features specialized `framer-motion` entrance animations for the device pair and high-fidelity project preview layering to drive professional enrollment.

## Source Code

### `hero204.tsx`
```tsx
"use client";

import { motion } from "framer-motion";
import React from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Hero204Props {
  className?: string; // Optional custom styling
}

const Hero204 = ({ className }: Hero204Props) => {
  return (
    <section className={cn("bg-background py-20 lg:py-40 font-sans border-b overflow-hidden group/hero", className)}>
      <div className="container px-6 max-w-[100rem] flex flex-col items-center justify-center gap-12 text-center text-pretty">
        
        {/* Narrative Narrative side */}
        <div className="flex flex-col items-center gap-10 group/content">
             {/* Atmos Depth layer side */}
            <div className="absolute inset-x-0 top-0 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>

            <h2 className="flex items-center text-xl lg:text-3xl font-black uppercase tracking-[0.5em] text-primary drop-shadow-[0_0_8px_rgba(var(--primary),0.3)]">
                <Sparkle className="mr-6 size-10! fill-primary" /> 
                Elite Shadcn Blocks
            </h2>
            <h1 className="mx-auto max-w-[55rem] text-6xl font-black lg:text-[9.5rem] tracking-tighter leading-[0.8] text-foreground drop-shadow-sm uppercase">
                The blocks <br />
                <span className="text-secondary italic">just</span> copy paste world-class.
            </h1>
            <p className="mx-auto max-w-[45rem] mt-6 text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-x-4 border-primary/10 px-12 py-4">
                World-class components built for high-status builders world-wide. 
                Experience finite professional craft for elite status world-wide.
            </p>
        </div>

        {/* Action Merit Matrix side */}
        <div className="mt-8 flex w-full max-w-[50rem] items-center justify-center rounded-full border-2 border-primary/20 bg-muted/30 p-2 backdrop-blur-xl group/form shadow-2xl transition-all hover:border-primary/40">
          <Input
            placeholder="Enter Your Professional Email"
            className="w-full border-none bg-transparent pl-8 text-xl! font-medium tracking-tight shadow-none outline-none focus-visible:ring-0"
          />
          <Button size="lg" className="h-fit rounded-full bg-primary px-12 py-6 font-black text-xl text-primary-foreground shadow-xl transition-transform hover:scale-105 active:scale-95 duration-500 uppercase tracking-widest leading-none">
            Sign Up Now
          </Button>
        </div>

        {/* Unique "Dual Dynamic Anchor" Visual side */}
        <div className="relative mt-20 flex h-[500px] w-screen justify-center overflow-hidden border-b-2 border-border/40">
          
          {/* Mockup Fragment 1 side (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -100, y: 200, rotate: -30 }}
            whileInView={{ opacity: 1, x: 0, y: 0, rotate: -18 }}
            viewport={{ once: true }}
            transition={{ ease: [0.16, 1, 0.3, 1], duration: 1.5 }}
            className="absolute mx-auto mt-6 mr-[40rem] hidden h-[1000px] w-[450px] items-start justify-center rounded-[5rem] bg-black md:mt-12 md:flex border-[12px] border-[#1E1E1E] shadow-[0_100px_100px_-40px_rgba(0,0,0,0.8)]"
          >
            <img
              className="absolute inset-0 z-20 scale-105 object-cover opacity-80 pointer-events-none"
              alt="High-status mobile hardware frame dark"
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mockups/phone-5.png"
            />
            <div className="h-full w-full relative z-10 p-8">
              <div className="mt-24 flex justify-between items-start px-8">
                <h1 className="flex items-end gap-3 text-7xl font-black tracking-tighter text-white">
                  Mon
                  <div className="mb-4 size-5 rounded-full bg-primary animate-pulse shadow-[0_0_15px_rgba(var(--primary),0.8)]" />
                </h1>
                <div className="mt-4 flex flex-col items-end gap-1">
                  <p className="text-xl font-bold tracking-widest uppercase text-white/40">Feburary 9</p>
                  <p className="text-4xl font-black tracking-tighter text-white/20">2025</p>
                </div>
              </div>
              <img
                className="mx-auto mt-40 size-48 object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                alt="platform logo light detail"
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-white-1.svg"
              />
            </div>
          </motion.div>

          {/* Mockup Fragment 2 side (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 100, y: 200, rotate: 30 }}
            whileInView={{ opacity: 1, x: 0, y: 0, rotate: 20 }}
            viewport={{ once: true }}
            transition={{ ease: [0.16, 1, 0.3, 1], duration: 1.5, delay: 0.2 }}
            className="absolute mx-auto mt-6 md:mt-24 ml-[40rem] flex h-[1000px] w-[450px] items-start justify-center rounded-[5rem] bg-background border-[12px] border-border/40 shadow-[0_100px_100px_-40px_rgba(0,0,0,0.2)]"
          >
            <img
              className="absolute inset-0 z-20 scale-105 object-cover opacity-80 pointer-events-none"
              alt="High-status mobile hardware frame light"
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mockups/phone-5.png"
            />
            <div className="h-full w-full relative z-10 p-8">
              <div className="mt-24 flex justify-between items-start px-8">
                <h1 className="flex items-end gap-3 text-7xl font-black tracking-tighter text-foreground">
                  Tue
                  <div className="mb-4 size-5 rounded-full bg-secondary animate-pulse" />
                </h1>
                <div className="mt-4 flex flex-col items-end gap-1">
                  <p className="text-xl font-bold tracking-widest uppercase text-muted-foreground/40">Feburary 14</p>
                  <p className="text-4xl font-black tracking-tighter text-muted-foreground/20">2025</p>
                </div>
              </div>
              <img
                className="mx-auto mt-40 size-48 object-contain"
                alt="platform logo dark detail"
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export { Hero204 };

const Sparkle = (params: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...params}
    width="35"
    height="24"
    viewBox="0 0 35 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.0411 1.18695C22.2971 0.487161 23.287 0.487161 23.5431 1.18695L24.3079 3.27567C24.9078 4.91423 25.8577 6.40229 27.0915 7.63612C28.3254 8.86996 29.8134 9.8199 31.452 10.4197L33.5407 11.1846C34.2416 11.4406 34.2416 12.4306 33.5407 12.6866L31.452 13.4515C29.8134 14.0513 28.3254 15.0013 27.0915 16.2351C25.8577 17.4689 24.9078 18.957 24.3079 20.5955L23.5431 22.6843C23.287 23.3851 22.2971 23.3851 22.0411 22.6843L21.2762 20.5955C20.6763 18.957 19.7264 17.4689 18.4926 16.2351C17.2587 15.0013 15.7707 14.0513 14.1321 13.4515L12.0434 12.6866C11.3436 12.4306 11.3436 11.4406 12.0434 11.1846L14.1321 10.4197C15.7707 9.8199 17.2587 8.86996 18.4926 7.63612C19.7264 6.40229 20.6763 4.91423 21.2762 3.27567L22.0411 1.18695Z"
      fill="currentColor"
    />
    <path
      d="M5.50615 0.924521C5.63416 0.574639 6.12911 0.574639 6.25712 0.924521L6.63954 1.96883C6.93944 2.78808 7.4144 3.53208 8.03129 4.14897C8.64818 4.76587 9.39218 5.24082 10.2114 5.54073L11.2557 5.92314C11.6062 6.05115 11.6062 6.54611 11.2557 6.67411L10.2114 7.05653C9.39218 7.35644 8.64818 7.83139 8.03129 8.44828C7.4144 9.06518 6.93944 9.80917 6.63954 10.6284L6.25712 11.6727C6.12911 12.0232 5.63416 12.0232 5.50615 11.6727L5.12374 10.6284C4.82383 9.80917 4.34888 9.06518 3.73198 8.44828C3.11509 7.83139 2.37109 7.35644 1.55184 7.05653L0.507529 6.67411C0.157647 6.54611 0.157647 6.05115 0.507529 5.92314L1.55184 5.54073C2.37109 5.24082 3.11509 4.76587 3.73198 4.14897C4.34888 3.53208 4.82383 2.78808 5.12374 1.96883L5.50615 0.924521Z"
      fill="currentColor"
    />
  </svg>
);
```
