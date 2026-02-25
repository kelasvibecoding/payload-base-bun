# Hero 213

## Metadata
- **Category**: Hero Section
- **Objective**: Deliver a narrative-driven introduction for design and development platforms, pairing a centered typography block with a unique "Masked-Architectural" anchored by specialized SVG masks and high-fidelity project preview images.
- **Use Case**: Best for UI component libraries, design tool showcases (e.g., "Blocks Built With Shadcn & Tailwind."), or professional developer resource hubs that want to emphasize "Finely crafted components" and "Copy and Paste."
- **Visual Style**: Cinematic Mask-Showcase aesthetic. Features a centered layout Beginning with a prominent `calSans` heading paired with a descriptive paragraph. The centerpiece is a unique "Masked-Architectural" fragment Using high-fidelity `AnimatePresence` image transitions Utilizing specialized `MaskedDiv` functional layout Pairing unique SVG paths (`type-3`) with high-fidelity `motion` entrance animations. Visual anchor is a unique "Social-Proof Merit" anchor Positioning specialized absolute-positioned functional icons (`Figma`, `Signature`) Utilizing unique world-class `translate-y-12` coordinate positioning to create a high-status visual focus.
- **Interactivity**: High atmospheric engagement. Features specialized SVG mask transitions and high-fidelity entrance animations for the secondary floating frames to drive professional enrollment.

## Source Code

