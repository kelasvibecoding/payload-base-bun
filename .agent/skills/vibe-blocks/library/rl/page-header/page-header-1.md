# Page Header 1

## Metadata
- **Category**: Page Header
- **Objective**: Contextual Page Hero
- **Use Case**: Dashboard or resource landing pages.
- **Visual Style**: Breadcrumb + Large title + Search bar.
- **Interactivity**: Path navigation / Search / Actions.

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

type BreadcrumbProps = {
  url: string;
  title: string;
};

type Props = {
  breadcrumbs: BreadcrumbProps[];
  heading: string;
  description: string;
  inputPlaceholder: string;
  inputIcon: React.ReactNode;
  buttons: ButtonProps[];
};

export type PageHeader1Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const PageHeader1 = (props: PageHeader1Props) => {
  const { breadcrumbs, heading, description, inputPlaceholder, inputIcon, buttons } = {
    ...PageHeader1Defaults,
    ...props,
  };
  return (
    <section className="px-6 py-8 md:px-8 md:py-10 lg:py-12">
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
                  <Input placeholder={inputPlaceholder} icon={inputIcon} />
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
    </section>
  );
};

export const PageHeader1Defaults: Props = {
  breadcrumbs: [
    { url: "#", title: "Link One" },
    { url: "#", title: "Link Two" },
    { url: "#", title: "Link Three" },
  ],
  heading: "Heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  inputPlaceholder: "Search",
  inputIcon: <BiSearch className="size-6" />,
  buttons: [
    { title: "Button", variant: "secondary", size: "sm" },
    {
      title: "Button",
      variant: "primary",
      size: "sm",
    },
  ],
};

PageHeader1.displayName = 'PageHeader1';
```

