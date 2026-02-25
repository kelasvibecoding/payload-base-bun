# Product Categories 1

## Metadata
- **Category**: Product Categories
- **Objective**: Display a hero-style category header with a title, summary, and primary category image.
- **Use Case**: Landing pages or collection headers for high-end boutique accessories.
- **Visual Style**: Modern, split-grid layout (50/50) with a colored background (`bg-muted`) and smooth entrance animations.
- **Interactivity**: 
    - CSS-driven animations for text (slide-in and fade-in).
    - Zoom-in animation for the category image on initial load.
    - Responsive grid that stacks on mobile.

## Description
Product Categories 1 is a elegant transition component used to introduce a specific product group. It features a clean split-screen design where typography and imagery are given equal prominence. The component uses native Tailwind CSS animations (`animate-in`) to create a premium feel during page entry, making it an excellent choice for editorial-focused e-commerce storefronts.

## Source Code

```tsx
import { cn } from "@/lib/utils";

type CategoryImage = {
  src: string;
  srcset?: string;
  alt: string;
  sizes?: string;
};

interface ProductCategories {
  title: string;
  summary: string;
  image: CategoryImage;
}

type ProductCategories1Props = ProductCategories & { className?: string };

const PRODUCT_CATEGORIES: ProductCategories = {
  title: "Sunglasses",
  summary: "Stylish and protective shades for every sunny day",
  image: {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/accessories/Checkered-Sunglasses-on-Stone-Pedestal-1.png",
    srcset:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/accessories/Checkered-Sunglasses-on-Stone-Pedestal-1.png 529w, https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/accessories/Checkered-Sunglasses-on-Stone-Pedestal-2.png 992w",
    alt: "",
    sizes: "(min-width: 992px) 992px, 100vw",
  },
};

const ProductCategories1 = ({
  title = PRODUCT_CATEGORIES.title,
  summary = PRODUCT_CATEGORIES.summary,
  image = PRODUCT_CATEGORIES.image,
  className,
}: ProductCategories1Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="grid grid-cols-1 overflow-hidden rounded-xl bg-muted max-md:grid-rows-[repeat(2,minmax(13.75rem,1fr))] md:min-h-91.5 md:grid-cols-2">
          <div className="flex h-full place-content-center place-items-center px-20 py-8">
            <div className="flex flex-col gap-3">
              <h1 className="animate-in text-center text-4xl leading-relaxed font-medium duration-600 ease-in slide-in-from-bottom-50 fade-in">
                {title}
              </h1>
              <p className="animate-in text-center text-lg leading-normal text-balance duration-600 ease-in slide-in-from-bottom-50 fade-in">
                {summary}
              </p>
            </div>
          </div>
          <div className="relative h-full overflow-hidden">
            <img
              src={image.src}
              alt={image.src}
              srcSet={image.srcset}
              sizes={image.sizes}
              className="absolute inset-0 size-full origin-center animate-in object-cover object-center duration-600 ease-in zoom-in-140"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { ProductCategories1 };
```
