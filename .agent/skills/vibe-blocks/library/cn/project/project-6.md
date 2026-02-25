# Project 6

## Metadata
- **Category**: Project
- **Objective**: Provide a split-pane, stick-to-scroll gallery showcase format.
- **Use Case**: Photography collections, visual lookbooks, or continuous scroll portfolios.
- **Visual Style**: Divides the screen in half on large breakpoints. The left features a highly stylized, screen-high sticky container with title and metadata. The right acts as an infinite-scroll column of large `aspect-[4/5]` images.
- **Interactivity**: Extensive use of `framer-motion` `whileInView` for continuous scroll reveal. The left container leverages native `position: sticky` and `h-screen` styling to remain pinned during scroll.

## Description
Project 6 is designed for heavy visual collections. By pinning the context (Title, Year, Category, Metadata) to the left side of the screen as a sticky element, the right side becomes an uninterrupted runway for large, portrait-oriented imagery. This format ensures the user always knows what they are looking at, while letting the photography command the actual scroll experience.

## Source Code

```tsx
"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";

interface Project6Props {
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

const StickySection = ({
  title,
  subtitle,
  category,
  year,
  description,
}: {
  title: string;
  subtitle: string;
  category: string;
  year: string;
  description: string;
}) => (
  <div className="top-20 flex flex-col self-start lg:sticky lg:min-h-screen lg:justify-between">
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
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

    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mt-5 space-y-3 md:sticky md:bottom-9"
    >
      <h3 className="text-sm font-medium tracking-wider text-foreground uppercase">
        ABOUT
      </h3>
      <p className="max-w-sm text-sm leading-relaxed tracking-wide text-muted-foreground uppercase">
        {description}
      </p>
    </motion.div>
  </div>
);

const ProjectCard = ({ title, category, src, alt, index }: Project6Props) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group relative cursor-pointer"
  >
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
      <motion.img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-muted/40 transition-all duration-300 group-hover:bg-muted/20" />
      <div className="absolute inset-0 flex flex-col justify-between p-6">
        <Badge
          variant="secondary"
          className="self-start border border-muted bg-background text-xs font-medium text-foreground"
        >
          {category}
        </Badge>
        <h3 className="text-2xl font-semibold text-foreground opacity-70">
          {title}
        </h3>
      </div>
    </div>
  </motion.div>
);

export const Project6 = ({
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
}: Partial<ReturnType<typeof StickySection>["props"]> & {
  images?: Array<{ src?: string; alt: string }>;
}) => {
  const projectCards = [
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
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <StickySection
            title={title!}
            subtitle={subtitle!}
            category={category!}
            year={year!}
            description={description!}
          />
          <div className="space-y-10">
            {images?.map((img, index) => (
              <ImageBlock
                key={index}
                src={img.src}
                alt={img.alt}
                index={index}
              />
            ))}
          </div>
        </div>

        <div className="mt-32">
          <h3 className="mb-6 text-sm font-bold font-medium tracking-wider text-foreground uppercase">
            MORE COLLECTIONS
          </h3>
          <div className="grid gap-6 pb-16 md:grid-cols-3">
            {projectCards.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
```
