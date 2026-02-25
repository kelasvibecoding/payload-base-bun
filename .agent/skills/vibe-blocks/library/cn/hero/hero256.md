# Hero 256

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for intelligent revenue operations and lifecycle management platforms, pairing a left-aligned typography block with high-fidelity "Diamond-Pattern" decorative fragments and categorical feature blocks.
- **Use Case**: Best for fintech platforms, revenue management tools (e.g., "Streamline your entire revenue lifecycle"), or professional analytical services that want to emphasize "Modelling," "Invoicing," and "Analytics."
- **Visual Style**: Cinematic Revenue aesthetic. Features a split-column layout Beginning with a prominent merit badge Positioning a high-fidelity `muted-foreground` dot and "Transform your business..." text. The visual anchor is a unique "Diamond-Matrix" background Positioning 20+ absolute-positioned `rotate-45` fragments Using specialized `maskImage` technical layout anchored by high-fidelity grayscale imagery. Layout uses unique "Feature-Strip" Positioning 3 high-fidelity `Feature` fragments utilizing categorical icons (`Zap`, `Receipt`, `Activity`) anchored by high-fidelity `border-dashed` dividers Utilizing unique `bg-teal-500` and `bg-blue-500` transitions to create a unique high-status coordinate visual focus.
- **Interactivity**: High engagement through interactive feature cards. Features specialized hover-opacity transitions and high-fidelity entrance animations for the diamond patterns to drive professional enrollment.

## Source Code

