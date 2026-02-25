# Stacked List 8

## Metadata
- **Category**: Stacked List
- **Objective**: General Stacked List
- **Use Case**: Visual Stacked List browsing.
- **Visual Style**: Clean layout.
- **Interactivity**: Primary actions.

## Description
A vertical listing component ideal for displaying structured data entries like user lists, activity logs, or project summaries with inline actions.

## Source Code
```tsx
import { Button } from '@/components/ui';
import type { ButtonProps } from '@/components/ui';
import { BiDotsHorizontalRounded } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui';
import { ChevronRight } from 'lucide-react';

type ImageProps = {
  src: string;
  alt?: string;
};

type ListProps = {
  url: string;
  icon: ImageProps;
  title: string;
  date: string;
  category: string;
  avatars: ImageProps[];
  button: ButtonProps;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  options: string[];
  lists: ListProps[];
};

export type StackedList8Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const StackedList8 = (props: StackedList8Props) => {
  const { heading, description, buttons, options, lists } = {
    ...StackedList8Defaults,
    ...props,
  };

  return (
    <section className="border-x border-t border-border-primary">
      <div className="grid grid-cols-1 items-end gap-4 p-6 md:grid-cols-[1fr_max-content] md:gap-6">
        <div className="max-w-lg">
          <h2 className="text-xl font-bold md:text-2xl">{heading}</h2>
          <p className="mt-1">{description}</p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-wrap gap-4">
            {buttons.map((button, index) => (
              <Button key={index} {...button}>
                {button.title}
              </Button>
            ))}
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <BiDotsHorizontalRounded className="size-6" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuContent>
                {options.map((option, index) => (
                  <DropdownMenuItem key={index}>{option}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="border-t border-border-primary">
        {lists.map((list, index) => (
          <a
            key={index}
            href={list.url}
 className="grid max-w-full grid-cols-1 gap-6 border-b border-border-primary px-6 py-4 md:grid-cols-[1fr_max-content]"
>
            <div className="grid grid-cols-[max-content_1fr] items-center gap-3">
              <div className="bg-background-secondary p-2">
                <img src={list.icon.src} alt={list.icon.alt} className="size-8" />
              </div>
              <div className="w-full max-w-lg">
                <h3 className="font-semibold">{list.title}</h3>
                <div className="flex items-center">
                  <p className="text-sm">{list.date}</p>
                  <p className="mx-2">•</p>
                  <p className="text-sm">{list.category}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="relative flex pl-2">
                {list.avatars.map((avatar, index) => (
                  <div key={index} className="-ml-2">
                    <img
                      src={avatar.src}
                      alt={avatar.alt}
 className="size-10 rounded-full border-2 border-border-alternative object-cover"
                    />
                  </div>
                ))}
              </div>
              <Button {...list.button} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export const StackedList8Defaults: Props = {
  heading: "Recent Projects",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  buttons: [
    {
      title: "Button",
      variant: "secondary",
      size: "sm",
    },
    {
      title: "Button",
      size: "sm",
    },
  ],
  options: ["Option One", "Option Two", "Option Three"],
  lists: [
    {
      url: "#",
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-icon.svg",
        alt: "vibecoding icon 1",
      },
      title: "Project name",
      date: "11 Jan 2022",
      category: "Category",
      avatars: [
        {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg",
          alt: "vibecoding avatar 1",
        },
        {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg",
          alt: "vibecoding avatar 2",
        },
        {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg",
          alt: "vibecoding avatar 3",
        },
        {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg",
          alt: "vibecoding avatar 4",
        },
      ],
      button: {
        variant: "tertiary",
        size: "icon",
        iconRight: <ChevronRight className="size-5" />,
      },
    },
    {
      url: "#",
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-icon.svg",
        alt: "vibecoding icon 1",
      },
      title: "Project name",
      date: "11 Jan 2022",
      category: "Category",
      avatars: [
        {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg",
          alt: "vibecoding avatar 1",
        },
        {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg",
          alt: "vibecoding avatar 2",
        },
        {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg",
          alt: "vibecoding avatar 3",
        },
        {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg",
          alt: "vibecoding avatar 4",
        },
      ],
      button: {
        variant: "tertiary",
        size: "icon",
        iconRight: <ChevronRight className="size-5" />,
      },
    },
    {
      url: "#",
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-icon.svg",
        alt: "vibecoding icon 1",
      },
      title: "Project name",
      date: "11 Jan 2022",
      category: "Category",
      avatars: [
        {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg",
          alt: "vibecoding avatar 1",
        },
        {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg",
          alt: "vibecoding avatar 2",
        },
        {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg",
          alt: "vibecoding avatar 3",
        },
        {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg",
          alt: "vibecoding avatar 4",
        },
      ],
      button: {
        variant: "tertiary",
        size: "icon",
        iconRight: <ChevronRight className="size-5" />,
      },
    },
    {
      url: "#",
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-icon.svg",
        alt: "vibecoding icon 1",
      },
      title: "Project name",
      date: "11 Jan 2022",
      category: "Category",
      avatars: [
        {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg",
          alt: "vibecoding avatar 1",
        },
        {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg",
          alt: "vibecoding avatar 2",
        },
        {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg",
          alt: "vibecoding avatar 3",
        },
        {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg",
          alt: "vibecoding avatar 4",
        },
      ],
      button: {
        variant: "tertiary",
        size: "icon",
        iconRight: <ChevronRight className="size-5" />,
      },
    },
  ],
};

StackedList8.displayName = 'StackedList8';
```

