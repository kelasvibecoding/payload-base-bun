# Product 1

## Metadata
- **Category**: Product
- **Objective**: Uniform E-commerce Grid
- **Use Case**: Shop category browsing.
- **Visual Style**: 4-column responsive grid.
- **Interactivity**: Quick view / Link actions.

## Description
A functional grid or list layout for displaying e-commerce items, often including pricing, descriptions, and filtering capabilities.

## Source Code
```tsx
import { Button, ButtonProps } from '@/components/ui';

type ImageProps = {
  src: string;
  alt?: string;
};

type ProductProps = {
  image: ImageProps;
  name: string;
  description: string;
  price: string;
  url: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  viewAllButton: ButtonProps;
  products: ProductProps[];
};

export type Product1Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Product1 = (props: Product1Props) => {
  const { tagline, heading, description, viewAllButton, products } = {
    ...Product1Defaults,
    ...props,
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 md:mb-18 md:grid-cols-[1fr_max-content] md:items-end md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h2 className="mb-3 text-5xl font-bold md:mb-4 md:text-7xl lg:text-8xl">{heading}</h2>
            <p className="md:text-md">{description}</p>
          </div>
          <div className="hidden md:block">
            <Button {...viewAllButton}>{viewAllButton.title}</Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
          {products.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Product = (product: ProductProps) => {
  return (
    <a href={product.url}>
      <div className="mb-3 md:mb-4">
        <img
          src={product.image.src}
          alt={product.image.alt}
 className="aspect-[10/12] size-full object-cover"
        />
      </div>
      <div className="mb-2">
        <p className="font-semibold md:text-md">{product.name}</p>
        <p className="text-sm">{product.description}</p>
      </div>
      <p className="text-md font-semibold md:text-lg">{product.price}</p>
    </a>
  );
};

export const Product1Defaults: Props = {
  tagline: "Tagline",
  heading: "Products",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  viewAllButton: {
    title: "View all",
    variant: "secondary",
  },
  products: [
    {
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "vibecoding placeholder image 1",
      },
      name: "Product name",
      description: "Variant",
      price: "$55",
      url: "#",
    },
    {
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "vibecoding placeholder image 2",
      },
      name: "Product name",
      description: "Variant",
      price: "$55",
      url: "#",
    },
    {
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "vibecoding placeholder image 3",
      },
      name: "Product name",
      description: "Variant",
      price: "$55",
      url: "#",
    },
    {
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "vibecoding placeholder image 4",
      },
      name: "Product name",
      description: "Variant",
      price: "$55",
      url: "#",
    },
    {
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "vibecoding placeholder image 5",
      },
      name: "Product name",
      description: "Variant",
      price: "$55",
      url: "#",
    },
    {
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "vibecoding placeholder image 6",
      },
      name: "Product name",
      description: "Variant",
      price: "$55",
      url: "#",
    },
    {
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "vibecoding placeholder image 7",
      },
      name: "Product name",
      description: "Variant",
      price: "$55",
      url: "#",
    },
    {
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "vibecoding placeholder image 8",
      },
      name: "Product name",
      description: "Variant",
      price: "$55",
      url: "#",
    },
  ],
};

Product1.displayName = 'Product1';
```

