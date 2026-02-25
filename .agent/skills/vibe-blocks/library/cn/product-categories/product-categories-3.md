# Product Categories 3

## Metadata
- **Category**: Product Categories
- **Objective**: Display a full-width background category hero with centered overlay text.
- **Use Case**: Quick category intros or high-impact banners for accessories and jewelry.
- **Visual Style**: Cinematic, high-contrast design with a darkened overlay (`before:bg-black/30`) to ensure text legibility over diverse imagery.
- **Interactivity**: 
    - Smooth background entrance: The background image performs a subtle zoom-in animation (`zoom-in-150`) on load.
    - Responsive padding and font sizing for different viewports.

## Description
Product Categories 3 is a high-impact, minimalist hero section designed for visual focus. It uses a relative container with an absolute-positioned background image and a CSS pseudo-element overlay to create depth and contrast. The component is ideal for mobile-first designs where vertical space is limited but visual punch is required. It's perfectly suited for presenting single categories like "Accessories" or "New Arrivals" with a premium, focused aesthetic.

## Source Code

```tsx
import { cn } from "@/lib/utils";

const PRODUCT_CATEGORIES = {
  title: "Accessories",
  summary: "Reliable and stylish shirts for plant work",
  image: {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/accessories/Gold-Heart-Earrings-2.png",
    alt: "",
  },
};

interface ProductCategories3Props {
  title: string;
  summary: string;
  image: {
    src: string;
    alt: string;
  };
  className?: string;
}

const ProductCategories3 = ({
  title = PRODUCT_CATEGORIES.title,
  summary = PRODUCT_CATEGORIES.summary,
  image = PRODUCT_CATEGORIES.image,
  className,
}: ProductCategories3Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="relative flex min-h-75 items-center justify-center overflow-hidden rounded-xl before:absolute before:inset-0 before:z-20 before:size-full before:bg-black/30">
          <div className="relative z-30 flex size-full flex-col gap-3 px-6 py-8 md:px-10 lg:px-20">
            <h1 className="text-center text-4xl font-medium text-white sm:text-5xl">
              {title}
            </h1>
            <p className="text-center text-lg text-white">{summary}</p>
          </div>
          <div className="absolute inset-0 animate-in duration-700 zoom-in-150">
            <img
              src={image.src}
              alt={image.alt}
              className="size-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { ProductCategories3 };
```
