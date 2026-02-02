# Page Header 3

## Metadata
- **Category**: Page Header
- **Objective**: Action-Priority Header
- **Use Case**: Management interface tops.
- **Visual Style**: Balanced grid with multiple buttons.
- **Interactivity**: Primary controls.

## Description
A high-level structural component used to introduce a page, provide site navigation context through breadcrumbs, and host primary page actions.

## Source Code
```tsx
import React from 'react';
import { BiSearch } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  Button,
  ButtonProps,
  Input,
} from '@/components/ui';

type ImageProps = {
  src: string;
  alt?: string;
};

type BreadcrumbProps = {
  url: string;
  title: string;
};

type Props = {
  image: ImageProps;
  breadcrumbs: BreadcrumbProps[];
  heading: string;
  description: string;
  buttons: ButtonProps[];
};

export type PageHeader3Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const PageHeader3 = (props: PageHeader3Props) => {
  const { image, breadcrumbs, heading, description, buttons } = {
    ...PageHeader3Defaults,
    ...props,
  };
  return (
    <section>
      <div className="h-60">
        <img src={image.src} className="size-full object-cover" alt={image.alt} />
      </div>
      <div className="px-6 py-8 md:px-8 md:py-10 lg:py-12">
        <div className="container">
          <div className="max-w-lg lg:max-w-xxl">
            <Breadcrumb className="mb-3 flex w-full items-center md:mb-4">
              <BreadcrumbList className="gap-2">
                {breadcrumbs.map((item, index) => (
                  <React.Fragment key={index}>
                    <BreadcrumbItem>
                      <BreadcrumbLink
 className={`text-sm ${index === breadcrumbs.length - 1 && "font-medium"}`}
                        href={item.url}
>
                        {item.title}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                  </React.Fragment>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
            <div className="grid w-full grid-cols-1 gap-4 md:gap-6 lg:grid-cols-[1fr_max-content]">
              <div className="max-w-lg flex-1">
                <h1 className="text-2xl font-bold md:text-3xl md:leading-[1.3] lg:text-4xl">
                  {heading}
                </h1>
                <p className="mt-2">{description}</p>
              </div>
              <div className="flex w-full items-end">
                <div className="flex w-full flex-col md:w-auto md:flex-row md:items-center">
                  <div className="mb-4 w-full md:mb-0 md:mr-4">
                    <Input placeholder="Search" icon={<BiSearch className="size-6" />} />
                  </div>
                  <div className="flex flex-wrap gap-4 md:flex-none">
                    {buttons.map((button, index) => (
                      <Button key={index} {...button}>
                        {button.title}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const PageHeader3Defaults: Props = {
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    alt: "vibecoding placeholder image",
  },
  breadcrumbs: [
    { url: "#", title: "Link One" },
    { url: "#", title: "Link Two" },
    { url: "#", title: "Link Three" },
  ],
  heading: "Heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  buttons: [
    { title: "Button", variant: "secondary", size: "sm" },
    {
      title: "Button",
      variant: "primary",
      size: "sm",
    },
  ],
};

PageHeader3.displayName = 'PageHeader3';
```

