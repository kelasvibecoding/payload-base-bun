# Form 2

## Metadata
- **Category**: Form
- **Objective**: Vertical Field Grid
- **Use Case**: Detailed information gathering.
- **Visual Style**: 2-column inline fields.
- **Interactivity**: Input validation.

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
  Textarea,
} from '@/components/ui';
import type { ButtonProps } from '@/components/ui';
import { Mail } from 'lucide-react';
import { GoEye } from 'lucide-react';

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type Form2Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Form2 = (props: Form2Props) => {
  const { heading, description, buttons, image } = {
    ...Form2Defaults,
    ...props,
  };

  const [photoInput, setPhotoInput] = useState("");
  const [userNameInput, setUserNameInput] = useState("");
  const [websiteInput, setWebsiteInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [aboutInput, setAboutInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [newPasswordInput, setNewPasswordInput] = useState("");
  const [languageInput, setLanguageInput] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      photoInput,
      userNameInput,
      websiteInput,
      emailInput,
      aboutInput,
      passwordInput,
      newPasswordInput,
      languageInput,
    });
  };

  const selectItems = [
    { value: "first-choice", label: "First Choice" },
    { value: "second-choice", label: "Second Choice" },
    { value: "third-choice", label: "Third Choice" },
  ];

  return (
    <section>
      <div className="grid items-end justify-items-end gap-6 border-b border-border-primary pb-5 sm:grid-cols-[1fr_max-content] sm:justify-items-start md:pb-6">
        <div className="w-full max-w-lg">
          <h2 className="text-xl font-bold md:text-2xl">{heading}</h2>
          <p className="mt-2">{description}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {buttons.map((button, index) => (
            <Button key={index} {...button}>
              {button.title}
            </Button>
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid items-start gap-x-12 border-b border-border-primary py-6 md:grid-cols-[0.5fr_1fr] lg:grid-cols-[0.75fr_1fr]">
          <Label className="mb-2">Photo</Label>
          <div className="flex items-center gap-6">
            <div className="size-20 shrink-0 overflow-hidden rounded-full">
              <img src={image.src} alt={image.alt} />
            </div>
            <Label
              htmlFor="photo"
 className="cursor-pointer border border-border-primary px-5 py-2"
>
              Upload photo
              <input
                id="photo"
                type="file"
 className="hidden"
                value={photoInput}
                onChange={(e) => setPhotoInput(e.target.value)}
              />
            </Label>
          </div>
        </div>
        <div className="grid items-start gap-x-12 border-b border-border-primary py-6 md:grid-cols-[0.5fr_1fr] lg:grid-cols-[0.75fr_1fr]">
          <Label htmlFor="userName" className="mb-2">
            Username
          </Label>
          <div className="w-full max-w-md">
            <Input
              type="text"
              id="userName"
              value={userNameInput}
              onChange={(e) => setUserNameInput(e.target.value)}
            />
          </div>
        </div>
        <div className="grid items-start gap-x-12 border-b border-border-primary py-6 md:grid-cols-[0.5fr_1fr] lg:grid-cols-[0.75fr_1fr]">
          <Label htmlFor="website" className="mb-2">
            Website
          </Label>
          <div className="w-full max-w-md">
            <Input
              type="text"
              id="website"
              placeholder="www.vibecoding.io"
              prefix="http://"
              value={websiteInput}
              onChange={(e) => setWebsiteInput(e.target.value)}
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
              icon={<Mail className="size-6" />}
              placeholder="hello@vibecoding.io"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
            />
          </div>
        </div>
        <div className="grid items-start gap-x-12 border-b border-border-primary py-6 md:grid-cols-[0.5fr_1fr] lg:grid-cols-[0.75fr_1fr]">
          <Label htmlFor="about" className="mb-2">
            About
          </Label>
          <div className="w-full max-w-md">
            <Textarea
              id="about"
              placeholder="Type your message..."
              maxLength={263}
 className="h-auto min-h-[11.25rem] p-3"
              value={aboutInput}
              onChange={(e) => setAboutInput(e.target.value)}
            />
            <p className="mt-2 text-sm">263 characters left</p>
          </div>
        </div>
        <div className="grid items-start gap-x-12 border-b border-border-primary py-6 md:grid-cols-[0.5fr_1fr] lg:grid-cols-[0.75fr_1fr]">
          <Label htmlFor="password" className="mb-2">
            Password
          </Label>
          <div className="flex w-full max-w-md flex-col space-y-4">
            <Input
              type="password"
              id="password"
              placeholder="Current password"
              icon={<GoEye className="size-5" />}
              iconPosition="right"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
            />
            <Input
              type="password"
              id="newPassword"
              placeholder="New password"
              icon={<GoEye className="size-5" />}
              iconPosition="right"
              value={newPasswordInput}
              onChange={(e) => setNewPasswordInput(e.target.value)}
            />
          </div>
        </div>
        <div className="grid items-start gap-x-12 border-b border-border-primary py-6 md:grid-cols-[0.5fr_1fr] lg:grid-cols-[0.75fr_1fr]">
          <Label className="mb-2">Language</Label>
          <Select onValueChange={setLanguageInput}>
            <SelectTrigger className="w-full max-w-md">
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
        <div className="mt-8 flex items-center justify-end gap-4 md:mt-10 lg:mt-12">
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

export const Form2Defaults: Props = {
  heading: "Account",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  buttons: [
    { title: "Cancel", variant: "secondary", size: "sm" },
    { title: "Save", size: "sm" },
  ],
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg",
    alt: "vibecoding placeholder image",
  },
};

Form2.displayName = 'Form2';
```

