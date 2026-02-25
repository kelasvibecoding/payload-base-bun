# Hero 76

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a clean, professional introduction for a digital resources portal, pairing a logo-centric text block with a wide-format high-fidelity preview image.
- **Use Case**: Best for UI toolkits, design systems (e.g., "Figma-to-Code" tools), or marketplaces that want to emphasize their partnership with major platforms like Figma.
- **Visual Style**: Product-centric clean aesthetic. Features a centered layout beginning with a prominent `figma-icon.svg`. The typography section uses a high-impact headline with a `capitalize` modifier and a descriptive block. The visual anchor is a large wide-format image placeholder within a specialized `AspectRatio` container (`ratio={1.916786227 / 1}`) to ensure exact-pixel rendering of UI designs across all screen sizes.
- **Interactivity**: Static layout. Primary CTA uses a specialized "Download Now" label to drive immediate resource acquisition.

## Source Code

### `hero76.tsx`
```tsx
import { cn } from "@/lib/utils";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

interface Hero76Props {
  className?: string;
}

const Hero76 = ({ className }: Hero76Props) => {
  return (
    <section
      className={cn(
        "container mx-auto py-20 lg:py-40 flex flex-col items-center gap-20 md:gap-32 md:text-center font-sans overflow-hidden",
        className,
      )}
    >
      <div className="flex flex-col gap-10 md:items-center relative z-10">
        {/* Partnership Icon */}
        <div className="p-4 rounded-3xl bg-muted/50 border border-border hover:border-primary/20 transition-colors self-center">
            <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma-icon.svg"
            alt="figma integration"
            className="h-12 w-fit mb-1"
            />
        </div>
        
        <div className="flex max-w-4xl flex-col items-center gap-8">
          <h1 className="text-5xl font-black tracking-tighter text-foreground text-pretty md:text-7xl lg:text-9xl leading-[0.85]">
            The continuously growing UI library for Shadcn & Figma
          </h1>
          <div className="text-xl lg:text-3xl font-medium text-muted-foreground leading-relaxed">
            <p>
              Create quicker, more efficiently, and boost your design expertise.
            </p>
            <p className="text-foreground font-bold mt-2 italic">Transform into an elite designer instantly.</p>
          </div>
        </div>
        
        <Button className="h-fit self-center rounded-fill px-10 py-6 font-black text-xl rounded-full shadow-2xl transition-transform hover:scale-105 mt-4">
          Download Now
        </Button>
      </div>
      
      {/* Exact Aspect Ratio UI Preview */}
      <div className="w-full overflow-hidden rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border border-border/50 bg-muted transition-transform duration-1000 hover:scale-[1.01] group">
        <AspectRatio ratio={1920 / 1080}>
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
            alt="library preview"
            className="size-full object-cover transition-opacity duration-700 opacity-90 group-hover:opacity-100"
          />
        </AspectRatio>
      </div>
    </section>
  );
};

export { Hero76 };
```
