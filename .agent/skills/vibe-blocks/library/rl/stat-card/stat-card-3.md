# Stat Card 3

## Metadata
- **Category**: Stat Card
- **Objective**: Visual Highlight Metric
- **Use Case**: Featured growth indicator.
- **Visual Style**: Large focus number + Card shadow.
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

type StatCard = {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge: string;
  options: string[];
  progressBar: number;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  stats: StatCard[];
  options: string[];
};

export type Stat3Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Stat3 = (props: Stat3Props) => {
  const { heading, description, buttons, stats, options } = {
    ...Stat3Defaults,
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
      <div className="grid auto-cols-fr grid-cols-1 gap-4 md:grid-flow-col md:gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
 className="flex flex-col justify-between border border-border-primary p-6 md:justify-normal"
>
            <p className="mb-1">{stat.title}</p>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold md:text-2xl">{stat.description}</h2>
              <div className="flex items-center gap-1">
                {stat.icon}
                <p className="text-sm">{stat.badge}</p>
              </div>
            </div>
            <div className="relative mt-3 h-1 bg-background-secondary md:mt-4">
              <div
 className="absolute left-0 top-0 h-full bg-background-alternative"
                style={{ width: `${stat.progressBar}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const Stat3Defaults: Props = {
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
      icon: <BiUpArrowAlt />,
      title: "Lorem ipsum",
      description: "90,000",
      badge: "100%",
      options: ["View Report", "Add Report", "View all"],
      progressBar: 60,
    },
    {
      icon: <BiDownArrowAlt />,
      title: "Lorem ipsum",
      description: "90,000",
      badge: "100%",
      options: ["View Report", "Add Report", "View all"],
      progressBar: 60,
    },
    {
      icon: <BiUpArrowAlt />,
      title: "Lorem ipsum",
      description: "90,000",
      badge: "100%",
      options: ["View Report", "Add Report", "View all"],
      progressBar: 60,
    },
  ],
};
```

