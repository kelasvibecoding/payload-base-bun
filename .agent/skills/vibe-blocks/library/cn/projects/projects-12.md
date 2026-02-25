# Projects 12

## Metadata
- **Category**: Projects
- **Objective**: Present a standard portfolio grid enhanced by a sophisticated, spring-animated custom cursor tooltip.
- **Use Case**: Premium agency portfolios or creative showcases looking for an "Awwwards-style" interactive detail.
- **Visual Style**: A standard, cleanly organized `lg:grid-cols-3` gallery. Images are housed in fixed-height `h-[400px]` containers. Project details (title, year, type) sit cleanly underneath the image bounds. 
- **Interactivity**: Employs an advanced floating UI pattern. A custom "Explore" pill follows the user's cursor (`mouseX`, `mouseY` mapped via Framer Motion `useSpring`). 

## Description
Projects 12 demonstrates how to bridge standard organizational layouts with highly premium interactions. The grid structure itself is highly conventional, making it accessible and easy to consume. However, by replacing standard hover states with a physics-driven, cursor-following tooltip, the layout immediately feels incredibly bespoke and high-touch without confusing the user.

## Source Code

```tsx
"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useCallback, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Modern Concrete Pavilion",
    img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-9jsQcDsxyqA-unsplash.jpg",
    year: "2025",
    type: "Architecture",
  },
  {
    title: "Colorful Urban Living",
    img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw17.jpeg",
    year: "2025",
    type: "Urban Design",
  },
  {
    title: "Minimalist Home Retreat",
    img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw12.jpeg",
    year: "2025",
    type: "Interior",
  },
  {
    title: "Rustic Cabin Glow",
    img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw13.jpeg",
    year: "2025",
    type: "Product Design",
  },
  {
    title: "Luxury Concrete Box",
    img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw14.jpeg",
    year: "2025",
    type: "Residential",
  },
  {
    title: "Glasshouse in Nature",
    img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw16.jpeg",
    year: "2025",
    type: "Sustainable Design",
  },
];

interface Projects12Props {
  className?: string;
}

const Projects12 = ({ className }: Projects12Props) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 300,
    damping: 30,
    mass: 0.8,
  });
  const springY = useSpring(mouseY, {
    stiffness: 300,
    damping: 30,
    mass: 0.8,
  });

  const handleContainerMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - containerRect.left;
      const y = e.clientY - containerRect.top;

      mouseX.set(x - 50);
      mouseY.set(y + 30);
    },
    [mouseX, mouseY],
  );

  const handleProjectMouseEnter = useCallback((index: number) => {
    setHoveredIndex(index);
    setIsHovering(true);
  }, []);

  const handleContainerMouseLeave = useCallback(() => {
    setHoveredIndex(null);
    setIsHovering(false);
  }, []);

  return (
    <section className={cn("py-20", className)}>
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Studio Gallery</h2>
        </div>

        <div
          ref={containerRef}
          className="relative grid grid-cols-1 gap-x-6 gap-y-7 sm:grid-cols-2 lg:grid-cols-3"
          onMouseMove={handleContainerMouseMove}
          onMouseLeave={handleContainerMouseLeave}
        >
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              <div
                className="relative cursor-pointer overflow-hidden rounded-xl"
                onMouseEnter={() => handleProjectMouseEnter(index)}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-[400px] w-full rounded-lg object-cover transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.05] group-hover:brightness-110"
                />

                <div className="absolute inset-0 rounded-lg bg-black/0 transition-all duration-500 group-hover:bg-black/10" />
              </div>

              <div className="mt-4 flex justify-between gap-0.5">
                <h3 className="text-sm leading-tight font-medium transition-colors duration-300 group-hover:text-neutral-800 md:text-base">
                  {project.title}
                </h3>
                <div className="flex flex-col items-end">
                  <p className="text-sm text-neutral-600">{project.year}</p>
                  <p className="text-sm text-muted-foreground">
                    {project.type}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <AnimatePresence>
            {isHovering && hoveredIndex !== null && (
              <motion.div
                style={{
                  x: springX,
                  y: springY,
                }}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                  mass: 0.5,
                }}
                className="pointer-events-none absolute top-0 left-0 z-[9999] select-none"
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-xl border border-white/10 bg-black/95 shadow-2xl shadow-black/30 backdrop-blur-md" />

                  <div className="relative flex items-center gap-3 px-3 py-3 text-sm font-medium whitespace-nowrap text-white">
                    <span className="text-base">Explore</span>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full border border-white/30 bg-white/10">
                      <motion.span
                        animate={{ x: [0, 2, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                        className="text-xs"
                      >
                        →
                      </motion.span>
                    </div>
                  </div>

                  <div className="absolute inset-0 scale-105 rounded-2xl bg-white/5 blur-sm" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export { Projects12 };
```
