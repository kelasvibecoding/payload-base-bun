# Stat Card 2

## Metadata
- **Category**: Stat Card
- **Objective**: Simple Row Metrics
- **Use Case**: Quick system overview.
- **Visual Style**: Horizontal row grid.
- **Interactivity**: Static.

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
import { BiDotsHorizontalRounded, BiUpArrowAlt, BiDownArrowAlt } from 'lucide-react';

type ImageProps = {
  src: string;
  alt?: string;
};

type StatCard = {
  logo: ImageProps;
  title: string;
  description: string;
  badge: string;
  icon: React.ReactNode;
  comparisonText: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  stats: StatCard[];
  options: string[];
};

export type Stat2Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Stat2 = (props: Stat2Props) => {
  const { heading, description, buttons, stats, options } = {
    ...Stat2Defaults,
    ...props,
  };
  return (
    <section>
      <div className="grid auto-cols-fr grid-cols-1 items-end gap-4 pb-5 md:grid-cols-[1fr_max-content] md:gap-6 md:pb-6">
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
      <div className="grid auto-cols-fr grid-cols-1 gap-4 md:grid-flow-col md:gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
 className="flex items-center justify-between gap-4 border border-border-primary p-6"
>
            <div className="flex flex-col items-start">
              <p className="mb-1">{stat.title}</p>
              <h2 className="text-xl font-bold md:text-2xl">{stat.description}</h2>
              <div className="mt-1 flex flex-wrap items-center gap-x-1 lg:gap-1">
                <div className="flex items-center gap-0.5">
                  {stat.icon}
                  <p className="text-sm">{stat.badge}</p>
                </div>
                <p className="text-sm">{stat.comparisonText}</p>
              </div>
            </div>
            <img src={stat.logo.src} alt={stat.logo.alt} className="size-8" />
          </div>
        ))}
      </div>
    </section>
  );
};

export const Stat2Defaults: Props = {
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
      logo: {
        src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-icon.svg",
        alt: "vibecoding icon 1",
      },
      title: "Lorem ipsum",
      description: "90,000",
      icon: <BiUpArrowAlt />,
      badge: "100%",
      comparisonText: "vs last month",
    },
    {
      logo: {
        src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-icon.svg",
        alt: "vibecoding icon 1",
      },
      title: "Lorem ipsum",
      description: "90,000",
      icon: <BiDownArrowAlt />,
      badge: "100%",
      comparisonText: "vs last month",
    },
    {
      logo: {
        src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-icon.svg",
        alt: "vibecoding icon 1",
      },
      title: "Lorem ipsum",
      description: "90,000",
      icon: <BiUpArrowAlt />,
      badge: "100%",
      comparisonText: "vs last month",
    },
  ],
};
```

