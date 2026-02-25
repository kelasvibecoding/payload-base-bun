# Projects 2

## Metadata
- **Category**: Projects
- **Objective**: Create an editorial, print-like layout for showcasing selected projects.
- **Use Case**: High-end fashion portfolios, luxury real estate showcases, or premium agency work.
- **Visual Style**: Completely static (Zero JS) to ensure instant rendering. Uses an asymmetrical 12-column grid (`lg:col-span-4` and `lg:col-span-8`). Capitalized, hyper-tracked serif headings create a "museum exhibition" aesthetic.
- **Interactivity**: None by design. Emphasizes clean, fast-loading imagery and structural perfection over flashy animations. Mobile layouts rely heavily on `order` utilities (`order-2 lg:order-1`) to stack images logically above the text on smaller screens.

## Description
Projects 2 draws heavily on traditional editorial and magazine layouts. Its primary mechanism is asymmetry: by allocating 8 columns to the image and 4 columns to the text, it creates extreme visual tension that pulls the eye directly to the photography. The absence of animations ensures that the layout feels sturdy and timeless, prioritizing Lighthouse scores and immediate user impact.

## Source Code

```tsx
import { cn } from "@/lib/utils";

interface Projects2type {
  title: string;
  description: string;
  imagePath: string;
  imageAlt: string;
}

const projects2prop: Projects2type[] = [
  {
    title: "MOSAIC",
    description:
      "A vibrant fusion of city lights and digital artistry, this installation transforms urban landscapes into interactive canvases, inviting viewers to become part of the evolving masterpiece.",
    imagePath: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw1.jpeg",
    imageAlt: "Modern digital art installation",
  },
  {
    title: "IDENTITY REIMAGINED",
    description:
      "A bold rebranding journey, where classic design principles meet contemporary flair. This project breathes new life into established brands, crafting visual stories that resonate across every platform.",
    imagePath: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw2.jpeg",
    imageAlt: "Brand design mockups and materials",
  },
  {
    title: "SERENITY SPACES",
    description:
      "An exploration of harmony between architecture and human experience. This concept blends natural materials and open layouts to create environments that inspire calm and creativity.",
    imagePath: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw3.jpeg",
    imageAlt: "Architectural interior design concept",
  },
];

interface Projects2Props {
  className?: string;
}

const Projects2 = ({ className }: Projects2Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <h1 className="mb-16 font-serif text-4xl font-normal tracking-wide text-foreground md:mb-24 md:text-6xl lg:text-7xl">
          PROJECT SHOWCASE
        </h1>

        <div className="space-y-16 md:space-y-24 lg:space-y-32">
          {projects2prop.map((project, index) => (
            <div
              key={index}
              className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12"
            >
              <div className="order-2 lg:order-1 lg:col-span-4">
                <h2 className="mb-4 font-sans text-base font-bold tracking-wider text-foreground uppercase md:text-base">
                  {project.title}
                </h2>
                <p className="max-w-sm font-sans text-sm leading-relaxed text-muted-foreground md:text-base">
                  {project.description}
                </p>
              </div>

              <div className="order-1 lg:order-2 lg:col-span-8">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-border">
                  <img
                    src={project.imagePath}
                    alt={project.imageAlt}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Projects2 };
```
