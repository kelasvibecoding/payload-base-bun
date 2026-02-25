# Section Header 1

## Metadata
- **Category**: Section Header
- **Objective**: Actionable Section Title
- **Use Case**: Grouping content modules in apps.
- **Visual Style**: Grid with description + Button row.
- **Interactivity**: Settings Dropdown / Submit actions.

## Description
A contextual header component for individual sections within a page, providing descriptions and localized action controls.

## Source Code
```tsx
import { Button } from '@/components/ui';
import type { ButtonProps } from '@/components/ui';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui';
import { BiDotsHorizontalRounded } from 'lucide-react';

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  options: string[];
};

export type SectionHeader1Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const SectionHeader1 = (props: SectionHeader1Props) => {
  const { heading, description, buttons, options } = {
    ...SectionHeader1Defaults,
    ...props,
  };
  return (
    <section className="pb-5 md:pb-6">
      <div className="grid grid-cols-1 items-end justify-between gap-4 md:grid-cols-[1fr_max-content] md:gap-6">
        <div className="max-w-lg">
          <h2 className="text-xl font-bold md:text-2xl">{heading}</h2>
          <p className="mt-2">{description}</p>
        </div>
        <div className="flex items-center justify-between gap-4 md:justify-normal">
          <div className="flex flex-wrap items-start justify-start gap-4">
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
    </section>
  );
};

export const SectionHeader1Defaults: Props = {
  heading: "Heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  buttons: [
    { title: "Button", variant: "secondary", size: "sm" },
    { title: "Button", size: "sm" },
  ],
  options: ["Option One", "Option Two", "Option Three"],
};

SectionHeader1.displayName = 'SectionHeader1';
```

