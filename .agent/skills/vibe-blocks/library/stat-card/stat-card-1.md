# Stat Card 1

## Metadata
- **Category**: Stat Card
- **Objective**: KPI Dashboard Unit
- **Use Case**: Management reporting overview.
- **Visual Style**: Icon + Metric + Trend Badge.
- **Interactivity**: Dropdown settings.

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
import { BiDotsHorizontalRounded, BiUpArrowAlt } from 'lucide-react';

type ImageProps = {
  src: string;
  alt?: string;
};

type StatCard = {
  icon: ImageProps;
  title: string;
  description: string;
  badge: string;
  options: string[];
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  stats: StatCard[];
  options: string[];
};

export type Stat1Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Stat1 = (props: Stat1Props) => {
  const { heading, description, buttons, stats, options } = {
    ...Stat1Defaults,
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
 className="flex flex-col justify-between border border-border-primary p-6 md:justify-normal"
>
            <div className="mb-3 flex items-center justify-between gap-4 md:mb-4">
              <img src={stat.icon.src} alt={stat.icon.alt} className="size-8" />
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
            <p className="mb-1">{stat.title}</p>
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl font-bold md:text-2xl">{stat.description}</h2>
              <div className="flex items-center gap-1 rounded-full border border-border-primary px-2 py-0.5">
                <BiUpArrowAlt />
                <p className="text-sm">{stat.badge}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const Stat1Defaults: Props = {
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
      badge: "100%",
      options: ["View Report", "Add Report", "View all"],
    },
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-icon.svg",
        alt: "vibecoding icon 1",
      },
      title: "Lorem ipsum",
      description: "90,000",
      badge: "100%",
      options: ["View Report", "Add Report", "View all"],
    },
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/vibecoding-icon.svg",
        alt: "vibecoding icon 1",
      },
      title: "Lorem ipsum",
      description: "90,000",
      badge: "100%",
      options: ["View Report", "Add Report", "View all"],
    },
  ],
};
```

