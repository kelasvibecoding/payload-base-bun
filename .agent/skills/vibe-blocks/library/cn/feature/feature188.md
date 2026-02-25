# Feature 188

## Metadata
- **Category**: Feature
- **Objective**: Informational resource list section encased in a unified architectural border.
- **Use Case**: "Learning Center" sections, resource journey blocks, or "Next Steps" onboarding hub.
- **Visual Style**: "Resource Kickstart Gallery" aesthetic. Master header is centered with massive `text-6xl` bold typography.
    - Container Logic: Focused vertical stack of interactive rows encased in a unified `rounded-2xl border` structural frame. 
    - Row Design: Horizontal split. Leading `ArrowRight` icon housed in a `bg-muted` circular frame acts as the interactive anchor. Narrative center with bold `text-lg` titles follows.
    - Detail Stage: Houses `md:w-60` wide-format photographic placeholders (`h-full w-full object-cover`) providing visual proof for each resource.
- **Interactivity**: Static illustrative layout with polished interactive hover-states for journey discovery.

## Source Code

### `feature188.tsx`
```tsx
"use client";

import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

const Feature188 = ({ className }: Feature188Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        {/* Leading Editorial Header */}
        <h2 className="mx-auto max-w-5xl text-center text-4xl font-extrabold italic tracking-tighter uppercase sm:text-6xl mb-20 leading-tight">Kickstart your journey</h2>

        {/* Blueprinted Resource Stack */}
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border-2 shadow-2xl overflow-hidden bg-background">
          {resources.map((resource, index) => (
            <div key={index} className={cn("group transition-colors hover:bg-muted/30", index !== resources.length - 1 && "border-b-2")}>
              <a href={resource.href} className="flex flex-col md:flex-row items-center justify-between p-10 lg:p-14">
                {/* Info Block */}
                <div className="flex items-center gap-8 flex-1">
                  <div className="shrink-0 flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary shadow-xl group-hover:bg-primary group-hover:text-white transition-all">
                    <ArrowRight className="size-8" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-bold italic uppercase tracking-widest mb-1">{resource.title}</h3>
                    <p className="text-lg text-muted-foreground italic font-medium">{resource.description}</p>
                  </div>
                </div>

                {/* Visual Billboard */}
                <div className="mt-8 md:mt-0 shrink-0 md:w-80 group-hover:scale-105 transition-transform duration-700">
                   <div className="aspect-video rounded-3xl overflow-hidden border shadow-xl bg-muted/40">
                      <img src={resource.imageSrc} className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-grayscale" title="resource visual" />
                   </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature188 };
```
