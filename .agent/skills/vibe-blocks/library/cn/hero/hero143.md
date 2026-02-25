# Hero 143

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a cinematic "Productivity Suite" introduction pairing a centered typography block with a full-width background video and interactive "Platform Badges."
- **Use Case**: Best for productivity tools, launcher apps, or cross-platform utility suites that want to emphasize "Fast track to everything."
- **Visual Style**: Cinematic Utilitarian aesthetic. Features a centered layout on a full-width `video` background utilizes a specialized `bg-background/85` radial-gradient overlay to maintain readability. The typography section is anchored by a high-impact title with specialized `[text-shadow:0_4px_4px_rgba(0,0,0,0.15)]`. CTAs feature prominent "OS Specific" buttons (Apple, Windows) with specialized `bg-linear-to-b` backgrounds. Includes a unique `BorderBeam`-animated badge for mobile waitlist discovery and high-fidelity versioning metadata.
- **Interactivity**: High atmospheric engagement. Features cinematic autoplay background video and specialized "Border-Beam" animation on secondary callouts.

## Source Code

### `hero143.tsx`
```tsx
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";

interface Hero143Props {
  className?: string;
}

const Hero143 = ({ className }: Hero143Props) => {
  return (
    <section
      className={cn(
        "dark relative overflow-hidden bg-background py-20 lg:py-40 font-sans",
        className,
      )}
    >
      <div className="relative z-20 container max-w-[55rem] px-6">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center gap-12 pt-32 lg:pt-52 pb-24 lg:pb-40 text-center text-pretty">
            <div className="max-w-[40rem] lg:max-w-none">
              <h1 className="text-6xl font-black lg:text-[9rem] tracking-tighter leading-[0.85] text-foreground [text-shadow:0_10px_30px_rgba(0,0,0,0.5)]">
                Your fast track to <span className="text-primary italic">everything</span>.
              </h1>
            </div>
            <div className="max-w-[30rem] lg:max-w-[45rem]">
              <p className="text-xl lg:text-3xl font-medium tracking-tight leading-relaxed text-muted-foreground [text-shadow:0_4px_10px_rgba(0,0,0,0.8)] border-x-4 border-white/10 px-10">
                A suite of robust productivity tools packed into an adaptable
                launcher—quick, intuitive, and dependable for high-status builders.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-10">
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Button
                asChild
                size="lg"
                className="inline-flex h-fit w-full sm:w-fit items-center justify-center gap-4 rounded-2xl bg-white text-black px-10 py-6 font-black text-xl shadow-2xl transition-transform hover:scale-105"
              >
                <a href="#">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 384 512"
                    className="size-7 fill-gray-900"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
                  </svg>
                  <span>Download for Mac</span>
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="inline-flex w-full sm:w-fit items-center justify-center gap-4 rounded-2xl border-white/20 bg-linear-to-b from-white/5 to-white/10 px-10 py-6 font-bold text-xl text-white shadow-xl hover:bg-white/5"
              >
                <a href="#">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    className="size-7 fill-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"></path>
                  </svg>
                  <span>Join Windows waitlist</span>
                </a>
              </Button>
            </div>
            
            {/* Versioning Metadata */}
            <div className="flex gap-10 text-sm font-black uppercase tracking-[0.2em] text-muted-foreground/60">
              <span className="flex items-center gap-2">v1.87.5 <span className="block size-1.5 rounded-full bg-green-500 shadow-[0_0_10px_green]"></span></span>
              <span className="opacity-40">|</span>
              <span>macOS 12+</span>
              <span className="opacity-40">|</span>
              <button className="hover:text-primary transition-colors">Install via homebrew</button>
            </div>
          </div>
          
          {/* Animated "Beam" Waitlist Callout */}
          <a
            href="#"
            className="group relative mt-16 flex h-10 items-center justify-center gap-4 overflow-hidden rounded-full border border-white/10 bg-background/50 backdrop-blur-3xl px-8 py-2 text-sm font-black uppercase tracking-widest text-white shadow-2xl transition-transform hover:scale-105"
          >
            <span>Download on iOS</span>
            <span className="flex items-center gap-2 text-primary">
              <span className="animate-pulse">Join waitlist</span>
              <ArrowRight className="size-4" />
            </span>
            <BorderBeam colorFrom="#fca5a5" colorTo="#ef4444" duration={4} size={300} />
          </a>
        </div>
      </div>
      
      {/* Background Cinematic Visual Anchor */}
      <div className="absolute -top-20 z-0 size-full pointer-events-none overflow-hidden">
        {/* The Radial Focus Overlay Frame */}
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.5)_0%,rgba(0,0,0,1)_80%)]" />
        
        <video
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/video-2.mp4"
          loop
          muted
          autoPlay
          className="block size-full object-cover grayscale brightness-50 contrast-125"
        />
        
         {/* Static Noise Texture side */}
         <div className="absolute inset-0 bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/noise.png')] opacity-[0.05] mix-blend-overlay z-15"></div>
      </div>
    </section>
  );
};

export { Hero143 };
```
