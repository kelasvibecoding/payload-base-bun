# Section Header 2

## Metadata
- **Category**: Section Header
- **Objective**: Condensed Unit Header
- **Use Case**: Small widget containers.
- **Visual Style**: Left Title / Right Row.
- **Interactivity**: Action links.

## Description
A contextual header component for individual sections within a page, providing descriptions and localized action controls.

## Source Code
```tsx
import { Input } from '@/components/ui';
import {
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

type Props = {
  heading: string;
  description: string;
  inputPlaceholder?: string;
  inputIcon: React.ReactNode;
  sortMenu: SortMenu;
};

export type SectionHeader2Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const SectionHeader2 = (props: SectionHeader2Props) => {
  const { heading, description, sortMenu, inputPlaceholder, inputIcon } = {
    ...SectionHeader2Defaults,
    ...props,
  };

  const [searchInput, setSearchInput] = useState<string>("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <section className="pb-5 md:pb-6">
      <div className="grid grid-cols-1 items-end justify-between gap-4 md:grid-cols-[1fr_max-content] md:gap-6">
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
                <DropdownMenuItem key={index}>{criteria}</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </section>
  );
};

export const SectionHeader2Defaults: Props = {
  heading: "Heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  sortMenu: {
    title: "Sort by",
    criteria: ["Option One", "Option Two", "Option Three", "Option Four"],
  },
  inputPlaceholder: "Search",
  inputIcon: <BiSearch className="size-6" />,
};

SectionHeader2.displayName = 'SectionHeader2';
```

