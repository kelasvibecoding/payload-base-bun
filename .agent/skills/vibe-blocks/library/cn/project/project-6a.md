# Project 6a

## Metadata
- **Category**: Project
- **Objective**: Craft a dense, single-column collection gallery with horizontal "related project" navigational rows.
- **Use Case**: Photography series, linear case studies on mobile-first platforms, or narrative-driven galleries.
- **Visual Style**: Completely constrained width (`max-w-4xl`), dropping the split-screen paradigm of Project 6 in favor of a straightforward top-down flow. The "More Collections" grid is replaced with sleek, horizontally-oriented list item rows.
- **Interactivity**: Staggered scroll-reveal animations via `framer-motion` trigger as the user scrolls down the tightly packed image stack. Hover animations accent the navigation rows.

## Description
Project 6a takes the gallery layout of Project 6 and condenses it into a single column format optimized for linear scrolling. By containing the layout in a central `max-w-4xl` column, it forces the user's attention solely on the current block of content. Moving towards the bottom, related projects are presented as elegant, horizontal list items rather than grid blocks, saving vertical space and maintaining a clean list architecture.

## Source Code

```tsx
"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";

interface Project6aProps {
  title?: string;
  subtitle?: string;
  category?: string;
  year?: string;
  description?: string;
  images?: Array<{ src?: string; alt: string }>;
  src: string;
  alt: string;
  index: number;
}

const ImageBlock = ({
  src,
  alt,
  index,
}: {
  src?: string;
  alt: string;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true, margin: "-100px" }}
    className="group relative mb-8 last:mb-0"
  >
    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
      {src ? (
        <motion.img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-muted-foreground">
          <span className="text-sm">Image placeholder</span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/50 via-transparent to-transparent" />
      <motion.div
        className="absolute inset-0 bg-muted/20"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  </motion.div>
);

const ProjectRow = ({ title, category, src, alt, index }: Project6aProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group flex cursor-pointer items-center gap-4 rounded-lg p-3 transition-all duration-300 hover:bg-muted/20"
  >
    <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
      <motion.img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-muted/40 transition-all duration-300 group-hover:bg-muted/20" />
    </div>
    <div className="flex-1 space-y-1">
      <h4 className="text-lg leading-tight font-semibold text-foreground">
        {title}
      </h4>
      <Badge
        variant="secondary"
        className="h-6 bg-muted text-xs font-medium text-foreground"
      >
        {category}
      </Badge>
    </div>
  </motion.div>
);

export const Project6a = ({
  title = "Urban Lens",
  subtitle = "Street Photography Collection",
  category = "PHOTOGRAPHY",
  year = "2025",
  description = "A CAPTIVATING SERIES OF STREET PHOTOGRAPHY THAT CAPTURES THE ESSENCE OF URBAN LIFE THROUGH THE LENS OF CONTEMPORARY PHOTOGRAPHERS WORKING IN MONOCHROME.",
  images = [
    { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw1.jpeg", alt: "Street Scene 1" },
    { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw2.jpeg", alt: "Street Scene 2" },
    { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw3.jpeg", alt: "Street Scene 3" },
    { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw4.jpeg", alt: "Street Scene 4" },
  ],
}: Partial<Project6aProps> & {
  images?: Array<{ src?: string; alt: string }>;
}) => {
  const projectRows = [
    {
      title: "Portrait",
      category: "STREET",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw12.jpeg",
      alt: "Street Portrait",
    },
    {
      title: "Architecture",
      category: "URBAN",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw8.jpeg",
      alt: "Urban Architecture",
    },
    {
      title: "Documentary",
      category: "LIFESTYLE",
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw9.jpeg",
      alt: "Lifestyle Documentary",
    },
  ];

  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 space-y-6"
          >
            <div className="space-y-3">
              <h1 className="text-5xl font-bold tracking-tight text-foreground md:text-6xl">
                {title}
              </h1>
              <p className="text-xl text-muted-foreground">{subtitle}</p>
              <div className="flex items-center gap-4">
                <Badge
                  variant="secondary"
                  className="rounded-3xl bg-muted px-4 py-1 text-xs font-medium text-foreground"
                >
                  {category}
                </Badge>
                <span className="rounded-3xl border border-border px-3 text-sm text-muted-foreground">
                  {year}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Images */}
          <div className="mb-16 space-y-10">
            {images?.map((img, index) => (
              <ImageBlock
                key={index}
                src={img.src}
                alt={img.alt}
                index={index}
              />
            ))}
          </div>

          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 space-y-6"
          >
            <h3 className="text-sm font-medium tracking-wider text-foreground uppercase">
              ABOUT
            </h3>
            <p className="max-w-2xl text-sm leading-relaxed tracking-wide text-muted-foreground uppercase">
              {description}
            </p>
          </motion.div>

          {/* More Collections */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-sm font-bold tracking-wider text-foreground uppercase">
              MORE COLLECTIONS
            </h3>
            <div className="space-y-2">
              {projectRows.map((project, index) => (
                <ProjectRow key={project.title} {...project} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
```
