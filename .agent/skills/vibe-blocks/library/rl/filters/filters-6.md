# Filters 6

## Metadata
- **Category**: Filters
- **Objective**: Rich Visual Filters
- **Use Case**: Artistic or brand directories.
- **Visual Style**: Grid with icons/images.
- **Interactivity**: Visual selection.

## Description
A functional component for narrowing down collections, products, or results through search, categories, and varied input controls.

## Source Code
```tsx
import React, { useState } from 'react';
import { BiFilter, BiSearch } from 'lucide-react';
import { RxChevronDown } from 'lucide-react';
import { IoCloseOutline } from 'lucide-react';
import {
  Button,
  Checkbox,
  Input,
  Label,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
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

export const Filters6 = () => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(max-width: 991px)");

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">Collection</h1>
          <p className="md:text-md">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="relative mb-3.5 flex flex-col flex-wrap items-end justify-between gap-6 md:mb-6 md:flex-row md:items-center lg:flex-nowrap">
          <div className="flex w-full flex-1 flex-col gap-4 sm:flex-row sm:gap-6 md:w-auto">
            <div className="relative flex flex-1 items-center lg:max-w-xs">
              <Input
                placeholder="Search"
                icon={<BiSearch className="size-6 shrink-0 text-text-primary" />}
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
 className="w-full"
              />
            </div>
            {isMobile ? (
              <Sheet>
                <SheetTrigger asChild>
                  <Button className="gap-3 py-2" variant="secondary">
                    <BiFilter className="size-6" />
                    <span className="underline">Filters</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="bottom" className="h-screen w-full p-0 md:p-0">
                  <div className="overflow-scroll px-[5%] pt-2">
                    <SheetHeader className="flex flex-row items-end justify-between text-left">
                      <SheetTitle className="text-2xl font-bold">Filters</SheetTitle>
                      <SheetClose className="static" />
                    </SheetHeader>
                    <div className="-mx-[5%] border-b border-border-primary pt-4" />
                    <div className="mt-6">
                      <FilterSections />
                    </div>
                  </div>
                  <SheetFooter className="sticky bottom-0 border-t border-border-primary bg-neutral-white px-[5%] py-2 md:py-3">
                    <div className="flex w-full justify-between gap-4">
                      <Button variant="link" size="link">
                        Clear all
                      </Button>
                      <Button>Apply</Button>
                    </div>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center justify-center gap-3 border border-border-primary px-6 py-2">
                  <BiFilter className="size-6" />
                  <span className="underline">Filters</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent
 className="max-h-[50vh] w-[25rem] overflow-y-auto px-6 pb-0 pt-6"
                  align={isTablet ? "end" : "start"}
>
                  <h3 className="mb-2 text-2xl font-bold">Filters</h3>
                  <FilterSections />
                  <div className="sticky bottom-0 -mx-6 border-t border-border-primary bg-neutral-white px-6 py-3">
                    <div className="flex w-full justify-between gap-4">
                      <Button variant="link" size="link">
                        Clear all
                      </Button>
                      <Button size="sm">Apply</Button>
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger className="-mr-2 flex items-center gap-2">
              <span>Sort by</span>
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
        <div>
          <div className="mb-8 flex w-full items-center justify-between gap-8">
            <div className="flex items-center bg-background-secondary py-2 pl-4 pr-3">
              <span>Tag</span>
              <IoCloseOutline className="ml-2 cursor-pointer" size="22" />
            </div>
            <span className="self-end text-sm">Showing 0 of 100</span>
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

const FilterSections = () => {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState(new Set());
  const [selectedRadioTwo, setSelectedRadioTwo] = useState("All");
  const [selectedOptions, setSelectedOptions] = useState(new Set(["Option One"]));
  const [selectedRadioFour, setSelectedRadioFour] = useState("Option One");
  const [selectedValue, setSelectedValue] = useState("");
  const [sliderValue, setSliderValue] = useState(0);
  const [rangeValue, setRangeValue] = useState([0]);
  const [switchEnabled, setSwitchEnabled] = useState(false);

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

  const handleOptionChange = (option: string) => {
    setSelectedOptions((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(option)) {
        newSet.delete(option);
      } else {
        newSet.add(option);
      }
      return newSet;
    });
  };

  const clearFilter = (
    filterType: "checkboxes" | "radio" | "radioFour" | "options" | "select" | "slider" | "range",
  ) => {
    switch (filterType) {
      case "checkboxes":
        setSelectedCheckboxes(new Set());
        break;
      case "radio":
        setSelectedRadioTwo("All");
        break;
      case "radioFour":
        setSelectedRadioFour("");
        break;
      case "options":
        setSelectedOptions(new Set());
        break;
      case "select":
        setSelectedValue("");
        break;
      case "slider":
        setSliderValue(0);
        break;
      case "range":
        setRangeValue([0]);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="border-b border-border-primary">
        <div className="mb-7 lg:mb-5">
          <div className="flex items-center justify-between py-4">
            <h3 className="font-semibold md:text-md">Filter One</h3>
            <Button variant="link" size="link" onClick={() => clearFilter("checkboxes")}>
              Clear
            </Button>
          </div>
          <div className="grid grid-cols-1">
            {["Option One", "Option Two", "Option Three", "Option Four", "Option Five"].map(
              (option) => (
                <label key={option} className="flex items-center gap-x-3 py-2">
                  <Checkbox
                    checked={selectedCheckboxes.has(option)}
                    onCheckedChange={() => handleCheckboxChange(option)}
                  />
                  <span>{option}</span>
                </label>
              ),
            )}
          </div>
        </div>
      </div>
      <div className="border-b border-border-primary">
        <div className="mb-7 lg:mb-5">
          <div className="flex items-center justify-between py-4">
            <h3 className="font-semibold md:text-md">Filter Two</h3>
            <Button variant="link" size="link" onClick={() => clearFilter("radio")}>
              Clear
            </Button>
          </div>
          <RadioGroup
 className="grid grid-cols-1 gap-0"
            value={selectedRadioTwo}
            onValueChange={setSelectedRadioTwo}
>
            {["All", "Option One", "Option Two", "Option Three", "Option Four", "Option Five"].map(
              (option) => (
                <div key={option} className="flex items-center gap-x-3 py-2">
                  <RadioGroupItem value={option} id={option} shape="check" />
                  <Label htmlFor={option}>{option}</Label>
                </div>
              ),
            )}
          </RadioGroup>
        </div>
      </div>
      <div className="border-b border-border-primary">
        <div className="mb-7 lg:mb-5">
          <div className="flex items-center justify-between py-4">
            <h3 className="font-semibold md:text-md">Filter Three</h3>
            <Button variant="link" size="link" onClick={() => clearFilter("options")}>
              Clear
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {["Option One", "Option Two", "Option Three", "Option Four", "Option Five"].map(
              (option) => (
                <div key={option} className="flex items-center">
                  <Checkbox
                    id={`filter-three-${option}`}
 className="hidden"
                    checked={selectedOptions.has(option)}
                    onCheckedChange={() => handleOptionChange(option)}
                  />
                  <label
                    htmlFor={`filter-three-${option}`}
 className={`inline-flex cursor-pointer items-center justify-center border border-border-primary px-4 py-2 text-base transition-colors ${
                      selectedOptions.has(option)
                        ? "bg-background-alternative text-text-alternative"
                        : "bg-background-primary"
                    }`}
>
                    {option}
                  </label>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
      <div className="border-b border-border-primary">
        <div className="mb-7 lg:mb-5">
          <div className="flex items-center justify-between py-4">
            <h3 className="font-semibold md:text-md">Filter Four</h3>
            <Button variant="link" size="link" onClick={() => clearFilter("radioFour")}>
              Clear
            </Button>
          </div>
          <RadioGroup
 className="flex flex-wrap gap-2"
            value={selectedRadioFour}
            onValueChange={setSelectedRadioFour}
>
            {["Option One", "Option Two", "Option Three", "Option Four", "Option Five"].map(
              (option) => (
                <div key={option} className="flex items-center">
                  <RadioGroupItem value={option} id={`filter-four-${option}`} className="hidden" />
                  <label
                    htmlFor={`filter-four-${option}`}
 className={`inline-flex cursor-pointer items-center justify-center border border-border-primary px-4 py-2 text-base transition-colors ${
                      selectedRadioFour === option
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
        </div>
      </div>
      <div className="border-b border-border-primary">
        <div className="mb-7 lg:mb-5">
          <div className="flex items-center justify-between py-4">
            <h3 className="font-semibold md:text-md">Filter Six</h3>
            <Button variant="link" size="link" onClick={() => clearFilter("select")}>
              Clear
            </Button>
          </div>
          <Select value={selectedValue} onValueChange={setSelectedValue}>
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              {["Option One", "Option Two", "Option Three"].map((option) => (
                <SelectItem key={option} value={option.toLowerCase().replace(" ", "-")}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="border-b border-border-primary">
        <div className="mb-7 lg:mb-5">
          <div className="flex items-center justify-between py-4">
            <h3 className="font-semibold md:text-md">Filter Seven</h3>
            <Button variant="link" size="link" onClick={() => clearFilter("slider")}>
              Clear
            </Button>
          </div>
          <div className="mt-4 w-full px-3">
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
        </div>
      </div>
      <div className="border-b border-border-primary">
        <div className="mb-7 lg:mb-5">
          <div className="flex items-center justify-between py-4">
            <h3 className="font-semibold md:text-md">Filter Eight</h3>
            <Button variant="link" size="link" onClick={() => clearFilter("range")}>
              Clear
            </Button>
          </div>
          <div className="mt-4 w-full px-3">
            <Slider value={rangeValue} onValueChange={setRangeValue} min={0} max={100} step={1} />
            <div className="mt-3 flex justify-between text-sm">
              <span className="text-md">0</span>
              <span className="text-md">100</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-7 lg:mb-5">
        <h3 className="py-4 font-semibold md:text-md">Filter Nine</h3>
        <div className="w-full">
          <Switch id="feature-nine" checked={switchEnabled} onCheckedChange={setSwitchEnabled} />
        </div>
      </div>
    </div>
  );
};

Filters6.displayName = 'Filters6';
```

