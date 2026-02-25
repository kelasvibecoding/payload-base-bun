# Feature 148

## Metadata
- **Category**: Feature
- **Objective**: Centered landing block for gallery-style feature discovery with large visual cards.
- **Use Case**: "Template Library" highlights, primary feature overviews, or "Why Build with Us" sections.
- **Visual Style**: "Gallery Showcase Stage" aesthetic. Top Zone: Centered master header featuring massive `text-5xl` typography and a large `rounded-xl` primary button. Bottom Zone: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` grid of photographic cards. Each card features an `aspect-video` image placeholder (`rounded-t-xl`) taking the primary weight, followed by clean narrative text with bold tool identifiers.
- **Interactivity**: Static illustrative layout focused on high-conversion photography and visual polish.

## Source Code

### `feature148.tsx`
```tsx
"use client";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Feature148 = ({ className }: Feature148Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        {/* Conversion Header Stage */}
        <div className="m-auto mb-24 max-w-xl text-center px-4">
          <h2 className="mb-8 text-4xl font-extrabold italic tracking-tighter uppercase md:text-6xl">Build faster...</h2>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground italic font-medium mb-10">Lorem ipsum...</p>
          <Button asChild className="rounded-xl px-10 py-8 text-lg font-bold shadow-2xl" size="lg">
            <a href="#">See templates library</a>
          </Button>
        </div>
        
        {/* Photographic Grid */}
        <div className="mt-11 grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {utilities.map((utility, index) => (
            <Card key={index} className="border shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow">
              <img src={utility.image} className="aspect-video w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              <div className="p-7">
                <p className="mb-1 font-bold italic uppercase tracking-tighter text-lg">{utility.title}</p>
                <p className="text-muted-foreground italic font-medium text-sm">{utility.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature148 };
```
