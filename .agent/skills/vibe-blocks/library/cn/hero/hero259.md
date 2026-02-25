# Hero 259

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for developer-centric component platforms, pairing a multi-layered left-aligned layout with a high-fidelity "Animated-Dither-Background" visualization anchored by specialized technical fragments.
- **Use Case**: Best for open-source projects, developer tools (e.g., "The components designed for developers"), or professional coding platforms that want to emphasize "Backed by Ramp & Mercury" and "Finely crafted components."
- **Visual Style**: Cinematic Technical aesthetic. Features a split-column layout Beginning with a high-fidelity `Header` Positioning a unique `companyLogo` and `links` segments anchored by categorical `Button` fragments. The visual anchor is a unique "Dithered-Cosmic-Matrix" Positioning a high-fidelity `canvas` visualization Using specialized `ImageData` pixel manipulation anchored by categorical `swayRandomized` and `cosmic` shader logic Utilizing unique `dotSize` fragments anchored by high-fidelity `requestAnimationFrame` transitions to create a unique high-status coordinate visual focus. Layout utilizes unique "Footer-Metadata" Positioning high-fidelity `incubators` and `companyDescription` segments to drive professional enrollment.
- **Interactivity**: High technical engagement. Features specialized dither-shimmer transitions and high-fidelity responsive canvas scaling to drive professional enrollment.

## Source Code

