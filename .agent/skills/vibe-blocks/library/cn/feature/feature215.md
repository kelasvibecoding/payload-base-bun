# Feature 215

## Metadata
- **Category**: Feature
- **Objective**: Atmospheric video-enabled carousel showcase featuring high-fidelity interaction logic and clean editorial typography.
- **Use Case**: Master "Component Library" landing rows, UI showcase galleries, or executive product capability indices.
- **Visual Style**: "High-Fidelity UI Carousel" aesthetic. Centered authority header with bold `xl:text-6xl` headers and focused descriptive leads.
    - Component Grid: High-complexity `Carousel` module focusing on triple-split `lg:basis-1/3` discovery.
    - Card Architecture: Immersive "Video Billboard" cards utilizing 16:9 `AspectRatio` masking. Features an absolute-positioned primary-colored icon anchor (`top-3 left-2`) and architectural `bg-muted` backgrounds. 
    - Interactivity: Specialized `onMouseEnter/onMouseLeave` logic utilizing `useRef` to trigger high-fidelity video feedback for each item. 
    - Navigation: Bottom-anchored centered `CarouselNext/Previous` utility buttons for rapid discovery.
- **Interactivity**: Fully interactive React component utilizing state-driven carousel shifts, interactive video play states, and professional structural polish.

## Source Code

### `feature215.tsx`
```tsx
"use client";

import { Eye, Languages, AudioLines, ListMinus, ScanFace, Headphones } from "lucide-react";
import { useRef } from "react";

import { cn } from "@/lib/utils";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const CarouselCard = ({ video, Icon, title, link, summary }: card) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  return (
    <a href={link} className="group block h-full" onMouseEnter={() => videoRef.current?.play()} onMouseLeave={() => { videoRef.current?.pause(); if(videoRef.current) videoRef.current.currentTime = 0 }}>
      <Card className="h-full min-h-[400px] border-2 border-primary/5 bg-accent/5 p-8 transition-all hover:bg-background hover:shadow-3xl hover:translate-y-[-8px]">
        <CardContent className="p-0">
          <div className="relative mb-10">
            <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-[1.5rem] border-4 border-white shadow-2xl">
              <video src={video} ref={videoRef} className="size-full object-cover" muted loop />
            </AspectRatio>
            <div className="absolute -top-3 -left-3 size-12 rounded-xl bg-primary text-white grid place-items-center shadow-3xl"><Icon className="size-6" /></div>
          </div>
          <CardTitle className="text-2xl font-black italic uppercase tracking-tighter leading-tight mb-4">{title}</CardTitle>
          <CardDescription className="text-md text-muted-foreground italic font-medium leading-relaxed">{summary}</CardDescription>
        </CardContent>
      </Card>
    </a>
  );
};
```
