# Projects 6

## Metadata
- **Category**: Projects
- **Objective**: Create a high-contrast, dark-mode focused project grid prioritizing bold typography and edge-to-edge imagery.
- **Use Case**: Streetwear brands, edgy creative agencies, or night-life photography portfolios.
- **Visual Style**: Inherently dark mode. Uses deep shadow and a `bg-black` item wrapper. The cards feature a dark gradient overlay and "floating" UI elements (a pill badge top-left, an arrow link top-right) rendered over the image using `absolute` positioning.
- **Interactivity**: The grid loads with a staggered Framer Motion reveal. Hovering over a card slightly scales the container (`scale: 1.02`), pushes the image deeper (`scale-110`), and reveals the description and arrow link via `opacity-0` to `opacity-100` transition.

## Description
Projects 6 is an aggressively styled grid layout intended to make a dramatic visual statement. The huge, tracked-out introductory title sets a brutalist tone, which is complemented by the high-contrast cards below. By hiding the description text until the user hovers, the grid remains clean and visually uninterrupted, focusing entirely on the photography until the user expresses intent.

## Source Code

```tsx
"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

const projects6Props = [
  {
    id: 1,
    category: "NATURE",
    title: "Puma",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw1.jpeg",
    description: "Capturing the essence of wildlife in their habitat.",
  },
  {
    id: 2,
    category: "CULTURE",
    title: "Afterparty",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw5.jpeg",
    description: "What a party!",
  },
  {
    id: 3,
    category: "CULTURE",
    title: "Rider",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw2.jpeg",
    description: "Artistic movements that define our generation.",
  },
  {
    id: 4,
    category: "FASHION",
    title: "Elegance",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw3.jpeg",
    description: "Bold statements and timeless style.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ProjectCard = ({
  project,
}: {
  project: (typeof projects6Props)[0];
  index: number;
}) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group relative cursor-pointer overflow-hidden rounded-3xl bg-black shadow-2xl"
    >
      <div className="relative aspect-[5/5] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute top-4 left-4">
          <span className="inline-block rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
            {project.category}
          </span>
        </div>

        <div className="absolute top-4 right-4 translate-x-2 transform opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/20 backdrop-blur-sm">
            <ArrowUpRight className="h-4 w-4 text-white" />
          </div>
        </div>

        <div className="absolute right-4 bottom-4 left-4">
          <h3 className="mb-1 text-2xl font-bold tracking-tight text-white md:text-3xl">
            {project.title}
          </h3>
          <p className="text-sm text-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {project.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

interface Projects6Props {
  className?: string;
}

const Projects6 = ({ className }: Projects6Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20 text-center"
        >
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-muted-foreground">
              <div className="h-2 w-2 rounded-full bg-foreground"></div>
              PROJECT SHOWCASE
            </span>
          </div>
          <h1 className="text-6xl leading-none font-black tracking-tight md:text-8xl lg:text-9xl">
            <span className="block">CAPTURING</span>
            <span className="block">MOMENTS</span>
          </h1>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-2"
        >
          {projects6Props.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export { Projects6 };
```