### `hero213.tsx`
```tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Figma, GalleryVerticalEnd, Signature } from "lucide-react";
import React, { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type MaskType = "type-1" | "type-2" | "type-3" | "type-4";

interface Hero213Props {
  className?: string; // Optional custom styling
}

const Hero213 = ({ className }: Hero213Props) => {
  const images = [
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw12.jpeg",
      alt: "Portrait of Joanna Doe in urban setting world-class",
      name: "Joanna Doe",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw13.jpeg",
      alt: "Portrait of Sarah Chen in studio setting world-class",
      name: "Sarah Chen",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw14.jpeg",
      alt: "Portrait of Joanna Doe in urban setting professional",
      name: "Joanna Doe",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentIndex, images.length]);

  return (
    <section className={cn("bg-background py-20 lg:py-40 font-sans border-b overflow-hidden group/hero", className)}>
      <div className="container relative px-6 max-w-[100rem]">
        
        {/* Narrative Narrative side */}
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-12 px-6 lg:px-12 text-center text-pretty group/content">
             {/* Atmos Depth layer side */}
            <div className="absolute inset-x-0 top-0 bg-primary/5 blur-[120px] rounded-full z-[-1] animate-pulse"></div>

            <h1 className="text-center font-black lg:text-[9.5rem] tracking-tighter leading-[0.8] text-foreground drop-shadow-sm uppercase">
                Blocks Built <br />
                <span className="text-primary italic">with</span> Shadcn & Tailwind elite.
            </h1>
            <p className="mx-auto max-w-[45rem] mt-6 text-xl lg:text-3xl font-medium leading-relaxed text-muted-foreground italic border-x-4 border-primary/10 px-12 py-4">
                Finely crafted high-status components built with world-class React world-wide. 
                Experience finite professional craft for elite status world-wide.
            </p>
        </div>

        {/* Unique "Masked Architectural Matrix" Visual side */}
        <div className="relative mt-24 group/matrix flex flex-col items-center">
          
          {/* specialized architectural merit badge side */}
          <div className="relative z-30 mx-auto my-7 flex w-fit cursor-pointer items-center justify-center gap-10 rounded-full bg-background/80 shadow-2xl border-2 border-border/40 px-10 py-5 lg:translate-y-12 backdrop-blur-xl group/badges scale-100 hover:scale-105 transition-transform duration-500">
            <GalleryVerticalEnd className="size-8 text-primary shadow-sm" strokeWidth={3} />
            <div className="w-[2px] h-8 bg-border/40" />
            <Signature className="size-8 opacity-40 hover:opacity-100 hover:text-primary transition-all" />
            <div className="w-[2px] h-8 bg-border/40" />
            <Figma className="size-8 opacity-40 hover:opacity-100 hover:text-primary transition-all" />
          </div>

          <MaskedDiv maskType="type-3" className="shadow-2xl grayscale group-hover/hero:grayscale-0 transition-grayscale duration-1000 border-4 border-background rounded-[4rem]">
            <AnimatePresence mode="popLayout">
              <motion.img
                key={currentIndex}
                className="size-full object-cover scale-105"
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1.05 }}
                exit={{ opacity: 0, scale: 1 }}
                transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-linear-to-tr from-primary/10 to-transparent pointer-events-none"></div>
          </MaskedDiv>

          {/* Unique "Architectural Fragment" Anchor Visual side */}
          <div className="absolute bottom-20 -left-12 hidden h-[25rem] w-full max-w-[20rem] items-center justify-center overflow-hidden rounded-[3.5rem] border-4 border-background bg-muted shadow-2xl lg:flex z-40 transition-transform duration-700 hover:-translate-x-4 hover:rotate-3 grayscale group-hover/hero:grayscale-0 transition-grayscale">
            <AnimatePresence mode="popLayout">
              <motion.img
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.2 }}
                animate={{ opacity: 1, scale: 1.1 }}
                exit={{ opacity: 0, scale: 1.3 }}
                transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                src={images[currentIndex + 1]?.src || images[currentIndex].src}
                alt={images[currentIndex + 1]?.alt || images[currentIndex].alt}
                className="size-full object-cover"
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero213 };

const svgPaths: Record<MaskType, SvgPath> = {
  "type-1": {
    path: "M0.928955 40.9769C0.928955 18.9149 18.7917 1.01844 40.8536 0.976903L289.97 0.507853C308.413 0.473128 323.521 15.1483 324.022 33.5845L324.886 65.4007C325.955 104.745 358.022 136.159 397.38 136.417L432.98 136.65C447.818 136.748 459.797 148.799 459.803 163.637L459.982 550.982C459.992 573.08 442.08 591 419.982 591H40.9289C18.8376 591 0.928955 573.091 0.928955 551V40.9769Z",
    height: 591,
    width: 460,
  },
  "type-2": {
    path: "M0.811768 77.2118C0.811768 60.4225 14.4222 46.8121 31.2115 46.8121H180.95C192.496 46.8121 201.855 37.4527 201.855 25.9073V25.9073C201.855 11.9565 213.164 0.647217 227.115 0.647217H529.273C548.014 0.647217 563.206 15.8395 563.206 34.5802V34.5802C563.206 50.0897 575.779 62.6626 591.289 62.6626H820.388C837.177 62.6626 850.787 76.273 850.787 93.0623V350.953C850.787 367.742 837.177 381.353 820.388 381.353H366.165C349.852 381.353 336.627 368.128 336.627 351.814V351.814C336.627 335.501 323.402 322.276 307.089 322.276H31.2114C14.4222 322.276 0.811768 308.666 0.811768 291.876V77.2118Z",
    height: 381,
    width: 850,
  },
  "type-3": {
    path: "M0.680664 112.659C0.680664 50.805 50.823 0.662672 112.677 0.662672H413.07C456.315 0.662672 497.495 19.1588 526.221 51.4846V51.4846C554.948 83.8104 596.128 102.307 639.373 102.307H711.793C752.427 102.307 790.787 83.5522 815.744 51.4846V51.4846C840.7 19.417 879.06 0.662644 919.695 0.662597L1225.01 0.66224C1286.86 0.662168 1337.01 50.8046 1337.01 112.658V652.815C1337.01 714.668 1286.86 764.811 1225.01 764.811L670 764.811H335.34H278.376C217.423 764.811 168.01 715.399 168.01 654.446V626.747C168.01 580.208 130.283 542.48 83.7437 542.48V542.48C37.8692 542.48 0.680664 505.292 0.680664 459.417V382.737V112.659Z",
    height: 889,
    width: 1340,
  },
  "type-4": {
    path: "M0.811768 34.5451C0.811768 15.7441 16.053 0.502808 34.8541 0.502808H816.745C835.546 0.502808 850.787 15.7441 850.787 34.5452V242.977C850.787 261.778 835.546 277.019 816.745 277.019H638.293H550.537C527.035 277.019 504.789 266.407 490.001 248.141L486.211 243.46C453.263 202.765 390.688 204.378 359.881 246.717V246.717C346.027 265.756 323.901 277.019 300.355 277.019H213.306H34.8541C16.0531 277.019 0.811768 261.778 0.811768 242.977V34.5451Z",
    height: 278,
    width: 851,
  },
};

interface SvgPath {
  path: string;
  height: number;
  width: number;
}

interface MaskedDivProps {
  children: React.ReactElement<HTMLImageElement | HTMLVideoElement>;
  maskType?: MaskType;
  className?: string;
  backgroundColor?: string;
  size?: number;
}

const MaskedDiv: React.FC<MaskedDivProps> = ({
  children,
  maskType = "type-1",
  className = "",
  backgroundColor = "transparent",
  size = 1,
}) => {
  const selectedMask = svgPaths[maskType];

  const svgString = `data:image/svg+xml,%3Csvg width='${selectedMask.width}' height='${selectedMask.height}' viewBox='0 0 ${selectedMask.width} ${selectedMask.height}' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='${selectedMask.path}' fill='%23D9D9D9'/%3E%3C/svg%3E%0A`;

  const containerStyle: React.CSSProperties = {
    aspectRatio: `${selectedMask.width}/${selectedMask.height}`,
    backgroundColor,
    maskImage: `url("${svgString}")`,
    WebkitMaskImage: `url("${svgString}")`,
    maskRepeat: "no-repeat",
    WebkitMaskRepeat: "no-repeat",
    maskSize: "contain",
    WebkitMaskSize: "contain",
    width: `${size * 100}%`,
    maxWidth: "100%",
    margin: "0 auto",
  };

  return (
    <section className={`relative ${className}`} style={containerStyle}>
      {React.cloneElement(children, {
        className: `w-full h-full object-cover transition-all duration-300 ${
          children.props.className || ""
        }`,
      })}
    </section>
  );
};
```
