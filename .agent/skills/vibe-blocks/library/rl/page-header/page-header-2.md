# Page Header 2

## Metadata
- **Category**: Page Header
- **Objective**: Minimal Page Title
- **Use Case**: Clean architectural headers.
- **Visual Style**: Centred high-contrast type.
- **Interactivity**: Static.

## Description
A high-level structural component used to introduce a page, provide site navigation context through breadcrumbs, and host primary page actions.

## Source Code
```tsx
import React from 'react';
import { BiCalendarAlt, BiLoader, BiPurchaseTag, BiSearch, BiUser } from 'lucide-react';
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

type LabelProps = {
  title: string;
  icon: React.ReactNode;
};

type Props = {
  breadcrumbs: BreadcrumbProps[];
  heading: string;
  labels: LabelProps[];
  buttons: ButtonProps[];
};

export type PageHeader2Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const PageHeader2 = (props: PageHeader2Props) => {
  const { breadcrumbs, heading, labels, buttons } = {
    ...PageHeader2Defaults,
    ...props,
  };
  return (
    <section className="px-6 py-8 md:px-8 md:py-10 lg:py-12">
      <div className="container">
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
            <div className="mt-2 grid grid-flow-col grid-rows-2 justify-start gap-4 sm:grid-rows-1 md:gap-6">
              {labels.map((label, index) => (
                <div key={index} className="flex">
                  <div className="mr-2">{label.icon}</div>
                  <div className="text-sm">{label.title}</div>
                </div>
              ))}
            </div>
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
    </section>
  );
};

export const PageHeader2Defaults: Props = {
  breadcrumbs: [
    { url: "#", title: "Link One" },
    { url: "#", title: "Link Two" },
    { url: "#", title: "Link Three" },
  ],
  heading: "Heading goes here",
  labels: [
    {
      title: "Label",
      icon: <BiPurchaseTag className="size-6" />,
    },
    {
      title: "Status",
      icon: <BiLoader className="size-6" />,
    },
    {
      title: "Assignee",
      icon: <BiUser className="size-6" />,
    },
    {
      title: "Created: July 1, 2023",
      icon: <BiCalendarAlt className="size-6" />,
    },
  ],
  buttons: [
    { title: "Button", variant: "secondary", size: "sm" },
    {
      title: "Button",
      variant: "primary",
      size: "sm",
    },
  ],
};

PageHeader2.displayName = 'PageHeader2';
```

