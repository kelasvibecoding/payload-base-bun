# Filters 5

## Metadata
- **Category**: Filters
- **Objective**: Minimalist Toggle Filters
- **Use Case**: Portfolio or blog sorting.
- **Visual Style**: Floating Pills.
- **Interactivity**: State toggle.

## Description
A functional component for narrowing down collections, products, or results through search, categories, and varied input controls.

## Source Code
```tsx
import React, { useState } from 'react';
import { BiFilter, BiSearch } from 'lucide-react';
import { RxChevronDown } from 'lucide-react';
import { IoCloseOutline } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Button,
  Checkbox,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Input,
  Label,
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  Tabs,
  TabsList,
  TabsTrigger,
} from '@/components/ui';

type FilterValues = {
  filterOne: string;
  filterTwo: string[];
  filterThree: string[];
  filterFour: string[];
};

const tabs = [
  { value: "View all", trigger: "View all" },
  { value: "Category one", trigger: "Category one" },
  { value: "Category two", trigger: "Category two" },
  { value: "Category three", trigger: "Category three" },
  { value: "Category four", trigger: "Category four" },
];

const options = [
  { value: "option-1", label: "Option one" },
  { value: "option-2", label: "Option two" },
  { value: "option-3", label: "Option three" },
  { value: "option-4", label: "Option four" },
  { value: "option-5", label: "Option five" },
];

const containerVariants = {
  initial: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
  animate: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.2, ease: "easeInOut", opacity: { duration: 0.1 } },
  },
};

export const Filters5 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState<FilterValues>({
    filterOne: "",
    filterTwo: ["option-1"],
    filterThree: ["option-1"],
    filterFour: ["option-1"],
  });

  const handleClear = (filter: keyof FilterValues) => {
    setSelectedValues((prev) => ({
      ...prev,
      [filter]: Array.isArray(prev[filter]) ? [] : "",
    }));
  };

  const handleCheckboxChange = (filter: keyof Omit<FilterValues, "filterOne">, value: string) => {
    setSelectedValues((prev) => {
      const currentItems = prev[filter];
      return {
        ...prev,
        [filter]: currentItems.includes(value)
          ? currentItems.filter((item) => item !== value)
          : [...currentItems, value],
      };
    });
  };

  const getSelectedLabels = (filter: keyof FilterValues) => {
    if (!selectedValues[filter].length) return "Select options";
    if (selectedValues[filter].length === 1) {
      return options.find((opt) => opt.value === selectedValues[filter][0])?.label;
    }
    return `${selectedValues[filter].length} selected`;
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 w-full text-center md:mb-18 lg:mb-20">
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">Collection</h1>
          <p className="md:text-md">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="mb-8 grid auto-cols-fr grid-cols-2 grid-rows-[auto_auto] items-center justify-between gap-x-6 gap-y-8 lg:grid-cols-[1fr_max-content_1fr] lg:gap-y-0">
          <Button
 className="w-fit gap-3 self-start"
            variant="secondary"
            onClick={() => setIsOpen(!isOpen)}
>
            <BiFilter className="size-6" />
            <span className="underline">Filters</span>
          </Button>
          <Tabs
            defaultValue={tabs[0].value}
 className="no-scrollbar flex w-full flex-col items-center justify-center overflow-scroll [grid-area:2/1/3/3] md:overflow-auto lg:[grid-area:auto/auto/auto/auto]"
>
            <TabsList className="flex w-screen items-center justify-start pl-[5vw] md:w-full md:justify-center md:overflow-hidden md:pl-0">
              {tabs.map((tab, index) => (
                <TabsTrigger
                  key={index}
                  value={tab.value}
 className="px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black"
>
                  {tab.trigger}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          <DropdownMenu>
            <DropdownMenuTrigger className="-mr-2 flex items-center gap-2 justify-self-end">
              <p className="whitespace-nowrap">Sort by</p>
              <RxChevronDown className="shrink-0 text-text-primary transition-transform duration-300" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {[
                "Most Popular",
                "Most Recent",
                "Name: A to Z",
                "Name: Z to A",
                "Price: Low to High",
                "Price: High to Low",
              ].map((option) => (
                <DropdownMenuItem key={option}>{option}</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <AnimatePresence initial={false} mode="wait">
          {isOpen && (
            <motion.div
              variants={containerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
 className="overflow-hidden"
>
              <div className="mb-8 grid grid-cols-1 gap-x-8 gap-y-4 lg:grid-cols-4">
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span>Filter One</span>
                    <Button
                      variant="link"
                      size="link"
                      onClick={() => handleClear("filterOne")}
 className="text-sm"
>
                      Clear
                    </Button>
                  </div>
                  <Input
                    placeholder="Keyword"
                    icon={<BiSearch className="size-6" />}
                    value={selectedValues.filterOne}
                    onChange={(e) =>
                      setSelectedValues((prev) => ({
                        ...prev,
                        filterOne: e.target.value,
                      }))
                    }
                  />
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span>Filter Two</span>
                    <Button
                      variant="link"
                      size="link"
                      onClick={() => handleClear("filterTwo")}
 className="text-sm"
>
                      Clear
                    </Button>
                  </div>
                  <Select value="" onValueChange={() => {}}>
                    <SelectTrigger>
                      <SelectValue placeholder={getSelectedLabels("filterTwo")} />
                    </SelectTrigger>
                    <SelectContent>
                      {options.map((option) => (
                        <div key={option.value} className="flex items-center space-x-2 p-2">
                          <Checkbox
                            id={`filter-two-${option.value}`}
                            checked={selectedValues.filterTwo.includes(option.value)}
                            onCheckedChange={() => handleCheckboxChange("filterTwo", option.value)}
                          />
                          <Label
 className="flex-grow cursor-pointer"
                            htmlFor={`filter-two-${option.value}`}
                            onClick={(e: React.MouseEvent<HTMLLabelElement>) => {
                              e.preventDefault();
                              handleCheckboxChange("filterTwo", option.value);
                            }}
>
                            {option.label}
                          </Label>
                        </div>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span>Filter Three</span>
                    <Button
                      variant="link"
                      size="link"
                      onClick={() => handleClear("filterThree")}
 className="text-sm"
>
                      Clear
                    </Button>
                  </div>
                  <Select value="" onValueChange={() => {}}>
                    <SelectTrigger>
                      <SelectValue placeholder={getSelectedLabels("filterThree")} />
                    </SelectTrigger>
                    <SelectContent>
                      {options.map((option) => (
                        <div key={option.value} className="flex items-center space-x-2 px-2 py-1.5">
                          <Checkbox
                            id={`filter-three-${option.value}`}
                            checked={selectedValues.filterThree.includes(option.value)}
                            onCheckedChange={() =>
                              handleCheckboxChange("filterThree", option.value)
                            }
                          />
                          <Label
 className="flex-grow cursor-pointer"
                            htmlFor={`filter-three-${option.value}`}
                            onClick={(e: React.MouseEvent<HTMLLabelElement>) => {
                              e.preventDefault();
                              handleCheckboxChange("filterThree", option.value);
                            }}
>
                            {option.label}
                          </Label>
                        </div>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span>Filter Four</span>
                    <Button
                      variant="link"
                      size="link"
                      onClick={() => handleClear("filterFour")}
 className="text-sm"
>
                      Clear
                    </Button>
                  </div>
                  <Select value="" onValueChange={() => {}}>
                    <SelectTrigger>
                      <SelectValue placeholder={getSelectedLabels("filterFour")} />
                    </SelectTrigger>
                    <SelectContent>
                      {options.map((option) => (
                        <div key={option.value} className="flex items-center space-x-2 px-2 py-1.5">
                          <Checkbox
                            id={`filter-four-${option.value}`}
                            checked={selectedValues.filterFour.includes(option.value)}
                            onCheckedChange={() => handleCheckboxChange("filterFour", option.value)}
                          />
                          <Label
 className="flex-grow cursor-pointer"
                            htmlFor={`filter-four-${option.value}`}
                            onClick={(e: React.MouseEvent<HTMLLabelElement>) => {
                              e.preventDefault();
                              handleCheckboxChange("filterFour", option.value);
                            }}
>
                            {option.label}
                          </Label>
                        </div>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div>
          <div className="mb-8 flex w-full items-center justify-between gap-8">
            <div className="flex items-center bg-background-secondary py-2 pl-4 pr-3">
              <span>Tag</span>
              <IoCloseOutline className="ml-2 cursor-pointer" size="22" />
            </div>
            <span className="text-sm">Showing 0 of 100</span>
          </div>
          <div className="min-h-[200vh] w-full border-2 border-dashed border-black/15" />
          <div className="border border-border-primary p-[2.9rem] text-center">
            <h6 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">No results found.</h6>
            <p>There are no results with this criteria. Try changing your search.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

Filters5.displayName = 'Filters5';
```

