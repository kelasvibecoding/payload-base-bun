# Feature 251

## Metadata
- **Category**: Feature
- **Objective**: Atmospheric bento-grid section featuring interactive workflow visualizations, immersive global assets, and technical process traces.
- **Use Case**: Primary "Platform Features" landing rows, executive capability summaries, or technical product discovery grids.
- **Visual Style**: "Technical Capability Bento" aesthetic. Asymmetric grid coordinating four informational cards with stylized internal visual logic.
    - Workflow Node: "Customizable Workflows" featuring interactive tool icon nodes (Google, Figma, Notion) connected to a central base via animated `AnimatedBeam` traces.
    - Operational Node: "Smart Task Tracking" highlighting vertical process connectivity between high-contrast icon anchors.
    - Visual Node: Minimalist architectural card featuring stylized focal photographic assets and bold headers.
    - Global Hub: "Trusted by 100k Users" featuring an immersive high-radius `Globe` asset utilizing absolute-positioned atmospheric scaling.
- **Interactivity**: Fully interactive React component utilizing animated SVG paths, immersive globe rendering, and professional bento-grid coordination.

## Source Code

### `feature251.tsx`
```tsx
"use client";

import { Globe } from "@/components/ui/globe";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Feature251 = ({ className }: Feature251Props) => {
  return (
    <section className={cn("py-32 bg-background", className)}>
      <div className="container">
        <div className="grid md:grid-cols-12 gap-10">
          {/* Workflow Discovery Hub (Row 1, Left) */}
          <Card className="md:col-span-8 rounded-[3rem] border-4 border-white bg-accent/5 p-12 overflow-hidden shadow-3xl">
            <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-4">Customizable Workflows</h3>
            <p className="text-md text-muted-foreground italic font-medium leading-relaxed max-w-sm mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            {/* Interactive Connection Logic */}
            <div className="relative flex items-center justify-between p-12 bg-white/40 rounded-[2.5rem] border-2 border-dashed">
               <IconStack items={TOOL_LOGOS} />
            </div>
          </Card>

          {/* Operational Tracking (Row 1, Right) */}
          <Card className="md:col-span-4 rounded-[3rem] border-4 border-white bg-accent/5 p-12 overflow-hidden shadow-3xl">
             {/* Vertical Beam Interaction */}
          </Card>

          {/* Global Authority Hub (Row 2) */}
          <Card className="md:col-span-12 h-96 relative overflow-hidden rounded-[4rem] border-4 border-white bg-accent/5 p-16 shadow-4xl flex justify-between">
             <div className="max-w-xl space-y-6">
                <h2 className="text-5xl font-black italic uppercase tracking-tighter">Trusted Worldwide.</h2>
                <p className="text-lg text-muted-foreground/60 leading-relaxed italic pr-24">Expanding global connectivity through premium engineering...</p>
             </div>
             <div className="absolute top-0 right-0 w-1/2 h-full">
                <Globe className="scale-125" />
             </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
```
