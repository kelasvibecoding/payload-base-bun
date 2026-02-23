# Companies Create 4

## Metadata
- **Category**: CRUD
- **Objective**: Minimal company creation form with dialog modal and file upload.
- **Use Case**: Quick company profile creation with essential fields and logo upload capability.
- **Visual Style**: Clean dialog modal with minimal form fields and file upload.
- **Interactivity**: Dialog modal management, file upload, and basic form handling.

## Description
A streamlined company creation interface featuring a minimal dialog modal with essential company fields including description, email, phone, website, and logo upload functionality. Designed for quick and simple company profile creation.

## Features
- Minimal dialog modal interface
- Essential company fields only
- File upload for company logo
- Basic form validation
- Clean and simple form layout
- Professional dialog styling
- Responsive modal design
- Logo preview functionality
- Form field organization with icons
- Streamlined user experience

## Source Code
```tsx
"use client";

import { AlignLeft, Globe, Mail, MapPin, Phone, Plus } from "lucide-react";
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

interface CompaniesCreate4Props {
  className?: string;
}

const CompaniesCreate4 = ({ className }: CompaniesCreate4Props) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [logo, setLogo] = useState<File | null>(null);
  const logoInputRef = useRef<HTMLInputElement>(null);

  const FIELDS = [
    {
      label: "Description",
      name: "description",
      placeholder: "Description...",
      icon: AlignLeft,
      type: "text",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "hi@yourcompany.com",
      icon: Mail,
      required: true,
    },
    {
      label: "Phone",
      name: "phone",
      type: "tel",
      placeholder: "+123 456 7890",
      icon: Phone,
    },
    {
      label: "Address",
      name: "address",
      type: "text",
      placeholder: "123 Main St, Anytown, USA",
      icon: MapPin,
    },
    {
      label: "Website",
      name: "website",
      type: "url",
      placeholder: "https://yourcompany.com",
      icon: Globe,
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
              "w-full rounded-lg bg-background p-0 sm:max-w-md",
              className,
            )}
          >
            <DialogTitle className="hidden">Create Company</DialogTitle>
            <form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-4 p-4 !pb-0 sm:flex-row sm:items-center">
                <input
                  ref={logoInputRef}
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => setLogo(e.target.files?.[0] || null)}
                />
                <div
                  role="input"
                  tabIndex={0}
                  onClick={() => logoInputRef.current?.click()}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      logoInputRef.current?.click();
                    }
                  }}
                  className="flex size-26 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-md border text-muted-foreground sm:size-16"
                >
                  {!logo ? (
                    <Plus className="size-8 sm:size-6" />
                  ) : (
                    <img
                      src={URL.createObjectURL(logo)}
                      alt="Logo"
                      className="size-full object-cover"
                    />
                  )}
                </div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Company"
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                  className={cn(
                    "h-auto rounded-none border-x-0 border-t-0 !bg-transparent p-0 py-1.5 shadow-none !ring-0 !outline-none focus:border-b sm:border-b-transparent sm:!text-xl sm:focus:!border-input/70",
                  )}
                />
              </div>
              <div className="flex flex-col gap-4 p-4">
                {FIELDS.map((field, i) => {
                  return (
                    <div
                      key={`companies-create-1-field-${i}-${field.label}`}
                      className="relative grid w-full gap-1"
                    >
                      <div className="flex h-full items-center gap-2 text-foreground/80">
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

                      <div className="shrink-0">
                        <Input
                          name={field.name}
                          placeholder={field.placeholder}
                          value={formData[field.name] || ""}
                          onChange={(e) =>
                            handleInputChange(field.name, e.target.value)
                          }
                          type={field.type}
                          required={field.required}
                          className={cn(
                            "h-auto rounded-none border-x-0 border-t-0 !bg-transparent p-0 py-1.5 shadow-none !ring-0 !outline-none focus:border-b sm:border-b-transparent sm:focus:!border-input/70",
                          )}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex w-full p-4 sm:justify-end sm:border-t">
                <Button type="submit">Create</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export { CompaniesCreate4 };

```
