# Feature 132

## Metadata
- **Category**: Feature
- **Objective**: Minimalist introductory hero section with a clean horizontal capability grid.
- **Use Case**: Master product introductions, service-specific landing pages, or high-end platform "Welcome" blocks.
- **Visual Style**: "Clean Pillar Hero" aesthetic. Centered header area features a massive `text-5xl` title and a minimalist `rounded-full border-2` button. Feature Grid: `md:flex-row` layout of large `rounded-2xl` images. Imagery focus: images dim slightly on hover (`hover:brightness-90`) and are paired with bold `text-lg` titles and muted secondary descriptions. Very breathable and modern.
- **Interactivity**: Static illustrative layout with subtle image-hover states.

## Source Code

### `feature132.tsx`
```tsx
"use client";

import { cn } from "@/lib/utils";

const Feature132 = ({ className }: Feature132Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        {/* Centered Hero Header */}
        <div className="text-center mb-16 px-4">
           <h2 className="text-5xl font-semibold italic tracking-tighter uppercase mb-6">Welcome to Our Website</h2>
           <p className="mx-auto max-w-3xl text-xl text-muted-foreground italic font-medium">Lorem ipsum...</p>
           <a href="#" className="mx-auto mt-8 block w-fit rounded-full border-2 border-muted bg-background px-8 py-4 text-sm font-bold uppercase tracking-tight hover:border-primary transition-all shadow-md">Get Started</a>
        </div>
        
        {/* Interactive Feature Row */}
        <div className="mx-auto flex flex-col gap-6 md:flex-row">
          {itemsData.map((item) => (
            <a className="group block flex-1" href="#" key={item.id}>
              <img src={item.imageSrc} className="mb-6 h-full max-h-72 w-full rounded-2xl object-cover transition-all duration-500 group-hover:brightness-75 group-hover:scale-[1.02] shadow-xl border" />
              <h6 className="mb-3 text-lg font-bold italic tracking-tighter uppercase">{item.title}</h6>
              <p className="text-sm text-muted-foreground italic font-medium">{item.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature132 };
```
