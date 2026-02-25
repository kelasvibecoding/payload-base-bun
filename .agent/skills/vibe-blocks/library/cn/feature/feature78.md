# Feature 78

## Metadata
- **Category**: Feature
- **Objective**: Classic tabbed feature showcase with a side-aligned header and large horizontal-split content.
- **Use Case**: Detailed product walkthroughs, software module explorations, or service tiered benefit details.
- **Visual Style**: "Classical Tabbed Showcase" aesthetic. `flex flex-col` with left-aligned header intro and "Book a demo" link. Below: `Tabs` container. `TabsList` features a mobile-friendly horizontal scroll with gradient-mask edges. `TabsContent`: Large `md:grid-cols-2` split. Left: `rounded-3xl` image container. Right: large `text-4xl` headline and detail text centered vertically.
- **Interactivity**: Client-side tab selection state.

## Source Code

### `feature78.tsx`
```tsx
"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const features = [
  {
    id: "feature-1",
    tabLabel: "Feature 1",
    title: "Feature 1",
    description:
      "Nam vitae molestie arcu. Quisque eu libero orci. Aliquam imperdiet magna nec massa consectetur, id interdum ante congue.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  // Repeated items...
];

interface Feature78Props {
  className?: string;
}

const Feature78 = ({ className }: Feature78Props) => {
  const [selection, setSelection] = useState(features[0].id);
  return (
    <section className={cn("py-32", className)}>
      <div className="flex flex-col">
        <div className="container">
          <div className="lg:max-w-3xl">
            <h2 className="mb-2 text-xl font-semibold md:text-4xl">
              Powerful Features
            </h2>
            <a
              href="#"
              className="group flex items-center text-xs font-medium md:text-base lg:text-lg"
            >
              Book a demo{" "}
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
        <div>
          <Tabs value={selection} onValueChange={setSelection}>
            <div className="relative mt-6">
              <div className="overflow-auto">
                <div className="container min-w-fit">
                  <TabsList>
                    {features.map((feature) => (
                      <TabsTrigger key={feature.id} value={feature.id}>
                        {feature.tabLabel}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--color-background)_0%,transparent_10%,transparent_90%,var(--color-background)_100%)] md:hidden" />
              </div>
            </div>
            <div className="container">
              {features.map((feature) => (
                <TabsContent key={feature.id} value={feature.id}>
                  {/* Content grid... */}
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export { Feature78 };
```
