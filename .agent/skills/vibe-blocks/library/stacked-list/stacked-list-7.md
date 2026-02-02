# Stacked List 7

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

type ListProps = {
  url: string;
  title: string;
  date: string;
  badge: string;
  button: ButtonProps;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  options: string[];
  lists: ListProps[];
};

export type StackedList7Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const StackedList7 = (props: StackedList7Props) => {
  const { heading, description, buttons, options, lists } = {
    ...StackedList7Defaults,
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
              {options.map((option, index) => (
                <DropdownMenuItem key={index}>{option}</DropdownMenuItem>
              ))}
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
            <div className="w-full max-w-lg">
              <h3 className="font-semibold">{list.title}</h3>
              <p className="text-sm">{list.date}</p>
            </div>
            <div className="flex items-center justify-between gap-4">
              <h4 className="flex items-center justify-center bg-background-secondary px-3 py-0.5 text-sm font-medium">
                {list.badge}
              </h4>
              <Button {...list.button} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export const StackedList7Defaults: Props = {
  heading: "Recent Tasks",
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
      title: "Task name",
      date: "Created on June 20, 2023",
      badge: "Complete",
      button: {
        variant: "tertiary",
        size: "icon",
        iconRight: <ChevronRight className="size-5" />,
      },
    },
    {
      url: "#",
      title: "Task name",
      date: "Created on June 20, 2023",
      badge: "Complete",
      button: {
        variant: "tertiary",
        size: "icon",
        iconRight: <ChevronRight className="size-5" />,
      },
    },
    {
      url: "#",
      title: "Task name",
      date: "Created on June 20, 2023",
      badge: "Complete",
      button: {
        variant: "tertiary",
        size: "icon",
        iconRight: <ChevronRight className="size-5" />,
      },
    },
    {
      url: "#",
      title: "Task name",
      date: "Created on June 20, 2023",
      badge: "Complete",
      button: {
        variant: "tertiary",
        size: "icon",
        iconRight: <ChevronRight className="size-5" />,
      },
    },
  ],
};

StackedList7.displayName = 'StackedList7';
```

