# Stacked List 9

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

type ListProps = {
  url: string;
  title: string;
  progress: number;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  options: string[];
  lists: ListProps[];
};

export type StackedList9Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const StackedList9 = (props: StackedList9Props) => {
  const { heading, description, buttons, options, lists } = {
    ...StackedList9Defaults,
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
 className="flex max-w-full flex-col border-b border-border-primary px-6 py-4"
>
            <div className="flex w-full justify-between">
              <div className="font-semibold">{list.title}</div>
              <div>{list.progress}%</div>
            </div>
            <div className="relative mt-3 h-1 w-full rounded bg-[#eee] md:mt-4">
              <div
 className="absolute left-0 top-0 h-full rounded bg-black"
                style={{ width: `${list.progress}%` }}
></div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export const StackedList9Defaults: Props = {
  heading: "Project Progress",
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
      title: "Project name",
      progress: 60,
    },
    {
      url: "#",
      title: "Project name",
      progress: 60,
    },
    {
      url: "#",
      title: "Project name",
      progress: 60,
    },
    {
      url: "#",
      title: "Project name",
      progress: 60,
    },
  ],
};

StackedList9.displayName = 'StackedList9';
```

