# Topbar 3

## Metadata
- **Category**: Topbar
- **Objective**: General Topbar
- **Use Case**: Standard Topbar functionality.
- **Visual Style**: Clean layout.
- **Interactivity**: Primary actions.

## Description
A utility-focused navigation header providing secondary actions such as search, notifications, and profile management.

## Source Code
```tsx
"use client";

import { useEffect, useRef, useState } from 'react';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Input,
} from '@/components/ui';
import { AnimatePresence, motion } from 'framer-motion';
import { RxChevronDown, ChevronRight, X } from 'lucide-react';
import { BiBell, BiSearch } from 'lucide-react';

export const Topbar3 = () => {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState<boolean>(false);
  const searchBarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!isSearchBarOpen) {
      return;
    }
    const handleClickOutside = (event: PointerEvent) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target as Node)) {
        setIsSearchBarOpen(false);
      }
    };
    document.addEventListener("pointerdown", handleClickOutside);
    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, [isSearchBarOpen]);

  return (
    <section
      
 className="relative flex min-h-16 w-full flex-wrap items-center justify-end border-b border-border-primary bg-background-primary px-6 md:min-h-18 lg:grid lg:grid-cols-[1fr_max-content] lg:justify-between lg:gap-4 lg:px-8"
>
      <div className="hidden w-full max-w-md lg:block">
        <Input
 className="w-full pl-12"
          placeholder="Search"
          icon={<BiSearch className="size-6" />}
        />
      </div>
      <div className="flex shrink-0 items-center justify-end gap-2 md:gap-4">
        <button
          onPointerDown={(e) => e.stopPropagation()}
          onClick={() => {
            setIsSearchBarOpen(!isSearchBarOpen);
          }}
 className="p-2 lg:hidden"
>
          <BiSearch className="size-6" />
        </button>
        <AnimatePresence>
          {isSearchBarOpen && (
            <motion.div
              ref={searchBarRef}
              variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 },
              }}
              initial="hidden"
              exit="hidden"
              animate={isSearchBarOpen ? "visible" : "hidden"}
 className="absolute bottom-0 left-0 right-0 top-16 mt-px flex h-16 max-w-md items-center justify-center border-b border-border-primary bg-white px-6 lg:hidden"
>
              <Input
 className="h-fit w-full"
                placeholder="Search"
                icon={<BiSearch className="size-6" />}
              />
              <button onClick={() => setIsSearchBarOpen(!isSearchBarOpen)}>
                <X className="ml-4 size-6" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
        <DropdownMenu>
          <DropdownMenuTrigger className="relative">
            <div className="absolute bottom-auto left-auto right-2 top-2 size-2 rounded-full bg-black outline outline-[3px] outline-offset-0 outline-white" />
            <BiBell className="size-6" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="max-w-[19rem] px-0" align="end" sideOffset={0}>
            <div className="flex flex-col">
              <div className="flex items-center justify-between px-4 py-2">
                <DropdownMenuLabel className="p-0">Notifications</DropdownMenuLabel>
                <a href="#">Mark as read</a>
              </div>
              <DropdownMenuSeparator />
              <div className="h-full max-h-[14rem] overflow-auto px-2 py-1">
                <DropdownMenuItem className="mt-2 grid grid-cols-[max-content_1fr] gap-2 px-2 py-1">
                  <div className="flex size-full flex-col items-start justify-start">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/vibecoding-icon.svg"
                      alt="Avatar"
 className="size-6"
                    />
                  </div>
                  <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="mt-2 text-sm">11 Jan 2022</p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="mt-2 grid grid-cols-[max-content_1fr] gap-2 px-2 py-1">
                  <div className="flex size-full flex-col items-start justify-start">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/vibecoding-icon.svg"
                      alt="Avatar"
 className="size-6"
                    />
                  </div>
                  <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="mt-2 text-sm">11 Jan 2022</p>
                  </div>
                </DropdownMenuItem>
              </div>
            </div>
            <DropdownMenuSeparator />
            <div className="flex w-full items-end justify-end px-4 py-2">
              <Button variant="link" size="link" iconRight={<ChevronRight />} asChild>
                <a href="#">View All</a>
              </Button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center p-0">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              alt="Avatar"
 className="size-10 rounded-full object-cover"
            />
            <div className="ml-3 hidden md:flex md:items-center md:gap-2">
              <p>Name Surname</p>
              <RxChevronDown className="shrink-0 text-text-primary transition-transform duration-300" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            sideOffset={0}
 className="mt-1.5 min-w-32 px-0 py-2 md:min-w-48"
>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <a href="#">My Profile</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#">Profile Settings</a>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="mx-4" />
              <DropdownMenuItem>
                <a href="#">Log Out</a>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </section>
  );
};

Topbar3.displayName = 'Topbar3';
```

