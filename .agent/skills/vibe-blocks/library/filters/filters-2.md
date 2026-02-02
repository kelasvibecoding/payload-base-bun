# Filters 2

## Metadata
- **Category**: Filters
- **Objective**: Collapsible Sidebar Filters
- **Use Case**: Dense product directories.
- **Visual Style**: Accordion Sidebar.
- **Interactivity**: Toggle / Selection.

## Description
A functional component for narrowing down collections, products, or results through search, categories, and varied input controls.

## Source Code
```tsx
import { useEffect, useState } from 'react';
import { BiFilter, BiSearch } from 'lucide-react';
import { RxChevronDown } from 'lucide-react';
import { IoCloseOutline } from 'lucide-react';
import {
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

export const Filters2 = () => {
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
        <div className="grid grid-cols-1 items-start gap-10 md:gap-12 lg:grid-cols-[max-content_1fr]">
          {isTablet ? (
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
                  <SheetTitle className="mb-6 text-5xl font-bold leading-[1.4]">Filters</SheetTitle>
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
                <SheetFooter className="sticky bottom-0 z-50 mt-6">
                  <div className="-mx-[5%] flex w-screen items-center justify-between border-t border-border-primary bg-neutral-white px-[5%] py-2 md:py-3">
                    <Button variant="link" size="link" onClick={handleClearAll}>
                      Clear all
                    </Button>
                    <Button>Apply</Button>
                  </div>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          ) : (
            <div className="sticky top-[10vh] hidden w-full lg:flex lg:flex-col">
              <div className="mb-6">
                <div className="mb-6 flex w-[18rem] items-center justify-between">
                  <h2 className="text-2xl font-bold leading-[1.4]">Filters</h2>
                  <Button variant="link" size="link" onClick={handleClearAll}>
                    Clear all
                  </Button>
                </div>
                <p className="text-sm">Showing 0 of 100</p>
              </div>
              <div className="h-[80vh] overflow-scroll pr-4">
                <div className="pb-6">
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
            </div>
          )}
          <div>
            <div className="mb-6 flex w-full items-center justify-between gap-8">
              <div className="mr-8 flex flex-1 flex-wrap items-start gap-2">
                <div className="flex items-center bg-background-secondary py-2 pl-4 pr-3">
                  <span>Tag</span>
                  <IoCloseOutline className="ml-2 cursor-pointer" size="22" />
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger className="-mr-2 flex items-center gap-2">
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
  const [selectedCheckboxes, setSelectedCheckboxes] = useState(new Set());
  const [selectedRadio, setSelectedRadio] = useState("All");
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
    setSelectedRadio("All");
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

  const handleOptionChange = (option: string) => {
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

  const clearFilter = (
    filterType:
      | "checkboxes"
      | "radio"
      | "radioFour"
      | "options"
      | "search"
      | "select"
      | "slider"
      | "range",
  ) => {
    switch (filterType) {
      case "checkboxes":
        setSelectedCheckboxes(new Set());
        break;
      case "radio":
        setSelectedRadio("All");
        break;
      case "radioFour":
        setSelectedButtonRadio("");
        break;
      case "options":
        setSelectedButtonCheckboxes(new Set());
        break;
      case "search":
        setSearchKeyword("");
        break;
      case "select":
        setSelectValue("");
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
    <div className="lg:w-[18rem]">
      <div className="border-y border-border-primary">
        <div className="flex items-center justify-between py-4 md:py-5">
          <h3 className="font-semibold md:text-md">Filter One</h3>
          <Button variant="link" size="link" onClick={() => clearFilter("checkboxes")}>
            Clear
          </Button>
        </div>
        <div className="mb-7 lg:mb-5">
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
        <div className="flex items-center justify-between py-4 md:py-5">
          <h3 className="font-semibold md:text-md">Filter Two</h3>
          <Button variant="link" size="link" onClick={() => clearFilter("radio")}>
            Clear
          </Button>
        </div>
        <div className="mb-7 lg:mb-5">
          <RadioGroup
 className="grid grid-cols-1 gap-0"
            value={selectedRadio}
            onValueChange={setSelectedRadio}
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
        <div className="flex items-center justify-between py-4 md:py-5">
          <h3 className="font-semibold md:text-md">Filter Three</h3>
          <Button variant="link" size="link" onClick={() => clearFilter("options")}>
            Clear
          </Button>
        </div>
        <div className="mb-7 lg:mb-5">
          <div className="flex flex-wrap gap-2">
            {["Option One", "Option Two", "Option Three", "Option Four", "Option Five"].map(
              (option) => (
                <div key={option} className="flex items-center">
                  <Checkbox
                    id={`filter-three-${option}`}
 className="hidden"
                    checked={selectedButtonCheckboxes.has(option)}
                    onCheckedChange={() => handleOptionChange(option)}
                  />
                  <label
                    htmlFor={`filter-three-${option}`}
 className={`inline-flex cursor-pointer items-center justify-center border border-border-primary px-4 py-2 text-base transition-colors ${
                      selectedButtonCheckboxes.has(option)
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
        <div className="flex items-center justify-between py-4 md:py-5">
          <h3 className="font-semibold md:text-md">Filter Four</h3>
          <Button variant="link" size="link" onClick={() => clearFilter("radioFour")}>
            Clear
          </Button>
        </div>
        <div className="mb-7 lg:mb-5">
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
        </div>
      </div>
      <div className="border-b border-border-primary">
        <div className="flex items-center justify-between py-4 md:py-5">
          <h3 className="font-semibold md:text-md">Filter Five</h3>
          <Button variant="link" size="link" onClick={() => clearFilter("search")}>
            Clear
          </Button>
        </div>
        <div className="mb-7 lg:mb-5">
          <Input
            placeholder="Keyword"
            icon={<BiSearch className="size-6 shrink-0 text-text-primary" />}
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
        </div>
      </div>
      <div className="border-b border-border-primary">
        <div className="flex items-center justify-between py-4 md:py-5">
          <h3 className="font-semibold md:text-md">Filter Six</h3>
          <Button variant="link" size="link" onClick={() => clearFilter("select")}>
            Clear
          </Button>
        </div>
        <div className="mb-7 lg:mb-5">
          <Select value={selectValue} onValueChange={setSelectValue}>
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
        <div className="flex items-center justify-between py-4 md:py-5">
          <h3 className="font-semibold md:text-md">Filter Seven</h3>
          <Button variant="link" size="link" onClick={() => clearFilter("slider")}>
            Clear
          </Button>
        </div>
        <div className="mb-7 lg:mb-5">
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
        <div className="flex items-center justify-between py-4 md:py-5">
          <h3 className="font-semibold md:text-md">Filter Eight</h3>
          <Button variant="link" size="link" onClick={() => clearFilter("range")}>
            Clear
          </Button>
        </div>
        <div className="mb-7 lg:mb-5">
          <div className="mt-4 w-full px-3">
            <Slider value={rangeValue} onValueChange={setRangeValue} min={0} max={100} step={1} />
            <div className="mt-3 flex justify-between text-sm">
              <span className="text-md">{rangeValue}</span>
              <span className="text-md">100</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-7 lg:mb-5">
        <h3 className="py-4 font-semibold md:py-5 md:text-md">Filter Nine</h3>
        <div className="w-full">
          <Switch id="feature-nine" checked={switchEnabled} onCheckedChange={setSwitchEnabled} />
        </div>
      </div>
    </div>
  );
};

Filters2.displayName = 'Filters2';
```

