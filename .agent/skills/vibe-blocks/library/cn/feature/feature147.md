# Feature 147

## Metadata
- **Category**: Feature
- **Objective**: Clean technology/integration showcase with a broad responsive header and small card grid.
- **Use Case**: "App Integration" pages, partner tool overviews, or "Built With" segments for platform sites.
- **Visual Style**: "Minimalist Integration Hub" aesthetic. Broad header features a massive `text-5xl` title with muted accents and matched side-aligned descriptive block. Content Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` small `Card` modules. Each card features a small brand logo placeholder, bold title, and short descriptive summary. High usability and clarity.
- **Interactivity**: Static illustrative layout with polished card structural design.

## Source Code

### `feature147.tsx`
```tsx
"use client";

import { cn } from "@/lib/utils";

import { Card } from "@/components/ui/card";

const Feature147 = ({ className }: Feature147Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        {/* Responsive Header Row */}
        <div className="mb-24 flex flex-col items-center justify-between gap-6 lg:flex-row lg:gap-x-12 px-4">
          <div className="w-full text-left text-4xl font-extrabold italic tracking-tighter uppercase lg:w-1/2 lg:text-5xl">
            <span className="text-muted-foreground mr-2">Built</span> with the latest stack
          </div>
          <div className="w-full text-left text-xl font-medium text-muted-foreground italic lg:w-1/2 lg:pl-10">
            Lorem ipsum dolor sit amet...
          </div>
        </div>
        
        {/* Integration Pill Grid */}
        <ul className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {integrations.map((integration, index) => (
            <li key={index}>
              <Card className="p-8 hover:shadow-2xl hover:-translate-y-1 transition-all group border shadow-sm">
                <img src={integration.image} className="w-14 grayscale group-hover:grayscale-0 transition-opacity duration-500 mb-6" />
                <h3 className="mt-4 mb-2 text-xl font-bold uppercase italic tracking-widest">{integration.title}</h3>
                <p className="text-sm text-muted-foreground italic font-medium">{integration.description}</p>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { Feature147 };
```
