# Form 18

## Metadata
- **Category**: Form
- **Objective**: General Form
- **Use Case**: Visual Form browsing.
- **Visual Style**: Clean layout.
- **Interactivity**: Primary actions.

## Description
A versatile data collection component for user accounts, profiles, and configuration with varied input patterns.

## Source Code
```tsx
"use client";

import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Input,
  Label,
  Button,
} from '@/components/ui';
import type { ButtonProps } from '@/components/ui';
import { Mail } from 'lucide-react';

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
};

export type Form18Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Form18 = (props: Form18Props) => {
  const { heading, description, buttons } = {
    ...Form18Defaults,
    ...props,
  };

  const [fullNameInput, setFullNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [companyNameInput, setCompanyNameInput] = useState("");
  const [employees, setEmployees] = useState("");
  const [jobTitleInput, setJobTitleInput] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [aboutUsInput, setAboutUsInput] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      fullNameInput,
      jobTitleInput,
      aboutUsInput,
      emailInput,
      companyNameInput,
      employees,
      employmentType,
    });
  };

  const selectItems = [
    { value: "first-choice", label: "First Choice" },
    { value: "second-choice", label: "Second Choice" },
    { value: "third-choice", label: "Third Choice" },
  ];
  const employeesData = [
    {
      label: "Just me",
      value: "1",
    },
    {
      label: "2-10",
      value: "2-10",
    },
    {
      label: "11-50",
      value: "11-50",
    },
    {
      label: "51-100",
      value: "51-100",
    },
    {
      label: "101-500",
      value: "101-500",
    },
    {
      label: "501+",
      value: "501+",
    },
  ];
  const employmentTypeData = [
    {
      label: "Part-time",
      value: "part-time",
    },
    {
      label: "Full-time",
      value: "full-time",
    },
    {
      label: "Contract",
      value: "contract",
    },
  ];

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 border-b border-b-border-primary pb-5 sm:grid-cols-[1fr_max-content] sm:items-end md:pb-6">
          <div>
            <h1 className="text-xl font-bold md:text-2xl">{heading}</h1>
            <p className="mt-2">{description}</p>
          </div>
          <div className="flex items-center justify-end gap-4">
            {buttons.map((button, index) => (
              <Button key={index} {...button}>
                {button.title}
              </Button>
            ))}
          </div>
        </div>
        <div className="grid items-start gap-x-12 border-b border-border-primary py-6 md:grid-cols-[0.5fr_1fr] lg:grid-cols-[0.75fr_1fr]">
          <Label htmlFor="fullName" className="mb-2">
            Full name
          </Label>
          <div className="w-full max-w-md">
            <Input
              type="text"
              id="fullName"
              value={fullNameInput}
              onChange={(e) => setFullNameInput(e.target.value)}
              placeholder="Full name"
            />
          </div>
        </div>
        <div className="grid items-start gap-x-12 border-b border-border-primary py-6 md:grid-cols-[0.5fr_1fr] lg:grid-cols-[0.75fr_1fr]">
          <Label htmlFor="email" className="mb-2">
            Email address
          </Label>
          <div className="w-full max-w-md">
            <Input
              type="email"
              id="email"
              value={emailInput}
              icon={<Mail className="size-6" />}
              placeholder="hello@vibecoding.io"
              onChange={(e) => setEmailInput(e.target.value)}
            />
          </div>
        </div>
        <div className="grid items-start gap-x-12 border-b border-border-primary py-6 md:grid-cols-[0.5fr_1fr] lg:grid-cols-[0.75fr_1fr]">
          <Label htmlFor="companyName" className="mb-2">
            What is your company name?
          </Label>
          <div className="w-full max-w-md">
            <Input
              type="text"
              id="companyName"
              value={companyNameInput}
              onChange={(e) => setCompanyNameInput(e.target.value)}
              placeholder="e.g. vibecoding"
            />
          </div>
        </div>
        <div className="grid items-start gap-x-12 border-b border-border-primary py-6 md:grid-cols-[0.5fr_1fr] lg:grid-cols-[0.75fr_1fr]">
          <Label className="mb-2">How many people are you working with?</Label>
          <div className="flex flex-wrap gap-4">
            {employeesData.map((item, index) => {
              return (
                <Button
                  key={index}
                  type="button"
 className="px-4 py-2"
                  variant={employees === item.value ? "primary" : "secondary"}
                  onClick={() => setEmployees(item.value)}
>
                  {item.label}
                </Button>
              );
            })}
          </div>
        </div>
        <div className="grid items-start gap-x-12 border-b border-border-primary py-6 md:grid-cols-[0.5fr_1fr] lg:grid-cols-[0.75fr_1fr]">
          <Label htmlFor="jobTitle" className="mb-2">
            Current job title
          </Label>
          <div className="w-full max-w-md">
            <Input
              type="text"
              id="jobTitle"
              value={jobTitleInput}
              onChange={(e) => setJobTitleInput(e.target.value)}
              placeholder="e.g. Product designer"
            />
          </div>
        </div>
        <div className="grid items-start gap-x-12 border-b border-border-primary py-6 md:grid-cols-[0.5fr_1fr] lg:grid-cols-[0.75fr_1fr]">
          <Label className="mb-2">Employment type</Label>
          <div className="flex flex-wrap gap-4">
            {employmentTypeData.map((item, index) => {
              return (
                <Button
                  key={index}
                  type="button"
 className="px-4 py-2"
                  variant={employmentType === item.value ? "primary" : "secondary"}
                  onClick={() => setEmploymentType(item.value)}
>
                  {item.label}
                </Button>
              );
            })}
          </div>
        </div>
        <div className="grid items-start gap-x-12 border-b border-border-primary py-6 md:grid-cols-[0.5fr_1fr] lg:grid-cols-[0.75fr_1fr]">
          <Label className="mb-2">How did you hear about us?</Label>
          <div className="w-full max-w-md">
            <Select onValueChange={setAboutUsInput}>
              <SelectTrigger>
                <SelectValue placeholder="Select one..." />
              </SelectTrigger>
              <SelectContent>
                {selectItems.map((item, index) => (
                  <SelectItem key={index} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="mt-5 flex items-center justify-end gap-4 md:mt-6">
          {buttons.map((button, index) => (
            <Button key={index} {...button}>
              {button.title}
            </Button>
          ))}
        </div>
      </form>
    </section>
  );
};

export const Form18Defaults: Props = {
  heading: "Welcome to vibecoding",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  buttons: [
    { title: "Back", variant: "secondary", size: "sm" },
    { title: "Get started", size: "sm" },
  ],
};

Form18.displayName = 'Form18';
```

