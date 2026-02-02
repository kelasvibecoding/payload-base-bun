# Page Header 4

## Metadata
- **Category**: Page Header
- **Objective**: General Page Header
- **Use Case**: Standard Page Header hierarchy.
- **Visual Style**: Clean layout.
- **Interactivity**: Primary actions.

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

type ImageProps = {
  src: string;
  alt?: string;
};

type UserDetailsProps = {
  avatar: ImageProps;
  fullName: string;
  email: string;
};

type Props = {
  breadcrumbs: BreadcrumbProps[];
  user: UserDetailsProps;
  buttons: ButtonProps[];
};

export type PageHeader4Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const PageHeader4 = (props: PageHeader4Props) => {
  const { breadcrumbs, user, buttons } = {
    ...PageHeader4Defaults,
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
        <div className="grid w-full grid-cols-1 gap-4 md:auto-cols-fr md:grid-cols-[1fr_max-content] md:items-end md:gap-6 lg:grid-cols-[1fr_max-content]">
          <div className="rb-4 grid w-full max-w-lg auto-cols-fr grid-cols-[max-content_1fr] items-center gap-3">
            <div>
              <img
                src={user.avatar.src}
                alt={user.avatar.alt}
 className="size-16 min-h-16 min-w-16 rounded-full object-cover"
              />
            </div>
            <div>
              <h6 className="text-xl font-bold md:text-2xl">{user.fullName}</h6>
              <div>{user.email}</div>
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

export const PageHeader4Defaults: Props = {
  breadcrumbs: [
    { url: "#", title: "Link One" },
    { url: "#", title: "Link Two" },
    { url: "#", title: "Link Three" },
  ],
  user: {
    avatar: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg",
      alt: "vibecoding placeholder avatar",
    },
    fullName: "Full name",
    email: "hello@vibecoding.io",
  },
  buttons: [
    { title: "Button", variant: "secondary", size: "sm" },
    {
      title: "Button",
      variant: "primary",
      size: "sm",
    },
  ],
};

PageHeader4.displayName = 'PageHeader4';
```

