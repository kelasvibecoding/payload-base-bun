# Projects 3

## Metadata
- **Category**: Projects
- **Objective**: Deliver a highly interactive, premium project grid with immersive cursor and scroll effects.
- **Use Case**: Top-tier creative agencies, digital product studios, or a centerpiece portfolio block where visual "wow" factor is required.
- **Visual Style**: Dark and brooding, utilizing a dark gradient overlay on images. The project typography is horizontally and vertically centered directly over the imagery.
- **Interactivity**: Extreme. Uses Framer Motion's `useScroll` and `useTransform` to bind image scale and opacity to the viewport scroll position. Employs an `AnimatePresence` and mouse-tracking (`handleMouseMove`) to render a custom floating cursor overlay displaying a "Plus" icon when hovering over a project container.

## Description
Projects 3 is an incredibly dynamic interface element that relies heavily on advanced Framer Motion techniques. Rather than static layouts, it uses bounding client rect calculations to create a sophisticated floating "custom cursor" that follows the mouse across active components. Simultaneous scroll-linked parallax animations make the entire grid feel alive, providing a tactile, application-like experience straight out of the Awwwards playbook.

## Source Code

```tsx
"use client";

import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { Plus } from "lucide-react";
import { useRef, useState } from "react";

import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "Design Workflow Optimization",
    category: "UI/UX",
    date: "06/20/25",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/studio-republic-fotKKqWNMQ4-unsplash.jpg",
  },
  {
    id: 2,
    title: "Seamless Global Access",
    category: "Cloud Tech",
    date: "06/18/25",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/israel-andrade-YI_9SivVt_s-unsplash.jpg",
  },
];

const ProjectItem = ({
  project,
  index,
  containerRef,
  hoveredIndex,
  setHoveredIndex,
  mousePos,
  setMousePos,
}: {
  project: {
    id: number;
    title: string;
    category: string;
    date: string;
    image: string;
  };
  index: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
  mousePos: { x: number; y: number };
  setMousePos: (pos: { x: number; y: number }) => void;
}) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scrollScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.95, 1, 1.05],
  );
  const scrollY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scrollOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.7, 1, 1, 0.7],
  );

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <motion.div
      key={project.id}
      className="group relative cursor-pointer"
      variants={{
        hidden: { opacity: 0, y: 60, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        },
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.div
        className="relative overflow-hidden rounded-xl"
        style={{
          scale: scrollScale,
          y: scrollY,
          opacity: scrollOpacity,
        }}
      >
        <motion.img
          src={project.image}
          alt={project.title}
          className="h-full w-full rounded-xl object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: hoveredIndex === index ? 1.15 : 1.1 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
          initial={{ opacity: 0.6 }}
          animate={{ opacity: hoveredIndex === index ? 0.8 : 0.6 }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <motion.div
            className="flex items-center gap-2 text-sm text-white/80 lg:mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: hoveredIndex === index ? -5 : 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <p className="text-lg font-medium">{project.date}</p>
            <span>|</span>
            <p>{project.category}</p>
          </motion.div>
          <motion.h2
            className="px-4 text-center text-xl font-semibold md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: hoveredIndex === index ? -10 : 0,
              scale: hoveredIndex === index ? 1.05 : 1,
            }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            {project.title}
          </motion.h2>
        </div>
      </motion.div>

      <AnimatePresence>
        {hoveredIndex === index && (
          <motion.div
            key={`icon-${project.id}`}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0, rotate: 180 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
              duration: 0.3,
            }}
            style={{
              top: mousePos.y - 24,
              left: mousePos.x - 24,
              position: "absolute",
              pointerEvents: "none",
            }}
            className="z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white shadow-lg backdrop-blur-sm"
          >
            <motion.div
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <Plus size={20} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

interface Projects3Props {
  className?: string;
}

const Projects3 = ({ className }: Projects3Props) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className={cn("py-32", className)}>
      <div className="container space-y-16">
        <h1 className="text-center text-4xl font-semibold md:text-6xl">
          Our Projects
        </h1>

        <motion.div
          ref={containerRef}
          className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:gap-12"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <ProjectItem
              key={project.id}
              project={project}
              index={index}
              containerRef={containerRef}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
              mousePos={mousePos}
              setMousePos={setMousePos}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export { Projects3 };
```