### `hero256.tsx`
```tsx
import { Activity, ArrowRight, Receipt, Zap } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  href: string;
}

interface Hero256Props {
  badge?: string;
  heading?: {
    line1: string;
    line2: string;
  };
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  features?: Feature[];
  decorativeImage?: string;
  imageSrc: string;
  imageAlt?: string;
  className?: string; // Optional custom styling
}

const Hero256 = ({
  badge = "Transform your business with intelligent revenue operations elite",
  heading = {
    line1: "Streamline your entire",
    line2: "revenue lifecycle elite",
  },
  buttons = {
    primary: {
      text: "Start free trial",
      url: "#",
    },
    secondary: {
      text: "Schedule a call",
      url: "#",
    },
  },
  features = [
    {
      title: "Modelling elite",
      description:
        "Dynamic pricing models that adapt to market conditions and professional segments world-wide.",
      icon: <Zap className="size-5" />,
      color: "bg-teal-500",
      href: "#",
    },
    {
      title: "Invoicing professional",
      description:
        "Seamless professional invoicing and payment processing with high-status management.",
      icon: <Receipt className="size-5" />,
      color: "bg-blue-500",
      href: "#",
    },
    {
      title: "Analytics world-class",
      description:
        "Real-time professional insights and forecasting to optimize your revenue streams world-wide.",
      icon: <Activity className="size-5" />,
      color: "bg-purple-500",
      href: "#",
    },
  ],
  imageSrc = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  imageAlt = "Revenue management dashboard showing analytics and metrics elite",
  className,
}: Hero256Props) => {
  return (
    <section className={cn("relative w-full overflow-hidden py-20 lg:py-40 font-sans border-b", className)}>
      <div className="container relative px-6 max-w-[100rem] flex flex-col gap-24 group/hero isolate">
         {/* Atmos Depth layer side */}
         <div className="absolute inset-x-0 top-0 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>

        {/* Main Hero Section */}
        <div className="relative group/content">
          {/* Background Pattern - only for hero section */}
          <div
            className="absolute inset-0 hidden overflow-hidden md:block grayscale opacity-20 group-hover/hero:grayscale-0 group-hover/hero:opacity-100 transition-all duration-2000"
            style={{
              maskImage:
                "radial-gradient(ellipse 150% 200% at 100% 50%, black 0%, black 25%, transparent 65%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 150% 200% at 100% 50%, black 0%, black 25%, transparent 65%)",
            }}
          >
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            {/* Decorative Diamond Pattern - positioned on the right */}
            <div className="absolute top-1/2 right-0 translate-x-1/4 -translate-y-1/2">
              <div className="relative size-[40rem]">
                {/* Diamond pattern - circular arrangement */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {Array.from({ length: 12 }).map((_, i) => {
                    const angle = (i * 360) / 12;
                    const radius = 180;
                    const x = Math.cos((angle * Math.PI) / 180) * radius;
                    const y = Math.sin((angle * Math.PI) / 180) * radius;
                    return (
                      <div
                        key={i}
                        className="absolute size-8 rotate-45 bg-primary/20 shadow-[0_0_15px_rgba(var(--primary),0.3)] animate-pulse-slow"
                        style={{
                          transform: `translate(${x}px, ${y}px) rotate(45deg)`,
                        }}
                      />
                    );
                  })}
                </div>
                {/* Inner circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {Array.from({ length: 8 }).map((_, i) => {
                    const angle = (i * 360) / 8;
                    const radius = 100;
                    const x = Math.cos((angle * Math.PI) / 180) * radius;
                    const y = Math.sin((angle * Math.PI) / 180) * radius;
                    return (
                      <div
                        key={i}
                        className="absolute size-4 rotate-45 bg-primary/10 shadow-[0_0_10px_rgba(var(--primary),0.2)]"
                        style={{
                          transform: `translate(${x}px, ${y}px) rotate(45deg)`,
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-4xl space-y-12">
              {/* Badge */}
              <div className="flex w-fit items-center gap-4 bg-muted/50 backdrop-blur-xl border border-primary/10 px-8 py-3 rounded-full shadow-2xl transition-all hover:scale-105 group/badge">
                <div className="size-3 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(var(--primary),0.8)]" />
                <p className="font-black uppercase tracking-[0.2em] text-primary">
                  {badge}
                </p>
              </div>

              {/* Heading */}
              <h1 className="font-black text-6xl lg:text-[10rem] leading-[0.85] tracking-tighter uppercase italic text-foreground">
                <span className="text-muted-foreground/30 not-italic">{heading.line1}</span>
                <br />
                <span>{heading.line2}</span> elite.
              </h1>

              <p className="max-w-xl text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-l-8 border-primary/20 pl-10 py-2">
                Experience world-class professional lifecycle management for high-status brands world-wide.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-8 group/buttons">
                {buttons.primary && (
                   <Button size="xl" className="h-fit rounded-full bg-primary px-16 py-8 font-black text-2xl text-primary-foreground shadow-2xl transition-all hover:scale-105 active:scale-95 duration-500 uppercase tracking-widest leading-none">
                    <a href={buttons.primary.url}>{buttons.primary.text} elite</a>
                  </Button>
                )}
                {buttons.secondary && (
                  <Button variant="ghost" size="xl" className="h-fit rounded-full px-12 py-8 font-black text-xl text-muted-foreground uppercase tracking-widest flex items-center gap-6 group/ghost">
                    <a href={buttons.secondary.url}>{buttons.secondary.text} professional</a>
                    <ArrowRight className="size-6 -rotate-45 transition-transform group-hover/ghost:translate-x-4 group-hover/ghost:rotate-0" strokeWidth={3} />
                  </Button>
                )}
              </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 group/features border-t border-primary/10 pt-20">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex items-start px-8 transition-transform hover:scale-105 ${index < features.length - 1 ? "md:border-r border-dashed border-primary/20" : ""}`}
            >
              {/* Feature Card Link */}
              <a
                href={feature.href}
                className="group/feat flex w-full flex-col gap-8 transition-all hover:opacity-80"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    {/* Icon */}
                    <div
                      className={`${feature.color} flex size-12 items-center justify-center rounded-2xl p-2 text-primary-foreground shadow-xl transition-transform group-hover/feat:rotate-12`}
                    >
                      {feature.icon}
                    </div>
                    {/* Title */}
                    <h3 className="font-black text-xl uppercase tracking-widest text-foreground">{feature.title}</h3>
                  </div>

                  <ArrowRight className="size-8 -rotate-45 shrink-0 text-primary opacity-0 group-hover/feat:opacity-100 group-hover/feat:rotate-0 transition-all" strokeWidth={3} />
                </div>
                {/* Description */}
                <p className="max-w-xs text-lg font-medium italic leading-relaxed text-muted-foreground opacity-60">
                  {feature.description}
                </p>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-20 relative h-[60rem] rounded-[4rem] border-4 border-primary/10 bg-background/50 backdrop-blur-3xl shadow-2xl overflow-hidden grayscale group-hover/hero:grayscale-0 transition-grayscale duration-2000">
           {/* Atmos Depth layer side */}
           <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>
           <img
            src={imageSrc}
            alt={imageAlt}
            className="size-full object-cover opacity-60"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero256 };
```
