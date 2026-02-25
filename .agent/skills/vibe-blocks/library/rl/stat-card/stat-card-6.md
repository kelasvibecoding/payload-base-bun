# Stat Card 6

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
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  stats: StatCard[];
  options: string[];
};

export type Stat6Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Stat6 = (props: Stat6Props) => {
  const { heading, description, buttons, stats, options } = {
    ...Stat6Defaults,
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
          <div
            key={index}
 className="flex flex-col justify-between border border-border-primary p-6 md:justify-normal"
>
            <div className="flex items-center justify-between gap-x-4">
              <div className="grow">
                <p className="mb-1">{stat.title}</p>
                <h2 className="mb-1 text-xl font-bold md:text-2xl">{stat.description}</h2>
                <div className="flex items-center gap-[.125rem]">
                  {stat.badge.icon}
                  <p className="text-sm">{stat.badge.text}</p>
                </div>
              </div>
              <div>
                <img src={stat.icon.src} alt={stat.icon.alt} className="size-8" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const Stat6Defaults: Props = {
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
        text: "100% vs last month",
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
        text: "100% vs last month",
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
        text: "100% vs last month",
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
        text: "100% vs last month",
      },
    },
  ],
};
```

