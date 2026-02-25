# Feature 111

## Metadata
- **Category**: Feature
- **Objective**: Symmetrical split persona section with bleeding bottom images.
- **Use Case**: Dual-audience landing pages (Solo-preuners vs Enterprise), primary software feature highlights, or platform comparison blocks.
- **Visual Style**: "Persona Split (Bleeding Layout)" aesthetic. Centered multi-line header with a primary capability link. Below: `md:grid-cols-2` symmetrical split of two massive `bg-muted` cards. Each card features: a centered identity badge ("Premium" / "Featured"), large persona heading ("For Entrepreneurs"), descriptive text, and a centered interactive "Sign Up" link. Key visual: a large `max-h-[400px]` placeholder image at the bottom of each card that visually "bleeds" into the bottom edge.
- **Interactivity**: Static illustrative layout with prominent centered typography.

## Source Code

### `feature111.tsx`
```tsx
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";

const Feature111 = ({ className }: Feature111Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-5 text-center">
          <Badge variant="outline" className="uppercase tracking-widest font-mono">High Standards</Badge>
          <h2 className="text-3xl font-semibold md:text-5xl italic">Create, Motivate, and Succeed</h2>
          <a href="#" className="flex items-center gap-1 font-bold text-primary hover:underline">View all capabilities <ChevronRight className="h-auto w-4" /></a>
        </div>
        <div className="mt-20 grid gap-10 md:grid-cols-2">
          {/* Persona Card 1 */}
          <div className="rounded-lg bg-muted px-14 pt-7 shadow-xl overflow-hidden hover:scale-[1.01] transition-transform">
            <div className="mx-auto flex flex-col items-center gap-5 text-center">
               <Badge variant="outline" className="bg-background uppercase italic">Premium</Badge>
               <h2 className="text-lg font-semibold md:text-3xl tracking-tight">For Entrepreneurs</h2>
               <p className="text-muted-foreground">Discover the potential...</p>
               {/* Sign Up Link */}
               <img src="..." className="mt-5 max-h-[400px] w-full object-cover rounded-t-lg shadow-2xl" />
            </div>
          </div>
          {/* Persona Card 2... */}
        </div>
      </div>
    </section>
  );
};

export { Feature111 };
```
