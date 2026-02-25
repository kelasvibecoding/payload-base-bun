# Hero 112

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a motion-rich education introduction centered on finding the "Perfect Course," pairing a high-fidelity testimonial visual with a multi-stat value layout.
- **Use Case**: Best for E-learning platforms, online course marketplaces, or mentorship hubs that want to emphasize "Success rate" and "Expert guidance."
- **Visual Style**: Learner-centric modern aesthetic. Features a split-column layout starting with an high-impact typography block. The visual anchor is a unique "Circle-Mask" profile (`rounded-full`) positioned specifically within a centered background `primary` color circle. The profile includes specialized floating badges (`BookOpen`, `PenTool`) with `rotate` transforms to simulate a modular learning environment. A prominent social-proof pill with an `Avatar` group displays collective success ("7000+ people joined"). Concludes with a 3-column "Expertise Stats" block displaying course count, duration, and ratings.
- **Interactivity**: High interactive motion. Features a functional `Dialog`-based video modal presentation trigger with a spinning button backdrop. Floating visual badges use specialized `border-8 border-white` framing to pop from the background.

## Source Code

### `hero112.tsx`
```tsx
"use client";

import { BookOpen, PenTool, Play } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Hero112Props {
  className?: string;
}

const Hero112 = ({ className }: Hero112Props) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className={cn("bg-background py-20 lg:py-40 font-sans overflow-hidden", className)}>
      <div className="container relative z-10 px-6">
        <div className="flex flex-col lg:flex-row items-center gap-24 lg:gap-32">
          
          {/* Learning Narrative side */}
          <div className="flex flex-col gap-10 lg:w-1/2">
            <h1 className="text-6xl font-black lg:text-[7.5rem] tracking-tighter leading-[0.85] text-pretty">
              Find the <span className="text-secondary italic">perfect</span> course for you
            </h1>
            <p className="text-xl lg:text-4xl font-medium text-muted-foreground leading-relaxed max-w-2xl border-l-[6px] border-primary/20 pl-8">
              Unlock exclusive access to premium tutorials, insider insights,
              and more. Elevate your creative learning journey starting today.
            </p>
            
            <div className="relative z-10 flex flex-wrap items-center gap-10 mt-4">
              <Button size="lg" className="h-fit rounded-full px-12 py-7 font-black text-xl shadow-2xl transition-transform hover:scale-105 active:scale-95 duration-300">
                Explore Courses
              </Button>
              
              {/* Interactive Video Trigger */}
              <button
                className="group flex items-center gap-4 hover:opacity-80 transition-all outline-none"
                onClick={() => setIsVideoOpen(true)}
              >
                <div className="flex h-14 w-14 rounded-full bg-primary border-4 border-background shadow-xl transition-transform group-hover:scale-110">
                  <Play className="m-auto h-6 w-6 fill-white stroke-white ml-1" />
                </div>
                <div className="text-left">
                    <p className="text-lg font-black text-foreground uppercase tracking-widest leading-none">Course Video</p>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">Free preview</p>
                </div>
              </button>
            </div>
          </div>
          
          {/* Modular Learning Visual side */}
          <div className="lg:w-1/2">
            <div className="relative mx-auto mt-28 h-[30rem] w-[30rem] lg:h-[40rem] lg:w-[40rem] group">
              {/* The "Anchor" Circle Background */}
              <div className="absolute inset-4 rounded-full bg-primary/10 border-4 border-dashed border-primary/20 animate-[spin_60s_linear_infinite]"></div>
              
              {/* Main Content Profile Porthole */}
              <div className="absolute inset-[15%] rounded-full bg-primary border-8 border-background shadow-2xl overflow-hidden transition-transform duration-1000 group-hover:scale-[1.02]">
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                    alt="instructor profile"
                    className="w-full h-full object-cover grayscale brightness-90 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100 scale-110 group-hover:scale-100"
                  />
              </div>
              
              {/* Social Proof Success Pill */}
              <div className="absolute -right-4 lg:right-4 bottom-20 z-30 flex w-[22rem] items-center gap-4 rounded-full bg-background border-4 border-border/50 px-8 py-5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] transition-transform duration-700 group-hover:translate-x-4">
                <div className="flex -space-x-4">
                  {[1,2,3].map((i) => (
                    <Avatar
                      key={i}
                      className="flex h-14 w-14 shrink-0 rounded-full border-4 border-background shadow-lg overflow-hidden"
                    >
                      <AvatarImage src={`https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-${i}.webp`} />
                      <AvatarFallback>AV</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <div className="flex-1 text-lg font-black text-foreground/80 leading-tight">
                  7,000+ learners already joined
                </div>
              </div>
              
              {/* Floating Tool Icons Cards */}
              <div className="absolute top-[10%] right-[-5%] flex h-[10rem] w-[10rem] rotate-12 rounded-[2.5rem] border-[12px] border-background bg-secondary shadow-2xl transition-all duration-700 group-hover:rotate-0 group-hover:-translate-y-4">
                <BookOpen className="m-auto size-14 text-secondary-foreground" strokeWidth={2.5} />
              </div>
              
              <div className="absolute top-1/3 left-[-10%] flex h-[9rem] w-[9rem] -rotate-12 rounded-[2.5rem] border-[12px] border-background bg-primary shadow-2xl transition-all duration-700 group-hover:rotate-0 group-hover:translate-x-4">
                <PenTool className="m-auto size-12 text-primary-foreground -rotate-90" strokeWidth={2.5} />
              </div>
              
            </div>
          </div>
        </div>
        
        {/* Performance Metrics Verification side */}
        <div className="mt-32 lg:mt-48 rounded-[3rem] border border-border/40 bg-muted/30 backdrop-blur-3xl p-10 lg:px-20 lg:py-16 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-32">
            {[
                { val: "87", label: "Professional Courses" },
                { val: "200+", label: "Hours of Content" },
                { val: "100%", label: "Satisfaction Rating" }
            ].map((stat, i) => (
                <div key={i} className={cn(
                    "flex flex-col gap-4 text-center md:text-left group/stat",
                    i < 2 ? "md:border-r border-border/40" : ""
                )}>
                    <div className="text-6xl lg:text-8xl font-black text-primary tracking-tighter transition-transform group-hover/stat:scale-105 duration-500">
                        {stat.val}
                    </div>
                    <div className="text-xl lg:text-3xl font-bold text-muted-foreground uppercase tracking-widest leading-none">
                        {stat.label}
                    </div>
                </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal Presentation */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="sm:max-w-[1000px] border-none bg-black/95 backdrop-blur-2xl p-0 overflow-hidden rounded-[2.5rem] shadow-2xl">
          <DialogHeader className="hidden">
            <DialogTitle>Course Presentation</DialogTitle>
          </DialogHeader>
          <div className="aspect-video relative">
            <iframe
              className="h-full w-full animate-in fade-in zoom-in duration-1000"
              src="https://www.youtube.com/embed/your-video-id?autoplay=1"
              title="Platform Preview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export { Hero112 };
```
