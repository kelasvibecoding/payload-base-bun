# Product Categories 4

## Metadata
- **Category**: Product Categories
- **Objective**: Display a category landing hero with integrated breadcrumb navigation and background imagery.
- **Use Case**: Main category pages for luxury items (Handbags, Watches) where structural context (breadcrumbs) is required immediately.
- **Visual Style**: Sophisticated, layered design with a semi-transparent black overlay for text readability and a full-height container for impact.
- **Interactivity**: 
    - Breadcrumb navigation with hover states for inactive links.
    - Responsive layout that ensures text balance across different screen widths.
    - Full-bleed background texture using CSS `background-image`.

## Description
Product Categories 4 is a comprehensive category header that combines visual impact with functional navigation. By integrating `Breadcrumb` directly into the hero section, it helps users maintain spatial awareness within the store hierarchy while presenting the category's distinct identity. The component uses a `before:bg-black/30` overlay to unify potentially high-key background images with white typography, ensuring a consistent brand experience across various product lines.

## Source Code

```tsx
import { Fragment } from "react";

import { cn } from "@/lib/utils";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type BreadcrumbLink = {
  link?: string;
  label: string;
};

interface ProductCategory {
  title: string;
  description: string;
  background: string;
}

interface ProductCategories4Props extends ProductCategory {
  breadcrumb: BreadcrumbLink[];
  className?: string;
}

const BreadcrumbLinks = [
  {
    label: "Home",
  },
  {
    label: "Handbags",
    link: "#",
  },
];

const PRODUCT_CATEGORY: ProductCategory = {
  background: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/Luxurious-Handbag-Display-2.png",
  title: "Handbags",
  description:
    "Explore our collection of handbags, designed for style and practicality to complement every occasion.",
};

const ProductCategories4 = ({
  breadcrumb = BreadcrumbLinks,
  title = PRODUCT_CATEGORY.title,
  description = PRODUCT_CATEGORY.description,
  background = PRODUCT_CATEGORY.background,
  className,
}: ProductCategories4Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div
        style={{
          backgroundImage: `url(${background})`,
        }}
        className="relative bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-black/30"
      >
        <div className="relative z-10 container flex min-h-80 flex-col py-4">
          <div>
            <ProductsCategoryBreadcrumb links={breadcrumb} />
          </div>
          <div className="flex flex-1 items-center">
            <div className="space-y-4">
              <h1 className="text-2xl leading-tight font-medium text-white sm:text-3xl md:text-4xl lg:text-5xl">
                {title}
              </h1>
              <p className="max-w-100 text-balance text-white/80">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductsCategoryBreadcrumb = ({ links }: { links: BreadcrumbLink[] }) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {links.map(({ label, link }, index) => {
          const isLast = index === links.length - 1;

          return (
            <Fragment key={label}>
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage className="text-white/70">
                    {label}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink
                    href={link}
                    className="cursor-pointer text-white/70 hover:text-white"
                  >
                    {label}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && (
                <BreadcrumbSeparator className="text-white/70">
                  /
                </BreadcrumbSeparator>
              )}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export { ProductCategories4 };
```
