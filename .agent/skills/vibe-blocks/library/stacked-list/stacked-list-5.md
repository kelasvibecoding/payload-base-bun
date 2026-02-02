# Stacked List 5

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
"use client";

import { useState } from 'react';
import { Input } from '@/components/ui';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui';
import { BiSearch, BiDotsHorizontalRounded } from 'lucide-react';
import { RxChevronDown } from 'lucide-react';
import clsx from 'clsx';

type ListProps = {
  url: string;
  name: string;
  timeInterval: string;
  day: number;
  month: string;
  actions: string[];
};

type SortMenu = {
  title: string;
  criteria: string[];
};

type Props = {
  heading: string;
  description: string;
  lists: ListProps[];
  inputPlaceholder?: string;
  inputIcon: React.ReactNode;
  sortMenu: SortMenu;
};

export type StackedList5Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const StackedList5 = (props: StackedList5Props) => {
  const { heading, description, sortMenu, lists, inputPlaceholder, inputIcon } = {
    ...StackedList5Defaults,
    ...props,
  };

  const [searchInput, setSearchInput] = useState<string>("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <section>
      <div className="pb-5 md:pb-6">
        <div className="grid grid-cols-1 items-end gap-4 md:grid-cols-[1fr_max-content] md:gap-6">
          <div className="max-w-lg">
            <h2 className="text-xl font-bold md:text-2xl">{heading}</h2>
            <p className="mt-2">{description}</p>
          </div>
          <div className="flex items-center justify-between md:justify-normal">
            <Input
              id="email"
              type="email"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder={inputPlaceholder}
              icon={inputIcon}
 className="mr-4"
            />
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
                  <DropdownMenuItem key={index}>{criteria}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      <div className="border-t border-border-primary">
        {lists.map((list, index) => (
          <a
            key={index}
            href={list.url}
 className="grid max-w-full grid-cols-[1fr_max-content] gap-6 border-b border-border-primary py-4"
>
            <div className="grid grid-cols-[max-content_1fr] items-center gap-3">
              <div className="flex size-14 flex-col items-center justify-center border border-border-primary">
                <div className="font-bold md:text-md">{list.day}</div>
                <div className="text-sm">{list.month}</div>
              </div>
              <div className="w-full max-w-lg">
                <div className="font-semibold">{list.name}</div>
                <div className="text-sm">{list.timeInterval}</div>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <BiDotsHorizontalRounded className="size-6" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {list.actions.map((action, index) => (
                    <DropdownMenuItem key={index}>{action}</DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export const StackedList5Defaults: Props = {
  heading: "Upcoming Events",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  sortMenu: {
    title: "Sort by",
    criteria: ["Option One", "Option Two", "Option Three"],
  },
  lists: [
    {
      url: "#",
      name: "Event name",
      timeInterval: "15:20 - 16:20",
      day: 3,
      month: "JUL",
      actions: ["Add to Calendar", "Share", "View Details"],
    },
    {
      url: "#",
      name: "Event name",
      timeInterval: "15:20 - 16:20",
      day: 3,
      month: "JUL",
      actions: ["Add to Calendar", "Share", "View Details"],
    },
    {
      url: "#",
      name: "Event name",
      timeInterval: "15:20 - 16:20",
      day: 3,
      month: "JUL",
      actions: ["Add to Calendar", "Share", "View Details"],
    },
    {
      url: "#",
      name: "Event name",
      timeInterval: "15:20 - 16:20",
      day: 3,
      month: "JUL",
      actions: ["Add to Calendar", "Share", "View Details"],
    },
  ],
  inputPlaceholder: "Search",
  inputIcon: <BiSearch className="size-6" />,
};

StackedList5.displayName = 'StackedList5';
```

