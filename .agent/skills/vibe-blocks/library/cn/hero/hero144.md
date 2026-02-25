# Hero 144

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a cinematic "App Ecosystem" introduction pairing a centered typography block with a unique "Icon Grid Cascade" visual.
- **Use Case**: Best for mobile app stores, software marketplaces, or platform ecosystems that want to emphasize "Discovery" and "Ecosystem magic."
- **Visual Style**: Cinematic Software aesthetic. Features a centered layout on a dark `bg-background` Utilizing a specialized "Device Mosaic" of application icons (Figma, Notion, Spotify, etc.) at the top. Icons are containerized within `rounded-[20%]` squares Featuring unique depth effects: absolute pseudo-elements provide `bg-linear-to-tr` gradients, while `scale` and `opacity` transforms create a staggered "Floating" cascade. Visual anchor is anchored by a high-impact typography block using large `leading-tight` font sizes.
- **Interactivity**: Static layout with high visual depth. Features specialized "Depth-of-field" effects on secondary icons (Sketch, VS Code) using `blur-[3px]` and `scale-[.83]` to simulate focal depth.

## Source Code

### `hero144.tsx`
```tsx
import { cn } from "@/lib/utils";

import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Hero144Props {
  className?: string;
}

const Hero144 = ({ className }: Hero144Props) => {
  return (
    <section
      className={cn("dark relative bg-background py-32 lg:py-64 font-sans border-b overflow-hidden", className)}
    >
      <div className="relative z-20 container px-6">
        <div className="flex w-full flex-col items-center gap-24 lg:gap-32">
          
          {/* Unique "Icon Grid Cascade" Visual side */}
          <div className="w-full max-w-[50rem] relative group">
            {/* Structural Glow Background layer */}
            <div className="absolute -inset-20 bg-primary/5 blur-3xl opacity-50 rounded-full animate-pulse transition-opacity"></div>
            
            <div className="flex w-full items-end justify-center gap-8 lg:gap-10">
              {/* Specialized "Focal Depth" Icon 1 */}
              <div className="relative w-full max-w-[10rem] origin-bottom scale-[.8] overflow-hidden rounded-[2.5rem] border border-white/5 bg-stone-900/40 opacity-40 shadow-inner blur-[2px] transition-transform duration-700 group-hover:scale-90 group-hover:blur-0 group-hover:opacity-100">
                <AspectRatio ratio={1} className="flex">
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/sketch-icon.svg"
                    alt="utility tool icon"
                    className="m-auto w-[60%] object-contain grayscale group-hover:grayscale-0"
                  />
                </AspectRatio>
              </div>
              
              {/* Primary Ecosystem Icon 2 */}
              <div className="relative w-full max-w-[11rem] origin-bottom scale-90 overflow-hidden rounded-[2.5rem] border border-white/10 bg-stone-900/80 shadow-2xl transition-transform duration-700 group-hover:scale-100">
                <AspectRatio ratio={1} className="flex">
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma-icon.svg"
                    alt="design ecosystem icon"
                    className="m-auto w-[65%] p-4"
                  />
                </AspectRatio>
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
              </div>
              
              {/* Visual Anchor Core Icon 3 */}
              <div className="w-full max-w-[12rem] overflow-hidden rounded-[3rem] border-2 border-primary/20 bg-stone-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transition-transform duration-700 hover:scale-110">
                <AspectRatio ratio={1} className="flex">
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/notion-icon.svg"
                    alt="core Productivity icon"
                    className="m-auto w-[60%]"
                  />
                </AspectRatio>
              </div>
              
              {/* Primary Ecosystem Icon 4 */}
              <div className="relative w-full max-w-[11rem] origin-bottom scale-90 overflow-hidden rounded-[2.5rem] border border-white/10 bg-stone-900/80 shadow-2xl transition-transform duration-700 group-hover:scale-100">
                <AspectRatio ratio={1} className="flex">
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/spotify-icon.svg"
                    alt="media ecosystem icon"
                    className="m-auto w-[60%]"
                  />
                </AspectRatio>
                <div className="absolute inset-0 bg-gradient-to-tl from-white/10 to-transparent pointer-events-none"></div>
              </div>
              
               {/* Specialized "Focal Depth" Icon 5 */}
              <div className="relative w-full max-w-[10rem] origin-bottom scale-[.8] overflow-hidden rounded-[2.5rem] border border-white/5 bg-stone-900/40 opacity-40 shadow-inner blur-[2px] transition-transform duration-700 group-hover:scale-90 group-hover:blur-0 group-hover:opacity-100">
                <AspectRatio ratio={1} className="flex">
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vscode-icon.svg"
                    alt="dev tool icon"
                    className="m-auto w-[60%]"
                  />
                </AspectRatio>
              </div>
            </div>
            
            {/* Secondary Row Cascade */}
            <div className="flex w-full items-start justify-center gap-10 pt-10">
               {/* Icon Fragment 6 */}
              <div className="relative w-full max-w-[9rem] opacity-30 blur-[4px] transition-all group-hover:opacity-60 group-hover:blur-0">
                <AspectRatio ratio={1} className="flex rounded-[2rem] bg-stone-800 border-4 border-background">
                  <img src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/google-icon.svg" alt="search tool" className="m-auto w-[50%]" />
                </AspectRatio>
              </div>
              {/* Icon Fragment 7 */}
              <div className="relative w-full max-w-[10rem] shadow-xl hover:rotate-6 transition-transform">
                <AspectRatio ratio={1} className="flex rounded-[2.5rem] bg-stone-900 border-4 border-white/5">
                  <img src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/github-icon-white.svg" alt="code platform" className="m-auto w-[55%]" />
                </AspectRatio>
              </div>
               {/* Icon Fragment 8 */}
               <div className="relative w-full max-w-[10rem] shadow-xl hover:-rotate-6 transition-transform">
                <AspectRatio ratio={1} className="flex rounded-[2.5rem] bg-stone-900 border-4 border-white/5">
                  <img src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/slack-icon.svg" alt="comm platform" className="m-auto w-[55%] p-2" />
                </AspectRatio>
              </div>
              {/* Icon Fragment 9 */}
              <div className="relative w-full max-w-[9rem] opacity-30 blur-[4px] transition-all group-hover:opacity-60 group-hover:blur-0">
                <AspectRatio ratio={1} className="flex rounded-[2rem] bg-stone-800 border-4 border-background">
                  <img src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/dropbox-icon.svg" alt="storage tool" className="m-auto w-[50%]" />
                </AspectRatio>
              </div>
            </div>
          </div>
          
          {/* Ecosystem Narrative side */}
          <div className="flex flex-col items-center justify-center text-center text-pretty">
            <h2 className="mb-8 text-6xl font-black lg:text-[10rem] leading-[0.85] tracking-tighter text-foreground drop-shadow-2xl">
              Discover More
            </h2>
            <p className="max-w-[45rem] text-xl lg:text-4xl font-medium leading-relaxed text-muted-foreground italic border-x-4 border-primary/10 px-12">
              Add a touch of magic to your digital daily routine. Find your next transformative application in our marketplace.
            </p>
          </div>
        </div>
      </div>
      
      {/* Background Atmosphere Texture */}
      <div className="absolute inset-x-0 top-0 h-[40rem] bg-gradient-to-b from-primary/5 to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export { Hero144 };
```