### `hero259.tsx`
```tsx
"use client";

import React, { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface LinkItem {
  text: string;
  url: string;
}

interface HeaderProps {
  companyLogo?: string;
  links?: LinkItem[];
  className?: string;
}

const Header = ({ companyLogo, links, className }: HeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-wrap items-center justify-between gap-8 py-8",
        className,
      )}
    >
      <img
        src={companyLogo}
        alt="elite logo"
        className="w-34 md:w-50 dark:invert transition-all hover:scale-105"
      />
      <div className="flex items-center gap-4">
        {links?.map((link, index) => {
          return (
            <a href={link.url} key={`link-${index}`}>
              <Button size="sm" variant="ghost" className="font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
                {link.text}
              </Button>
            </a>
          );
        })}
      </div>
    </div>
  );
};

interface ContentProps {
  heading?: string;
  buttonText?: string;
  buttonUrl?: string;
}

const Content = ({ heading, buttonText, buttonUrl }: ContentProps) => {
  return (
    <div className="flex flex-col gap-12 group/content">
      <h1 className="font-black text-6xl lg:text-[10rem] leading-[0.85] tracking-tighter uppercase italic text-foreground max-w-4xl">
        {heading} elite.
      </h1>
      <div className="flex items-center gap-8">
          <a href={buttonUrl}>
            <Button size="xl" className="h-fit rounded-full bg-primary px-16 py-8 font-black text-2xl text-primary-foreground shadow-2xl transition-all hover:scale-110 active:scale-95 duration-500 uppercase tracking-widest leading-none">
              {buttonText} elite
            </Button>
          </a>
          <div className="h-2 w-32 bg-primary/20 rounded-full animate-pulse-slow ml-4" />
      </div>
    </div>
  );
};

interface FooterProps {
  companyDescription?: string;
  incubators?: string;
}

const Footer = ({ companyDescription, incubators }: FooterProps) => {
  return (
    <div className="flex max-w-2xl flex-col gap-6 py-12 border-t border-primary/10 group/footer">
      <p className="font-black text-sm uppercase tracking-[0.3em] text-primary animate-pulse">{incubators} world-wide</p>
      <p className="text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-l-8 border-primary/20 pl-10 py-2">
        {companyDescription} Deploy finite fragments for professional elite status world-wide.
      </p>
    </div>
  );
};

const DitherBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement?.getBoundingClientRect() || { width: 800, height: 1200 };
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const SEED = 42.0;
    const dotSize = 8; // Further increased for premium low-fidelity aesthetic

    const swayRandomized = (seed: number, value: number): number => {
      const f = Math.floor(value);
      const start = Math.sin((Math.cos(f * seed) + Math.sin(f * 1024.0)) * 345.0 + seed);
      const end = Math.sin((Math.cos((f + 1.0) * seed) + Math.sin((f + 1.0) * 1024.0)) * 345.0 + seed);
      const t = value - f;
      const smooth = t * t * (3 - 2 * t);
      return start + (end - start) * smooth;
    };

    const cosmic = (seed: number, con: [number, number, number]): number => {
      let sum = swayRandomized(seed, con[2] + con[0]);
      sum = sum + swayRandomized(seed, con[0] + con[1] + sum);
      sum = sum + swayRandomized(seed, con[1] + con[2] + sum);
      return sum * 0.3333333;
    };

    const dither = (chance: number, uv: [number, number]): boolean => {
      const dotValue = Math.sin(uv[0]) * Math.sin(uv[1]) + Math.cos(uv[1]) * Math.cos(uv[0]);
      return dotValue >= chance * 1.5;
    };

    const draw = () => {
      if (!ctx || !canvas.parentElement) return;

      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);
      const aTime = timeRef.current * 0.125;

      const s: [number, number, number] = [
        swayRandomized(-16405.3, aTime - 1.11),
        swayRandomized(-77664.8, aTime + 1.41),
        swayRandomized(-50993.5, aTime + 2.61),
      ].map((v) => v * 5.0) as [number, number, number];

      const c: [number, number, number] = [
        swayRandomized(-10527.9, aTime - 1.11),
        swayRandomized(-61557.6, aTime + 1.41),
        swayRandomized(-43527.9, aTime + 2.61),
      ].map((v) => v * 5.0) as [number, number, number];

      const cols = Math.ceil(width / dotSize);
      const rows = Math.ceil(height / dotSize);
      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;
      const uvTimeMultiplier = timeRef.current * 71.0;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * dotSize;
          const y = row * dotSize;
          const uv: [number, number] = [x / width, y / height];
          const con: [number, number, number] = [
            0.00043 * aTime + c[0] * uv[0] + s[0] * uv[1],
            0.00056 * aTime + c[1] * uv[0] + s[1] * uv[1],
            0.00081 * aTime + c[2] * uv[0] + s[2] * uv[1],
          ];

          con[0] = cosmic(SEED, con);
          con[1] = cosmic(SEED, con);
          con[2] = cosmic(SEED, con);

          const chance = Math.sin(con[2] * Math.PI);
          const animatedUv: [number, number] = [uv[0] * uvTimeMultiplier, uv[1] * uvTimeMultiplier];
          const shouldDraw = dither(chance, animatedUv);
          const colorValue = shouldDraw ? 50 : 255; // Dark primary variant vs white for elite look

          for (let dy = 0; dy < dotSize && y + dy < height; dy++) {
            for (let dx = 0; dx < dotSize && x + dx < width; dx++) {
              const idx = ((y + dy) * width + (x + dx)) * 4;
              data[idx] = colorValue;
              data[idx + 1] = colorValue;
              data[idx + 2] = colorValue;
              data[idx + 3] = 255;
            }
          }
        }
      }
      ctx.putImageData(imageData, 0, 0);
    };

    const animate = () => {
      timeRef.current += 0.015;
      draw();
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="size-full bg-background" />;
};

interface Hero259Props {
  companyLogo?: string;
  heading?: string;
  buttonText?: string;
  buttonUrl?: string;
  companyDescription?: string;
  incubators?: string;
  links?: LinkItem[];
  className?: string; // Optional custom styling
}

const Hero259 = ({
  companyLogo = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblocks-logo-word.svg",
  heading = "The components designed for developers",
  buttonText = "Get Started",
  buttonUrl = "https://www.shadcnblocks.com",
  companyDescription = "Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
  incubators = "Backed by Ramp & Mercury",
  links = [
    { text: "Documentation", url: "#" },
    { text: "GitHub", url: "#" },
    { text: "Twitter", url: "#" },
  ],
  className
}: Hero259Props) => {
  return (
    <section className={cn("relative min-h-screen w-full bg-background font-sans overflow-hidden group/hero border-b", className)}>
      <div className="grid grid-cols-10 lg:grid-cols-2 min-h-screen isolate">
         {/* Atmos Depth layer side */}
         <div className="absolute inset-x-0 top-0 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>

        <div className="col-span-9 flex flex-col justify-between p-12 lg:col-span-1 border-r border-primary/10 bg-background/50 backdrop-blur-3xl relative z-30">
          <Header companyLogo={companyLogo} links={links} />
          <Content
            heading={heading}
            buttonText={buttonText}
            buttonUrl={buttonUrl}
          />
          <Footer
            companyDescription={companyDescription}
            incubators={incubators}
          />
        </div>
        <div className="col-span-1 min-h-screen overflow-hidden relative grayscale group-hover/hero:grayscale-0 transition-grayscale duration-3000">
           <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse-slow"></div>
           <DitherBackground />
           <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-background to-transparent z-10" />
        </div>
      </div>
    </section>
  );
};

export { Hero259 };
```
