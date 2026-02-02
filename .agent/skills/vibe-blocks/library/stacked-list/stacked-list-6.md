# Stacked List 6

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

type ImageProps = {
  src: string;
  alt?: string;
};

type ListProps = {
  url: string;
  name: string;
  email: string;
  avatar: ImageProps;
  jobTittle: string;
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

export type StackedList6Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const StackedList6 = (props: StackedList6Props) => {
  const { heading, description, sortMenu, lists, inputPlaceholder, inputIcon } = {
    ...StackedList6Defaults,
    ...props,
  };

  const [searchInput, setSearchInput] = useState<string>("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <section className="border-x border-t border-border-primary">
      <div className="grid grid-cols-1 items-end gap-4 p-6 md:grid-cols-[1fr_max-content] md:gap-6">
        <div className="max-w-lg">
          <h2 className="text-xl font-bold md:text-2xl">{heading}</h2>
          <p className="mt-1">{description}</p>
        </div>
        <div className="flex items-center justify-between md:justify-normal">
          <Input
            id="email"
            type="email"
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
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
      <div className="border-t border-border-primary">
        {lists.map((list, index) => (
          <a
            key={index}
            href={list.url}
 className="grid max-w-full grid-cols-1 gap-6 border-b border-border-primary px-6 py-4 md:grid-cols-[1fr_max-content]"
>
            <div className="grid grid-cols-[max-content_1fr] items-center gap-3">
              <img
                src={list.avatar.src}
                alt={list.avatar.alt}
 className="h-12 w-12 rounded-full object-cover"
              />
              <div className="w-full max-w-lg">
                <div className="font-semibold">{list.name}</div>
                <a className="text-sm underline">{list.email}</a>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="">{list.jobTittle}</div>
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

export const StackedList6Defaults: Props = {
  heading: "New Users",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  sortMenu: {
    title: "Sort by",
    criteria: ["Option One", "Option Two", "Option Three"],
  },
  lists: [
    {
      url: "#",
      name: "Full name",
      email: "hello@vibecoding.io",
      avatar: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg",
        alt: "vibecoding avatar 1",
      },
      jobTittle: "Job title",
      actions: ["Message", "Add Connection", "View Profile"],
    },
    {
      url: "#",
      name: "Full name",
      email: "hello@vibecoding.io",
      avatar: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg",
        alt: "vibecoding avatar 2",
      },
      jobTittle: "Job title",
      actions: ["Message", "Add Connection", "View Profile"],
    },
    {
      url: "#",
      name: "Full name",
      email: "hello@vibecoding.io",
      avatar: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg",
        alt: "vibecoding avatar 3",
      },
      jobTittle: "Job title",
      actions: ["Message", "Add Connection", "View Profile"],
    },
    {
      url: "#",
      name: "Full name",
      email: "hello@vibecoding.io",
      avatar: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg",
        alt: "vibecoding avatar 4",
      },
      jobTittle: "Job title",
      actions: ["Message", "Add Connection", "View Profile"],
    },
  ],
  inputPlaceholder: "Search",
  inputIcon: <BiSearch className="size-6" />,
};

StackedList6.displayName = 'StackedList6';
```

