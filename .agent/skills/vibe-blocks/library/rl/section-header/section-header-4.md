# Section Header 4

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
import { Input } from '@/components/ui';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui';
import { useState } from 'react';
import { BiSearch } from 'lucide-react';
import { RxChevronDown } from 'lucide-react';
import clsx from 'clsx';

type SortMenu = {
  title: string;
  criteria: string[];
};

type Tab = {
  value: string;
  trigger: string;
};

type Props = {
  heading: string;
  description: string;
  inputPlaceholder?: string;
  inputIcon: React.ReactNode;
  sortMenu: SortMenu;
  tabs: Tab[];
};

export type SectionHeader4Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const SectionHeader4 = (props: SectionHeader4Props) => {
  const { heading, description, sortMenu, inputPlaceholder, inputIcon, tabs } = {
    ...SectionHeader4Defaults,
    ...props,
  };

  const [searchInput, setSearchInput] = useState<string>("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <section className="pb-5 md:pb-6">
      <div className="mb-4 grid grid-cols-1 items-end justify-between gap-4 md:mb-2 md:grid-cols-[1fr_max-content] md:gap-6">
        <div className="max-w-lg">
          <h2 className="text-xl font-bold md:text-2xl">{heading}</h2>
          <p className="mt-2">{description}</p>
        </div>

        <div className="flex items-center justify-between md:justify-normal">
          <div>
            <Input
              id="email"
              type="email"
              value={searchInput}
              placeholder={inputPlaceholder}
              icon={inputIcon}
 className="mr-4 "
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
          <DropdownMenu onOpenChange={(isDropdownOpen) => setIsDropdownOpen(isDropdownOpen)}>
            <DropdownMenuTrigger className="flex items-center gap-2 border border-border-primary px-4">
              <p className="whitespace-nowrap">{sortMenu.title}</p>
              <RxChevronDown
 className={clsx("shrink-0 text-text-primary transition-transform duration-300", {
                  "rotate-180": isDropdownOpen,
                  "rotate-0": !isDropdownOpen,
                })}
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {sortMenu.criteria.map((criteria, index) => (
                <DropdownMenuItem key={index} className="px-2">
                  {criteria}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <Tabs defaultValue={tabs[0].value} className="flex flex-col items-start">
        <TabsList className="no-scrollbar relative flex flex-nowrap items-center gap-x-6 overflow-auto md:w-auto ">
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

export const SectionHeader4Defaults: Props = {
  heading: "Heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  sortMenu: {
    title: "Sort by",
    criteria: ["Option One", "Option Two", "Option Three", "Option Four"],
  },
  inputPlaceholder: "Search",
  inputIcon: <BiSearch className="size-6" />,
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

SectionHeader4.displayName = 'SectionHeader4';
```

