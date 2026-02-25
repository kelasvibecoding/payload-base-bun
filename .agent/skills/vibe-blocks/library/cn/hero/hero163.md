# Hero 163

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for mental health professionals, pairing a centered typography block with a unique "Team-Card" mosaic of expert profiles.
- **Use Case**: Best for healthcare providers, clinical networks (e.g., "Experienced professionals"), or specialized support teams that want to emphasize "Support team" and "Your mental health."
- **Visual Style**: Professional Clinical aesthetic. Features a centered layout on a dark `bg-background` background starts with an high-impact heading block titled by a prominent "Service-Type" callout ("Your Support Team"). The visual anchor is a unique "Team Mosaic" below the lead-copy Featuring a 4-column cluster of expert previews pairing functional project images with a specialized "Testimonial Card" overlaying the first two columns. Testimonial utilizes specialized client metadata ("Felt more grounded") paired with high-fidelity client avatars.
- **Interactivity**: Static layout. Emphasizes clean UI craftsmanship through the complex matrix grid composition using specialized `rounded-2xl` hardware primitives.

## Source Code

### `hero163.tsx`
```tsx
import { cn } from "@/lib/utils";

interface Hero163Props {
  className?: string;
}

const Hero163 = ({ className }: Hero163Props) => {
  return (
    <section
      className={cn("dark bg-background py-20 lg:py-40 font-sans border-b overflow-hidden", className)}
    >
      <div className="container relative z-10 px-6">
        
        {/* Support Narrative side */}
        <div className="mx-auto mb-32 lg:mb-48 flex max-w-[1000px] flex-col items-center gap-10 text-center text-pretty">
          <p className="text-xs font-black uppercase tracking-[0.5em] text-primary drop-shadow-[0_0_10px_rgba(var(--primary),0.5)]">
            Your Support Team
          </p>
          <h1 className="text-6xl font-black lg:text-[9.5rem] leading-[0.85] tracking-tighter text-foreground drop-shadow-2xl">
            Experienced <span className="text-secondary italic">professionals</span> for your wellness.
          </h1>
        </div>
        
        {/* Unique "Team Matrix" Visual Anchor side */}
        <div className="relative mx-auto grid w-full max-w-[90rem] auto-cols-auto grid-cols-2 grid-rows-[auto_auto] justify-center gap-8 lg:gap-12 md:grid-cols-[repeat(4,1fr)] group">
          
          {/* Matrix Glow side */}
          <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>

          {/* Expert 1: Top-Left Profile Fragment */}
          <div className="col-[1/2] row-[1/2] w-full">
            <div className="h-full max-h-[25rem] w-full overflow-hidden rounded-[3rem] border-4 border-background bg-secondary transition-transform duration-700 hover:scale-[1.02]">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                alt="expert clinician preview 1"
                className="block h-full w-full object-cover grayscale opacity-80 transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-100"
              />
            </div>
          </div>

          {/* Expert 2: Top-Center Profile Fragment */}
          <div className="col-[2/3] row-[1/2] w-full md:col-[2/3] md:row-[1/2]">
            <div className="h-full max-h-[25rem] w-full overflow-hidden rounded-[3rem] border-4 border-background bg-muted transition-transform duration-700 hover:scale-[1.02]">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
                alt="expert clinician preview 2"
                className="block h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Component 3: Overlaid Narrative Story Card side */}
          <div className="col-[1/3] row-[3/4] w-full md:col-[1/3] md:row-[2/3] group/card">
            <div className="flex h-full min-h-[12rem] flex-col gap-6 overflow-hidden rounded-[3.5rem] border-8 border-background bg-background shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] p-10 lg:p-12 md:flex-row md:items-center transition-transform duration-1000 group-hover:-translate-y-4">
              {/* Specialized Client Identification */}
              <div className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl md:h-32 md:w-32 border-4 border-border/40 shadow-xl">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp"
                  alt="recovering client"
                  className="size-full object-cover grayscale brightness-90 transition-all group-hover/card:grayscale-0 group-hover/card:brightness-100"
                />
              </div>
              <div className="flex h-full w-full flex-col justify-center gap-4">
                <p className="text-xl lg:text-3xl font-black text-foreground italic leading-tight">
                  &quot;The professional support here transformed my approach to
                  emotional balance—I feel more empowered.&quot;
                </p>
                <div className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em] text-muted-foreground/60">
                    <span className="text-foreground">John Doe</span>
                    <span className="block size-1.5 rounded-full bg-primary/40"></span>
                    <span>Executive Leader</span>
                </div>
              </div>
            </div>
          </div>

          {/* Expert 4: The Tall Vertical Anchor Frame (Right) */}
          <div className="col-[1/3] row-[2/3] h-[30rem] w-full md:col-[3/5] md:row-[1/3] md:h-auto">
            <div className="h-full w-full overflow-hidden rounded-[4rem] border-8 border-background bg-secondary/10 shadow-2xl transition-transform duration-1000 group-hover:translate-x-4">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
                alt="healthcare center primary preview"
                className="block h-full w-full object-cover transition-all duration-1000 scale-105 group-hover:scale-100"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export { Hero163 };
```
