# Companies Create 3

## Metadata
- **Category**: CRUD
- **Objective**: Company creation form with modal dialog and comprehensive field management.
- **Use Case**: Company profile creation using modal dialog interface with advanced form controls.
- **Visual Style**: Modal dialog layout with organized form sections.
- **Interactivity**: Modal dialog management, form validation, combobox selection, and tags management.

## Description
A company creation interface featuring a modal dialog with comprehensive form fields for company profile creation. Includes advanced form controls like combobox dropdowns and multi-select tags within a clean modal interface.

## Features
- Modal dialog interface for form presentation
- Comprehensive form field organization
- Advanced combobox dropdown with search
- Multi-select tags component with filtering
- Form validation with required field indicators
- Professional modal styling with proper spacing
- Icon-organized field layout
- Responsive form design
- Proper form submission handling
- Clean modal header and content structure

## Source Code
```tsx
"use client";

import {
  Building2,
  Calendar,
  Check,
  ChevronsUpDown,
  Coins,
  Facebook,
  FileText,
  Instagram,
  Link,
  Linkedin,
  MapPin,
  Tag,
  TrendingUp,
  Twitter,
  User,
  Users,
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ComboboxOption {
  label: string;
  value: string;
}

interface FormComboboxProps {
  value: string;
  onChange: (value: string) => void;
  options: ComboboxOption[];
  name?: string;
  placeholder?: string;
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
  placeholder = "Select an option...",
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
            placeholder={placeholder}
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
                      "mr-2 size-4",
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

interface CompaniesCreate3Props {
  title?: string;
  className?: string;
}

const CompaniesCreate3 = ({
  title = "Add company",
  className,
}: CompaniesCreate3Props) => {
  const [formData, setFormData] = useState<Record<string, string | string[]>>(
    {},
  );
  const [open, setOpen] = useState(false);

  const companies = [
    {
      id: 1,
      name: "Acme Corp",
      description: "Leading provider of innovative solutions",
      location: "San Francisco, CA",
    },
    {
      id: 2,
      name: "TechStart Inc",
      description: "Cutting-edge technology company",
      location: "New York, NY",
    },
  ];

  const FIELDS = [
    {
      label: "Company name",
      name: "name",
      placeholder: "shadcnblocks",
      icon: Building2,
      required: true,
    },
    {
      label: "Description",
      name: "description",
      placeholder: "Description...",
      icon: FileText,
    },
    {
      label: "Team",
      name: "team",
      placeholder: "Select Team Member...",
      icon: User,
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
      label: "Categories",
      name: "categories",
      placeholder: "Categories...",
      icon: Tag,
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
    {
      label: "Location",
      name: "location",
      placeholder: "Location...",
      icon: MapPin,
    },
    {
      label: "AngelList",
      name: "angellist",
      placeholder: "AngelList...",
      icon: Link,
    },
    {
      label: "Facebook",
      name: "facebook",
      placeholder: "Facebook...",
      icon: Facebook,
    },
    {
      label: "Instagram",
      name: "instagram",
      placeholder: "Instagram...",
      icon: Instagram,
    },
    {
      label: "LinkedIn",
      name: "linkedin",
      placeholder: "LinkedIn...",
      icon: Linkedin,
    },
    {
      label: "Twitter",
      name: "twitter",
      placeholder: "Twitter...",
      icon: Twitter,
    },
    {
      label: "Estimated ARR",
      name: "arr",
      placeholder: "Estimated ARR...",
      icon: TrendingUp,
    },
    {
      label: "Funding raised",
      name: "funding",
      placeholder: "Funding raised...",
      icon: Coins,
    },
    {
      label: "Foundation date",
      name: "founded_date",
      placeholder: "Foundation date...",
      icon: Calendar,
    },
    {
      label: "Employee range",
      name: "employee_range",
      placeholder: "Employee range...",
      icon: Users,
    },
  ];

  const handleInputChange = (name: string, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="relative min-h-screen">
      <div className="container py-32">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold tracking-tight">Companies</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Manage your company database
          </p>
        </div>
        <div className="mb-6 overflow-hidden rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Location</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {companies.map((company) => (
                <TableRow key={company.id}>
                  <TableCell className="font-medium">{company.name}</TableCell>
                  <TableCell>{company.description}</TableCell>
                  <TableCell>{company.location}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>Create Company</Button>
          </DialogTrigger>
          <DialogContent
            className={cn(
              "max-h-[90vh] max-w-2xl overflow-y-auto bg-muted",
              className,
            )}
          >
            <DialogHeader>
              <DialogTitle className="text-2xl font-semibold">
                {title}
              </DialogTitle>
              <DialogDescription>
                Add a new company to your database
              </DialogDescription>
            </DialogHeader>
            <form
              autoComplete="off"
              className="flex flex-col gap-2 pt-4"
              onSubmit={(e) => {
                e.preventDefault();
                setOpen(false);
              }}
            >
              {FIELDS.map((field, i) => {
                const isCombobox = field.type === "combobox";
                const isTags = field.type === "tags";

                return (
                  <div
                    key={`companies-create-3-field-${i}-${field.label}`}
                    className="relative grid w-full grid-cols-4 gap-4"
                  >
                    <div className="col-span-2 flex h-full items-center gap-2 text-foreground/80 sm:col-span-1">
                      <field.icon className="size-4 shrink-0" />
                      <Label
                        htmlFor={field.name}
                        className={cn(
                          "min-w-0 truncate leading-loose",
                          field.required &&
                            "after:-translate-x-1 after:text-red-500 after:content-['*']",
                        )}
                      >
                        {field.label}
                      </Label>
                    </div>

                    <div className="col-span-2 shrink-0 sm:col-span-3">
                      {isCombobox && field.options ? (
                        <FormCombobox
                          name={field.name}
                          value={(formData[field.name] as string) || ""}
                          onChange={(value) =>
                            handleInputChange(field.name, value)
                          }
                          options={field.options}
                          placeholder={field.placeholder}
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
                          name={field.name}
                          placeholder={field.placeholder}
                          value={(formData[field.name] as string) || ""}
                          onChange={(e) =>
                            handleInputChange(field.name, e.target.value)
                          }
                          required={field.required}
                          className="bg-background"
                        />
                      )}
                    </div>
                  </div>
                );
              })}
              <div className="mt-6 flex justify-end gap-3 border-t pt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit">Add</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export { CompaniesCreate3 };

```
