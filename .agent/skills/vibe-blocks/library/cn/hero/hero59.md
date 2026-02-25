# Hero 59

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver an ultra-modern, high-impact introduction for a major software release using a full-screen video background and a centered typography block.
- **Use Case**: Best for major product unveils, "Edition 1" releases, or beta community building where high-fidelity professional motion is the primary driver of brand status.
- **Visual Style**: Cinematic-Tech aesthetic. Features a full-screen (`h-screen`) background video layout anchored with a `dark` theme class. The visual anchor is a high-impact centered typography block comprising a "BETA RELEASE" announce micro-copy and a very large headline (`lg:text-[4.2rem]`). Includes a dual CTA row with stylized `rounded-full` buttons, one utilizing a low-contrast `border-white/50` for luxury feel.
- **Interactivity**: High interactive hover on CTAs. Buttons use custom padding (`px-6 py-3.5`) and transparent hover effects to maintain the cinematic visibility of the background video.

## Source Code

### `hero59.tsx`
```tsx
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero59Props {
  className?: string;
}

const Hero59 = ({ className }: Hero59Props) => {
  return (
    <section className={cn("dark relative h-screen w-full bg-background overflow-hidden font-sans", className)}>
      <div className="relative z-20 container mx-auto flex h-full max-w-4xl flex-col justify-center gap-6 px-4 lg:items-center lg:text-center">
        <span className="text-xs font-black tracking-[0.3em] text-primary uppercase">
          BETA RELEASE AVAILABLE
        </span>
        <h1 className="text-5xl font-black text-white lg:text-[6rem] tracking-tighter leading-[0.9] text-balance">
          Unveiling MyBusiness Edition 1
        </h1>
        <p className="text-lg lg:text-2xl text-white/70 font-medium leading-relaxed max-w-3xl">
          Tailor and oversee any creative process from start to finish with
          unprecedented speed and efficiency.
        </p>
        <div className="flex lg:justify-center mt-6">
          <div className="flex min-w-fit flex-col gap-4 text-sm leading-[.96] whitespace-nowrap lg:flex-row lg:items-stretch">
            <Button className="h-fit flex-1 rounded-full px-10 py-5 font-bold shadow-2xl transition-transform hover:scale-105">
              Enroll in Beta
            </Button>
            <Button
              variant="outline"
              className="h-fit flex-1 rounded-full border border-white/40 bg-white/5 backdrop-blur-md px-10 py-5 text-white font-bold hover:bg-white/10 transition-colors shadow-xl"
            >
              Book a Demo
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background Cinematic Video */}
      <div className="absolute top-0 left-0 size-full z-0 overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <video
            loop
            playsInline
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/video-5.mp4"
            className="size-full object-cover"
            autoPlay
            muted
          />
      </div>
    </section>
  );
};

export { Hero59 };
```
