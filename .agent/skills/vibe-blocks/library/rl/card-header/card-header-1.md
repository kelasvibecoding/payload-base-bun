# Card Header 1

## Metadata
- **Category**: Card Header
- **Objective**: Action-Oriented Card Header
- **Use Case**: Card headers with primary actions and overflow menu for additional options.
- **Visual Style**: Heading + description with action buttons and dropdown menu.
- **Interactivity**: Primary action buttons, overflow menu dropdown for secondary actions.

## Description
A card header component providing context, actions, and controls for card-based content sections.

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

export type CardHeader1Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const CardHeader1 = (props: CardHeader1Props) => {
  const { heading, description, buttons, options } = {
    ...CardHeader1Defaults,
    ...props,
  };
  return (
    <section>
      <div className="grid grid-cols-1 items-end justify-between gap-4 border border-border-primary p-6 md:grid-cols-[1fr_max-content] md:gap-6">
        <div className="max-w-lg">
          <h2 className="text-xl font-bold md:text-2xl">{heading}</h2>
          <p className="mt-1">{description}</p>
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

export const CardHeader1Defaults: Props = {
  heading: "Heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  buttons: [
    { title: "Button", variant: "secondary", size: "sm" },
    { title: "Button", size: "sm" },
  ],
  options: ["Option One", "Option Two", "Option Three"],
};

CardHeader1.displayName = 'CardHeader1';
```

