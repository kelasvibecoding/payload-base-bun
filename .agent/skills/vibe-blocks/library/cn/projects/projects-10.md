# Projects 10

## Metadata
- **Category**: Projects
- **Objective**: Provide a seamless, edge-to-edge checkerboard gallery without gaps, optimized for high volume.
- **Use Case**: Large social media feeds, continuous mood boards, or dense product texture catalogs.
- **Visual Style**: Inherits the gapless layout of Projects 9 but scales it down to an `md:grid-cols-3` arrangement. Uses `aspect-square` containers and bottom-up slider-captions.
- **Interactivity**: Pure CSS. `group-hover:translate-y-0` slides the text plate up over the zoomed (`group-hover:scale-105`) imagery.

## Description
Projects 10 is the densely packed 3-column variant of the gapless gallery layout. It's ideally suited for very large arrays of uniformly sized thumbnails. The tighter column width makes the square frames smaller on desktop, generating a distinct mosaic effect.

## Source Code

```tsx
import { cn } from "@/lib/utils";

interface Projects10Props {
  className?: string;
}

const Projects10 = ({ className }: Projects10Props) => {
  const images = [
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw6.jpeg",
      alt: "Woman reading in a sunlit meadow",
      title: "Morning Reflections",
      description: "A peaceful start as sunlight filters through the grass.",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw7.jpeg",
      alt: "Majestic sandstone cliffs at dusk",
      title: "Twilight Cliffs",
      description: "Golden hour paints the rocks in warm hues.",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw8.jpeg",
      alt: "Rolling hills under a cloudy sky",
      title: "Misty Highlands",
      description: "Clouds drift lazily over emerald slopes.",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw5.jpeg",
      alt: "Smiling woman with a bouquet",
      title: "Joyful Gathering",
      description: "Laughter and flowers fill the afternoon air.",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw19.jpeg",
      alt: "a handsome man with a cold stare",
      title: "Cold Stare",
      description: "Water carves its story through ancient stone.",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw18.jpeg",
      alt: "a beautiful woman turned to the side",
      title: "Turned to the Side",
      description: "First light awakens the silent mountains.",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw15.jpeg",
      alt: "Vibrant torii gates in a forest path",
      title: "Path of Vermilion",
      description: "A journey marked by tradition and color.",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw9.jpeg",
      alt: "Serene Japanese rock garden",
      title: "Zen Harmony",
      description: "Stones and sand arranged for mindful balance.",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw17.jpeg",
      alt: "Crackling campfire under stars",
      title: "Starlit Stories",
      description: "Tales and warmth shared by the firelight.",
    },
  ];

  return (
    <section className={cn("py-24", className)}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3">
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

export { Projects10 };
```
