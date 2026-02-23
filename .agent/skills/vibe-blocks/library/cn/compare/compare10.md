# Compare 10

## Metadata
- **Category**: Compare
- **Objective**: Modern vs legacy tool comparison with emoji-enhanced feature lists and visual contrast.
- **Use Case**: Technology migration, legacy system replacement, modern tool adoption, feature comparison.
- **Visual Style**: Split-screen layout with contrasting backgrounds, emoji-enhanced feature lists, and modern typography.
- **Interactivity**: Static display with visual contrast between legacy and modern features.

## Description
A visually striking comparison component featuring a split-screen layout that contrasts legacy tool limitations with modern tool advantages. The component uses emoji-enhanced feature lists, contrasting background colors (muted for legacy, white for modern), and clear visual separation to highlight the benefits of upgrading to modern solutions.

## Key Features
- **Split-Screen Layout**: Two-column design with contrasting visual treatment
- **Emoji-Enhanced Features**: Visual icons (🧭, 💡, 📊, ⚡, 🧰, ☁️, 📈, 💬) for better engagement
- **Contrasting Backgrounds**: Muted background for legacy, clean white for modern features
- **Visual Hierarchy**: Clear typography and spacing for easy scanning
- **Professional Messaging**: Compelling copy that emphasizes modernization benefits
- **Responsive Design**: Adapts from stacked mobile to side-by-side desktop layout

## Source Code
```tsx
import { X } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import { Separator } from "@/components/ui/separator";

const legacyFeatures = [
  "One-size-fits-all project tools with generic workflows.",
  "Clunky, overcomplicated, and hard to adopt.",
  "Scattered data stitched together with brittle integrations.",
  "Minimal automation leading to manual reporting.",
  "Slow, risky migrations that disrupt delivery.",
  "Aging tech with limited cloud and mobile support.",
  "High price tags without measurable outcomes.",
  "Surprise fees for training, support, and integrations.",
];

const newFeatures = [
  { emoji: "🧭", text: "Built for modern product and engineering teams." },
  { emoji: "💡", text: "Opinionated defaults with a simple, modern UX." },
  { emoji: "📊", text: "Unified workspace as your single source of truth." },
  { emoji: "⚡", text: "Automation and AI that cut busywork." },
  { emoji: "🧰", text: "Guided, low-risk migrations measured in weeks." },
  { emoji: "☁️", text: "Cloud-native, secure, and always up to date." },
  { emoji: "📈", text: "Improves velocity with a clear, provable ROI." },
  { emoji: "💬", text: "Straightforward, transparent pricing." },
];

interface Compare10Props {
  className?: string;
}

const Compare10 = ({ className }: Compare10Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="flex flex-col gap-6 text-center md:gap-12">
          <h2 className="l:text-7xl text-4xl font-medium md:text-5xl">
            <span className="text-muted-foreground">Why Teams are </span>
            <br /> Moving to Modern Tools
          </h2>
          <p className="text-lg">
            Old tools slow your team down and don&apos;t help you ship faster.{" "}
            <br className="hidden md:block" /> Modern tools help you ship
            faster.
          </p>
        </div>
        <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:gap-0">
          <div className="rounded-3xl bg-muted p-6 lg:rounded-r-none lg:p-12">
            <h3 className="text-2xl font-medium">Legacy Features</h3>
            <ul className="mt-9 space-y-3">
              {legacyFeatures.map((feature, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex items-center gap-2">
                    <X className="my-1.5 size-4 shrink-0 text-muted-foreground" />
                    <li className="text-sm">{feature}</li>
                  </div>
                  {idx !== legacyFeatures.length - 1 && <Separator />}
                </React.Fragment>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-y p-6 lg:rounded-l-none lg:border-l-0 lg:p-12">
            <h3 className="text-2xl font-medium">New Features</h3>
            <ul className="mt-9 space-y-3">
              {newFeatures.map((feature, idx) => (
                <React.Fragment key={idx}>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-lg">{feature.emoji}</span>
                    {feature.text}
                  </li>
                  {idx !== newFeatures.length - 1 && <Separator />}
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Compare10 };
```
```

## Usage Notes
- Legacy and modern feature lists can be customized for specific use cases
- Emoji selection should be updated to match your brand personality and messaging
- The component uses contrasting backgrounds (muted vs white) for clear visual separation
- Text content can be modified to address specific pain points and benefits
- The layout adapts from single column on mobile to two-column on desktop
- All feature descriptions should be updated to reflect actual product capabilities