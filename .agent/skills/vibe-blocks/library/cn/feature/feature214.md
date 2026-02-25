# Feature 214

## Metadata
- **Category**: Feature
- **Objective**: Atmospheric video-enabled feature carousel featuring interactive hover-play logic and high-contrast editorial typography.
- **Use Case**: Primary "Product tour" landing rows, AI capability showcases, or executive video-first feature indices.
- **Visual Style**: "Video Intelligence Carousel" aesthetic. Centered authority header with massive `font-serif text-7xl` bold typography and high-contrast sub-leads.
    - Grid: High-complexity `Carousel` system utilizing quad-split `xl:basis-1/4` discovery items.
    - Card Architecture: Immersive "Video Billboard" cards utilizing high-radius `rounded-[0.5rem]` masking. Features an absolute-positioned primary-colored icon anchor (`top-3 left-2`) and architectural `bg-muted` backgrounds. 
    - Interactivity: Specialized `onMouseEnter/onMouseLeave` logic utilizing `useRef` to trigger high-fidelity video feedback for each item. 
    - Navigation: Bottom-anchored symmetrical `CarouselNext/Previous` utility buttons for rapid discovery.
- **Interactivity**: Fully interactive React component utilizing state-driven carousel shifts, interactive video play states, and high-fidelity structural polish.

## Source Code

### `feature214.tsx`
```tsx
"use client";

import { Eye, Languages, AudioLines, ListMinus, ScanFace, ChevronRight } from "lucide-react";
import { useRef } from "react";

import { cn } from "@/lib/utils";

import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const CarouselCard = ({ video, Icon, title, link, summary }: card) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  return (
    <a href={link} onMouseEnter={() => videoRef.current?.play()} onMouseLeave={() => { videoRef.current?.pause(); if(videoRef.current) videoRef.current.currentTime = 0 }} className="group block h-full">
      <Card className="min-h-[600px] rounded-[3rem] bg-muted/40 border-2 border-primary/5 p-10 transition-all hover:bg-background hover:shadow-3xl hover:translate-y-[-8px]">
        <CardContent className="p-0 flex flex-col h-full">
          <div className="relative mb-12">
            <div className="aspect-video w-full overflow-hidden rounded-[2rem] border-4 border-white shadow-2xl">
              <video src={video} ref={videoRef} muted loop className="h-full w-full object-cover" />
            </div>
            <div className="absolute -top-4 -left-4 size-16 rounded-2xl bg-primary text-white grid place-items-center shadow-3xl"><Icon className="size-8" /></div>
          </div>
          <CardTitle className="text-3xl font-black italic uppercase tracking-tighter mb-4 leading-none">{title}</CardTitle>
          <CardDescription className="text-lg text-muted-foreground italic font-medium leading-relaxed">{summary}</CardDescription>
        </CardContent>
      </Card>
    </a>
  );
};
```
