# Projects 9

## Metadata
- **Category**: Projects
- **Objective**: Provide a seamless, edge-to-edge checkerboard gallery without gaps.
- **Use Case**: Instagram-style feeds, continuous mood boards, or dense architectural material galleries.
- **Visual Style**: A gapless `md:grid-cols-2` grid. Images are forced into a strict `aspect-square` ratio ensuring perfect tiling perfectly across the viewport or container. Features a sleek, bottom-up text reveal.
- **Interactivity**: Strictly CSS managed. A `group-hover:translate-y-0` slides the text block up from outside the frame (`translate-y-full`). The image simultaneously scales slightly.

## Description
Projects 9 abandons the standard spacing rules (`gap-x`, spacing utilities) in favor of a tightly packed, contiguous tile graphic layout. It acts visually similar to social media grids, making it instantly familiar to users. Because there are no gaps, the images feel like a continuous patchwork. The text overlay stays firmly anchored to the bottom edge, creating a clean "caption" effect rather than an intrusive central overlay.

## Source Code

```tsx
import { cn } from "@/lib/utils";

interface Projects9Props {
  className?: string;
}

const Projects9 = ({ className }: Projects9Props) => {
  const images = [
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw1.jpeg",
      alt: "Woman with flowers",
      title: "Spring Blossoms",
      description: "A moment of tranquility captured in nature's embrace",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw2.jpeg",
      alt: "Red rock formations",
      title: "Desert Canyon",
      description: "Ancient stones carved by time and wind",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw3.jpeg",
      alt: "Mountain landscape",
      title: "Highland Vista",
      description: "Where earth meets sky in perfect harmony",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw4.jpeg",
      alt: "Torii gates",
      title: "Sacred Path",
      description: "Traditional gates leading to spiritual awakening",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw5.jpeg",
      alt: "Zen garden",
      title: "Meditation Garden",
      description: "Raked sand patterns creating inner peace",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw6.jpeg",
      alt: "Campfire flames",
      title: "Evening Fire",
      description: "Warmth and light dancing in the darkness",
    },
  ];

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/0 transition-all duration-300 group-hover:bg-background/10" />
              <div className="absolute right-0 bottom-0 left-0 translate-y-full transform p-6 transition-transform duration-300 group-hover:translate-y-0">
                <div className="text-center">
                  <h3 className="mb-2 text-xl font-semibold text-muted">
                    {image.title}
                  </h3>
                  <p className="text-sm text-muted">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Projects9 };
```
