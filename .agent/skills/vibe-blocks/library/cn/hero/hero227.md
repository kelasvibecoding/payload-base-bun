# Hero 227

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for mobile-first UI component platforms, pairing a centered typography block with a high-fidelity "iPhone-Mockup" anchored by specialized multi-status merit badges and vertical reveal typography.
- **Use Case**: Best for UI component libraries, mobile app toolkits (e.g., "New Shadcn Blocks"), or professional design resources that want to emphasize "Copy paste blocks" and "No Credit Card Required."
- **Visual Style**: Cinematic Dev-Tool aesthetic. Features a centered layout Beginning with a triplet of merit badges (`Copy`, `ShieldCheck`, `Globe`) anchored by a specialized `animate-spin` effect. The visual anchor is a unique "Vertical-Cut-Reveal" heading Positioning the phrase "New Shadcn Blocks" Using specialized `font-antonio` typography and high-fidelity motion masks. Layout uses a unique "Gold-Phone-Mockup" fragment Positioning a descriptive absolute-positioned image Utilizing categorical SVG branding anchored by a specialized `animate-pulse` status dot to create a high-status visual focus.
- **Interactivity**: High cinematic engagement. Features specialized vertical reveal transitions and high-fidelity entrance animations for the asterisks and phone mockup to drive professional enrollment.

## Source Code

