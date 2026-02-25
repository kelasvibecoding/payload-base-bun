# Feature 215b

## Metadata
- **Category**: Feature
- **Objective**: Stylized vertical walkthrough section featuring modular horizontal splits and video-first product indexing.
- **Use Case**: Master "Walkthrough" documentation, technical "Platform Architecture" blocks, or executive service indices.
- **Visual Style**: "Production Registry Editorial" aesthetic. Centered authority header with bold `xl:text-5xl` typography.
    - Interaction Hub: Serial vertical registry of discoverable items split by authoritative `border-b` lines. 
    - Item Architecture: Features a specialized horizontal `md:flex-row` split. 
    - Left (Visual): Houses a 16:9 photographic `AspectRatio` billboard utilizing high-fidelity video assets (auto-play on hover). 
    - Right (Narrative Hub): Features localized primary-colored icon anchors, bold `text-xl` headers, and focused descriptive leads. Houses a stylized "Learn more" CTA `Button` for each registry node.
- **Interactivity**: Fully interactive React component utilizing state-driven video play logic and professional structural cadence.

## Source Code

### `feature215b.tsx`
```tsx
"use client";

import { Eye, Languages, AudioLines, ListMinus, ScanFace, ChevronRight } from "lucide-react";
import { useRef } from "react";

import { cn } from "@/lib/utils";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

const HorizontalCard = ({ video, Icon, title, link, summary }: card) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  return (
    <div className="group flex flex-col md:flex-row gap-12 py-12 border-b-2 border-primary/10 last:border-b-0 hover:bg-accent/5 transition-all p-8 rounded-[2rem]" onMouseEnter={() => videoRef.current?.play()} onMouseLeave={() => { videoRef.current?.pause(); if(videoRef.current) videoRef.current.currentTime = 0 }}>
      {/* Video Anchor Stage */}
      <div className="md:w-1/3">
        <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-2xl border-4 border-white shadow-2xl">
          <video src={video} ref={videoRef} className="size-full object-cover" muted loop />
        </AspectRatio>
      </div>

      {/* Editorial Hub */}
      <div className="flex-1 flex flex-col justify-center gap-6">
        <div className="flex items-center gap-4">
           <div className="size-10 rounded-xl bg-primary text-white grid place-items-center shadow-lg"><Icon className="size-5" /></div>
           <h3 className="text-2xl font-black italic uppercase tracking-tighter">{title}</h3>
        </div>
        <p className="text-lg text-muted-foreground italic font-medium leading-relaxed">{summary}</p>
        <Button variant="outline" className="w-fit rounded-full px-8 py-5 font-black italic uppercase tracking-widest text-xs shadow-md">Learn more</Button>
      </div>
    </div>
  );
};
```
