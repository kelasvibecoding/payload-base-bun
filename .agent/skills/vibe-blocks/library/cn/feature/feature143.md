# Feature 143

## Metadata
- **Category**: Feature
- **Objective**: Stylized architectural split with primary list focus and technical blueprint frame.
- **Use Case**: Narrative capability blocks, service-driven landing pages, or technical product discovery sections.
- **Visual Style**: "Architectural Mirror Split" aesthetic. Mirror variation of `Feature 142`. 
    - Left (Narrative): Bold `text-3xl` header, badge, and proof list with `ArrowRight` indicators.
    - Right (Visual): High-precision drafting frame. Utilizes a soft `linear-to-br from-red-100 to-blue-100` background inside a symmetrical `grid-cols-[1fr_4fr_1fr]` blueprint. Key visual: the `placeholder-1.svg` image is centered with heavy white-space padding to simulate an architectural drawing sheet.
- **Interactivity**: Static illustrative layout with high structural balance.

## Source Code

### `feature143.tsx`
```tsx
"use client";

import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";

const Feature143 = ({ className }: Feature143Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mt-20 flex flex-col items-center justify-center gap-16 md:flex-row">
          {/* Narrative Left ... */}
          
          {/* Mirrored Blueprint Frame Right */}
          <div className="grid w-full max-w-md grid-cols-[1fr_4fr_1fr] grid-rows-[1fr_4fr_1fr] rounded-3xl bg-linear-to-br from-red-100 to-blue-100 border p-2 shadow-2xl group">
             {/* Decorative blueprint border cells ... */}
             <div className="col-start-2 row-start-2 p-6">
                <img src="..." className="size-full rounded-2xl object-cover shadow-2xl border grayscale hover:grayscale-0 transition-all duration-1000" />
             </div>
             {/* more grid cells ... */}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature143 };
```
