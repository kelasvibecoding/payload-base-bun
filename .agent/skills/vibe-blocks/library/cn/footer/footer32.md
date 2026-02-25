# Footer 32

## Metadata
- **Category**: Footer
- **Objective**: Deliver a centered, "Final Call" conversion footer with decorative lines, a prominent heading, and a rainbow-styled CTA.
- **Use Case**: SaaS final pitch sections or conversion-ready landing pages.
- **Visual Style**: "Centered Conversion" aesthetic. Features a fully centered stack: top is a "Let's connect" pre-heading flanked by decorative gradient lines. Followed by a massive 6XL+ "Final Pitch" heading and detailed description. Primary CTA uses a specialized `RainbowButton` component with an `ArrowUpRight` indicator. Bottom row organizes social icons (Twitter, Instagram, Facebook) separated by vertical `bg-border` lines and a centralized support email.
- **Interactivity**: High-visibility conversion engagement. Features rainbow-gradient button animations, hover-responsive social icons, and group-hover button translations.

## Source Code

### `footer32.tsx`
```tsx
import { ArrowUpRight, Facebook, Instagram, Twitter } from "lucide-react";

import { cn } from "@/lib/utils";

import { RainbowButton } from "@/components/ui/rainbow-button";

interface Footer32Props {
  preHeading?: string;
  heading1?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  email?: string;
  socialLinks?: {
    link1: {
      url: string;
      label: string;
    };
    link2: {
      url: string;
      label: string;
    };
    link3: {
      url: string;
      label: string;
    };
  };
  className?: string;
}

const Footer32 = ({
  preHeading = "Let's connect elite",
  heading1 = "Unlock your professional potential with Shadcnblocks today.",
  description = "Join thousands of high-status companies already leveraging our elite professional platform to scale world-wide.",
  buttonText = "Get Started Now",
  buttonUrl = "#",
  email = "hello@shadcnblocks.elite",
  socialLinks = {
    link1: {
      url: "#",
      label: "Twitter high-status",
    },
    link2: {
      url: "#",
      label: "Instagram world-wide",
    },
    link3: {
      url: "#",
      label: "Facebook professional",
    },
  },
  className,
}: Footer32Props) => {
  return (
    <section className={cn("relative py-24 md:py-32 bg-background border-t border-primary/10", className)}>
      <div className="relative z-10 container px-6 max-w-4xl">
        <div className="mx-auto flex flex-col items-center gap-8 text-center group">
          {/* Pre-heading with decorative lines */}
          <div className="flex w-full items-center gap-8 px-4 opacity-50">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-primary" />
            <p className="text-sm font-black uppercase tracking-[0.3em] text-primary italic whitespace-nowrap">
              {preHeading}
            </p>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/50 to-primary" />
          </div>

          {/* Main heading */}
          <h2 className="text-5xl font-black uppercase tracking-tighter italic leading-[0.9] md:text-7xl lg:text-8xl transition-all duration-1000 group-hover:tracking-tight">
            {heading1}
          </h2>

          {/* Description */}
          <p className="max-w-2xl text-xl font-medium italic text-muted-foreground leading-relaxed">
            {description}
          </p>

          <div className="pt-6">
            <RainbowButton asChild variant="outline" className="h-20 rounded-2xl px-16 group/btn">
                <a
                href={buttonUrl}
                className="flex items-center gap-6"
                >
                <span className="text-2xl font-black uppercase tracking-widest">{buttonText}</span>
                <ArrowUpRight className="size-6 transition-transform group-hover/btn:scale-125 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </a>
            </RainbowButton>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-10 pt-12 border-b border-primary/10 pb-12 w-full justify-center">
            <a
              href={socialLinks.link1.url}
              className="text-muted-foreground transition-all hover:text-primary hover:scale-125"
              aria-label={socialLinks.link1.label}
            >
              <Twitter className="size-7" />
            </a>
            <div className="h-8 w-px bg-primary/20 rotate-[20deg]" />
            <a
              href={socialLinks.link2.url}
              className="text-muted-foreground transition-all hover:text-primary hover:scale-125"
              aria-label={socialLinks.link2.label}
            >
              <Instagram className="size-7" />
            </a>
            <div className="h-8 w-px bg-primary/20 rotate-[20deg]" />
            <a
              href={socialLinks.link3.url}
              className="text-muted-foreground transition-all hover:text-primary hover:scale-125"
              aria-label={socialLinks.link3.label}
            >
              <Facebook className="size-7" />
            </a>
          </div>

          {/* Support Email */}
          <p className="pt-4">
            <a
              href={`mailto:${email}`}
              className="text-sm font-black uppercase tracking-widest text-muted-foreground/40 transition-colors hover:text-primary underline decoration-1 underline-offset-8"
            >
              {email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export { Footer32 };
```