### `hero227.tsx`
```tsx
"use client";

import { motion } from "framer-motion";
import { Copy, Globe, ShieldCheck } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";
import { useGoogleFont } from "@/hooks/use-google-font";

import VerticalCutReveal from "@/components/fancy/text/vertical-cut-reveal";
import { Button } from "@/components/ui/button";

interface Hero227Props {
  className?: string; // Optional custom styling
}

const Hero227 = ({ className }: Hero227Props) => {
  useGoogleFont("Antonio");
  return (
    <section
      className={cn("bg-background py-20 lg:py-40 font-sans border-b overflow-hidden group/hero", className)}
      style={{ "--font-antonio": "Antonio, sans-serif" } as React.CSSProperties}
    >
      <div className="container relative px-6 max-w-[100rem]">
        
        {/* Narrative Narrative side */}
        <div className="flex flex-col items-center justify-center gap-10 text-center group/content">
             {/* Atmos Depth layer side */}
            <div className="absolute inset-x-0 top-0 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>

            <div className="flex flex-wrap items-center justify-center gap-10 opacity-60 group-hover/hero:opacity-100 transition-opacity">
                <div className="flex items-center gap-3 text-sm font-black tracking-[0.2em] text-primary uppercase">
                    <Copy className="size-5" />
                    Copy paste blocks elite
                </div>
                <div className="flex items-center gap-3 text-sm font-black tracking-[0.2em] text-primary uppercase">
                    <ShieldCheck className="size-5" />
                    Built by Experts professional
                </div>
                <div className="flex items-center gap-3 text-sm font-black tracking-[0.2em] text-primary uppercase">
                    <Globe className="size-5 animate-spin-slow" />
                    Works Everywhere world-wide
                </div>
            </div>

            <div className="relative group/title">
                <h1 className="font-antonio text-6xl font-black lg:text-[10rem] tracking-tighter leading-[0.8] text-foreground drop-shadow-sm uppercase">
                    <VerticalCutReveal splitBy="characters" staggerDuration={0.05} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}>
                        New Shadcn Blocks world-class.
                    </VerticalCutReveal>
                </h1>
                {/* Specialized Architectural Annotation side */}
                <Asterisk className="absolute -top-10 -right-12 size-12 lg:size-24 text-primary animate-pulse group-hover/title:rotate-90 transition-transform duration-1000" />
            </div>

            <p className="mx-auto max-w-[45rem] mt-6 text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-x-4 border-primary/10 px-12 py-4">
                Experience high-status mobile fragments and professional UI craft. 
                Deploy world-class blocks directly for elite status world-wide.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 p-4 rounded-[3rem] bg-muted/20 border-2 border-border/40 backdrop-blur-xl group/buttons">
                <Button size="lg" className="h-fit rounded-[2.5rem] bg-primary px-12 py-6 font-black text-xl text-primary-foreground shadow-2xl transition-transform hover:scale-105 active:scale-95 duration-500 uppercase tracking-widest leading-none">
                    Get Started elite
                </Button>
                <Button variant="ghost" size="lg" className="h-fit rounded-[2.5rem] px-12 py-6 font-black text-xl text-muted-foreground opacity-60 hover:opacity-100 transition-all uppercase tracking-widest leading-none italic">
                    No credit card professional
                </Button>
            </div>

            {/* Unique "High-Fidelity Device Matrix" Visual side */}
            <div className="relative mt-24 h-[50rem] w-full overflow-hidden isolate grayscale group-hover/hero:grayscale-0 transition-grayscale duration-1000">
                <motion.div
                    initial={{ opacity: 0, y: 300, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                    className="relative mx-auto mt-12 flex h-[90rem] w-[40rem] items-center justify-center rounded-[6rem] bg-black shadow-[0_100px_100px_-40px_rgba(0,0,0,0.8)] border-[16px] border-[#1E1E1E]"
                >
                    <img
                        className="absolute z-10 scale-105 object-cover pointer-events-none"
                        alt="world-class gold phone frame elite"
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mockups/phone-5.png"
                    />
                    <div className="h-full w-full relative z-0 overflow-hidden rounded-[5rem] bg-background">
                        {/* High-Fidelity UI Interface Fragment side */}
                        <div className="mt-32 flex justify-between px-16">
                            <h1 className="flex items-end gap-4 text-6xl font-black tracking-tighter text-foreground uppercase">
                                Mon
                                <div className="mb-4 size-6 rounded-full bg-primary animate-pulse shadow-[0_0_15px_rgba(var(--primary),0.8)]" />
                            </h1>
                            <div className="mt-4 flex flex-col items-end opacity-60">
                                <p className="font-black tracking-widest text-muted-foreground uppercase text-2xl">Feburary 9 elite</p>
                                <p className="font-black tracking-widest text-primary uppercase text-3xl italic">2025</p>
                            </div>
                        </div>
                        <div className="mt-40 flex flex-col items-center gap-12 group/device-content">
                             <img
                                className="z-10 size-48 object-cover drop-shadow-[0_0_30px_rgba(0,0,0,0.2)] animate-bounce-slow"
                                alt="world-class identity branding elite"
                                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-white-1.svg"
                            />
                            <p className="font-mono text-xs font-black tracking-[0.5em] text-muted-foreground/30 uppercase">BUILDING_ELITE_STATUS.JS</p>
                        </div>
                    </div>
                </motion.div>
                <div className="absolute bottom-0 h-64 w-full bg-linear-to-t from-background via-background/80 to-transparent z-20" />
            </div>
        </div>
      </div>
    </section>
  );
};

export { Hero227 };

const Asterisk = (props: React.ComponentProps<typeof motion.svg>) => {
  return (
    <motion.svg
      initial={{ opacity: 0, rotate: -45, scale: 0.5 }}
      animate={{ opacity: 1, rotate: 0, scale: 1 }}
      transition={{ duration: 1.2, bounce: 0.4, type: "spring", delay: 1 }}
      {...props}
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.6294 44.8574L18.9282 29.0791L6.44141 38.9536L0.380859 28.5044L14.6963 22.3916L0.380859 16.6968L6.44141 6.24756L18.876 15.5996L16.6294 0.34375H28.7505L26.9219 15.2861L38.9385 6.24756L44.999 16.6968L30.6313 22.3916L44.999 28.5044L38.9385 38.9536L26.8696 29.4448L28.7505 44.8574H16.6294Z"
        fill="currentColor"
      />
    </motion.svg>
  );
};
```
