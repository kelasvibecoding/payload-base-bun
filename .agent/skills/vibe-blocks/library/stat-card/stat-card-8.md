# Stat Card 8

## Metadata
- **Category**: Stat Card
- **Objective**: General Stat Card
- **Use Case**: Visual Stat Card browsing.
- **Visual Style**: Clean layout.
- **Interactivity**: Primary actions.

## Description
A compact data-visualization component for high-level metrics, growth trends, and key performance indicators in dashboads.

## Source Code
```tsx
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui';
import type { ButtonProps } from '@/components/ui';
import { BiDotsHorizontalRounded, BiDownArrowAlt, BiUpArrowAlt } from 'lucide-react';

type ImageProps = {
  src: string;
  alt?: string;
};

type BadgeProps = {
  text: string;
  icon: React.ReactNode;
};

type StatCard = {
  icon: ImageProps;
  title: string;
  description: string;
  badge: BadgeProps;
  button: ButtonProps;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  stats: StatCard[];
  options: string[];
};

export type Stat8Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Stat8 = (props: Stat8Props) => {
  const { heading, description, buttons, stats, options } = {
    ...Stat8Defaults,
    ...props,
  };
  return (
    <section>
      <div className="mb-5 grid auto-cols-fr grid-cols-1 items-end gap-4 md:mb-6 md:grid-cols-[1fr_max-content] md:gap-6">
        <div className="w-full max-w-lg">
          <h1 className="text-xl font-bold md:text-2xl">{heading}</h1>
          <p className="mt-2">{description}</p>
        </div>
        <div className="flex items-center justify-between gap-4 md:justify-normal">
          <div className="flex items-center gap-4">
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
              {options.map((option, index) => (
                <DropdownMenuItem key={index}>{option}</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div key={index}>
            <div className="flex flex-col justify-between border border-border-primary p-6 md:justify-normal">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <div className="flex size-14 items-center justify-center bg-background-secondary">
                  <img src={stat.icon.src} alt={stat.icon.alt} className="size-8" />
                </div>
                <div className="grow">
                  <p className="mb-1">{stat.title}</p>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-bold md:text-2xl">{stat.description}</h2>
                    <div className="flex items-center gap-1">
                      {stat.badge.icon}
                      <p className="text-sm">{stat.badge.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button {...stat.button} className="w-full justify-start border-t-0 px-6 py-4" asChild>
              <a href={stat.button.url}>{stat.button.title}</a>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export const Stat8Defaults: Props = {
  heading: "Recent Activity",
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
  stats: [
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-icon.svg",
        alt: "vibecoding icon 1",
      },
      title: "Lorem ipsum",
      description: "90,000",
      badge: {
        icon: <BiUpArrowAlt />,
        text: "100%",
      },
      button: {
        url: "#",
        title: "View report",
        variant: "secondary",
      },
    },
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-icon.svg",
        alt: "vibecoding icon 2",
      },
      title: "Lorem ipsum",
      description: "90,000",
      badge: {
        icon: <BiDownArrowAlt />,
        text: "100%",
      },
      button: {
        url: "#",
        title: "View report",
        variant: "secondary",
      },
    },
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-icon.svg",
        alt: "vibecoding icon 3",
      },
      title: "Lorem ipsum",
      description: "90,000",
      badge: {
        icon: <BiUpArrowAlt />,
        text: "100%",
      },
      button: {
        url: "#",
        title: "View report",
        variant: "secondary",
      },
    },
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-icon.svg",
        alt: "vibecoding icon 4",
      },
      title: "Lorem ipsum",
      description: "90,000",
      badge: {
        icon: <BiDownArrowAlt />,
        text: "100%",
      },
      button: {
        url: "#",
        title: "View report",
        variant: "secondary",
      },
    },
  ],
};
```

