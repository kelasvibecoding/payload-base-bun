# Feature 95

## Metadata
- **Category**: Feature
- **Objective**: Step-by-step interactive workflow explainer using a progress-bar tab system.
- **Use Case**: Onboarding guides, software setup walkthroughs, or "How It Works" sections for complex products.
- **Visual Style**: "Step-Progress Tabs" aesthetic. `TabsList` serves as a horizontal timeline with numeric indicators (1-4) connected by a `h-px` background line. Desktop: clicking a step updates a large central `aspect-video` image. Mobile: steps expand vertically to show content and images inline for better readability.
- **Interactivity**: Fully responsive `Radix UI` tabs with numeric state styling (`group-data-[state=active]:bg-primary`).

## Source Code

### `feature95.tsx`
```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";

interface Feature95Props {
  className?: string;
}

const Feature95 = ({ className }: Feature95Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mb-16 max-w-xl px-8 lg:px-0">
          <Badge variant="outline">Start your journey</Badge>
          <h2 className="mt-6 mb-3 text-2xl font-medium text-balance md:text-4xl">
            Build your custom workflow in no time
          </h2>
          <p>Deploy a fully optimized system and upgrade your current setup.</p>
        </div>
        <div>
          <Tabs defaultValue="tab-1">
            <TabsList className="relative grid items-start gap-6 lg:grid-cols-4">
              <div className="absolute top-[30px] right-0 left-4 -z-10 hidden h-px bg-input lg:block"></div>
              {/* TabsTriggers with numbers... */}
              <TabsTrigger value="tab-1" className="group pointer-events-none lg:pointer-events-auto">
                {/* Numbered item content */}
              </TabsTrigger>
              {/* More steps... */}
            </TabsList>
            <div className="mt-10 hidden rounded-xl border bg-muted/50 p-10 lg:block">
              {/* TabsContent images... */}
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export { Feature95 };
```
