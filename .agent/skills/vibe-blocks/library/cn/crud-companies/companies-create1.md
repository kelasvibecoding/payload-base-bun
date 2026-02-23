# Companies Create 1

## Metadata
- **Category**: CRUD
- **Objective**: Multi-section company creation form with combobox and tags inputs.
- **Use Case**: Company profile creation with organized sections and advanced form controls.
- **Visual Style**: Card-based form layout with sectioned organization.
- **Interactivity**: Form validation, combobox selection, tags management, and section navigation.

## Description
A comprehensive company creation form featuring multiple organized sections (Basic Information, Location, Social Media & Links, Company Metrics, Additional Information) with advanced form controls including combobox dropdowns and multi-select tags.

## Features
- Multi-section form organization with icons
- Advanced combobox dropdown with search functionality
- Multi-select tags component with search and filtering
- Form validation with required field indicators
- Responsive grid layout for form fields
- Organized field grouping by category
- Professional form styling with proper spacing
- Cancel and Continue action buttons

## Source Code
```tsx
"use client";

import {
  Building2,
  Check,
  ChevronsUpDown,
  Globe,
  RefreshCcw,
  Share2,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import {
  Tags,
  TagsContent,
  TagsEmpty,
  TagsGroup,
  TagsInput,
  TagsItem,
  TagsList,
  TagsTrigger,
  TagsValue,
} from "@/components/kibo-ui/tags";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface ComboboxOption {
  label: string;
  value: string;
}

interface FormComboboxProps {
  value: string;
  onChange: (value: string) => void;
  options: ComboboxOption[];
  name?: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
  required?: boolean;
}

interface FormTagsProps {
  value: string[];
  onChange: (value: string[]) => void;
  options: ComboboxOption[];
  name?: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
  required?: boolean;
}

const FormCombobox = ({
  value,
  onChange,
  options,
  name,
  searchPlaceholder = "Search...",
  emptyMessage = "No option found.",
  required = false,
}: FormComboboxProps) => {
  const [open, setOpen] = useState(false);

  const selectedOption = options.find((option) => option.value === value);
  const displayValue = selectedOption ? selectedOption.label : "";

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="w-full outline-none">
        <div className="relative flex w-full items-center">
          <Input
            type="text"
            name={name}
            value={displayValue}
            required={required}
            onChange={() => {}}
            onClick={() => setOpen(true)}
            className={cn(
              "cursor-pointer bg-background pr-6",
              !value && "text-muted-foreground",
            )}
          />
          <div className="pointer-events-auto absolute right-2 flex h-full items-center">
            <ChevronsUpDown className="size-4 shrink-0 opacity-50" />
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0" align="start">
        <Command>
          <CommandInput placeholder={searchPlaceholder} />
          <CommandList>
            <CommandEmpty>{emptyMessage}</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    onChange(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "size-4",
                      value === option.value ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

const FormTags = ({
  value = [],
  onChange,
  options,
  name,
  searchPlaceholder = "Search tags...",
  emptyMessage = "No tags found.",
  required = false,
}: FormTagsProps) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (selectedValue: string) => {
    const newValue = value.includes(selectedValue)
      ? value.filter((v) => v !== selectedValue)
      : [...value, selectedValue];
    onChange(newValue);
  };

  const handleRemove = (tagToRemove: string) => {
    onChange(value.filter((v) => v !== tagToRemove));
  };

  return (
    <Tags open={open} onOpenChange={setOpen}>
      <TagsTrigger>
        {value.length > 0
          ? value.map((tagValue) => {
              const option = options.find((opt) => opt.value === tagValue);
              return (
                <TagsValue
                  key={tagValue}
                  onRemove={() => handleRemove(tagValue)}
                >
                  {option?.label || tagValue}
                </TagsValue>
              );
            })
          : null}
      </TagsTrigger>
      <TagsContent>
        <TagsInput placeholder={searchPlaceholder} />
        <TagsList>
          <TagsEmpty>{emptyMessage}</TagsEmpty>
          <TagsGroup>
            {options.map((option) => (
              <TagsItem
                key={option.value}
                value={option.value}
                onSelect={() => handleSelect(option.value)}
              >
                <Check
                  className={cn(
                    "mr-2 size-4",
                    value.includes(option.value) ? "opacity-100" : "opacity-0",
                  )}
                />
                {option.label}
              </TagsItem>
            ))}
          </TagsGroup>
        </TagsList>
      </TagsContent>
      {required && value.length === 0 && (
        <input
          type="hidden"
          name={name}
          value=""
          required
          aria-invalid="true"
        />
      )}
      {value.map((tagValue) => (
        <input key={tagValue} type="hidden" name={name} value={tagValue} />
      ))}
    </Tags>
  );
};

interface CompaniesCreate1Props {
  title?: string;
  className?: string;
}

const CompaniesCreate1 = ({
  title = "Add Company Profile",
  className,
}: CompaniesCreate1Props) => {
  const [formData, setFormData] = useState<Record<string, string | string[]>>(
    {},
  );

  const FIELD_SECTIONS = [
    {
      title: "Basic Information",
      icon: Building2,
      fields: [
        {
          name: "name",
          label: "Company name",
          required: true,
        },
        {
          name: "description",
          label: "Description",
        },
        {
          name: "team",
          label: "Team",
          type: "combobox",
          searchPlaceholder: "Search members",
          emptyMessage: "No Team Member Found.",
          required: true,
          options: [
            {
              label: "Alex",
              value: "alex",
            },
            {
              label: "John",
              value: "john",
            },
            {
              label: "Jane",
              value: "jane",
            },
          ],
        },
        {
          name: "categories",
          label: "Categories",
          type: "tags",
          searchPlaceholder: "Search categories...",
          emptyMessage: "No categories found.",
          options: [
            {
              label: "SaaS",
              value: "saas",
            },
            {
              label: "E-commerce",
              value: "ecommerce",
            },
            {
              label: "Fintech",
              value: "fintech",
            },
            {
              label: "Healthcare",
              value: "healthcare",
            },
            {
              label: "Education",
              value: "education",
            },
            {
              label: "Enterprise",
              value: "enterprise",
            },
            {
              label: "B2B",
              value: "b2b",
            },
            {
              label: "B2C",
              value: "b2c",
            },
          ],
        },
      ],
    },
    {
      title: "Location",
      icon: Globe,
      fields: [
        {
          name: "location",
          label: "Location",
        },
      ],
    },
    {
      title: "Social Media & Links",
      icon: Share2,
      fields: [
        {
          name: "angellist",
          label: "AngelList",
        },
        {
          name: "facebook",
          label: "Facebook",
        },
        {
          name: "instagram",
          label: "Instagram",
        },
        {
          name: "linkedin",
          label: "LinkedIn",
        },
        {
          name: "twitter",
          label: "Twitter",
        },
      ],
    },
    {
      title: "Company Metrics",
      icon: TrendingUp,
      fields: [
        {
          name: "arr",
          label: "Estimated ARR",
        },
        {
          name: "funding",
          label: "Funding raised",
        },
        {
          name: "founded_date",
          label: "Foundation date",
        },
        {
          name: "employee_range",
          label: "Employee range",
        },
      ],
    },
    {
      title: "Additional Information",
      icon: RefreshCcw,
      fields: [
        {
          name: "workspaces",
          label: "Associated workspaces",
        },
      ],
    },
  ];

  const handleInputChange = (name: string, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-32">
      <div className="container">
        <div className={cn("flex w-full flex-col gap-8", className)}>
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
            <p className="text-sm text-muted-foreground">
              Fill in the details to create a new company profile
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            autoComplete="off"
            className="flex flex-col gap-8 rounded-lg border bg-muted/50 p-8 shadow-sm"
          >
            {FIELD_SECTIONS.map((section, sectionIndex) => (
              <div
                key={`section-${sectionIndex}`}
                className={cn(
                  "flex flex-col gap-4",
                  sectionIndex !== FIELD_SECTIONS.length - 1 && "border-b pb-8",
                )}
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex size-8 items-center justify-center rounded-md bg-background">
                    <section.icon className="size-4 text-muted-foreground" />
                  </div>
                  <h2 className="text-lg font-semibold tracking-tight">
                    {section.title}
                  </h2>
                </div>
                <div className="grid gap-x-4 gap-y-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                  {section.fields.map((field, i) => {
                    const isCombobox = field.type === "combobox";
                    const isTags = field.type === "tags";

                    return (
                      <div
                        key={`companies-create-1-field-${i}-${field.name}`}
                        className="relative flex w-full flex-col gap-2.5 sm:max-w-xs"
                      >
                        <Label
                          htmlFor={field.name}
                          className="text-sm font-medium text-foreground"
                        >
                          {field.label}
                          {field.required && (
                            <span className="ml-1 text-destructive">*</span>
                          )}
                        </Label>
                        {isCombobox && field.options ? (
                          <FormCombobox
                            name={field.name}
                            value={(formData[field.name] as string) || ""}
                            onChange={(value) =>
                              handleInputChange(field.name, value)
                            }
                            options={field.options}
                            searchPlaceholder={field.searchPlaceholder}
                            emptyMessage={field.emptyMessage}
                            required={field.required}
                          />
                        ) : isTags && field.options ? (
                          <FormTags
                            name={field.name}
                            value={(formData[field.name] as string[]) || []}
                            onChange={(value) =>
                              handleInputChange(field.name, value)
                            }
                            options={field.options}
                            searchPlaceholder={field.searchPlaceholder}
                            emptyMessage={field.emptyMessage}
                            required={field.required}
                          />
                        ) : (
                          <Input
                            id={field.name}
                            name={field.name}
                            value={(formData[field.name] as string) || ""}
                            onChange={(e) =>
                              handleInputChange(field.name, e.target.value)
                            }
                            required={field.required}
                            className="bg-background"
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
            <div className="flex items-center justify-end gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                className="tracking-tight"
              >
                Cancel
              </Button>
              <Button type="submit" className="tracking-tight">
                Continue
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export { CompaniesCreate1 };

```
