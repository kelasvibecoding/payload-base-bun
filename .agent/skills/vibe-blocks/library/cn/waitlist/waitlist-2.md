# Waitlist 2

## Metadata
- **Category**: Waitlist
- **Objective**: Provide an interactive "Coming Soon" or product launch page with an integrated countdown timer and live signup metrics.
- **Use Case**: Feature-rich landing pages for SaaS products or apps with a fixed launch date where driving urgency through a visual timeline is the primary marketing goal.
- **Visual Style**: Clean centered aesthetic featuring a sophisticated "Glowing Border" email signup form, a precise "Countdown Timer" (Days/Hours/Min/Sec), and an animated "Live Badge" with a pulsing primary indicator. Includes overlapping avatar stacks for social proof.
- **Interactivity**: Real-time reactive countdown clock, framer-motion powered pulse animations, and CSS conical-gradient "spinning border" effects on the capture form.

## Description
Waitlist 2 is the "Urgency" component of the vibe-library. It leverages temporal psychology by placing a prominent, live countdown timer at the heart of the user experience. The "Glowing Border" input field uses a high-performance conic-gradient animation to draw the user's eye toward the capture zone. With integrated launch metadata and social proof avatars, it provides a sense of a living, breathing community even before the product is live.

## Source Code

```tsx
"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import React, { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Waitlist2Props {
  logo?: string;
  badge?: string;
  heading?: string;
  description?: string;
  avatars?: string[];
  joinedPeople?: number;
  launchDate?: string;
  className?: string;
}

const SignupForm = () => {
  return (
    <div className="relative mt-10 w-full max-w-md overflow-hidden rounded-2xl p-px group shadow-xl hover:shadow-primary/10 transition-all">
      {/* Animated Glowing Border */}
      <div
        style={{
          background:
            "conic-gradient(transparent 70%, hsl(var(--primary)) 100%)",
          animationDuration: "3s",
        }}
        className="absolute top-1/2 left-1/2 aspect-square w-[200%] -translate-x-1/2 -translate-y-1/2 animate-spin opacity-50"
      />
      <form className="relative z-10 flex w-full flex-col items-center gap-2 rounded-[calc(1rem-1px)] bg-background p-2 md:flex-row md:p-1.5">
        <Input className="w-full border-none bg-transparent shadow-none focus-visible:ring-0 font-medium h-11" required type="email" placeholder="professional@company.com" />
        <Button type="submit" className="w-full md:w-auto h-11 px-8 rounded-xl font-bold shadow-lg shadow-primary/20">
          Capture Access
        </Button>
      </form>
    </div>
  );
};

interface CountdownTimerProps {
  targetDate: string;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const target = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          day: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hour: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minute: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          second: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="mt-12 flex flex-col items-center gap-6">
      <div className="flex justify-center gap-8 md:gap-12">
        {Object.entries(timeLeft).map(([key, value]) => (
          <React.Fragment key={key}>
            <div className="flex flex-col items-center gap-1">
              <span className="text-3xl font-bold text-foreground tabular-nums tracking-tighter md:text-4xl">{value.toString().padStart(2, '0')}</span>
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">
                {key}
              </span>
            </div>
            <span className="text-muted-foreground/30 font-bold text-2xl pt-0.5 last:hidden">:</span>
          </React.Fragment>
        ))}
      </div>
      <div className="flex items-center gap-2 rounded-full bg-muted/50 px-4 py-1.5 border border-border">
        <Calendar className="text-primary size-3.5" />
        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground leading-none">
          Estimated Launch: {targetDate}
        </span>
      </div>
    </div>
  );
};

const Waitlist2 = ({
  logo = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-white-1.svg",
  badge = `LAUNCHING Q1 ${new Date().getFullYear() + 1}`,
  heading = "The future of engineering is almost here.",
  description = "Join the private beta. Get early access to the tools that are redefining how high-growth teams build and ship digital products.",
  avatars = [
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/portraits/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/portraits/michael-dam-mEZ3PoFGs_k-unsplash.jpg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/portraits/nima-motaghian-nejad-_omdf_EgRUo-unsplash.jpg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/portraits/good-faces-xmSWVeGEnJw-unsplash.jpg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/portraits/christian-buehner-DItYlc26zVI-unsplash 1.png",
  ],
  joinedPeople = 12500,
  launchDate = `03/31/${new Date().getFullYear() + 1}`,
  className,
}: Waitlist2Props) => {
  return (
    <section className={cn("py-32 bg-background font-sans", className)}>
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center gap-8">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-primary p-3 shadow-xl shadow-primary/20">
              <img src={logo} alt="Logo" className="size-full" />
            </div>
            <Badge variant="outline" className="rounded-full border-border bg-muted/30 px-4 py-1.5 font-bold tracking-wide">
              <div className="relative mr-2 flex items-center justify-center">
                <span className="size-2 rounded-full bg-primary" />
                <motion.span
                  animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute size-2 rounded-full bg-primary"
                />
              </div>
              {badge}
            </Badge>
          </div>

          <div className="mt-8 space-y-4 max-w-2xl text-center">
            <h3 className="text-4xl font-bold tracking-tight text-foreground lg:text-6xl">
              {heading}
            </h3>
            <p className="mx-auto max-w-lg text-lg font-medium text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>

          <SignupForm />

          {/* User Metrics */}
          <div className="mt-10 flex flex-col items-center gap-4">
            <div className="flex items-center -space-x-3">
              {avatars.map((avatar, i) => (
                <img key={i} src={avatar} alt="User" className="size-10 rounded-full border-4 border-background shadow-md object-cover" />
              ))}
              <div className="z-10 flex size-10 items-center justify-center rounded-full border-4 border-background bg-primary text-[10px] font-bold text-white shadow-md">
                +12k
              </div>
            </div>
            <p className="text-sm font-bold text-muted-foreground tracking-wide">
              Be part of the {joinedPeople.toLocaleString()}+ growing waitlist.
            </p>
          </div>

          <CountdownTimer targetDate={launchDate} />
        </div>
      </div>
    </section>
  );
};

export { Waitlist2 };
```
