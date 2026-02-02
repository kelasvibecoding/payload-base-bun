# Page Header 5

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
  image: ImageProps;
  breadcrumbs: BreadcrumbProps[];
  user: UserDetailsProps;
  buttons: ButtonProps[];
};

export type PageHeader5Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const PageHeader5 = (props: PageHeader5Props) => {
  const { image, breadcrumbs, user, buttons } = {
    ...PageHeader5Defaults,
    ...props,
  };
  return (
    <section>
      <div className="-mb-12 h-60 md:-mb-16 lg:-mb-10">
        <img src={image.src} className="size-full object-cover" alt={image.alt} />
      </div>
      <div className="px-6 md:px-8">
        <div className="container">
          <div className="grid auto-cols-fr grid-cols-[max-content_1fr] items-end gap-6 md:grid-cols-[1fr_max-content] lg:grid-cols-[max-content_1fr]">
            <div className="justify-self-start rounded-full outline outline-4 outline-offset-0 outline-neutral-white">
              <img
                src={user.avatar.src}
                alt={user.avatar.alt}
 className="size-24 rounded-full object-cover md:size-32 lg:size-40"
              />
            </div>
            <div className="col-span-2 w-full lg:col-span-1">
              <Breadcrumb className="mb-4 flex w-full items-center">
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
                <div>
                  <h6 className="text-xl font-bold md:text-2xl">{user.fullName}</h6>
                  <div>{user.email}</div>
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
      </div>
    </section>
  );
};

export const PageHeader5Defaults: Props = {
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    alt: "vibecoding placeholder avatar",
  },
  breadcrumbs: [
    { url: "#", title: "Link One" },
    { url: "#", title: "Link Two" },
    { url: "#", title: "Link Three" },
  ],
  user: {
    avatar: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
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

PageHeader5.displayName = 'PageHeader5';
```

