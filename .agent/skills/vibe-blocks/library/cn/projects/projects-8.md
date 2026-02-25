# Projects 8

## Metadata
- **Category**: Projects
- **Objective**: Implement a dense, 3-column filterable portfolio gallery.
- **Use Case**: Photography portfolios, artist catalogs, or any site requiring high-density visual filtering.
- **Visual Style**: Follows the identical aesthetic of Projects 7, including the center-aligned filter tabs and hover-revealed dark overlays. Adjusts the layout strictly to an `md:grid-cols-3` arrangement.
- **Interactivity**: Framer Motion `layout` driven `AnimatePresence` list reordering. Smooth fluid transitions when items are filtered.

## Description
Projects 8 serves as the 3-column sister component to Projects 7. Changing the grid structure makes it structurally better suited for larger collections of vertical or square-ish aspect ratio imagery. It retains all the same functionality and slick interaction designs.

## Source Code

```tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { cn } from "@/lib/utils";

interface Projects8type {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

const Projects8Data: Projects8type[] = [
  {
    id: 1,
    title: "Kinetic Flow",
    category: "MOONLIGHT VISIONS",
    description:
      "A minimal line illustration capturing the dynamic movement of human posture in motion.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/vanessa-werder-LjFEoGuj5eY-unsplash.jpg",
    tags: ["line-art", "artwork"],
  },
  {
    id: 2,
    title: "Echoes of the Canyon",
    category: "PIXEL PARADE",
    description:
      "Breathtaking photo series highlighting the textures and tones of majestic canyon walls.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/vasilis-karkalas-qOaeVSKyhhE-unsplash.jpg",
    tags: ["photos", "nature"],
  },
  {
    id: 3,
    title: "Serenity in the Highlands",
    category: "WANDER SKETCHES",
    description:
      "A tranquil landscape painting inspired by the rolling hills and cloudy skies of northern Scotland.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/vanessa-werder-PrsQ3hfBFTI-unsplash.jpg",
    tags: ["paintings", "landscape"],
  },
  {
    id: 4,
    title: "Visual Tales",
    category: "ECHO FIELDS",
    description:
      "A bold exploration of modern storytelling through layered textures and abstract elements.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/pat-whelen-gWfpmH0H2bM-unsplash.jpg",
    tags: ["artwork", "digital"],
  },
  {
    id: 5,
    title: "Quiet Garden",
    category: "NEON TAPESTRY",
    description:
      "A meditative pencil sketch inspired by the harmony and simplicity of Japanese zen gardens.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/vanessa-werder-4G228Duzmn8-unsplash.jpg",
    tags: ["sketches", "traditional"],
  },
  {
    id: 6,
    title: "STARDUST STORIES",
    category: "VIDEOS",
    description:
      "A short cinematic video capturing the interplay of sunlight through crystal at golden hour.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/vasilis-karkalas-1LT5DG5BD6Q-unsplash.jpg",

    tags: ["videos", "cinematic"],
  },
];

const filterCategories = [
  "ALL",
  "MOONLIGHT VISIONS",
  "PIXEL PARADE",
  "WANDER SKETCHES",
  "ECHO FIELDS",
  "NEON TAPESTRY",
];

interface Projects8Props {
  className?: string;
}

const Projects8 = ({ className }: Projects8Props) => {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [filteredItems, setFilteredItems] = useState(Projects8Data);

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);

    if (category === "ALL") {
      setFilteredItems(Projects8Data);
    } else {
      const filtered = Projects8Data.filter(
        (item) =>
          item.category === category ||
          item.tags.includes(category.toLowerCase().replace(" ", "-")),
      );
      setFilteredItems(filtered);
    }
  };

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-wrap justify-center gap-8">
            {filterCategories.map((category) => (
              <button
                key={category}
                onClick={() => handleFilterChange(category)}
                className={`text-sm font-medium tracking-wider transition-colors duration-300 hover:text-foreground ${
                  activeFilter === category
                    ? "border-b-2 border-border pb-1 text-foreground"
                    : "text-gray-500"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <AnimatePresence mode="wait">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                  }}
                  className="group relative cursor-pointer overflow-hidden rounded-lg"
                >
                  <div className="relative aspect-[4/3] h-96 w-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover transition-transform duration-300"
                    />

                    <motion.div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 p-8 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      <motion.div className="translate-y-5 text-center opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <p className="mb-4 text-xs font-medium tracking-widest text-gray-300">
                          {item.category}
                        </p>
                        <h3 className="mb-4 text-2xl font-light tracking-wide">
                          {item.title}
                        </h3>
                        <p className="max-w-xs text-sm leading-relaxed text-gray-200">
                          {item.description}
                        </p>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-16 text-center"
            >
              <p className="text-lg text-gray-500">
                No items found for "{activeFilter}" category.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export { Projects8 };
```
