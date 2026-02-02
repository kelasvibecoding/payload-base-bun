# Filters 1

## Metadata
- **Category**: Filters
- **Objective**: Standard Sidebar Filters
- **Use Case**: E-commerce or catalog search.
- **Visual Style**: Sticky Sidebar.
- **Interactivity**: Multi-input controls.

## Description
A functional component for narrowing down collections, products, or results through search, categories, and varied input controls.

## Source Code
```tsx
"use client";

import { useState, useEffect } from 'react';
import { BiFilter, BiSearch } from 'lucide-react';
import { RxChevronDown } from 'lucide-react';
import { IoCloseOutline } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Checkbox,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Input,
  Label,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Slider,
  Switch,
  useMediaQuery,
} from '@/components/ui';

export const Filters1 = () => {
  const isTablet = useMediaQuery("(max-width: 991px)");

  const [key, setKey] = useState(0);

  const handleClearAll = () => {
    setKey((prev) => prev + 1);
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">Collection</h1>
          <p className="md:text-md">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="grid grid-cols-1 gap-10 md:gap-x-16 md:gap-y-12 lg:grid-cols-[max-content_1fr]">
          {isTablet ? (
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button className="w-full gap-2" variant="secondary">
                    <BiFilter className="size-6" />
                    <span className="underline">Filters</span>
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="bottom"
 className="h-screen w-full px-[5%] pb-0 pt-12 md:px-[5%] md:pb-0 md:pt-12"
>
                  <SheetHeader className="mb-6 space-y-0 text-left">
                    <SheetTitle className="mb-6 text-5xl font-bold leading-[1.4]">
                      Filters
                    </SheetTitle>
                    <p className="text-sm">Showing 0 of 100</p>
                    <SheetClose className="absolute right-6 top-6" />
                  </SheetHeader>
                  <div className="mb-6">
                    {["All", "Category One", "Category Two", "Category Three"].map(
                      (category, index) => (
                        <a key={index} href="#" className="block py-2 underline">
                          {category}
                        </a>
                      ),
                    )}
                  </div>
                  <div className="mt-6">
                    <FilterSections key={key} onClearAll={handleClearAll} />
                  </div>
                  <SheetFooter className="sticky bottom-0 z-50 mt-12">
                    <div className="-mx-[5%] flex h-auto w-screen items-center justify-between border-t border-border-primary bg-neutral-white px-[5%] py-2 md:py-3">
                      <Button variant="link" size="link" onClick={handleClearAll}>
                        Clear all
                      </Button>
                      <Button>Apply</Button>
                    </div>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
          ) : (
            <div className="hidden w-[18rem] lg:block">
              <div className="mb-6">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Filters</h2>
                  <Button variant="link" size="link" onClick={handleClearAll}>
                    Clear all
                  </Button>
                </div>
                <p className="text-sm">Showing 0 of 100</p>
              </div>
              <div className="mb-6">
                {["All", "Category One", "Category Two", "Category Three"].map(
                  (category, index) => (
                    <a key={index} href="#" className="block py-2 underline">
                      {category}
                    </a>
                  ),
                )}
              </div>
              <FilterSections key={key} onClearAll={handleClearAll} />
            </div>
          )}
          <div>
            <div className="mb-6 flex items-center justify-between gap-8">
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center bg-gray-100 py-2 pl-4 pr-3">
                  <span>Tag</span>
                  <IoCloseOutline className="ml-2 cursor-pointer" size="22" />
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger className="-mr-2 flex items-center gap-2">
                  Sort by
                  <RxChevronDown />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {[
                    "Most Popular",
                    "Most Recent",
                    "Name: A to Z",
                    "Name: Z to A",
                    "Price: Low to High",
                    "Price: High to Low",
                  ].map((item, index) => (
                    <DropdownMenuItem key={index}>{item}</DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="min-h-[200vh] w-full border-2 border-dashed border-black/15" />
            <div className="border border-border-primary p-[2.9rem] text-center">
              <h6 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">No results found.</h6>
              <p>There are no results with this criteria. Try changing your search.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FilterSections = ({ onClearAll }: { onClearAll: () => void }) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<Set<string>>(new Set());
  const [selectedRadio, setSelectedRadio] = useState("all");
  const [selectedButtonCheckboxes, setSelectedButtonCheckboxes] = useState<Set<string>>(
    new Set(["Option One"]),
  );
  const [selectedButtonRadio, setSelectedButtonRadio] = useState("Option One");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [sliderValue, setSliderValue] = useState(0);
  const [rangeValue, setRangeValue] = useState([0]);
  const [switchEnabled, setSwitchEnabled] = useState(false);

  useEffect(() => {
    setSelectedCheckboxes(new Set());
    setSelectedRadio("all");
    setSelectedButtonCheckboxes(new Set(["Option One"]));
    setSelectedButtonRadio("Option One");
    setSearchKeyword("");
    setSelectValue("");
    setSliderValue(0);
    setRangeValue([0]);
    setSwitchEnabled(false);
  }, [onClearAll]);

  const handleCheckboxChange = (option: string) => {
    setSelectedCheckboxes((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(option)) {
        newSet.delete(option);
      } else {
        newSet.add(option);
      }
      return newSet;
    });
  };

  const handleOptionThreeClick = (option: string) => {
    setSelectedButtonCheckboxes((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(option)) {
        newSet.delete(option);
      } else {
        newSet.add(option);
      }
      return newSet;
    });
  };

  return (
    <Accordion
      type="multiple"
 className="w-full"
      value={expandedSections}
      onValueChange={setExpandedSections}
>
      <AccordionItem value="filter-one">
        <AccordionTrigger
 className="py-4 font-semibold md:py-5 md:text-md"
          icon={
            <RxChevronDown className="size-6 shrink-0 text-text-primary transition-transform duration-300" />
          }
>
          Filter One
        </AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-1">
            {["Option One", "Option Two", "Option Three", "Option Four", "Option Five"].map(
              (option, index) => (
                <label key={index} className="flex items-center gap-3 py-2">
                  <Checkbox
                    checked={selectedCheckboxes.has(option)}
                    onCheckedChange={() => handleCheckboxChange(option)}
                  />
                  <span>{option}</span>
                </label>
              ),
            )}
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="filter-two">
        <AccordionTrigger
 className="py-4 font-semibold md:py-5 md:text-md"
          icon={
            <RxChevronDown className="size-6 shrink-0 text-text-primary transition-transform duration-300" />
          }
>
          Filter Two
        </AccordionTrigger>
        <AccordionContent>
          <RadioGroup
 className="grid grid-cols-1 gap-0"
            value={selectedRadio}
            onValueChange={setSelectedRadio}
>
            {["All", "Option One", "Option Two", "Option Three", "Option Four", "Option Five"].map(
              (option, index) => (
                <div key={index} className="flex items-center gap-3 py-2">
                  <RadioGroupItem value={option.toLowerCase().replace(" ", "-")} id={`r${index}`} />
                  <Label htmlFor={`r${index}`}>{option}</Label>
                </div>
              ),
            )}
          </RadioGroup>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="filter-three">
        <AccordionTrigger
 className="py-4 font-semibold md:py-5 md:text-md"
          icon={
            <RxChevronDown className="size-6 shrink-0 text-text-primary transition-transform duration-300" />
          }
>
          Filter Three
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-wrap gap-2">
            {["Option One", "Option Two", "Option Three", "Option Four", "Option Five"].map(
              (option, index) => (
                <Button
                  key={index}
                  variant={selectedButtonCheckboxes.has(option) ? "primary" : "secondary"}
                  size="sm"
 className="px-4"
                  onClick={() => handleOptionThreeClick(option)}
>
                  {option}
                </Button>
              ),
            )}
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="filter-four">
        <AccordionTrigger
 className="py-4 font-semibold md:py-5 md:text-md"
          icon={
            <RxChevronDown className="size-6 shrink-0 text-text-primary transition-transform duration-300" />
          }
>
          Filter Four
        </AccordionTrigger>
        <AccordionContent>
          <RadioGroup
 className="flex flex-wrap gap-2"
            value={selectedButtonRadio}
            onValueChange={setSelectedButtonRadio}
>
            {["Option One", "Option Two", "Option Three", "Option Four", "Option Five"].map(
              (option) => (
                <div key={option} className="flex items-center">
                  <RadioGroupItem value={option} id={`filter-four-${option}`} className="hidden" />
                  <label
                    htmlFor={`filter-four-${option}`}
 className={`inline-flex cursor-pointer items-center justify-center border border-border-primary px-4 py-2 text-base transition-colors ${
                      selectedButtonRadio === option
                        ? "bg-background-alternative text-text-alternative"
                        : "bg-background-primary"
                    }`}
>
                    {option}
                  </label>
                </div>
              ),
            )}
          </RadioGroup>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="filter-five">
        <AccordionTrigger
 className="py-4 font-semibold md:py-5 md:text-md"
          icon={
            <RxChevronDown className="size-6 shrink-0 text-text-primary transition-transform duration-300" />
          }
>
          Filter Five
        </AccordionTrigger>
        <AccordionContent>
          <Input
            placeholder="Keyword"
            icon={<BiSearch className="size-6 shrink-0 text-text-primary" />}
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="filter-six">
        <AccordionTrigger
 className="py-4 font-semibold md:py-5 md:text-md"
          icon={
            <RxChevronDown className="size-6 shrink-0 text-text-primary transition-transform duration-300" />
          }
>
          Filter Six
        </AccordionTrigger>
        <AccordionContent>
          <Select value={selectValue} onValueChange={setSelectValue}>
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="select">Select</SelectItem>
              <SelectItem value="option-one">Option One</SelectItem>
              <SelectItem value="option-two">Option Two</SelectItem>
              <SelectItem value="option-three">Option Three</SelectItem>
            </SelectContent>
          </Select>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="filter-seven">
        <AccordionTrigger
 className="py-4 font-semibold md:py-5 md:text-md"
          icon={
            <RxChevronDown className="size-6 shrink-0 text-text-primary transition-transform duration-300" />
          }
>
          Filter Seven
        </AccordionTrigger>
        <AccordionContent>
          <div className="px-3 py-4">
            <Slider
              value={[sliderValue]}
              onValueChange={(value) => setSliderValue(value[0])}
              min={0}
              step={1}
            />
            <div className="mt-3 flex justify-between text-sm">
              <span className="text-md">{sliderValue}</span>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="filter-eight">
        <AccordionTrigger
 className="py-4 font-semibold md:py-5 md:text-md"
          icon={
            <RxChevronDown className="size-6 shrink-0 text-text-primary transition-transform duration-300" />
          }
>
          Filter Eight
        </AccordionTrigger>
        <AccordionContent>
          <div className="px-3 pt-4">
            <Slider value={rangeValue} onValueChange={setRangeValue} min={0} max={100} step={1} />
            <div className="mt-3 flex justify-between text-sm">
              <span className="text-md">{rangeValue}</span>
              <span className="text-md">100</span>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="filter-nine">
        <AccordionTrigger
 className="py-4 font-semibold md:py-5 md:text-md"
          icon={
            <RxChevronDown className="size-6 shrink-0 text-text-primary transition-transform duration-300" />
          }
>
          Filter Nine
        </AccordionTrigger>
        <AccordionContent>
          <Switch id="feature-a" checked={switchEnabled} onCheckedChange={setSwitchEnabled} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

Filters1.displayName = 'Filters1';
```

