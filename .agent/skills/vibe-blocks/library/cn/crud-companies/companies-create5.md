# Companies Create 5

## Metadata
- **Category**: CRUD
- **Objective**: Company creation form with file upload and image preview functionality.
- **Use Case**: Company profile creation with logo upload and visual preview capabilities.
- **Visual Style**: Dialog modal with file upload area and image preview.
- **Interactivity**: File upload handling, image preview, and form validation.

## Description
A company creation interface featuring a dialog modal with file upload functionality for company logos. Includes image preview capabilities and a clean form layout designed for visual company profile creation.

## Features
- File upload component with drag-and-drop support
- Image preview functionality
- Dialog modal interface
- Clean form field organization
- Professional file input styling
- Responsive modal design
- Visual feedback for uploaded files
- Form validation support
- User-friendly file selection interface
- Proper image handling and display

## Source Code
```tsx
"use client";

import { Plus } from "lucide-react";
import { useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FileInputProps {
  onChange?: (file: File | null) => void;
  value?: File | null;
  alt?: string;
  className?: string;
}

const FileInput = ({
  onChange,
  value,
  alt,
  className,
  ...props
}: FileInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        accept="image/*"
        onChange={(e) => onChange?.(e.target.files?.[0] || null)}
        {...props}
      />
      <div
        role="input"
        tabIndex={0}
        onClick={() => inputRef.current?.click()}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            inputRef.current?.click();
          }
        }}
        className={cn(
          "flex size-26 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-md border text-muted-foreground shadow-xs sm:size-34",
          className,
        )}
      >
        {!value ? (
          <Plus />
        ) : (
          <img
            src={URL.createObjectURL(value)}
            alt={alt}
            className="size-full object-cover"
          />
        )}
      </div>
    </>
  );
};

interface CompaniesCreate5Props {
  className?: string;
  title?: string;
}

const CompaniesCreate5 = ({
  className,
  title = "Create Company Profile",
}: CompaniesCreate5Props) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [logo, setLogo] = useState<File | null>(null);

  const FIELDS = [
    {
      label: "Phone",
      name: "phone",
      type: "tel",
      placeholder: "+123 456 7890",
    },
    {
      label: "Address",
      name: "address",
      type: "text",
      placeholder: "123 Main St, Anytown, USA",
    },
    {
      label: "Website",
      name: "website",
      type: "url",
      placeholder: "https://yourcompany.com",
    },
  ];

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-32">
      <div className="container flex justify-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Create Company</Button>
          </DialogTrigger>
          <DialogContent
            showCloseButton={false}
            className={cn(
              "w-full rounded-lg bg-background p-0 md:max-w-3xl",
              className,
            )}
          >
            <DialogTitle className="px-6 pt-6">{title}</DialogTitle>
            <form
              autoComplete="off"
              onSubmit={(e) => e.preventDefault()}
              className="mt-2"
            >
              <div className="flex flex-col gap-6 px-6 md:flex-row md:items-center">
                <FileInput
                  onChange={(file) => setLogo(file)}
                  value={logo}
                  alt="Logo"
                />
                <div className="grid w-full gap-x-6 gap-y-4 md:grid-cols-2">
                  <div className="relative grid w-full gap-2">
                    <div className="flex h-full items-center gap-2 text-foreground/80">
                      <Label
                        htmlFor="name"
                        className={cn(
                          "min-w-0 truncate",
                          "after:-translate-x-1 after:text-red-500 after:content-['*']",
                        )}
                      >
                        Name
                      </Label>
                    </div>
                    <Input
                      name="name"
                      placeholder="Your Company"
                      value={formData["name"] || ""}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      type="text"
                      required={true}
                      className="!bg-transparent"
                    />
                  </div>
                  <div className="relative grid w-full gap-2">
                    <div className="flex h-full items-center gap-2 text-foreground/80">
                      <Label
                        htmlFor="email"
                        className={cn(
                          "min-w-0 truncate",
                          "after:-translate-x-1 after:text-red-500 after:content-['*']",
                        )}
                      >
                        Email
                      </Label>
                    </div>
                    <Input
                      name="email"
                      placeholder="hi@yourcompany.com"
                      value={formData["email"] || ""}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      type="email"
                      required={true}
                      className="!bg-transparent"
                    />
                  </div>
                  <div className="relative grid w-full gap-2 md:col-span-2">
                    <div className="flex h-full items-center gap-2 text-foreground/80">
                      <Label htmlFor="description" className="min-w-0 truncate">
                        Description
                      </Label>
                    </div>
                    <Input
                      name="description"
                      placeholder="Description..."
                      value={formData["description"] || ""}
                      onChange={(e) =>
                        handleInputChange("description", e.target.value)
                      }
                      type="text"
                      className="!bg-transparent"
                    />
                  </div>
                </div>
              </div>
              <div className="grid gap-6 px-6 pt-4 pb-8 md:grid-cols-3">
                {FIELDS.map((field, i) => {
                  return (
                    <div
                      key={`companies-create-5-field-${i}-${field.label}`}
                      className="relative grid w-full gap-2"
                    >
                      <div className="flex h-full items-center gap-2 text-foreground/80">
                        <Label
                          htmlFor={field.name}
                          className="min-w-0 truncate"
                        >
                          {field.label}
                        </Label>
                      </div>
                      <Input
                        name={field.name}
                        placeholder={field.placeholder}
                        value={formData[field.name] || ""}
                        onChange={(e) =>
                          handleInputChange(field.name, e.target.value)
                        }
                        type={field.type}
                        className="!bg-transparent"
                      />
                    </div>
                  );
                })}
              </div>
              <div className="flex w-full px-6 py-4 sm:justify-end sm:border-t">
                <Button type="submit">Create</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export { CompaniesCreate5 };

```
