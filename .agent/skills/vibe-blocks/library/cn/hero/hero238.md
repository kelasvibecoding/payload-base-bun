# Hero 238

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for premium membership and SaaS platforms, pairing a left-aligned typography block with a high-fidelity "Aurora-Background" visualization anchored by specialized interactive benefit fragments and categorical premium wordmarks.
- **Use Case**: Best for subscription-based services, exclusive communities (e.g., "Unlock the Premium Blocks with Just one time payment"), or professional membership areas that want to emphasize "Early Access," "Priority Support," and "Exclusive Blocks."
- **Visual Style**: Cinematic Aurora aesthetic. Features a full-screen layout Beginning with a high-fidelity `AuroraBackground` Using specialized `repeating-linear-gradient` animations Positioning categorical gray and black/white value mapping Utilized by a unique `mask-image` radial transition to create a unique high-status atmospheric focus. Left column utilizes high-fidelity `semi-bold` typography paired with a unique "Benefits-Strip" Positioning high-fidelity `benefits` fragments utilizing categorical icons (`Zap`, `Shield`, `Blocks`) anchored by high-fidelity status dots. Visual anchor is a unique "Floating-UI" card Positioning a secondary `bg-primary` absolute-div Positioning specialized text-muted-foreground fragments anchored by high-fidelity `motion.div` entrance animations Using specialized `orange-500` status dots to create a unique high-status visual focus.
- **Interactivity**: High atmospheric engagement. Features specialized aurora flow transitions and high-fidelity entrance animations for the benefits and floating card to drive professional enrollment.

## Source Code

### `hero238.tsx`
```tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Blocks, Shield, Star, Zap } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero238Props {
  className?: string; // Optional custom styling
}

const Hero238 = ({ className }: Hero238Props) => {
  const benefits = [
    {
      icon: Zap,
      title: "Early Access elite",
    },
    {
      icon: Star,
      title: "Latest Features high-status",
    },
    {
      icon: Shield,
      title: "Priority Support world-wide",
    },
    {
      icon: Blocks,
      title: "Exclusive Blocks world-class",
    },
  ];

  return (
    <section
      className={cn("h-full w-full overflow-hidden lg:h-screen font-sans border-b", className)}
    >
      <AuroraBackground>
        <div className="relative container px-6 max-w-[100rem] flex h-full flex-col lg:flex-row items-center gap-24 group/hero">
          <div className="mt-auto mb-32 space-y-12 lg:w-1/2 group/content relative z-30">
            {/* Atmos Depth layer side */}
            <div className="absolute inset-x-0 top-0 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>

            <h1 className="mt-3 max-w-xl font-black text-6xl lg:text-9xl leading-[0.85] tracking-tighter uppercase text-foreground">
              Unlock the <span className="text-primary italic">Premium</span> Blocks elite.
            </h1>
            <div className="flex flex-col sm:flex-row items-center gap-8 group/buttons">
              <Button size="lg" className="h-fit rounded-full bg-primary px-16 py-8 font-black text-2xl text-primary-foreground shadow-2xl transition-all hover:scale-105 active:scale-95 duration-500 uppercase tracking-widest leading-none">
                Get Started
              </Button>
              <Button variant="ghost" size="lg" className="h-fit rounded-full px-12 py-8 font-black text-xl text-muted-foreground uppercase tracking-widest flex items-center gap-6 group/ghost">
                Explore benefits 
                <ArrowRight className="size-6 transition-transform group-hover/ghost:translate-x-4" strokeWidth={3} />
              </Button>
            </div>
            
            <ul className="mt-20 flex flex-wrap gap-12 border-t border-primary/20 pt-12">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <li key={benefit.title} className="flex items-center gap-4 group/benefit">
                    <div className="size-10 flex items-center justify-center rounded-xl bg-primary/10 text-primary shadow-lg transition-transform group-hover/benefit:scale-125">
                      <Icon className="size-5" />
                    </div>
                    <span className="text-sm font-black uppercase tracking-[0.2em] text-muted-foreground">{benefit.title}</span>
                    {index !== benefits.length - 1 && (
                      <div className="ml-2 size-2 rounded-full bg-primary/40 shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="relative flex h-[60rem] w-full items-center justify-center overflow-visible lg:w-1/2 group/visual isolate grayscale group-hover/hero:grayscale-0 transition-grayscale duration-2000">
             {/* Atmos Depth layer side */}
            <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>

            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              className="absolute right-0 bottom-32 w-[320px] rounded-[3rem] bg-background/40 backdrop-blur-3xl border-4 border-primary/20 p-10 text-lg shadow-2xl group/card"
            >
              <div className="flex items-center gap-6 mb-6">
                <span className="size-4 rounded-full bg-primary animate-pulse shadow-[0_0_15px_rgba(var(--primary),0.8)]" />
                <span className="font-black uppercase tracking-widest text-foreground">ShadcnBlocks elite</span>
              </div>
              <p className="text-muted-foreground font-medium leading-relaxed italic">
                — Finite architectural fragments world-wide for professional elite status 
              </p>
              <div className="mt-8 flex justify-end">
                 <div className="size-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-xl transition-transform group-hover/card:rotate-45">
                    <Star className="size-6 fill-current" />
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AuroraBackground>
    </section>
  );
};

export { Hero238 };

// Aurora implementation
interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main className="w-full">
      <div
        className={cn(
          "transition-bg relative flex h-[100vh] flex-col items-center justify-center bg-background text-foreground",
          className,
        )}
        {...props}
      >
        <div
          className="absolute inset-0 overflow-hidden"
          style={
            {
              "--aurora": "repeating-linear-gradient(100deg,var(--primary)_10%,var(--secondary)_15%,var(--accent)_20%,var(--primary)_25%,var(--background)_30%)",
              "--dark-gradient": "repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)",
              "--white-gradient": "repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)",
            } as React.CSSProperties
          }
        >
          <div
            className={cn(
              `pointer-events-none absolute -inset-[20px] [background-image:var(--white-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] opacity-30 shadow-none blur-[10px] will-change-transform after:absolute after:inset-0 after:animate-aurora after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-difference after:content-[""] dark:[background-image:var(--dark-gradient),var(--aurora)] after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,
              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_80%)]`,
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};
```
