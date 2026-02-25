# Feature 109

## Metadata
- **Category**: Feature
- **Objective**: Flagship persona-focused hero section with double visual overlays and massive typography.
- **Use Case**: Primary feature landing page introduction, "Expert" landing page redirects, or high-end product value sections.
- **Visual Style**: "Lensed Multi-Overlay" aesthetic. `lg:grid-cols-2` symmetrical split. Left: massive `text-5xl` headline paired with a `Badge`. Features a primary "View Features" button with a `Menu` leading icon. Right: Anchor image with two distinctive interactive overlays. Overlay 1 (Top-Right): floating `backdrop-blur` pill with an `Avatar` and "Tailored for experts" text. Overlay 2 (Bottom): primary-colored gradient bar housing a bold `text-3xl` header and horizontal `ChevronRight` link.
- **Interactivity**: Static illustrative layout with high-impact color transitions.

## Source Code

### `feature109.tsx`
```tsx
import { ChevronRight, Menu } from "lucide-react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Feature109 = ({ className }: Feature109Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="grid place-items-center gap-10 lg:grid-cols-2">
          {/* Content side */}
          <div className="flex flex-col gap-5">
            <Badge variant="outline" className="w-fit bg-background uppercase font-mono tracking-widest">Modern Tactics</Badge>
            <h3 className="text-3xl font-semibold lg:text-5xl italic">Make your site a true standout.</h3>
            {/* ... buttons ... */}
          </div>
          
          {/* Multi-Overlay Visual side */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <img src="..." className="rounded-xl object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-primary/80 via-transparent to-transparent"></div>
            <div className="absolute inset-0 flex flex-col justify-between p-7">
               {/* Avatar Overlay */}
               <span className="ml-auto flex items-center gap-2 rounded-full bg-background/30 px-4 py-2.5 backdrop-blur-sm shadow-sm ring-1 ring-white/10">
                 <Avatar className="size-7"><AvatarImage src="..." /></Avatar> Tailored for experts
               </span>
               {/* Bottom Link Overlay */}
               <div className="flex flex-col gap-5 text-background">
                 <h4 className="text-lg font-semibold lg:text-3xl drop-shadow-md">Elevate your platform...</h4>
                 <a href="#" className="flex items-center gap-1 font-medium hover:underline">Explore all <ChevronRight className="h-auto w-4" /></a>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature109 };
```
