# Section Header 3

## Metadata
- **Category**: Section Header
- **Objective**: General Section Header
- **Use Case**: Standard Section Header hierarchy.
- **Visual Style**: Clean layout.
- **Interactivity**: Primary actions.

## Description
A contextual header component for individual sections within a page, providing descriptions and localized action controls.

## Source Code
```tsx
import {
  Button,
  Tabs,
  TabsList,
  TabsTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui';
import type { ButtonProps } from '@/components/ui';

import { BiDotsHorizontalRounded } from 'lucide-react';

type Tab = {
  value: string;
  trigger: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  options: string[];
  tabs: Tab[];
};

export type SectionHeader3Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const SectionHeader3 = (props: SectionHeader3Props) => {
  const { heading, description, buttons, options, tabs } = {
    ...SectionHeader3Defaults,
    ...props,
  };
  return (
    <section className="pb-5 md:pb-6">
      <div className="mb-4 grid grid-cols-1 items-end justify-between gap-4 md:mb-2 md:grid-cols-[1fr_max-content] md:gap-6">
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
      <Tabs defaultValue={tabs[0].value} className="flex flex-col items-start">
        <TabsList className="no-scrollbar relative flex flex-nowrap items-center gap-x-6 overflow-auto md:w-auto">
          {tabs.map((tab, index) => (
            <TabsTrigger
              key={index}
              value={tab.value}
 className="border-0 border-b border-transparent px-0 py-2 duration-0 data-[state=active]:border-border-primary data-[state=active]:bg-transparent data-[state=active]:text-text-primary"
>
              {tab.trigger}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </section>
  );
};

export const SectionHeader3Defaults: Props = {
  heading: "Heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  buttons: [
    { title: "Button", variant: "secondary", size: "sm" },
    { title: "Button", size: "sm" },
  ],
  options: ["Option One", "Option Two", "Option Three"],
  tabs: [
    {
      value: "tab-one",
      trigger: "Tab One",
    },
    {
      value: "tab-two",
      trigger: "Tab Two",
    },
    {
      value: "tab-three",
      trigger: "Tab Three",
    },
  ],
};

SectionHeader3.displayName = 'SectionHeader3';
```

